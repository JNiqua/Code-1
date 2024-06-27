# CSS Knowledge
Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML.


## Selectors

### Class & ID
Selector | Example | Description
--|--|--
.class | .intro |	Selects all elements with class="intro"
.class1.class2 	|.name1.name2 |	Selects all elements with both name1 and name2 set within its class attribute
.class1 .class2 |	.name1 .name2 |	Selects all elements with name2 that is a descendant of an element with name1
#id |	#firstname |	Selects the element with id="firstname"

### Element
Selector | Example | Description
--|--|--
element |	p |	Selects all <p> elements
element.class |	p.intro |	Selects all <p> elements with class="intro"
element,element |	div, p |	Selects all <div> elements and all <p> elements
element element |	div p 	|Selects all <p> elements inside <div> elements
element>element 	|div > p |	Selects all <p> elements where the parent is a <div> element
element+element |	div + p |	Selects the first <p> element that is placed immediately after <div> elements
element1~element2 |	p ~ ul |	Selects every <ul> element that is preceded by a <p> element

### Attribute
Selector | Example | Description
--|--|--
[attribute] |	[target] |	Selects all elements with a target attribute
[attribute=value] |	[target="_blank"] |	Selects all elements with target="_blank"
[attribute~=value] |	[title~="flower"] |	Selects all elements with a title attribute containing the word "flower"
[attribute|=value] |	[lang|="en"] |	Selects all elements with a lang attribute value equal to "en" or starting with "en-"
[attribute^=value] |	a[href^="https"] |	Selects every <a> element whose href attribute value begins with "https"
[attribute$=value] |	a[href$=".pdf"] |	Selects every <a> element whose href attribute value ends with ".pdf"
[attribute*=value] |	a[href*="w3schools"] |	Selects every <a> element whose href attribute value contains the substring "w3schools"

### Child
Selector | Example | Description
--|--|--
:first-child |	p:first-child |	Selects every <p> element that is the first child of its parent
:last-child |	p:last-child |	Selects every <p> element that is the last child of its parent
:nth-child() |	p:nth-child(2) |	Selects every <p> element that is the second child of its parent
:nth-last-child() |	p:nth-last-child(2) |	Selects every <p> element that is the second child of its parent, counting from the last child
:only-child |	p:only-child |	Selects every <p> element that is the only child of its parent

### Type
Selector | Example | Description
--|--|--
:first-of-type |	p:first-of-type |	Selects every <p> element that is the first <p> element of its parent
:last-of-type |	p:last-of-type |	Selects every <p> element that is the last <p> element of its parent
:nth-last-of-type() |	p:nth-last-of-type(2) |	Selects every <p> element that is the second <p> element of its parent, counting from the last child
:nth-of-type() |	p:nth-of-type(2) |	Selects every <p> element that is the second <p> element of its parent
:only-of-type |	p:only-of-type |	Selects every <p> element that is the only <p> element of its parent

### Input
Selector | Example | Description
--|--|--
:focus |	input:focus |	Selects the input element which has focus
:valid |	input:valid |	Selects all input elements with a valid value
:invalid |	input:invalid |	Selects all input elements with an invalid value
:enabled |	input:enabled |	Selects every enabled <input> element

### Links
Selector | Example | Description
--|--|--
:hover |	a:hover |	Selects links on mouse over
:active |	a:active |	Selects the active link
:link |	a:link |	Selects all unvisited links
:visited |	a:visited |	Selects all visited links

### Misc
Selector | Example | Description
--|--|--
* |	* |	Selects all elements
:not() |	:not(p) |	Selects every element that is not a <p> element
::selection |	::selection |	Selects the portion of an element that is selected by a user
::first-letter 	|p::first-letter |	Selects the first letter of every <p> element
::first-line |	p::first-line |	Selects the first line of every <p> element