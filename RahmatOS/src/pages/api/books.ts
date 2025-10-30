import type { APIRoute } from 'astro';
import * as fs from 'fs';
import * as path from 'path';

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const type = url.searchParams.get('type') || 'all';

    console.log('API endpoint called with type:', type);

    // Read from cached JSON file
    const dataPath = path.join(process.cwd(), 'public', 'data', 'books.json');

    if (!fs.existsSync(dataPath)) {
      console.error('Books cache file not found. Run "npm run fetch-books" to generate it.');
      return new Response(JSON.stringify({
        error: 'Books cache not found',
        message: 'Please run "npm run fetch-books" to generate the cache file'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const fileContent = fs.readFileSync(dataPath, 'utf-8');
    const cachedData = JSON.parse(fileContent);

    let data;
    switch (type) {
      case 'currently-reading':
        data = cachedData.currentlyReading;
        console.log('Currently reading count:', data.length);
        break;
      case 'want-to-read':
        data = cachedData.wantToRead;
        console.log('Want to read count:', data.length);
        break;
      case 'finished':
        data = cachedData.finished;
        console.log('Finished books count:', data.length);
        break;
      case 'all':
        data = {
          currentlyReading: cachedData.currentlyReading,
          wantToRead: cachedData.wantToRead,
          finished: cachedData.finished
        };
        console.log('All books:', {
          currentlyReading: data.currentlyReading.length,
          wantToRead: data.wantToRead.length,
          finished: data.finished.length
        });
        break;
      default:
        return new Response(JSON.stringify({ error: 'Invalid type parameter' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
      }
    });
  } catch (error) {
    console.error('Error reading books cache:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({
      error: 'Failed to read books cache',
      message: errorMessage
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
