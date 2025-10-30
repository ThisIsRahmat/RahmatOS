/**
 * Script to fetch books from Literal.club and save to a static JSON file
 * Run this script weekly to keep the cache fresh
 */

import { LiteralAPI } from '../src/lib/literal';
import * as fs from 'fs';
import * as path from 'path';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

async function fetchAndCacheBooks() {
  console.log('🔄 Fetching books from Literal.club...');

  const token = process.env.LITERAL_TOKEN;

  if (!token) {
    console.error('❌ LITERAL_TOKEN not found in environment variables');
    process.exit(1);
  }

  try {
    const literalAPI = new LiteralAPI(token);

    // Fetch all book data
    console.log('📚 Fetching all reading states...');
    const [currentlyReading, wantToRead, finished] = await Promise.all([
      literalAPI.getCurrentlyReading(),
      literalAPI.getWantToRead(),
      literalAPI.getFinished()
    ]);

    const data = {
      currentlyReading,
      wantToRead,
      finished,
      lastUpdated: new Date().toISOString()
    };

    console.log('📊 Books fetched:');
    console.log(`  - Currently reading: ${currentlyReading.length}`);
    console.log(`  - Want to read: ${wantToRead.length}`);
    console.log(`  - Finished: ${finished.length}`);

    // Save to public directory so it can be served as a static file
    const publicDir = path.join(process.cwd(), 'public');
    const dataDir = path.join(publicDir, 'data');

    // Create directories if they don't exist
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const outputPath = path.join(dataDir, 'books.json');
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));

    console.log(`✅ Books cached successfully to ${outputPath}`);
    console.log(`📅 Last updated: ${data.lastUpdated}`);
  } catch (error) {
    console.error('❌ Error fetching books:', error);
    process.exit(1);
  }
}

fetchAndCacheBooks();
