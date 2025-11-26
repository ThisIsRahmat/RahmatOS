
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_IMAGE = path.join(__dirname, '../public/images/me.jpg');
const OUTPUT_IMAGE = path.join(__dirname, '../public/images/me-circle.png');
const SIZE = 128; // Standard favicon size (high res)

async function generateCircularFavicon() {
    try {
        console.log('🔄 Generating circular favicon...');

        // Create a circular mask
        const circleShape = Buffer.from(
            `<svg width="${SIZE}" height="${SIZE}"><circle cx="${SIZE / 2}" cy="${SIZE / 2}" r="${SIZE / 2}" /></svg>`
        );

        await sharp(INPUT_IMAGE)
            .resize(SIZE, SIZE, { fit: 'cover' }) // Resize to square
            .composite([{
                input: circleShape,
                blend: 'dest-in' // Keep only the intersection (the circle)
            }])
            .png() // Save as PNG (supports transparency)
            .toFile(OUTPUT_IMAGE);

        console.log(`✅ Circular favicon created at: ${OUTPUT_IMAGE}`);
    } catch (error) {
        console.error('❌ Error generating favicon:', error);
        process.exit(1);
    }
}

generateCircularFavicon();
