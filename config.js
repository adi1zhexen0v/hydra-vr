import imageminGifsicle from 'imagemin-gifsicle';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminOptipng from 'imagemin-optipng';
import imageminSvgo from 'imagemin-svgo';

export const paths = {
  src: {
    html: './src/*.html',
    scss: './src/scss/**/*.scss',
    js: './src/js/*.js',
    img: './src/img/**/*'
  },
  build: {
    html: './build/',
    css: './build/css/',
    js: './build/js/',
    img: './build/img/'
  }
}

export const imageminOptions = [
  imageminGifsicle({ interlaced: false }),
  imageminMozjpeg({ quality: 90, progressive: true, tune: "ms-ssim" }),
  imageminOptipng({ optimizationLevel: 3, bitDepthReduction: true, colorTypeReduction: true, paletteReduction: true }),
  imageminSvgo({
    plugins: [
      { removeViewBox: false },
      { cleanupIDs: true }
    ]
  })
];