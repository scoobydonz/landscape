define("names/adapters/application",["exports","ember-data"],function(e,t){"use strict";e["default"]=t["default"].RESTAdapter.extend({path:"data"})}),define("names/app",["exports","ember","ember/resolver","ember/load-initializers","names/config/environment"],function(e,t,a,n,r){"use strict";var d;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,Resolver:a["default"]}),n["default"](d,r["default"].modulePrefix),e["default"]=d}),define("names/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("names/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("names/initializers/app-version",["exports","names/config/environment","ember"],function(e,t,a){"use strict";var n=a["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e,d){if(!r){var i=n(d.toString());a["default"].libraries.register(i,t["default"].APP.version),r=!0}}}}),define("names/initializers/export-application-global",["exports","ember","names/config/environment"],function(e,t,a){"use strict";function n(e,n){var r=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[r]&&(window[r]=n)}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("names/initializers/read-gazette",["exports"],function(e){"use strict";function t(e){}e.initialize=t,e["default"]={name:"read-gazette",initialize:t,after:["store"]}}),define("names/models/appointment",["exports","ember-data"],function(e,t){"use strict";e["default"]=t["default"].Model.extend({description:t["default"].attr(),fulltext:t["default"].attr(),subject:t["default"].attr(),title:t["default"].attr()})}),define("names/router",["exports","ember","names/config/environment"],function(e,t,a){"use strict";var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){this.route("gazette",function(){this.route("name",{path:"name/:id"})})}),e["default"]=n}),define("names/routes/gazette",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({model:function(){return this.store.find("appointment")}})}),define("names/routes/gazette/name",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({model:function(e){return this.store.find("appointment",e.id)}})}),define("names/routes/index",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({})}),define("names/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n\n\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.content;n.detectNamespace(a);var i;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(i=this.build(n),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=n.cloneNode(this.cachedFragment,!0))):i=this.build(n);var c=n.createMorphAt(i,1,1,a);return d(t,c,e,"outlet"),i}}}())}),define("names/templates/gazette",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("              ");e.appendChild(t,a);var a=e.createElement("li"),n=e.createComment("");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.content;n.detectNamespace(a);var i;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(i=this.build(n),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=n.cloneNode(this.cachedFragment,!0))):i=this.build(n);var c=n.createMorphAt(n.childAt(i,[1]),0,0);return d(t,c,e,"record.title"),i}}}();return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");return e.appendChild(t,a),t},render:function(t,a,n){var r=a.dom,d=a.hooks,i=d.get,c=d.block;r.detectNamespace(n);var o;a.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(o=this.build(r),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=r.cloneNode(this.cachedFragment,!0))):o=this.build(r);var l=r.createMorphAt(o,0,0,n);return r.insertBoundary(o,null),r.insertBoundary(o,0),c(a,l,t,"link-to",["gazette.name",i(a,t,"record.id")],{},e,null),o}}}();return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","pure-g");var n=e.createTextNode("\n\n    ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","pure-u-1-4");var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","l-box");var d=e.createTextNode("\n");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("        ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n    ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","pure-u-3-4");var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","l-box");var d=e.createTextNode(" ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode(" ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");return e.appendChild(t,a),t},render:function(t,a,n){var r=a.dom,d=a.hooks,i=d.get,c=d.block,o=d.content;r.detectNamespace(n);var l;a.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(l=this.build(r),this.hasRendered?this.cachedFragment=l:this.hasRendered=!0),this.cachedFragment&&(l=r.cloneNode(this.cachedFragment,!0))):l=this.build(r);var s=r.childAt(l,[1]),u=r.createMorphAt(r.childAt(s,[1,1]),1,1),h=r.createMorphAt(r.childAt(s,[3,1]),1,1);return c(a,u,t,"each",[i(a,t,"model")],{keyword:"record"},e,null),o(a,h,t,"outlet"),l}}}())}),define("names/templates/gazette/name",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("h2"),n=e.createTextNode("title: ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("\n");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createComment("");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.content;n.detectNamespace(a);var i;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(i=this.build(n),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=n.cloneNode(this.cachedFragment,!0))):i=this.build(n);var c=n.createMorphAt(n.childAt(i,[0]),1,1),o=n.createMorphAt(n.childAt(i,[2]),1,1),l=n.createMorphAt(n.childAt(i,[4]),0,0),s=n.createMorphAt(i,6,6,a);return d(t,c,e,"model.title"),d(t,o,e,"model.fulltext"),d(t,l,e,"model.description"),d(t,s,e,"outlet"),i}}}())}),define("names/templates/index",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("Yes!");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom;n.detectNamespace(a);var r;return t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(r=this.build(n),this.hasRendered?this.cachedFragment=r:this.hasRendered=!0),this.cachedFragment&&(r=n.cloneNode(this.cachedFragment,!0))):r=this.build(n),r}}}();return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("Are you reading to start naming names?\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(t,a,n){var r=a.dom,d=a.hooks,i=d.block,c=d.content;r.detectNamespace(n);var o;a.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(o=this.build(r),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=r.cloneNode(this.cachedFragment,!0))):o=this.build(r);var l=r.createMorphAt(o,1,1,n),s=r.createMorphAt(o,3,3,n);return i(a,l,t,"link-to",["gazette"],{},e,null),c(a,s,t,"outlet"),o}}}())}),define("names/config/environment",["ember"],function(e){var t="names";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(d){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("names/tests/test-helper"):require("names/app")["default"].create({name:"names",version:"0.0.0.e7ead680"});