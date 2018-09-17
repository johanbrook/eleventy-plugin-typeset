# Typeset plugin for Eleventy

A plugin for the [Eleventy](https://github.com/11ty/eleventy/) static site generator for making your typography nicer, based on [Typeset.js](https://github.com/davidmerfield/Typeset).

## Install

```shell
npm install --save eleventy-plugin-typeset
```

## Usage

In your Eleventy config file (defaults to `.eleventy.js`):

```js
const typesetPlugin = require('eleventy-plugin-typeset');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(typesetPlugin());
};
```

## Configuration

Typeset.js accepts a couple of [options](https://github.com/davidmerfield/Typeset#options), which you can provide to this plugin too:

```js
// Example for passing options to the plugin.

eleventyConfig.addPlugin(
  typesetPlugin({
    only: '.article-text', // Run only on HTML content within a certain CSS selector
    disable: ['smallCaps'], // Disable typesetting feature 'smallCaps'
    // etc.
  })
);
```

You can use the options to let this plugin run only on some certain parts of your content. This is actually a quite nice optimisation, since I discovered running Typeset on my full site (pages and posts) takes a few seconds. So unless you wanna typeset _all_ HTML on your site, be sure to scope the plugin with the `only` option to a selector that wraps your article content.

## License

MIT.
