## Баги, которые мешали запуску

### Ошибки компиляции (не давали стартануть):

1. **CommentsRepository отсутствовал** — `CommentsService` ссылался на несуществующий класс.
   Решение: создан файл `comments.repository.ts`.
2. **CommentsModule не регистрировал зависимости** — отсутствовали `MongooseModule.forFeature`
   и `CommentsRepository` в `providers`.

## Запуск

```
cp .env.example .env
docker compose up -d
npm install
npm run start:dev
```

