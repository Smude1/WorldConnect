# Database Design

WorldConnect uses PostgreSQL. Below is the relational structure.

## Entities

### User
- `id`: UUID (Primary Key)
- `email`: String (Unique)
- `createdAt`: DateTime

### Profile
- `id`: UUID (Primary Key)
- `userId`: UUID (Foreign Key references User)
- `fullName`: String
- `avatarUrl`: String
- `bio`: String
- `location`: String

### Conversation
- `id`: UUID (Primary Key)
- `createdAt`: DateTime
- `updatedAt`: DateTime

### Message
- `id`: UUID (Primary Key)
- `conversationId`: UUID (Foreign Key references Conversation)
- `senderId`: UUID (Foreign Key references User)
- `content`: Text
- `createdAt`: DateTime

### Notification
- `id`: UUID (Primary Key)
- `recipientId`: UUID (Foreign Key references User)
- `type`: String
- `content`: String
- `isRead`: Boolean
- `createdAt`: DateTime
