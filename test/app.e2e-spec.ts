import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('Course API (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  it('/courses (GET) - returns empty array initially', () => {
    return request(app.getHttpServer()).get('/courses').expect(200).expect([]);
  });

  it('/courses (POST) - creates course and returns 201', () => {
    return request(app.getHttpServer())
      .post('/courses')
      .send({
        title: 'Intro to HTML',
        level: 'Beginner',
        duration: '4 weeks',
      })
      .expect(201)
      .expect((res) => {
        expect(res.body).toHaveProperty('id');
        expect(res.body.title).toBe('Intro to HTML');
        expect(res.body.level).toBe('Beginner');
        expect(res.body.duration).toBe('4 weeks');
      });
  });
});
