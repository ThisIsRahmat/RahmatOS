import type { APIRoute } from 'astro';
import { cache } from '../../lib/cache';

export const POST: APIRoute = async () => {
  try {
    cache.clear();
    return new Response(JSON.stringify({ success: true, message: 'Cache cleared successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error clearing cache:', error);
    return new Response(JSON.stringify({ error: 'Failed to clear cache' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
