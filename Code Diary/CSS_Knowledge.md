# CSS Knowledge
Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML.


## Selectors
Selector | Example | Description
--|--|--
.class | .intro |	Selects all elements with class="intro"
.class1.class2 	.name1.name2 	Selects all elements with both name1 and name2 set within its class attribute
.class1 .class2 	.name1 .name2 	Selects all elements with name2 that is a descendant of an element with name1
#id 	#firstname 	Selects the element with id="firstname"
* 	* 	Selects all elements
element 	p 	Selects all <p> elements
element.class 	p.intro 	Selects all <p> elements with class="intro"
element,element 	div, p 	Selects all <div> elements and all <p> elements
element element 	div p 	Selects all <p> elements inside <div> elements
element>element 	div > p 	Selects all <p> elements where the parent is a <div> element
element+element 	div + p 	Selects the first <p> element that is placed immediately after <div> elements
element1~element2 	p ~ ul 	Selects every <ul> element that is preceded by a <p> element
[attribute] 	[target] 	Selects all elements with a target attribute
[attribute=value] 	[target="_blank"] 	Selects all elements with target="_blank"
[attribute~=value] 	[title~="flower"] 	Selects all elements with a title attribute containing the word "flower"
[attribute|=value] 	[lang|="en"] 	Selects all elements with a lang attribute value equal to "en" or starting with "en-"
[attribute^=value] 	a[href^="https"] 	Selects every <a> element whose href attribute value begins with "https"
[attribute$=value] 	a[href$=".pdf"] 	Selects every <a> element whose href attribute value ends with ".pdf"
[attribute*=value] 	a[href*="w3schools"] 	Selects every <a> element whose href attribute value contains the substring "w3schools"