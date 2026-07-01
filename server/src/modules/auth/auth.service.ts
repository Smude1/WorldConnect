import { prisma } from "../../database/prisma";
import { supabaseAdmin } from "../../config/supabase";
import { supabase } from "../../config/supabaseClient";
import { ApiError } from "../../utils/ApiError";
import { LoginDto, RefreshSessionDto, RegisterDto } from "./auth.types";

export async function registerUser(input: RegisterDto) {
	const { data, error } = await supabaseAdmin.auth.admin.createUser({
		email: input.email,
		password: input.password,
		email_confirm: true,
		user_metadata: {
			username: input.username,
			displayName: input.displayName,
		},
	});

	if (error) {
		throw new ApiError(400, error.message);
	}

	if (!data.user) {
		throw new ApiError(500, "Failed to create auth user");
	}

	try {
		await prisma.profile.create({
			data: {
				id: data.user.id,
				username: input.username,
				display_name: input.displayName,
			},
		});
	} catch (profileError) {
		const rollback = await supabaseAdmin.auth.admin.deleteUser(data.user.id);

		if (rollback.error) {
			throw new ApiError(
				500,
				`Failed to create profile and rollback auth user: ${rollback.error.message}`
			);
		}

		if (profileError instanceof ApiError) {
			throw profileError;
		}

		throw new ApiError(500, "Failed to create profile");
	}

	return data.user;
}

export async function loginUser(input: LoginDto) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email: input.email,
		password: input.password,
	});

	if (error || !data.user || !data.session) {
		throw new ApiError(401, "Invalid email or password");
	}

	return {
		user: data.user,
		session: data.session,
	};
}

export async function logoutUser(accessToken: string) {
	const { error } = await (supabaseAdmin.auth as any).signOut(accessToken, "local");

	if (error) {
		throw new ApiError(500, "Failed to logout");
	}

	return true;
}

export async function refreshSession(input: RefreshSessionDto) {
	const { data, error } = await (supabaseAdmin.auth as any).refreshSession({
		refresh_token: input.refreshToken,
	});

	if (error || !data?.session) {
		throw new ApiError(401, "Invalid or expired refresh token");
	}

	return data.session;
}
