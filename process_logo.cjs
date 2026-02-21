const Jimp = require('jimp');

async function process() {
    try {
        const image = await Jimp.read('public/blackscale CIRE logo.png');

        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const red = this.bitmap.data[idx + 0];
            const green = this.bitmap.data[idx + 1];
            const blue = this.bitmap.data[idx + 2];

            // If pixel is light (background), make it transparent.
            // Using a threshold of 200/255
            if (red > 200 && green > 200 && blue > 200) {
                this.bitmap.data[idx + 3] = 0; // Set Alpha to 0
            } else {
                // If pixel is dark (the logo), make it WHITE so it shows on the black banner
                this.bitmap.data[idx + 0] = 255;
                this.bitmap.data[idx + 1] = 255;
                this.bitmap.data[idx + 2] = 255;
            }
        });

        await image.writeAsync('public/blackscale_logo_white.png');
        console.log('Success: public/blackscale_logo_white.png created');
    } catch (err) {
        console.error('Error processing image:', err);
    }
}

process();
