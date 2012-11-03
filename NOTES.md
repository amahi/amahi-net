
# General rules
 * make changes
 * make and open _site/index.html to see how the site looks
 * Commit to master first
 * make publish to push it out to gh-pages after it's committed to master

# Reference links:
* Github pages: https://help.github.com/categories/20/articles
* Jekyll: https://github.com/mojombo/jekyll
* Markdown Syntax: http://daringfireball.net/projects/markdown/syntax


# CSS Styling
For CSS styling, use style.css.


# Auto-Generated Navigation
Each content page has yaml front matter that will generate the sidebar `nav`. This will also insert a class of "active" on the appropriate `li`. The position of the link in the navbar is controlled using the "weight" property in the frontmatter.  See `index.md` or `support.md` for examples. Code for this is in `pages_list`. This code was found in the answer to [this post] (http://stackoverflow.com/questions/9053066/sorted-navigation-menu-with-jekyll-and-liquid) on stackoverflow.


# Markup
For markup, we use Markdown. Here is a markdown [cheat-sheet.]( http://warpedvisions.org/projects/markdown-cheat-sheet/)

Also, please avoid using `h1` in conent areas. Use `h2` for the page title and `h3` - `h6` for further headings. 
