# angular2-multi-project-test

Test project for building and running multiple Angular 2 applications on the same page.

There are many reasons why one may want or need multiple applications on the same page. One example is when a CMS is used to provide much of the content on the page but one or more Angular 2 applications would provide a better user experience in certain areas of the page.

### What to accomplish

- [x] Setup three independent applications.
- [x] Build three independent Angular 2 applications with a basic webpack configuration.
- [x] Load three Angular 2 applications on the same page.
- [ ] Add the ability to share components between the applications.
- [x] Implement tree shaking.
- [x] Implement AOT compilation.
- [ ] Have all three applications execute in production mode without AOT.
- [ ] Have all three applications execute in production mode with AOT.

### Gotchas

- Angular 2, as of the writing of this readme, is not compatible with TypeScript v2.1.\*. If you try to use TypeScript v2.1.\*, the `ngfactory.ts` files will not be generated.
- I had to add `\*\*/\*.aot.ts` to the `tsconfig.json` exclude list so the compiler does not complain about missing `.ngfactory.ts` files in the `index.aot.ts` files.
- Remember that if we use webpack dev server to run the aot code, the aot code will not be regenerated when we make changes to the source files.

### Results

Below are the file sizes with the JIT compilation on the left and the AOT compilation on the right. We can see here that the application bundles increased in size slightly but the vendors bundle decreased in size greatly when using AOT compilation.

![JIT vs AOT Build Sizes](https://raw.githubusercontent.com/patrickhousley/angular2-multi-project-test/master/results/JIT%20vs%20AOT%20Build%20Sizes.png)

The below images use [Webpack Visualizer](https://chrisbateman.github.io/webpack-visualizer/) (thanks @batemanchris) to visually show the largest difference in the build sizes. The first image, JIT compilation, contains the compiler with a size of 1.1M while the second image, AOT compilation, shows it is not included in our bundles.

![JIT Build Visualization](https://raw.githubusercontent.com/patrickhousley/angular2-multi-project-test/master/results/JIT%20Build%20Visualization.png)

![JIT Build Visualization](https://raw.githubusercontent.com/patrickhousley/angular2-multi-project-test/master/results/AOT%20Build%20Visualization.png)

You will find the stats in the `results` directory. Download and have a look at them with the [Webpack Visualizer](https://chrisbateman.github.io/webpack-visualizer/) or [Webpack Analyzer](http://webpack.github.io/analyse/).
