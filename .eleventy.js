module.exports = function(eleventyConfig){
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setOutputDirectory("public")
  // This tells 11ty to passthtough the CSS file to the layouts (While you still link it as usual in the layouts)
  eleventyConfig.addPassthroughCopy("./src/syle.css");
};