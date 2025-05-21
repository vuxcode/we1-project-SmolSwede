// This is the configuration file for 11ty. It is used to set up the build process and add plugins.

// This is a plugin for 11ty that generates a table of contents for your markdown files based on the headings in the file.
const pluginTOC = require("eleventy-plugin-toc");

// This is a plugin for markdown-it that adds anchors to the headings in the markdown file. It allows you to link to specific sections of the page.
const markdownIt = require("markdown-it");

// This is a plugin for markdown-it that adds syntax highlighting to the code blocks in the markdown file. It allows you to specify the language of the code block and highlights it accordingly.
const markdownItAnchor = require("markdown-it-anchor");

const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig){
  // This is a plugin for 11ty that allows you to use markdown-it as the markdown processor. It allows you to customize the way markdown is processed and rendered.
  // It also allows you to use plugins for markdown-it, such as the anchor plugin.
  eleventyConfig.setLibrary(
    "md", 
    markdownIt().use(markdownItAnchor)
  );

  // This adds plugins for 11ty where the name of the plugin goes inside the brakets "addPlugin(pluginNameHere)".
  eleventyConfig.addPlugin(pluginTOC);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);

  // This points 11ty to the source directory where wverything needed to build the website is located.
  eleventyConfig.setInputDirectory("src");
  // This points 11ty to the public (live) directory where the completed website will go.
  eleventyConfig.setOutputDirectory("public")
  // This tells 11ty to passthtough the CSS file to the layouts (While you still link it as usual in the layouts)
  eleventyConfig.addPassthroughCopy("./src/style.css");
};