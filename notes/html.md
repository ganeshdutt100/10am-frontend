# HTML Intro

HTML (HyperText Markup Language) is the foundational language for creating web
pages. It structures the content of a web page by using elements and tags. Each
element defines a specific part of the page, such as headings, paragraphs, images, or
links.
Key Features of HTML

1. Markup Language: HTML uses tags to define elements on the webpage.
2. Structure: Provides the basic structure for a webpage, which is later enhanced
   by CSS and JavaScript.
3. Platform-Independent: Works across all browsers and platforms.
4. Dynamic Integration: Combines with CSS for styling and JavaScript for
   interactivity.

   # Basic Structure of an HTML Document

   <!DOCTYPE html>
   <html>
    <head>
    <title>My First HTML Page</title>
    </head>
    <body>
    <h1>Welcome to HTML!</h1>
    <p>This is a simple HTML page.</p>
    </body>
   </html>

   Explanation:

5. <!DOCTYPE html>: Declares the document as HTML5.
6. <html>: The root element of the document.
7. <head>: Contains metadata (e.g., the title, character set).
8. <title>: Sets the title shown in the browser tab.
9. <body>: Contains the visible content of the webpage.

# Tags

10. Tags: Most tags have an opening (<tag>) and closing (</tag>).
    A "tag" is a set of characters used in markup languages like HTML to define
    elements or components within a document, allowing for structured formatting and
    presentation.
    Each HTML tag consists of two main parts:
11. Opening Tag (Start Tag): This part begins the element and contains the name of
    the element, enclosed in angle brackets (< >). It may also include attributes that
    provide additional information about the element.
    Example:

    <tagname attribute="value">

12. Closing Tag (End Tag): This part marks the end of the element and is similar to
    the opening tag, but it includes a forward slash (/) before the element name.
    Example:
    </tagname>

Here's an example using a paragraph element:

<p>This is a paragraph.</p>
In this example:

<p> is the opening tag.
</p> is the closing tag.

# Unclosed tag

An "unclosed tag" (also known as an "open tag" or "start tag") in HTML is a tag
that is not followed by a corresponding closing tag. These tags are typically used
for elements that do not have any content or do not require an end tag, such as
line breaks, images, and input fields.
For example, in HTML, tags like <br>, <img>, and <input> are selfclosing, meaning
they don't have a separate closing tag. Instead, they are written as a single tag.
Here are some examples: 13. Line Break Tag:
<br> 14. Image Tag:
<img src="image.jpg" alt="Description"> 15. Input Tag:
<input type="text" name="username">
Attributes
HTML attributes provide additional information about elements and are always
specified in the opening tag of an HTML element. They consist of a name and a
value, separated by an equals sign (=) and enclosed in double or single quotes.
Here are some common HTML attributes:

16. id: Provides a unique identifier for an element within a page.
<div id="myDiv">Content</div>
17. class: Assigns one or more class names to an element. This is useful for
applying CSS styles or targeting elements with JavaScript.
<div class="myClass anotherClass">Content</div>
18. src: Specifies the source URL for elements like images, audio, or video.
    <img src="image.jpg" alt="An image">
19. href: Defines the hyperlink destination for anchor (<a>) elements.
    <a href="https://">Link</a>
20. alt: Provides alternative text for elements like images, which is important for
    accessibility.
    <img src="image.jpg" alt="An image">
21. style: Allows you to apply inline CSS styles directly to an element.
<div style="color: red; fontsize: 16px;">Styled content</div>
22. title: Provides additional information about an element, typically displayed as
    a tooltip when the user hovers over it.
    <abbr title="Hypertext Markup Language">HTML</abbr>
23. target: Specifies where to open the linked document when using anchor elements
    (`<a>`).
    <a href="https://ganeshdutt.verccel.app/" target="_blank">Link</a>

    Essential HTML Tags

24. Headings:
<h1>Main Heading</h1>
<h2>Subheading</h2>
Headings range from <h1> (largest) to <h6> (smallest).
25. Paragraphs:
<p>This is a paragraph.</p>
26. Links:
    <a href="https://example.com">Visit Example</a>
27. Images:
    <img src="image.jpg" alt="Description of the image">

28. **Ordered List (`<ol>`)**: Items arranged in a specific sequence (numbered by default).
<ol>
  <li>Item A</li>
  <li>Item B</li>
</ol>
29. **Unordered List (`<ul>`)**: Items grouped together with no specific order (bullet points by default).
<ul>
  <li>Item A</li>
  <li>Item B</li>
</ul>
30. **Nested List**: A list inserted inside an item of another list, which is perfect for creating hierarchical sub-items or dropdown menus.
<ul>
  <li>Item A
    <ul>
      <li>Nested Item A1</li>
      <li>Nested Item A2</li>
    </ul>
  </li>
  <li>Item B</li>
</ul>
31. **Description List (`<dl>`)**: A list of terms (`<dt>`) and their corresponding descriptions or definitions (`<dd>`), which is great for glossaries or key-value pairs.
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language, the standard language for creating web pages.</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets, used to style and design the layout of web pages.</dd>
</dl>

32. Tables:
<table border="1">
<tr>
 <th>Column 1</th>
 <th>Column 2</th>
</tr>
<tr>
 <td>Data 1</td>
 <td>Data 2</td>
</tr>
</table>
Applications of HTML
• Building static webpages.
• Serving as a foundation for dynamic web applications.
• Structuring documents for online content.
HTML 5 introduced several new features and elements to enhance the functionality,
structure, and presentation of web documents. Some key additions in HTML 5 include:
33. New Structural Elements:
 <article>: Represents an independent, selfcontained piece of content within a
document.
<article>
<h1>Example Article Title</h1>
<p>Hello Everyone </p>

<p>This is the content of the article. It can contain text, images, videos,
and other HTML elements.</p>
<p>More content...</p>
<p>Even more content...</p>
</article>
 <aside>: Contains content that is related to the main content but can be
considered separate, like sidebars or tangential information.
 <header>: Contains introductory content at the beginning of a section or
document, often including headings, logos, or navigation.
 <footer>: Contains footer information typically found at the end of a section
or document, like copyright information or links to related content.
 <nav>: Identifies a section containing navigation links, such as menus or
navigation bars.
 <section>: Defines a thematic grouping within a document, aiding in the
organization of content.

31. New Media Elements:
    <audio> and <video>: Allow embedding of audio and video files, along with
    controls for playback.
    <video>, enabling compatibility across different platforms and browsers.
    <video src="movie.mp4" width="400" controls></video>
    <audio src="song.mp3" controls></audio>
32. New Interactive Elements:
 <details> and <summary>: Enable users to toggle additional information in a
document.
<details>
<summary>Hello Developers</summary>
<option value="">Hello World</option>
<option value="">Hello World</option>

<option value="">Hello World</option>
<option value="">Hello World</option>
</details>
 <dialog>: Represents a dialog box or window for user interaction.
<dialog id="myDialog">
<p>This is a dialog box.</p>
<button onclick="document.getElementById('myDialog').close()">Close</button>
</dialog>
<button onclick="document.getElementById('myDialog').showModal()">Open
Dialog</button>
33. New Semantic Elements:
    <time>: Represents a specific point in time or a duration, allowing for
    semantic markup of dates and times.
    <time datetime="2025-04-19T14:00">2:00 PM, April 19, 2025</time>
    <mark>: Highlights or emphasizes parts of text within a document.
    5 DOCTYPE Declaration:
    HTML4 requires a strict declaration, such as <!DOCTYPE HTML PUBLIC "//W3C//DTD
    HTML 4.01//EN">.
    HTML5 uses a simplified, shorter declaration: <!DOCTYPE html>.
    Meta Tags
    Meta tags are elements in HTML documents that provide metadata about the
    document
    
    itself. This information is not displayed on the web page but is instead used by
    browsers and search engines to understand and handle the document.
34. Viewport Meta Tag:
<meta name="viewport" content="width=devicewidth, initialscale=1.0">
This tag is used to control the viewport settings for responsive web design. It
ensures that the page is displayed correctly on different devices and screen sizes.
35. Charset Meta Tag:
<meta charset="UTF8">
Specifies the character encoding of the document. UTF8 is widely used for
internationalization.
36. Description Meta Tag:
<meta name="description" content="A brief description of the page">
Provides a concise summary or description of the content of the page. It is
often used by search engines for indexing.
37. Keywords Meta Tag:
<meta name="keywords" content="Developer, designer">
Specifies a list of keywords relevant to the page's content. This tag was more
influential in the past and is less used today due to changes in search engine

algorithms. 38. Author Meta Tag:

<meta name="author" content="Author Name">
Indicates the author of the content.
39. HTTPEquiv Refresh:
<meta httpequiv="refresh" content="5;url=https://example.com">
Automatically redirects the browser to another page after a specified number of
seconds (in this case, 5 seconds).
HTML text tag
HTML text tags are used to format and structure text content on a web page. Here
are some of the most common textrelated tags in HTML:
40. Heading Tags (h1, h2, h3, h4, h5, h6):
Used to define headings, with h1 being the highest level and h6 the lowest.
Example:
<h1>This is a Heading</h1>
<h2>This is a Subheading</h2>
41. Paragraph Tag (p):
Defines a paragraph of text.
Example:
<p>This is a paragraph of text.</p>

42. Bold Tag (b) and Strong Tag (strong):
    Renders text in a bold format.
    Example:
    <b>Bold Text</b>
    <strong>Strong Text</strong>
43. Italic Tag (i) and Emphasis Tag (em):
    Renders text in an Italic format.
    Example:
    <i>Italic Text</i>
    <em>Emphasized Text</em>
44. Underline Tag (u):
    Renders text with an underline.
    Example:
    html
    <u>Underlined Text</u>
45. Strikethrough Tag (s):
    Renders text with a strikethrough.
    Example:
    html
    <s>Strikethrough Text</s>
46. Superscript Tag (sup) and Subscript Tag (sub):
    Renders text as superscript or subscript.
    Example:

    X<sup>2</sup> (X squared)
    H<sub>2</sub>O (Water)

47. Line Break Tag (br):
    Inserts a line break in the text, moving content to the next line.
    Example:
    This is the first line.<br>This is the second line.
48. Horizontal Rule Tag (hr):
Creates a horizontal rule or line to separate content.
Example:
<p>Paragraph 1</p>
<hr>
<p>Paragraph 2</p>
49. Anchor Tag (a):
    Creates hyperlinks to link to other pages or resources.
    Example:
    html
    <a href="https://ganeshdutt.netlify.app/">Welcome to 's Portfolio</a>

    HTML elements
    HTML elements can be classified into three main types based on their behavior and
    how they interact with other elements:

1) Inline Elements:
   Definition: Inline elements are those that do not start on a new line and only take
   up as much width as necessary. They typically flow within the content and do not
   create new "blocks" in the layout.
   Examples: <span>, <a>, <strong>, <em>, <img>, <br>
2) Block Elements:
   Definition: Block elements, on the other hand, start on a new line and occupy the
   full width available. They create a "block" in the layout, and any content
   following a blocklevel element will appear on a new line.
   Examples: <div>, <p>, <h1>, <ul>, <li>
3) Void Elements (SelfClosing or Empty Elements):
   Definition: Void elements are elements that do not have a closing tag, as they
   don't contain any content. They may have attributes, but they cannot have content
   or nested elements.
   Examples: <img>, <br>, <hr>, <input>
   Here's a brief explanation of each:
   HTML (Hypertext Markup Language) has a variety of elements that allow you to
   structure content on a web page. These elements can be broadly categorized into
   several types:

1. Text Elements:
<p> Paragraph
<span> Inline container
<br> Line break
<strong> Strong importance
<em> Emphasis
<mark> Marked or highlighted text
<small> Smaller text
<sub> Subscript
<sup> Superscript
<abbr> Abbreviation
<cite> Citation
2. Document Structure Elements:
<html> Root element
<head> Document metadata
<title> Document title
<body> Document body
<article> Article content
<section> Section of content
<nav> Navigation links
<aside> Aside content
<header> Header content
<footer> Footer content
3. List Elements:
<ul> Unordered list
<ol> Ordered list
<li> List item
<dl> Definition list

 <dt> Definition term
 <dd> Definition description
4. Linking Elements:
<a> Anchor (hyperlink)
<link> External resource link
5. Embedded Content Elements:
<img> Image
<audio> Audio content
<video> Video content
<iframe> Inline frame
<object> Embedded object
<embed> Embed external content
6. Form Elements:
<form> Form container
<input> Input field
<button> Button
<select> Dropdown list
<textarea> Text area
<label> Label for an input field
<fieldset> Group of form elements
<legend> Caption for a <fieldset>
7. Table Elements:
 <table> Table
 <tr> Table row
 <td> Table data/cell
 <th> Table header cell
 <thead> Table header
 <tbody> Table body

 <tfoot> Table footer
These are just some of the basic HTML elements. Each element serves a specific
purpose and helps in organizing and presenting content on a webpage.
