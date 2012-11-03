
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

For CSS styling, main.css has a section for -- Author's Custom Styles --

# Markup

For markup, we use Markdown. Here is a markdown cheat sheet.

Format Text

Headers

# This is an <h1> tag
## This is an <h2> tag
###### This is an <h6> tag

Text styles

*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*

Lists

Unordered

* Item 1
* Item 2
  * Item 2a
  * Item 2b

Ordered

1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b

Miscellaneous

Images

![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)

Links

http://github.com - automatic!
[GitHub](http://github.com)

Blockquotes

As Kanye West said:

> We're living the future so
> the present is our past.

Code Examples in Markdown

Syntax highlighting with GFM

```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

Or, indent your code 4 spaces

Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true

Inline code for comments

I think you should use an
`<addr>` element here instead.


