var voidElements = [
	"area",
	"base",
	"br",
	"col",
	"embed",
	"hr",
	"img",
	"input",
	"keygen",
	"link",
	"meta",
	"param",
	"source",
	"track",
	"wbr"
];

var inlineElements = [
	"b",
	"big",
	"i",
	"small",
	"tt",
	"abbr",
	"acronym",
	"cite",
	"code",
	"dfn",
	"em",
	"kbd",
	"strong",
	"samp",
	"var",
	"a",
	"bdo",
	"br",
	"img",
	"map",
	"object",
	"q",
	"script",
	"span",
	"sub",
	"sup",
	"button",
	"input",
	"label",
	"select",
	"textarea"
];

var reactAttrs = {
	"accept": "accept",
	"accesskey": "accessKey",
	"action": "action",
	"allowfullscreen": "allowFullScreen",
	"allowtransparency": "allowTransparency",
	"alt": "alt",
	"autocapitalize": "autoCapitalize",
	"autocomplete": "autoComplete",
	"autofocus": "autoFocus",
	"autoplay": "autoPlay",
	"cellpadding": "cellPadding",
	"cellspacing": "cellSpacing",
	"charset": "charSet",
	"checked": "checked",
	"class": "className",
	"colspan": "colSpan",
	"content": "content",
	"contenteditable": "contentEditable",
	"contextmenu": "contextMenu",
	"controls": "controls",
	"data": "data",
	"datetime": "dateTime",
	"dir": "dir",
	"disabled": "disabled",
	"draggable": "draggable",
	"enctype": "encType",
	"form": "form",
	"frameborder": "frameBorder",
	"height": "height",
	"hidden": "hidden",
	"href": "href",
	"for": "htmlFor",
	"httpequiv": "httpEquiv",
	"icon": "icon",
	"id": "id",
	"label": "label",
	"lang": "lang",
	"list": "list",
	"loop": "loop",
	"max": "max",
	"maxlength": "maxLength",
	"method": "method",
	"min": "min",
	"multiple": "multiple",
	"name": "name",
	"pattern": "pattern",
	"placeholder": "placeholder",
	"poster": "poster",
	"preload": "preload",
	"radiogroup": "radioGroup",
	"readonly": "readOnly",
	"rel": "rel",
	"required": "required",
	"role": "role",
	"rowspan": "rowSpan",
	"scrollleft": "scrollLeft",
	"scrolltop": "scrollTop",
	"selected": "selected",
	"size": "size",
	"spellcheck": "spellCheck",
	"src": "src",
	"step": "step",
	"style": "style",
	"tabindex": "tabIndex",
	"target": "target",
	"title": "title",
	"type": "type",
	"value": "value",
	"width": "width",
	"wmode": "wmode"
};

var reactEvents = {
	"oncopy": "onCopy",
	"oncut": "onCut",
	"onpaste": "onPaste",
	"oncompositionend": "onCompositionEnd",
	"oncompositionstart": "onCompositionStart",
	"oncompositionupdate": "onCompositionUpdate",
	"onkeydown": "onKeyDown",
	"onkeypress": "onKeyPress",
	"onkeyup": "onKeyUp",
	"onfocus": "onFocus",
	"onblur": "onBlur",
	"onchange": "onChange",
	"oninput": "onInput",
	"onsubmit": "onSubmit",
	"onclick": "onClick",
	"oncontextmenu": "onContextMenu",
	"ondoubleclick": "onDoubleClick",
	"ondrag": "onDrag",
	"ondragend": "onDragEnd",
	"ondragenter": "onDragEnter",
	"ondragexit": "onDragExit",
	"ondragleave": "onDragLeave",
	"ondragover": "onDragOver",
	"ondragstart": "onDragStart",
	"ondrop": "onDrop",
	"onmousedown": "onMouseDown",
	"onmouseenter": "onMouseEnter",
	"onmouseleave": "onMouseLeave",
	"onmousemove": "onMouseMove",
	"onmouseout": "onMouseOut",
	"onmouseover": "onMouseOver",
	"onmouseup": "onMouseUp",
	"onselect": "onSelect",
	"ontouchcancel": "onTouchCancel",
	"ontouchend": "onTouchEnd",
	"ontouchmove": "onTouchMove",
	"ontouchstart": "onTouchStart",
	"onscroll": "onScroll",
	"onwheel": "onWheel",
	"onabort": "onAbort",
	"oncanplay": "onCanPlay",
	"oncanplaythrough": "onCanPlayThrough",
	"ondurationchange": "onDurationChange",
	"onemptied": "onEmptied",
	"onencrypted": "onEncrypted",
	"onended": "onEnded",
	"onerror": "onError",
	"onloadeddata": "onLoadedData",
	"onloadedmetadata": "onLoadedMetadata",
	"onloadstart": "onLoadStart",
	"onpause": "onPause",
	"onplay": "onPlay",
	"onplaying": "onPlaying",
	"onprogress": "onProgress",
	"onratechange": "onRateChange",
	"onseeked": "onSeeked",
	"onseeking": "onSeeking",
	"onstalled": "onStalled",
	"onsuspend": "onSuspend",
	"ontimeupdate": "onTimeUpdate",
	"onvolumechange": "onVolumeChange",
	"onwaiting": "onWaiting",
	"onload": "onLoad",
	"onerror": "onError",
	"onanimationstart": "onAnimationStart",
	"onanimationend": "onAnimationEnd",
	"onanimationiteration": "onAnimationIteration",
	"ontransitionend": "onTransitionEnd"
};

var randomString = function(len) {
	len = len || 17;

	var text = "";
	// let first char to be letter
	var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	text += charset.charAt(Math.floor(Math.random() * charset.length));

	// other chars can be numbers
	charset += "0123456789";
	for(var i = 0; i < len; i++) {
		text += charset.charAt(Math.floor(Math.random() * charset.length));
	}

	return text;
};

var getTabs = function(depth) {
	var str = "";
	for(var i = 0; i < depth; i++) {
		str += "\t";
	}
	return str;
};

var identMultilineString = function(str, depth) {
	var ind = "";
	for(var i = 0; i < depth; i++) {
		ind += "\t";
	}

	var lines = str.split("\n");
	lines.map(function(line, ndx) {
		lines[ndx] = ind + line;
	});
	return lines.join("\n");
};

var extractBlazeHelpers = function(str) {
	return str.match(/\{\{.*?\}\}/g) || [];
};

var escapeRegEx = function (string) {
	return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

var replaceSubstr = function(string, find, replace) {
	return string.replace(new RegExp(escapeRegEx(find), 'g'), replace);
};

var addId = function(input, force) {
	if(!input._id || force) {
		input._id = randomString();
	}

	if(input.templates) {
		input.templates.map(function(template) {
			addId(template, force);
		});
	}

	if(input.children) {
		input.children.map(function(child) {
			addId(child, force);
		});
	}
};

var removeId = function(input) {
	if(input._id) {
		delete input._id;
	}

	if(input.templates) {
		input.templates.map(function(template) {
			removeId(template);
		});
	}

	if(input.children) {
		input.children.map(function(child) {
			removeId(child);
		});
	}
};

var selectObject = function(input, objectId) {
	if(input._id && input._id == objectId) {
		input.selected = true;
	} else {
		delete input.selected;
	}

	if(input.templates) {
		input.templates.map(function(template) {
			selectObject(template, objectId);
		});
	}

	if(input.children) {
		input.children.map(function(child) {
			selectObject(child, objectId);
		});
	}

	return null;
};

var findObject = function(input, objectId) {
	if(input._id && input._id == objectId) {
		return input;
	}

	if(input.templates) {
		var found = null;
		input.templates.find(function(template) {
			found = findObject(template, objectId);
			return !!found;
		});
		if(found) {
			return found;
		}
	}

	if(input.children) {
		var found = null;
		input.children.find(function(child) {
			found = findObject(child, objectId);
			return !!found;
		});
		if(found) {
			return found;
		}
	}

	return null;
};

var objectGotClass = function(obj, className) {
	if(!obj || !obj.attributes || !className) {
		return false;
	}

	var classAttr = obj.attributes.find(function(attr) {
		return attr.name == "class";
	});

	if(!classAttr || !classAttr.value) {
		return false;
	}

	var classes = classAttr.value.split(" ");
	for(var i = 0; i < classes.length; i++) {
		classes[i] = classes[i].trim().toLowerCase();
	}

	return classes.indexOf(className) >= 0;
};

var getObjectIdAttribute = function(obj) {
	if(!obj || !obj.attributes) {
		return "";
	}

	var idAttr = obj.attributes.find(function(attr) {
		return attr.name == "id";
	});

	if(!idAttr || !idAttr.value) {
		return "";
	}

	return idAttr.value;
};

var _findObjectsBySelector = function(input, selector, list) {
	if(!selector) {
		return;
	}

	if(selector[0] == ".") {
		var className = selector.substring(1);
		if(objectGotClass(input, className)) {
			list.push(input);
		}
	} else {
		if(selector[0] == "#") {
			var id = selector.substring(1);
			if(getObjectIdAttribute(input) == id) {
				list.push(input);
			}
		} else {
			if(input.element && input.element == selector) {
				list.push(input);
			}
		}
	}

	if(input.templates) {
		input.templates.map(function(template) {
			_findObjectsBySelector(template, selector, list);
		});
	}

	if(input.children) {
		input.children.map(function(child) {
			_findObjectsBySelector(child, selector, list);
		});
	}
};

var findObjectsBySelector = function(input, selector) {
	var list = [];
	_findObjectsBySelector(input, selector, list);
	return list;
};

var findParentObject = function(input, objectId) {
	if(input.templates) {
		if(!!input.templates.find(function(template) {
			if(template._id && template._id == objectId) {
				return true;
			}
		})) {
			return input;
		}

		var found = null;
		input.templates.find(function(template) {
			found = findParentObject(template, objectId);
			return !!found;
		});
		if(found) {
			return found;
		}
	}

	if(input.children) {
		if(!!input.children.find(function(child) {
			if(child._id && child._id == objectId) {
				return true;
			}
		})) {
			return input;
		}

		var found = null;
		input.children.find(function(child) {
			found = findParentObject(child, objectId);
			return !!found;
		});
		if(found) {
			return found;
		}
	}

	return null;
};

var findParentOfType = function(input, objectId, parentType) {
	var parent = null;
	do {
		parent = findParentObject(input, parent ? parent._id : objectId);
	} while(parent && parent.type != parentType);

	return parent && parent.type == parentType ? parent : null;
};


var findSelectedObject = function(input) {
	if(input.selected) {
		return input;
	}

	if(input.templates) {
		var found = null;
		input.templates.find(function(template) {
			found = findSelectedObject(template);
			return !!found;
		});
		if(found) {
			return found;
		}
	}

	if(input.children) {
		var found = null;
		input.children.find(function(child) {
			found = findSelectedObject(child);
			return !!found;
		});
		if(found) {
			return found;
		}
	}

	return null;
};

var acceptChildren = function(object) {
	return (object.type == "template" || object.type == "html" || object.type == "condition-true" || object.type == "condition-false" || object.type == "loop") && !(object.type == "text" || object.type == "inclusion" || object.type == "condition" || (object.type == "html" && voidElements.indexOf(object.element) >= 0));
};

var addObject = function(input, parentId, object) {	
	var parent = findObject(input, parentId);
	if(!parent) {
		return;
	}

	// some elements cannot accept children
	if(!acceptChildren(parent)) {
		return;
	}

	if(!parent.children) {
		parent.children = [];
	}

	var newObject = JSON.parse(JSON.stringify(object));

	if(newObject.type == "condition") {
		if(!newObject.children) {
			newObject.children = [];
		}

		if(!newObject.children.find(function(c) { return c.type == "condition-true"; })) {
			var trueNode = {
				type: "condition-true",
				children: []
			};
			newObject.children.push(trueNode);
		}

		if(!newObject.children.find(function(c) { return c.type == "condition-false"; })) {
			var falseNode = {
				type: "condition-false",
				children: []
			};
			newObject.children.push(falseNode);
		}
	}

	addId(newObject, true);

	parent.children.push(newObject);

	return newObject;
};

var removeObject = function(input, objectId) {
	var parentObject = findParentObject(input, objectId);
	if(!parentObject) {
		return;
	}

	if(parentObject.templates) {
		var index = parentObject.templates.findIndex(function(obj) { return obj._id == objectId; });
		if(index >= 0) {
			parentObject.templates.splice(index, 1);
			return;
		}
	}

	if(parentObject.children) {
		var index = parentObject.children.findIndex(function(obj) { return obj._id == objectId; });
		if(index >= 0) {
			parentObject.children.splice(index, 1);
			return;
		}
	}
};

// ============
// BLAZE
// ============

var getBlaze = function(input, cb) {
	var html = "";
	var js = "";
	var eventHandlers = [];

	var replaceSpecialVars = function(s) {
		var result = s + "";
//		result = replaceSubstr(result, "LOCAL_STATE", "???");
		return result;
	};

	var addChild = function(child, depth, context) {
		switch(child.type) {
			// ---
			// HTML node
			// ---
			case "html": {
				var isVoid = voidElements.indexOf(child.element) >= 0;

				html += getTabs(depth);
				html += "<" + child.element;

				if(child.attributes) {
					child.attributes.map(function(attribute) {
						html += " " + attribute.name;
						if(attribute.value) {
							html += "=\"" + attribute.value + "\"";
						}
					});
				}

				html += ">\n";

				if(!isVoid) {

					if(child.children) {
						child.children.map(function(ch) {
							addChild(ch, depth + 1, context);
						});					
					}

					html += getTabs(depth);
					html += "</" + child.element + ">\n";
				}


				if(child.events) {
					child.events.map(function(event) {
						var handler = eventHandlers.find(function(h) { return h.name == event.handler; });
						if(handler) {
							handler.selectors = handler.selectors || [];

							var evt = (event.event || "").toLowerCase();
							if(evt.indexOf("on") == 0) {
								evt = evt.slice(2);
							}

							var childSelector = child.selector;

							if(!childSelector) {
								// No selector. Try element id...
								if(child.attributes) {
									var idAttr = child.attributes.find(function(attr) { return attr.name == "id"; });
									if(idAttr && idAttr.value) {
										childSelector = "#" + idAttr.value;
									}
								}
							}

							if(!childSelector) {
								// No selector. Try element class...
								if(child.attributes) {
									var classAttr = child.attributes.find(function(attr) { return attr.name == "class"; });
									if(classAttr && classAttr.value) {
										childSelector = ("." + classAttr.value + "").split(" ").join(".");
									}
								}
							}

							if(!childSelector) {
								// No selector. Use element name
								childSelector = child.element;
							}

							var selector = evt + " " + childSelector;
							if(handler.selectors.indexOf(selector) < 0) {
								handler.selectors.push(selector);
							}
						}
					});
				}
			}; break;

			// ---
			// Loop
			// ---
			case "loop": {
				html += getTabs(depth);
				html += "{{#each " + child.dataset + "}}\n";

				if(child.children) {
					child.children.map(function(ch) {
						addChild(ch, depth + 1, child.dataset);
					});					
				}

				html += getTabs(depth);
				html += "{{/each}}\n";
			}; break;

			// ---
			// Condition
			// ---
			case "condition": {
				html += getTabs(depth);
				html += "{{#if " + child.condition + "}}\n";

				var trueNode = null;
				var falseNode = null;
				if(child.children) {
					trueNode = child.children.find(function(c) { return c.type == "condition-true"; });
					falseNode = child.children.find(function(c) { return c.type == "condition-false"; });
				}

				if(trueNode && trueNode.children) {
					trueNode.children.map(function(ch) {
						addChild(ch, depth + 1, context);
					});
				}

				if(falseNode && falseNode.children) {
					html += getTabs(depth);
					html += "{{else}}\n";

					falseNode.children.map(function(ch) {
						addChild(ch, depth + 1, context);
					});
				}

				html += getTabs(depth);
				html += "{{/if}}\n";
			}; break;

			// ---
			// Text
			// ---
			case "text": {

				html += identMultilineString(child.text, depth);
				html += "\n";

			}; break;

			// ---
			// Inclusion
			// ---
			case "inclusion": {

				html += getTabs(depth);
				html += "{{> " + child.template + "}}";
				html += "\n";

			}; break;
		}
	};

	if(!input.templates) {
		cb(new Error("Error: no templates found.", html, js));
		return;
	}

	var error = false;
	input.templates.map(function(template) {
		if(template.type != "template") {
			error = true;
			cb(new Error("Error: unknown template type: \"" + template.type + "\"", html, js));
			return;
		}
		if(!template.name) {
			error = true;
			cb(new Error("Error: invalid template name \"" + template.name + "\"", html, js));
			return;
		}

		eventHandlers = [];
		if(template.handlers) {
			eventHandlers = JSON.parse(JSON.stringify(template.handlers));
		}

		// ====
		// HTML
		// ====

		if(html) {
			html += "\n";
		}

		html += "<template name=\"" + template.name + "\">\n";

		if(template.children) {
			template.children.map(function(child) {
				addChild(child, 1, "this");
			});
		}

		html += "</template>\n";
		html += "\n";


		// ===
		// JS
		// ===


		// ------
		// Events
		// ------

		js += "\n\n";
		js += "Template." + template.name + ".events({\n";

		var events = "";
		eventHandlers.map(function(handler) {
			if(handler.selectors && handler.selectors.length) {
				if(events) {
					events += ",\n\n";
				}

				var selectors = "";
				handler.selectors.map(function(selector) {
					if(selectors) {
						selectors += ", ";
					}
					selectors += selector;
				});

				events += "\t\"" + selectors + "\": function(e, t) {\n";
				var handlerCode = replaceSpecialVars(handler.code);
				events += identMultilineString(handlerCode, 2) + "\n";
				events += "\t}";
			}
		});

		js += events + "\n";
		js += "});";


		// ------
		// helpers
		// ------

		js += "\n\n";
		js += "Template." + template.name + ".helpers({\n";

		var helpers = "";
		if(template.helpers) {
			template.helpers.map(function(helper) {
				if(helpers) {
					helpers += ",\n\n";
				}

				var helperArgs = helper.arguments || [];
				helpers += "\t" + helper.name + ": function(" + helperArgs.join(", ") + ") {\n";

				var helperCode = replaceSpecialVars(helper.code);
				helpers += identMultilineString(helperCode, 2) + "\n";
				helpers += "\t}";
			});
		}

		js += helpers + "\n";
		js += "});";
	});

	if(!error) {
		cb(null, html, js);
	}
};



// ============
// REACT
// ============


var getReact = function(input, cb) {
	var jsx = "";

	var replaceSpecialVars = function(s) {
		var result = s + "";
//		result = replaceSubstr(result, "LOCAL_STATE", "????");
		return result;
	};

	var blazeHelperCallToReact = function(helper, context) {
		if(helper.length < 4) {
			return helper;
		}

		var s = helper;

		s = s.slice(2);
		s = s.slice(0, -2);

		var isInclusion = false;
		if(s.length && s[0] == ">") {
			isInclusion = true;
			s = s.slice(1);
		}

		var args = [];
		var tmpArgs = s.split(" ");
		tmpArgs.map(function(arg) {
			if(arg.trim()) { 
				args.push(arg);
			}
		});

		s = "";
		if(args.length) {
			s = args[0];
			args.splice(0, 1);
		}

		if(isInclusion) {
			argStr = "";
			args.map(function(arg, ndx) {
				argStr += " ";
				argStr += arg;
			});
			s += argStr;

			s = "<" + s + " />";
		} else {
			if(args.length) {
				// got args

				// function call
				s += "(";

				// args in format x=y are converted to {x: y}
				var argObj = {};
				args.map(function(arg, ndx) {
					var tmpProps = arg.split("=");
					if(tmpProps.length > 1) {
						argObj[tmpProps[0]] = tmpProps[1];
					}
				});

				argStr = "";
				if(Object.keys(argObj).length) {
					argStr += JSON.stringify(argObj);
				}

				// naked args (not in x=y format)
				args.map(function(arg, ndx) {
					if(arg.indexOf("=") < 0) {
						if(argStr) {
							argStr += ", ";
						}
						argStr += arg;
					}
				});

				s += argStr;
				s += ")";
				s = "this." + s;
			} else {
				// no args. Can be function call (helper) or dataset field name
				if(context == "this" && s.indexOf(".") < 0) {
					// most likelly it's a helper
					s += "()";
					s = "this." + s;
				} else {
					// smells like dataset field
					s = context + "." + s;
				}
			}
			s = "{" + s + "}";
		}

		return s;
	};

	var blazeHelperCallsToReact = function(str, context) {
		var out = str;
		var helpers = extractBlazeHelpers(str);
		helpers.map(function(helper) {
			var converted = blazeHelperCallToReact(helper, context);
			out = replaceSubstr(out, helper, converted);
		});
		return out;
	};

	var addChild = function(child, depth, context) {
		switch(child.type) {
			// ---
			// HTML node
			// ---
			case "html": {
				var isVoid = voidElements.indexOf(child.element) >= 0;

				jsx += getTabs(depth);
				jsx += "<" + child.element;

				if(child.attributes) {
					child.attributes.map(function(attribute) {
						jsx += " ";
						var attrName = reactAttrs[attribute.name] || attribute.name;
						var nameConverted = blazeHelperCallsToReact(attrName, context);
						jsx += nameConverted;

						if(attribute.value) {
							var valConverted = blazeHelperCallsToReact(attribute.value, context);
							if(valConverted && valConverted[0] == "{") {
								jsx += "=" + valConverted;
							} else {
								jsx += "=\"" + valConverted + "\"";
							}
						}
					});
				}

				if(child.events) {
					child.events.map(function(event) {
						jsx += " ";
						jsx += reactEvents[event.event];
						jsx += "={";
						jsx += "this." + event.handler;
						jsx += "}";
					});
				}

				if(isVoid) {
					jsx += " />\n";
				} else {
					jsx += ">\n";
				}

				if(!isVoid) {
					if(child.children) {
						child.children.map(function(ch) {
							addChild(ch, depth + 1, context);
						});					
					}

					jsx += getTabs(depth);
					jsx += "</" + child.element + ">\n";
				}
			}; break;

			// ---
			// Loop
			// ---
			case "loop": {
				var newContext = child.dataset + "Item";
				jsx += getTabs(depth);
				jsx += "{\n";


				jsx += getTabs(depth + 1);
				jsx += child.dataset + ".map(function(item, itemIndex) {\n";

				if(child.children) {
					jsx += getTabs(depth + 2);
					jsx += "return (\n";
					child.children.map(function(ch) {
						if(ch.type == "html") {
							ch.attributes = ch.attributes || [];
							ch.attributes.push({ name: "key", value: "{itemIndex}" });
						}
						addChild(ch, depth + 3, "item");
					});					
					jsx += getTabs(depth + 2);
					jsx += ");\n";
				} else {
					jsx += getTabs(depth + 2);
					jsx += "return (\n";

					jsx += getTabs(depth + 3);
					jsx += "<div></div>\n";

					jsx += getTabs(depth + 2);
					jsx += ");\n";
				}

				jsx += getTabs(depth + 1);
				jsx += "})\n";

				jsx += getTabs(depth);
				jsx += "}\n";

			}; break;

			// ---
			// Condition
			// ---
			case "condition": {

				jsx += getTabs(depth);

// !!! extract and pass arguments instead simply "()"
				jsx += "{this." + child.condition + "() ? (\n";

				var trueNode = null;
				var falseNode = null;
				if(child.children) {
					trueNode = child.children.find(function(c) { return c.type == "condition-true"; });
					falseNode = child.children.find(function(c) { return c.type == "condition-false"; });
				}

				if(trueNode && trueNode.children) {
					trueNode.children.map(function(ch) {
						addChild(ch, depth + 1, context);
					});
				} else {
					jsx += getTabs(depth + 1);
					jsx += "null\n";
				}
				jsx += getTabs(depth);
				jsx += ") : (\n";

				if(falseNode && falseNode.children) {
					falseNode.children.map(function(ch) {
						addChild(ch, depth + 1, context);
					});
				} else {
					jsx += getTabs(depth + 1);
					jsx += "null\n";
				}

				jsx += getTabs(depth);
				jsx += ")}\n";
			}; break;

			// ---
			// Text
			// ---
			case "text": {
				var text = blazeHelperCallsToReact(child.text, context);

				jsx += identMultilineString(text, depth);
				jsx += "\n";

			}; break;

			// ---
			// Inclusion
			// ---
			case "inclusion": {

				jsx += getTabs(depth);
				jsx += "<" + child.template + " />";
				jsx += "\n";

			}; break;
		}
	};


	if(!input.templates) {
		cb(new Error("Error: no templates found.", jsx));
		return;
	}

	var error = false;
	input.templates.map(function(template) {
		if(template.type != "template") {
			error = true;
			cb(new Error("Error: unknown template type: \"" + template.type + "\"", jsx));
			return;
		}
		if(!template.name) {
			error = true;
			cb(new Error("Error: invalid template name \"" + template.name + "\"", jsx));
			return;
		}

		if(jsx) {
			jsx += "\n";
		}

		jsx += "export const " + template.name + " = React.createClass({\n";

		// Helpers
		if(template.helpers) {
			template.helpers.map(function(helper) {
				jsx += "\n\t" + helper.name + "(";
				if(helper.arguments) {
					var argStr = "";
					helper.arguments.map(function(arg) {
						if(argStr) {
							argStr += ", ";
						}
						argStr += arg;
					});
					jsx += argStr;
				}
				jsx += ") {\n";
				var helperCode = replaceSpecialVars(helper.code);
				jsx += identMultilineString(helperCode, 2);
				jsx += "\n\t},\n";
			});
		}

		// Event handlers
		if(template.handlers) {
			template.handlers.map(function(handler) {
				jsx += "\n\t" + handler.name + "(e) {\n";
				var handlerCode = replaceSpecialVars(handler.code);
				jsx += identMultilineString(handlerCode, 2);
				jsx += "\n\t},\n";
			});
		}

		// Render
		jsx += "\n\trender() {\n";
		jsx += "\t\treturn (\n";

		if(template.children) {
			if(template.children.length > 1) {
				jsx += "\t\t\t<div>\n";
				template.children.map(function(child) {
					addChild(child, 4, "this");
				});
				jsx += "\n\t\t\t</div>\n";
			} else {
				template.children.map(function(child) {
					addChild(child, 3, "this");
				});
			}
		} else {
			jsx += "\t\t\t<div></div>\n";
		}

		jsx += "\t\t);\n";
		jsx += "\t}\n";
		jsx += "});";
	});

	if(!error) {
		cb(null, jsx);
	}
};



// ============
// ANGULAR
// ============


var getAngular = function(input, cb) {
	// !!!
	cb(new Error("Error: Sorry, Angular is not supported yet."));
	// !!!
};


// ============
// HTML
// ============

var getHTML = function(input, cb) {
	var html = "";

	var addChild = function(child, depth, context) {
		switch(child.type) {
			// ---
			// HTML node
			// ---
			case "html": {
				var isVoid = voidElements.indexOf(child.element) >= 0;

				html += getTabs(depth);
				html += "<" + child.element;

				if(child.attributes) {
					child.attributes.map(function(attribute) {
						html += " " + attribute.name;
						if(attribute.value) {
							html += "=\"" + attribute.value + "\"";
						}
					});
				}

				html += ">\n";

				if(!isVoid) {

					if(child.children) {
						child.children.map(function(ch) {
							addChild(ch, depth + 1, context);
						});					
					}

					html += getTabs(depth);
					html += "</" + child.element + ">\n";
				}
			}; break;

			// ---
			// Loop
			// ---
			case "loop": {
				html += getTabs(depth);
				html += "<div data-type=\"" + child.type + "\" data-source=\"" + child.dataset + "\">\n";
				if(child.children) {
					child.children.map(function(ch) {
						addChild(ch, depth + 1, child.dataset);
					});
				}
				html += getTabs(depth);
				html += "</div>\n";
			}; break;

			// ---
			// Condition
			// ---
			case "condition": {
				html += getTabs(depth);
				html += "<div data-type=\"" + child.type + "\" data-condition=\"" + child.condition + "\">\n";

				var trueNode = null;
				var falseNode = null;
				if(child.children) {
					trueNode = child.children.find(function(c) { return c.type == "condition-true"; });
					falseNode = child.children.find(function(c) { return c.type == "condition-false"; });
				}

				if(trueNode && trueNode.children) {
					html += getTabs(depth + 1);
					html += "<div data-type=\"" + child.type + "-true\">\n";
					trueNode.children.map(function(ch) {
						addChild(ch, depth + 1, context);
					});
					html += getTabs(depth + 1);
					html += "</div>\n";
				}

				if(falseNode && falseNode.children) {
					html += getTabs(depth + 1);
					html += "<div data-type=\"" + child.type + "-false\">\n";

					falseNode.children.map(function(ch) {
						addChild(ch, depth + 1, context);
					});

					html += getTabs(depth + 1);
					html += "</div>\n";
				}

				html += getTabs(depth);
				html += "</div>\n";
			}; break;

			// ---
			// Text
			// ---
			case "text": {

				html += identMultilineString(child.text, depth);
				html += "\n";

			}; break;

			// ---
			// Inclusion
			// ---
			case "inclusion": {

			}; break;
		}
	};

	if(!input.templates) {
		cb(new Error("Error: no templates found.", html));
		return;
	}

	var error = false;
	input.templates.map(function(template) {
		if(template.type != "template") {
			error = true;
			cb(new Error("Error: unknown template type: \"" + template.type + "\"", html));
			return;
		}
		if(!template.name) {
			error = true;
			cb(new Error("Error: invalid template name \"" + template.name + "\"", html));
			return;
		}

		if(template.handlers) {
			eventHandlers = JSON.parse(JSON.stringify(template.handlers));
		}

		// ====
		// HTML
		// ====

		if(html) {
			html += "\n";
		}

		if(template.children && template.children.length) {
			template.children.map(function(child) {
				addChild(child, 1);
			});

			html += "\n";
		}
	});

	if(!error) {
		cb(null, html);
	}
};


// ========================
// HTML for Visual Designer
// ========================

var getWireframe = function(input, templateName) {
	var html = "";
	var containers = "";

	var addChild = function(child, depth, context) {
		var addNode = function(node, type, text) {
			var isVoid = voidElements.indexOf(node.element) >= 0;
			var isInline = inlineElements.indexOf(node.element) >= 0;

			var containerElement = "div";
			var containerClass = "gasoline-turbo";
			if(node.selected) {
				containerClass += " gasoline-turbo-selected";
			}

			var draggable = true;
			if(node.type == "condition-true" || node.type == "condition-false") {
				containerClass += " gasoline-fixed";
				draggable = false;
			}
			containers += "<" + containerElement + " class=\"" + containerClass + "\" data-id=\"" + node._id + "\"";
			if(draggable) {
				containers += " draggable=\"true\"";
			}
			containers += ">\n";



			html += getTabs(depth);
			html += "<" + node.element;

			if(!node.attributes) {
				node.attributes = [];
			}

			var newAttributes = [];
			newAttributes.push({ name: "data-id", value: node._id });
				node.attributes.map(function(a) {
					if(a) {
						newAttributes.push(a);

					}
			});

			var gasClass = "gas-element";
			var classAttr = newAttributes.find(function(x) { return x.name == "class" });
			if(!classAttr) {
				newAttributes.push({ name: "class", value: gasClass });
				classAttr = newAttributes.find(function(x) { return x.name == "class" });
			} else {
				classAttr.value = gasClass + " " + classAttr.value;
			}

			node.attributes = newAttributes;

			if(node.attributes) {
				node.attributes.map(function(attribute) {
					html += " " + attribute.name;
					if(attribute.value) {
						html += "=\"" + attribute.value + "\"";
					}
				});
			}

			html += ">\n";

			if(!isVoid) {
				if(text) {
					html += identMultilineString(text, depth);
					html += "\n";
				}

				if(node.children) {
					node.children.map(function(node) {
						addChild(node, depth + 1, context);
					});
				}

				if(!text && (!node.children || !node.children.length)) {
					html += "&nbsp;";
				}

				html += getTabs(depth);
				html += "</" + node.element + ">\n";
			}

			// close container element
			containers += getTabs(depth);
			containers += "</" + containerElement + ">\n";

		};


		switch(child.type) {
			// ---
			// HTML node
			// ---
			case "html": {
				var node = JSON.parse(JSON.stringify(child));
				addNode(node, child.type);
			}; break;

			// ---
			// Loop
			// ---
			case "loop": {
				var node = JSON.parse(JSON.stringify(child));
				node.element = "div";
				node.attributes = [{ name: "class", value: "gas-control" }];
				addNode(node, child.type);
			}; break;

			// ---
			// Condition
			// ---
			case "condition": {
				var node = JSON.parse(JSON.stringify(child));
				node.element = "div";
				node.attributes = [{ name: "class", value: "gas-control" }];
				addNode(node, child.type);
			}; break;

			// ---
			// Condition - true
			// ---
			case "condition-true": {
				var node = JSON.parse(JSON.stringify(child));
				node.element = "div";
				node.attributes = [{ name: "class", value: "gas-control" }];
				addNode(node, child.type);
			}; break;

			// ---
			// Condition - false
			// ---
			case "condition-false": {
				var node = JSON.parse(JSON.stringify(child));
				node.element = "div";
				node.attributes = [{ name: "class", value: "gas-control" }];
				addNode(node, child.type);
			}; break;

			// ---
			// Text
			// ---
			case "text": {

				var node = JSON.parse(JSON.stringify(child));
				node.element = "span";
				addNode(node, child.type, child.text);

			}; break;

			// ---
			// Inclusion
			// ---
			case "inclusion": {

				var node = JSON.parse(JSON.stringify(child));
				node.element = "div";
				node.attributes = [{ name: "class", value: "gas-control" }];
				addNode(node, child.type, "{{> " + child.template + "}}");
			}; break;
		}
	};

	if(!input.templates) {
		return "";
	}

	var template = input.templates.find(function(x) { return x.name == templateName; });
	if(!template) {
		return "";
	}

	addId(template);

	var error = false;

	if(template.type != "template") {
		error = true;
		cb(new Error("Error: unknown template type: \"" + template.type + "\"", html, js));
		return;
	}
	if(!template.name) {
		error = true;
		cb(new Error("Error: invalid template name \"" + template.name + "\"", html, js));
		return;
	}

	// ====
	// HTML
	// ====
	if(html) {
		html += "\n";
	}

	var containerClass = "gasoline-turbo";
	if(template.selected) {
		containerClass += " gasoline-turbo-selected";
	}

	containers += "<div class=\"" + containerClass + "\" data-id=\"" + template._id + "\" draggable=\"true\">";


	html += "<div class=\"gas-element gas-template\" data-id=\"" + template._id + "\">\n";



	if(template.children && template.children.length) {
		template.children.map(function(child) {
			addChild(child, 1, "this");
		});
	} else {
		html += "&nbsp;"
	}

	html += "</div>\n";

	containers += "</div>\n";

	html += "\n";
	html += containers;

	return html;
};

// ===

this.gasoline = {
	randomString: randomString,
	addId: addId,
	removeId: removeId,

	findObject: findObject,
	findObjectsBySelector: findObjectsBySelector,
	findParentObject: findParentObject,
	findParentOfType: findParentOfType,

	findSelectedObject: findSelectedObject,
	selectObject: selectObject,

	acceptChildren: acceptChildren,
	addObject: addObject,
	removeObject: removeObject,

	getBlaze: getBlaze,
	getReact: getReact,
	getAngular: getAngular,

	getHTML: getHTML,

	getWireframe: getWireframe,

	reactEvents: reactEvents
};
