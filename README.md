# angular2-multi-project-test

Test project for building and running multiple Angular 2 applications on the same page.

There are many reasons why one may want or need multiple applications on the same page. One example is when a CMS is used to provide much of the content on the page but one or more Angular 2 applications would provide a better user experience in certain areas of the page.

### Comands / Running the example

Development Local Server
- Run `npm install`
- Run `npm run watch` and `npm start` in separate console windows/tabs

Production Local Server
- Run `npm install`
- Run `npm run watch` and `npm run start:prod` in separate console windows/tabs

Development Build
- Run `npm install`
- Run `npm run build`

Production Build
- Run `npm install`
- Run `npm run build:prod`

### What to accomplish

- [x] Setup three independent applications.
- [x] Build three independent Angular 2 applications with a basic Webpack configuration.
- [x] Load three Angular 2 applications on the same page.
- [x] Add the ability to share components between the applications.
- [x] Implement tree shaking.
- [x] Implement AoT compilation.
- [x] Have all three applications execute in production mode without AoT.
- [x] Have all three applications execute in production mode with AoT.
- [ ] Setup Webpack compilation with `@ngtools/webpack` project.
  - Not possible since `@ngtools/webpack` only supports a single Angular application at a time.

### Gotchas

- Remember that if we use webpack dev server to run the AoT code, the AoT code will not be regenerated when we make changes to the source files.
  - You should run `npm run watch` in a separate command console window/tab.
- When loading more than one Angular application on the same page, calling `enableProdMode()` multiple times will result in an exception. Surround the function call with a try catch and ignore the error if the message is `Cannot enable prod mode after platform setup.`.

### Vendor Sharing

Vendor sharing is a big reason why this example is wrote the way it is. You can accomplish almost the same thing within the same project repository by passing an array of Webpack configuration objects to the Webpack compiler. You can even use `@ngtools/webpack` so you do not have to build the Typescript separate of Webpack to support AoT builds. However, doing so means that each application has it's own vendors modules (and polyfills). This means you are potentially wasting bandwidth just to load the same vendors for each Angular application on the same page. This can be very detrimental for mobile and low-bandwidth users.

### Results

Below are the file sizes with the JiT compilation on the left and the AoT compilation on the right. We can see here that the application bundles increased in size slightly but the vendors bundle decreased in size greatly when using AoT compilation.

![JiT vs AoT Build Sizes](https://raw.githubusercontent.com/patrickhousley/angular2-multi-project-test/master/results/JiT%20vs%20AoT%20Build%20Sizes.png)

The below images use [Webpack Visualizer](https://chrisbateman.github.io/webpack-visualizer/) (thanks @batemanchris) to visually show the largest difference in the build sizes. The first image, JiT compilation, contains the compiler with a size of 1.1M while the second image, AoT compilation, shows it is not included in our bundles.

![JiT Build Visualization](https://raw.githubusercontent.com/patrickhousley/angular2-multi-project-test/master/results/JiT%20Build%20Visualization.png)

![JiT Build Visualization](https://raw.githubusercontent.com/patrickhousley/angular2-multi-project-test/master/results/AoT%20Build%20Visualization.png)

You will find the stats in the `results` directory. Download and have a look at them with the [Webpack Visualizer](https://chrisbateman.github.io/webpack-visualizer/) or [Webpack Analyzer](http://webpack.github.io/analyse/).
