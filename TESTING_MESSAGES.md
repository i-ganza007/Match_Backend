# Testing Messages Setup

This document explains how to set up and use the test users for message testing.

## Quick Start

### 1. Create Test Users

Run the test user seeding script:

```bash
npm run seed:test-users
```

This will create two test users in your database:

**User 1:**
- Name: Test User One
- Email: `testuser1@messages.rw`
- Phone: `+250799999991`
- Password: `testpassword123`

**User 2:**
- Name: Test User Two
- Email: `testuser2@messages.rw`
- Phone: `+250799999992`
- Password: `testpassword123`

### 2. Authenticate Test Users

#### Using Email & Password (Auth Service)

```bash
# Sign in User 1
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "testuser1@messages.rw",
    "password": "testpassword123"
  }'

# Sign in User 2
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "testuser2@messages.rw",
    "password": "testpassword123"
  }'
```

This returns tokens like:
```json
{
  "access_token": "eyJhbGc...",
  "user_Id": "user-uuid-here"
}
```

### 3. Send Messages via WebSocket

Connect to the WebSocket gateway with the JWT token:

```javascript
import io from 'socket.io-client';

const token = "your-access-token-from-login";
const socket = io('http://localhost:8000', {
  auth: {
    user_token: token
  },
  transports: ['websocket']
});

socket.on('connect', () => {
  console.log('Connected!');
  
  // Send a message to User 2
  socket.emit('sendMessage', {
    message: 'Hello! How are you?',
    userTo: 'user2-id-here'
  });
});

socket.on('receiveMessage', (data) => {
  console.log('Message received:', data);
});
```

### 4. Query Messages via REST API (if available)

```bash
# Get messages between two users
curl -X GET "http://localhost:3000/messages?senderId=user1-id&receiverId=user2-id" \
  -H "Authorization: Bearer your-access-token"
```

## Test Fixtures

Test fixtures are defined in `src/messages/messages.fixtures.ts` and include:

- **TEST_USERS_FIXTURES**: Pre-defined test user data
- **TEST_MESSAGES_FIXTURES**: Sample message formats (text, image, file)
- **TEST_MESSAGE_SCENARIOS**: Common conversation patterns for testing

### Usage in Tests

```typescript
import { TEST_USERS_FIXTURES, TEST_MESSAGE_SCENARIOS } from './messages.fixtures';

describe('Messages Integration', () => {
  it('should send a message between two users', async () => {
    const { user1, user2 } = TEST_USERS_FIXTURES;
    const scenario = TEST_MESSAGE_SCENARIOS.singleMessage;
    
    // Your test code here
  });

  it('should handle a bi-directional conversation', async () => {
    const conversation = TEST_MESSAGE_SCENARIOS.conversation;
    
    for (const msg of conversation) {
      // Send each message with delay
    }
  });
});
```

## Database Cleanup

To remove test users from the database:

```sql
DELETE FROM "Messages" WHERE "senderId" IN (
  SELECT "userId" FROM "Users" WHERE "email" LIKE '%@messages.rw'
);

DELETE FROM "Users" WHERE "email" LIKE '%@messages.rw';
```

Or use Prisma:

```bash
npx prisma studio
# Then manually find and delete the test users
```

## Troubleshooting

### "User not found" error

Ensure you ran `npm run seed:test-users` first.

### WebSocket connection fails

1. Verify the token is valid (not expired)
2. Check that the WebSocket gateway is running on port 8000
3. Ensure the auth token is passed correctly in the `auth` object

### Messages not persisting

1. Check that the `Messages` table exists in the database
2. Verify both sender and receiver user IDs are valid
3. Check the database logs for any errors

## Message Status Flow

Messages follow this status progression:

```
LOADING → SENT → DELIVERED → READ
```

Or:
```
LOADING → FAILED
```

Monitor these states in your client application to provide feedback to users.

## Related Files

- Seed script: `src/prisma/seed_test_users.ts`
- Fixtures: `src/messages/messages.fixtures.ts`
- Gateway: `src/messages/messages.ts`
- Tests: `src/messages/messages.spec.ts`
