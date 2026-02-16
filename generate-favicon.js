import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Generate different favicon sizes
async function generateFavicons() {
  const logoPath = join(__dirname, 'public', 'logo.png');
  const publicDir = join(__dirname, 'public');

  console.log('Generating favicons from logo.png...');

  // Generate 32x32 favicon.ico (modern browsers)
  await sharp(logoPath)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(join(publicDir, 'favicon-32x32.png'));

  // Generate 16x16 favicon
  await sharp(logoPath)
    .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(join(publicDir, 'favicon-16x16.png'));

  // Generate 192x192 for Android
  await sharp(logoPath)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(join(publicDir, 'android-chrome-192x192.png'));

  // Generate 512x512 for Android
  await sharp(logoPath)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(join(publicDir, 'android-chrome-512x512.png'));

  // Generate Apple touch icon
  await sharp(logoPath)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(join(publicDir, 'apple-touch-icon.png'));

  console.log('✅ Favicons generated successfully!');
  console.log('   - favicon-32x32.png');
  console.log('   - favicon-16x16.png');
  console.log('   - android-chrome-192x192.png');
  console.log('   - android-chrome-512x512.png');
  console.log('   - apple-touch-icon.png');
}

generateFavicons().catch(console.error);
