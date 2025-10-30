interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

class SimpleCache {
  private cache: Map<string, CacheEntry<any>> = new Map();
  private defaultTTL: number = 5 * 60 * 1000; // 5 minutes in milliseconds

  async get<T>(
    key: string,
    fetcher: () => Promise<T>,
    ttl: number = this.defaultTTL
  ): Promise<T> {
    const now = Date.now();
    const cached = this.cache.get(key);

    // Return cached data if it's still valid
    if (cached && (now - cached.timestamp) < ttl) {
      console.log(`Cache HIT for key: ${key}`);
      return cached.data;
    }

    console.log(`Cache MISS for key: ${key}, fetching fresh data...`);

    // Fetch fresh data
    const data = await fetcher();

    // Store in cache
    this.cache.set(key, {
      data,
      timestamp: now
    });

    return data;
  }

  clear(key?: string) {
    if (key) {
      this.cache.delete(key);
      console.log(`Cache cleared for key: ${key}`);
    } else {
      this.cache.clear();
      console.log('Cache cleared completely');
    }
  }

  // Optional: Clean up expired entries periodically
  cleanup() {
    const now = Date.now();
    const keysToDelete: string[] = [];

    this.cache.forEach((entry, key) => {
      if (now - entry.timestamp > this.defaultTTL) {
        keysToDelete.push(key);
      }
    });

    keysToDelete.forEach(key => this.cache.delete(key));
  }
}

// Export a singleton instance
export const cache = new SimpleCache();

// Optional: Run cleanup every 10 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => cache.cleanup(), 10 * 60 * 1000);
}
