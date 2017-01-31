Gasoline Turbo
==============

**Generic Template** (but "Gasoline Turbo" sounds better) :)

Generates Blaze, React and Angular template from the same input.

It works both as a command line tool or you can add it as any other npm module to your node.js and/or Meteor application. Works client-side in the browser too.


Usage
=====

When installed as npm module, you can run CLI:

```
gasoline-turbo -i input.json -o output_dir -f blaze
	-i, --input	Input file
	-o, --output	Output directory
	-f, --format	Output format. Can be "blaze", "react" or "angular". Default: "blaze".

```


Input
=====

Input is object describing each html node plus control structures frequently used in client-side rendering templates such as "condition", "loop", etc.

Root of the object contains array of templates:

```js
{
	templates: [

	]
}
```

Template object
---------------

Template object:

```js
{
	type: "template",
	name: "HomePage",

	children: [

	]
}
```

*Example:*

```js
{
	templates: [
		{
			type: "template",
			name: "HomePage",

			children: [

			]
		}

	]
}
```

This input will produce:

**Blaze**

HTML
```html
<template name="HomePage">
</template>
```

JS
```js
Template.HomePage.events({
	
});

Template.HomePage.helpers({
	
});
```

**React**

JSX
```
export const HomePage = React.createClass({
	render() {
		return (
			<div></div>
		);
	}
});
```

**Angular**

(not implemented yet)


HTML node
---------

Each object's `children` array can contain html node description like this:

```js
{
   "type": "html",
   "name": "div",
   "attributes": [
      {
         "name": "class",
         "value": "container"
      }
   ],

   "children": [
   ],

   "events": [
   ]
}

```

That will produce:

**Blaze**

```html
<div class="container"></div>
```

If output format is **React**, attribute names will be properly renamed:

```html
<div className="container"></div>
```


Text node
---------

Each object's `children` array can contain text node. Text node cannot have children. Text will be inserted into parent node.

```js
{
   "type": "text",
   "text": "Hello World!"
}
```

Example div with text:

```js
{
   "type": "html",
   "name": "div",
   "attributes": [
      {
         "name": "class",
         "value": "container"
      }
   ],
   "children": [
      {
         "type": "text",
         "text": "Hello World!"
      }
   ]
}

```

That will produce:

```
<div class="container">
	Hello World!
</div>
```

Events
------

Event handler is defined in element's parent "template" object, and can be attached to any element, for example on "click":

```js
{
	templates: [
		{
			type: "template",
			name: "HomePage",

			children: [
				{
					type: "html",
					name: "button",
					selector: ".nice-button",

					attributes: [
						name: "class",
						value: "nice-button"
					],

					children: [],

					events: [
           			   {
                             "type": "event",
                             "event": "click",
                             "handler": "onNiceClick"
                       }
					]
				}
			],

			handlers: [
				{
					type: "handler",
					name: "onNiceClick",
					code: "alert(\"Yeah!\");"
				}
			]
		}

	]
}
```
`selector` is used in blaze, in this example click to any element with class `.nice-button` will execute handler.

Resulting code:

**Blaze**

```js
Template.HomePage.events({
	"click .nice-button": function(e, t) {
		alert("Yeah!");
	}	
});
```

**React**

```
export const HomePage = React.createClass({
	onNiceClick(e) {
		alert("Yeah!");
	},

	render() {
		return (
			<button className="nice-button" onClick={onNiceClick}></div>
		);
	}
});

```

Loop
----

Each object's `children` array can contain loop node.

```js
{
   "type": "loop",
   "dataset": "customers",
   "children": [
      {
         "type": "text",
         "text": "{{customers.name}}"
      }
   ]
}
```

That will produce:

**Blaze**

HTML
```html
{{#each customers}}
	{{name}}
{{/each}}
```

**React**

JSX
```
{
	customers.map(function(item) {
		return item.name;
	})
}
```

**Angular**

(not implemented yet)


Condition
---------

Conditional rendering. If expression evals true render one content else render another content. Each object's `children` array can contain condition node.

```js
{
   "type": "condition",
   "condition": "Meteor.user()",

   "true": [

   ],
   "false": [

   ]
}

```

Property `true` is array of children which will be rendered if condition evals `true`.
Property `false` is array of children which will be rendered if condition evals `false`.

Example input:

```
{
   "type": "condition",
   "condition": "currentUser",
   "true": [
      {
         "type": "text",
         "text": "You are logged in!"
      }
   ],
   "false": [
      {
         "type": "text",
         "text": "You are not logged in!"
      }
   ]
}

```

Output:

**Blaze**

HTML
```html
{{#if currentUser}}
	You are logged in!
{{else}}
	You are not logged in!
{{/if}}
```

**React**

JSX
```
{
	currentUser ? "You are logged in!" : "You are not logged in!"
}
```

**Angular**

(not implemented yet)


---

To be continued...

