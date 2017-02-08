Gasoline Turbo
==============

**Generic Template** (but "Gasoline Turbo" smells better)

**Generates Blaze, React and Angular template from the same input.**

It works both as a command line tool or you can add it as any other npm module to your node.js and/or Meteor application. Works client-side in the browser too.


Project status
==============

Under development - just started.


Visual UI
=========

Example application using this package (Gasoline Visual UI) you can see here: [https://gasoline-turbo.meteorfarm.com](https://gasoline-turbo.meteorfarm.com)

Usage
=====

When installed globally as npm module `npm install -g gasoline-turbo`, you can run CLI from your terminal:

```
gasoline-turbo -i input.json -o output_dir -f blaze
	-i, --input 	Input file
	-o, --output	Output directory
	-f, --format	Output format. Can be "blaze", "react", "angular" or "html". Default: "blaze".
	-w, --overwrite	Overwrite existing output files.
```

Or you can add it to your Meteor application by running `meteor npm install --save gasoline-turbo` and in your code:

```
const gasoline = require("gasoline-turbo");
```

*(works both-client side and server-side)*

See [API reference](#api-reference) for list of exposed functions.


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

**Angular 1**

HTML
```html
<homePage>
</homePage>
```

JS
```js
//----------------------------------------
//

//----------------------------------------
'use strict';
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import homePageTemplate from './homepage.html';

const name = 'home';
var that;

class Home {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
    console.log("Home constructor");
    this.scopeName = name;  // Helps when digging through Angular scopes
    that = this;

// Subscriptions...
//    this.subscribe('things', () => []);

    this.user = Meteor.user();  // Get current user

    this.helpers({
//    	things: () => Things.find()
    });

  }; // End of constructor
} // End of class

// create a module
export default angular.module(name, [
  angularMeteor
  ,uiRouter
]).component(name, {
  template: homePageTemplate,
  controller: Home
})
  .config(config)
  .run(run);

function config($locationProvider, $urlRouterProvider, $stateProvider) {
  'ngInject';

  // console.log("Home.config()");
}

function run($rootScope, $state) {
  'ngInject';

};
```

**Angular 2**

HTML
```html
<home-page>
</home-page>
```

TS (Typescript)

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Home page works!';
}
```


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

```html
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
                             "event": "onclick",
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
`event` is HTML event attribute name, for example: `onclick`

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
			<button className="nice-button" onClick={this.onNiceClick}></div>
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

**Angular 1**

(not implemented yet)

**Angular 2**

(not implemented yet)


Condition
---------

Conditional rendering. If expression evals true render one content else render another content. `children` array can contain only two objects: one of type "conditon-true" and another of type "condition-false". If condition evals true, content of `condition-true` will be rendered, otherwise content of `condition-false` will be rendered.

```js
{
	"type": "condition",
	"condition": "currentUser",

	"children": [
		{
			"type": "condition-true",

			"children": [
			]
		},

		{
			"type": "condition-false",

			"children": [
			]
		}
	]
}
```

Example input:

```js
{
	"type": "condition",
	"condition": "currentUser",

	"children": [
		{
			"type": "condition-true",

			"children": [
				{
					"type": "text",
					"text": "You are logged in!"
				}
			]
		},

		{
			"type": "condition-false",

			"children": [
				{
					"type": "text",
					"text": "You are not logged in!"
				}
			]
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

**Angular 1**

(not implemented yet)

**Angular 2**

(not implemented yet)


#API Reference


##randomString(len = 17)

Simply returns unique random string. (e.g. `XlE1N31VZA7iGLG43M`)


##addId(input, force = true)

Fuction iterates through entire `input` tree and sets each object's `_id` member to random string. If argument `force` is set to `true` then function sets `_id` even if object already have `_id` set (overwrites _id with new unique random value).  


##findObject(input, objectId)

Searches `input` for object which `_id` equals `objectId` argument and returns that object. If object is not found then function returns `null`.


##findParentObject(input, objectId)

Function returns object's parent.


##findParentOfType(input, objectId, parentType)

Function searches the tree upwards starting from object's direct parent and returns first element that matches given type.

Example:

```
var template = findParentOfType(input, obj._id, "template");
```


##selectObject(input, objectId)

Object which `_id` equals `objectId` will be marked as selected (member `selected` will be set to true). All other objects will be unselected (member `selected` will be removed).


##findSelectedObject(input)

Function will return (first) object which `selected` property is `true`.


##acceptChildren(input, objectId)

Function returns `true` if object can contain children. Otherwise returns `false`.


##addObject(input, parentId, object)

Function will add new object as a child of the object which `_id` equals `parentId`.


##removeObject(input, objectId)

Object which `_id` equals `objectId` argument will be removed from the input tree.


##getBlaze(input, callback)

Function returns blaze html and js.

Example:

```js
getBlaze(input, function(err, html, js) {
	if(err) {
		alert(err);
		return;
	}

	console.log(html);
	console.log(js);
});
```

##getReact(input, callback)

Function returns react jsx.

Example:

```js
getReact(input, function(err, jsx) {
	if(err) {
		alert(err);
		return;
	}

	console.log(jsx);
});
```

##getAngular(input, callback)

*Sorry, angular is not supported yet*


##getHTML(input, callback)

Function returns pure static HTML - any control structures (loops, conditions etc.) are ignored, but their html content is included.

Example:

```js
getHTML(input, function(err, html) {
	if(err) {
		alert(err);
		return;
	}

	console.log(html);
});
```

##getWireframe(input, callback)

Function returns static HTML which can be used by [visual UI](#visual-ui).

Each element is encapsulated into `<div class="gasoline-turbo" data-id="OBJECT ID"> ... </div>` or `<span class="gasoline-turbo" data-id="OBJECT ID"> ... </span>` ("div" or "span" - depending on is element inline or block-level entity).

Example:

```js
getWireframe(input, function(err, html) {
	if(err) {
		alert(err);
		return;
	}

	console.log(html);
});
```

---

To be continued...
