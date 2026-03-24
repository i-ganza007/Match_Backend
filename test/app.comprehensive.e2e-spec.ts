import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../app.module';

describe('Animals Controller (E2E)', () => {
  let app: INestApplication;
  let authToken: string;
  let testUserId: string;
  let testAnimalId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('POST /auth/signup', () => {
    it('should create a new user and return token', () => {
      return request(app.getHttpServer())
        .post('/auth/signup')
        .send({
          name: 'Test Farmer',
          email: 'farmer@example.com',
          phone_number: '+1234567890',
          password: 'password123',
          sex: 'MALE',
          district: 'Kigali',
          sector: 'Kicukiro',
          village: 'Test Village',
          cell: 'Test Cell',
          latitude: -1.9536,
          longitude: 30.0573,
        })
        .expect(201)
        .expect((res) => {
          expect(res.body).toHaveProperty('access_token');
          expect(res.body).toHaveProperty('user_Id');
          authToken = res.body.access_token;
          testUserId = res.body.user_Id;
        });
    });

    it('should reject signup with duplicate email', () => {
      return request(app.getHttpServer())
        .post('/auth/signup')
        .send({
          email: 'farmer@example.com',
          phone_number: '+9876543210',
          password: 'password123',
        })
        .expect(409);
    });
  });

  describe('POST /animals (Create)', () => {
    it('should create an animal with JWT auth', () => {
      return request(app.getHttpServer())
        .post('/animals')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          name: 'Bessie',
          sex: 'FEMALE',
          birthDate: '2022-01-15',
          type: 'COW',
          specie: 'HOLSTEIN_COW',
          status: 'ALIVE',
          breed_confidence: 0.95,
        })
        .expect(201)
        .expect((res) => {
          expect(res.body).toHaveProperty('animalId');
          expect(res.body.name).toBe('Bessie');
          testAnimalId = res.body.animalId;
        });
    });

    it('should reject create without auth token', () => {
      return request(app.getHttpServer())
        .post('/animals')
        .send({ name: 'Bull', type: 'COW' })
        .expect(401);
    });

    it('should create animal with file upload', () => {
      return request(app.getHttpServer())
        .post('/animals')
        .set('Authorization', `Bearer ${authToken}`)
        .field('name', 'Daisy')
        .field('sex', 'FEMALE')
        .field('type', 'COW')
        .field('specie', 'JERSEY_COW')
        .attach('photo', Buffer.from('fake image'), 'photo.jpg')
        .expect(201)
        .expect((res) => {
          expect(res.body).toHaveProperty('profilePhoto');
        });
    });
  });

  describe('GET /animals/:id', () => {
    it('should retrieve a single animal by ID', () => {
      return request(app.getHttpServer())
        .get(`/animals/${testAnimalId}`)
        .expect(200)
        .expect((res) => {
          expect(res.body.animalId).toBe(testAnimalId);
        });
    });

    it('should return 404 for non-existent animal', () => {
      return request(app.getHttpServer())
        .get('/animals/nonexistent-id')
        .expect(404);
    });
  });

  describe('GET /animals (List user animals)', () => {
    it('should return all animals of authenticated user', () => {
      return request(app.getHttpServer())
        .get('/animals')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200)
        .expect((res) => {
          expect(Array.isArray(res.body)).toBe(true);
          expect(res.body.length).toBeGreaterThan(0);
          expect(res.body[0]).toHaveProperty('ownerId', testUserId);
        });
    });

    it('should reject without auth token', () => {
      return request(app.getHttpServer())
        .get('/animals')
        .expect(401);
    });
  });

  describe('PATCH /animals/:id', () => {
    it('should update an animal', () => {
      return request(app.getHttpServer())
        .patch(`/animals/${testAnimalId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send({ name: 'Bessie Updated' })
        .expect(200)
        .expect((res) => {
          expect(res.body.name).toBe('Bessie Updated');
        });
    });
  });

  describe('PATCH /animals/:id/photo', () => {
    it('should upload profile photo for animal', () => {
      return request(app.getHttpServer())
        .patch(`/animals/${testAnimalId}/photo`)
        .set('Authorization', `Bearer ${authToken}`)
        .attach('photo', Buffer.from('new photo'), 'new-photo.jpg')
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('profilePhoto');
        });
    });

    it('should reject if no photo file provided', () => {
      return request(app.getHttpServer())
        .patch(`/animals/${testAnimalId}/photo`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(400);
    });
  });

  describe('DELETE /animals/:id', () => {
    it('should delete an animal', () => {
      return request(app.getHttpServer())
        .delete(`/animals/${testAnimalId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200)
        .expect((res) => {
          expect(res.body.animalId).toBe(testAnimalId);
        });
    });
  });

  describe('Error handling', () => {
    it('should handle invalid animal type', () => {
      return request(app.getHttpServer())
        .post('/animals')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          name: 'Invalid',
          type: 'INVALID_TYPE',
        })
        .expect(400);
    });
  });
});

describe('Recommendations Controller (E2E)', () => {
  let app: INestApplication;
  let authToken: string;
  let animalId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    // Setup: Create user and animal
    const signupRes = await request(app.getHttpServer())
      .post('/auth/signup')
      .send({
        email: 'breeder@example.com',
        phone_number: '+1111111111',
        password: 'password123',
      });

    authToken = signupRes.body.access_token;

    const animalRes = await request(app.getHttpServer())
      .post('/animals')
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        name: 'Test Animal',
        sex: 'FEMALE',
        type: 'COW',
        specie: 'HOLSTEIN_COW',
        status: 'ALIVE',
        profilePhoto: 'https://example.com/photo.jpg',
      });

    animalId = animalRes.body.animalId;
  });

  afterAll(async () => {
    await app.close();
  });

  describe('GET /recommendations?animalId=', () => {
    it('should return breeding recommendations for an animal', () => {
      return request(app.getHttpServer())
        .get(`/recommendations?animalId=${animalId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200)
        .expect((res) => {
          if (Array.isArray(res.body) && res.body.length > 0) {
            expect(res.body[0]).toHaveProperty('overall_score');
            expect(res.body[0]).toHaveProperty('recommendedAnimal');
          }
        });
    });

    it('should return 400 if animal not recommendable', async () => {
      const youngAnimal = await request(app.getHttpServer())
        .post('/animals')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          name: 'Young Animal',
          sex: 'FEMALE',
          type: 'COW',
          specie: 'HOLSTEIN_COW',
          birthDate: new Date().toISOString(),
          status: 'ALIVE',
        });

      return request(app.getHttpServer())
        .get(`/recommendations?animalId=${youngAnimal.body.animalId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(400);
    });

    it('should return 404 if animal not found', () => {
      return request(app.getHttpServer())
        .get('/recommendations?animalId=nonexistent')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);
    });
  });

  describe('PATCH /recommendations/:breedingRecId/accept', () => {
    it('should accept a breeding recommendation', async () => {
      // First get recommendations
      const recsRes = await request(app.getHttpServer())
        .get(`/recommendations?animalId=${animalId}`)
        .set('Authorization', `Bearer ${authToken}`);

      if (recsRes.body.length > 0) {
        const recId = recsRes.body[0].breedingRecId;

        return request(app.getHttpServer())
          .patch(`/recommendations/${recId}/accept`)
          .set('Authorization', `Bearer ${authToken}`)
          .expect(200)
          .expect((res) => {
            expect(res.body).toHaveProperty('user_accepted', true);
          });
      }
    });
  });
});

describe('Auth Controller (E2E)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('POST /auth/login', () => {
    it('should login with valid credentials', async () => {
      // Create user first
      const signupRes = await request(app.getHttpServer())
        .post('/auth/signup')
        .send({
          email: 'testuser@example.com',
          phone_number: '+5555555555',
          password: 'testpass123',
        });

      // Login
      return request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'testuser@example.com',
          password: 'testpass123',
        })
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('access_token');
          expect(res.body).toHaveProperty('user_Id');
        });
    });

    it('should reject login with invalid password', async () => {
      return request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'testuser@example.com',
          password: 'wrongpassword',
        })
        .expect(401);
    });

    it('should reject login for non-existent user', () => {
      return request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'nonexistent@example.com',
          password: 'password123',
        })
        .expect(404);
    });
  });

  describe('GET /auth/me', () => {
    it('should return current user info with valid token', async () => {
      const signupRes = await request(app.getHttpServer())
        .post('/auth/signup')
        .send({
          email: 'metest@example.com',
          phone_number: '+6666666666',
          password: 'password123',
        });

      return request(app.getHttpServer())
        .get('/auth/me')
        .set('Authorization', `Bearer ${signupRes.body.access_token}`)
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('userId');
          expect(res.body).toHaveProperty('email', 'metest@example.com');
        });
    });

    it('should reject without token', () => {
      return request(app.getHttpServer())
        .get('/auth/me')
        .expect(401);
    });
  });
});

describe('Redis Health Check (E2E)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('GET /redis/ping', () => {
    it('should return PONG from Redis', () => {
      return request(app.getHttpServer())
        .get('/redis/ping')
        .expect(200)
        .expect((res) => {
          expect(res.body).toEqual({ ok: true, response: 'PONG' });
        });
    });
  });
});
