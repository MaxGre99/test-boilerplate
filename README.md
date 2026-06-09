# Test Boilerplate

NestJS приложение с PostgreSQL (TypeORM) и MongoDB (Mongoose).

## Стек

- **NestJS** — фреймворк
- **PostgreSQL + TypeORM** — хранение постов
- **MongoDB + Mongoose** — хранение комментариев
- **ConfigModule + JOI** — валидация env-переменных
- **class-validator** — валидация DTO
- **Swagger** — документация API

## Запуск

```bash
cp .env.example .env
docker compose up -d
npm install
npm run start:dev
```

Swagger UI доступен по адресу: http://localhost:3000/api

## API

### Posts (PostgreSQL)

| Метод  | Endpoint   | Описание            |
| ------ | ---------- | ------------------- |
| POST   | /posts     | Создать пост        |
| GET    | /posts     | Получить все посты  |
| GET    | /posts/:id | Получить пост по id |
| PATCH  | /posts/:id | Обновить пост       |
| DELETE | /posts/:id | Удалить пост        |

### Comments (MongoDB)

| Метод  | Endpoint           | Описание                     |
| ------ | ------------------ | ---------------------------- |
| POST   | /comments          | Создать комментарий          |
| GET    | /comments?postId=1 | Получить комментарии к посту |
| PATCH  | /comments/:id      | Обновить комментарий         |
| DELETE | /comments/:id      | Удалить комментарий          |

## Валидация комментариев

Комментарий с оценкой **2–4** обязательно должен содержать текст (не менее 10 символов).
При оценке **1 или 5** текст может быть пустым.

## Баги, которые мешали запуску

### Ошибки компиляции / DI (не давали стартануть):

1. **CommentsRepository отсутствовал** — `CommentsService` ссылался на несуществующий класс.
   Решение: создан файл `comments.repository.ts`.
2. **CommentsModule не регистрировал зависимости** — отсутствовали `MongooseModule.forFeature`
   и `CommentsRepository` в `providers`.

