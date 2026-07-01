import { Request, Response } from "express";
import { loginUser, logoutUser, refreshSession, registerUser } from "./auth.service";
import { loginSchema, refreshSessionSchema, registerSchema } from "./auth.validation";
import { ApiError } from "../../utils/ApiError";
import { ApiResponse } from "../../utils/ApiResponse";
import { asyncHandler } from "../../utils/asyncHandler";

export const register = asyncHandler(async (req: Request, res: Response) => {
	const parsed = registerSchema.safeParse(req.body);

	if (!parsed.success) {
		throw new ApiError(400, "Validation failed", parsed.error.flatten());
	}

	const user = await registerUser(parsed.data);

	return ApiResponse.success(
		res,
		{
			id: user.id,
			email: user.email,
		},
		"User registered successfully. Please verify your email.",
		201
	);
});

export const login = asyncHandler(async (req: Request, res: Response) => {
	const parsed = loginSchema.safeParse(req.body);

	if (!parsed.success) {
		throw new ApiError(400, "Validation failed", parsed.error.flatten());
	}

	const result = await loginUser(parsed.data);

	return ApiResponse.success(
		res,
		{
			user: result.user,
			session: result.session,
		},
		"Login successful",
		200
	);
});

export const getCurrentUser = asyncHandler(async (req: Request, res: Response) => {
	return ApiResponse.success(
		res,
		req.user,
		"Current user fetched successfully",
		200
	);
});

export const logout = asyncHandler(async (req: Request, res: Response) => {
	const authorization = req.headers.authorization;

	if (!authorization?.startsWith("Bearer ")) {
		throw new ApiError(401, "Authentication required");
	}

	const accessToken = authorization.replace("Bearer ", "");

	await logoutUser(accessToken);

	return ApiResponse.success(res, null, "Logged out successfully");
});

export const refresh = asyncHandler(async (req: Request, res: Response) => {
	const parsed = refreshSessionSchema.safeParse(req.body);

	if (!parsed.success) {
		throw new ApiError(400, "Validation failed", parsed.error.flatten());
	}

	const session = await refreshSession(parsed.data);

	return ApiResponse.success(res, session, "Session refreshed successfully", 200);
});
