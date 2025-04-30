// This Eleventy plugin will generate a TOC (Table Of Contacnse) from page content using an Eleventy filter.
const pluginTOC = require("eleventy-plugin-toc");

module.exports = async function(eleventyConfig){
  // This imports the plugin as a constant variable.
  const { IdAttributePlugin } = await import("@11ty/eleventy");
  // This adds plugins for 11ty where the name of the plugin goes inside the brakets "addPlugin(pluginNameHere)".
  eleventyConfig.addPlugin(IdAttributePlugin);
  eleventyConfig.addPlugin(pluginTOC);
  // This points 11ty to the source directory where wverything needed to build the website is located.
  eleventyConfig.setInputDirectory("src");
  // This points 11ty to the public (live) directory where the completed website will go.
  eleventyConfig.setOutputDirectory("public")
  // This tells 11ty to passthtough the CSS file to the layouts (While you still link it as usual in the layouts)
  eleventyConfig.addPassthroughCopy("./src/syle.css");
};