const applyTypeset = require('./typeset-plugin');

module.exports = (options) => (eleventyConfig, pluginNamespace) => {
  eleventyConfig.namespace(pluginNamespace, () => {
    eleventyConfig.addTransform('typeset', applyTypeset(options));
  });
};
