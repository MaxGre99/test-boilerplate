import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './modules/posts/posts.module';
import { CommentsModule } from './modules/comments/comments.module';
import * as Joi from 'joi';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: Joi.object({
                POSTGRES_HOST: Joi.string().required(),
                POSTGRES_PORT: Joi.number().default(5432),
                POSTGRES_USER: Joi.string().required(),
                POSTGRES_PASSWORD: Joi.string().required(),
                POSTGRES_DB: Joi.string().required(),
                MONGO_URI: Joi.string().required(),
                PORT: Joi.number().default(3000),
            }),
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (cfg: ConfigService) => ({
                type: 'postgres',
                host: cfg.get<string>('POSTGRES_HOST'),
                port: cfg.get<number>('POSTGRES_PORT'),
                username: cfg.get<string>('POSTGRES_USER'),
                password: cfg.get<string>('POSTGRES_PASSWORD'),
                database: cfg.get<string>('POSTGRES_DB'),
                autoLoadEntities: true,
                synchronize: true,
            }),
        }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (cfg: ConfigService) => ({
                uri: cfg.get<string>('MONGO_URI'),
            }),
        }),
        PostsModule,
        CommentsModule,
    ],
})
export class AppModule {}

