# Course API

A NestJS backend API for course management, built for a backend internship challenge.

## Tech Stack

- **Framework:** NestJS (TypeScript)
- **Validation:** class-validator, class-transformer
- **Documentation:** Swagger/OpenAPI
- **Storage:** In-memory (no database)

## Project Structure

```
src/
├── main.ts                    # Bootstrap with ValidationPipe & Swagger
├── app.module.ts              # Root module
└── courses/
    ├── courses.module.ts      # Courses feature module
    ├── courses.controller.ts  # HTTP endpoints
    ├── courses.service.ts     # Business logic & in-memory store
    ├── courses.service.spec.ts
    ├── courses.controller.spec.ts
    ├── dto/
    │   ├── create-course.dto.ts
    │   └── update-course.dto.ts
    └── entities/
        └── course.entity.ts
test/
└── app.e2e-spec.ts            # E2E tests
```

## Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm

### Installing Dependencies

```bash
npm install
```

### Run the Application

```bash
# Development (watch mode)
npm run start:dev

# Production
npm run build
npm run start:prod
```

The API runs at `http://localhost:3000` by default.

### Swagger Documentation

Once the app is running, open **http://localhost:3000/docs** for interactive API documentation.

## API Endpoints

| Method | Endpoint          | Description           | Status Codes     |
|--------|-------------------|-----------------------|------------------|
| GET    | /courses          | List all courses      | 200 OK           |
| GET    | /courses/:id      | Get one course        | 200 OK, 404      |
| POST   | /courses          | Create a course       | 201 Created, 400 |
| PUT    | /courses/:id      | Update a course       | 200 OK, 404, 400 |
| DELETE | /courses/:id      | Delete a course       | 204 No Content, 404 |

### Request Bodies

**POST /courses** (all fields required):

```json
{
  "title": "Intro to HTML",
  "level": "Beginner",
  "duration": "4 weeks"
}
```

**PUT /courses/:id** (all fields optional):

```json
{
  "title": "Advanced HTML",
  "level": "Intermediate",
  "duration": "6 weeks"
}
```

## CLI Commands Used

```bash
# Create new NestJS project
npx @nestjs/cli new . --package-manager npm --skip-git

# Generate courses module
npx nest g module courses

# Generate courses controller (no spec)
npx nest g controller courses --no-spec

# Generate courses service (no spec)
npx nest g service courses --no-spec
```

## Run Tests

```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e

# Coverage
npm run test:cov
```

## Key Implementation Details

- **ValidationPipe** (global): `whitelist`, `forbidNonWhitelisted`, `transform` for automatic DTO validation and 400 responses on invalid input
- **ParseIntPipe** on `:id` params for automatic 400 on non-numeric IDs
- **NotFoundException** for 404 when course not found
- In-memory storage resets on server restart


