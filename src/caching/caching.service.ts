import { CACHE_MANAGER, CacheStore } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CachingService {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: CacheStore) {}

    async setCache(key: string, value: any, ttl?: number): Promise<void> {
        await this.cacheManager.set(key, value, { ttl });
    }
    async getCache<T>(key: string): Promise<T>{
        return await this.cacheManager.get<T>(key);
    }
    async deleteCache(key: string): Promise<void>{
        return await this.cacheManager.del(key);
    }
}