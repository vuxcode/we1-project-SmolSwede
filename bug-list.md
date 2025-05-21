# Bug List

> Make a list of the things that don't work as expected. Keep a list of things that you have fixed and try to document how you solved them.

## Problem 01! - Fixed! | 2025-04-28
  - 11ty copies everything into the public dir? 
  > Fixed by changing input and output via the method instead of named export. | 2025-04-28 | (See link: https://www.11ty.dev/docs/config/#configuration-3)
  
## Problem 02! - Fixed! | 2025-04-28
  - 11ty builds the page but it is not displaying it in the browser. It only displays "Cannot GET /" and the title says "Error".
  > Fixed by either using index.md instead of mainPage.md or using 'link: "/"' in page relelations section. | 2025-04-28

## Problem 03! - Fixed! | 2025-04-30
  - TOC (Table Of Contents) plugin wont work :(.
  > Fixed by moving the TOC plugin from elventyConfig to function(eleventyConfig) | 2025-05-01

## Problem 04! - Fixed! | 2025-05-11
  - Merge confilct due to comments added in baseLayout.njk (git says both are changed) but only one version exsisted localy.
  > Fixed by using git console and using "git add <fileNameHere>" sence there weren't really any difference.

## Problem 05! - Fixed! | 2025-05-14
  - Getting MIME type error that blocks CSS from loading MIME type says "text/html" which is wrong. 
  > Fixed by correcting the link to the style sheet

## Problem 06! - Fixed! | 2025-05-15
  - Grid doesn't want to work as inteded. It puts both the side nav bar and the content in the same grid area.
  > Fixed by using a main- and subgrid instead of one grid.

## Problem 07! - Fixed! | 2025-05-21
  - Image addon for 11ty and markdown-it make thier on BS file paths and breakes everything >:(
  > Fixed by moving the pictures from a Markdown file to a HTML file. So pictures now reside in worldBuilding insted of theColonies.