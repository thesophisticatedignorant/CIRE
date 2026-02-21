import { Jimp } from 'jimp';

// If Jimp export is named, we use it. If default, we use it.
// Trying named import first as it's common in modern libs.
// If it fails, I'll try default.

async function process() {
    try {
        console.log("Reading image...");
        const image = await Jimp.read('public/blackscale CIRE logo.png');

        console.log("Processing...");
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const red = this.bitmap.data[idx + 0];
            const green = this.bitmap.data[idx + 1];
            const blue = this.bitmap.data[idx + 2];

            // If light, make transparent
            if (red > 200 && green > 200 && blue > 200) {
                this.bitmap.data[idx + 3] = 0;
            } else {
                // If dark, make WHITE
                this.bitmap.data[idx + 0] = 255;
                this.bitmap.data[idx + 1] = 255;
                this.bitmap.data[idx + 2] = 255;
            }
        });

        await image.write('public/blackscale_logo_white.png');
        console.log('Success: public/blackscale_logo_white.png created');
    } catch (err) {
        console.error('Error processing image:', err);
    }
}

process();
