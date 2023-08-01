# [Одностраничный сайт](https://adi1zhexen0v.github.io/hydra-vr/) Hydra VR

Лендинг про устройства виртуальной реальности был разработан на основе [общедоступного макета.](https://www.figma.com/file/1yYmHfxfsHQhI8j8dj8x2v/Hydra?type=design&node-id=0-1&mode=design&t=0l9Xgoye2R7cLqR3-0)

## Общая информация

- Общие/повторяющиеся стили вынесены в [style.scss.](https://github.com/adi1zhexen0v/hydra-vr/blob/main/src/scss/style.scss) Стили каждой секции собраны в [отдельных файлах.](https://github.com/adi1zhexen0v/hydra-vr/tree/main/src/scss/sections)
- Сайт адаптирован до ширины 320рх.
- Все изображения сжаты и расформированы по [папкaм.](https://github.com/adi1zhexen0v/hydra-vr/tree/main/src/img)
- JavaScript файлы собраны по модульной структуре.
- Готовая собранная версия сайта расположен в ветке [build.](https://github.com/adi1zhexen0v/hydra-vr/tree/build)

## Описание gulp-задач

Ниже представлено описание каждой задачи в файле [gulp-скрипта:](https://github.com/adi1zhexen0v/hydra-vr/blob/main/gulpfile.js)

- **compileStyles:** Компилирует и оптимизирует стили, написанные на [Sass](https://sass-lang.com/), вместе с созданием sourcemaps для облегчения отладки.

```javascript
const compileStyles = () => {
	return gulp
		.src(paths.src.scss)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS())
		.pipe(
			rename({
				suffix: '.min'
			})
		)
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.build.css));
};
```

- **minifyHtml:** Минимизирует HTML-файлы, удаляя лишние пробелы и переносы строк.

```javascript
const minifyHtml = () => {
	return gulp
		.src(paths.src.html)
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(inliner())
		.pipe(gulp.dest(paths.build.html));
};
```

- **optimizeImages:** Эта функция оптимизирует изображения, находящиеся в исходной директории, с помощью плагина [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin), который уменьшает размер изображений без потери качества.

```javascript
const optimizeImages = () => {
	return gulp
		.src(paths.src.img)
		.pipe(imagemin(imageminOptions))
		.pipe(gulp.dest(paths.build.img));
};
```

- **concatJs:**: Собирает и объединяет JavaScript-файлы из указанных [исходных файлов,](https://github.com/adi1zhexen0v/hydra-vr/tree/main/src/js/modules) используя Webpack.

```javascript
const concatJs = () => {
	return gulp
		.src(paths.src.js)
		.pipe(webpack(webpackOptions))
		.pipe(gulp.dest(paths.build.js));
};
```

## Запуск команд

- `gulp build`: Выполняет сборку проекта, включая компиляцию стилей, минимизацию HTML, оптимизацию изображений и сборку JavaScript-файлов для продакшн-окружения.
- `gulp watch`: Отслеживает изменения в файлах HTML, SCSS, изображений и JavaScript в режиме реального времени, автоматически запуская соответствующие задачи для быстрого обновления собранных файлов в процессе разработки.

## Сборка и автоматическая отправка ветки [build](https://github.com/adi1zhexen0v/hydra-vr/tree/build)

Я использую [GitHub Actions](https://github.com/adi1zhexen0v/hydra-vr/blob/main/.github/workflows/deploying.yml) для автоматической сборки и отправки готовой версии сайта в ветку [build.](https://github.com/adi1zhexen0v/hydra-vr/tree/build)
Когда новые изменения попадают в основную ветку, Actions запускает задачу сборки. После успешной сборки, результаты отправляются в ветку [build](https://github.com/adi1zhexen0v/hydra-vr/tree/build) и публикуется на [GitHub Pages.](https://adi1zhexen0v.github.io/hydra-vr/)

```yml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Deploy to GitHub Pages
        if: success()
        uses: crazy-max/ghaction-github-pages@v3
        with:
          target_branch: build
          build_dir: build
        env:
          GITHUB_TOKEN: ${{ secrets.DEPLOY_TOKEN }}
```
