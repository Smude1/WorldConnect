# WebSocket Events

WebSocket server runs on the same port as the backend or separate, utilizing Socket.io.

## Connection
- **URL**: `ws://localhost:5000`
- **Auth**: Query parameter or Headers `token`

## Client to Server (Emit)
- `join_room`: Join a specific conversation room
  - Payload: `{ conversationId: string }`
- `send_message`: Send a message to a conversation room
  - Payload: `{ conversationId: string, content: string }`
- `typing`: Indicate user is typing
  - Payload: `{ conversationId: string, isTyping: boolean }`

## Server to Client (On)
- `new_message`: Received when a new message is posted in an active conversation room
  - Payload: Message object
- `user_typing`: Received when another user is typing
  - Payload: `{ userId: string, isTyping: boolean }`
- `notification`: Received for realtime alerts (likes, mentions, new messages outside active chat)
  - Payload: Notification object
