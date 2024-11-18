import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';

CacheModule.register({
  store: redisStore,
  host: 'localhost',
  port: 6379,
  ttl: 10,
});
