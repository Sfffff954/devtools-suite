// Importing required libraries
const marked = require('marked');
const highlight = require('highlight.js');

// Setting marked options for syntax highlighting
marked.setOptions({
    highlight: function(code, lang) {
        return highlight.highlight(lang, code).value;
    }
});

/**
 * Converts Markdown to HTML.
 * @param {string} markdown - The markdown content to convert.
 * @returns {string} - The converted HTML.
 */
function convertMarkdownToHTML(markdown) {
    return marked(markdown);
}

module.exports = convertMarkdownToHTML;