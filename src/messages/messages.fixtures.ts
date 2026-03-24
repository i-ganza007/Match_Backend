/**
 * Test fixtures for message testing
 * Contains predefined test users and messages for integration/E2E tests
 */

import { Gender } from '@prisma/client';

export const TEST_USERS_FIXTURES = {
  user1: {
    name: 'Test User One',
    email: 'testuser1@messages.rw',
    phone_number: '+250799999991',
    sex: Gender.MALE,
    password: 'testpassword123',
    district: 'Kigali',
    sector: 'Gasabo',
    village: 'Test Village 1',
    cell: 'Test Cell 1',
    latitude: '30.0573',
    longitude: '-1.9536',
  },
  user2: {
    name: 'Test User Two',
    email: 'testuser2@messages.rw',
    phone_number: '+250799999992',
    sex: Gender.FEMALE,
    password: 'testpassword123',
    district: 'Kigali',
    sector: 'Kicukiro',
    village: 'Test Village 2',
    cell: 'Test Cell 2',
    latitude: '30.1028',
    longitude: '-1.9731',
  },
};

export const TEST_MESSAGES_FIXTURES = {
  textMessage: {
    content: 'Hello! This is a test message for livestock breeding discussions.',
    messageType: 'TEXT' as const,
  },
  imageMessage: {
    content: 'https://example.com/livestock.jpg',
    messageType: 'IMAGE' as const,
  },
  fileMessage: {
    content: 'https://example.com/breeding-records.pdf',
    messageType: 'FILE' as const,
  },
};

export const TEST_MESSAGE_SCENARIOS = {
  /**
   * Scenario: User 1 sends a message to User 2
   */
  singleMessage: {
    sender: TEST_USERS_FIXTURES.user1,
    receiver: TEST_USERS_FIXTURES.user2,
    message: TEST_MESSAGES_FIXTURES.textMessage,
  },

  /**
   * Scenario: Bi-directional conversation between two users
   */
  conversation: [
    {
      sender: TEST_USERS_FIXTURES.user1,
      receiver: TEST_USERS_FIXTURES.user2,
      content: 'Hi! Are you interested in breeding your Jersey cow with my Friesian bull?',
      delay: 0,
    },
    {
      sender: TEST_USERS_FIXTURES.user2,
      receiver: TEST_USERS_FIXTURES.user1,
      content: 'That sounds great! What are the genetics like?',
      delay: 1000, // 1 second delay
    },
    {
      sender: TEST_USERS_FIXTURES.user1,
      receiver: TEST_USERS_FIXTURES.user2,
      content: 'Excellent milk yield. Can we arrange a meetup next week?',
      delay: 2000, // 2 seconds delay
    },
    {
      sender: TEST_USERS_FIXTURES.user2,
      receiver: TEST_USERS_FIXTURES.user1,
      content: 'Perfect! Looking forward to it.',
      delay: 3000, // 3 seconds delay
    },
  ],
};
