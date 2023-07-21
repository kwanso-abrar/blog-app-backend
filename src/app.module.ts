import configuration from './config/configuration';
import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { PostsModule } from './modules/posts/posts.module';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './database.config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      formatError: (error: any) => {
        const graphQLFormattedError = {
          message: error.extensions?.exception?.response?.message || error.message,
          status: error.extensions?.code || 500,
        };
        return graphQLFormattedError;
      },
    }),
    AuthModule,
    PostsModule,
    UsersModule,
  ],
})
export class AppModule {}
