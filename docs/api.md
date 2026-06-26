# API Routes Specification

All endpoints are prefixed with `/api/v1/`.

## Auth Endpoints
- `POST /auth/register`: Register new user
- `POST /auth/login`: Authenticate user and issue JWT

## Users & Profiles
- `GET /users/me`: Get current authenticated user
- `GET /profiles/:id`: Get profile by profile ID or username
- `PUT /profiles/me`: Update current user profile

## Search
- `GET /search`: Search for users, profiles, and messages

## Conversations & Messages
- `GET /conversations`: Retrieve conversation list
- `POST /conversations`: Start or fetch conversation
- `GET /conversations/:id/messages`: Retrieve messages in a conversation
- `POST /conversations/:id/messages`: Send message in a conversation

## Notifications
- `GET /notifications`: Retrieve unread/all notifications
- `PATCH /notifications/:id/read`: Mark notification as read
