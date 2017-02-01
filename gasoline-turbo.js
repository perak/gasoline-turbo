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

var replaceSubstrings = function(string, find, replace) {
	return string.replace(new RegExp(escapeRegEx(find), 'g'), replace);
};


// ============
// BLAZE
// ============

var getBlaze = function(input, cb) {
	var html = "";
	var js = "";
	var eventHandlers = [];

	var addChild = function(child, depth, context) {
		switch(child.type) {
			// ---
			// HTML node
			// ---
			case "html": {
				var isVoid = voidElements.indexOf(child.name) >= 0;

				html += getTabs(depth);
				html += "<" + child.name;

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
						child.children.map(function(child) {
							addChild(child, depth + 1, context);
						});					
					}

					html += getTabs(depth);
					html += "</" + child.name + ">\n";
				}


				if(child.events) {
					child.events.map(function(event) {
						switch(event.type) {
							case "event": {
								var handler = eventHandlers.find(h => h.name == event.handler);
								if(handler) {
									handler.selectors = handler.selectors || [];
								}
								var evt = (event.event || "").toLowerCase();
								if(evt.indexOf("on") == 0) {
									evt = evt.slice(2);
								}
								var selector = evt + " " + child.selector;
								if(handler.selectors.indexOf(selector) < 0) {
									handler.selectors.push(selector);
								}
							}; break;
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
					child.children.map(function(child) {
						addChild(child, depth + 1, child.dataset);
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

				if(child.true) {
					child.true.map(function(child) {
						addChild(child, depth + 1, context);
					});
				}

				if(child.false && child.false.length) {
					html += getTabs(depth);
					html += "{{else}}\n";

					child.false.map(function(child) {
						addChild(child, depth + 1, context);
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
				html += "{{> " + child.name + "}}";
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
				events += identMultilineString(handler.code, 2) + "\n";
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

				helpers += "\t" + helper.name + ": function(" + helper.arguments.join(", ") + ") {\n";
				helpers += identMultilineString(helper.code, 2) + "\n";
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
			out = replaceSubstrings(out, helper, converted);
		});
		return out;
	};

	var addChild = function(child, depth, context) {
		switch(child.type) {
			// ---
			// HTML node
			// ---
			case "html": {
				var isVoid = voidElements.indexOf(child.name) >= 0;

				jsx += getTabs(depth);
				jsx += "<" + child.name;

				if(child.attributes) {
					child.attributes.map(function(attribute) {
						jsx += " ";
						var attrName = reactAttrs[attribute.name] || attribute.name;
						var nameConverted = blazeHelperCallsToReact(attrName, context);
						jsx += nameConverted;

						if(attribute.value) {
							var valConverted = blazeHelperCallsToReact(attribute.value, context);
							jsx += "=\"" + valConverted + "\"";
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

				jsx += ">\n";

				if(!isVoid) {
					if(child.children) {
						child.children.map(function(child) {
							addChild(child, depth + 1, context);
						});					
					}

					jsx += getTabs(depth);
					jsx += "</" + child.name + ">\n";
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
				jsx += child.dataset + ".map(function(item) {\n";

				if(child.children) {
					child.children.map(function(child) {
						addChild(child, depth + 2, "item");
					});					
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
				jsx += "<" + child.name + " />";
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
				jsx += identMultilineString(helper.code, 2);
				jsx += "\n\t},\n";
			});
		}

		// Event handlers
		if(template.handlers) {
			template.handlers.map(function(handler) {
				jsx += "\n\t" + handler.name + "(e) {\n";
				jsx += identMultilineString(handler.code, 2);
				jsx += "\n\t},\n";
			});
		}

		// Render
		jsx += "\n\trender() {\n";
		jsx += "\t\treturn (\n";

		if(template.children) {
			template.children.map(function(child) {
				addChild(child, 3, "this");
			});
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
	cb(new Error("Error: Sorry, Angular is not implemented yet."));
	// !!!
};


if(typeof module != "undefined" && module.exports) {
	exports.getBlaze = getBlaze;
	exports.getReact = getReact;
	exports.getAngular = getAngular;
}
