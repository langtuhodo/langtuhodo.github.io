
/*!
 * Modernizr v2.7.0
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=(function(window,document,undefined){var version='2.7.0',Modernizr={},enableClasses=true,docElement=document.documentElement,mod='modernizr',modElem=document.createElement(mod),mStyle=modElem.style,inputElem=document.createElement('input'),smile=':)',toString={}.toString,prefixes=' -webkit- -moz- -o- -ms- '.split(' '),omPrefixes='Webkit Moz O ms',cssomPrefixes=omPrefixes.split(' '),domPrefixes=omPrefixes.toLowerCase().split(' '),ns={'svg':'http://www.w3.org/2000/svg'},tests={},inputs={},attrs={},classes=[],slice=classes.slice,featureName,injectElementWithStyles=function(rule,callback,nodes,testnames){var style,ret,node,docOverflow,div=document.createElement('div'),body=document.body,fakeBody=body||document.createElement('body');if(parseInt(nodes,10)){while(nodes--){node=document.createElement('div');node.id=testnames?testnames[nodes]:mod+(nodes+1);div.appendChild(node);}}
style=['&#173;','<style id="s',mod,'">',rule,'</style>'].join('');div.id=mod;(body?div:fakeBody).innerHTML+=style;fakeBody.appendChild(div);if(!body){fakeBody.style.background='';fakeBody.style.overflow='hidden';docOverflow=docElement.style.overflow;docElement.style.overflow='hidden';docElement.appendChild(fakeBody);}
ret=callback(div,rule);if(!body){fakeBody.parentNode.removeChild(fakeBody);docElement.style.overflow=docOverflow;}else{div.parentNode.removeChild(div);}
return!!ret;},testMediaQuery=function(mq){var matchMedia=window.matchMedia||window.msMatchMedia;if(matchMedia){return matchMedia(mq).matches;}
var bool;injectElementWithStyles('@media '+mq+' { #'+mod+' { position: absolute; } }',function(node){bool=(window.getComputedStyle?getComputedStyle(node,null):node.currentStyle)['position']=='absolute';});return bool;},isEventSupported=(function(){var TAGNAMES={'select':'input','change':'input','submit':'form','reset':'form','error':'img','load':'img','abort':'img'};function isEventSupported(eventName,element){element=element||document.createElement(TAGNAMES[eventName]||'div');eventName='on'+eventName;var isSupported=eventName in element;if(!isSupported){if(!element.setAttribute){element=document.createElement('div');}
if(element.setAttribute&&element.removeAttribute){element.setAttribute(eventName,'');isSupported=is(element[eventName],'function');if(!is(element[eventName],'undefined')){element[eventName]=undefined;}
element.removeAttribute(eventName);}}
element=null;return isSupported;}
return isEventSupported;})(),_hasOwnProperty=({}).hasOwnProperty,hasOwnProp;if(!is(_hasOwnProperty,'undefined')&&!is(_hasOwnProperty.call,'undefined')){hasOwnProp=function(object,property){return _hasOwnProperty.call(object,property);};}
else{hasOwnProp=function(object,property){return((property in object)&&is(object.constructor.prototype[property],'undefined'));};}
if(!Function.prototype.bind){Function.prototype.bind=function bind(that){var target=this;if(typeof target!="function"){throw new TypeError();}
var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var F=function(){};F.prototype=target.prototype;var self=new F();var result=target.apply(self,args.concat(slice.call(arguments)));if(Object(result)===result){return result;}
return self;}else{return target.apply(that,args.concat(slice.call(arguments)));}};return bound;};}
function setCss(str){mStyle.cssText=str;}
function setCssAll(str1,str2){return setCss(prefixes.join(str1+';')+(str2||''));}
function is(obj,type){return typeof obj===type;}
function contains(str,substr){return!!~(''+str).indexOf(substr);}
function testProps(props,prefixed){for(var i in props){var prop=props[i];if(!contains(prop,"-")&&mStyle[prop]!==undefined){return prefixed=='pfx'?prop:true;}}
return false;}
function testDOMProps(props,obj,elem){for(var i in props){var item=obj[props[i]];if(item!==undefined){if(elem===false)return props[i];if(is(item,'function')){return item.bind(elem||obj);}
return item;}}
return false;}
function testPropsAll(prop,prefixed,elem){var ucProp=prop.charAt(0).toUpperCase()+prop.slice(1),props=(prop+' '+cssomPrefixes.join(ucProp+' ')+ucProp).split(' ');if(is(prefixed,"string")||is(prefixed,"undefined")){return testProps(props,prefixed);}else{props=(prop+' '+(domPrefixes).join(ucProp+' ')+ucProp).split(' ');return testDOMProps(props,prefixed,elem);}}
tests['flexbox']=function(){return testPropsAll('flexWrap');};tests['flexboxlegacy']=function(){return testPropsAll('boxDirection');};tests['canvas']=function(){var elem=document.createElement('canvas');return!!(elem.getContext&&elem.getContext('2d'));};tests['canvastext']=function(){return!!(Modernizr['canvas']&&is(document.createElement('canvas').getContext('2d').fillText,'function'));};tests['webgl']=function(){return!!window.WebGLRenderingContext;};tests['touch']=function(){var bool;if(('ontouchstart'in window)||window.DocumentTouch&&document instanceof DocumentTouch){bool=true;}else{injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''),function(node){bool=node.offsetTop===9;});}
return bool;};tests['geolocation']=function(){return'geolocation'in navigator;};tests['postmessage']=function(){return!!window.postMessage;};tests['websqldatabase']=function(){return!!window.openDatabase;};tests['indexedDB']=function(){return!!testPropsAll("indexedDB",window);};tests['hashchange']=function(){return isEventSupported('hashchange',window)&&(document.documentMode===undefined||document.documentMode>7);};tests['history']=function(){return!!(window.history&&history.pushState);};tests['draganddrop']=function(){var div=document.createElement('div');return('draggable'in div)||('ondragstart'in div&&'ondrop'in div);};tests['websockets']=function(){return'WebSocket'in window||'MozWebSocket'in window;};tests['rgba']=function(){setCss('background-color:rgba(150,255,150,.5)');return contains(mStyle.backgroundColor,'rgba');};tests['hsla']=function(){setCss('background-color:hsla(120,40%,100%,.5)');return contains(mStyle.backgroundColor,'rgba')||contains(mStyle.backgroundColor,'hsla');};tests['multiplebgs']=function(){setCss('background:url(https://),url(https://),red url(https://)');return(/(url\s*\(.*?){3}/).test(mStyle.background);};tests['backgroundsize']=function(){return testPropsAll('backgroundSize');};tests['borderimage']=function(){return testPropsAll('borderImage');};tests['borderradius']=function(){return testPropsAll('borderRadius');};tests['boxshadow']=function(){return testPropsAll('boxShadow');};tests['textshadow']=function(){return document.createElement('div').style.textShadow==='';};tests['opacity']=function(){setCssAll('opacity:.55');return(/^0.55$/).test(mStyle.opacity);};tests['cssanimations']=function(){return testPropsAll('animationName');};tests['csscolumns']=function(){return testPropsAll('columnCount');};tests['cssgradients']=function(){var str1='background-image:',str2='gradient(linear,left top,right bottom,from(#9f9),to(white));',str3='linear-gradient(left top,#9f9, white);';setCss((str1+'-webkit- '.split(' ').join(str2+str1)+
prefixes.join(str3+str1)).slice(0,-str1.length));return contains(mStyle.backgroundImage,'gradient');};tests['cssreflections']=function(){return testPropsAll('boxReflect');};tests['csstransforms']=function(){return!!testPropsAll('transform');};tests['csstransforms3d']=function(){var ret=!!testPropsAll('perspective');if(ret&&'webkitPerspective'in docElement.style){injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}',function(node,rule){ret=node.offsetLeft===9&&node.offsetHeight===3;});}
return ret;};tests['csstransitions']=function(){return testPropsAll('transition');};tests['fontface']=function(){var bool;injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}',function(node,rule){var style=document.getElementById('smodernizr'),sheet=style.sheet||style.styleSheet,cssText=sheet?(sheet.cssRules&&sheet.cssRules[0]?sheet.cssRules[0].cssText:sheet.cssText||''):'';bool=/src/i.test(cssText)&&cssText.indexOf(rule.split(' ')[0])===0;});return bool;};tests['generatedcontent']=function(){var bool;injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''),function(node){bool=node.offsetHeight>=3;});return bool;};tests['video']=function(){var elem=document.createElement('video'),bool=false;try{if(bool=!!elem.canPlayType){bool=new Boolean(bool);bool.ogg=elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,'');bool.h264=elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,'');bool.webm=elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');}}catch(e){}
return bool;};tests['audio']=function(){var elem=document.createElement('audio'),bool=false;try{if(bool=!!elem.canPlayType){bool=new Boolean(bool);bool.ogg=elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');bool.mp3=elem.canPlayType('audio/mpeg;').replace(/^no$/,'');bool.wav=elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/,'');bool.m4a=(elem.canPlayType('audio/x-m4a;')||elem.canPlayType('audio/aac;')).replace(/^no$/,'');}}catch(e){}
return bool;};tests['localstorage']=function(){try{localStorage.setItem(mod,mod);localStorage.removeItem(mod);return true;}catch(e){return false;}};tests['sessionstorage']=function(){try{sessionStorage.setItem(mod,mod);sessionStorage.removeItem(mod);return true;}catch(e){return false;}};tests['webworkers']=function(){return!!window.Worker;};tests['applicationcache']=function(){return!!window.applicationCache;};tests['svg']=function(){return!!document.createElementNS&&!!document.createElementNS(ns.svg,'svg').createSVGRect;};tests['inlinesvg']=function(){var div=document.createElement('div');div.innerHTML='<svg/>';return(div.firstChild&&div.firstChild.namespaceURI)==ns.svg;};tests['smil']=function(){return!!document.createElementNS&&/SVGAnimate/.test(toString.call(document.createElementNS(ns.svg,'animate')));};tests['svgclippaths']=function(){return!!document.createElementNS&&/SVGClipPath/.test(toString.call(document.createElementNS(ns.svg,'clipPath')));};function webforms(){Modernizr['input']=(function(props){for(var i=0,len=props.length;i<len;i++){attrs[props[i]]=!!(props[i]in inputElem);}
if(attrs.list){attrs.list=!!(document.createElement('datalist')&&window.HTMLDataListElement);}
return attrs;})('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));Modernizr['inputtypes']=(function(props){for(var i=0,bool,inputElemType,defaultView,len=props.length;i<len;i++){inputElem.setAttribute('type',inputElemType=props[i]);bool=inputElem.type!=='text';if(bool){inputElem.value=smile;inputElem.style.cssText='position:absolute;visibility:hidden;';if(/^range$/.test(inputElemType)&&inputElem.style.WebkitAppearance!==undefined){docElement.appendChild(inputElem);defaultView=document.defaultView;bool=defaultView.getComputedStyle&&defaultView.getComputedStyle(inputElem,null).WebkitAppearance!=='textfield'&&(inputElem.offsetHeight!==0);docElement.removeChild(inputElem);}else if(/^(search|tel)$/.test(inputElemType)){}else if(/^(url|email)$/.test(inputElemType)){bool=inputElem.checkValidity&&inputElem.checkValidity()===false;}else{bool=inputElem.value!=smile;}}
inputs[props[i]]=!!bool;}
return inputs;})('search tel url email datetime date month week time datetime-local number range color'.split(' '));}
for(var feature in tests){if(hasOwnProp(tests,feature)){featureName=feature.toLowerCase();Modernizr[featureName]=tests[feature]();classes.push((Modernizr[featureName]?'':'no-')+featureName);}}
Modernizr.input||webforms();Modernizr.addTest=function(feature,test){if(typeof feature=='object'){for(var key in feature){if(hasOwnProp(feature,key)){Modernizr.addTest(key,feature[key]);}}}else{feature=feature.toLowerCase();if(Modernizr[feature]!==undefined){return Modernizr;}
test=typeof test=='function'?test():test;if(typeof enableClasses!=="undefined"&&enableClasses){docElement.className+=' '+(test?'':'no-')+feature;}
Modernizr[feature]=test;}
return Modernizr;};setCss('');modElem=inputElem=null;;(function(window,document){var version='3.7.0';var options=window.html5||{};var reSkip=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var saveClones=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;var supportsHtml5Styles;var expando='_html5shiv';var expanID=0;var expandoData={};var supportsUnknownElements;(function(){try{var a=document.createElement('a');a.innerHTML='<xyz></xyz>';supportsHtml5Styles=('hidden'in a);supportsUnknownElements=a.childNodes.length==1||(function(){(document.createElement)('a');var frag=document.createDocumentFragment();return(typeof frag.cloneNode=='undefined'||typeof frag.createDocumentFragment=='undefined'||typeof frag.createElement=='undefined');}());}catch(e){supportsHtml5Styles=true;supportsUnknownElements=true;}}());function addStyleSheet(ownerDocument,cssText){var p=ownerDocument.createElement('p'),parent=ownerDocument.getElementsByTagName('head')[0]||ownerDocument.documentElement;p.innerHTML='x<style>'+cssText+'</style>';return parent.insertBefore(p.lastChild,parent.firstChild);}
function getElements(){var elements=html5.elements;return typeof elements=='string'?elements.split(' '):elements;}
function getExpandoData(ownerDocument){var data=expandoData[ownerDocument[expando]];if(!data){data={};expanID++;ownerDocument[expando]=expanID;expandoData[expanID]=data;}
return data;}
function createElement(nodeName,ownerDocument,data){if(!ownerDocument){ownerDocument=document;}
if(supportsUnknownElements){return ownerDocument.createElement(nodeName);}
if(!data){data=getExpandoData(ownerDocument);}
var node;if(data.cache[nodeName]){node=data.cache[nodeName].cloneNode();}else if(saveClones.test(nodeName)){node=(data.cache[nodeName]=data.createElem(nodeName)).cloneNode();}else{node=data.createElem(nodeName);}
return node.canHaveChildren&&!reSkip.test(nodeName)&&!node.tagUrn?data.frag.appendChild(node):node;}
function createDocumentFragment(ownerDocument,data){if(!ownerDocument){ownerDocument=document;}
if(supportsUnknownElements){return ownerDocument.createDocumentFragment();}
data=data||getExpandoData(ownerDocument);var clone=data.frag.cloneNode(),i=0,elems=getElements(),l=elems.length;for(;i<l;i++){clone.createElement(elems[i]);}
return clone;}
function shivMethods(ownerDocument,data){if(!data.cache){data.cache={};data.createElem=ownerDocument.createElement;data.createFrag=ownerDocument.createDocumentFragment;data.frag=data.createFrag();}
ownerDocument.createElement=function(nodeName){if(!html5.shivMethods){return data.createElem(nodeName);}
return createElement(nodeName,ownerDocument,data);};ownerDocument.createDocumentFragment=Function('h,f','return function(){'+'var n=f.cloneNode(),c=n.createElement;'+'h.shivMethods&&('+
getElements().join().replace(/[\w\-]+/g,function(nodeName){data.createElem(nodeName);data.frag.createElement(nodeName);return'c("'+nodeName+'")';})+');return n}')(html5,data.frag);}
function shivDocument(ownerDocument){if(!ownerDocument){ownerDocument=document;}
var data=getExpandoData(ownerDocument);if(html5.shivCSS&&!supportsHtml5Styles&&!data.hasCSS){data.hasCSS=!!addStyleSheet(ownerDocument,'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}'+'mark{background:#FF0;color:#000}'+'template{display:none}');}
if(!supportsUnknownElements){shivMethods(ownerDocument,data);}
return ownerDocument;}
var html5={'elements':options.elements||'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video','version':version,'shivCSS':(options.shivCSS!==false),'supportsUnknownElements':supportsUnknownElements,'shivMethods':(options.shivMethods!==false),'type':'default','shivDocument':shivDocument,createElement:createElement,createDocumentFragment:createDocumentFragment};window.html5=html5;shivDocument(document);}(this,document));Modernizr._version=version;Modernizr._prefixes=prefixes;Modernizr._domPrefixes=domPrefixes;Modernizr._cssomPrefixes=cssomPrefixes;Modernizr.mq=testMediaQuery;Modernizr.hasEvent=isEventSupported;Modernizr.testProp=function(prop){return testProps([prop]);};Modernizr.testAllProps=testPropsAll;Modernizr.testStyles=injectElementWithStyles;Modernizr.prefixed=function(prop,obj,elem){if(!obj){return testPropsAll(prop,'pfx');}else{return testPropsAll(prop,obj,elem);}};docElement.className=docElement.className.replace(/(^|\s)no-js(\s|$)/,'$1$2')+
(enableClasses?' js '+classes.join(' '):'');return Modernizr;})(this,this.document);;(function($){if(typeof $.fn.each2=="undefined"){$.fn.extend({each2:function(c){var j=$([0]),i=-1,l=this.length;while(++i<l&&(j.context=j[0]=this[i])&&c.call(j[0],i,j)!==false);return this;}});}})(jQuery);(function($,undefined){"use strict";if(window.Select2!==undefined){return;}
var KEY,AbstractSelect2,SingleSelect2,MultiSelect2,nextUid,sizer,lastMousePosition={x:0,y:0},$document,scrollBarDimensions,KEY={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(k){k=k.which?k.which:k;switch(k){case KEY.LEFT:case KEY.RIGHT:case KEY.UP:case KEY.DOWN:return true;}
return false;},isControl:function(e){var k=e.which;switch(k){case KEY.SHIFT:case KEY.CTRL:case KEY.ALT:return true;}
if(e.metaKey)return true;return false;},isFunctionKey:function(k){k=k.which?k.which:k;return k>=112&&k<=123;}},MEASURE_SCROLLBAR_TEMPLATE="<div class='select2-measure-scrollbar'></div>";$document=$(document);nextUid=(function(){var counter=1;return function(){return counter++;};}());function indexOf(value,array){var i=0,l=array.length;for(;i<l;i=i+1){if(equal(value,array[i]))return i;}
return-1;}
function measureScrollbar(){var $template=$(MEASURE_SCROLLBAR_TEMPLATE);$template.appendTo('body');var dim={width:$template.width()-$template[0].clientWidth,height:$template.height()-$template[0].clientHeight};$template.remove();return dim;}
function equal(a,b){if(a===b)return true;if(a===undefined||b===undefined)return false;if(a===null||b===null)return false;if(a.constructor===String)return a+''===b+'';if(b.constructor===String)return b+''===a+'';return false;}
function splitVal(string,separator){var val,i,l;if(string===null||string.length<1)return[];val=string.split(separator);for(i=0,l=val.length;i<l;i=i+1)val[i]=$.trim(val[i]);return val;}
function getSideBorderPadding(element){return element.outerWidth(false)-element.width();}
function installKeyUpChangeEvent(element){var key="keyup-change-value";element.on("keydown",function(){if($.data(element,key)===undefined){$.data(element,key,element.val());}});element.on("keyup",function(){var val=$.data(element,key);if(val!==undefined&&element.val()!==val){$.removeData(element,key);element.trigger("keyup-change");}});}
$document.on("mousemove",function(e){lastMousePosition.x=e.pageX;lastMousePosition.y=e.pageY;});function installFilteredMouseMove(element){element.on("mousemove",function(e){var lastpos=lastMousePosition;if(lastpos===undefined||lastpos.x!==e.pageX||lastpos.y!==e.pageY){$(e.target).trigger("mousemove-filtered",e);}});}
function debounce(quietMillis,fn,ctx){ctx=ctx||undefined;var timeout;return function(){var args=arguments;window.clearTimeout(timeout);timeout=window.setTimeout(function(){fn.apply(ctx,args);},quietMillis);};}
function thunk(formula){var evaluated=false,value;return function(){if(evaluated===false){value=formula();evaluated=true;}
return value;};};function installDebouncedScroll(threshold,element){var notify=debounce(threshold,function(e){element.trigger("scroll-debounced",e);});element.on("scroll",function(e){if(indexOf(e.target,element.get())>=0)notify(e);});}
function focus($el){if($el[0]===document.activeElement)return;window.setTimeout(function(){var el=$el[0],pos=$el.val().length,range;$el.focus();if($el.is(":visible")&&el===document.activeElement){if(el.setSelectionRange)
{el.setSelectionRange(pos,pos);}
else if(el.createTextRange){range=el.createTextRange();range.collapse(false);range.select();}}},0);}
function getCursorInfo(el){el=$(el)[0];var offset=0;var length=0;if('selectionStart'in el){offset=el.selectionStart;length=el.selectionEnd-offset;}else if('selection'in document){el.focus();var sel=document.selection.createRange();length=document.selection.createRange().text.length;sel.moveStart('character',-el.value.length);offset=sel.text.length-length;}
return{offset:offset,length:length};}
function killEvent(event){event.preventDefault();event.stopPropagation();}
function killEventImmediately(event){event.preventDefault();event.stopImmediatePropagation();}
function measureTextWidth(e){if(!sizer){var style=e[0].currentStyle||window.getComputedStyle(e[0],null);sizer=$(document.createElement("div")).css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:style.fontSize,fontFamily:style.fontFamily,fontStyle:style.fontStyle,fontWeight:style.fontWeight,letterSpacing:style.letterSpacing,textTransform:style.textTransform,whiteSpace:"nowrap"});sizer.attr("class","select2-sizer");$("body").append(sizer);}
sizer.text(e.val());return sizer.width();}
function syncCssClasses(dest,src,adapter){var classes,replacements=[],adapted;classes=dest.attr("class");if(classes){classes=''+classes;$(classes.split(" ")).each2(function(){if(this.indexOf("select2-")===0){replacements.push(this);}});}
classes=src.attr("class");if(classes){classes=''+classes;$(classes.split(" ")).each2(function(){if(this.indexOf("select2-")!==0){adapted=adapter(this);if(adapted){replacements.push(this);}}});}
dest.attr("class",replacements.join(" "));}
function markMatch(text,term,markup,escapeMarkup){var match=text.toUpperCase().indexOf(term.toUpperCase()),tl=term.length;if(match<0){markup.push(escapeMarkup(text));return;}
markup.push(escapeMarkup(text.substring(0,match)));markup.push("<span class='select2-match'>");markup.push(escapeMarkup(text.substring(match,match+tl)));markup.push("</span>");markup.push(escapeMarkup(text.substring(match+tl,text.length)));}
function defaultEscapeMarkup(markup){var replace_map={'\\':'&#92;','&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;',"/":'&#47;'};return String(markup).replace(/[&<>"'\/\\]/g,function(match){return replace_map[match];});}
function ajax(options){var timeout,requestSequence=0,handler=null,quietMillis=options.quietMillis||100,ajaxUrl=options.url,self=this;return function(query){window.clearTimeout(timeout);timeout=window.setTimeout(function(){requestSequence+=1;var requestNumber=requestSequence,data=options.data,url=ajaxUrl,transport=options.transport||$.fn.select2.ajaxDefaults.transport,deprecated={type:options.type||'GET',cache:options.cache||false,jsonpCallback:options.jsonpCallback||undefined,dataType:options.dataType||"json"},params=$.extend({},$.fn.select2.ajaxDefaults.params,deprecated);data=data?data.call(self,query.term,query.page,query.context):null;url=(typeof url==='function')?url.call(self,query.term,query.page,query.context):url;if(handler){handler.abort();}
if(options.params){if($.isFunction(options.params)){$.extend(params,options.params.call(self));}else{$.extend(params,options.params);}}
$.extend(params,{url:url,dataType:options.dataType,data:data,success:function(data){if(requestNumber<requestSequence){return;}
var results=options.results(data,query.page);query.callback(results);}});handler=transport.call(self,params);},quietMillis);};}
function local(options){var data=options,dataText,tmp,text=function(item){return""+item.text;};if($.isArray(data)){tmp=data;data={results:tmp};}
if($.isFunction(data)===false){tmp=data;data=function(){return tmp;};}
var dataItem=data();if(dataItem.text){text=dataItem.text;if(!$.isFunction(text)){dataText=dataItem.text;text=function(item){return item[dataText];};}}
return function(query){var t=query.term,filtered={results:[]},process;if(t===""){query.callback(data());return;}
process=function(datum,collection){var group,attr;datum=datum[0];if(datum.children){group={};for(attr in datum){if(datum.hasOwnProperty(attr))group[attr]=datum[attr];}
group.children=[];$(datum.children).each2(function(i,childDatum){process(childDatum,group.children);});if(group.children.length||query.matcher(t,text(group),datum)){collection.push(group);}}else{if(query.matcher(t,text(datum),datum)){collection.push(datum);}}};$(data().results).each2(function(i,datum){process(datum,filtered.results);});query.callback(filtered);};}
function tags(data){var isFunc=$.isFunction(data);return function(query){var t=query.term,filtered={results:[]};$(isFunc?data():data).each(function(){var isObject=this.text!==undefined,text=isObject?this.text:this;if(t===""||query.matcher(t,text)){filtered.results.push(isObject?this:{id:this,text:this});}});query.callback(filtered);};}
function checkFormatter(formatter,formatterName){if($.isFunction(formatter))return true;if(!formatter)return false;throw new Error(formatterName+" must be a function or a falsy value");}
function evaluate(val){return $.isFunction(val)?val():val;}
function countResults(results){var count=0;$.each(results,function(i,item){if(item.children){count+=countResults(item.children);}else{count++;}});return count;}
function defaultTokenizer(input,selection,selectCallback,opts){var original=input,dupe=false,token,index,i,l,separator;if(!opts.createSearchChoice||!opts.tokenSeparators||opts.tokenSeparators.length<1)return undefined;while(true){index=-1;for(i=0,l=opts.tokenSeparators.length;i<l;i++){separator=opts.tokenSeparators[i];index=input.indexOf(separator);if(index>=0)break;}
if(index<0)break;token=input.substring(0,index);input=input.substring(index+separator.length);if(token.length>0){token=opts.createSearchChoice.call(this,token,selection);if(token!==undefined&&token!==null&&opts.id(token)!==undefined&&opts.id(token)!==null){dupe=false;for(i=0,l=selection.length;i<l;i++){if(equal(opts.id(token),opts.id(selection[i]))){dupe=true;break;}}
if(!dupe)selectCallback(token);}}}
if(original!==input)return input;}
function clazz(SuperClass,methods){var constructor=function(){};constructor.prototype=new SuperClass;constructor.prototype.constructor=constructor;constructor.prototype.parent=SuperClass.prototype;constructor.prototype=$.extend(constructor.prototype,methods);return constructor;}
AbstractSelect2=clazz(Object,{bind:function(func){var self=this;return function(){func.apply(self,arguments);};},init:function(opts){var results,search,resultsSelector=".select2-results",disabled,readonly;this.opts=opts=this.prepareOpts(opts);this.id=opts.id;if(opts.element.data("select2")!==undefined&&opts.element.data("select2")!==null){opts.element.data("select2").destroy();}
this.container=this.createContainer();this.containerId="s2id_"+(opts.element.attr("id")||"autogen"+nextUid());this.containerSelector="#"+this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,'\\$1');this.container.attr("id",this.containerId);this.body=thunk(function(){return opts.element.closest("body");});syncCssClasses(this.container,this.opts.element,this.opts.adaptContainerCssClass);this.container.css(evaluate(opts.containerCss));this.container.addClass(evaluate(opts.containerCssClass));this.elementTabIndex=this.opts.element.attr("tabindex");this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container);this.container.data("select2",this);this.dropdown=this.container.find(".select2-drop");this.dropdown.addClass(evaluate(opts.dropdownCssClass));this.dropdown.data("select2",this);this.results=results=this.container.find(resultsSelector);this.search=search=this.container.find("input.select2-input");this.resultsPage=0;this.context=null;this.initContainer();installFilteredMouseMove(this.results);this.dropdown.on("mousemove-filtered touchstart touchmove touchend",resultsSelector,this.bind(this.highlightUnderEvent));installDebouncedScroll(80,this.results);this.dropdown.on("scroll-debounced",resultsSelector,this.bind(this.loadMoreIfNeeded));$(this.container).on("change",".select2-input",function(e){e.stopPropagation();});$(this.dropdown).on("change",".select2-input",function(e){e.stopPropagation();});if($.fn.mousewheel){results.mousewheel(function(e,delta,deltaX,deltaY){var top=results.scrollTop(),height;if(deltaY>0&&top-deltaY<=0){results.scrollTop(0);killEvent(e);}else if(deltaY<0&&results.get(0).scrollHeight-results.scrollTop()+deltaY<=results.height()){results.scrollTop(results.get(0).scrollHeight-results.height());killEvent(e);}});}
installKeyUpChangeEvent(search);search.on("keyup-change input paste",this.bind(this.updateResults));search.on("focus",function(){search.addClass("select2-focused");});search.on("blur",function(){search.removeClass("select2-focused");});this.dropdown.on("mouseup",resultsSelector,this.bind(function(e){if($(e.target).closest(".select2-result-selectable").length>0){this.highlightUnderEvent(e);this.selectHighlighted(e);}}));this.dropdown.on("click mouseup mousedown",function(e){e.stopPropagation();});if($.isFunction(this.opts.initSelection)){this.initSelection();this.monitorSource();}
if(opts.maximumInputLength!==null){this.search.attr("maxlength",opts.maximumInputLength);}
var disabled=opts.element.prop("disabled");if(disabled===undefined)disabled=false;this.enable(!disabled);var readonly=opts.element.prop("readonly");if(readonly===undefined)readonly=false;this.readonly(readonly);scrollBarDimensions=scrollBarDimensions||measureScrollbar();this.autofocus=opts.element.prop("autofocus")
opts.element.prop("autofocus",false);if(this.autofocus)this.focus();},destroy:function(){var element=this.opts.element,select2=element.data("select2");if(this.propertyObserver){delete this.propertyObserver;this.propertyObserver=null;}
if(select2!==undefined){select2.container.remove();select2.dropdown.remove();element.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus",this.autofocus||false);if(this.elementTabIndex){element.attr({tabindex:this.elementTabIndex});}else{element.removeAttr("tabindex");}
element.show();}},optionToData:function(element){if(element.is("option")){return{id:element.prop("value"),text:element.text(),element:element.get(),css:element.attr("class"),disabled:element.prop("disabled"),locked:equal(element.attr("locked"),"locked")||equal(element.data("locked"),true)};}else if(element.is("optgroup")){return{text:element.attr("label"),children:[],element:element.get(),css:element.attr("class")};}},prepareOpts:function(opts){var element,select,idKey,ajaxUrl,self=this;element=opts.element;if(element.get(0).tagName.toLowerCase()==="select"){this.select=select=opts.element;}
if(select){$.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in opts){throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.");}});}
opts=$.extend({},{populateResults:function(container,results,query){var populate,data,result,children,id=this.opts.id;populate=function(results,container,depth){var i,l,result,selectable,disabled,compound,node,label,innerContainer,formatted;results=opts.sortResults(results,container,query);for(i=0,l=results.length;i<l;i=i+1){result=results[i];disabled=(result.disabled===true);selectable=(!disabled)&&(id(result)!==undefined);compound=result.children&&result.children.length>0;node=$("<li></li>");node.addClass("select2-results-dept-"+depth);node.addClass("select2-result");node.addClass(selectable?"select2-result-selectable":"select2-result-unselectable");if(disabled){node.addClass("select2-disabled");}
if(compound){node.addClass("select2-result-with-children");}
node.addClass(self.opts.formatResultCssClass(result));label=$(document.createElement("div"));label.addClass("select2-result-label");formatted=opts.formatResult(result,label,query,self.opts.escapeMarkup);if(formatted!==undefined){label.html(formatted);}
node.append(label);if(compound){innerContainer=$("<ul></ul>");innerContainer.addClass("select2-result-sub");populate(result.children,innerContainer,depth+1);node.append(innerContainer);}
node.data("select2-data",result);container.append(node);}};populate(results,container,0);}},$.fn.select2.defaults,opts);if(typeof(opts.id)!=="function"){idKey=opts.id;opts.id=function(e){return e[idKey];};}
if($.isArray(opts.element.data("select2Tags"))){if("tags"in opts){throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+opts.element.attr("id");}
opts.tags=opts.element.data("select2Tags");}
if(select){opts.query=this.bind(function(query){var data={results:[],more:false},term=query.term,children,placeholderOption,process;process=function(element,collection){var group;if(element.is("option")){if(query.matcher(term,element.text(),element)){collection.push(self.optionToData(element));}}else if(element.is("optgroup")){group=self.optionToData(element);element.children().each2(function(i,elm){process(elm,group.children);});if(group.children.length>0){collection.push(group);}}};children=element.children();if(this.getPlaceholder()!==undefined&&children.length>0){placeholderOption=this.getPlaceholderOption();if(placeholderOption){children=children.not(placeholderOption);}}
children.each2(function(i,elm){process(elm,data.results);});query.callback(data);});opts.id=function(e){return e.id;};opts.formatResultCssClass=function(data){return data.css;};}else{if(!("query"in opts)){if("ajax"in opts){ajaxUrl=opts.element.data("ajax-url");if(ajaxUrl&&ajaxUrl.length>0){opts.ajax.url=ajaxUrl;}
opts.query=ajax.call(opts.element,opts.ajax);}else if("data"in opts){opts.query=local(opts.data);}else if("tags"in opts){opts.query=tags(opts.tags);if(opts.createSearchChoice===undefined){opts.createSearchChoice=function(term){return{id:term,text:term};};}
if(opts.initSelection===undefined){opts.initSelection=function(element,callback){var data=[];$(splitVal(element.val(),opts.separator)).each(function(){var id=this,text=this,tags=opts.tags;if($.isFunction(tags))tags=tags();$(tags).each(function(){if(equal(this.id,id)){text=this.text;return false;}});data.push({id:id,text:text});});callback(data);};}}}}
if(typeof(opts.query)!=="function"){throw"query function not defined for Select2 "+opts.element.attr("id");}
return opts;},monitorSource:function(){var el=this.opts.element,sync;el.on("change.select2",this.bind(function(e){if(this.opts.element.data("select2-change-triggered")!==true){this.initSelection();}}));sync=this.bind(function(){var enabled,readonly,self=this;var disabled=el.prop("disabled");if(disabled===undefined)disabled=false;this.enable(!disabled);var readonly=el.prop("readonly");if(readonly===undefined)readonly=false;this.readonly(readonly);syncCssClasses(this.container,this.opts.element,this.opts.adaptContainerCssClass);this.container.addClass(evaluate(this.opts.containerCssClass));syncCssClasses(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass);this.dropdown.addClass(evaluate(this.opts.dropdownCssClass));});el.on("propertychange.select2 DOMAttrModified.select2",sync);if(this.mutationCallback===undefined){this.mutationCallback=function(mutations){mutations.forEach(sync);}}
if(typeof WebKitMutationObserver!=="undefined"){if(this.propertyObserver){delete this.propertyObserver;this.propertyObserver=null;}
this.propertyObserver=new WebKitMutationObserver(this.mutationCallback);this.propertyObserver.observe(el.get(0),{attributes:true,subtree:false});}},triggerSelect:function(data){var evt=$.Event("select2-selecting",{val:this.id(data),object:data});this.opts.element.trigger(evt);return!evt.isDefaultPrevented();},triggerChange:function(details){details=details||{};details=$.extend({},details,{type:"change",val:this.val()});this.opts.element.data("select2-change-triggered",true);this.opts.element.trigger(details);this.opts.element.data("select2-change-triggered",false);this.opts.element.click();if(this.opts.blurOnChange)
this.opts.element.blur();},isInterfaceEnabled:function()
{return this.enabledInterface===true;},enableInterface:function(){var enabled=this._enabled&&!this._readonly,disabled=!enabled;if(enabled===this.enabledInterface)return false;this.container.toggleClass("select2-container-disabled",disabled);this.close();this.enabledInterface=enabled;return true;},enable:function(enabled){if(enabled===undefined)enabled=true;if(this._enabled===enabled)return false;this._enabled=enabled;this.opts.element.prop("disabled",!enabled);this.enableInterface();return true;},readonly:function(enabled){if(enabled===undefined)enabled=false;if(this._readonly===enabled)return false;this._readonly=enabled;this.opts.element.prop("readonly",enabled);this.enableInterface();return true;},opened:function(){return this.container.hasClass("select2-dropdown-open");},positionDropdown:function(){var $dropdown=this.dropdown,offset=this.container.offset(),height=this.container.outerHeight(false),width=this.container.outerWidth(false),dropHeight=$dropdown.outerHeight(false),viewPortRight=$(window).scrollLeft()+$(window).width(),viewportBottom=$(window).scrollTop()+$(window).height(),dropTop=offset.top+height,dropLeft=offset.left,enoughRoomBelow=dropTop+dropHeight<=viewportBottom,enoughRoomAbove=(offset.top-dropHeight)>=this.body().scrollTop(),dropWidth=$dropdown.outerWidth(false),enoughRoomOnRight=dropLeft+dropWidth<=viewPortRight,aboveNow=$dropdown.hasClass("select2-drop-above"),bodyOffset,above,css,resultsListNode;if(this.opts.dropdownAutoWidth){resultsListNode=$('.select2-results',$dropdown)[0];$dropdown.addClass('select2-drop-auto-width');$dropdown.css('width','');dropWidth=$dropdown.outerWidth(false)+(resultsListNode.scrollHeight===resultsListNode.clientHeight?0:scrollBarDimensions.width);dropWidth>width?width=dropWidth:dropWidth=width;enoughRoomOnRight=dropLeft+dropWidth<=viewPortRight;}
else{this.container.removeClass('select2-drop-auto-width');}
if(this.body().css('position')!=='static'){bodyOffset=this.body().offset();dropTop-=bodyOffset.top;dropLeft-=bodyOffset.left;}
if(aboveNow){above=true;if(!enoughRoomAbove&&enoughRoomBelow)above=false;}else{above=false;if(!enoughRoomBelow&&enoughRoomAbove)above=true;}
if(!enoughRoomOnRight){dropLeft=offset.left+width-dropWidth;}
if(above){dropTop=offset.top-dropHeight;this.container.addClass("select2-drop-above");$dropdown.addClass("select2-drop-above");}
else{this.container.removeClass("select2-drop-above");$dropdown.removeClass("select2-drop-above");}
css=$.extend({top:dropTop,left:dropLeft,width:width},evaluate(this.opts.dropdownCss));$dropdown.css(css);},shouldOpen:function(){var event;if(this.opened())return false;if(this._enabled===false||this._readonly===true)return false;event=$.Event("select2-opening");this.opts.element.trigger(event);return!event.isDefaultPrevented();},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above");this.dropdown.removeClass("select2-drop-above");},open:function(){if(!this.shouldOpen())return false;this.opening();return true;},opening:function(){var cid=this.containerId,scroll="scroll."+cid,resize="resize."+cid,orient="orientationchange."+cid,mask,maskCss;this.container.addClass("select2-dropdown-open").addClass("select2-container-active");this.clearDropdownAlignmentPreference();if(this.dropdown[0]!==this.body().children().last()[0]){this.dropdown.detach().appendTo(this.body());}
mask=$("#select2-drop-mask");if(mask.length==0){mask=$(document.createElement("div"));mask.attr("id","select2-drop-mask").attr("class","select2-drop-mask");mask.hide();mask.appendTo(this.body());mask.on("mousedown touchstart click",function(e){var dropdown=$("#select2-drop"),self;if(dropdown.length>0){self=dropdown.data("select2");if(self.opts.selectOnBlur){self.selectHighlighted({noFocus:true});}
self.close();e.preventDefault();e.stopPropagation();}});}
if(this.dropdown.prev()[0]!==mask[0]){this.dropdown.before(mask);}
$("#select2-drop").removeAttr("id");this.dropdown.attr("id","select2-drop");maskCss=_makeMaskCss();mask.css(maskCss).show();this.dropdown.show();this.positionDropdown();this.dropdown.addClass("select2-drop-active");var that=this;this.container.parents().add(window).each(function(){$(this).on(resize+" "+scroll+" "+orient,function(e){var maskCss=_makeMaskCss();$("#select2-drop-mask").css(maskCss);that.positionDropdown();});});function _makeMaskCss(){return{width:Math.max(document.documentElement.scrollWidth,$(window).width()),height:Math.max(document.documentElement.scrollHeight,$(window).height())}}},close:function(){if(!this.opened())return;var cid=this.containerId,scroll="scroll."+cid,resize="resize."+cid,orient="orientationchange."+cid;this.container.parents().add(window).each(function(){$(this).off(scroll).off(resize).off(orient);});this.clearDropdownAlignmentPreference();$("#select2-drop-mask").hide();this.dropdown.removeAttr("id");this.dropdown.hide();this.container.removeClass("select2-dropdown-open");this.results.empty();this.clearSearch();this.search.removeClass("select2-active");this.opts.element.trigger($.Event("select2-close"));},externalSearch:function(term){this.open();this.search.val(term);this.updateResults(false);},clearSearch:function(){},getMaximumSelectionSize:function(){return evaluate(this.opts.maximumSelectionSize);},ensureHighlightVisible:function(){var results=this.results,children,index,child,hb,rb,y,more;index=this.highlight();if(index<0)return;if(index==0){results.scrollTop(0);return;}
children=this.findHighlightableChoices().find('.select2-result-label');child=$(children[index]);hb=child.offset().top+child.outerHeight(true);if(index===children.length-1){more=results.find("li.select2-more-results");if(more.length>0){hb=more.offset().top+more.outerHeight(true);}}
rb=results.offset().top+results.outerHeight(true);if(hb>rb){results.scrollTop(results.scrollTop()+(hb-rb));}
y=child.offset().top-results.offset().top;if(y<0&&child.css('display')!='none'){results.scrollTop(results.scrollTop()+y);}},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-selected):not(.select2-disabled)");},moveHighlight:function(delta){var choices=this.findHighlightableChoices(),index=this.highlight();while(index>-1&&index<choices.length){index+=delta;var choice=$(choices[index]);if(choice.hasClass("select2-result-selectable")&&!choice.hasClass("select2-disabled")&&!choice.hasClass("select2-selected")){this.highlight(index);break;}}},highlight:function(index){var choices=this.findHighlightableChoices(),choice,data;if(arguments.length===0){return indexOf(choices.filter(".select2-highlighted")[0],choices.get());}
if(index>=choices.length)index=choices.length-1;if(index<0)index=0;this.results.find(".select2-highlighted").removeClass("select2-highlighted");choice=$(choices[index]);choice.addClass("select2-highlighted");this.ensureHighlightVisible();data=choice.data("select2-data");if(data){this.opts.element.trigger({type:"select2-highlight",val:this.id(data),choice:data});}},countSelectableResults:function(){return this.findHighlightableChoices().length;},highlightUnderEvent:function(event){var el=$(event.target).closest(".select2-result-selectable");if(el.length>0&&!el.is(".select2-highlighted")){var choices=this.findHighlightableChoices();this.highlight(choices.index(el));}else if(el.length==0){this.results.find(".select2-highlighted").removeClass("select2-highlighted");}},loadMoreIfNeeded:function(){var results=this.results,more=results.find("li.select2-more-results"),below,offset=-1,page=this.resultsPage+1,self=this,term=this.search.val(),context=this.context;if(more.length===0)return;below=more.offset().top-results.offset().top-results.height();if(below<=this.opts.loadMorePadding){more.addClass("select2-active");this.opts.query({element:this.opts.element,term:term,page:page,context:context,matcher:this.opts.matcher,callback:this.bind(function(data){if(!self.opened())return;self.opts.populateResults.call(this,results,data.results,{term:term,page:page,context:context});self.postprocessResults(data,false,false);if(data.more===true){more.detach().appendTo(results).text(self.opts.formatLoadMore(page+1));window.setTimeout(function(){self.loadMoreIfNeeded();},10);}else{more.remove();}
self.positionDropdown();self.resultsPage=page;self.context=data.context;})});}},tokenize:function(){},updateResults:function(initial){var search=this.search,results=this.results,opts=this.opts,data,self=this,input,term=search.val(),lastTerm=$.data(this.container,"select2-last-term");if(initial!==true&&lastTerm&&equal(term,lastTerm))return;$.data(this.container,"select2-last-term",term);if(initial!==true&&(this.showSearchInput===false||!this.opened())){return;}
function postRender(){search.removeClass("select2-active");self.positionDropdown();}
function render(html){results.html(html);postRender();}
var maxSelSize=this.getMaximumSelectionSize();if(maxSelSize>=1){data=this.data();if($.isArray(data)&&data.length>=maxSelSize&&checkFormatter(opts.formatSelectionTooBig,"formatSelectionTooBig")){render("<li class='select2-selection-limit'>"+opts.formatSelectionTooBig(maxSelSize)+"</li>");return;}}
if(search.val().length<opts.minimumInputLength){if(checkFormatter(opts.formatInputTooShort,"formatInputTooShort")){render("<li class='select2-no-results'>"+opts.formatInputTooShort(search.val(),opts.minimumInputLength)+"</li>");}else{render("");}
if(initial&&this.showSearch)this.showSearch(true);return;}
if(opts.maximumInputLength&&search.val().length>opts.maximumInputLength){if(checkFormatter(opts.formatInputTooLong,"formatInputTooLong")){render("<li class='select2-no-results'>"+opts.formatInputTooLong(search.val(),opts.maximumInputLength)+"</li>");}else{render("");}
return;}
if(opts.formatSearching&&this.findHighlightableChoices().length===0){render("<li class='select2-searching'>"+opts.formatSearching()+"</li>");}
search.addClass("select2-active");input=this.tokenize();if(input!=undefined&&input!=null){search.val(input);}
this.resultsPage=1;opts.query({element:opts.element,term:search.val(),page:this.resultsPage,context:null,matcher:opts.matcher,callback:this.bind(function(data){var def;if(!this.opened()){this.search.removeClass("select2-active");return;}
this.context=(data.context===undefined)?null:data.context;if(this.opts.createSearchChoice&&search.val()!==""){def=this.opts.createSearchChoice.call(self,search.val(),data.results);if(def!==undefined&&def!==null&&self.id(def)!==undefined&&self.id(def)!==null){if($(data.results).filter(function(){return equal(self.id(this),self.id(def));}).length===0){data.results.unshift(def);}}}
if(data.results.length===0&&checkFormatter(opts.formatNoMatches,"formatNoMatches")){render("<li class='select2-no-results'>"+opts.formatNoMatches(search.val())+"</li>");return;}
results.empty();self.opts.populateResults.call(this,results,data.results,{term:search.val(),page:this.resultsPage,context:null});if(data.more===true&&checkFormatter(opts.formatLoadMore,"formatLoadMore")){results.append("<li class='select2-more-results'>"+self.opts.escapeMarkup(opts.formatLoadMore(this.resultsPage))+"</li>");window.setTimeout(function(){self.loadMoreIfNeeded();},10);}
this.postprocessResults(data,initial);postRender();this.opts.element.trigger({type:"select2-loaded",items:data});})});},cancel:function(){this.close();},blur:function(){if(this.opts.selectOnBlur)
this.selectHighlighted({noFocus:true});this.close();this.container.removeClass("select2-container-active");if(this.search[0]===document.activeElement){this.search.blur();}
this.clearSearch();this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");},focusSearch:function(){focus(this.search);},selectHighlighted:function(options){var index=this.highlight(),highlighted=this.results.find(".select2-highlighted"),data=highlighted.closest('.select2-result').data("select2-data");if(data){this.highlight(index);this.onSelect(data,options);}else if(options&&options.noFocus){this.close();}},getPlaceholder:function(){var placeholderOption;return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder||((placeholderOption=this.getPlaceholderOption())!==undefined?placeholderOption.text():undefined);},getPlaceholderOption:function(){if(this.select){var firstOption=this.select.children().first();if(this.opts.placeholderOption!==undefined){return(this.opts.placeholderOption==="first"&&firstOption)||(typeof this.opts.placeholderOption==="function"&&this.opts.placeholderOption(this.select));}else if(firstOption.text()===""&&firstOption.val()===""){return firstOption;}}},initContainerWidth:function(){function resolveContainerWidth(){var style,attrs,matches,i,l;if(this.opts.width==="off"){return null;}else if(this.opts.width==="element"){return this.opts.element.outerWidth(false)===0?'auto':this.opts.element.outerWidth(false)+'px';}else if(this.opts.width==="copy"||this.opts.width==="resolve"){style=this.opts.element.attr('style');if(style!==undefined){attrs=style.split(';');for(i=0,l=attrs.length;i<l;i=i+1){matches=attrs[i].replace(/\s/g,'').match(/width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i);if(matches!==null&&matches.length>=1)
return matches[1];}}
if(this.opts.width==="resolve"){style=this.opts.element.css('width');if(style.indexOf("%")>0)return style;return(this.opts.element.outerWidth(false)===0?'auto':this.opts.element.outerWidth(false)+'px');}
return null;}else if($.isFunction(this.opts.width)){return this.opts.width();}else{return this.opts.width;}};var width=resolveContainerWidth.call(this);if(width!==null){this.container.css("width",width);}}});SingleSelect2=clazz(AbstractSelect2,{createContainer:function(){var container=$(document.createElement("div")).attr({"class":"select2-container"}).html(["<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>","   <span class='select2-chosen'>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>","   <span class='select2-arrow'><b></b></span>","</a>","<input class='select2-focusser select2-offscreen' type='text'/>","<div class='select2-drop select2-display-none'>","   <div class='select2-search'>","       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'/>","   </div>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return container;},enableInterface:function(){if(this.parent.enableInterface.apply(this,arguments)){this.focusser.prop("disabled",!this.isInterfaceEnabled());}},opening:function(){var el,range,len;if(this.opts.minimumResultsForSearch>=0){this.showSearch(true);}
this.parent.opening.apply(this,arguments);if(this.showSearchInput!==false){this.search.val(this.focusser.val());}
this.search.focus();el=this.search.get(0);if(el.createTextRange){range=el.createTextRange();range.collapse(false);range.select();}else if(el.setSelectionRange){len=this.search.val().length;el.setSelectionRange(len,len);}
this.focusser.prop("disabled",true).val("");this.updateResults(true);this.opts.element.trigger($.Event("select2-open"));},close:function(){if(!this.opened())return;this.parent.close.apply(this,arguments);this.focusser.removeAttr("disabled");this.focusser.focus();},focus:function(){if(this.opened()){this.close();}else{this.focusser.removeAttr("disabled");this.focusser.focus();}},isFocused:function(){return this.container.hasClass("select2-container-active");},cancel:function(){this.parent.cancel.apply(this,arguments);this.focusser.removeAttr("disabled");this.focusser.focus();},initContainer:function(){var selection,container=this.container,dropdown=this.dropdown;if(this.opts.minimumResultsForSearch<0){this.showSearch(false);}else{this.showSearch(true);}
this.selection=selection=container.find(".select2-choice");this.focusser=container.find(".select2-focusser");this.focusser.attr("id","s2id_autogen"+nextUid());$("label[for='"+this.opts.element.attr("id")+"']").attr('for',this.focusser.attr('id'));this.focusser.attr("tabindex",this.elementTabIndex);this.search.on("keydown",this.bind(function(e){if(!this.isInterfaceEnabled())return;if(e.which===KEY.PAGE_UP||e.which===KEY.PAGE_DOWN){killEvent(e);return;}
switch(e.which){case KEY.UP:case KEY.DOWN:this.moveHighlight((e.which===KEY.UP)?-1:1);killEvent(e);return;case KEY.ENTER:this.selectHighlighted();killEvent(e);return;case KEY.TAB:this.selectHighlighted({noFocus:true});return;case KEY.ESC:this.cancel(e);killEvent(e);return;}}));this.search.on("blur",this.bind(function(e){if(document.activeElement===this.body().get(0)){window.setTimeout(this.bind(function(){this.search.focus();}),0);}}));this.focusser.on("keydown",this.bind(function(e){if(!this.isInterfaceEnabled())return;if(e.which===KEY.TAB||KEY.isControl(e)||KEY.isFunctionKey(e)||e.which===KEY.ESC){return;}
if(this.opts.openOnEnter===false&&e.which===KEY.ENTER){killEvent(e);return;}
if(e.which==KEY.DOWN||e.which==KEY.UP||(e.which==KEY.ENTER&&this.opts.openOnEnter)){if(e.altKey||e.ctrlKey||e.shiftKey||e.metaKey)return;this.open();killEvent(e);return;}
if(e.which==KEY.DELETE||e.which==KEY.BACKSPACE){if(this.opts.allowClear){this.clear();}
killEvent(e);return;}}));installKeyUpChangeEvent(this.focusser);this.focusser.on("keyup-change input",this.bind(function(e){if(this.opts.minimumResultsForSearch>=0){e.stopPropagation();if(this.opened())return;this.open();}}));selection.on("mousedown","abbr",this.bind(function(e){if(!this.isInterfaceEnabled())return;this.clear();killEventImmediately(e);this.close();this.selection.focus();}));selection.on("mousedown",this.bind(function(e){if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger($.Event("select2-focus"));}
if(this.opened()){this.close();}else if(this.isInterfaceEnabled()){this.open();}
killEvent(e);}));dropdown.on("mousedown",this.bind(function(){this.search.focus();}));selection.on("focus",this.bind(function(e){killEvent(e);}));this.focusser.on("focus",this.bind(function(){if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger($.Event("select2-focus"));}
this.container.addClass("select2-container-active");})).on("blur",this.bind(function(){if(!this.opened()){this.container.removeClass("select2-container-active");this.opts.element.trigger($.Event("select2-blur"));}}));this.search.on("focus",this.bind(function(){if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger($.Event("select2-focus"));}
this.container.addClass("select2-container-active");}));this.initContainerWidth();this.opts.element.addClass("select2-offscreen");this.setPlaceholder();},clear:function(triggerChange){var data=this.selection.data("select2-data");if(data){var placeholderOption=this.getPlaceholderOption();this.opts.element.val(placeholderOption?placeholderOption.val():"");this.selection.find(".select2-chosen").empty();this.selection.removeData("select2-data");this.setPlaceholder();if(triggerChange!==false){this.opts.element.trigger({type:"select2-removed",val:this.id(data),choice:data});this.triggerChange({removed:data});}}},initSelection:function(){var selected;if(this.isPlaceholderOptionSelected()){this.updateSelection([]);this.close();this.setPlaceholder();}else{var self=this;this.opts.initSelection.call(null,this.opts.element,function(selected){if(selected!==undefined&&selected!==null){self.updateSelection(selected);self.close();self.setPlaceholder();}});}},isPlaceholderOptionSelected:function(){var placeholderOption;return((placeholderOption=this.getPlaceholderOption())!==undefined&&placeholderOption.is(':selected'))||(this.opts.element.val()==="")||(this.opts.element.val()===undefined)||(this.opts.element.val()===null);},prepareOpts:function(){var opts=this.parent.prepareOpts.apply(this,arguments),self=this;if(opts.element.get(0).tagName.toLowerCase()==="select"){opts.initSelection=function(element,callback){var selected=element.find(":selected");callback(self.optionToData(selected));};}else if("data"in opts){opts.initSelection=opts.initSelection||function(element,callback){var id=element.val();var match=null;opts.query({matcher:function(term,text,el){var is_match=equal(id,opts.id(el));if(is_match){match=el;}
return is_match;},callback:!$.isFunction(callback)?$.noop:function(){callback(match);}});};}
return opts;},getPlaceholder:function(){if(this.select){if(this.getPlaceholderOption()===undefined){return undefined;}}
return this.parent.getPlaceholder.apply(this,arguments);},setPlaceholder:function(){var placeholder=this.getPlaceholder();if(this.isPlaceholderOptionSelected()&&placeholder!==undefined){if(this.select&&this.getPlaceholderOption()===undefined)return;this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(placeholder));this.selection.addClass("select2-default");this.container.removeClass("select2-allowclear");}},postprocessResults:function(data,initial,noHighlightUpdate){var selected=0,self=this,showSearchInput=true;this.findHighlightableChoices().each2(function(i,elm){if(equal(self.id(elm.data("select2-data")),self.opts.element.val())){selected=i;return false;}});if(noHighlightUpdate!==false){if(initial===true&&selected>=0){this.highlight(selected);}else{this.highlight(0);}}
if(initial===true){var min=this.opts.minimumResultsForSearch;if(min>=0){this.showSearch(countResults(data.results)>=min);}}},showSearch:function(showSearchInput){if(this.showSearchInput===showSearchInput)return;this.showSearchInput=showSearchInput;this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!showSearchInput);this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!showSearchInput);$(this.dropdown,this.container).toggleClass("select2-with-searchbox",showSearchInput);},onSelect:function(data,options){if(!this.triggerSelect(data)){return;}
var old=this.opts.element.val(),oldData=this.data();this.opts.element.val(this.id(data));this.updateSelection(data);this.opts.element.trigger({type:"select2-selected",val:this.id(data),choice:data});this.close();if(!options||!options.noFocus)
this.selection.focus();if(!equal(old,this.id(data))){this.triggerChange({added:data,removed:oldData});}},updateSelection:function(data){var container=this.selection.find(".select2-chosen"),formatted,cssClass;this.selection.data("select2-data",data);container.empty();formatted=this.opts.formatSelection(data,container,this.opts.escapeMarkup);if(formatted!==undefined){container.append(formatted);}
cssClass=this.opts.formatSelectionCssClass(data,container);if(cssClass!==undefined){container.addClass(cssClass);}
this.selection.removeClass("select2-default");if(this.opts.allowClear&&this.getPlaceholder()!==undefined){this.container.addClass("select2-allowclear");}},val:function(){var val,triggerChange=false,data=null,self=this,oldData=this.data();if(arguments.length===0){return this.opts.element.val();}
val=arguments[0];if(arguments.length>1){triggerChange=arguments[1];}
if(this.select){this.select.val(val).find(":selected").each2(function(i,elm){data=self.optionToData(elm);return false;});this.updateSelection(data);this.setPlaceholder();if(triggerChange){this.triggerChange({added:data,removed:oldData});}}else{if(!val&&val!==0){this.clear(triggerChange);return;}
if(this.opts.initSelection===undefined){throw new Error("cannot call val() if initSelection() is not defined");}
this.opts.element.val(val);this.opts.initSelection(this.opts.element,function(data){self.opts.element.val(!data?"":self.id(data));self.updateSelection(data);self.setPlaceholder();if(triggerChange){self.triggerChange({added:data,removed:oldData});}});}},clearSearch:function(){this.search.val("");this.focusser.val("");},data:function(value,triggerChange){var data;if(arguments.length===0){data=this.selection.data("select2-data");if(data==undefined)data=null;return data;}else{if(!value||value===""){this.clear(triggerChange);}else{data=this.data();this.opts.element.val(!value?"":this.id(value));this.updateSelection(value);if(triggerChange){this.triggerChange({added:value,removed:data});}}}}});MultiSelect2=clazz(AbstractSelect2,{createContainer:function(){var container=$(document.createElement("div")).attr({"class":"select2-container select2-container-multi"}).html(["<ul class='select2-choices'>","  <li class='select2-search-field'>","    <input type='text' autocomplete='off' autocorrect='off' autocapitilize='off' spellcheck='false' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi select2-display-none'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return container;},prepareOpts:function(){var opts=this.parent.prepareOpts.apply(this,arguments),self=this;if(opts.element.get(0).tagName.toLowerCase()==="select"){opts.initSelection=function(element,callback){var data=[];element.find(":selected").each2(function(i,elm){data.push(self.optionToData(elm));});callback(data);};}else if("data"in opts){opts.initSelection=opts.initSelection||function(element,callback){var ids=splitVal(element.val(),opts.separator);var matches=[];opts.query({matcher:function(term,text,el){var is_match=$.grep(ids,function(id){return equal(id,opts.id(el));}).length;if(is_match){matches.push(el);}
return is_match;},callback:!$.isFunction(callback)?$.noop:function(){var ordered=[];for(var i=0;i<ids.length;i++){var id=ids[i];for(var j=0;j<matches.length;j++){var match=matches[j];if(equal(id,opts.id(match))){ordered.push(match);matches.splice(j,1);break;}}}
callback(ordered);}});};}
return opts;},selectChoice:function(choice){var selected=this.container.find(".select2-search-choice-focus");if(selected.length&&choice&&choice[0]==selected[0]){}else{if(selected.length){this.opts.element.trigger("choice-deselected",selected);}
selected.removeClass("select2-search-choice-focus");if(choice&&choice.length){this.close();choice.addClass("select2-search-choice-focus");this.opts.element.trigger("choice-selected",choice);}}},initContainer:function(){var selector=".select2-choices",selection;this.searchContainer=this.container.find(".select2-search-field");this.selection=selection=this.container.find(selector);var _this=this;this.selection.on("mousedown",".select2-search-choice",function(e){_this.search[0].focus();_this.selectChoice($(this));})
this.search.attr("id","s2id_autogen"+nextUid());$("label[for='"+this.opts.element.attr("id")+"']").attr('for',this.search.attr('id'));this.search.on("input paste",this.bind(function(){if(!this.isInterfaceEnabled())return;if(!this.opened()){this.open();}}));this.search.attr("tabindex",this.elementTabIndex);this.keydowns=0;this.search.on("keydown",this.bind(function(e){if(!this.isInterfaceEnabled())return;++this.keydowns;var selected=selection.find(".select2-search-choice-focus");var prev=selected.prev(".select2-search-choice:not(.select2-locked)");var next=selected.next(".select2-search-choice:not(.select2-locked)");var pos=getCursorInfo(this.search);if(selected.length&&(e.which==KEY.LEFT||e.which==KEY.RIGHT||e.which==KEY.BACKSPACE||e.which==KEY.DELETE||e.which==KEY.ENTER)){var selectedChoice=selected;if(e.which==KEY.LEFT&&prev.length){selectedChoice=prev;}
else if(e.which==KEY.RIGHT){selectedChoice=next.length?next:null;}
else if(e.which===KEY.BACKSPACE){this.unselect(selected.first());this.search.width(10);selectedChoice=prev.length?prev:next;}else if(e.which==KEY.DELETE){this.unselect(selected.first());this.search.width(10);selectedChoice=next.length?next:null;}else if(e.which==KEY.ENTER){selectedChoice=null;}
this.selectChoice(selectedChoice);killEvent(e);if(!selectedChoice||!selectedChoice.length){this.open();}
return;}else if(((e.which===KEY.BACKSPACE&&this.keydowns==1)||e.which==KEY.LEFT)&&(pos.offset==0&&!pos.length)){this.selectChoice(selection.find(".select2-search-choice:not(.select2-locked)").last());killEvent(e);return;}else{this.selectChoice(null);}
if(this.opened()){switch(e.which){case KEY.UP:case KEY.DOWN:this.moveHighlight((e.which===KEY.UP)?-1:1);killEvent(e);return;case KEY.ENTER:this.selectHighlighted();killEvent(e);return;case KEY.TAB:this.selectHighlighted({noFocus:true});this.close();return;case KEY.ESC:this.cancel(e);killEvent(e);return;}}
if(e.which===KEY.TAB||KEY.isControl(e)||KEY.isFunctionKey(e)||e.which===KEY.BACKSPACE||e.which===KEY.ESC){return;}
if(e.which===KEY.ENTER){if(this.opts.openOnEnter===false){return;}else if(e.altKey||e.ctrlKey||e.shiftKey||e.metaKey){return;}}
this.open();if(e.which===KEY.PAGE_UP||e.which===KEY.PAGE_DOWN){killEvent(e);}
if(e.which===KEY.ENTER){killEvent(e);}}));this.search.on("keyup",this.bind(function(e){this.keydowns=0;this.resizeSearch();}));this.search.on("blur",this.bind(function(e){this.container.removeClass("select2-container-active");this.search.removeClass("select2-focused");this.selectChoice(null);if(!this.opened())this.clearSearch();e.stopImmediatePropagation();this.opts.element.trigger($.Event("select2-blur"));}));this.container.on("click",selector,this.bind(function(e){if(!this.isInterfaceEnabled())return;if($(e.target).closest(".select2-search-choice").length>0){return;}
this.selectChoice(null);this.clearPlaceholder();if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger($.Event("select2-focus"));}
this.open();this.focusSearch();e.preventDefault();}));this.container.on("focus",selector,this.bind(function(){if(!this.isInterfaceEnabled())return;if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger($.Event("select2-focus"));}
this.container.addClass("select2-container-active");this.dropdown.addClass("select2-drop-active");this.clearPlaceholder();}));this.initContainerWidth();this.opts.element.addClass("select2-offscreen");this.clearSearch();},enableInterface:function(){if(this.parent.enableInterface.apply(this,arguments)){this.search.prop("disabled",!this.isInterfaceEnabled());}},initSelection:function(){var data;if(this.opts.element.val()===""&&this.opts.element.text()===""){this.updateSelection([]);this.close();this.clearSearch();}
if(this.select||this.opts.element.val()!==""){var self=this;this.opts.initSelection.call(null,this.opts.element,function(data){if(data!==undefined&&data!==null){self.updateSelection(data);self.close();self.clearSearch();}});}},clearSearch:function(){var placeholder=this.getPlaceholder(),maxWidth=this.getMaxSearchWidth();if(placeholder!==undefined&&this.getVal().length===0&&this.search.hasClass("select2-focused")===false){this.search.val(placeholder).addClass("select2-default");this.search.width(maxWidth>0?maxWidth:this.container.css("width"));}else{this.search.val("").width(10);}},clearPlaceholder:function(){if(this.search.hasClass("select2-default")){this.search.val("").removeClass("select2-default");}},opening:function(){this.clearPlaceholder();this.resizeSearch();this.parent.opening.apply(this,arguments);this.focusSearch();this.updateResults(true);this.search.focus();this.opts.element.trigger($.Event("select2-open"));},close:function(){if(!this.opened())return;this.parent.close.apply(this,arguments);},focus:function(){this.close();this.search.focus();},isFocused:function(){return this.search.hasClass("select2-focused");},updateSelection:function(data){var ids=[],filtered=[],self=this;$(data).each(function(){if(indexOf(self.id(this),ids)<0){ids.push(self.id(this));filtered.push(this);}});data=filtered;this.selection.find(".select2-search-choice").remove();$(data).each(function(){self.addSelectedChoice(this);});self.postprocessResults();},tokenize:function(){var input=this.search.val();input=this.opts.tokenizer.call(this,input,this.data(),this.bind(this.onSelect),this.opts);if(input!=null&&input!=undefined){this.search.val(input);if(input.length>0){this.open();}}},onSelect:function(data,options){if(!this.triggerSelect(data)){return;}
this.addSelectedChoice(data);this.opts.element.trigger({type:"selected",val:this.id(data),choice:data});if(this.select||!this.opts.closeOnSelect)this.postprocessResults();if(this.opts.closeOnSelect){this.close();this.search.width(10);}else{if(this.countSelectableResults()>0){this.search.width(10);this.resizeSearch();if(this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()){this.updateResults(true);}
this.positionDropdown();}else{this.close();this.search.width(10);}}
this.triggerChange({added:data});if(!options||!options.noFocus)
this.focusSearch();},cancel:function(){this.close();this.focusSearch();},addSelectedChoice:function(data){var enableChoice=!data.locked,enabledItem=$("<li class='select2-search-choice'>"+"    <div></div>"+"    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a>"+"</li>"),disabledItem=$("<li class='select2-search-choice select2-locked'>"+"<div></div>"+"</li>");var choice=enableChoice?enabledItem:disabledItem,id=this.id(data),val=this.getVal(),formatted,cssClass;formatted=this.opts.formatSelection(data,choice.find("div"),this.opts.escapeMarkup);if(formatted!=undefined){choice.find("div").replaceWith("<div>"+formatted+"</div>");}
cssClass=this.opts.formatSelectionCssClass(data,choice.find("div"));if(cssClass!=undefined){choice.addClass(cssClass);}
if(enableChoice){choice.find(".select2-search-choice-close").on("mousedown",killEvent).on("click dblclick",this.bind(function(e){if(!this.isInterfaceEnabled())return;$(e.target).closest(".select2-search-choice").fadeOut('fast',this.bind(function(){this.unselect($(e.target));this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");this.close();this.focusSearch();})).dequeue();killEvent(e);})).on("focus",this.bind(function(){if(!this.isInterfaceEnabled())return;this.container.addClass("select2-container-active");this.dropdown.addClass("select2-drop-active");}));}
choice.data("select2-data",data);choice.insertBefore(this.searchContainer);val.push(id);this.setVal(val);},unselect:function(selected){var val=this.getVal(),data,index;selected=selected.closest(".select2-search-choice");if(selected.length===0){throw"Invalid argument: "+selected+". Must be .select2-search-choice";}
data=selected.data("select2-data");if(!data){return;}
index=indexOf(this.id(data),val);if(index>=0){val.splice(index,1);this.setVal(val);if(this.select)this.postprocessResults();}
selected.remove();this.opts.element.trigger({type:"removed",val:this.id(data),choice:data});this.triggerChange({removed:data});},postprocessResults:function(data,initial,noHighlightUpdate){var val=this.getVal(),choices=this.results.find(".select2-result"),compound=this.results.find(".select2-result-with-children"),self=this;choices.each2(function(i,choice){var id=self.id(choice.data("select2-data"));if(indexOf(id,val)>=0){choice.addClass("select2-selected");choice.find(".select2-result-selectable").addClass("select2-selected");}});compound.each2(function(i,choice){if(!choice.is('.select2-result-selectable')&&choice.find(".select2-result-selectable:not(.select2-selected)").length===0){choice.addClass("select2-selected");}});if(this.highlight()==-1&&noHighlightUpdate!==false){self.highlight(0);}
if(!this.opts.createSearchChoice&&!choices.filter('.select2-result:not(.select2-selected)').length>0){if(!data||data&&!data.more&&this.results.find(".select2-no-results").length===0){if(checkFormatter(self.opts.formatNoMatches,"formatNoMatches")){this.results.append("<li class='select2-no-results'>"+self.opts.formatNoMatches(self.search.val())+"</li>");}}}},getMaxSearchWidth:function(){return this.selection.width()-getSideBorderPadding(this.search);},resizeSearch:function(){var minimumWidth,left,maxWidth,containerLeft,searchWidth,sideBorderPadding=getSideBorderPadding(this.search);minimumWidth=measureTextWidth(this.search)+10;left=this.search.offset().left;maxWidth=this.selection.width();containerLeft=this.selection.offset().left;searchWidth=maxWidth-(left-containerLeft)-sideBorderPadding;if(searchWidth<minimumWidth){searchWidth=maxWidth-sideBorderPadding;}
if(searchWidth<40){searchWidth=maxWidth-sideBorderPadding;}
if(searchWidth<=0){searchWidth=minimumWidth;}
this.search.width(searchWidth);},getVal:function(){var val;if(this.select){val=this.select.val();return val===null?[]:val;}else{val=this.opts.element.val();return splitVal(val,this.opts.separator);}},setVal:function(val){var unique;if(this.select){this.select.val(val);}else{unique=[];$(val).each(function(){if(indexOf(this,unique)<0)unique.push(this);});this.opts.element.val(unique.length===0?"":unique.join(this.opts.separator));}},buildChangeDetails:function(old,current){var current=current.slice(0),old=old.slice(0);for(var i=0;i<current.length;i++){for(var j=0;j<old.length;j++){if(equal(this.opts.id(current[i]),this.opts.id(old[j]))){current.splice(i,1);i--;old.splice(j,1);j--;}}}
return{added:current,removed:old};},val:function(val,triggerChange){var oldData,self=this,changeDetails;if(arguments.length===0){return this.getVal();}
oldData=this.data();if(!oldData.length)oldData=[];if(!val&&val!==0){this.opts.element.val("");this.updateSelection([]);this.clearSearch();if(triggerChange){this.triggerChange({added:this.data(),removed:oldData});}
return;}
this.setVal(val);if(this.select){this.opts.initSelection(this.select,this.bind(this.updateSelection));if(triggerChange){this.triggerChange(this.buildChangeDetails(oldData,this.data()));}}else{if(this.opts.initSelection===undefined){throw new Error("val() cannot be called if initSelection() is not defined");}
this.opts.initSelection(this.opts.element,function(data){var ids=$.map(data,self.id);self.setVal(ids);self.updateSelection(data);self.clearSearch();if(triggerChange){self.triggerChange(this.buildChangeDetails(oldData,this.data()));}});}
this.clearSearch();},onSortStart:function(){if(this.select){throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");}
this.search.width(0);this.searchContainer.hide();},onSortEnd:function(){var val=[],self=this;this.searchContainer.show();this.searchContainer.appendTo(this.searchContainer.parent());this.resizeSearch();this.selection.find(".select2-search-choice").each(function(){val.push(self.opts.id($(this).data("select2-data")));});this.setVal(val);this.triggerChange();},data:function(values,triggerChange){var self=this,ids,old;if(arguments.length===0){return this.selection.find(".select2-search-choice").map(function(){return $(this).data("select2-data");}).get();}else{old=this.data();if(!values){values=[];}
ids=$.map(values,function(e){return self.opts.id(e);});this.setVal(ids);this.updateSelection(values);this.clearSearch();if(triggerChange){this.triggerChange(this.buildChangeDetails(old,this.data()));}}}});$.fn.select2=function(){var args=Array.prototype.slice.call(arguments,0),opts,select2,method,value,multiple,allowedMethods=["val","destroy","opened","open","close","focus","isFocused","container","dropdown","onSortStart","onSortEnd","enable","readonly","positionDropdown","data","search"],valueMethods=["val","opened","isFocused","container","data"],methodsMap={search:"externalSearch"};this.each(function(){if(args.length===0||typeof(args[0])==="object"){opts=args.length===0?{}:$.extend({},args[0]);opts.element=$(this);if(opts.element.get(0).tagName.toLowerCase()==="select"){multiple=opts.element.prop("multiple");}else{multiple=opts.multiple||false;if("tags"in opts){opts.multiple=multiple=true;}}
select2=multiple?new MultiSelect2():new SingleSelect2();select2.init(opts);}else if(typeof(args[0])==="string"){if(indexOf(args[0],allowedMethods)<0){throw"Unknown method: "+args[0];}
value=undefined;select2=$(this).data("select2");if(select2===undefined)return;method=args[0];if(method==="container"){value=select2.container;}else if(method==="dropdown"){value=select2.dropdown;}else{if(methodsMap[method])method=methodsMap[method];value=select2[method].apply(select2,args.slice(1));}
if(indexOf(args[0],valueMethods)>=0){return false;}}else{throw"Invalid arguments to select2 plugin: "+args;}});return(value===undefined)?this:value;};$.fn.select2.defaults={width:"copy",loadMorePadding:0,closeOnSelect:true,openOnEnter:true,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(result,container,query,escapeMarkup){var markup=[];markMatch(result.text,query.term,markup,escapeMarkup);return markup.join("");},formatSelection:function(data,container,escapeMarkup){return data?escapeMarkup(data.text):undefined;},sortResults:function(results,container,query){return results;},formatResultCssClass:function(data){return undefined;},formatSelectionCssClass:function(data,container){return undefined;},formatNoMatches:function(){return"No matches found";},formatInputTooShort:function(input,min){var n=min-input.length;return"Please enter "+n+" more character"+(n==1?"":"s");},formatInputTooLong:function(input,max){var n=input.length-max;return"Please delete "+n+" character"+(n==1?"":"s");},formatSelectionTooBig:function(limit){return"You can only select "+limit+" item"+(limit==1?"":"s");},formatLoadMore:function(pageNumber){return"Loading more results...";},formatSearching:function(){return"Searching...";},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(e){return e.id;},matcher:function(term,text){return(''+text).toUpperCase().indexOf((''+term).toUpperCase())>=0;},separator:",",tokenSeparators:[],tokenizer:defaultTokenizer,escapeMarkup:defaultEscapeMarkup,blurOnChange:false,selectOnBlur:false,adaptContainerCssClass:function(c){return c;},adaptDropdownCssClass:function(c){return null;}};$.fn.select2.ajaxDefaults={transport:$.ajax,params:{type:"GET",cache:false,dataType:"json"}};window.Select2={query:{ajax:ajax,local:local,tags:tags},util:{debounce:debounce,markMatch:markMatch,escapeMarkup:defaultEscapeMarkup},"class":{"abstract":AbstractSelect2,"single":SingleSelect2,"multi":MultiSelect2}};}(jQuery));;(function(window,document,undefined){(function(factory){"use strict";if(typeof define==='function'&&define.amd)
{define(['jquery'],factory);}
else if(jQuery&&!jQuery.fn.dataTable)
{factory(jQuery);}}
(function($){"use strict";var DataTable=function(oInit)
{function _fnAddColumn(oSettings,nTh)
{var oDefaults=DataTable.defaults.columns;var iCol=oSettings.aoColumns.length;var oCol=$.extend({},DataTable.models.oColumn,oDefaults,{"sSortingClass":oSettings.oClasses.sSortable,"sSortingClassJUI":oSettings.oClasses.sSortJUI,"nTh":nTh?nTh:document.createElement('th'),"sTitle":oDefaults.sTitle?oDefaults.sTitle:nTh?nTh.innerHTML:'',"aDataSort":oDefaults.aDataSort?oDefaults.aDataSort:[iCol],"mData":oDefaults.mData?oDefaults.oDefaults:iCol});oSettings.aoColumns.push(oCol);if(oSettings.aoPreSearchCols[iCol]===undefined||oSettings.aoPreSearchCols[iCol]===null)
{oSettings.aoPreSearchCols[iCol]=$.extend({},DataTable.models.oSearch);}
else
{var oPre=oSettings.aoPreSearchCols[iCol];if(oPre.bRegex===undefined)
{oPre.bRegex=true;}
if(oPre.bSmart===undefined)
{oPre.bSmart=true;}
if(oPre.bCaseInsensitive===undefined)
{oPre.bCaseInsensitive=true;}}
_fnColumnOptions(oSettings,iCol,null);}
function _fnColumnOptions(oSettings,iCol,oOptions)
{var oCol=oSettings.aoColumns[iCol];if(oOptions!==undefined&&oOptions!==null)
{if(oOptions.mDataProp&&!oOptions.mData)
{oOptions.mData=oOptions.mDataProp;}
if(oOptions.sType!==undefined)
{oCol.sType=oOptions.sType;oCol._bAutoType=false;}
$.extend(oCol,oOptions);_fnMap(oCol,oOptions,"sWidth","sWidthOrig");if(oOptions.iDataSort!==undefined)
{oCol.aDataSort=[oOptions.iDataSort];}
_fnMap(oCol,oOptions,"aDataSort");}
var mRender=oCol.mRender?_fnGetObjectDataFn(oCol.mRender):null;var mData=_fnGetObjectDataFn(oCol.mData);oCol.fnGetData=function(oData,sSpecific){var innerData=mData(oData,sSpecific);if(oCol.mRender&&(sSpecific&&sSpecific!==''))
{return mRender(innerData,sSpecific,oData);}
return innerData;};oCol.fnSetData=_fnSetObjectDataFn(oCol.mData);if(!oSettings.oFeatures.bSort)
{oCol.bSortable=false;}
if(!oCol.bSortable||($.inArray('asc',oCol.asSorting)==-1&&$.inArray('desc',oCol.asSorting)==-1))
{oCol.sSortingClass=oSettings.oClasses.sSortableNone;oCol.sSortingClassJUI="";}
else if($.inArray('asc',oCol.asSorting)==-1&&$.inArray('desc',oCol.asSorting)==-1)
{oCol.sSortingClass=oSettings.oClasses.sSortable;oCol.sSortingClassJUI=oSettings.oClasses.sSortJUI;}
else if($.inArray('asc',oCol.asSorting)!=-1&&$.inArray('desc',oCol.asSorting)==-1)
{oCol.sSortingClass=oSettings.oClasses.sSortableAsc;oCol.sSortingClassJUI=oSettings.oClasses.sSortJUIAscAllowed;}
else if($.inArray('asc',oCol.asSorting)==-1&&$.inArray('desc',oCol.asSorting)!=-1)
{oCol.sSortingClass=oSettings.oClasses.sSortableDesc;oCol.sSortingClassJUI=oSettings.oClasses.sSortJUIDescAllowed;}}
function _fnAdjustColumnSizing(oSettings)
{if(oSettings.oFeatures.bAutoWidth===false)
{return false;}
_fnCalculateColumnWidths(oSettings);for(var i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{oSettings.aoColumns[i].nTh.style.width=oSettings.aoColumns[i].sWidth;}}
function _fnVisibleToColumnIndex(oSettings,iMatch)
{var aiVis=_fnGetColumns(oSettings,'bVisible');return typeof aiVis[iMatch]==='number'?aiVis[iMatch]:null;}
function _fnColumnIndexToVisible(oSettings,iMatch)
{var aiVis=_fnGetColumns(oSettings,'bVisible');var iPos=$.inArray(iMatch,aiVis);return iPos!==-1?iPos:null;}
function _fnVisbleColumns(oSettings)
{return _fnGetColumns(oSettings,'bVisible').length;}
function _fnGetColumns(oSettings,sParam)
{var a=[];$.map(oSettings.aoColumns,function(val,i){if(val[sParam]){a.push(i);}});return a;}
function _fnDetectType(sData)
{var aTypes=DataTable.ext.aTypes;var iLen=aTypes.length;for(var i=0;i<iLen;i++)
{var sType=aTypes[i](sData);if(sType!==null)
{return sType;}}
return'string';}
function _fnReOrderIndex(oSettings,sColumns)
{var aColumns=sColumns.split(',');var aiReturn=[];for(var i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{for(var j=0;j<iLen;j++)
{if(oSettings.aoColumns[i].sName==aColumns[j])
{aiReturn.push(j);break;}}}
return aiReturn;}
function _fnColumnOrdering(oSettings)
{var sNames='';for(var i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{sNames+=oSettings.aoColumns[i].sName+',';}
if(sNames.length==iLen)
{return"";}
return sNames.slice(0,-1);}
function _fnApplyColumnDefs(oSettings,aoColDefs,aoCols,fn)
{var i,iLen,j,jLen,k,kLen;if(aoColDefs)
{for(i=aoColDefs.length-1;i>=0;i--)
{var aTargets=aoColDefs[i].aTargets;if(!$.isArray(aTargets))
{_fnLog(oSettings,1,'aTargets must be an array of targets, not a '+(typeof aTargets));}
for(j=0,jLen=aTargets.length;j<jLen;j++)
{if(typeof aTargets[j]==='number'&&aTargets[j]>=0)
{while(oSettings.aoColumns.length<=aTargets[j])
{_fnAddColumn(oSettings);}
fn(aTargets[j],aoColDefs[i]);}
else if(typeof aTargets[j]==='number'&&aTargets[j]<0)
{fn(oSettings.aoColumns.length+aTargets[j],aoColDefs[i]);}
else if(typeof aTargets[j]==='string')
{for(k=0,kLen=oSettings.aoColumns.length;k<kLen;k++)
{if(aTargets[j]=="_all"||$(oSettings.aoColumns[k].nTh).hasClass(aTargets[j]))
{fn(k,aoColDefs[i]);}}}}}}
if(aoCols)
{for(i=0,iLen=aoCols.length;i<iLen;i++)
{fn(i,aoCols[i]);}}}
function _fnAddData(oSettings,aDataSupplied)
{var oCol;var aDataIn=($.isArray(aDataSupplied))?aDataSupplied.slice():$.extend(true,{},aDataSupplied);var iRow=oSettings.aoData.length;var oData=$.extend(true,{},DataTable.models.oRow);oData._aData=aDataIn;oSettings.aoData.push(oData);var nTd,sThisType;for(var i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{oCol=oSettings.aoColumns[i];if(typeof oCol.fnRender==='function'&&oCol.bUseRendered&&oCol.mData!==null)
{_fnSetCellData(oSettings,iRow,i,_fnRender(oSettings,iRow,i));}
else
{_fnSetCellData(oSettings,iRow,i,_fnGetCellData(oSettings,iRow,i));}
if(oCol._bAutoType&&oCol.sType!='string')
{var sVarType=_fnGetCellData(oSettings,iRow,i,'type');if(sVarType!==null&&sVarType!=='')
{sThisType=_fnDetectType(sVarType);if(oCol.sType===null)
{oCol.sType=sThisType;}
else if(oCol.sType!=sThisType&&oCol.sType!="html")
{oCol.sType='string';}}}}
oSettings.aiDisplayMaster.push(iRow);if(!oSettings.oFeatures.bDeferRender)
{_fnCreateTr(oSettings,iRow);}
return iRow;}
function _fnGatherData(oSettings)
{var iLoop,i,iLen,j,jLen,jInner,nTds,nTrs,nTd,nTr,aLocalData,iThisIndex,iRow,iRows,iColumn,iColumns,sNodeName,oCol,oData;if(oSettings.bDeferLoading||oSettings.sAjaxSource===null)
{nTr=oSettings.nTBody.firstChild;while(nTr)
{if(nTr.nodeName.toUpperCase()=="TR")
{iThisIndex=oSettings.aoData.length;nTr._DT_RowIndex=iThisIndex;oSettings.aoData.push($.extend(true,{},DataTable.models.oRow,{"nTr":nTr}));oSettings.aiDisplayMaster.push(iThisIndex);nTd=nTr.firstChild;jInner=0;while(nTd)
{sNodeName=nTd.nodeName.toUpperCase();if(sNodeName=="TD"||sNodeName=="TH")
{_fnSetCellData(oSettings,iThisIndex,jInner,$.trim(nTd.innerHTML));jInner++;}
nTd=nTd.nextSibling;}}
nTr=nTr.nextSibling;}}
nTrs=_fnGetTrNodes(oSettings);nTds=[];for(i=0,iLen=nTrs.length;i<iLen;i++)
{nTd=nTrs[i].firstChild;while(nTd)
{sNodeName=nTd.nodeName.toUpperCase();if(sNodeName=="TD"||sNodeName=="TH")
{nTds.push(nTd);}
nTd=nTd.nextSibling;}}
for(iColumn=0,iColumns=oSettings.aoColumns.length;iColumn<iColumns;iColumn++)
{oCol=oSettings.aoColumns[iColumn];if(oCol.sTitle===null)
{oCol.sTitle=oCol.nTh.innerHTML;}
var
bAutoType=oCol._bAutoType,bRender=typeof oCol.fnRender==='function',bClass=oCol.sClass!==null,bVisible=oCol.bVisible,nCell,sThisType,sRendered,sValType;if(bAutoType||bRender||bClass||!bVisible)
{for(iRow=0,iRows=oSettings.aoData.length;iRow<iRows;iRow++)
{oData=oSettings.aoData[iRow];nCell=nTds[(iRow*iColumns)+iColumn];if(bAutoType&&oCol.sType!='string')
{sValType=_fnGetCellData(oSettings,iRow,iColumn,'type');if(sValType!=='')
{sThisType=_fnDetectType(sValType);if(oCol.sType===null)
{oCol.sType=sThisType;}
else if(oCol.sType!=sThisType&&oCol.sType!="html")
{oCol.sType='string';}}}
if(oCol.mRender)
{nCell.innerHTML=_fnGetCellData(oSettings,iRow,iColumn,'display');}
else if(oCol.mData!==iColumn)
{nCell.innerHTML=_fnGetCellData(oSettings,iRow,iColumn,'display');}
if(bRender)
{sRendered=_fnRender(oSettings,iRow,iColumn);nCell.innerHTML=sRendered;if(oCol.bUseRendered)
{_fnSetCellData(oSettings,iRow,iColumn,sRendered);}}
if(bClass)
{nCell.className+=' '+oCol.sClass;}
if(!bVisible)
{oData._anHidden[iColumn]=nCell;nCell.parentNode.removeChild(nCell);}
else
{oData._anHidden[iColumn]=null;}
if(oCol.fnCreatedCell)
{oCol.fnCreatedCell.call(oSettings.oInstance,nCell,_fnGetCellData(oSettings,iRow,iColumn,'display'),oData._aData,iRow,iColumn);}}}}
if(oSettings.aoRowCreatedCallback.length!==0)
{for(i=0,iLen=oSettings.aoData.length;i<iLen;i++)
{oData=oSettings.aoData[i];_fnCallbackFire(oSettings,'aoRowCreatedCallback',null,[oData.nTr,oData._aData,i]);}}}
function _fnNodeToDataIndex(oSettings,n)
{return(n._DT_RowIndex!==undefined)?n._DT_RowIndex:null;}
function _fnNodeToColumnIndex(oSettings,iRow,n)
{var anCells=_fnGetTdNodes(oSettings,iRow);for(var i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{if(anCells[i]===n)
{return i;}}
return-1;}
function _fnGetRowData(oSettings,iRow,sSpecific,aiColumns)
{var out=[];for(var i=0,iLen=aiColumns.length;i<iLen;i++)
{out.push(_fnGetCellData(oSettings,iRow,aiColumns[i],sSpecific));}
return out;}
function _fnGetCellData(oSettings,iRow,iCol,sSpecific)
{var sData;var oCol=oSettings.aoColumns[iCol];var oData=oSettings.aoData[iRow]._aData;if((sData=oCol.fnGetData(oData,sSpecific))===undefined)
{if(oSettings.iDrawError!=oSettings.iDraw&&oCol.sDefaultContent===null)
{_fnLog(oSettings,0,"Requested unknown parameter "+
(typeof oCol.mData=='function'?'{mData function}':"'"+oCol.mData+"'")+" from the data source for row "+iRow);oSettings.iDrawError=oSettings.iDraw;}
return oCol.sDefaultContent;}
if(sData===null&&oCol.sDefaultContent!==null)
{sData=oCol.sDefaultContent;}
else if(typeof sData==='function')
{return sData();}
if(sSpecific=='display'&&sData===null)
{return'';}
return sData;}
function _fnSetCellData(oSettings,iRow,iCol,val)
{var oCol=oSettings.aoColumns[iCol];var oData=oSettings.aoData[iRow]._aData;oCol.fnSetData(oData,val);}
var __reArray=/\[.*?\]$/;function _fnGetObjectDataFn(mSource)
{if(mSource===null)
{return function(data,type){return null;};}
else if(typeof mSource==='function')
{return function(data,type,extra){return mSource(data,type,extra);};}
else if(typeof mSource==='string'&&(mSource.indexOf('.')!==-1||mSource.indexOf('[')!==-1))
{var fetchData=function(data,type,src){var a=src.split('.');var arrayNotation,out,innerSrc;if(src!=="")
{for(var i=0,iLen=a.length;i<iLen;i++)
{arrayNotation=a[i].match(__reArray);if(arrayNotation){a[i]=a[i].replace(__reArray,'');if(a[i]!==""){data=data[a[i]];}
out=[];a.splice(0,i+1);innerSrc=a.join('.');for(var j=0,jLen=data.length;j<jLen;j++){out.push(fetchData(data[j],type,innerSrc));}
var join=arrayNotation[0].substring(1,arrayNotation[0].length-1);data=(join==="")?out:out.join(join);break;}
if(data===null||data[a[i]]===undefined)
{return undefined;}
data=data[a[i]];}}
return data;};return function(data,type){return fetchData(data,type,mSource);};}
else
{return function(data,type){return data[mSource];};}}
function _fnSetObjectDataFn(mSource)
{if(mSource===null)
{return function(data,val){};}
else if(typeof mSource==='function')
{return function(data,val){mSource(data,'set',val);};}
else if(typeof mSource==='string'&&(mSource.indexOf('.')!==-1||mSource.indexOf('[')!==-1))
{var setData=function(data,val,src){var a=src.split('.'),b;var arrayNotation,o,innerSrc;for(var i=0,iLen=a.length-1;i<iLen;i++)
{arrayNotation=a[i].match(__reArray);if(arrayNotation)
{a[i]=a[i].replace(__reArray,'');data[a[i]]=[];b=a.slice();b.splice(0,i+1);innerSrc=b.join('.');for(var j=0,jLen=val.length;j<jLen;j++)
{o={};setData(o,val[j],innerSrc);data[a[i]].push(o);}
return;}
if(data[a[i]]===null||data[a[i]]===undefined)
{data[a[i]]={};}
data=data[a[i]];}
data[a[a.length-1].replace(__reArray,'')]=val;};return function(data,val){return setData(data,val,mSource);};}
else
{return function(data,val){data[mSource]=val;};}}
function _fnGetDataMaster(oSettings)
{var aData=[];var iLen=oSettings.aoData.length;for(var i=0;i<iLen;i++)
{aData.push(oSettings.aoData[i]._aData);}
return aData;}
function _fnClearTable(oSettings)
{oSettings.aoData.splice(0,oSettings.aoData.length);oSettings.aiDisplayMaster.splice(0,oSettings.aiDisplayMaster.length);oSettings.aiDisplay.splice(0,oSettings.aiDisplay.length);_fnCalculateEnd(oSettings);}
function _fnDeleteIndex(a,iTarget)
{var iTargetIndex=-1;for(var i=0,iLen=a.length;i<iLen;i++)
{if(a[i]==iTarget)
{iTargetIndex=i;}
else if(a[i]>iTarget)
{a[i]--;}}
if(iTargetIndex!=-1)
{a.splice(iTargetIndex,1);}}
function _fnRender(oSettings,iRow,iCol)
{var oCol=oSettings.aoColumns[iCol];return oCol.fnRender({"iDataRow":iRow,"iDataColumn":iCol,"oSettings":oSettings,"aData":oSettings.aoData[iRow]._aData,"mDataProp":oCol.mData},_fnGetCellData(oSettings,iRow,iCol,'display'));}
function _fnCreateTr(oSettings,iRow)
{var oData=oSettings.aoData[iRow];var nTd;if(oData.nTr===null)
{oData.nTr=document.createElement('tr');oData.nTr._DT_RowIndex=iRow;if(oData._aData.DT_RowId)
{oData.nTr.id=oData._aData.DT_RowId;}
if(oData._aData.DT_RowClass)
{oData.nTr.className=oData._aData.DT_RowClass;}
for(var i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{var oCol=oSettings.aoColumns[i];nTd=document.createElement(oCol.sCellType);nTd.innerHTML=(typeof oCol.fnRender==='function'&&(!oCol.bUseRendered||oCol.mData===null))?_fnRender(oSettings,iRow,i):_fnGetCellData(oSettings,iRow,i,'display');if(oCol.sClass!==null)
{nTd.className=oCol.sClass;}
if(oCol.bVisible)
{oData.nTr.appendChild(nTd);oData._anHidden[i]=null;}
else
{oData._anHidden[i]=nTd;}
if(oCol.fnCreatedCell)
{oCol.fnCreatedCell.call(oSettings.oInstance,nTd,_fnGetCellData(oSettings,iRow,i,'display'),oData._aData,iRow,i);}}
_fnCallbackFire(oSettings,'aoRowCreatedCallback',null,[oData.nTr,oData._aData,iRow]);}}
function _fnBuildHead(oSettings)
{var i,nTh,iLen,j,jLen;var iThs=$('th, td',oSettings.nTHead).length;var iCorrector=0;var jqChildren;if(iThs!==0)
{for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{nTh=oSettings.aoColumns[i].nTh;nTh.setAttribute('role','columnheader');if(oSettings.aoColumns[i].bSortable)
{nTh.setAttribute('tabindex',oSettings.iTabIndex);nTh.setAttribute('aria-controls',oSettings.sTableId);}
if(oSettings.aoColumns[i].sClass!==null)
{$(nTh).addClass(oSettings.aoColumns[i].sClass);}
if(oSettings.aoColumns[i].sTitle!=nTh.innerHTML)
{nTh.innerHTML=oSettings.aoColumns[i].sTitle;}}}
else
{var nTr=document.createElement("tr");for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{nTh=oSettings.aoColumns[i].nTh;nTh.innerHTML=oSettings.aoColumns[i].sTitle;nTh.setAttribute('tabindex','0');if(oSettings.aoColumns[i].sClass!==null)
{$(nTh).addClass(oSettings.aoColumns[i].sClass);}
nTr.appendChild(nTh);}
$(oSettings.nTHead).html('')[0].appendChild(nTr);_fnDetectHeader(oSettings.aoHeader,oSettings.nTHead);}
$(oSettings.nTHead).children('tr').attr('role','row');if(oSettings.bJUI)
{for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{nTh=oSettings.aoColumns[i].nTh;var nDiv=document.createElement('div');nDiv.className=oSettings.oClasses.sSortJUIWrapper;$(nTh).contents().appendTo(nDiv);var nSpan=document.createElement('span');nSpan.className=oSettings.oClasses.sSortIcon;nDiv.appendChild(nSpan);nTh.appendChild(nDiv);}}
if(oSettings.oFeatures.bSort)
{for(i=0;i<oSettings.aoColumns.length;i++)
{if(oSettings.aoColumns[i].bSortable!==false)
{_fnSortAttachListener(oSettings,oSettings.aoColumns[i].nTh,i);}
else
{$(oSettings.aoColumns[i].nTh).addClass(oSettings.oClasses.sSortableNone);}}}
if(oSettings.oClasses.sFooterTH!=="")
{$(oSettings.nTFoot).children('tr').children('th').addClass(oSettings.oClasses.sFooterTH);}
if(oSettings.nTFoot!==null)
{var anCells=_fnGetUniqueThs(oSettings,null,oSettings.aoFooter);for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{if(anCells[i])
{oSettings.aoColumns[i].nTf=anCells[i];if(oSettings.aoColumns[i].sClass)
{$(anCells[i]).addClass(oSettings.aoColumns[i].sClass);}}}}}
function _fnDrawHead(oSettings,aoSource,bIncludeHidden)
{var i,iLen,j,jLen,k,kLen,n,nLocalTr;var aoLocal=[];var aApplied=[];var iColumns=oSettings.aoColumns.length;var iRowspan,iColspan;if(bIncludeHidden===undefined)
{bIncludeHidden=false;}
for(i=0,iLen=aoSource.length;i<iLen;i++)
{aoLocal[i]=aoSource[i].slice();aoLocal[i].nTr=aoSource[i].nTr;for(j=iColumns-1;j>=0;j--)
{if(!oSettings.aoColumns[j].bVisible&&!bIncludeHidden)
{aoLocal[i].splice(j,1);}}
aApplied.push([]);}
for(i=0,iLen=aoLocal.length;i<iLen;i++)
{nLocalTr=aoLocal[i].nTr;if(nLocalTr)
{while((n=nLocalTr.firstChild))
{nLocalTr.removeChild(n);}}
for(j=0,jLen=aoLocal[i].length;j<jLen;j++)
{iRowspan=1;iColspan=1;if(aApplied[i][j]===undefined)
{nLocalTr.appendChild(aoLocal[i][j].cell);aApplied[i][j]=1;while(aoLocal[i+iRowspan]!==undefined&&aoLocal[i][j].cell==aoLocal[i+iRowspan][j].cell)
{aApplied[i+iRowspan][j]=1;iRowspan++;}
while(aoLocal[i][j+iColspan]!==undefined&&aoLocal[i][j].cell==aoLocal[i][j+iColspan].cell)
{for(k=0;k<iRowspan;k++)
{aApplied[i+k][j+iColspan]=1;}
iColspan++;}
aoLocal[i][j].cell.rowSpan=iRowspan;aoLocal[i][j].cell.colSpan=iColspan;}}}}
function _fnDraw(oSettings)
{var aPreDraw=_fnCallbackFire(oSettings,'aoPreDrawCallback','preDraw',[oSettings]);if($.inArray(false,aPreDraw)!==-1)
{_fnProcessingDisplay(oSettings,false);return;}
var i,iLen,n;var anRows=[];var iRowCount=0;var iStripes=oSettings.asStripeClasses.length;var iOpenRows=oSettings.aoOpenRows.length;oSettings.bDrawing=true;if(oSettings.iInitDisplayStart!==undefined&&oSettings.iInitDisplayStart!=-1)
{if(oSettings.oFeatures.bServerSide)
{oSettings._iDisplayStart=oSettings.iInitDisplayStart;}
else
{oSettings._iDisplayStart=(oSettings.iInitDisplayStart>=oSettings.fnRecordsDisplay())?0:oSettings.iInitDisplayStart;}
oSettings.iInitDisplayStart=-1;_fnCalculateEnd(oSettings);}
if(oSettings.bDeferLoading)
{oSettings.bDeferLoading=false;oSettings.iDraw++;}
else if(!oSettings.oFeatures.bServerSide)
{oSettings.iDraw++;}
else if(!oSettings.bDestroying&&!_fnAjaxUpdate(oSettings))
{return;}
if(oSettings.aiDisplay.length!==0)
{var iStart=oSettings._iDisplayStart;var iEnd=oSettings._iDisplayEnd;if(oSettings.oFeatures.bServerSide)
{iStart=0;iEnd=oSettings.aoData.length;}
for(var j=iStart;j<iEnd;j++)
{var aoData=oSettings.aoData[oSettings.aiDisplay[j]];if(aoData.nTr===null)
{_fnCreateTr(oSettings,oSettings.aiDisplay[j]);}
var nRow=aoData.nTr;if(iStripes!==0)
{var sStripe=oSettings.asStripeClasses[iRowCount%iStripes];if(aoData._sRowStripe!=sStripe)
{$(nRow).removeClass(aoData._sRowStripe).addClass(sStripe);aoData._sRowStripe=sStripe;}}
_fnCallbackFire(oSettings,'aoRowCallback',null,[nRow,oSettings.aoData[oSettings.aiDisplay[j]]._aData,iRowCount,j]);anRows.push(nRow);iRowCount++;if(iOpenRows!==0)
{for(var k=0;k<iOpenRows;k++)
{if(nRow==oSettings.aoOpenRows[k].nParent)
{anRows.push(oSettings.aoOpenRows[k].nTr);break;}}}}}
else
{anRows[0]=document.createElement('tr');if(oSettings.asStripeClasses[0])
{anRows[0].className=oSettings.asStripeClasses[0];}
var oLang=oSettings.oLanguage;var sZero=oLang.sZeroRecords;if(oSettings.iDraw==1&&oSettings.sAjaxSource!==null&&!oSettings.oFeatures.bServerSide)
{sZero=oLang.sLoadingRecords;}
else if(oLang.sEmptyTable&&oSettings.fnRecordsTotal()===0)
{sZero=oLang.sEmptyTable;}
var nTd=document.createElement('td');nTd.setAttribute('valign',"top");nTd.colSpan=_fnVisbleColumns(oSettings);nTd.className=oSettings.oClasses.sRowEmpty;nTd.innerHTML=_fnInfoMacros(oSettings,sZero);anRows[iRowCount].appendChild(nTd);}
_fnCallbackFire(oSettings,'aoHeaderCallback','header',[$(oSettings.nTHead).children('tr')[0],_fnGetDataMaster(oSettings),oSettings._iDisplayStart,oSettings.fnDisplayEnd(),oSettings.aiDisplay]);_fnCallbackFire(oSettings,'aoFooterCallback','footer',[$(oSettings.nTFoot).children('tr')[0],_fnGetDataMaster(oSettings),oSettings._iDisplayStart,oSettings.fnDisplayEnd(),oSettings.aiDisplay]);var
nAddFrag=document.createDocumentFragment(),nRemoveFrag=document.createDocumentFragment(),nBodyPar,nTrs;if(oSettings.nTBody)
{nBodyPar=oSettings.nTBody.parentNode;nRemoveFrag.appendChild(oSettings.nTBody);if(!oSettings.oScroll.bInfinite||!oSettings._bInitComplete||oSettings.bSorted||oSettings.bFiltered)
{while((n=oSettings.nTBody.firstChild))
{oSettings.nTBody.removeChild(n);}}
for(i=0,iLen=anRows.length;i<iLen;i++)
{nAddFrag.appendChild(anRows[i]);}
oSettings.nTBody.appendChild(nAddFrag);if(nBodyPar!==null)
{nBodyPar.appendChild(oSettings.nTBody);}}
_fnCallbackFire(oSettings,'aoDrawCallback','draw',[oSettings]);oSettings.bSorted=false;oSettings.bFiltered=false;oSettings.bDrawing=false;if(oSettings.oFeatures.bServerSide)
{_fnProcessingDisplay(oSettings,false);if(!oSettings._bInitComplete)
{_fnInitComplete(oSettings);}}}
function _fnReDraw(oSettings)
{if(oSettings.oFeatures.bSort)
{_fnSort(oSettings,oSettings.oPreviousSearch);}
else if(oSettings.oFeatures.bFilter)
{_fnFilterComplete(oSettings,oSettings.oPreviousSearch);}
else
{_fnCalculateEnd(oSettings);_fnDraw(oSettings);}}
function _fnAddOptionsHtml(oSettings)
{var nHolding=$('<div></div>')[0];oSettings.nTable.parentNode.insertBefore(nHolding,oSettings.nTable);oSettings.nTableWrapper=$('<div id="'+oSettings.sTableId+'_wrapper" class="'+oSettings.oClasses.sWrapper+'" role="grid"></div>')[0];oSettings.nTableReinsertBefore=oSettings.nTable.nextSibling;var nInsertNode=oSettings.nTableWrapper;var aDom=oSettings.sDom.split('');var nTmp,iPushFeature,cOption,nNewNode,cNext,sAttr,j;for(var i=0;i<aDom.length;i++)
{iPushFeature=0;cOption=aDom[i];if(cOption=='<')
{nNewNode=$('<div></div>')[0];cNext=aDom[i+1];if(cNext=="'"||cNext=='"')
{sAttr="";j=2;while(aDom[i+j]!=cNext)
{sAttr+=aDom[i+j];j++;}
if(sAttr=="H")
{sAttr=oSettings.oClasses.sJUIHeader;}
else if(sAttr=="F")
{sAttr=oSettings.oClasses.sJUIFooter;}
if(sAttr.indexOf('.')!=-1)
{var aSplit=sAttr.split('.');nNewNode.id=aSplit[0].substr(1,aSplit[0].length-1);nNewNode.className=aSplit[1];}
else if(sAttr.charAt(0)=="#")
{nNewNode.id=sAttr.substr(1,sAttr.length-1);}
else
{nNewNode.className=sAttr;}
i+=j;}
nInsertNode.appendChild(nNewNode);nInsertNode=nNewNode;}
else if(cOption=='>')
{nInsertNode=nInsertNode.parentNode;}
else if(cOption=='l'&&oSettings.oFeatures.bPaginate&&oSettings.oFeatures.bLengthChange)
{nTmp=_fnFeatureHtmlLength(oSettings);iPushFeature=1;}
else if(cOption=='f'&&oSettings.oFeatures.bFilter)
{nTmp=_fnFeatureHtmlFilter(oSettings);iPushFeature=1;}
else if(cOption=='r'&&oSettings.oFeatures.bProcessing)
{nTmp=_fnFeatureHtmlProcessing(oSettings);iPushFeature=1;}
else if(cOption=='t')
{nTmp=_fnFeatureHtmlTable(oSettings);iPushFeature=1;}
else if(cOption=='i'&&oSettings.oFeatures.bInfo)
{nTmp=_fnFeatureHtmlInfo(oSettings);iPushFeature=1;}
else if(cOption=='p'&&oSettings.oFeatures.bPaginate)
{nTmp=_fnFeatureHtmlPaginate(oSettings);iPushFeature=1;}
else if(DataTable.ext.aoFeatures.length!==0)
{var aoFeatures=DataTable.ext.aoFeatures;for(var k=0,kLen=aoFeatures.length;k<kLen;k++)
{if(cOption==aoFeatures[k].cFeature)
{nTmp=aoFeatures[k].fnInit(oSettings);if(nTmp)
{iPushFeature=1;}
break;}}}
if(iPushFeature==1&&nTmp!==null)
{if(typeof oSettings.aanFeatures[cOption]!=='object')
{oSettings.aanFeatures[cOption]=[];}
oSettings.aanFeatures[cOption].push(nTmp);nInsertNode.appendChild(nTmp);}}
nHolding.parentNode.replaceChild(oSettings.nTableWrapper,nHolding);}
function _fnDetectHeader(aLayout,nThead)
{var nTrs=$(nThead).children('tr');var nTr,nCell;var i,k,l,iLen,jLen,iColShifted,iColumn,iColspan,iRowspan;var bUnique;var fnShiftCol=function(a,i,j){var k=a[i];while(k[j]){j++;}
return j;};aLayout.splice(0,aLayout.length);for(i=0,iLen=nTrs.length;i<iLen;i++)
{aLayout.push([]);}
for(i=0,iLen=nTrs.length;i<iLen;i++)
{nTr=nTrs[i];iColumn=0;nCell=nTr.firstChild;while(nCell){if(nCell.nodeName.toUpperCase()=="TD"||nCell.nodeName.toUpperCase()=="TH")
{iColspan=nCell.getAttribute('colspan')*1;iRowspan=nCell.getAttribute('rowspan')*1;iColspan=(!iColspan||iColspan===0||iColspan===1)?1:iColspan;iRowspan=(!iRowspan||iRowspan===0||iRowspan===1)?1:iRowspan;iColShifted=fnShiftCol(aLayout,i,iColumn);bUnique=iColspan===1?true:false;for(l=0;l<iColspan;l++)
{for(k=0;k<iRowspan;k++)
{aLayout[i+k][iColShifted+l]={"cell":nCell,"unique":bUnique};aLayout[i+k].nTr=nTr;}}}
nCell=nCell.nextSibling;}}}
function _fnGetUniqueThs(oSettings,nHeader,aLayout)
{var aReturn=[];if(!aLayout)
{aLayout=oSettings.aoHeader;if(nHeader)
{aLayout=[];_fnDetectHeader(aLayout,nHeader);}}
for(var i=0,iLen=aLayout.length;i<iLen;i++)
{for(var j=0,jLen=aLayout[i].length;j<jLen;j++)
{if(aLayout[i][j].unique&&(!aReturn[j]||!oSettings.bSortCellsTop))
{aReturn[j]=aLayout[i][j].cell;}}}
return aReturn;}
function _fnAjaxUpdate(oSettings)
{if(oSettings.bAjaxDataGet)
{oSettings.iDraw++;_fnProcessingDisplay(oSettings,true);var iColumns=oSettings.aoColumns.length;var aoData=_fnAjaxParameters(oSettings);_fnServerParams(oSettings,aoData);oSettings.fnServerData.call(oSettings.oInstance,oSettings.sAjaxSource,aoData,function(json){_fnAjaxUpdateDraw(oSettings,json);},oSettings);return false;}
else
{return true;}}
function _fnAjaxParameters(oSettings)
{var iColumns=oSettings.aoColumns.length;var aoData=[],mDataProp,aaSort,aDataSort;var i,j;aoData.push({"name":"sEcho","value":oSettings.iDraw});aoData.push({"name":"iColumns","value":iColumns});aoData.push({"name":"sColumns","value":_fnColumnOrdering(oSettings)});aoData.push({"name":"iDisplayStart","value":oSettings._iDisplayStart});aoData.push({"name":"iDisplayLength","value":oSettings.oFeatures.bPaginate!==false?oSettings._iDisplayLength:-1});for(i=0;i<iColumns;i++)
{mDataProp=oSettings.aoColumns[i].mData;aoData.push({"name":"mDataProp_"+i,"value":typeof(mDataProp)==="function"?'function':mDataProp});}
if(oSettings.oFeatures.bFilter!==false)
{aoData.push({"name":"sSearch","value":oSettings.oPreviousSearch.sSearch});aoData.push({"name":"bRegex","value":oSettings.oPreviousSearch.bRegex});for(i=0;i<iColumns;i++)
{aoData.push({"name":"sSearch_"+i,"value":oSettings.aoPreSearchCols[i].sSearch});aoData.push({"name":"bRegex_"+i,"value":oSettings.aoPreSearchCols[i].bRegex});aoData.push({"name":"bSearchable_"+i,"value":oSettings.aoColumns[i].bSearchable});}}
if(oSettings.oFeatures.bSort!==false)
{var iCounter=0;aaSort=(oSettings.aaSortingFixed!==null)?oSettings.aaSortingFixed.concat(oSettings.aaSorting):oSettings.aaSorting.slice();for(i=0;i<aaSort.length;i++)
{aDataSort=oSettings.aoColumns[aaSort[i][0]].aDataSort;for(j=0;j<aDataSort.length;j++)
{aoData.push({"name":"iSortCol_"+iCounter,"value":aDataSort[j]});aoData.push({"name":"sSortDir_"+iCounter,"value":aaSort[i][1]});iCounter++;}}
aoData.push({"name":"iSortingCols","value":iCounter});for(i=0;i<iColumns;i++)
{aoData.push({"name":"bSortable_"+i,"value":oSettings.aoColumns[i].bSortable});}}
return aoData;}
function _fnServerParams(oSettings,aoData)
{_fnCallbackFire(oSettings,'aoServerParams','serverParams',[aoData]);}
function _fnAjaxUpdateDraw(oSettings,json)
{if(json.sEcho!==undefined)
{if(json.sEcho*1<oSettings.iDraw)
{return;}
else
{oSettings.iDraw=json.sEcho*1;}}
if(!oSettings.oScroll.bInfinite||(oSettings.oScroll.bInfinite&&(oSettings.bSorted||oSettings.bFiltered)))
{_fnClearTable(oSettings);}
oSettings._iRecordsTotal=parseInt(json.iTotalRecords,10);oSettings._iRecordsDisplay=parseInt(json.iTotalDisplayRecords,10);var sOrdering=_fnColumnOrdering(oSettings);var bReOrder=(json.sColumns!==undefined&&sOrdering!==""&&json.sColumns!=sOrdering);var aiIndex;if(bReOrder)
{aiIndex=_fnReOrderIndex(oSettings,json.sColumns);}
var aData=_fnGetObjectDataFn(oSettings.sAjaxDataProp)(json);for(var i=0,iLen=aData.length;i<iLen;i++)
{if(bReOrder)
{var aDataSorted=[];for(var j=0,jLen=oSettings.aoColumns.length;j<jLen;j++)
{aDataSorted.push(aData[i][aiIndex[j]]);}
_fnAddData(oSettings,aDataSorted);}
else
{_fnAddData(oSettings,aData[i]);}}
oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();oSettings.bAjaxDataGet=false;_fnDraw(oSettings);oSettings.bAjaxDataGet=true;_fnProcessingDisplay(oSettings,false);}
function _fnFeatureHtmlFilter(oSettings)
{var oPreviousSearch=oSettings.oPreviousSearch;var sSearchStr=oSettings.oLanguage.sSearch;sSearchStr=(sSearchStr.indexOf('_INPUT_')!==-1)?sSearchStr.replace('_INPUT_','<input type="text" />'):sSearchStr===""?'<input type="text" />':sSearchStr+' <input type="text" />';var nFilter=document.createElement('div');nFilter.className=oSettings.oClasses.sFilter;nFilter.innerHTML='<label>'+sSearchStr+'</label>';if(!oSettings.aanFeatures.f)
{nFilter.id=oSettings.sTableId+'_filter';}
var jqFilter=$('input[type="text"]',nFilter);nFilter._DT_Input=jqFilter[0];jqFilter.val(oPreviousSearch.sSearch.replace('"','&quot;'));jqFilter.bind('keyup.DT',function(e){var n=oSettings.aanFeatures.f;var val=this.value===""?"":this.value;for(var i=0,iLen=n.length;i<iLen;i++)
{if(n[i]!=$(this).parents('div.dataTables_filter')[0])
{$(n[i]._DT_Input).val(val);}}
if(val!=oPreviousSearch.sSearch)
{_fnFilterComplete(oSettings,{"sSearch":val,"bRegex":oPreviousSearch.bRegex,"bSmart":oPreviousSearch.bSmart,"bCaseInsensitive":oPreviousSearch.bCaseInsensitive});}});jqFilter.attr('aria-controls',oSettings.sTableId).bind('keypress.DT',function(e){if(e.keyCode==13)
{return false;}});return nFilter;}
function _fnFilterComplete(oSettings,oInput,iForce)
{var oPrevSearch=oSettings.oPreviousSearch;var aoPrevSearch=oSettings.aoPreSearchCols;var fnSaveFilter=function(oFilter){oPrevSearch.sSearch=oFilter.sSearch;oPrevSearch.bRegex=oFilter.bRegex;oPrevSearch.bSmart=oFilter.bSmart;oPrevSearch.bCaseInsensitive=oFilter.bCaseInsensitive;};if(!oSettings.oFeatures.bServerSide)
{_fnFilter(oSettings,oInput.sSearch,iForce,oInput.bRegex,oInput.bSmart,oInput.bCaseInsensitive);fnSaveFilter(oInput);for(var i=0;i<oSettings.aoPreSearchCols.length;i++)
{_fnFilterColumn(oSettings,aoPrevSearch[i].sSearch,i,aoPrevSearch[i].bRegex,aoPrevSearch[i].bSmart,aoPrevSearch[i].bCaseInsensitive);}
_fnFilterCustom(oSettings);}
else
{fnSaveFilter(oInput);}
oSettings.bFiltered=true;$(oSettings.oInstance).trigger('filter',oSettings);oSettings._iDisplayStart=0;_fnCalculateEnd(oSettings);_fnDraw(oSettings);_fnBuildSearchArray(oSettings,0);}
function _fnFilterCustom(oSettings)
{var afnFilters=DataTable.ext.afnFiltering;var aiFilterColumns=_fnGetColumns(oSettings,'bSearchable');for(var i=0,iLen=afnFilters.length;i<iLen;i++)
{var iCorrector=0;for(var j=0,jLen=oSettings.aiDisplay.length;j<jLen;j++)
{var iDisIndex=oSettings.aiDisplay[j-iCorrector];var bTest=afnFilters[i](oSettings,_fnGetRowData(oSettings,iDisIndex,'filter',aiFilterColumns),iDisIndex);if(!bTest)
{oSettings.aiDisplay.splice(j-iCorrector,1);iCorrector++;}}}}
function _fnFilterColumn(oSettings,sInput,iColumn,bRegex,bSmart,bCaseInsensitive)
{if(sInput==="")
{return;}
var iIndexCorrector=0;var rpSearch=_fnFilterCreateSearch(sInput,bRegex,bSmart,bCaseInsensitive);for(var i=oSettings.aiDisplay.length-1;i>=0;i--)
{var sData=_fnDataToSearch(_fnGetCellData(oSettings,oSettings.aiDisplay[i],iColumn,'filter'),oSettings.aoColumns[iColumn].sType);if(!rpSearch.test(sData))
{oSettings.aiDisplay.splice(i,1);iIndexCorrector++;}}}
function _fnFilter(oSettings,sInput,iForce,bRegex,bSmart,bCaseInsensitive)
{var i;var rpSearch=_fnFilterCreateSearch(sInput,bRegex,bSmart,bCaseInsensitive);var oPrevSearch=oSettings.oPreviousSearch;if(!iForce)
{iForce=0;}
if(DataTable.ext.afnFiltering.length!==0)
{iForce=1;}
if(sInput.length<=0)
{oSettings.aiDisplay.splice(0,oSettings.aiDisplay.length);oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();}
else
{if(oSettings.aiDisplay.length==oSettings.aiDisplayMaster.length||oPrevSearch.sSearch.length>sInput.length||iForce==1||sInput.indexOf(oPrevSearch.sSearch)!==0)
{oSettings.aiDisplay.splice(0,oSettings.aiDisplay.length);_fnBuildSearchArray(oSettings,1);for(i=0;i<oSettings.aiDisplayMaster.length;i++)
{if(rpSearch.test(oSettings.asDataSearch[i]))
{oSettings.aiDisplay.push(oSettings.aiDisplayMaster[i]);}}}
else
{var iIndexCorrector=0;for(i=0;i<oSettings.asDataSearch.length;i++)
{if(!rpSearch.test(oSettings.asDataSearch[i]))
{oSettings.aiDisplay.splice(i-iIndexCorrector,1);iIndexCorrector++;}}}}}
function _fnBuildSearchArray(oSettings,iMaster)
{if(!oSettings.oFeatures.bServerSide)
{oSettings.asDataSearch=[];var aiFilterColumns=_fnGetColumns(oSettings,'bSearchable');var aiIndex=(iMaster===1)?oSettings.aiDisplayMaster:oSettings.aiDisplay;for(var i=0,iLen=aiIndex.length;i<iLen;i++)
{oSettings.asDataSearch[i]=_fnBuildSearchRow(oSettings,_fnGetRowData(oSettings,aiIndex[i],'filter',aiFilterColumns));}}}
function _fnBuildSearchRow(oSettings,aData)
{var sSearch=aData.join('  ');if(sSearch.indexOf('&')!==-1)
{sSearch=$('<div>').html(sSearch).text();}
return sSearch.replace(/[\n\r]/g," ");}
function _fnFilterCreateSearch(sSearch,bRegex,bSmart,bCaseInsensitive)
{var asSearch,sRegExpString;if(bSmart)
{asSearch=bRegex?sSearch.split(' '):_fnEscapeRegex(sSearch).split(' ');sRegExpString='^(?=.*?'+asSearch.join(')(?=.*?')+').*$';return new RegExp(sRegExpString,bCaseInsensitive?"i":"");}
else
{sSearch=bRegex?sSearch:_fnEscapeRegex(sSearch);return new RegExp(sSearch,bCaseInsensitive?"i":"");}}
function _fnDataToSearch(sData,sType)
{if(typeof DataTable.ext.ofnSearch[sType]==="function")
{return DataTable.ext.ofnSearch[sType](sData);}
else if(sData===null)
{return'';}
else if(sType=="html")
{return sData.replace(/[\r\n]/g," ").replace(/<.*?>/g,"");}
else if(typeof sData==="string")
{return sData.replace(/[\r\n]/g," ");}
return sData;}
function _fnEscapeRegex(sVal)
{var acEscape=['/','.','*','+','?','|','(',')','[',']','{','}','\\','$','^','-'];var reReplace=new RegExp('(\\'+acEscape.join('|\\')+')','g');return sVal.replace(reReplace,'\\$1');}
function _fnFeatureHtmlInfo(oSettings)
{var nInfo=document.createElement('div');nInfo.className=oSettings.oClasses.sInfo;if(!oSettings.aanFeatures.i)
{oSettings.aoDrawCallback.push({"fn":_fnUpdateInfo,"sName":"information"});nInfo.id=oSettings.sTableId+'_info';}
oSettings.nTable.setAttribute('aria-describedby',oSettings.sTableId+'_info');return nInfo;}
function _fnUpdateInfo(oSettings)
{if(!oSettings.oFeatures.bInfo||oSettings.aanFeatures.i.length===0)
{return;}
var
oLang=oSettings.oLanguage,iStart=oSettings._iDisplayStart+1,iEnd=oSettings.fnDisplayEnd(),iMax=oSettings.fnRecordsTotal(),iTotal=oSettings.fnRecordsDisplay(),sOut;if(iTotal===0)
{sOut=oLang.sInfoEmpty;}
else{sOut=oLang.sInfo;}
if(iTotal!=iMax)
{sOut+=' '+oLang.sInfoFiltered;}
sOut+=oLang.sInfoPostFix;sOut=_fnInfoMacros(oSettings,sOut);if(oLang.fnInfoCallback!==null)
{sOut=oLang.fnInfoCallback.call(oSettings.oInstance,oSettings,iStart,iEnd,iMax,iTotal,sOut);}
var n=oSettings.aanFeatures.i;for(var i=0,iLen=n.length;i<iLen;i++)
{$(n[i]).html(sOut);}}
function _fnInfoMacros(oSettings,str)
{var
iStart=oSettings._iDisplayStart+1,sStart=oSettings.fnFormatNumber(iStart),iEnd=oSettings.fnDisplayEnd(),sEnd=oSettings.fnFormatNumber(iEnd),iTotal=oSettings.fnRecordsDisplay(),sTotal=oSettings.fnFormatNumber(iTotal),iMax=oSettings.fnRecordsTotal(),sMax=oSettings.fnFormatNumber(iMax);if(oSettings.oScroll.bInfinite)
{sStart=oSettings.fnFormatNumber(1);}
return str.replace(/_START_/g,sStart).replace(/_END_/g,sEnd).replace(/_TOTAL_/g,sTotal).replace(/_MAX_/g,sMax);}
function _fnInitialise(oSettings)
{var i,iLen,iAjaxStart=oSettings.iInitDisplayStart;if(oSettings.bInitialised===false)
{setTimeout(function(){_fnInitialise(oSettings);},200);return;}
_fnAddOptionsHtml(oSettings);_fnBuildHead(oSettings);_fnDrawHead(oSettings,oSettings.aoHeader);if(oSettings.nTFoot)
{_fnDrawHead(oSettings,oSettings.aoFooter);}
_fnProcessingDisplay(oSettings,true);if(oSettings.oFeatures.bAutoWidth)
{_fnCalculateColumnWidths(oSettings);}
for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{if(oSettings.aoColumns[i].sWidth!==null)
{oSettings.aoColumns[i].nTh.style.width=_fnStringToCss(oSettings.aoColumns[i].sWidth);}}
if(oSettings.oFeatures.bSort)
{_fnSort(oSettings);}
else if(oSettings.oFeatures.bFilter)
{_fnFilterComplete(oSettings,oSettings.oPreviousSearch);}
else
{oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();_fnCalculateEnd(oSettings);_fnDraw(oSettings);}
if(oSettings.sAjaxSource!==null&&!oSettings.oFeatures.bServerSide)
{var aoData=[];_fnServerParams(oSettings,aoData);oSettings.fnServerData.call(oSettings.oInstance,oSettings.sAjaxSource,aoData,function(json){var aData=(oSettings.sAjaxDataProp!=="")?_fnGetObjectDataFn(oSettings.sAjaxDataProp)(json):json;for(i=0;i<aData.length;i++)
{_fnAddData(oSettings,aData[i]);}
oSettings.iInitDisplayStart=iAjaxStart;if(oSettings.oFeatures.bSort)
{_fnSort(oSettings);}
else
{oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();_fnCalculateEnd(oSettings);_fnDraw(oSettings);}
_fnProcessingDisplay(oSettings,false);_fnInitComplete(oSettings,json);},oSettings);return;}
if(!oSettings.oFeatures.bServerSide)
{_fnProcessingDisplay(oSettings,false);_fnInitComplete(oSettings);}}
function _fnInitComplete(oSettings,json)
{oSettings._bInitComplete=true;_fnCallbackFire(oSettings,'aoInitComplete','init',[oSettings,json]);}
function _fnLanguageCompat(oLanguage)
{var oDefaults=DataTable.defaults.oLanguage;if(!oLanguage.sEmptyTable&&oLanguage.sZeroRecords&&oDefaults.sEmptyTable==="No data available in table")
{_fnMap(oLanguage,oLanguage,'sZeroRecords','sEmptyTable');}
if(!oLanguage.sLoadingRecords&&oLanguage.sZeroRecords&&oDefaults.sLoadingRecords==="Loading...")
{_fnMap(oLanguage,oLanguage,'sZeroRecords','sLoadingRecords');}}
function _fnFeatureHtmlLength(oSettings)
{if(oSettings.oScroll.bInfinite)
{return null;}
var sName='name="'+oSettings.sTableId+'_length"';var sStdMenu='<select size="1" '+sName+'>';var i,iLen;var aLengthMenu=oSettings.aLengthMenu;if(aLengthMenu.length==2&&typeof aLengthMenu[0]==='object'&&typeof aLengthMenu[1]==='object')
{for(i=0,iLen=aLengthMenu[0].length;i<iLen;i++)
{sStdMenu+='<option value="'+aLengthMenu[0][i]+'">'+aLengthMenu[1][i]+'</option>';}}
else
{for(i=0,iLen=aLengthMenu.length;i<iLen;i++)
{sStdMenu+='<option value="'+aLengthMenu[i]+'">'+aLengthMenu[i]+'</option>';}}
sStdMenu+='</select>';var nLength=document.createElement('div');if(!oSettings.aanFeatures.l)
{nLength.id=oSettings.sTableId+'_length';}
nLength.className=oSettings.oClasses.sLength;nLength.innerHTML='<label>'+oSettings.oLanguage.sLengthMenu.replace('_MENU_',sStdMenu)+'</label>';$('select option[value="'+oSettings._iDisplayLength+'"]',nLength).attr("selected",true);$('select',nLength).bind('change.DT',function(e){var iVal=$(this).val();var n=oSettings.aanFeatures.l;for(i=0,iLen=n.length;i<iLen;i++)
{if(n[i]!=this.parentNode)
{$('select',n[i]).val(iVal);}}
oSettings._iDisplayLength=parseInt(iVal,10);_fnCalculateEnd(oSettings);if(oSettings.fnDisplayEnd()==oSettings.fnRecordsDisplay())
{oSettings._iDisplayStart=oSettings.fnDisplayEnd()-oSettings._iDisplayLength;if(oSettings._iDisplayStart<0)
{oSettings._iDisplayStart=0;}}
if(oSettings._iDisplayLength==-1)
{oSettings._iDisplayStart=0;}
_fnDraw(oSettings);});$('select',nLength).attr('aria-controls',oSettings.sTableId);return nLength;}
function _fnCalculateEnd(oSettings)
{if(oSettings.oFeatures.bPaginate===false)
{oSettings._iDisplayEnd=oSettings.aiDisplay.length;}
else
{if(oSettings._iDisplayStart+oSettings._iDisplayLength>oSettings.aiDisplay.length||oSettings._iDisplayLength==-1)
{oSettings._iDisplayEnd=oSettings.aiDisplay.length;}
else
{oSettings._iDisplayEnd=oSettings._iDisplayStart+oSettings._iDisplayLength;}}}
function _fnFeatureHtmlPaginate(oSettings)
{if(oSettings.oScroll.bInfinite)
{return null;}
var nPaginate=document.createElement('div');nPaginate.className=oSettings.oClasses.sPaging+oSettings.sPaginationType;DataTable.ext.oPagination[oSettings.sPaginationType].fnInit(oSettings,nPaginate,function(oSettings){_fnCalculateEnd(oSettings);_fnDraw(oSettings);});if(!oSettings.aanFeatures.p)
{oSettings.aoDrawCallback.push({"fn":function(oSettings){DataTable.ext.oPagination[oSettings.sPaginationType].fnUpdate(oSettings,function(oSettings){_fnCalculateEnd(oSettings);_fnDraw(oSettings);});},"sName":"pagination"});}
return nPaginate;}
function _fnPageChange(oSettings,mAction)
{var iOldStart=oSettings._iDisplayStart;if(typeof mAction==="number")
{oSettings._iDisplayStart=mAction*oSettings._iDisplayLength;if(oSettings._iDisplayStart>oSettings.fnRecordsDisplay())
{oSettings._iDisplayStart=0;}}
else if(mAction=="first")
{oSettings._iDisplayStart=0;}
else if(mAction=="previous")
{oSettings._iDisplayStart=oSettings._iDisplayLength>=0?oSettings._iDisplayStart-oSettings._iDisplayLength:0;if(oSettings._iDisplayStart<0)
{oSettings._iDisplayStart=0;}}
else if(mAction=="next")
{if(oSettings._iDisplayLength>=0)
{if(oSettings._iDisplayStart+oSettings._iDisplayLength<oSettings.fnRecordsDisplay())
{oSettings._iDisplayStart+=oSettings._iDisplayLength;}}
else
{oSettings._iDisplayStart=0;}}
else if(mAction=="last")
{if(oSettings._iDisplayLength>=0)
{var iPages=parseInt((oSettings.fnRecordsDisplay()-1)/oSettings._iDisplayLength,10)+1;oSettings._iDisplayStart=(iPages-1)*oSettings._iDisplayLength;}
else
{oSettings._iDisplayStart=0;}}
else
{_fnLog(oSettings,0,"Unknown paging action: "+mAction);}
$(oSettings.oInstance).trigger('page',oSettings);return iOldStart!=oSettings._iDisplayStart;}
function _fnFeatureHtmlProcessing(oSettings)
{var nProcessing=document.createElement('div');if(!oSettings.aanFeatures.r)
{nProcessing.id=oSettings.sTableId+'_processing';}
nProcessing.innerHTML=oSettings.oLanguage.sProcessing;nProcessing.className=oSettings.oClasses.sProcessing;oSettings.nTable.parentNode.insertBefore(nProcessing,oSettings.nTable);return nProcessing;}
function _fnProcessingDisplay(oSettings,bShow)
{if(oSettings.oFeatures.bProcessing)
{var an=oSettings.aanFeatures.r;for(var i=0,iLen=an.length;i<iLen;i++)
{an[i].style.visibility=bShow?"visible":"hidden";}}
$(oSettings.oInstance).trigger('processing',[oSettings,bShow]);}
function _fnFeatureHtmlTable(oSettings)
{if(oSettings.oScroll.sX===""&&oSettings.oScroll.sY==="")
{return oSettings.nTable;}
var
nScroller=document.createElement('div'),nScrollHead=document.createElement('div'),nScrollHeadInner=document.createElement('div'),nScrollBody=document.createElement('div'),nScrollFoot=document.createElement('div'),nScrollFootInner=document.createElement('div'),nScrollHeadTable=oSettings.nTable.cloneNode(false),nScrollFootTable=oSettings.nTable.cloneNode(false),nThead=oSettings.nTable.getElementsByTagName('thead')[0],nTfoot=oSettings.nTable.getElementsByTagName('tfoot').length===0?null:oSettings.nTable.getElementsByTagName('tfoot')[0],oClasses=oSettings.oClasses;nScrollHead.appendChild(nScrollHeadInner);nScrollFoot.appendChild(nScrollFootInner);nScrollBody.appendChild(oSettings.nTable);nScroller.appendChild(nScrollHead);nScroller.appendChild(nScrollBody);nScrollHeadInner.appendChild(nScrollHeadTable);nScrollHeadTable.appendChild(nThead);if(nTfoot!==null)
{nScroller.appendChild(nScrollFoot);nScrollFootInner.appendChild(nScrollFootTable);nScrollFootTable.appendChild(nTfoot);}
nScroller.className=oClasses.sScrollWrapper;nScrollHead.className=oClasses.sScrollHead;nScrollHeadInner.className=oClasses.sScrollHeadInner;nScrollBody.className=oClasses.sScrollBody;nScrollFoot.className=oClasses.sScrollFoot;nScrollFootInner.className=oClasses.sScrollFootInner;if(oSettings.oScroll.bAutoCss)
{nScrollHead.style.overflow="hidden";nScrollHead.style.position="relative";nScrollFoot.style.overflow="hidden";nScrollBody.style.overflow="auto";}
nScrollHead.style.border="0";nScrollHead.style.width="100%";nScrollFoot.style.border="0";nScrollHeadInner.style.width=oSettings.oScroll.sXInner!==""?oSettings.oScroll.sXInner:"100%";nScrollHeadTable.removeAttribute('id');nScrollHeadTable.style.marginLeft="0";oSettings.nTable.style.marginLeft="0";if(nTfoot!==null)
{nScrollFootTable.removeAttribute('id');nScrollFootTable.style.marginLeft="0";}
var nCaption=$(oSettings.nTable).children('caption');if(nCaption.length>0)
{nCaption=nCaption[0];if(nCaption._captionSide==="top")
{nScrollHeadTable.appendChild(nCaption);}
else if(nCaption._captionSide==="bottom"&&nTfoot)
{nScrollFootTable.appendChild(nCaption);}}
if(oSettings.oScroll.sX!=="")
{nScrollHead.style.width=_fnStringToCss(oSettings.oScroll.sX);nScrollBody.style.width=_fnStringToCss(oSettings.oScroll.sX);if(nTfoot!==null)
{nScrollFoot.style.width=_fnStringToCss(oSettings.oScroll.sX);}
$(nScrollBody).scroll(function(e){nScrollHead.scrollLeft=this.scrollLeft;if(nTfoot!==null)
{nScrollFoot.scrollLeft=this.scrollLeft;}});}
if(oSettings.oScroll.sY!=="")
{nScrollBody.style.height=_fnStringToCss(oSettings.oScroll.sY);}
oSettings.aoDrawCallback.push({"fn":_fnScrollDraw,"sName":"scrolling"});if(oSettings.oScroll.bInfinite)
{$(nScrollBody).scroll(function(){if(!oSettings.bDrawing&&$(this).scrollTop()!==0)
{if($(this).scrollTop()+$(this).height()>$(oSettings.nTable).height()-oSettings.oScroll.iLoadGap)
{if(oSettings.fnDisplayEnd()<oSettings.fnRecordsDisplay())
{_fnPageChange(oSettings,'next');_fnCalculateEnd(oSettings);_fnDraw(oSettings);}}}});}
oSettings.nScrollHead=nScrollHead;oSettings.nScrollFoot=nScrollFoot;return nScroller;}
function _fnScrollDraw(o)
{var
nScrollHeadInner=o.nScrollHead.getElementsByTagName('div')[0],nScrollHeadTable=nScrollHeadInner.getElementsByTagName('table')[0],nScrollBody=o.nTable.parentNode,i,iLen,j,jLen,anHeadToSize,anHeadSizers,anFootSizers,anFootToSize,oStyle,iVis,nTheadSize,nTfootSize,iWidth,aApplied=[],aAppliedFooter=[],iSanityWidth,nScrollFootInner=(o.nTFoot!==null)?o.nScrollFoot.getElementsByTagName('div')[0]:null,nScrollFootTable=(o.nTFoot!==null)?nScrollFootInner.getElementsByTagName('table')[0]:null,ie67=o.oBrowser.bScrollOversize,zeroOut=function(nSizer){oStyle=nSizer.style;oStyle.paddingTop="0";oStyle.paddingBottom="0";oStyle.borderTopWidth="0";oStyle.borderBottomWidth="0";oStyle.height=0;};$(o.nTable).children('thead, tfoot').remove();nTheadSize=$(o.nTHead).clone()[0];o.nTable.insertBefore(nTheadSize,o.nTable.childNodes[0]);anHeadToSize=o.nTHead.getElementsByTagName('tr');anHeadSizers=nTheadSize.getElementsByTagName('tr');if(o.nTFoot!==null)
{nTfootSize=$(o.nTFoot).clone()[0];o.nTable.insertBefore(nTfootSize,o.nTable.childNodes[1]);anFootToSize=o.nTFoot.getElementsByTagName('tr');anFootSizers=nTfootSize.getElementsByTagName('tr');}
if(o.oScroll.sX==="")
{nScrollBody.style.width='100%';nScrollHeadInner.parentNode.style.width='100%';}
var nThs=_fnGetUniqueThs(o,nTheadSize);for(i=0,iLen=nThs.length;i<iLen;i++)
{iVis=_fnVisibleToColumnIndex(o,i);nThs[i].style.width=o.aoColumns[iVis].sWidth;}
if(o.nTFoot!==null)
{_fnApplyToChildren(function(n){n.style.width="";},anFootSizers);}
if(o.oScroll.bCollapse&&o.oScroll.sY!=="")
{nScrollBody.style.height=(nScrollBody.offsetHeight+o.nTHead.offsetHeight)+"px";}
iSanityWidth=$(o.nTable).outerWidth();if(o.oScroll.sX==="")
{o.nTable.style.width="100%";if(ie67&&($('tbody',nScrollBody).height()>nScrollBody.offsetHeight||$(nScrollBody).css('overflow-y')=="scroll"))
{o.nTable.style.width=_fnStringToCss($(o.nTable).outerWidth()-o.oScroll.iBarWidth);}}
else
{if(o.oScroll.sXInner!=="")
{o.nTable.style.width=_fnStringToCss(o.oScroll.sXInner);}
else if(iSanityWidth==$(nScrollBody).width()&&$(nScrollBody).height()<$(o.nTable).height())
{o.nTable.style.width=_fnStringToCss(iSanityWidth-o.oScroll.iBarWidth);if($(o.nTable).outerWidth()>iSanityWidth-o.oScroll.iBarWidth)
{o.nTable.style.width=_fnStringToCss(iSanityWidth);}}
else
{o.nTable.style.width=_fnStringToCss(iSanityWidth);}}
iSanityWidth=$(o.nTable).outerWidth();_fnApplyToChildren(zeroOut,anHeadSizers);_fnApplyToChildren(function(nSizer){aApplied.push(_fnStringToCss($(nSizer).width()));},anHeadSizers);_fnApplyToChildren(function(nToSize,i){nToSize.style.width=aApplied[i];},anHeadToSize);$(anHeadSizers).height(0);if(o.nTFoot!==null)
{_fnApplyToChildren(zeroOut,anFootSizers);_fnApplyToChildren(function(nSizer){aAppliedFooter.push(_fnStringToCss($(nSizer).width()));},anFootSizers);_fnApplyToChildren(function(nToSize,i){nToSize.style.width=aAppliedFooter[i];},anFootToSize);$(anFootSizers).height(0);}
_fnApplyToChildren(function(nSizer,i){nSizer.innerHTML="";nSizer.style.width=aApplied[i];},anHeadSizers);if(o.nTFoot!==null)
{_fnApplyToChildren(function(nSizer,i){nSizer.innerHTML="";nSizer.style.width=aAppliedFooter[i];},anFootSizers);}
if($(o.nTable).outerWidth()<iSanityWidth)
{var iCorrection=((nScrollBody.scrollHeight>nScrollBody.offsetHeight||$(nScrollBody).css('overflow-y')=="scroll"))?iSanityWidth+o.oScroll.iBarWidth:iSanityWidth;if(ie67&&(nScrollBody.scrollHeight>nScrollBody.offsetHeight||$(nScrollBody).css('overflow-y')=="scroll"))
{o.nTable.style.width=_fnStringToCss(iCorrection-o.oScroll.iBarWidth);}
nScrollBody.style.width=_fnStringToCss(iCorrection);o.nScrollHead.style.width=_fnStringToCss(iCorrection);if(o.nTFoot!==null)
{o.nScrollFoot.style.width=_fnStringToCss(iCorrection);}
if(o.oScroll.sX==="")
{_fnLog(o,1,"The table cannot fit into the current element which will cause column"+" misalignment. The table has been drawn at its minimum possible width.");}
else if(o.oScroll.sXInner!=="")
{_fnLog(o,1,"The table cannot fit into the current element which will cause column"+" misalignment. Increase the sScrollXInner value or remove it to allow automatic"+" calculation");}}
else
{nScrollBody.style.width=_fnStringToCss('100%');o.nScrollHead.style.width=_fnStringToCss('100%');if(o.nTFoot!==null)
{o.nScrollFoot.style.width=_fnStringToCss('100%');}}
if(o.oScroll.sY==="")
{if(ie67)
{nScrollBody.style.height=_fnStringToCss(o.nTable.offsetHeight+o.oScroll.iBarWidth);}}
if(o.oScroll.sY!==""&&o.oScroll.bCollapse)
{nScrollBody.style.height=_fnStringToCss(o.oScroll.sY);var iExtra=(o.oScroll.sX!==""&&o.nTable.offsetWidth>nScrollBody.offsetWidth)?o.oScroll.iBarWidth:0;if(o.nTable.offsetHeight<nScrollBody.offsetHeight)
{nScrollBody.style.height=_fnStringToCss(o.nTable.offsetHeight+iExtra);}}
var iOuterWidth=$(o.nTable).outerWidth();nScrollHeadTable.style.width=_fnStringToCss(iOuterWidth);nScrollHeadInner.style.width=_fnStringToCss(iOuterWidth);var bScrolling=$(o.nTable).height()>nScrollBody.clientHeight||$(nScrollBody).css('overflow-y')=="scroll";nScrollHeadInner.style.paddingRight=bScrolling?o.oScroll.iBarWidth+"px":"0px";if(o.nTFoot!==null)
{nScrollFootTable.style.width=_fnStringToCss(iOuterWidth);nScrollFootInner.style.width=_fnStringToCss(iOuterWidth);nScrollFootInner.style.paddingRight=bScrolling?o.oScroll.iBarWidth+"px":"0px";}
$(nScrollBody).scroll();if(o.bSorted||o.bFiltered)
{nScrollBody.scrollTop=0;}}
function _fnApplyToChildren(fn,an1,an2)
{var index=0,i=0,iLen=an1.length;var nNode1,nNode2;while(i<iLen)
{nNode1=an1[i].firstChild;nNode2=an2?an2[i].firstChild:null;while(nNode1)
{if(nNode1.nodeType===1)
{if(an2)
{fn(nNode1,nNode2,index);}
else
{fn(nNode1,index);}
index++;}
nNode1=nNode1.nextSibling;nNode2=an2?nNode2.nextSibling:null;}
i++;}}
function _fnConvertToWidth(sWidth,nParent)
{if(!sWidth||sWidth===null||sWidth==='')
{return 0;}
if(!nParent)
{nParent=document.body;}
var iWidth;var nTmp=document.createElement("div");nTmp.style.width=_fnStringToCss(sWidth);nParent.appendChild(nTmp);iWidth=nTmp.offsetWidth;nParent.removeChild(nTmp);return(iWidth);}
function _fnCalculateColumnWidths(oSettings)
{var iTableWidth=oSettings.nTable.offsetWidth;var iUserInputs=0;var iTmpWidth;var iVisibleColumns=0;var iColums=oSettings.aoColumns.length;var i,iIndex,iCorrector,iWidth;var oHeaders=$('th',oSettings.nTHead);var widthAttr=oSettings.nTable.getAttribute('width');var nWrapper=oSettings.nTable.parentNode;for(i=0;i<iColums;i++)
{if(oSettings.aoColumns[i].bVisible)
{iVisibleColumns++;if(oSettings.aoColumns[i].sWidth!==null)
{iTmpWidth=_fnConvertToWidth(oSettings.aoColumns[i].sWidthOrig,nWrapper);if(iTmpWidth!==null)
{oSettings.aoColumns[i].sWidth=_fnStringToCss(iTmpWidth);}
iUserInputs++;}}}
if(iColums==oHeaders.length&&iUserInputs===0&&iVisibleColumns==iColums&&oSettings.oScroll.sX===""&&oSettings.oScroll.sY==="")
{for(i=0;i<oSettings.aoColumns.length;i++)
{iTmpWidth=$(oHeaders[i]).width();if(iTmpWidth!==null)
{oSettings.aoColumns[i].sWidth=_fnStringToCss(iTmpWidth);}}}
else
{var
nCalcTmp=oSettings.nTable.cloneNode(false),nTheadClone=oSettings.nTHead.cloneNode(true),nBody=document.createElement('tbody'),nTr=document.createElement('tr'),nDivSizing;nCalcTmp.removeAttribute("id");nCalcTmp.appendChild(nTheadClone);if(oSettings.nTFoot!==null)
{nCalcTmp.appendChild(oSettings.nTFoot.cloneNode(true));_fnApplyToChildren(function(n){n.style.width="";},nCalcTmp.getElementsByTagName('tr'));}
nCalcTmp.appendChild(nBody);nBody.appendChild(nTr);var jqColSizing=$('thead th',nCalcTmp);if(jqColSizing.length===0)
{jqColSizing=$('tbody tr:eq(0)>td',nCalcTmp);}
var nThs=_fnGetUniqueThs(oSettings,nTheadClone);iCorrector=0;for(i=0;i<iColums;i++)
{var oColumn=oSettings.aoColumns[i];if(oColumn.bVisible&&oColumn.sWidthOrig!==null&&oColumn.sWidthOrig!=="")
{nThs[i-iCorrector].style.width=_fnStringToCss(oColumn.sWidthOrig);}
else if(oColumn.bVisible)
{nThs[i-iCorrector].style.width="";}
else
{iCorrector++;}}
for(i=0;i<iColums;i++)
{if(oSettings.aoColumns[i].bVisible)
{var nTd=_fnGetWidestNode(oSettings,i);if(nTd!==null)
{nTd=nTd.cloneNode(true);if(oSettings.aoColumns[i].sContentPadding!=="")
{nTd.innerHTML+=oSettings.aoColumns[i].sContentPadding;}
nTr.appendChild(nTd);}}}
nWrapper.appendChild(nCalcTmp);if(oSettings.oScroll.sX!==""&&oSettings.oScroll.sXInner!=="")
{nCalcTmp.style.width=_fnStringToCss(oSettings.oScroll.sXInner);}
else if(oSettings.oScroll.sX!=="")
{nCalcTmp.style.width="";if($(nCalcTmp).width()<nWrapper.offsetWidth)
{nCalcTmp.style.width=_fnStringToCss(nWrapper.offsetWidth);}}
else if(oSettings.oScroll.sY!=="")
{nCalcTmp.style.width=_fnStringToCss(nWrapper.offsetWidth);}
else if(widthAttr)
{nCalcTmp.style.width=_fnStringToCss(widthAttr);}
nCalcTmp.style.visibility="hidden";_fnScrollingWidthAdjust(oSettings,nCalcTmp);var oNodes=$("tbody tr:eq(0)",nCalcTmp).children();if(oNodes.length===0)
{oNodes=_fnGetUniqueThs(oSettings,$('thead',nCalcTmp)[0]);}
if(oSettings.oScroll.sX!=="")
{var iTotal=0;iCorrector=0;for(i=0;i<oSettings.aoColumns.length;i++)
{if(oSettings.aoColumns[i].bVisible)
{if(oSettings.aoColumns[i].sWidthOrig===null)
{iTotal+=$(oNodes[iCorrector]).outerWidth();}
else
{iTotal+=parseInt(oSettings.aoColumns[i].sWidth.replace('px',''),10)+
($(oNodes[iCorrector]).outerWidth()-$(oNodes[iCorrector]).width());}
iCorrector++;}}
nCalcTmp.style.width=_fnStringToCss(iTotal);oSettings.nTable.style.width=_fnStringToCss(iTotal);}
iCorrector=0;for(i=0;i<oSettings.aoColumns.length;i++)
{if(oSettings.aoColumns[i].bVisible)
{iWidth=$(oNodes[iCorrector]).width();if(iWidth!==null&&iWidth>0)
{oSettings.aoColumns[i].sWidth=_fnStringToCss(iWidth);}
iCorrector++;}}
var cssWidth=$(nCalcTmp).css('width');oSettings.nTable.style.width=(cssWidth.indexOf('%')!==-1)?cssWidth:_fnStringToCss($(nCalcTmp).outerWidth());nCalcTmp.parentNode.removeChild(nCalcTmp);}
if(widthAttr)
{oSettings.nTable.style.width=_fnStringToCss(widthAttr);}}
function _fnScrollingWidthAdjust(oSettings,n)
{if(oSettings.oScroll.sX===""&&oSettings.oScroll.sY!=="")
{var iOrigWidth=$(n).width();n.style.width=_fnStringToCss($(n).outerWidth()-oSettings.oScroll.iBarWidth);}
else if(oSettings.oScroll.sX!=="")
{n.style.width=_fnStringToCss($(n).outerWidth());}}
function _fnGetWidestNode(oSettings,iCol)
{var iMaxIndex=_fnGetMaxLenString(oSettings,iCol);if(iMaxIndex<0)
{return null;}
if(oSettings.aoData[iMaxIndex].nTr===null)
{var n=document.createElement('td');n.innerHTML=_fnGetCellData(oSettings,iMaxIndex,iCol,'');return n;}
return _fnGetTdNodes(oSettings,iMaxIndex)[iCol];}
function _fnGetMaxLenString(oSettings,iCol)
{var iMax=-1;var iMaxIndex=-1;for(var i=0;i<oSettings.aoData.length;i++)
{var s=_fnGetCellData(oSettings,i,iCol,'display')+"";s=s.replace(/<.*?>/g,"");if(s.length>iMax)
{iMax=s.length;iMaxIndex=i;}}
return iMaxIndex;}
function _fnStringToCss(s)
{if(s===null)
{return"0px";}
if(typeof s=='number')
{if(s<0)
{return"0px";}
return s+"px";}
var c=s.charCodeAt(s.length-1);if(c<0x30||c>0x39)
{return s;}
return s+"px";}
function _fnScrollBarWidth()
{var inner=document.createElement('p');var style=inner.style;style.width="100%";style.height="200px";style.padding="0px";var outer=document.createElement('div');style=outer.style;style.position="absolute";style.top="0px";style.left="0px";style.visibility="hidden";style.width="200px";style.height="150px";style.padding="0px";style.overflow="hidden";outer.appendChild(inner);document.body.appendChild(outer);var w1=inner.offsetWidth;outer.style.overflow='scroll';var w2=inner.offsetWidth;if(w1==w2)
{w2=outer.clientWidth;}
document.body.removeChild(outer);return(w1-w2);}
function _fnSort(oSettings,bApplyClasses)
{var
i,iLen,j,jLen,k,kLen,sDataType,nTh,aaSort=[],aiOrig=[],oSort=DataTable.ext.oSort,aoData=oSettings.aoData,aoColumns=oSettings.aoColumns,oAria=oSettings.oLanguage.oAria;if(!oSettings.oFeatures.bServerSide&&(oSettings.aaSorting.length!==0||oSettings.aaSortingFixed!==null))
{aaSort=(oSettings.aaSortingFixed!==null)?oSettings.aaSortingFixed.concat(oSettings.aaSorting):oSettings.aaSorting.slice();for(i=0;i<aaSort.length;i++)
{var iColumn=aaSort[i][0];var iVisColumn=_fnColumnIndexToVisible(oSettings,iColumn);sDataType=oSettings.aoColumns[iColumn].sSortDataType;if(DataTable.ext.afnSortData[sDataType])
{var aData=DataTable.ext.afnSortData[sDataType].call(oSettings.oInstance,oSettings,iColumn,iVisColumn);if(aData.length===aoData.length)
{for(j=0,jLen=aoData.length;j<jLen;j++)
{_fnSetCellData(oSettings,j,iColumn,aData[j]);}}
else
{_fnLog(oSettings,0,"Returned data sort array (col "+iColumn+") is the wrong length");}}}
for(i=0,iLen=oSettings.aiDisplayMaster.length;i<iLen;i++)
{aiOrig[oSettings.aiDisplayMaster[i]]=i;}
var iSortLen=aaSort.length;var fnSortFormat,aDataSort;for(i=0,iLen=aoData.length;i<iLen;i++)
{for(j=0;j<iSortLen;j++)
{aDataSort=aoColumns[aaSort[j][0]].aDataSort;for(k=0,kLen=aDataSort.length;k<kLen;k++)
{sDataType=aoColumns[aDataSort[k]].sType;fnSortFormat=oSort[(sDataType?sDataType:'string')+"-pre"];aoData[i]._aSortData[aDataSort[k]]=fnSortFormat?fnSortFormat(_fnGetCellData(oSettings,i,aDataSort[k],'sort')):_fnGetCellData(oSettings,i,aDataSort[k],'sort');}}}
oSettings.aiDisplayMaster.sort(function(a,b){var k,l,lLen,iTest,aDataSort,sDataType;for(k=0;k<iSortLen;k++)
{aDataSort=aoColumns[aaSort[k][0]].aDataSort;for(l=0,lLen=aDataSort.length;l<lLen;l++)
{sDataType=aoColumns[aDataSort[l]].sType;iTest=oSort[(sDataType?sDataType:'string')+"-"+aaSort[k][1]](aoData[a]._aSortData[aDataSort[l]],aoData[b]._aSortData[aDataSort[l]]);if(iTest!==0)
{return iTest;}}}
return oSort['numeric-asc'](aiOrig[a],aiOrig[b]);});}
if((bApplyClasses===undefined||bApplyClasses)&&!oSettings.oFeatures.bDeferRender)
{_fnSortingClasses(oSettings);}
for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{var sTitle=aoColumns[i].sTitle.replace(/<.*?>/g,"");nTh=aoColumns[i].nTh;nTh.removeAttribute('aria-sort');nTh.removeAttribute('aria-label');if(aoColumns[i].bSortable)
{if(aaSort.length>0&&aaSort[0][0]==i)
{nTh.setAttribute('aria-sort',aaSort[0][1]=="asc"?"ascending":"descending");var nextSort=(aoColumns[i].asSorting[aaSort[0][2]+1])?aoColumns[i].asSorting[aaSort[0][2]+1]:aoColumns[i].asSorting[0];nTh.setAttribute('aria-label',sTitle+
(nextSort=="asc"?oAria.sSortAscending:oAria.sSortDescending));}
else
{nTh.setAttribute('aria-label',sTitle+
(aoColumns[i].asSorting[0]=="asc"?oAria.sSortAscending:oAria.sSortDescending));}}
else
{nTh.setAttribute('aria-label',sTitle);}}
oSettings.bSorted=true;$(oSettings.oInstance).trigger('sort',oSettings);if(oSettings.oFeatures.bFilter)
{_fnFilterComplete(oSettings,oSettings.oPreviousSearch,1);}
else
{oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();oSettings._iDisplayStart=0;_fnCalculateEnd(oSettings);_fnDraw(oSettings);}}
function _fnSortAttachListener(oSettings,nNode,iDataIndex,fnCallback)
{_fnBindAction(nNode,{},function(e){if(oSettings.aoColumns[iDataIndex].bSortable===false)
{return;}
var fnInnerSorting=function(){var iColumn,iNextSort;if(e.shiftKey)
{var bFound=false;for(var i=0;i<oSettings.aaSorting.length;i++)
{if(oSettings.aaSorting[i][0]==iDataIndex)
{bFound=true;iColumn=oSettings.aaSorting[i][0];iNextSort=oSettings.aaSorting[i][2]+1;if(!oSettings.aoColumns[iColumn].asSorting[iNextSort])
{oSettings.aaSorting.splice(i,1);}
else
{oSettings.aaSorting[i][1]=oSettings.aoColumns[iColumn].asSorting[iNextSort];oSettings.aaSorting[i][2]=iNextSort;}
break;}}
if(bFound===false)
{oSettings.aaSorting.push([iDataIndex,oSettings.aoColumns[iDataIndex].asSorting[0],0]);}}
else
{if(oSettings.aaSorting.length==1&&oSettings.aaSorting[0][0]==iDataIndex)
{iColumn=oSettings.aaSorting[0][0];iNextSort=oSettings.aaSorting[0][2]+1;if(!oSettings.aoColumns[iColumn].asSorting[iNextSort])
{iNextSort=0;}
oSettings.aaSorting[0][1]=oSettings.aoColumns[iColumn].asSorting[iNextSort];oSettings.aaSorting[0][2]=iNextSort;}
else
{oSettings.aaSorting.splice(0,oSettings.aaSorting.length);oSettings.aaSorting.push([iDataIndex,oSettings.aoColumns[iDataIndex].asSorting[0],0]);}}
_fnSort(oSettings);};if(!oSettings.oFeatures.bProcessing)
{fnInnerSorting();}
else
{_fnProcessingDisplay(oSettings,true);setTimeout(function(){fnInnerSorting();if(!oSettings.oFeatures.bServerSide)
{_fnProcessingDisplay(oSettings,false);}},0);}
if(typeof fnCallback=='function')
{fnCallback(oSettings);}});}
function _fnSortingClasses(oSettings)
{var i,iLen,j,jLen,iFound;var aaSort,sClass;var iColumns=oSettings.aoColumns.length;var oClasses=oSettings.oClasses;for(i=0;i<iColumns;i++)
{if(oSettings.aoColumns[i].bSortable)
{$(oSettings.aoColumns[i].nTh).removeClass(oClasses.sSortAsc+" "+oClasses.sSortDesc+" "+oSettings.aoColumns[i].sSortingClass);}}
if(oSettings.aaSortingFixed!==null)
{aaSort=oSettings.aaSortingFixed.concat(oSettings.aaSorting);}
else
{aaSort=oSettings.aaSorting.slice();}
for(i=0;i<oSettings.aoColumns.length;i++)
{if(oSettings.aoColumns[i].bSortable)
{sClass=oSettings.aoColumns[i].sSortingClass;iFound=-1;for(j=0;j<aaSort.length;j++)
{if(aaSort[j][0]==i)
{sClass=(aaSort[j][1]=="asc")?oClasses.sSortAsc:oClasses.sSortDesc;iFound=j;break;}}
$(oSettings.aoColumns[i].nTh).addClass(sClass);if(oSettings.bJUI)
{var jqSpan=$("span."+oClasses.sSortIcon,oSettings.aoColumns[i].nTh);jqSpan.removeClass(oClasses.sSortJUIAsc+" "+oClasses.sSortJUIDesc+" "+
oClasses.sSortJUI+" "+oClasses.sSortJUIAscAllowed+" "+oClasses.sSortJUIDescAllowed);var sSpanClass;if(iFound==-1)
{sSpanClass=oSettings.aoColumns[i].sSortingClassJUI;}
else if(aaSort[iFound][1]=="asc")
{sSpanClass=oClasses.sSortJUIAsc;}
else
{sSpanClass=oClasses.sSortJUIDesc;}
jqSpan.addClass(sSpanClass);}}
else
{$(oSettings.aoColumns[i].nTh).addClass(oSettings.aoColumns[i].sSortingClass);}}
sClass=oClasses.sSortColumn;if(oSettings.oFeatures.bSort&&oSettings.oFeatures.bSortClasses)
{var nTds=_fnGetTdNodes(oSettings);var iClass,iTargetCol;var asClasses=[];for(i=0;i<iColumns;i++)
{asClasses.push("");}
for(i=0,iClass=1;i<aaSort.length;i++)
{iTargetCol=parseInt(aaSort[i][0],10);asClasses[iTargetCol]=sClass+iClass;if(iClass<3)
{iClass++;}}
var reClass=new RegExp(sClass+"[123]");var sTmpClass,sCurrentClass,sNewClass;for(i=0,iLen=nTds.length;i<iLen;i++)
{iTargetCol=i%iColumns;sCurrentClass=nTds[i].className;sNewClass=asClasses[iTargetCol];sTmpClass=sCurrentClass.replace(reClass,sNewClass);if(sTmpClass!=sCurrentClass)
{nTds[i].className=$.trim(sTmpClass);}
else if(sNewClass.length>0&&sCurrentClass.indexOf(sNewClass)==-1)
{nTds[i].className=sCurrentClass+" "+sNewClass;}}}}
function _fnSaveState(oSettings)
{if(!oSettings.oFeatures.bStateSave||oSettings.bDestroying)
{return;}
var i,iLen,bInfinite=oSettings.oScroll.bInfinite;var oState={"iCreate":new Date().getTime(),"iStart":(bInfinite?0:oSettings._iDisplayStart),"iEnd":(bInfinite?oSettings._iDisplayLength:oSettings._iDisplayEnd),"iLength":oSettings._iDisplayLength,"aaSorting":$.extend(true,[],oSettings.aaSorting),"oSearch":$.extend(true,{},oSettings.oPreviousSearch),"aoSearchCols":$.extend(true,[],oSettings.aoPreSearchCols),"abVisCols":[]};for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{oState.abVisCols.push(oSettings.aoColumns[i].bVisible);}
_fnCallbackFire(oSettings,"aoStateSaveParams",'stateSaveParams',[oSettings,oState]);oSettings.fnStateSave.call(oSettings.oInstance,oSettings,oState);}
function _fnLoadState(oSettings,oInit)
{if(!oSettings.oFeatures.bStateSave)
{return;}
var oData=oSettings.fnStateLoad.call(oSettings.oInstance,oSettings);if(!oData)
{return;}
var abStateLoad=_fnCallbackFire(oSettings,'aoStateLoadParams','stateLoadParams',[oSettings,oData]);if($.inArray(false,abStateLoad)!==-1)
{return;}
oSettings.oLoadedState=$.extend(true,{},oData);oSettings._iDisplayStart=oData.iStart;oSettings.iInitDisplayStart=oData.iStart;oSettings._iDisplayEnd=oData.iEnd;oSettings._iDisplayLength=oData.iLength;oSettings.aaSorting=oData.aaSorting.slice();oSettings.saved_aaSorting=oData.aaSorting.slice();$.extend(oSettings.oPreviousSearch,oData.oSearch);$.extend(true,oSettings.aoPreSearchCols,oData.aoSearchCols);oInit.saved_aoColumns=[];for(var i=0;i<oData.abVisCols.length;i++)
{oInit.saved_aoColumns[i]={};oInit.saved_aoColumns[i].bVisible=oData.abVisCols[i];}
_fnCallbackFire(oSettings,'aoStateLoaded','stateLoaded',[oSettings,oData]);}
function _fnCreateCookie(sName,sValue,iSecs,sBaseName,fnCallback)
{var date=new Date();date.setTime(date.getTime()+(iSecs*1000));var aParts=window.location.pathname.split('/');var sNameFile=sName+'_'+aParts.pop().replace(/[\/:]/g,"").toLowerCase();var sFullCookie,oData;if(fnCallback!==null)
{oData=(typeof $.parseJSON==='function')?$.parseJSON(sValue):eval('('+sValue+')');sFullCookie=fnCallback(sNameFile,oData,date.toGMTString(),aParts.join('/')+"/");}
else
{sFullCookie=sNameFile+"="+encodeURIComponent(sValue)+"; expires="+date.toGMTString()+"; path="+aParts.join('/')+"/";}
var
aCookies=document.cookie.split(';'),iNewCookieLen=sFullCookie.split(';')[0].length,aOldCookies=[];if(iNewCookieLen+document.cookie.length+10>4096)
{for(var i=0,iLen=aCookies.length;i<iLen;i++)
{if(aCookies[i].indexOf(sBaseName)!=-1)
{var aSplitCookie=aCookies[i].split('=');try{oData=eval('('+decodeURIComponent(aSplitCookie[1])+')');if(oData&&oData.iCreate)
{aOldCookies.push({"name":aSplitCookie[0],"time":oData.iCreate});}}
catch(e){}}}
aOldCookies.sort(function(a,b){return b.time-a.time;});while(iNewCookieLen+document.cookie.length+10>4096){if(aOldCookies.length===0){return;}
var old=aOldCookies.pop();document.cookie=old.name+"=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path="+
aParts.join('/')+"/";}}
document.cookie=sFullCookie;}
function _fnReadCookie(sName)
{var
aParts=window.location.pathname.split('/'),sNameEQ=sName+'_'+aParts[aParts.length-1].replace(/[\/:]/g,"").toLowerCase()+'=',sCookieContents=document.cookie.split(';');for(var i=0;i<sCookieContents.length;i++)
{var c=sCookieContents[i];while(c.charAt(0)==' ')
{c=c.substring(1,c.length);}
if(c.indexOf(sNameEQ)===0)
{return decodeURIComponent(c.substring(sNameEQ.length,c.length));}}
return null;}
function _fnSettingsFromNode(nTable)
{for(var i=0;i<DataTable.settings.length;i++)
{if(DataTable.settings[i].nTable===nTable)
{return DataTable.settings[i];}}
return null;}
function _fnGetTrNodes(oSettings)
{var aNodes=[];var aoData=oSettings.aoData;for(var i=0,iLen=aoData.length;i<iLen;i++)
{if(aoData[i].nTr!==null)
{aNodes.push(aoData[i].nTr);}}
return aNodes;}
function _fnGetTdNodes(oSettings,iIndividualRow)
{var anReturn=[];var iCorrector;var anTds,nTd;var iRow,iRows=oSettings.aoData.length,iColumn,iColumns,oData,sNodeName,iStart=0,iEnd=iRows;if(iIndividualRow!==undefined)
{iStart=iIndividualRow;iEnd=iIndividualRow+1;}
for(iRow=iStart;iRow<iEnd;iRow++)
{oData=oSettings.aoData[iRow];if(oData.nTr!==null)
{anTds=[];nTd=oData.nTr.firstChild;while(nTd)
{sNodeName=nTd.nodeName.toLowerCase();if(sNodeName=='td'||sNodeName=='th')
{anTds.push(nTd);}
nTd=nTd.nextSibling;}
iCorrector=0;for(iColumn=0,iColumns=oSettings.aoColumns.length;iColumn<iColumns;iColumn++)
{if(oSettings.aoColumns[iColumn].bVisible)
{anReturn.push(anTds[iColumn-iCorrector]);}
else
{anReturn.push(oData._anHidden[iColumn]);iCorrector++;}}}}
return anReturn;}
function _fnLog(oSettings,iLevel,sMesg)
{var sAlert=(oSettings===null)?"DataTables warning: "+sMesg:"DataTables warning (table id = '"+oSettings.sTableId+"'): "+sMesg;if(iLevel===0)
{if(DataTable.ext.sErrMode=='alert')
{alert(sAlert);}
else
{throw new Error(sAlert);}
return;}
else if(window.console&&console.log)
{console.log(sAlert);}}
function _fnMap(oRet,oSrc,sName,sMappedName)
{if(sMappedName===undefined)
{sMappedName=sName;}
if(oSrc[sName]!==undefined)
{oRet[sMappedName]=oSrc[sName];}}
function _fnExtend(oOut,oExtender)
{var val;for(var prop in oExtender)
{if(oExtender.hasOwnProperty(prop))
{val=oExtender[prop];if(typeof oInit[prop]==='object'&&val!==null&&$.isArray(val)===false)
{$.extend(true,oOut[prop],val);}
else
{oOut[prop]=val;}}}
return oOut;}
function _fnBindAction(n,oData,fn)
{$(n).bind('click.DT',oData,function(e){n.blur();fn(e);}).bind('keypress.DT',oData,function(e){if(e.which===13){fn(e);}}).bind('selectstart.DT',function(){return false;});}
function _fnCallbackReg(oSettings,sStore,fn,sName)
{if(fn)
{oSettings[sStore].push({"fn":fn,"sName":sName});}}
function _fnCallbackFire(oSettings,sStore,sTrigger,aArgs)
{var aoStore=oSettings[sStore];var aRet=[];for(var i=aoStore.length-1;i>=0;i--)
{aRet.push(aoStore[i].fn.apply(oSettings.oInstance,aArgs));}
if(sTrigger!==null)
{$(oSettings.oInstance).trigger(sTrigger,aArgs);}
return aRet;}
var _fnJsonString=(window.JSON)?JSON.stringify:function(o)
{var sType=typeof o;if(sType!=="object"||o===null)
{if(sType==="string")
{o='"'+o+'"';}
return o+"";}
var
sProp,mValue,json=[],bArr=$.isArray(o);for(sProp in o)
{mValue=o[sProp];sType=typeof mValue;if(sType==="string")
{mValue='"'+mValue+'"';}
else if(sType==="object"&&mValue!==null)
{mValue=_fnJsonString(mValue);}
json.push((bArr?"":'"'+sProp+'":')+mValue);}
return(bArr?"[":"{")+json+(bArr?"]":"}");};function _fnBrowserDetect(oSettings)
{var n=$('<div style="position:absolute; top:0; left:0; height:1px; width:1px; overflow:hidden">'+'<div style="position:absolute; top:1px; left:1px; width:100px; overflow:scroll;">'+'<div id="DT_BrowserTest" style="width:100%; height:10px;"></div>'+'</div>'+'</div>')[0];document.body.appendChild(n);oSettings.oBrowser.bScrollOversize=$('#DT_BrowserTest',n)[0].offsetWidth===100?true:false;document.body.removeChild(n);}
this.$=function(sSelector,oOpts)
{var i,iLen,a=[],tr;var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);var aoData=oSettings.aoData;var aiDisplay=oSettings.aiDisplay;var aiDisplayMaster=oSettings.aiDisplayMaster;if(!oOpts)
{oOpts={};}
oOpts=$.extend({},{"filter":"none","order":"current","page":"all"},oOpts);if(oOpts.page=='current')
{for(i=oSettings._iDisplayStart,iLen=oSettings.fnDisplayEnd();i<iLen;i++)
{tr=aoData[aiDisplay[i]].nTr;if(tr)
{a.push(tr);}}}
else if(oOpts.order=="current"&&oOpts.filter=="none")
{for(i=0,iLen=aiDisplayMaster.length;i<iLen;i++)
{tr=aoData[aiDisplayMaster[i]].nTr;if(tr)
{a.push(tr);}}}
else if(oOpts.order=="current"&&oOpts.filter=="applied")
{for(i=0,iLen=aiDisplay.length;i<iLen;i++)
{tr=aoData[aiDisplay[i]].nTr;if(tr)
{a.push(tr);}}}
else if(oOpts.order=="original"&&oOpts.filter=="none")
{for(i=0,iLen=aoData.length;i<iLen;i++)
{tr=aoData[i].nTr;if(tr)
{a.push(tr);}}}
else if(oOpts.order=="original"&&oOpts.filter=="applied")
{for(i=0,iLen=aoData.length;i<iLen;i++)
{tr=aoData[i].nTr;if($.inArray(i,aiDisplay)!==-1&&tr)
{a.push(tr);}}}
else
{_fnLog(oSettings,1,"Unknown selection options");}
var jqA=$(a);var jqTRs=jqA.filter(sSelector);var jqDescendants=jqA.find(sSelector);return $([].concat($.makeArray(jqTRs),$.makeArray(jqDescendants)));};this._=function(sSelector,oOpts)
{var aOut=[];var i,iLen,iIndex;var aTrs=this.$(sSelector,oOpts);for(i=0,iLen=aTrs.length;i<iLen;i++)
{aOut.push(this.fnGetData(aTrs[i]));}
return aOut;};this.fnAddData=function(mData,bRedraw)
{if(mData.length===0)
{return[];}
var aiReturn=[];var iTest;var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);if(typeof mData[0]==="object"&&mData[0]!==null)
{for(var i=0;i<mData.length;i++)
{iTest=_fnAddData(oSettings,mData[i]);if(iTest==-1)
{return aiReturn;}
aiReturn.push(iTest);}}
else
{iTest=_fnAddData(oSettings,mData);if(iTest==-1)
{return aiReturn;}
aiReturn.push(iTest);}
oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();if(bRedraw===undefined||bRedraw)
{_fnReDraw(oSettings);}
return aiReturn;};this.fnAdjustColumnSizing=function(bRedraw)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);_fnAdjustColumnSizing(oSettings);if(bRedraw===undefined||bRedraw)
{this.fnDraw(false);}
else if(oSettings.oScroll.sX!==""||oSettings.oScroll.sY!=="")
{this.oApi._fnScrollDraw(oSettings);}};this.fnClearTable=function(bRedraw)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);_fnClearTable(oSettings);if(bRedraw===undefined||bRedraw)
{_fnDraw(oSettings);}};this.fnClose=function(nTr)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);for(var i=0;i<oSettings.aoOpenRows.length;i++)
{if(oSettings.aoOpenRows[i].nParent==nTr)
{var nTrParent=oSettings.aoOpenRows[i].nTr.parentNode;if(nTrParent)
{nTrParent.removeChild(oSettings.aoOpenRows[i].nTr);}
oSettings.aoOpenRows.splice(i,1);return 0;}}
return 1;};this.fnDeleteRow=function(mTarget,fnCallBack,bRedraw)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);var i,iLen,iAODataIndex;iAODataIndex=(typeof mTarget==='object')?_fnNodeToDataIndex(oSettings,mTarget):mTarget;var oData=oSettings.aoData.splice(iAODataIndex,1);for(i=0,iLen=oSettings.aoData.length;i<iLen;i++)
{if(oSettings.aoData[i].nTr!==null)
{oSettings.aoData[i].nTr._DT_RowIndex=i;}}
var iDisplayIndex=$.inArray(iAODataIndex,oSettings.aiDisplay);oSettings.asDataSearch.splice(iDisplayIndex,1);_fnDeleteIndex(oSettings.aiDisplayMaster,iAODataIndex);_fnDeleteIndex(oSettings.aiDisplay,iAODataIndex);if(typeof fnCallBack==="function")
{fnCallBack.call(this,oSettings,oData);}
if(oSettings._iDisplayStart>=oSettings.fnRecordsDisplay())
{oSettings._iDisplayStart-=oSettings._iDisplayLength;if(oSettings._iDisplayStart<0)
{oSettings._iDisplayStart=0;}}
if(bRedraw===undefined||bRedraw)
{_fnCalculateEnd(oSettings);_fnDraw(oSettings);}
return oData;};this.fnDestroy=function(bRemove)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);var nOrig=oSettings.nTableWrapper.parentNode;var nBody=oSettings.nTBody;var i,iLen;bRemove=(bRemove===undefined)?false:bRemove;oSettings.bDestroying=true;_fnCallbackFire(oSettings,"aoDestroyCallback","destroy",[oSettings]);if(!bRemove)
{for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{if(oSettings.aoColumns[i].bVisible===false)
{this.fnSetColumnVis(i,true);}}}
$(oSettings.nTableWrapper).find('*').andSelf().unbind('.DT');$('tbody>tr>td.'+oSettings.oClasses.sRowEmpty,oSettings.nTable).parent().remove();if(oSettings.nTable!=oSettings.nTHead.parentNode)
{$(oSettings.nTable).children('thead').remove();oSettings.nTable.appendChild(oSettings.nTHead);}
if(oSettings.nTFoot&&oSettings.nTable!=oSettings.nTFoot.parentNode)
{$(oSettings.nTable).children('tfoot').remove();oSettings.nTable.appendChild(oSettings.nTFoot);}
oSettings.nTable.parentNode.removeChild(oSettings.nTable);$(oSettings.nTableWrapper).remove();oSettings.aaSorting=[];oSettings.aaSortingFixed=[];_fnSortingClasses(oSettings);$(_fnGetTrNodes(oSettings)).removeClass(oSettings.asStripeClasses.join(' '));$('th, td',oSettings.nTHead).removeClass([oSettings.oClasses.sSortable,oSettings.oClasses.sSortableAsc,oSettings.oClasses.sSortableDesc,oSettings.oClasses.sSortableNone].join(' '));if(oSettings.bJUI)
{$('th span.'+oSettings.oClasses.sSortIcon
+', td span.'+oSettings.oClasses.sSortIcon,oSettings.nTHead).remove();$('th, td',oSettings.nTHead).each(function(){var jqWrapper=$('div.'+oSettings.oClasses.sSortJUIWrapper,this);var kids=jqWrapper.contents();$(this).append(kids);jqWrapper.remove();});}
if(!bRemove&&oSettings.nTableReinsertBefore)
{nOrig.insertBefore(oSettings.nTable,oSettings.nTableReinsertBefore);}
else if(!bRemove)
{nOrig.appendChild(oSettings.nTable);}
for(i=0,iLen=oSettings.aoData.length;i<iLen;i++)
{if(oSettings.aoData[i].nTr!==null)
{nBody.appendChild(oSettings.aoData[i].nTr);}}
if(oSettings.oFeatures.bAutoWidth===true)
{oSettings.nTable.style.width=_fnStringToCss(oSettings.sDestroyWidth);}
iLen=oSettings.asDestroyStripes.length;if(iLen)
{var anRows=$(nBody).children('tr');for(i=0;i<iLen;i++)
{anRows.filter(':nth-child('+iLen+'n + '+i+')').addClass(oSettings.asDestroyStripes[i]);}}
for(i=0,iLen=DataTable.settings.length;i<iLen;i++)
{if(DataTable.settings[i]==oSettings)
{DataTable.settings.splice(i,1);}}
oSettings=null;oInit=null;};this.fnDraw=function(bComplete)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);if(bComplete===false)
{_fnCalculateEnd(oSettings);_fnDraw(oSettings);}
else
{_fnReDraw(oSettings);}};this.fnFilter=function(sInput,iColumn,bRegex,bSmart,bShowGlobal,bCaseInsensitive)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);if(!oSettings.oFeatures.bFilter)
{return;}
if(bRegex===undefined||bRegex===null)
{bRegex=false;}
if(bSmart===undefined||bSmart===null)
{bSmart=true;}
if(bShowGlobal===undefined||bShowGlobal===null)
{bShowGlobal=true;}
if(bCaseInsensitive===undefined||bCaseInsensitive===null)
{bCaseInsensitive=true;}
if(iColumn===undefined||iColumn===null)
{_fnFilterComplete(oSettings,{"sSearch":sInput+"","bRegex":bRegex,"bSmart":bSmart,"bCaseInsensitive":bCaseInsensitive},1);if(bShowGlobal&&oSettings.aanFeatures.f)
{var n=oSettings.aanFeatures.f;for(var i=0,iLen=n.length;i<iLen;i++)
{try{if(n[i]._DT_Input!=document.activeElement)
{$(n[i]._DT_Input).val(sInput);}}
catch(e){$(n[i]._DT_Input).val(sInput);}}}}
else
{$.extend(oSettings.aoPreSearchCols[iColumn],{"sSearch":sInput+"","bRegex":bRegex,"bSmart":bSmart,"bCaseInsensitive":bCaseInsensitive});_fnFilterComplete(oSettings,oSettings.oPreviousSearch,1);}};this.fnGetData=function(mRow,iCol)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);if(mRow!==undefined)
{var iRow=mRow;if(typeof mRow==='object')
{var sNode=mRow.nodeName.toLowerCase();if(sNode==="tr")
{iRow=_fnNodeToDataIndex(oSettings,mRow);}
else if(sNode==="td")
{iRow=_fnNodeToDataIndex(oSettings,mRow.parentNode);iCol=_fnNodeToColumnIndex(oSettings,iRow,mRow);}}
if(iCol!==undefined)
{return _fnGetCellData(oSettings,iRow,iCol,'');}
return(oSettings.aoData[iRow]!==undefined)?oSettings.aoData[iRow]._aData:null;}
return _fnGetDataMaster(oSettings);};this.fnGetNodes=function(iRow)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);if(iRow!==undefined){return(oSettings.aoData[iRow]!==undefined)?oSettings.aoData[iRow].nTr:null;}
return _fnGetTrNodes(oSettings);};this.fnGetPosition=function(nNode)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);var sNodeName=nNode.nodeName.toUpperCase();if(sNodeName=="TR")
{return _fnNodeToDataIndex(oSettings,nNode);}
else if(sNodeName=="TD"||sNodeName=="TH")
{var iDataIndex=_fnNodeToDataIndex(oSettings,nNode.parentNode);var iColumnIndex=_fnNodeToColumnIndex(oSettings,iDataIndex,nNode);return[iDataIndex,_fnColumnIndexToVisible(oSettings,iColumnIndex),iColumnIndex];}
return null;};this.fnIsOpen=function(nTr)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);var aoOpenRows=oSettings.aoOpenRows;for(var i=0;i<oSettings.aoOpenRows.length;i++)
{if(oSettings.aoOpenRows[i].nParent==nTr)
{return true;}}
return false;};this.fnOpen=function(nTr,mHtml,sClass)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);var nTableRows=_fnGetTrNodes(oSettings);if($.inArray(nTr,nTableRows)===-1)
{return;}
this.fnClose(nTr);var nNewRow=document.createElement("tr");var nNewCell=document.createElement("td");nNewRow.appendChild(nNewCell);nNewCell.className=sClass;nNewCell.colSpan=_fnVisbleColumns(oSettings);if(typeof mHtml==="string")
{nNewCell.innerHTML=mHtml;}
else
{$(nNewCell).html(mHtml);}
var nTrs=$('tr',oSettings.nTBody);if($.inArray(nTr,nTrs)!=-1)
{$(nNewRow).insertAfter(nTr);}
oSettings.aoOpenRows.push({"nTr":nNewRow,"nParent":nTr});return nNewRow;};this.fnPageChange=function(mAction,bRedraw)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);_fnPageChange(oSettings,mAction);_fnCalculateEnd(oSettings);if(bRedraw===undefined||bRedraw)
{_fnDraw(oSettings);}};this.fnSetColumnVis=function(iCol,bShow,bRedraw)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);var i,iLen;var aoColumns=oSettings.aoColumns;var aoData=oSettings.aoData;var nTd,bAppend,iBefore;if(aoColumns[iCol].bVisible==bShow)
{return;}
if(bShow)
{var iInsert=0;for(i=0;i<iCol;i++)
{if(aoColumns[i].bVisible)
{iInsert++;}}
bAppend=(iInsert>=_fnVisbleColumns(oSettings));if(!bAppend)
{for(i=iCol;i<aoColumns.length;i++)
{if(aoColumns[i].bVisible)
{iBefore=i;break;}}}
for(i=0,iLen=aoData.length;i<iLen;i++)
{if(aoData[i].nTr!==null)
{if(bAppend)
{aoData[i].nTr.appendChild(aoData[i]._anHidden[iCol]);}
else
{aoData[i].nTr.insertBefore(aoData[i]._anHidden[iCol],_fnGetTdNodes(oSettings,i)[iBefore]);}}}}
else
{for(i=0,iLen=aoData.length;i<iLen;i++)
{if(aoData[i].nTr!==null)
{nTd=_fnGetTdNodes(oSettings,i)[iCol];aoData[i]._anHidden[iCol]=nTd;nTd.parentNode.removeChild(nTd);}}}
aoColumns[iCol].bVisible=bShow;_fnDrawHead(oSettings,oSettings.aoHeader);if(oSettings.nTFoot)
{_fnDrawHead(oSettings,oSettings.aoFooter);}
for(i=0,iLen=oSettings.aoOpenRows.length;i<iLen;i++)
{oSettings.aoOpenRows[i].nTr.colSpan=_fnVisbleColumns(oSettings);}
if(bRedraw===undefined||bRedraw)
{_fnAdjustColumnSizing(oSettings);_fnDraw(oSettings);}
_fnSaveState(oSettings);};this.fnSettings=function()
{return _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);};this.fnSort=function(aaSort)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);oSettings.aaSorting=aaSort;_fnSort(oSettings);};this.fnSortListener=function(nNode,iColumn,fnCallback)
{_fnSortAttachListener(_fnSettingsFromNode(this[DataTable.ext.iApiIndex]),nNode,iColumn,fnCallback);};this.fnUpdate=function(mData,mRow,iColumn,bRedraw,bAction)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);var i,iLen,sDisplay;var iRow=(typeof mRow==='object')?_fnNodeToDataIndex(oSettings,mRow):mRow;if($.isArray(mData)&&iColumn===undefined)
{oSettings.aoData[iRow]._aData=mData.slice();for(i=0;i<oSettings.aoColumns.length;i++)
{this.fnUpdate(_fnGetCellData(oSettings,iRow,i),iRow,i,false,false);}}
else if($.isPlainObject(mData)&&iColumn===undefined)
{oSettings.aoData[iRow]._aData=$.extend(true,{},mData);for(i=0;i<oSettings.aoColumns.length;i++)
{this.fnUpdate(_fnGetCellData(oSettings,iRow,i),iRow,i,false,false);}}
else
{_fnSetCellData(oSettings,iRow,iColumn,mData);sDisplay=_fnGetCellData(oSettings,iRow,iColumn,'display');var oCol=oSettings.aoColumns[iColumn];if(oCol.fnRender!==null)
{sDisplay=_fnRender(oSettings,iRow,iColumn);if(oCol.bUseRendered)
{_fnSetCellData(oSettings,iRow,iColumn,sDisplay);}}
if(oSettings.aoData[iRow].nTr!==null)
{_fnGetTdNodes(oSettings,iRow)[iColumn].innerHTML=sDisplay;}}
var iDisplayIndex=$.inArray(iRow,oSettings.aiDisplay);oSettings.asDataSearch[iDisplayIndex]=_fnBuildSearchRow(oSettings,_fnGetRowData(oSettings,iRow,'filter',_fnGetColumns(oSettings,'bSearchable')));if(bAction===undefined||bAction)
{_fnAdjustColumnSizing(oSettings);}
if(bRedraw===undefined||bRedraw)
{_fnReDraw(oSettings);}
return 0;};this.fnVersionCheck=DataTable.ext.fnVersionCheck;function _fnExternApiFunc(sFunc)
{return function(){var aArgs=[_fnSettingsFromNode(this[DataTable.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return DataTable.ext.oApi[sFunc].apply(this,aArgs);};}
this.oApi={"_fnExternApiFunc":_fnExternApiFunc,"_fnInitialise":_fnInitialise,"_fnInitComplete":_fnInitComplete,"_fnLanguageCompat":_fnLanguageCompat,"_fnAddColumn":_fnAddColumn,"_fnColumnOptions":_fnColumnOptions,"_fnAddData":_fnAddData,"_fnCreateTr":_fnCreateTr,"_fnGatherData":_fnGatherData,"_fnBuildHead":_fnBuildHead,"_fnDrawHead":_fnDrawHead,"_fnDraw":_fnDraw,"_fnReDraw":_fnReDraw,"_fnAjaxUpdate":_fnAjaxUpdate,"_fnAjaxParameters":_fnAjaxParameters,"_fnAjaxUpdateDraw":_fnAjaxUpdateDraw,"_fnServerParams":_fnServerParams,"_fnAddOptionsHtml":_fnAddOptionsHtml,"_fnFeatureHtmlTable":_fnFeatureHtmlTable,"_fnScrollDraw":_fnScrollDraw,"_fnAdjustColumnSizing":_fnAdjustColumnSizing,"_fnFeatureHtmlFilter":_fnFeatureHtmlFilter,"_fnFilterComplete":_fnFilterComplete,"_fnFilterCustom":_fnFilterCustom,"_fnFilterColumn":_fnFilterColumn,"_fnFilter":_fnFilter,"_fnBuildSearchArray":_fnBuildSearchArray,"_fnBuildSearchRow":_fnBuildSearchRow,"_fnFilterCreateSearch":_fnFilterCreateSearch,"_fnDataToSearch":_fnDataToSearch,"_fnSort":_fnSort,"_fnSortAttachListener":_fnSortAttachListener,"_fnSortingClasses":_fnSortingClasses,"_fnFeatureHtmlPaginate":_fnFeatureHtmlPaginate,"_fnPageChange":_fnPageChange,"_fnFeatureHtmlInfo":_fnFeatureHtmlInfo,"_fnUpdateInfo":_fnUpdateInfo,"_fnFeatureHtmlLength":_fnFeatureHtmlLength,"_fnFeatureHtmlProcessing":_fnFeatureHtmlProcessing,"_fnProcessingDisplay":_fnProcessingDisplay,"_fnVisibleToColumnIndex":_fnVisibleToColumnIndex,"_fnColumnIndexToVisible":_fnColumnIndexToVisible,"_fnNodeToDataIndex":_fnNodeToDataIndex,"_fnVisbleColumns":_fnVisbleColumns,"_fnCalculateEnd":_fnCalculateEnd,"_fnConvertToWidth":_fnConvertToWidth,"_fnCalculateColumnWidths":_fnCalculateColumnWidths,"_fnScrollingWidthAdjust":_fnScrollingWidthAdjust,"_fnGetWidestNode":_fnGetWidestNode,"_fnGetMaxLenString":_fnGetMaxLenString,"_fnStringToCss":_fnStringToCss,"_fnDetectType":_fnDetectType,"_fnSettingsFromNode":_fnSettingsFromNode,"_fnGetDataMaster":_fnGetDataMaster,"_fnGetTrNodes":_fnGetTrNodes,"_fnGetTdNodes":_fnGetTdNodes,"_fnEscapeRegex":_fnEscapeRegex,"_fnDeleteIndex":_fnDeleteIndex,"_fnReOrderIndex":_fnReOrderIndex,"_fnColumnOrdering":_fnColumnOrdering,"_fnLog":_fnLog,"_fnClearTable":_fnClearTable,"_fnSaveState":_fnSaveState,"_fnLoadState":_fnLoadState,"_fnCreateCookie":_fnCreateCookie,"_fnReadCookie":_fnReadCookie,"_fnDetectHeader":_fnDetectHeader,"_fnGetUniqueThs":_fnGetUniqueThs,"_fnScrollBarWidth":_fnScrollBarWidth,"_fnApplyToChildren":_fnApplyToChildren,"_fnMap":_fnMap,"_fnGetRowData":_fnGetRowData,"_fnGetCellData":_fnGetCellData,"_fnSetCellData":_fnSetCellData,"_fnGetObjectDataFn":_fnGetObjectDataFn,"_fnSetObjectDataFn":_fnSetObjectDataFn,"_fnApplyColumnDefs":_fnApplyColumnDefs,"_fnBindAction":_fnBindAction,"_fnExtend":_fnExtend,"_fnCallbackReg":_fnCallbackReg,"_fnCallbackFire":_fnCallbackFire,"_fnJsonString":_fnJsonString,"_fnRender":_fnRender,"_fnNodeToColumnIndex":_fnNodeToColumnIndex,"_fnInfoMacros":_fnInfoMacros,"_fnBrowserDetect":_fnBrowserDetect,"_fnGetColumns":_fnGetColumns};$.extend(DataTable.ext.oApi,this.oApi);for(var sFunc in DataTable.ext.oApi)
{if(sFunc)
{this[sFunc]=_fnExternApiFunc(sFunc);}}
var _that=this;this.each(function(){var i=0,iLen,j,jLen,k,kLen;var sId=this.getAttribute('id');var bInitHandedOff=false;var bUsePassedData=false;if(this.nodeName.toLowerCase()!='table')
{_fnLog(null,0,"Attempted to initialise DataTables on a node which is not a "+"table: "+this.nodeName);return;}
for(i=0,iLen=DataTable.settings.length;i<iLen;i++)
{if(DataTable.settings[i].nTable==this)
{if(oInit===undefined||oInit.bRetrieve)
{return DataTable.settings[i].oInstance;}
else if(oInit.bDestroy)
{DataTable.settings[i].oInstance.fnDestroy();break;}
else
{_fnLog(DataTable.settings[i],0,"Cannot reinitialise DataTable.\n\n"+"To retrieve the DataTables object for this table, pass no arguments or see "+"the docs for bRetrieve and bDestroy");return;}}
if(DataTable.settings[i].sTableId==this.id)
{DataTable.settings.splice(i,1);break;}}
if(sId===null||sId==="")
{sId="DataTables_Table_"+(DataTable.ext._oExternConfig.iNextUnique++);this.id=sId;}
var oSettings=$.extend(true,{},DataTable.models.oSettings,{"nTable":this,"oApi":_that.oApi,"oInit":oInit,"sDestroyWidth":$(this).width(),"sInstance":sId,"sTableId":sId});DataTable.settings.push(oSettings);oSettings.oInstance=(_that.length===1)?_that:$(this).dataTable();if(!oInit)
{oInit={};}
if(oInit.oLanguage)
{_fnLanguageCompat(oInit.oLanguage);}
oInit=_fnExtend($.extend(true,{},DataTable.defaults),oInit);_fnMap(oSettings.oFeatures,oInit,"bPaginate");_fnMap(oSettings.oFeatures,oInit,"bLengthChange");_fnMap(oSettings.oFeatures,oInit,"bFilter");_fnMap(oSettings.oFeatures,oInit,"bSort");_fnMap(oSettings.oFeatures,oInit,"bInfo");_fnMap(oSettings.oFeatures,oInit,"bProcessing");_fnMap(oSettings.oFeatures,oInit,"bAutoWidth");_fnMap(oSettings.oFeatures,oInit,"bSortClasses");_fnMap(oSettings.oFeatures,oInit,"bServerSide");_fnMap(oSettings.oFeatures,oInit,"bDeferRender");_fnMap(oSettings.oScroll,oInit,"sScrollX","sX");_fnMap(oSettings.oScroll,oInit,"sScrollXInner","sXInner");_fnMap(oSettings.oScroll,oInit,"sScrollY","sY");_fnMap(oSettings.oScroll,oInit,"bScrollCollapse","bCollapse");_fnMap(oSettings.oScroll,oInit,"bScrollInfinite","bInfinite");_fnMap(oSettings.oScroll,oInit,"iScrollLoadGap","iLoadGap");_fnMap(oSettings.oScroll,oInit,"bScrollAutoCss","bAutoCss");_fnMap(oSettings,oInit,"asStripeClasses");_fnMap(oSettings,oInit,"asStripClasses","asStripeClasses");_fnMap(oSettings,oInit,"fnServerData");_fnMap(oSettings,oInit,"fnFormatNumber");_fnMap(oSettings,oInit,"sServerMethod");_fnMap(oSettings,oInit,"aaSorting");_fnMap(oSettings,oInit,"aaSortingFixed");_fnMap(oSettings,oInit,"aLengthMenu");_fnMap(oSettings,oInit,"sPaginationType");_fnMap(oSettings,oInit,"sAjaxSource");_fnMap(oSettings,oInit,"sAjaxDataProp");_fnMap(oSettings,oInit,"iCookieDuration");_fnMap(oSettings,oInit,"sCookiePrefix");_fnMap(oSettings,oInit,"sDom");_fnMap(oSettings,oInit,"bSortCellsTop");_fnMap(oSettings,oInit,"iTabIndex");_fnMap(oSettings,oInit,"oSearch","oPreviousSearch");_fnMap(oSettings,oInit,"aoSearchCols","aoPreSearchCols");_fnMap(oSettings,oInit,"iDisplayLength","_iDisplayLength");_fnMap(oSettings,oInit,"bJQueryUI","bJUI");_fnMap(oSettings,oInit,"fnCookieCallback");_fnMap(oSettings,oInit,"fnStateLoad");_fnMap(oSettings,oInit,"fnStateSave");_fnMap(oSettings.oLanguage,oInit,"fnInfoCallback");_fnCallbackReg(oSettings,'aoDrawCallback',oInit.fnDrawCallback,'user');_fnCallbackReg(oSettings,'aoServerParams',oInit.fnServerParams,'user');_fnCallbackReg(oSettings,'aoStateSaveParams',oInit.fnStateSaveParams,'user');_fnCallbackReg(oSettings,'aoStateLoadParams',oInit.fnStateLoadParams,'user');_fnCallbackReg(oSettings,'aoStateLoaded',oInit.fnStateLoaded,'user');_fnCallbackReg(oSettings,'aoRowCallback',oInit.fnRowCallback,'user');_fnCallbackReg(oSettings,'aoRowCreatedCallback',oInit.fnCreatedRow,'user');_fnCallbackReg(oSettings,'aoHeaderCallback',oInit.fnHeaderCallback,'user');_fnCallbackReg(oSettings,'aoFooterCallback',oInit.fnFooterCallback,'user');_fnCallbackReg(oSettings,'aoInitComplete',oInit.fnInitComplete,'user');_fnCallbackReg(oSettings,'aoPreDrawCallback',oInit.fnPreDrawCallback,'user');if(oSettings.oFeatures.bServerSide&&oSettings.oFeatures.bSort&&oSettings.oFeatures.bSortClasses)
{_fnCallbackReg(oSettings,'aoDrawCallback',_fnSortingClasses,'server_side_sort_classes');}
else if(oSettings.oFeatures.bDeferRender)
{_fnCallbackReg(oSettings,'aoDrawCallback',_fnSortingClasses,'defer_sort_classes');}
if(oInit.bJQueryUI)
{$.extend(oSettings.oClasses,DataTable.ext.oJUIClasses);if(oInit.sDom===DataTable.defaults.sDom&&DataTable.defaults.sDom==="lfrtip")
{oSettings.sDom='<"H"lfr>t<"F"ip>';}}
else
{$.extend(oSettings.oClasses,DataTable.ext.oStdClasses);}
$(this).addClass(oSettings.oClasses.sTable);if(oSettings.oScroll.sX!==""||oSettings.oScroll.sY!=="")
{oSettings.oScroll.iBarWidth=_fnScrollBarWidth();}
if(oSettings.iInitDisplayStart===undefined)
{oSettings.iInitDisplayStart=oInit.iDisplayStart;oSettings._iDisplayStart=oInit.iDisplayStart;}
if(oInit.bStateSave)
{oSettings.oFeatures.bStateSave=true;_fnLoadState(oSettings,oInit);_fnCallbackReg(oSettings,'aoDrawCallback',_fnSaveState,'state_save');}
if(oInit.iDeferLoading!==null)
{oSettings.bDeferLoading=true;var tmp=$.isArray(oInit.iDeferLoading);oSettings._iRecordsDisplay=tmp?oInit.iDeferLoading[0]:oInit.iDeferLoading;oSettings._iRecordsTotal=tmp?oInit.iDeferLoading[1]:oInit.iDeferLoading;}
if(oInit.aaData!==null)
{bUsePassedData=true;}
if(oInit.oLanguage.sUrl!=="")
{oSettings.oLanguage.sUrl=oInit.oLanguage.sUrl;$.getJSON(oSettings.oLanguage.sUrl,null,function(json){_fnLanguageCompat(json);$.extend(true,oSettings.oLanguage,oInit.oLanguage,json);_fnInitialise(oSettings);});bInitHandedOff=true;}
else
{$.extend(true,oSettings.oLanguage,oInit.oLanguage);}
if(oInit.asStripeClasses===null)
{oSettings.asStripeClasses=[oSettings.oClasses.sStripeOdd,oSettings.oClasses.sStripeEven];}
iLen=oSettings.asStripeClasses.length;oSettings.asDestroyStripes=[];if(iLen)
{var bStripeRemove=false;var anRows=$(this).children('tbody').children('tr:lt('+iLen+')');for(i=0;i<iLen;i++)
{if(anRows.hasClass(oSettings.asStripeClasses[i]))
{bStripeRemove=true;oSettings.asDestroyStripes.push(oSettings.asStripeClasses[i]);}}
if(bStripeRemove)
{anRows.removeClass(oSettings.asStripeClasses.join(' '));}}
var anThs=[];var aoColumnsInit;var nThead=this.getElementsByTagName('thead');if(nThead.length!==0)
{_fnDetectHeader(oSettings.aoHeader,nThead[0]);anThs=_fnGetUniqueThs(oSettings);}
if(oInit.aoColumns===null)
{aoColumnsInit=[];for(i=0,iLen=anThs.length;i<iLen;i++)
{aoColumnsInit.push(null);}}
else
{aoColumnsInit=oInit.aoColumns;}
for(i=0,iLen=aoColumnsInit.length;i<iLen;i++)
{if(oInit.saved_aoColumns!==undefined&&oInit.saved_aoColumns.length==iLen)
{if(aoColumnsInit[i]===null)
{aoColumnsInit[i]={};}
aoColumnsInit[i].bVisible=oInit.saved_aoColumns[i].bVisible;}
_fnAddColumn(oSettings,anThs?anThs[i]:null);}
_fnApplyColumnDefs(oSettings,oInit.aoColumnDefs,aoColumnsInit,function(iCol,oDef){_fnColumnOptions(oSettings,iCol,oDef);});for(i=0,iLen=oSettings.aaSorting.length;i<iLen;i++)
{if(oSettings.aaSorting[i][0]>=oSettings.aoColumns.length)
{oSettings.aaSorting[i][0]=0;}
var oColumn=oSettings.aoColumns[oSettings.aaSorting[i][0]];if(oSettings.aaSorting[i][2]===undefined)
{oSettings.aaSorting[i][2]=0;}
if(oInit.aaSorting===undefined&&oSettings.saved_aaSorting===undefined)
{oSettings.aaSorting[i][1]=oColumn.asSorting[0];}
for(j=0,jLen=oColumn.asSorting.length;j<jLen;j++)
{if(oSettings.aaSorting[i][1]==oColumn.asSorting[j])
{oSettings.aaSorting[i][2]=j;break;}}}
_fnSortingClasses(oSettings);_fnBrowserDetect(oSettings);var captions=$(this).children('caption').each(function(){this._captionSide=$(this).css('caption-side');});var thead=$(this).children('thead');if(thead.length===0)
{thead=[document.createElement('thead')];this.appendChild(thead[0]);}
oSettings.nTHead=thead[0];var tbody=$(this).children('tbody');if(tbody.length===0)
{tbody=[document.createElement('tbody')];this.appendChild(tbody[0]);}
oSettings.nTBody=tbody[0];oSettings.nTBody.setAttribute("role","alert");oSettings.nTBody.setAttribute("aria-live","polite");oSettings.nTBody.setAttribute("aria-relevant","all");var tfoot=$(this).children('tfoot');if(tfoot.length===0&&captions.length>0&&(oSettings.oScroll.sX!==""||oSettings.oScroll.sY!==""))
{tfoot=[document.createElement('tfoot')];this.appendChild(tfoot[0]);}
if(tfoot.length>0)
{oSettings.nTFoot=tfoot[0];_fnDetectHeader(oSettings.aoFooter,oSettings.nTFoot);}
if(bUsePassedData)
{for(i=0;i<oInit.aaData.length;i++)
{_fnAddData(oSettings,oInit.aaData[i]);}}
else
{_fnGatherData(oSettings);}
oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();oSettings.bInitialised=true;if(bInitHandedOff===false)
{_fnInitialise(oSettings);}});_that=null;return this;};DataTable.fnVersionCheck=function(sVersion)
{var fnZPad=function(Zpad,count)
{while(Zpad.length<count){Zpad+='0';}
return Zpad;};var aThis=DataTable.ext.sVersion.split('.');var aThat=sVersion.split('.');var sThis='',sThat='';for(var i=0,iLen=aThat.length;i<iLen;i++)
{sThis+=fnZPad(aThis[i],3);sThat+=fnZPad(aThat[i],3);}
return parseInt(sThis,10)>=parseInt(sThat,10);};DataTable.fnIsDataTable=function(nTable)
{var o=DataTable.settings;for(var i=0;i<o.length;i++)
{if(o[i].nTable===nTable||o[i].nScrollHead===nTable||o[i].nScrollFoot===nTable)
{return true;}}
return false;};DataTable.fnTables=function(bVisible)
{var out=[];jQuery.each(DataTable.settings,function(i,o){if(!bVisible||(bVisible===true&&$(o.nTable).is(':visible')))
{out.push(o.nTable);}});return out;};DataTable.version="1.9.4";DataTable.settings=[];DataTable.models={};DataTable.models.ext={"afnFiltering":[],"afnSortData":[],"aoFeatures":[],"aTypes":[],"fnVersionCheck":DataTable.fnVersionCheck,"iApiIndex":0,"ofnSearch":{},"oApi":{},"oStdClasses":{},"oJUIClasses":{},"oPagination":{},"oSort":{},"sVersion":DataTable.version,"sErrMode":"alert","_oExternConfig":{"iNextUnique":0}};DataTable.models.oSearch={"bCaseInsensitive":true,"sSearch":"","bRegex":false,"bSmart":true};DataTable.models.oRow={"nTr":null,"_aData":[],"_aSortData":[],"_anHidden":[],"_sRowStripe":""};DataTable.models.oColumn={"aDataSort":null,"asSorting":null,"bSearchable":null,"bSortable":null,"bUseRendered":null,"bVisible":null,"_bAutoType":true,"fnCreatedCell":null,"fnGetData":null,"fnRender":null,"fnSetData":null,"mData":null,"mRender":null,"nTh":null,"nTf":null,"sClass":null,"sContentPadding":null,"sDefaultContent":null,"sName":null,"sSortDataType":'std',"sSortingClass":null,"sSortingClassJUI":null,"sTitle":null,"sType":null,"sWidth":null,"sWidthOrig":null};DataTable.defaults={"aaData":null,"aaSorting":[[0,'asc']],"aaSortingFixed":null,"aLengthMenu":[10,25,50,100],"aoColumns":null,"aoColumnDefs":null,"aoSearchCols":[],"asStripeClasses":null,"bAutoWidth":true,"bDeferRender":false,"bDestroy":false,"bFilter":true,"bInfo":true,"bJQueryUI":false,"bLengthChange":true,"bPaginate":true,"bProcessing":false,"bRetrieve":false,"bScrollAutoCss":true,"bScrollCollapse":false,"bScrollInfinite":false,"bServerSide":false,"bSort":true,"bSortCellsTop":false,"bSortClasses":true,"bStateSave":false,"fnCookieCallback":null,"fnCreatedRow":null,"fnDrawCallback":null,"fnFooterCallback":null,"fnFormatNumber":function(iIn){if(iIn<1000)
{return iIn;}
var s=(iIn+""),a=s.split(""),out="",iLen=s.length;for(var i=0;i<iLen;i++)
{if(i%3===0&&i!==0)
{out=this.oLanguage.sInfoThousands+out;}
out=a[iLen-i-1]+out;}
return out;},"fnHeaderCallback":null,"fnInfoCallback":null,"fnInitComplete":null,"fnPreDrawCallback":null,"fnRowCallback":null,"fnServerData":function(sUrl,aoData,fnCallback,oSettings){oSettings.jqXHR=$.ajax({"url":sUrl,"data":aoData,"success":function(json){if(json.sError){oSettings.oApi._fnLog(oSettings,0,json.sError);}
$(oSettings.oInstance).trigger('xhr',[oSettings,json]);fnCallback(json);},"dataType":"json","cache":false,"type":oSettings.sServerMethod,"error":function(xhr,error,thrown){if(error=="parsererror"){oSettings.oApi._fnLog(oSettings,0,"DataTables warning: JSON data from "+"server could not be parsed. This is caused by a JSON formatting error.");}}});},"fnServerParams":null,"fnStateLoad":function(oSettings){var sData=this.oApi._fnReadCookie(oSettings.sCookiePrefix+oSettings.sInstance);var oData;try{oData=(typeof $.parseJSON==='function')?$.parseJSON(sData):eval('('+sData+')');}catch(e){oData=null;}
return oData;},"fnStateLoadParams":null,"fnStateLoaded":null,"fnStateSave":function(oSettings,oData){this.oApi._fnCreateCookie(oSettings.sCookiePrefix+oSettings.sInstance,this.oApi._fnJsonString(oData),oSettings.iCookieDuration,oSettings.sCookiePrefix,oSettings.fnCookieCallback);},"fnStateSaveParams":null,"iCookieDuration":7200,"iDeferLoading":null,"iDisplayLength":10,"iDisplayStart":0,"iScrollLoadGap":100,"iTabIndex":0,"oLanguage":{"oAria":{"sSortAscending":": activate to sort column ascending","sSortDescending":": activate to sort column descending"},"oPaginate":{"sFirst":"First","sLast":"Last","sNext":"Next","sPrevious":"Previous"},"sEmptyTable":"No data available in table","sInfo":"Showing _START_ to _END_ of _TOTAL_ entries","sInfoEmpty":"Showing 0 to 0 of 0 entries","sInfoFiltered":"(filtered from _MAX_ total entries)","sInfoPostFix":"","sInfoThousands":",","sLengthMenu":"Show _MENU_ entries","sLoadingRecords":"Loading...","sProcessing":"Processing...","sSearch":"Search:","sUrl":"","sZeroRecords":"No matching records found"},"oSearch":$.extend({},DataTable.models.oSearch),"sAjaxDataProp":"aaData","sAjaxSource":null,"sCookiePrefix":"SpryMedia_DataTables_","sDom":"lfrtip","sPaginationType":"two_button","sScrollX":"","sScrollXInner":"","sScrollY":"","sServerMethod":"GET"};DataTable.defaults.columns={"aDataSort":null,"asSorting":['asc','desc'],"bSearchable":true,"bSortable":true,"bUseRendered":true,"bVisible":true,"fnCreatedCell":null,"fnRender":null,"iDataSort":-1,"mData":null,"mRender":null,"sCellType":"td","sClass":"","sContentPadding":"","sDefaultContent":null,"sName":"","sSortDataType":"std","sTitle":null,"sType":null,"sWidth":null};DataTable.models.oSettings={"oFeatures":{"bAutoWidth":null,"bDeferRender":null,"bFilter":null,"bInfo":null,"bLengthChange":null,"bPaginate":null,"bProcessing":null,"bServerSide":null,"bSort":null,"bSortClasses":null,"bStateSave":null},"oScroll":{"bAutoCss":null,"bCollapse":null,"bInfinite":null,"iBarWidth":0,"iLoadGap":null,"sX":null,"sXInner":null,"sY":null},"oLanguage":{"fnInfoCallback":null},"oBrowser":{"bScrollOversize":false},"aanFeatures":[],"aoData":[],"aiDisplay":[],"aiDisplayMaster":[],"aoColumns":[],"aoHeader":[],"aoFooter":[],"asDataSearch":[],"oPreviousSearch":{},"aoPreSearchCols":[],"aaSorting":null,"aaSortingFixed":null,"asStripeClasses":null,"asDestroyStripes":[],"sDestroyWidth":0,"aoRowCallback":[],"aoHeaderCallback":[],"aoFooterCallback":[],"aoDrawCallback":[],"aoRowCreatedCallback":[],"aoPreDrawCallback":[],"aoInitComplete":[],"aoStateSaveParams":[],"aoStateLoadParams":[],"aoStateLoaded":[],"sTableId":"","nTable":null,"nTHead":null,"nTFoot":null,"nTBody":null,"nTableWrapper":null,"bDeferLoading":false,"bInitialised":false,"aoOpenRows":[],"sDom":null,"sPaginationType":"two_button","iCookieDuration":0,"sCookiePrefix":"","fnCookieCallback":null,"aoStateSave":[],"aoStateLoad":[],"oLoadedState":null,"sAjaxSource":null,"sAjaxDataProp":null,"bAjaxDataGet":true,"jqXHR":null,"fnServerData":null,"aoServerParams":[],"sServerMethod":null,"fnFormatNumber":null,"aLengthMenu":null,"iDraw":0,"bDrawing":false,"iDrawError":-1,"_iDisplayLength":10,"_iDisplayStart":0,"_iDisplayEnd":10,"_iRecordsTotal":0,"_iRecordsDisplay":0,"bJUI":null,"oClasses":{},"bFiltered":false,"bSorted":false,"bSortCellsTop":null,"oInit":null,"aoDestroyCallback":[],"fnRecordsTotal":function()
{if(this.oFeatures.bServerSide){return parseInt(this._iRecordsTotal,10);}else{return this.aiDisplayMaster.length;}},"fnRecordsDisplay":function()
{if(this.oFeatures.bServerSide){return parseInt(this._iRecordsDisplay,10);}else{return this.aiDisplay.length;}},"fnDisplayEnd":function()
{if(this.oFeatures.bServerSide){if(this.oFeatures.bPaginate===false||this._iDisplayLength==-1){return this._iDisplayStart+this.aiDisplay.length;}else{return Math.min(this._iDisplayStart+this._iDisplayLength,this._iRecordsDisplay);}}else{return this._iDisplayEnd;}},"oInstance":null,"sInstance":null,"iTabIndex":0,"nScrollHead":null,"nScrollFoot":null};DataTable.ext=$.extend(true,{},DataTable.models.ext);$.extend(DataTable.ext.oStdClasses,{"sTable":"dataTable","sPagePrevEnabled":"paginate_enabled_previous","sPagePrevDisabled":"paginate_disabled_previous","sPageNextEnabled":"paginate_enabled_next","sPageNextDisabled":"paginate_disabled_next","sPageJUINext":"","sPageJUIPrev":"","sPageButton":"paginate_button","sPageButtonActive":"paginate_active","sPageButtonStaticDisabled":"paginate_button paginate_button_disabled","sPageFirst":"first","sPagePrevious":"previous","sPageNext":"next","sPageLast":"last","sStripeOdd":"odd","sStripeEven":"even","sRowEmpty":"dataTables_empty","sWrapper":"dataTables_wrapper","sFilter":"dataTables_filter","sInfo":"dataTables_info","sPaging":"dataTables_paginate paging_","sLength":"dataTables_length","sProcessing":"dataTables_processing","sSortAsc":"sorting_asc","sSortDesc":"sorting_desc","sSortable":"sorting","sSortableAsc":"sorting_asc_disabled","sSortableDesc":"sorting_desc_disabled","sSortableNone":"sorting_disabled","sSortColumn":"sorting_","sSortJUIAsc":"","sSortJUIDesc":"","sSortJUI":"","sSortJUIAscAllowed":"","sSortJUIDescAllowed":"","sSortJUIWrapper":"","sSortIcon":"","sScrollWrapper":"dataTables_scroll","sScrollHead":"dataTables_scrollHead","sScrollHeadInner":"dataTables_scrollHeadInner","sScrollBody":"dataTables_scrollBody","sScrollFoot":"dataTables_scrollFoot","sScrollFootInner":"dataTables_scrollFootInner","sFooterTH":"","sJUIHeader":"","sJUIFooter":""});$.extend(DataTable.ext.oJUIClasses,DataTable.ext.oStdClasses,{"sPagePrevEnabled":"fg-button ui-button ui-state-default ui-corner-left","sPagePrevDisabled":"fg-button ui-button ui-state-default ui-corner-left ui-state-disabled","sPageNextEnabled":"fg-button ui-button ui-state-default ui-corner-right","sPageNextDisabled":"fg-button ui-button ui-state-default ui-corner-right ui-state-disabled","sPageJUINext":"ui-icon ui-icon-circle-arrow-e","sPageJUIPrev":"ui-icon ui-icon-circle-arrow-w","sPageButton":"fg-button ui-button ui-state-default","sPageButtonActive":"fg-button ui-button ui-state-default ui-state-disabled","sPageButtonStaticDisabled":"fg-button ui-button ui-state-default ui-state-disabled","sPageFirst":"first ui-corner-tl ui-corner-bl","sPageLast":"last ui-corner-tr ui-corner-br","sPaging":"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi "+"ui-buttonset-multi paging_","sSortAsc":"ui-state-default","sSortDesc":"ui-state-default","sSortable":"ui-state-default","sSortableAsc":"ui-state-default","sSortableDesc":"ui-state-default","sSortableNone":"ui-state-default","sSortJUIAsc":"css_right ui-icon ui-icon-triangle-1-n","sSortJUIDesc":"css_right ui-icon ui-icon-triangle-1-s","sSortJUI":"css_right ui-icon ui-icon-carat-2-n-s","sSortJUIAscAllowed":"css_right ui-icon ui-icon-carat-1-n","sSortJUIDescAllowed":"css_right ui-icon ui-icon-carat-1-s","sSortJUIWrapper":"DataTables_sort_wrapper","sSortIcon":"DataTables_sort_icon","sScrollHead":"dataTables_scrollHead ui-state-default","sScrollFoot":"dataTables_scrollFoot ui-state-default","sFooterTH":"ui-state-default","sJUIHeader":"fg-toolbar ui-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix","sJUIFooter":"fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix"});$.extend(DataTable.ext.oPagination,{"two_button":{"fnInit":function(oSettings,nPaging,fnCallbackDraw)
{var oLang=oSettings.oLanguage.oPaginate;var oClasses=oSettings.oClasses;var fnClickHandler=function(e){if(oSettings.oApi._fnPageChange(oSettings,e.data.action))
{fnCallbackDraw(oSettings);}};var sAppend=(!oSettings.bJUI)?'<a class="'+oSettings.oClasses.sPagePrevDisabled+'" tabindex="'+oSettings.iTabIndex+'" role="button">'+oLang.sPrevious+'</a>'+'<a class="'+oSettings.oClasses.sPageNextDisabled+'" tabindex="'+oSettings.iTabIndex+'" role="button">'+oLang.sNext+'</a>':'<a class="'+oSettings.oClasses.sPagePrevDisabled+'" tabindex="'+oSettings.iTabIndex+'" role="button"><span class="'+oSettings.oClasses.sPageJUIPrev+'"></span></a>'+'<a class="'+oSettings.oClasses.sPageNextDisabled+'" tabindex="'+oSettings.iTabIndex+'" role="button"><span class="'+oSettings.oClasses.sPageJUINext+'"></span></a>';$(nPaging).append(sAppend);var els=$('a',nPaging);var nPrevious=els[0],nNext=els[1];oSettings.oApi._fnBindAction(nPrevious,{action:"previous"},fnClickHandler);oSettings.oApi._fnBindAction(nNext,{action:"next"},fnClickHandler);if(!oSettings.aanFeatures.p)
{nPaging.id=oSettings.sTableId+'_paginate';nPrevious.id=oSettings.sTableId+'_previous';nNext.id=oSettings.sTableId+'_next';nPrevious.setAttribute('aria-controls',oSettings.sTableId);nNext.setAttribute('aria-controls',oSettings.sTableId);}},"fnUpdate":function(oSettings,fnCallbackDraw)
{if(!oSettings.aanFeatures.p)
{return;}
var oClasses=oSettings.oClasses;var an=oSettings.aanFeatures.p;var nNode;for(var i=0,iLen=an.length;i<iLen;i++)
{nNode=an[i].firstChild;if(nNode)
{nNode.className=(oSettings._iDisplayStart===0)?oClasses.sPagePrevDisabled:oClasses.sPagePrevEnabled;nNode=nNode.nextSibling;nNode.className=(oSettings.fnDisplayEnd()==oSettings.fnRecordsDisplay())?oClasses.sPageNextDisabled:oClasses.sPageNextEnabled;}}}},"iFullNumbersShowPages":5,"full_numbers":{"fnInit":function(oSettings,nPaging,fnCallbackDraw)
{var oLang=oSettings.oLanguage.oPaginate;var oClasses=oSettings.oClasses;var fnClickHandler=function(e){if(oSettings.oApi._fnPageChange(oSettings,e.data.action))
{fnCallbackDraw(oSettings);}};$(nPaging).append('<a  tabindex="'+oSettings.iTabIndex+'" class="'+oClasses.sPageButton+" "+oClasses.sPageFirst+'">'+oLang.sFirst+'</a>'+'<a  tabindex="'+oSettings.iTabIndex+'" class="'+oClasses.sPageButton+" "+oClasses.sPagePrevious+'">'+oLang.sPrevious+'</a>'+'<span></span>'+'<a tabindex="'+oSettings.iTabIndex+'" class="'+oClasses.sPageButton+" "+oClasses.sPageNext+'">'+oLang.sNext+'</a>'+'<a tabindex="'+oSettings.iTabIndex+'" class="'+oClasses.sPageButton+" "+oClasses.sPageLast+'">'+oLang.sLast+'</a>');var els=$('a',nPaging);var nFirst=els[0],nPrev=els[1],nNext=els[2],nLast=els[3];oSettings.oApi._fnBindAction(nFirst,{action:"first"},fnClickHandler);oSettings.oApi._fnBindAction(nPrev,{action:"previous"},fnClickHandler);oSettings.oApi._fnBindAction(nNext,{action:"next"},fnClickHandler);oSettings.oApi._fnBindAction(nLast,{action:"last"},fnClickHandler);if(!oSettings.aanFeatures.p)
{nPaging.id=oSettings.sTableId+'_paginate';nFirst.id=oSettings.sTableId+'_first';nPrev.id=oSettings.sTableId+'_previous';nNext.id=oSettings.sTableId+'_next';nLast.id=oSettings.sTableId+'_last';}},"fnUpdate":function(oSettings,fnCallbackDraw)
{if(!oSettings.aanFeatures.p)
{return;}
var iPageCount=DataTable.ext.oPagination.iFullNumbersShowPages;var iPageCountHalf=Math.floor(iPageCount/2);var iPages=Math.ceil((oSettings.fnRecordsDisplay())/oSettings._iDisplayLength);var iCurrentPage=Math.ceil(oSettings._iDisplayStart/oSettings._iDisplayLength)+1;var sList="";var iStartButton,iEndButton,i,iLen;var oClasses=oSettings.oClasses;var anButtons,anStatic,nPaginateList,nNode;var an=oSettings.aanFeatures.p;var fnBind=function(j){oSettings.oApi._fnBindAction(this,{"page":j+iStartButton-1},function(e){oSettings.oApi._fnPageChange(oSettings,e.data.page);fnCallbackDraw(oSettings);e.preventDefault();});};if(oSettings._iDisplayLength===-1)
{iStartButton=1;iEndButton=1;iCurrentPage=1;}
else if(iPages<iPageCount)
{iStartButton=1;iEndButton=iPages;}
else if(iCurrentPage<=iPageCountHalf)
{iStartButton=1;iEndButton=iPageCount;}
else if(iCurrentPage>=(iPages-iPageCountHalf))
{iStartButton=iPages-iPageCount+1;iEndButton=iPages;}
else
{iStartButton=iCurrentPage-Math.ceil(iPageCount/2)+1;iEndButton=iStartButton+iPageCount-1;}
for(i=iStartButton;i<=iEndButton;i++)
{sList+=(iCurrentPage!==i)?'<a tabindex="'+oSettings.iTabIndex+'" class="'+oClasses.sPageButton+'">'+oSettings.fnFormatNumber(i)+'</a>':'<a tabindex="'+oSettings.iTabIndex+'" class="'+oClasses.sPageButtonActive+'">'+oSettings.fnFormatNumber(i)+'</a>';}
for(i=0,iLen=an.length;i<iLen;i++)
{nNode=an[i];if(!nNode.hasChildNodes())
{continue;}
$('span:eq(0)',nNode).html(sList).children('a').each(fnBind);anButtons=nNode.getElementsByTagName('a');anStatic=[anButtons[0],anButtons[1],anButtons[anButtons.length-2],anButtons[anButtons.length-1]];$(anStatic).removeClass(oClasses.sPageButton+" "+oClasses.sPageButtonActive+" "+oClasses.sPageButtonStaticDisabled);$([anStatic[0],anStatic[1]]).addClass((iCurrentPage==1)?oClasses.sPageButtonStaticDisabled:oClasses.sPageButton);$([anStatic[2],anStatic[3]]).addClass((iPages===0||iCurrentPage===iPages||oSettings._iDisplayLength===-1)?oClasses.sPageButtonStaticDisabled:oClasses.sPageButton);}}}});$.extend(DataTable.ext.oSort,{"string-pre":function(a)
{if(typeof a!='string'){a=(a!==null&&a.toString)?a.toString():'';}
return a.toLowerCase();},"string-asc":function(x,y)
{return((x<y)?-1:((x>y)?1:0));},"string-desc":function(x,y)
{return((x<y)?1:((x>y)?-1:0));},"html-pre":function(a)
{return a.replace(/<.*?>/g,"").toLowerCase();},"html-asc":function(x,y)
{return((x<y)?-1:((x>y)?1:0));},"html-desc":function(x,y)
{return((x<y)?1:((x>y)?-1:0));},"date-pre":function(a)
{var x=Date.parse(a);if(isNaN(x)||x==="")
{x=Date.parse("01/01/1970 00:00:00");}
return x;},"date-asc":function(x,y)
{return x-y;},"date-desc":function(x,y)
{return y-x;},"numeric-pre":function(a)
{return(a=="-"||a==="")?0:a*1;},"numeric-asc":function(x,y)
{return x-y;},"numeric-desc":function(x,y)
{return y-x;}});$.extend(DataTable.ext.aTypes,[function(sData)
{if(typeof sData==='number')
{return'numeric';}
else if(typeof sData!=='string')
{return null;}
var sValidFirstChars="0123456789-";var sValidChars="0123456789.";var Char;var bDecimal=false;Char=sData.charAt(0);if(sValidFirstChars.indexOf(Char)==-1)
{return null;}
for(var i=1;i<sData.length;i++)
{Char=sData.charAt(i);if(sValidChars.indexOf(Char)==-1)
{return null;}
if(Char==".")
{if(bDecimal)
{return null;}
bDecimal=true;}}
return'numeric';},function(sData)
{var iParse=Date.parse(sData);if((iParse!==null&&!isNaN(iParse))||(typeof sData==='string'&&sData.length===0))
{return'date';}
return null;},function(sData)
{if(typeof sData==='string'&&sData.indexOf('<')!=-1&&sData.indexOf('>')!=-1)
{return'html';}
return null;}]);$.fn.DataTable=DataTable;$.fn.dataTable=DataTable;$.fn.dataTableSettings=DataTable.settings;$.fn.dataTableExt=DataTable.ext;}));}(window,document));;(function(e){e.fn.customScrollbar=function(t,i){var o={skin:undefined,hScroll:true,vScroll:true,updateOnWindowResize:false,onCustomScroll:undefined};var s=function(t,i){this.$element=e(t);this.options=i;this.addScrollableClass();this.addSkinClass();this.addScrollBarComponents();if(this.options.vScroll)this.vScrollbar=new l(this,new r);if(this.options.hScroll)this.hScrollbar=new l(this,new n);this.$element.data("scrollable",this);if(window.jQueryCustomScrollbars==undefined)window.jQueryCustomScrollbars=[];this.addToScrollbarsHierarchy();this.initKeyboardScrolling();this.bindEvents()};s.prototype={addScrollableClass:function(){if(!this.$element.hasClass("scrollable")){this.scrollableAdded=true;this.$element.addClass("scrollable")}},removeScrollableClass:function(){if(this.scrollableAdded)this.$element.removeClass("scrollable")},addSkinClass:function(){if(typeof this.options.skin=="string"&&!this.$element.hasClass(this.options.skin)){this.skinClassAdded=true;this.$element.addClass(this.options.skin)}},removeSkinClass:function(){if(this.skinClassAdded)this.$element.removeClass(this.options.skin)},addScrollBarComponents:function(){this.assignViewPort();if(this.$viewPort.length==0){this.$element.wrapInner('<div class="viewport" />');this.assignViewPort();this.viewPortAdded=true}this.assignOverview();if(this.$overview.length==0){this.$viewPort.wrapInner('<div class="overview" />');this.assignOverview();this.overviewAdded=true}this.addScrollBar("vertical","prepend");this.addScrollBar("horizontal","append")},removeScrollbarComponents:function(){this.removeScrollbar("vertical");this.removeScrollbar("horizontal");if(this.overviewAdded)this.$element.unwrap();if(this.viewPortAdded)this.$element.unwrap()},removeScrollbar:function(e){if(this[e+"ScrollbarAdded"])this.$element.find(".scroll-bar."+e).remove()},assignViewPort:function(){this.$viewPort=this.$element.find(".viewport")},assignOverview:function(){this.$overview=this.$viewPort.find(".overview")},addScrollBar:function(e,t){if(this.$element.find(".scroll-bar."+e).length==0){this.$element[t]("<div class='scroll-bar "+e+"'><div class='thumb'></div></div>");this[e+"ScrollbarAdded"]=true}},resize:function(){if(this.vScrollbar)this.vScrollbar.resize();if(this.hScrollbar)this.hScrollbar.resize()},scrollTo:function(e){if(this.vScrollbar)this.vScrollbar.scrollToElement(e);if(this.hScrollbar)this.hScrollbar.scrollToElement(e)},scrollToXY:function(e,t){this.scrollToX(e);this.scrollToY(t)},scrollToX:function(e){if(this.hScrollbar)this.hScrollbar.scrollTo(e)},scrollToY:function(e){if(this.vScrollbar)this.vScrollbar.scrollTo(e)},remove:function(){this.removeScrollableClass();this.removeSkinClass();this.removeScrollbarComponents();this.$element.data("scrollable",null);window.jQueryCustomScrollbars=null;this.removeKeyboardScrolling();if(this.vScrollbar)this.vScrollbar.remove();if(this.hScrollbar)this.hScrollbar.remove()},isInside:function(t,i){var o=e(t);var s=e(i);var l=o.offset();var n=s.offset();return l.top>=n.top&&l.left>=n.left&&l.top+o.height()<=n.top+s.height()&&l.left+o.width()<=n.left+s.width()},addNested:function(e){if(this.addNestedToOneFromList(this.nestedScrollbars,e))return true;else if(this.isInside(e.$viewPort,this.$overview)){this.nestedScrollbars.push(e);return true}else return false},addToScrollbarsHierarchy:function(){this.nestedScrollbars=[];if(!this.addNestedToOneFromList(this,window.jQueryCustomScrollbars))window.jQueryCustomScrollbars.push(this)},addNestedToOneFromList:function(e,t){for(var i=0;i<t.length;i++){if(t[i].addNested(e))return true;else if(e.addNested(t[i])){t[i]=e;return true}}return false},isMouseOver:function(){for(var e=0;e<this.nestedScrollbars.length;e++)if(this.nestedScrollbars[e].isMouseOver())return false;var t=this.$element.offset();var i=this.$element.width();var o=this.$element.height();return this.lastMouseEvent&&this.lastMouseEvent.pageX>=t.left&&this.lastMouseEvent.pageX<=t.left+i&&this.lastMouseEvent.pageY>=t.top&&this.lastMouseEvent.pageY<=t.top+o},initKeyboardScrolling:function(){var t=this;this.documentKeydown=function(e){if(t.isMouseOver()){if(t.vScrollbar)t.vScrollbar.keyScroll(e);if(t.hScrollbar)t.hScrollbar.keyScroll(e)}};e(document).keydown(this.documentKeydown);this.documentMousemove=function(e){t.lastMouseEvent=e};e(document).mousemove(this.documentMousemove)},removeKeyboardScrolling:function(){e(document).unbind("keydown",this.documentKeydown);e(document).unbind("mousemove",this.documentMousemove)},bindEvents:function(){if(this.options.onCustomScroll)this.$element.on("customScroll",this.options.onCustomScroll)}};var l=function(e,t){this.scrollable=e;this.sizing=t;this.$scrollBar=this.sizing.scrollBar(this.scrollable.$element);this.$thumb=this.$scrollBar.find(".thumb");this.setScrollPosition(0,0);this.resize();this.initMouseMoveScrolling();this.initMouseWheelScrolling();this.initTouchScrolling();this.initMouseClickScrolling();this.initWindowResize()};l.prototype={resize:function(){this.scrollable.$viewPort.height(this.scrollable.$element.height());this.sizing.size(this.scrollable.$viewPort,this.sizing.size(this.scrollable.$element));this.viewPortSize=this.sizing.size(this.scrollable.$viewPort);this.overviewSize=this.sizing.size(this.scrollable.$overview);this.ratio=this.viewPortSize/this.overviewSize;this.sizing.size(this.$scrollBar,this.viewPortSize);this.thumbSize=Math.round(this.ratio*this.viewPortSize);this.sizing.size(this.$thumb,this.thumbSize);this.maxThumbPosition=this.calculateMaxThumbPosition();this.maxOverviewPosition=this.calculateMaxOverviewPosition();this.enabled=this.overviewSize>this.viewPortSize;if(this.scrollPercent===undefined)this.scrollPercent=0;if(this.enabled)this.rescroll();else this.setScrollPosition(0,0);this.$scrollBar.toggle(this.enabled)},initMouseMoveScrolling:function(){var t=this;this.$thumb.mousedown(function(e){if(t.enabled)t.startMouseMoveScrolling(e)});this.documentMouseup=function(e){t.stopMouseMoveScrolling(e)};e(document).mouseup(this.documentMouseup);this.documentMousemove=function(e){t.mouseMoveScroll(e)};e(document).mousemove(this.documentMousemove);this.$thumb.click(function(e){e.stopPropagation()})},removeMouseMoveScrolling:function(){this.$thumb.unbind();e(document).unbind("mouseup",this.documentMouseup);e(document).unbind("mousemove",this.documentMousemove)},initMouseWheelScrolling:function(){var e=this;this.scrollable.$element.mousewheel(function(t,i,o,s){if(e.enabled){e.mouseWheelScroll(o,s);t.preventDefault();t.stopPropagation()}})},removeMouseWheelScrolling:function(){this.scrollable.$element.unbind("mousewheel")},initTouchScrolling:function(){if(document.addEventListener){var e=this;this.elementTouchstart=function(t){if(e.enabled)e.startTouchScrolling(t)};this.scrollable.$element[0].addEventListener("touchstart",this.elementTouchstart);this.documentTouchmove=function(t){e.touchScroll(t)};document.addEventListener("touchmove",this.documentTouchmove);this.elementTouchend=function(t){e.stopTouchScrolling(t)};this.scrollable.$element[0].addEventListener("touchend",this.elementTouchend)}},removeTouchScrolling:function(){if(document.addEventListener){this.scrollable.$element[0].removeEventListener("touchstart",this.elementTouchstart);document.removeEventListener("touchmove",this.documentTouchmove);this.scrollable.$element[0].removeEventListener("touchend",this.elementTouchend)}},initMouseClickScrolling:function(){var e=this;this.scrollBarClick=function(t){e.mouseClickScroll(t)};this.$scrollBar.click(this.scrollBarClick)},removeMouseClickScrolling:function(){this.$scrollBar.unbind("click",this.scrollBarClick)},initWindowResize:function(){if(this.scrollable.options.updateOnWindowResize){var t=this;this.windowResize=function(){t.resize()};e(window).resize(this.windowResize)}},removeWindowResize:function(){e(window).unbind("resize",this.windowResize)},isKeyScrolling:function(e){return this.keyScrollDelta(e)!=null},keyScrollDelta:function(e){for(var t in this.sizing.scrollingKeys)if(t==e)return this.sizing.scrollingKeys[e](this.viewPortSize);return null},startMouseMoveScrolling:function(t){this.mouseMoveScrolling=true;e("html").addClass("not-selectable");this.setUnselectable(e("html"),"on");this.setScrollEvent(t)},stopMouseMoveScrolling:function(t){this.mouseMoveScrolling=false;e("html").removeClass("not-selectable");this.setUnselectable(e("html"),null)},setUnselectable:function(e,t){if(e.attr("unselectable")!=t){e.attr("unselectable",t);e.find(":not(input)").attr("unselectable",t)}},mouseMoveScroll:function(e){if(this.mouseMoveScrolling)this.moveScroll(e,1)},moveScroll:function(e,t){var i=this.sizing.mouseDelta(this.scrollEvent,e)*t;this.scrollBy(Math.round(i*this.overviewSize/this.viewPortSize));this.setScrollEvent(e)},startTouchScrolling:function(e){if(e.touches&&e.touches.length>0){this.setScrollEvent(e.touches[0]);this.touchScrolling=true}},touchScroll:function(e){if(this.touchScrolling&&e.touches&&e.touches.length>0){this.moveScroll(e.touches[0],-1);e.preventDefault()}},stopTouchScrolling:function(e){this.touchScrolling=false},mouseWheelScroll:function(e,t){var i=this.sizing.wheelDelta(e,t)*-20;if(i!=0)this.scrollBy(i)},mouseClickScroll:function(e){var t=this.viewPortSize-20;if(e["page"+this.sizing.scrollAxis()]<this.$thumb.offset()[this.sizing.offsetComponent()])
t=-t;this.scrollBy(t)},keyScroll:function(e){var t=e.which;if(this.enabled&&this.isKeyScrolling(t)){this.scrollBy(this.keyScrollDelta(t));e.preventDefault()}},scrollBy:function(e){var t=-this.scrollable.$overview.position()[this.sizing.offsetComponent()];t+=e;this.scrollTo(t)},scrollTo:function(e){if(e<0)e=0;if(e>this.maxOverviewPosition)e=this.maxOverviewPosition;var t=this.scrollPercent;this.scrollPercent=e/this.maxOverviewPosition;var i=this.scrollPercent*this.maxThumbPosition;this.setScrollPosition(e,i);if(t!=this.scrollPercent)this.triggerCustomScroll(t)},triggerCustomScroll:function(e){this.scrollable.$element.trigger("customScroll",{scrollAxis:this.sizing.scrollAxis(),direction:this.sizing.scrollDirection(e,this.scrollPercent),scrollPercent:Math.round(this.scrollPercent*100)})},rescroll:function(){var e=this.scrollPercent*this.maxThumbPosition;var t=this.scrollPercent*this.maxOverviewPosition;this.setScrollPosition(t,e)},setScrollPosition:function(e,t){this.$thumb.css(this.sizing.offsetComponent(),t+"px");this.scrollable.$overview.css(this.sizing.offsetComponent(),-e+"px")},calculateMaxThumbPosition:function(){return this.sizing.size(this.$scrollBar)-this.thumbSize},calculateMaxOverviewPosition:function(){return this.sizing.size(this.scrollable.$overview)-this.sizing.size(this.scrollable.$viewPort)},setScrollEvent:function(e){var t="page"+this.sizing.scrollAxis();if(!this.scrollEvent||this.scrollEvent[t]!=e[t])this.scrollEvent={pageX:e.pageX,pageY:e.pageY}},scrollToElement:function(e){var t=e;if(this.sizing.isInside(t,this.scrollable.$overview)&&!this.sizing.isInside(t,this.scrollable.$viewPort)){var i=t.offset();var o=this.scrollable.$overview.offset();var s=this.scrollable.$viewPort.offset();this.scrollTo(i[this.sizing.offsetComponent()]-o[this.sizing.offsetComponent()])}},remove:function(){this.removeMouseMoveScrolling();this.removeMouseWheelScrolling();this.removeTouchScrolling();this.removeMouseClickScrolling();this.removeWindowResize()}};var n=function(){};n.prototype={size:function(e,t){if(t)return e.width(t);else return e.width()},scrollBar:function(e){return e.find(".scroll-bar.horizontal")},mouseDelta:function(e,t){return t.pageX-e.pageX},offsetComponent:function(){return"left"},wheelDelta:function(e,t){return e},scrollAxis:function(){return"X"},scrollDirection:function(e,t){return e<t?"right":"left"},scrollingKeys:{37:function(e){return-10},39:function(e){return 10}},isInside:function(t,i){var o=e(t);var s=e(i);var l=o.offset();var n=s.offset();return l.left>=n.left&&l.left+o.width()<=n.left+s.width()}};var r=function(){};r.prototype={size:function(e,t){if(t)return e.height(t);else return e.height()},scrollBar:function(e){return e.find(".scroll-bar.vertical")},mouseDelta:function(e,t){return t.pageY-e.pageY},offsetComponent:function(){return"top"},wheelDelta:function(e,t){return t},scrollAxis:function(){return"Y"},scrollDirection:function(e,t){return e<t?"down":"up"},scrollingKeys:{38:function(e){return-10},40:function(e){return 10},33:function(e){return-(e-20)},34:function(e){return e-20}},isInside:function(t,i){var o=e(t);var s=e(i);var l=o.offset();var n=s.offset();return l.top>=n.top&&l.top+o.height()<=n.top+s.height()}};return this.each(function(){if(t==undefined)t=o;if(typeof t=="string"){var l=e(this).data("scrollable");if(l)l[t](i)}else if(typeof t=="object"){t=e.extend(o,t);new s(e(this),t)}else throw"Invalid type of options"})}})(jQuery);(function(e){var t=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks){for(var i=t.length;i;){e.event.fixHooks[t[--i]]=e.event.mouseHooks}}e.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var e=t.length;e;){this.addEventListener(t[--e],o,false)}}else{this.onmousewheel=o}},teardown:function(){if(this.removeEventListener){for(var e=t.length;e;){this.removeEventListener(t[--e],o,false)}}else{this.onmousewheel=null}}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}});function o(t){var i=t||window.event,o=[].slice.call(arguments,1),s=0,l=true,n=0,r=0;t=e.event.fix(i);t.type="mousewheel";if(i.wheelDelta){s=i.wheelDelta/120}if(i.detail){s=-i.detail/3}
r=s;if(i.axis!==undefined&&i.axis===i.HORIZONTAL_AXIS){r=0;n=s}
if(i.wheelDeltaY!==undefined){r=i.wheelDeltaY/120}if(i.wheelDeltaX!==undefined){n=i.wheelDeltaX/120}
o.unshift(t,s,n,r);return(e.event.dispatch||e.event.handle).apply(this,o)}})(jQuery);;
/*! Hammer.JS - v1.0.6dev - 2013-07-31
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */
(function(window,undefined){'use strict';var Hammer=function(element,options){return new Hammer.Instance(element,options||{});};Hammer.defaults={stop_browser_behavior:{userSelect:'none',touchAction:'none',touchCallout:'none',contentZooming:'none',userDrag:'none',tapHighlightColor:'rgba(0,0,0,0)'}};Hammer.HAS_POINTEREVENTS=window.navigator.pointerEnabled||window.navigator.msPointerEnabled;Hammer.HAS_TOUCHEVENTS=('ontouchstart'in window);Hammer.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android|silk/i;Hammer.NO_MOUSEEVENTS=Hammer.HAS_TOUCHEVENTS&&window.navigator.userAgent.match(Hammer.MOBILE_REGEX);Hammer.EVENT_TYPES={};Hammer.DIRECTION_DOWN='down';Hammer.DIRECTION_LEFT='left';Hammer.DIRECTION_UP='up';Hammer.DIRECTION_RIGHT='right';Hammer.POINTER_MOUSE='mouse';Hammer.POINTER_TOUCH='touch';Hammer.POINTER_PEN='pen';Hammer.EVENT_START='start';Hammer.EVENT_MOVE='move';Hammer.EVENT_END='end';Hammer.DOCUMENT=window.document;Hammer.plugins={};Hammer.READY=false;function setup(){if(Hammer.READY){return;}
Hammer.event.determineEventTypes();for(var name in Hammer.gestures){if(Hammer.gestures.hasOwnProperty(name)){Hammer.detection.register(Hammer.gestures[name]);}}
Hammer.event.onTouch(Hammer.DOCUMENT,Hammer.EVENT_MOVE,Hammer.detection.detect);Hammer.event.onTouch(Hammer.DOCUMENT,Hammer.EVENT_END,Hammer.detection.detect);Hammer.READY=true;}
Hammer.Instance=function(element,options){var self=this;setup();this.element=element;this.enabled=true;this.options=Hammer.utils.extend(Hammer.utils.extend({},Hammer.defaults),options||{});if(this.options.stop_browser_behavior){Hammer.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior);}
Hammer.event.onTouch(element,Hammer.EVENT_START,function(ev){if(self.enabled){Hammer.detection.startDetect(self,ev);}});return this;};Hammer.Instance.prototype={on:function onEvent(gesture,handler){var gestures=gesture.split(' ');for(var t=0;t<gestures.length;t++){this.element.addEventListener(gestures[t],handler,false);}
return this;},off:function offEvent(gesture,handler){var gestures=gesture.split(' ');for(var t=0;t<gestures.length;t++){this.element.removeEventListener(gestures[t],handler,false);}
return this;},trigger:function triggerEvent(gesture,eventData){var event=Hammer.DOCUMENT.createEvent('Event');event.initEvent(gesture,true,true);event.gesture=eventData;var element=this.element;if(Hammer.utils.hasParent(eventData.target,element)){element=eventData.target;}
element.dispatchEvent(event);return this;},enable:function enable(state){this.enabled=state;return this;}};var last_move_event=null;var enable_detect=false;var touch_triggered=false;Hammer.event={bindDom:function(element,type,handler){var types=type.split(' ');for(var t=0;t<types.length;t++){element.addEventListener(types[t],handler,false);}},onTouch:function onTouch(element,eventType,handler){var self=this;this.bindDom(element,Hammer.EVENT_TYPES[eventType],function bindDomOnTouch(ev){var sourceEventType=ev.type.toLowerCase();if(sourceEventType.match(/mouse/)&&touch_triggered){return;}
else if(sourceEventType.match(/touch/)||sourceEventType.match(/pointerdown/)||(sourceEventType.match(/mouse/)&&ev.which===1)){enable_detect=true;}
else if(sourceEventType.match(/mouse/)&&ev.which!==1){enable_detect=false;}
if(sourceEventType.match(/touch|pointer/)){touch_triggered=true;}
var count_touches=0;if(enable_detect){if(Hammer.HAS_POINTEREVENTS&&eventType!=Hammer.EVENT_END){count_touches=Hammer.PointerEvent.updatePointer(eventType,ev);}
else if(sourceEventType.match(/touch/)){count_touches=ev.touches.length;}
else if(!touch_triggered){count_touches=sourceEventType.match(/up/)?0:1;}
if(count_touches>0&&eventType==Hammer.EVENT_END){eventType=Hammer.EVENT_MOVE;}
else if(!count_touches){eventType=Hammer.EVENT_END;}
if(count_touches||last_move_event===null){last_move_event=ev;}
handler.call(Hammer.detection,self.collectEventData(element,eventType,self.getTouchList(last_move_event,eventType),ev));if(Hammer.HAS_POINTEREVENTS&&eventType==Hammer.EVENT_END){count_touches=Hammer.PointerEvent.updatePointer(eventType,ev);}}
if(!count_touches){last_move_event=null;enable_detect=false;touch_triggered=false;Hammer.PointerEvent.reset();}});},determineEventTypes:function determineEventTypes(){var types;if(Hammer.HAS_POINTEREVENTS){types=Hammer.PointerEvent.getEvents();}
else if(Hammer.NO_MOUSEEVENTS){types=['touchstart','touchmove','touchend touchcancel'];}
else{types=['touchstart mousedown','touchmove mousemove','touchend touchcancel mouseup'];}
Hammer.EVENT_TYPES[Hammer.EVENT_START]=types[0];Hammer.EVENT_TYPES[Hammer.EVENT_MOVE]=types[1];Hammer.EVENT_TYPES[Hammer.EVENT_END]=types[2];},getTouchList:function getTouchList(ev){if(Hammer.HAS_POINTEREVENTS){return Hammer.PointerEvent.getTouchList();}
else if(ev.touches){return ev.touches;}
else{ev.indentifier=1;return[ev];}},collectEventData:function collectEventData(element,eventType,touches,ev){var pointerType=Hammer.POINTER_TOUCH;if(ev.type.match(/mouse/)||Hammer.PointerEvent.matchType(Hammer.POINTER_MOUSE,ev)){pointerType=Hammer.POINTER_MOUSE;}
return{center:Hammer.utils.getCenter(touches),timeStamp:new Date().getTime(),target:ev.target,touches:touches,eventType:eventType,pointerType:pointerType,srcEvent:ev,preventDefault:function(){if(this.srcEvent.preventManipulation){this.srcEvent.preventManipulation();}
if(this.srcEvent.preventDefault){this.srcEvent.preventDefault();}},stopPropagation:function(){this.srcEvent.stopPropagation();},stopDetect:function(){return Hammer.detection.stopDetect();}};}};Hammer.PointerEvent={pointers:{},getTouchList:function(){var self=this;var touchlist=[];Object.keys(self.pointers).sort().forEach(function(id){touchlist.push(self.pointers[id]);});return touchlist;},updatePointer:function(type,pointerEvent){if(type==Hammer.EVENT_END){this.pointers={};}
else{pointerEvent.identifier=pointerEvent.pointerId;this.pointers[pointerEvent.pointerId]=pointerEvent;}
return Object.keys(this.pointers).length;},matchType:function(pointerType,ev){if(!ev.pointerType){return false;}
var types={};types[Hammer.POINTER_MOUSE]=(ev.pointerType==ev.MSPOINTER_TYPE_MOUSE||ev.pointerType==Hammer.POINTER_MOUSE);types[Hammer.POINTER_TOUCH]=(ev.pointerType==ev.MSPOINTER_TYPE_TOUCH||ev.pointerType==Hammer.POINTER_TOUCH);types[Hammer.POINTER_PEN]=(ev.pointerType==ev.MSPOINTER_TYPE_PEN||ev.pointerType==Hammer.POINTER_PEN);return types[pointerType];},getEvents:function(){return['pointerdown MSPointerDown','pointermove MSPointerMove','pointerup pointercancel MSPointerUp MSPointerCancel'];},reset:function(){this.pointers={};}};Hammer.utils={extend:function extend(dest,src,merge){for(var key in src){if(dest[key]!==undefined&&merge){continue;}
dest[key]=src[key];}
return dest;},hasParent:function(node,parent){while(node){if(node==parent){return true;}
node=node.parentNode;}
return false;},getCenter:function getCenter(touches){var valuesX=[],valuesY=[];for(var t=0,len=touches.length;t<len;t++){valuesX.push(touches[t].pageX);valuesY.push(touches[t].pageY);}
return{pageX:((Math.min.apply(Math,valuesX)+Math.max.apply(Math,valuesX))/2),pageY:((Math.min.apply(Math,valuesY)+Math.max.apply(Math,valuesY))/2)};},getVelocity:function getVelocity(delta_time,delta_x,delta_y){return{x:Math.abs(delta_x/delta_time)||0,y:Math.abs(delta_y/delta_time)||0};},getAngle:function getAngle(touch1,touch2){var y=touch2.pageY-touch1.pageY,x=touch2.pageX-touch1.pageX;return Math.atan2(y,x)*180/Math.PI;},getDirection:function getDirection(touch1,touch2){var x=Math.abs(touch1.pageX-touch2.pageX),y=Math.abs(touch1.pageY-touch2.pageY);if(x>=y){return touch1.pageX-touch2.pageX>0?Hammer.DIRECTION_LEFT:Hammer.DIRECTION_RIGHT;}
else{return touch1.pageY-touch2.pageY>0?Hammer.DIRECTION_UP:Hammer.DIRECTION_DOWN;}},getDistance:function getDistance(touch1,touch2){var x=touch2.pageX-touch1.pageX,y=touch2.pageY-touch1.pageY;return Math.sqrt((x*x)+(y*y));},getScale:function getScale(start,end){if(start.length>=2&&end.length>=2){return this.getDistance(end[0],end[1])/this.getDistance(start[0],start[1]);}
return 1;},getRotation:function getRotation(start,end){if(start.length>=2&&end.length>=2){return this.getAngle(end[1],end[0])-
this.getAngle(start[1],start[0]);}
return 0;},isVertical:function isVertical(direction){return(direction==Hammer.DIRECTION_UP||direction==Hammer.DIRECTION_DOWN);},stopDefaultBrowserBehavior:function stopDefaultBrowserBehavior(element,css_props){var prop,vendors=['webkit','khtml','moz','Moz','ms','o',''];if(!css_props||!element.style){return;}
for(var i=0;i<vendors.length;i++){for(var p in css_props){if(css_props.hasOwnProperty(p)){prop=p;if(vendors[i]){prop=vendors[i]+prop.substring(0,1).toUpperCase()+prop.substring(1);}
element.style[prop]=css_props[p];}}}
if(css_props.userSelect=='none'){element.onselectstart=function(){return false;};}}};Hammer.detection={gestures:[],current:null,previous:null,stopped:false,startDetect:function startDetect(inst,eventData){if(this.current){return;}
this.stopped=false;this.current={inst:inst,startEvent:Hammer.utils.extend({},eventData),lastEvent:false,name:''};this.detect(eventData);},detect:function detect(eventData){if(!this.current||this.stopped){return;}
eventData=this.extendEventData(eventData);var inst_options=this.current.inst.options;for(var g=0,len=this.gestures.length;g<len;g++){var gesture=this.gestures[g];if(!this.stopped&&inst_options[gesture.name]!==false){if(gesture.handler.call(gesture,eventData,this.current.inst)===false){this.stopDetect();break;}}}
if(this.current){this.current.lastEvent=eventData;}
if(eventData.eventType==Hammer.EVENT_END&&!eventData.touches.length-1){this.stopDetect();}
return eventData;},stopDetect:function stopDetect(){this.previous=Hammer.utils.extend({},this.current);this.current=null;this.stopped=true;},extendEventData:function extendEventData(ev){var startEv=this.current.startEvent;if(startEv&&(ev.touches.length!=startEv.touches.length||ev.touches===startEv.touches)){startEv.touches=[];for(var i=0,len=ev.touches.length;i<len;i++){startEv.touches.push(Hammer.utils.extend({},ev.touches[i]));}}
var delta_time=ev.timeStamp-startEv.timeStamp,delta_x=ev.center.pageX-startEv.center.pageX,delta_y=ev.center.pageY-startEv.center.pageY,velocity=Hammer.utils.getVelocity(delta_time,delta_x,delta_y);Hammer.utils.extend(ev,{deltaTime:delta_time,deltaX:delta_x,deltaY:delta_y,velocityX:velocity.x,velocityY:velocity.y,distance:Hammer.utils.getDistance(startEv.center,ev.center),angle:Hammer.utils.getAngle(startEv.center,ev.center),direction:Hammer.utils.getDirection(startEv.center,ev.center),scale:Hammer.utils.getScale(startEv.touches,ev.touches),rotation:Hammer.utils.getRotation(startEv.touches,ev.touches),startEvent:startEv});return ev;},register:function register(gesture){var options=gesture.defaults||{};if(options[gesture.name]===undefined){options[gesture.name]=true;}
Hammer.utils.extend(Hammer.defaults,options,true);gesture.index=gesture.index||1000;this.gestures.push(gesture);this.gestures.sort(function(a,b){if(a.index<b.index){return-1;}
if(a.index>b.index){return 1;}
return 0;});return this.gestures;}};Hammer.gestures=Hammer.gestures||{};Hammer.gestures.Hold={name:'hold',index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function holdGesture(ev,inst){switch(ev.eventType){case Hammer.EVENT_START:clearTimeout(this.timer);Hammer.detection.current.name=this.name;this.timer=setTimeout(function(){if(Hammer.detection.current.name=='hold'){inst.trigger('hold',ev);}},inst.options.hold_timeout);break;case Hammer.EVENT_MOVE:if(ev.distance>inst.options.hold_threshold){clearTimeout(this.timer);}
break;case Hammer.EVENT_END:clearTimeout(this.timer);break;}}};Hammer.gestures.Tap={name:'tap',index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:true,doubletap_distance:20,doubletap_interval:300},handler:function tapGesture(ev,inst){if(ev.eventType==Hammer.EVENT_END){var prev=Hammer.detection.previous,did_doubletap=false;if(ev.deltaTime>inst.options.tap_max_touchtime||ev.distance>inst.options.tap_max_distance){return;}
if(prev&&prev.name=='tap'&&(ev.timeStamp-prev.lastEvent.timeStamp)<inst.options.doubletap_interval&&ev.distance<inst.options.doubletap_distance){inst.trigger('doubletap',ev);did_doubletap=true;}
if(!did_doubletap||inst.options.tap_always){Hammer.detection.current.name='tap';inst.trigger(Hammer.detection.current.name,ev);}}}};Hammer.gestures.Swipe={name:'swipe',index:40,defaults:{swipe_max_touches:1,swipe_velocity:0.7},handler:function swipeGesture(ev,inst){if(ev.eventType==Hammer.EVENT_END){if(inst.options.swipe_max_touches>0&&ev.touches.length>inst.options.swipe_max_touches){return;}
if(ev.velocityX>inst.options.swipe_velocity||ev.velocityY>inst.options.swipe_velocity){inst.trigger(this.name,ev);inst.trigger(this.name+ev.direction,ev);}}}};Hammer.gestures.Drag={name:'drag',index:50,defaults:{drag_min_distance:10,correct_for_drag_min_distance:true,drag_max_touches:1,drag_block_horizontal:false,drag_block_vertical:false,drag_lock_to_axis:false,drag_lock_min_distance:25},triggered:false,handler:function dragGesture(ev,inst){if(Hammer.detection.current.name!=this.name&&this.triggered){inst.trigger(this.name+'end',ev);this.triggered=false;return;}
if(inst.options.drag_max_touches>0&&ev.touches.length>inst.options.drag_max_touches){return;}
switch(ev.eventType){case Hammer.EVENT_START:this.triggered=false;break;case Hammer.EVENT_MOVE:if(ev.distance<inst.options.drag_min_distance&&Hammer.detection.current.name!=this.name){return;}
if(Hammer.detection.current.name!=this.name){Hammer.detection.current.name=this.name;if(inst.options.correct_for_drag_min_distance){var factor=Math.abs(inst.options.drag_min_distance/ev.distance);Hammer.detection.current.startEvent.center.pageX+=ev.deltaX*factor;Hammer.detection.current.startEvent.center.pageY+=ev.deltaY*factor;ev=Hammer.detection.extendEventData(ev);}}
if(Hammer.detection.current.lastEvent.drag_locked_to_axis||(inst.options.drag_lock_to_axis&&inst.options.drag_lock_min_distance<=ev.distance)){ev.drag_locked_to_axis=true;}
var last_direction=Hammer.detection.current.lastEvent.direction;if(ev.drag_locked_to_axis&&last_direction!==ev.direction){if(Hammer.utils.isVertical(last_direction)){ev.direction=(ev.deltaY<0)?Hammer.DIRECTION_UP:Hammer.DIRECTION_DOWN;}
else{ev.direction=(ev.deltaX<0)?Hammer.DIRECTION_LEFT:Hammer.DIRECTION_RIGHT;}}
if(!this.triggered){inst.trigger(this.name+'start',ev);this.triggered=true;}
inst.trigger(this.name,ev);inst.trigger(this.name+ev.direction,ev);if((inst.options.drag_block_vertical&&Hammer.utils.isVertical(ev.direction))||(inst.options.drag_block_horizontal&&!Hammer.utils.isVertical(ev.direction))){ev.preventDefault();}
break;case Hammer.EVENT_END:if(this.triggered){inst.trigger(this.name+'end',ev);}
this.triggered=false;break;}}};Hammer.gestures.Transform={name:'transform',index:45,defaults:{transform_min_scale:0.01,transform_min_rotation:1,transform_always_block:false},triggered:false,handler:function transformGesture(ev,inst){if(Hammer.detection.current.name!=this.name&&this.triggered){inst.trigger(this.name+'end',ev);this.triggered=false;return;}
if(ev.touches.length<2){return;}
if(inst.options.transform_always_block){ev.preventDefault();}
switch(ev.eventType){case Hammer.EVENT_START:this.triggered=false;break;case Hammer.EVENT_MOVE:var scale_threshold=Math.abs(1-ev.scale);var rotation_threshold=Math.abs(ev.rotation);if(scale_threshold<inst.options.transform_min_scale&&rotation_threshold<inst.options.transform_min_rotation){return;}
Hammer.detection.current.name=this.name;if(!this.triggered){inst.trigger(this.name+'start',ev);this.triggered=true;}
inst.trigger(this.name,ev);if(rotation_threshold>inst.options.transform_min_rotation){inst.trigger('rotate',ev);}
if(scale_threshold>inst.options.transform_min_scale){inst.trigger('pinch',ev);inst.trigger('pinch'+((ev.scale<1)?'in':'out'),ev);}
break;case Hammer.EVENT_END:if(this.triggered){inst.trigger(this.name+'end',ev);}
this.triggered=false;break;}}};Hammer.gestures.Touch={name:'touch',index:-Infinity,defaults:{prevent_default:false,prevent_mouseevents:false},handler:function touchGesture(ev,inst){if(inst.options.prevent_mouseevents&&ev.pointerType==Hammer.POINTER_MOUSE){ev.stopDetect();return;}
if(inst.options.prevent_default){ev.preventDefault();}
if(ev.eventType==Hammer.EVENT_START){inst.trigger(this.name,ev);}}};Hammer.gestures.Release={name:'release',index:Infinity,handler:function releaseGesture(ev,inst){if(ev.eventType==Hammer.EVENT_END){inst.trigger(this.name,ev);}}};if(typeof define=='function'&&typeof define.amd=='object'&&define.amd){define(function(){return Hammer;});}
else if(typeof module==='object'&&typeof module.exports==='object'){module.exports=Hammer;}
else{window.Hammer=Hammer;}})(this);(function($,undefined){'use strict';if($===undefined){return;}
Hammer.event.bindDom=function(element,eventTypes,handler){$(element).on(eventTypes,function(ev){var data=ev.originalEvent||ev;if(data.pageX===undefined){data.pageX=ev.pageX;data.pageY=ev.pageY;}
if(!data.target){data.target=ev.target;}
if(data.which===undefined){data.which=data.button;}
if(!data.preventDefault){data.preventDefault=ev.preventDefault;}
if(!data.stopPropagation){data.stopPropagation=ev.stopPropagation;}
handler.call(this,data);});};Hammer.Instance.prototype.on=function(types,handler){return $(this.element).on(types,handler);};Hammer.Instance.prototype.off=function(types,handler){return $(this.element).off(types,handler);};Hammer.Instance.prototype.trigger=function(gesture,eventData){var el=$(this.element);if(el.has(eventData.target).length){el=$(eventData.target);}
return el.trigger({type:gesture,gesture:eventData});};$.fn.hammer=function(options){return this.each(function(){var el=$(this);var inst=el.data('hammer');if(!inst){el.data('hammer',new Hammer(this,options||{}));}
else if(inst&&options){Hammer.utils.extend(inst.options,options);}});};})(window.jQuery||window.Zepto);;(function(e){function n(n,r,i,s){function f(){o.afterLoaded();o.settings.hideFramesUntilPreloaded&&o.settings.preloader!==undefined&&o.settings.preloader!==!1&&o.frames.show();if(o.settings.preloader!==undefined&&o.settings.preloader!==!1)if(o.settings.hidePreloaderUsingCSS&&o.transitionsSupported){o.prependPreloadingCompleteTo=o.settings.prependPreloadingComplete===!0?o.settings.preloader:e(o.settings.prependPreloadingComplete);o.prependPreloadingCompleteTo.addClass("preloading-complete");setTimeout(g,o.settings.hidePreloaderDelay)}else o.settings.preloader.fadeOut(o.settings.hidePreloaderDelay,function(){clearInterval(o.defaultPreloader);g()});else g()}function h(t,n){var r=[];if(!n)for(var i=t;i>0;i--)o.frames.eq(o.settings.preloadTheseFrames[i-1]-1).find("img").each(function(){r.push(e(this)[0])});else for(var s=t;s>0;s--)r.push(e("body").find('img[src="'+o.settings.preloadTheseImages[s-1]+'"]'));return r}function p(t,n){function c(){var t=e(f),r=e(l);s&&(l.length?s.reject(u,t,r):s.resolve(u));e.isFunction(n)&&n.call(i,u,t,r)}function h(t,n){if(t.src===r||e.inArray(t,a)!==-1)return;a.push(t);n?l.push(t):f.push(t);e.data(t,"imagesLoaded",{isBroken:n,src:t.src});o&&s.notifyWith(e(t),[n,u,e(f),e(l)]);if(u.length===a.length){setTimeout(c);u.unbind(".imagesLoaded")}}var r="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",i=t,s=e.isFunction(e.Deferred)?e.Deferred():0,o=e.isFunction(s.notify),u=i.find("img").add(i.filter("img")),a=[],f=[],l=[];e.isPlainObject(n)&&e.each(n,function(e,t){e==="callback"?n=t:s&&s[e](t)});u.length?u.bind("load.imagesLoaded error.imagesLoaded",function(e){h(e.target,e.type==="error")}).each(function(t,n){var i=n.src,s=e.data(n,"imagesLoaded");if(s&&s.src===i){h(n,s.isBroken);return}if(n.complete&&n.naturalWidth!==undefined){h(n,n.naturalWidth===0||n.naturalHeight===0);return}if(n.readyState||n.complete){n.src=r;n.src=i}}):c()}function g(){function t(e,t){var r,i;for(i in t){i==="left"||i==="right"?r=n[i]:r=i;e===parseFloat(r)&&o._initCustomKeyEvent(t[i])}}function r(){o.canvas.on("touchmove.sequence",i);u=null;f=!1}function i(e){o.settings.swipePreventsDefault&&e.preventDefault();if(f){var t=e.originalEvent.touches[0].pageX,n=e.originalEvent.touches[0].pageY,i=u-t,s=a-n;if(Math.abs(i)>=o.settings.swipeThreshold){r();i>0?o._initCustomKeyEvent(o.settings.swipeEvents.left):o._initCustomKeyEvent(o.settings.swipeEvents.right)}else if(Math.abs(s)>=o.settings.swipeThreshold){r();s>0?o._initCustomKeyEvent(o.settings.swipeEvents.down):o._initCustomKeyEvent(o.settings.swipeEvents.up)}}}function s(e){if(e.originalEvent.touches.length===1){u=e.originalEvent.touches[0].pageX;a=e.originalEvent.touches[0].pageY;f=!0;o.canvas.on("touchmove.sequence",i)}}e(o.settings.preloader).remove();o.nextButton=o._renderUiElements(o.settings.nextButton,".sequence-next");o.prevButton=o._renderUiElements(o.settings.prevButton,".sequence-prev");o.pauseButton=o._renderUiElements(o.settings.pauseButton,".sequence-pause");o.pagination=o._renderUiElements(o.settings.pagination,".sequence-pagination");o.nextButton!==undefined&&o.nextButton!==!1&&o.settings.showNextButtonOnInit===!0&&o.nextButton.show();o.prevButton!==undefined&&o.prevButton!==!1&&o.settings.showPrevButtonOnInit===!0&&o.prevButton.show();o.pauseButton!==undefined&&o.pauseButton!==!1&&o.settings.showPauseButtonOnInit===!0&&o.pauseButton.show();if(o.settings.pauseIcon!==!1){o.pauseIcon=o._renderUiElements(o.settings.pauseIcon,".sequence-pause-icon");o.pauseIcon!==undefined&&o.pauseIcon.hide()}else o.pauseIcon=undefined;if(o.pagination!==undefined&&o.pagination!==!1){o.paginationLinks=o.pagination.children();o.paginationLinks.on("click.sequence",function(){var t=e(this).index()+1;o.goTo(t)});o.settings.showPaginationOnInit===!0&&o.pagination.show()}o.nextFrameID=o.settings.startingFrameID;if(o.settings.hashTags===!0){o.frames.each(function(){o.frameHashID.push(e(this).prop(o.getHashTagFrom))});o.currentHashTag=location.hash.replace("#","");if(o.currentHashTag===undefined||o.currentHashTag==="")o.nextFrameID=o.settings.startingFrameID;else{o.frameHashIndex=e.inArray(o.currentHashTag,o.frameHashID);o.frameHashIndex!==-1?o.nextFrameID=o.frameHashIndex+1:o.nextFrameID=o.settings.startingFrameID}}o.nextFrame=o.frames.eq(o.nextFrameID-1);o.nextFrameChildren=o.nextFrame.children();o.pagination!==undefined&&e(o.paginationLinks[o.settings.startingFrameID-1]).addClass("current");if(o.transitionsSupported)if(!o.settings.animateStartingFrameIn){o.currentFrameID=o.nextFrameID;o.settings.moveActiveFrameToTop&&o.nextFrame.css("z-index",o.numberOfFrames);o._resetElements(o.transitionPrefix,o.nextFrameChildren,"0s");o.nextFrame.addClass("animate-in");if(o.settings.hashTags&&o.settings.hashChangesOnFirstFrame){o.currentHashTag=o.nextFrame.prop(o.getHashTagFrom);document.location.hash="#"+o.currentHashTag}setTimeout(function(){o._resetElements(o.transitionPrefix,o.nextFrameChildren,"")},100);o._resetAutoPlay(!0,o.settings.autoPlayDelay)}else if(o.settings.reverseAnimationsWhenNavigatingBackwards&&o.settings.autoPlayDirection-1&&o.settings.animateStartingFrameIn){o._resetElements(o.transitionPrefix,o.nextFrameChildren,"0s");o.nextFrame.addClass("animate-out");o.goTo(o.nextFrameID,-1,!0)}else o.goTo(o.nextFrameID,1,!0);else{o.container.addClass("sequence-fallback");o.currentFrameID=o.nextFrameID;if(o.settings.hashTags&&o.settings.hashChangesOnFirstFrame){o.currentHashTag=o.nextFrame.prop(o.getHashTagFrom);document.location.hash="#"+o.currentHashTag}o.frames.addClass("animate-in");o.frames.not(":eq("+(o.nextFrameID-1)+")").css({display:"none",opacity:0});o._resetAutoPlay(!0,o.settings.autoPlayDelay)}o.nextButton!==undefined&&o.nextButton.bind("click.sequence",function(){o.next()});o.prevButton!==undefined&&o.prevButton.bind("click.sequence",function(){o.prev()});o.pauseButton!==undefined&&o.pauseButton.bind("click.sequence",function(){o.pause(!0)});if(o.settings.keyNavigation){var n={left:37,right:39};e(document).bind("keydown.sequence",function(e){var n=String.fromCharCode(e.keyCode);if(n>0&&n<=o.numberOfFrames&&o.settings.numericKeysGoToFrames){o.nextFrameID=n;o.goTo(o.nextFrameID)}t(e.keyCode,o.settings.keyEvents);t(e.keyCode,o.settings.customKeyEvents)})}o.canvas.on({"mouseenter.sequence":function(){if(o.settings.pauseOnHover&&o.settings.autoPlay&&!o.hasTouch){o.isBeingHoveredOver=!0;o.isHardPaused||o.pause()}},"mouseleave.sequence":function(){if(o.settings.pauseOnHover&&o.settings.autoPlay&&!o.hasTouch){o.isBeingHoveredOver=!1;o.isHardPaused||o.unpause()}}});o.settings.hashTags&&e(window).bind("hashchange.sequence",function(){var t=location.hash.replace("#","");if(o.currentHashTag!==t){o.currentHashTag=t;o.frameHashIndex=e.inArray(o.currentHashTag,o.frameHashID);if(o.frameHashIndex!==-1){o.nextFrameID=o.frameHashIndex+1;o.goTo(o.nextFrameID)}}});if(o.settings.swipeNavigation&&o.hasTouch){var u,a,f=!1;o.canvas.on("touchstart.sequence",s)}}var o=this;o.container=e(n);o.canvas=o.container.children(".sequence-canvas");o.frames=o.canvas.children("li");o._modernizrForSequence();var u={WebkitTransition:"-webkit-",WebkitAnimation:"-webkit-",MozTransition:"-moz-","MozAnimation ":"-moz-",OTransition:"-o-",OAnimation:"-o-",msTransition:"-ms-",msAnimation:"-ms-",transition:"",animation:""},a={WebkitTransition:"webkitTransitionEnd.sequence",WebkitAnimation:"webkitAnimationEnd.sequence",MozTransition:"transitionend.sequence",MozAnimation:"animationend.sequence",OTransition:"otransitionend.sequence",OAnimation:"oanimationend.sequence",msTransition:"MSTransitionEnd.sequence",msAnimation:"MSAnimationEnd.sequence",transition:"transitionend.sequence",animation:"animationend.sequence"};o.transitionPrefix=u[ModernizrForSequence.prefixed("transition")],o.animationPrefix=u[ModernizrForSequence.prefixed("animation")],o.transitionProperties={},o.transitionEnd=a[ModernizrForSequence.prefixed("transition")]+" "+a[ModernizrForSequence.prefixed("animation")],o.numberOfFrames=o.frames.length,o.transitionsSupported=o.transitionPrefix!==undefined?!0:!1,o.hasTouch="ontouchstart"in window?!0:!1,o.isPaused=!1,o.isBeingHoveredOver=!1,o.container.removeClass("sequence-destroyed");o.paused=function(){},o.unpaused=function(){},o.beforeNextFrameAnimatesIn=function(){},o.afterNextFrameAnimatesIn=function(){},o.beforeCurrentFrameAnimatesOut=function(){},o.afterCurrentFrameAnimatesOut=function(){},o.afterLoaded=function(){};o.destroyed=function(){};o.settings=e.extend({},i,r);o.settings.preloader=o._renderUiElements(o.settings.preloader,".sequence-preloader");o.isStartingFrame=o.settings.animateStartingFrameIn?!0:!1;o.settings.unpauseDelay=o.settings.unpauseDelay===null?o.settings.autoPlayDelay:o.settings.unpauseDelay;o.getHashTagFrom=o.settings.hashDataAttribute?"data-sequence-hashtag":"id";o.frameHashID=[];o.direction=o.settings.autoPlayDirection;o.settings.hideFramesUntilPreloaded&&o.settings.preloader!==undefined&&o.settings.preloader!==!1&&o.frames.hide();o.transitionPrefix==="-o-"&&(o.transitionsSupported=o._operaTest());o.frames.removeClass("animate-in");var l=o.settings.preloadTheseFrames.length,c=o.settings.preloadTheseImages.length;if(o.settings.preloader===undefined||o.settings.preloader===!1||l===0&&c===0)if(t===!0){f();e(this).unbind("load.sequence")}else e(window).bind("load.sequence",function(){f();e(this).unbind("load.sequence")});else{var d=h(l),v=h(c,!0),m=e(d.concat(v));p(m,f)}}var t=!1;e(window).bind("load",function(){t=!0});n.prototype={startAutoPlay:function(e){var t=this;e=e===undefined?t.settings.autoPlayDelay:e;t.unpause();t._resetAutoPlay();t.autoPlayTimer=setTimeout(function(){t.settings.autoPlayDirection===1?t.next():t.prev()},e)},stopAutoPlay:function(){var e=this;e.pause(!0);clearTimeout(e.autoPlayTimer)},pause:function(e){var t=this;if(!t.isSoftPaused){if(t.pauseButton!==undefined){t.pauseButton.addClass("paused");t.pauseIcon!==undefined&&t.pauseIcon.show()}t.paused();t.isSoftPaused=!0;t.isHardPaused=e?!0:!1;t.isPaused=!0;t._resetAutoPlay()}else t.unpause()},unpause:function(e){var t=this;if(t.pauseButton!==undefined){t.pauseButton.removeClass("paused");t.pauseIcon!==undefined&&t.pauseIcon.hide()}t.isSoftPaused=!1;t.isHardPaused=!1;t.isPaused=!1;if(!t.active){e!==!1&&t.unpaused();t._resetAutoPlay(!0,t.settings.unpauseDelay)}else t.delayUnpause=!0},next:function(){var e=this;id=e.currentFrameID!==e.numberOfFrames?e.currentFrameID+1:1;e.active===!1||e.active===undefined?e.goTo(id,1):e.goTo(id,1,!0)},prev:function(){var e=this;id=e.currentFrameID===1?e.numberOfFrames:e.currentFrameID-1;e.active===!1||e.active===undefined?e.goTo(id,-1):e.goTo(id,-1,!0)},goTo:function(t,n,r){var i=this;i.nextFrameID=parseFloat(t);var s=r===!0?0:i.settings.transitionThreshold;if(i.nextFrameID===i.currentFrameID||i.settings.navigationSkip&&i.navigationSkipThresholdActive||!i.settings.navigationSkip&&i.active||!i.transitionsSupported&&i.active||!i.settings.cycle&&n===1&&i.currentFrameID===i.numberOfFrames||!i.settings.cycle&&n===-1&&i.currentFrameID===1||i.settings.preventReverseSkipping&&i.direction!==n&&i.active)return!1;if(i.settings.navigationSkip&&i.active){i.navigationSkipThresholdActive=!0;i.settings.fadeFrameWhenSkipped&&i.nextFrame.stop().animate({opacity:0},i.settings.fadeFrameTime);clearTimeout(i.transitionThresholdTimer);setTimeout(function(){i.navigationSkipThresholdActive=!1},i.settings.navigationSkipThreshold)}if(!i.active||i.settings.navigationSkip){i.active=!0;i._resetAutoPlay();n===undefined?i.direction=i.nextFrameID>i.currentFrameID?1:-1:i.direction=n;i.currentFrame=i.canvas.children(".animate-in");i.nextFrame=i.frames.eq(i.nextFrameID-1);i.currentFrameChildren=i.currentFrame.children();i.nextFrameChildren=i.nextFrame.children();if(i.pagination!==undefined){i.paginationLinks.removeClass("current");e(i.paginationLinks[i.nextFrameID-1]).addClass("current")}if(i.transitionsSupported){if(i.currentFrame.length!==undefined){i.beforeCurrentFrameAnimatesOut();i.settings.moveActiveFrameToTop&&i.currentFrame.css("z-index",1);i._resetElements(i.transitionPrefix,i.nextFrameChildren,"0s");if(!i.settings.reverseAnimationsWhenNavigatingBackwards||i.direction===1){i.nextFrame.removeClass("animate-out");i._resetElements(i.transitionPrefix,i.currentFrameChildren,"")}else if(i.settings.reverseAnimationsWhenNavigatingBackwards&&i.direction===-1){i.nextFrame.addClass("animate-out");i._reverseTransitionProperties()}}else i.isStartingFrame=!1;i.active=!0;i.currentFrame.unbind(i.transitionEnd);i.nextFrame.unbind(i.transitionEnd);i.settings.fadeFrameWhenSkipped&&i.settings.navigationSkip&&i.nextFrame.css("opacity",1);i.beforeNextFrameAnimatesIn();i.settings.moveActiveFrameToTop&&i.nextFrame.css("z-index",i.numberOfFrames);if(!i.settings.reverseAnimationsWhenNavigatingBackwards||i.direction===1){setTimeout(function(){i._resetElements(i.transitionPrefix,i.nextFrameChildren,"");i._waitForAnimationsToComplete(i.nextFrame,i.nextFrameChildren,"in");(i.afterCurrentFrameAnimatesOut!=="function () {}"||i.settings.transitionThreshold===!0&&r!==!0)&&i._waitForAnimationsToComplete(i.currentFrame,i.currentFrameChildren,"out",!0,1)},50);setTimeout(function(){if(i.settings.transitionThreshold===!1||i.settings.transitionThreshold===0||r===!0){i.currentFrame.toggleClass("animate-out animate-in");i.nextFrame.addClass("animate-in")}else{i.currentFrame.toggleClass("animate-out animate-in");i.settings.transitionThreshold!==!0&&(i.transitionThresholdTimer=setTimeout(function(){i.nextFrame.addClass("animate-in")},s))}},50)}else if(i.settings.reverseAnimationsWhenNavigatingBackwards&&i.direction===-1){setTimeout(function(){i._resetElements(i.transitionPrefix,i.currentFrameChildren,"");i._resetElements(i.transitionPrefix,i.nextFrameChildren,"");i._reverseTransitionProperties();i._waitForAnimationsToComplete(i.nextFrame,i.nextFrameChildren,"in");(i.afterCurrentFrameAnimatesOut!=="function () {}"||i.settings.transitionThreshold===!0&&r!==!0)&&i._waitForAnimationsToComplete(i.currentFrame,i.currentFrameChildren,"out",!0,-1)},50);setTimeout(function(){if(i.settings.transitionThreshold===!1||i.settings.transitionThreshold===0||r===!0){i.currentFrame.removeClass("animate-in");i.nextFrame.toggleClass("animate-out animate-in")}else{i.currentFrame.removeClass("animate-in");i.settings.transitionThreshold!==!0&&(i.transitionThresholdTimer=setTimeout(function(){i.nextFrame.toggleClass("animate-out animate-in")},s))}},50)}}else{function o(){i._setHashTag();i.active=!1;i._resetAutoPlay(!0,i.settings.autoPlayDelay)}switch(i.settings.fallback.theme){case"fade":i.frames.css({position:"relative"});i.beforeCurrentFrameAnimatesOut();i.currentFrame=i.frames.eq(i.currentFrameID-1);i.currentFrame.animate({opacity:0},i.settings.fallback.speed,function(){i.currentFrame.css({display:"none","z-index":"1"});i.afterCurrentFrameAnimatesOut();i.beforeNextFrameAnimatesIn();i.nextFrame.css({display:"block","z-index":i.numberOfFrames}).animate({opacity:1},500,function(){i.afterNextFrameAnimatesIn()});o()});i.frames.css({position:"relative"});break;case"slide":default:var u={},a={},f={};if(i.direction===1){u.left="-100%";a.left="100%"}else{u.left="100%";a.left="-100%"}f.left="0";f.opacity=1;i.currentFrame=i.frames.eq(i.currentFrameID-1);i.beforeCurrentFrameAnimatesOut();i.currentFrame.animate(u,i.settings.fallback.speed,function(){i.currentFrame.css({display:"none","z-index":"1"});i.afterCurrentFrameAnimatesOut()});i.beforeNextFrameAnimatesIn();i.nextFrame.show().css(a);i.nextFrame.css({display:"block","z-index":i.numberOfFrames}).animate(f,i.settings.fallback.speed,function(){o();i.afterNextFrameAnimatesIn()})}}i.currentFrameID=i.nextFrameID}},destroy:function(t){var n=this;n.container.addClass("sequence-destroyed");n.nextButton!==undefined&&n.nextButton.unbind("click.sequence");n.prevButton!==undefined&&n.prevButton.unbind("click.sequence");n.pauseButton!==undefined&&n.pauseButton.unbind("click.sequence");n.pagination!==undefined&&n.paginationLinks.unbind("click.sequence");e(document).unbind("keydown.sequence");n.canvas.unbind("mouseenter.sequence, mouseleave.sequence, touchstart.sequence, touchmove.sequence");e(window).unbind("hashchange.sequence");n.stopAutoPlay();clearTimeout(n.transitionThresholdTimer);n.canvas.children("li").remove();n.canvas.prepend(n.frames);n.frames.removeClass("animate-in animate-out").removeAttr("style");n.frames.eq(n.currentFrameID-1).addClass("animate-in");n.nextButton!==undefined&&n.nextButton!==!1&&n.nextButton.hide();n.prevButton!==undefined&&n.prevButton!==!1&&n.prevButton.hide();n.pauseButton!==undefined&&n.pauseButton!==!1&&n.pauseButton.hide();n.pauseIcon!==undefined&&n.pauseIcon!==!1&&n.pauseIcon.hide();n.pagination!==undefined&&n.pagination!==!1&&n.pagination.hide();t!==undefined&&t();n.destroyed();n.container.removeData()},_initCustomKeyEvent:function(e){var t=this;switch(e){case"next":t.next();break;case"prev":t.prev();break;case"pause":t.pause(!0)}},_resetElements:function(e,t,n){var r=this;t.css(r._prefixCSS(e,{"transition-duration":n,"transition-delay":n,"transition-timing-function":""}))},_reverseTransitionProperties:function(){var t=this,n=[],r=[];t.currentFrameChildren.each(function(){n.push(parseFloat(e(this).css(t.transitionPrefix+"transition-duration").replace("s",""))+parseFloat(e(this).css(t.transitionPrefix+"transition-delay").replace("s","")))});t.nextFrameChildren.each(function(){r.push(parseFloat(e(this).css(t.transitionPrefix+"transition-duration").replace("s",""))+parseFloat(e(this).css(t.transitionPrefix+"transition-delay").replace("s","")))});var i=Math.max.apply(Math,n),s=Math.max.apply(Math,r),o=i-s,u=0,a=0;o<0&&!t.settings.preventDelayWhenReversingAnimations?u=Math.abs(o):o>0&&(a=Math.abs(o));var f=function(n,r,i,s){function o(e){e=e.split(",")[0];var t={linear:"cubic-bezier(0.0,0.0,1.0,1.0)",ease:"cubic-bezier(0.25, 0.1, 0.25, 1.0)","ease-in":"cubic-bezier(0.42, 0.0, 1.0, 1.0)","ease-in-out":"cubic-bezier(0.42, 0.0, 0.58, 1.0)","ease-out":"cubic-bezier(0.0, 0.0, 0.58, 1.0)"};e.indexOf("cubic-bezier")<0&&(e=t[e]);return e}r.each(function(){var r=parseFloat(e(this).css(t.transitionPrefix+"transition-duration").replace("s","")),u=parseFloat(e(this).css(t.transitionPrefix+"transition-delay").replace("s","")),a=e(this).css(t.transitionPrefix+"transition-timing-function");if(a.indexOf("cubic")===-1)var a=o(a);var f=a.replace("cubic-bezier(","").replace(")","").split(",");e.each(f,function(e,t){f[e]=parseFloat(t)});var l=[1-f[2],1-f[3],1-f[0],1-f[1]];a="cubic-bezier("+l+")";var c=r+u;n["transition-duration"]=r+"s";n["transition-delay"]=i-c+s+"s";n["transition-timing-function"]=a;e(this).css(t._prefixCSS(t.transitionPrefix,n))})};f(t.transitionProperties,t.currentFrameChildren,i,u);f(t.transitionProperties,t.nextFrameChildren,s,a)},_prefixCSS:function(e,t){var n=this,r={};for(var i in t)r[e+i]=t[i];return r},_resetAutoPlay:function(e,t){var n=this;if(e===!0){if(n.settings.autoPlay&&!n.isSoftPaused){clearTimeout(n.autoPlayTimer);n.autoPlayTimer=setTimeout(function(){n.settings.autoPlayDirection===1?n.next():n.prev()},t)}}else clearTimeout(n.autoPlayTimer)},_renderUiElements:function(t,n){var r=this;switch(t){case!1:return undefined;case!0:n===".sequence-preloader"&&r._defaultPreloader(r.container,r.transitionsSupported,r.animationPrefix);return e(n);default:return e(t)}},_waitForAnimationsToComplete:function(t,n,r,i,s){var o=this;if(r==="out")var u=function(){o.afterCurrentFrameAnimatesOut();o.settings.transitionThreshold===!0&&(s===1?o.nextFrame.addClass("animate-in"):s===-1&&o.nextFrame.toggleClass("animate-out animate-in"))};else if(r==="in")var u=function(){o.afterNextFrameAnimatesIn();o._setHashTag();o.active=!1;if(!o.isHardPaused&&!o.isBeingHoveredOver)if(!o.delayUnpause)o.unpause(!1);else{o.delayUnpause=!1;o.unpause()}};n.data("animationEnded",!1);t.bind(o.transitionEnd,function(r){e(r.target).data("animationEnded",!0);var i=!0;n.each(function(){if(e(this).data("animationEnded")===!1){i=!1;return!1}});if(i){t.unbind(o.transitionEnd);u()}})},_setHashTag:function(){var t=this;if(t.settings.hashTags){t.currentHashTag=t.nextFrame.prop(t.getHashTagFrom);t.frameHashIndex=e.inArray(t.currentHashTag,t.frameHashID);if(t.frameHashIndex!==-1&&(t.settings.hashChangesOnFirstFrame||!t.isStartingFrame||!t.transitionsSupported)){t.nextFrameID=t.frameHashIndex+1;document.location.hash="#"+t.currentHashTag}else{t.nextFrameID=t.settings.startingFrameID;t.isStartingFrame=!1}}},_modernizrForSequence:function(){window.ModernizrForSequence=function(e,t,n){function r(e){v.cssText=e}function i(e,t){return r(prefixes.join(e+";")+(t||""))}function s(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function u(e,t){for(var r in e){var i=e[r];if(!o(i,"-")&&v[i]!==n)return t=="pfx"?i:!0}return!1}function a(e,t,r){for(var i in e){var o=t[e[i]];if(o!==n)return r===!1?e[i]:s(o,"function")?o.bind(r||t):o}return!1}function f(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+b.join(r+" ")+r).split(" ");return s(t,"string")||s(t,"undefined")?u(i,t):(i=(e+" "+w.join(r+" ")+r).split(" "),a(i,t,n))}var l="2.6.1",c={},h=t.documentElement,p="modernizrForSequence",d=t.createElement(p),v=d.style,m,g={}.toString,y="Webkit Moz O ms",b=y.split(" "),w=y.toLowerCase().split(" "),E={svg:"http://www.w3.org/2000/svg"},S={},x={},T={},N=[],C=N.slice,k,L={}.hasOwnProperty,A;!s(L,"undefined")&&!s(L.call,"undefined")?A=function(e,t){return L.call(e,t)}:A=function(e,t){return t in e&&s(e.constructor.prototype[t],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(e){var t=self;if(typeof t!="function")throw new TypeError;var n=C.call(arguments,1),r=function(){if(self instanceof r){var i=function(){};i.prototype=t.prototype;var s=new i,o=t.apply(s,n.concat(C.call(arguments)));return Object(o)===o?o:s}return t.apply(e,n.concat(C.call(arguments)))};return r}),S.svg=function(){return!!t.createElementNS&&!!t.createElementNS(E.svg,"svg").createSVGRect};for(var O in S)A(S,O)&&(k=O.toLowerCase(),c[k]=S[O](),N.push((c[k]?"":"no-")+k));return c.addTest=function(e,t){if(typeof e=="object")for(var r in e)A(e,r)&&c.addTest(r,e[r]);else{e=e.toLowerCase();if(c[e]!==n)return c;t=typeof t=="function"?t():t,enableClasses&&(h.className+=" "+(t?"":"no-")+e),c[e]=t}return c},r(""),d=m=null,c._version=l,c._domPrefixes=w,c._cssomPrefixes=b,c.testProp=function(e){return u([e])},c.testAllProps=f,c.prefixed=function(e,t,n){return t?f(e,t,n):f(e,"pfx")},c}(self,self.document)},_defaultPreloader:function(t,n,r){var i='<div class="sequence-preloader"><svg class="preloading" xmlns="http://www.w3.org/2000/svg"><circle class="circle" cx="6" cy="6" r="6" /><circle class="circle" cx="22" cy="6" r="6" /><circle class="circle" cx="38" cy="6" r="6" /></svg></div>';e("head").append("<style>.sequence-preloader{height: 100%;position: absolute;width: 100%;z-index: 999999;}@"+r+"keyframes preload{0%{opacity: 1;}50%{opacity: 0;}100%{opacity: 1;}}.sequence-preloader .preloading .circle{fill: #ff9442;display: inline-block;height: 12px;position: relative;top: -50%;width: 12px;"+r+"animation: preload 1s infinite; animation: preload 1s infinite;}.preloading{display:block;height: 12px;margin: 0 auto;top: 50%;margin-top:-6px;position: relative;width: 48px;}.sequence-preloader .preloading .circle:nth-child(2){"+r+"animation-delay: .15s; animation-delay: .15s;}.sequence-preloader .preloading .circle:nth-child(3){"+r+"animation-delay: .3s; animation-delay: .3s;}.preloading-complete{opacity: 0;visibility: hidden;"+r+"transition-duration: 1s; transition-duration: 1s;}div.inline{background-color: #ff9442; margin-right: 4px; float: left;}</style>");t.prepend(i);if(!ModernizrForSequence.svg&&!n){e(".sequence-preloader").prepend('<div class="preloading"><div class="circle inline"></div><div class="circle inline"></div><div class="circle inline"></div></div>');setInterval(function(){e(".sequence-preloader .circle").fadeToggle(500)},500)}else n||setInterval(function(){e(".sequence-preloader").fadeToggle(500)},500)},_operaTest:function(){e("body").append('<span id="sequence-opera-test"></span>');var t=e("#sequence-opera-test");t.css("-o-transition","1s");if(t.css("-o-transition")!=="1s"){t.remove();return!1}t.remove();return!0}};var r={startingFrameID:1,cycle:!0,animateStartingFrameIn:!1,transitionThreshold:!1,reverseAnimationsWhenNavigatingBackwards:!0,preventDelayWhenReversingAnimations:!1,moveActiveFrameToTop:!0,autoPlay:!1,autoPlayDirection:1,autoPlayDelay:5e3,navigationSkip:!0,navigationSkipThreshold:250,fadeFrameWhenSkipped:!0,fadeFrameTime:150,preventReverseSkipping:!1,nextButton:!1,showNextButtonOnInit:!0,prevButton:!1,showPrevButtonOnInit:!0,pauseButton:!1,unpauseDelay:null,pauseOnHover:!0,pauseIcon:!1,showPauseButtonOnInit:!0,pagination:!1,showPaginationOnInit:!0,preloader:!1,preloadTheseFrames:[1],preloadTheseImages:[],hideFramesUntilPreloaded:!0,prependPreloadingComplete:!0,hidePreloaderUsingCSS:!0,hidePreloaderDelay:0,keyNavigation:!0,numericKeysGoToFrames:!0,keyEvents:{left:"prev",right:"next"},customKeyEvents:{},swipeNavigation:!0,swipeThreshold:20,swipePreventsDefault:!1,swipeEvents:{left:"prev",right:"next",up:!1,down:!1},hashTags:!1,hashDataAttribute:!1,hashChangesOnFirstFrame:!1,fallback:{theme:"slide",speed:500}};e.fn.sequence=function(t){return this.each(function(){e.data(this,"sequence")||e.data(this,"sequence",new n(e(this),t,r))})}})(jQuery);;(function($){var lastScrollTop=0;function getViewportHeight(){var height=window.innerHeight;var mode=document.compatMode;if((mode||!$.support.boxModel)){height=(mode=='CSS1Compat')?document.documentElement.clientHeight:document.body.clientHeight;}
return height;}
$(window).scroll(function(){var vpH=getViewportHeight(),scrolltop=(document.documentElement.scrollTop?document.documentElement.scrollTop:document.documentElement.scrollTop),elems=[];var direction='down';var st=$(this).scrollTop();if(st>lastScrollTop){direction='down';}else{direction='up';}
lastScrollTop=st;$.each($.cache,function(){if(this.events&&this.events.inview){elems.push(this.handle.elem);}});if(elems.length){$(elems).each(function(){var $el=$(this),top=$el.offset().top,height=$el.height(),inview=$el.data('inview')||false;if(direction==='down'){scrolltop=scrolltop-200;}
if(scrolltop>(top+height)||scrolltop+vpH<top){if(inview){$el.data('inview',false);$el.trigger('inview',[false]);}}else if(scrolltop<(top+height)){if(!inview){$el.data('inview',true);$el.trigger('inview',[true]);}}});}});$(function(){$(window).scroll();});})(jQuery);;var asInitVals=new Array();var dataTableZeroRecord;$(document).ready(function(){$('.error .close, .confirmation .close').click(function(){$(this).parent().fadeOut();});var oTable=$('#marimi-disponibile').dataTable({"oLanguage":{"sSearch":"Search all columns:","sZeroRecords":dataTableZeroRecord},"bPaginate":false,"bLengthChange":false,"bFilter":true,"bSort":false,"bInfo":false,"bAutoWidth":false,"bScrollInfinite":true,"bScrollCollapse":true,"sScrollY":"100%"});$("#calculations input.search").keyup(function(){oTable.fnFilter(this.value,$("#calculations input").index(this));});$('#greutate, #quantity_wanted').keyup(function(){calcLungimeAndGreutate();});$('#marimi-disponibile tr').live('click',function(){if($(this).children('.diametru').length)
$('#diametru').val($(this).children('.diametru').text());if($(this).children('.grosime').length)
$('#grosime').val((parseFloat($(this).children('.grosime').text())).toFixed(2));if($(this).children('.greutate').length)
$('#greutate').val((parseFloat($(this).children('.greutate').text())).toFixed(2));calcLungimeAndGreutate();});$('#parametrii').click(function(e){e.preventDefault();$('#more_info_tab_chemichal').trigger("click");});$('#basic_info').click(function(e){e.preventDefault();$('#more_info_tab_more_info').trigger("click");});$("#calculations input.search").each(function(i){asInitVals[i]=this.value;});$('#clear-filter').click(function(){$('input.search').val('');oTable.fnResetAllFilters();});var add_to_cart_text=$('#add_to_cart input').val();$('#cutting_checkbox').bind('change',function(){if($(this).is(':checked')){$('#quantity_wanted').attr({'disabled':'disabled'});$('#add_to_cart input').val(cutting_text);$('#add_to_cart i').removeAttr('class').addClass('icon-crop');}else{$('#quantity_wanted').removeAttr('disabled');$('#add_to_cart input').val(add_to_cart_text);$('#add_to_cart i').removeAttr('class').addClass('icon-paper-clip');}});var sevrices=$('.homepage-services .services');sevrices.hover(function(){$(this).addClass('active');},function(){$(this).removeClass('active');});var featureLength=$('#more_info_tabs li').length;if(featureLength==3){$('#more_info_tabs li').removeAttr('class').addClass('pure-u-1-3');};$('#marimi-disponibile').click(function(){});var errorMsgClose=$('.error').find('.icon-remove');errorMsgClose.click(function(){$(this).parent('.error').fadeOut();});var errorClose=$('.error');errorClose.click(function(){$(this).fadeOut();});$.fn.fixedFilter=function(pos){var $this=this,$window=$(window);$window.scroll(function(e){if($window.scrollTop()>pos){$this.css({position:'fixed',top:0,});}else{$this.css({position:'absolute',top:pos,});}});};$('.current_language').click(function(){if($(this).siblings('.countries_ul').hasClass('active-lang')){$('.countries_ul').removeClass('active-lang');}else{$('.countries_ul').addClass('active-lang');};});$('.mobile-search').click(function(){if($('#header').hasClass('active-search')){$('#header').removeClass('active-search');}else{$('body').addClass('swipe-menu').find('#header').addClass('active-search');}});$('#footer .newsletter-subscribe').click(function(){$(this).closest('.newsletter-holder').addClass('newsletter-active');});$('#footer .newsletter-back').click(function(){$(this).closest('.newsletter-holder').removeClass('newsletter-active');});$('.lt-ie9 .newsletter-subscribe').click(function(){$(this).closest('.newsletter-first').animate({marginLeft:-50+'%'});});$('.lt-ie9 .newsletter-back').click(function(){$('.newsletter-first').animate({marginLeft:0});});function mobileChange(mediaQueryList){if(mediaQueryList.matches){var productFilterActivator=$('#category #left_column .layered_block_activator');productFilterActivator.click(function(){if($('body').hasClass('mobile-filter-active')){$('body').removeClass('mobile-filter-active');$(this).find('i').removeAttr('class').addClass('icon-filter');$('html,body').animate({scrollTop:0},0);}else{$('body').addClass('mobile-filter-active');$(this).find('i').removeAttr('class').addClass('icon-remove');}});$('.subcategory h3').click(function(e){e.preventDefault();$(this).siblings('.second').stop(true,false).slideToggle();$(this).find('a').toggleClass('opened');});$('#szamlalo .termekek h4').click(function(){$('#termeklista').slideToggle();});$('#termeklista li').click(function(){$('#szamlalo #termeklista').slideToggle();});canalImgHolderHeight();}
$(window).resize(function(){canalImgHolderHeight();});}
function tabletChange(mediaQueryList){if(mediaQueryList.matches){$('#category #center_column').removeClass('pure-u-3-4').addClass('pure-u-1');var productFilter=$('#category #left_column');productFilter.click(function(){$('body').addClass('filter-active');});$(document).mouseup(function(e){if(!productFilter.is(e.target)&&productFilter.has(e.target).length===0){$('body').removeClass('filter-active');}});$('#left_column').fixedFilter(171);}}
function desktopChange(mediaQueryList){if(mediaQueryList.matches){$('#category #center_column').removeClass('pure-u-1').addClass('pure-u-3-4');if(!Modernizr.touch){$("select").select2();}
$("#layered_form ul").each(function(){if($(this).outerHeight()>200){$(this).css({'height':200+'px'});$(this).customScrollbar({skin:"default-skin",hScroll:false,updateOnWindowResize:true});};});}}
if(!($.browser.msie&&parseInt($.browser.version,10)===9)){if(Modernizr.mq('only all')){var mql=window.matchMedia('(max-width: 768px)');mql.addListener(mobileChange);mobileChange(mql);var mql=window.matchMedia('(min-width: 768px) and (max-width: 980px)');mql.addListener(tabletChange);tabletChange(mql);var mql=window.matchMedia('(min-width: 981px)');mql.addListener(desktopChange);desktopChange(mql);}}
var ua=navigator.userAgent.toLowerCase();var isAndroid=ua.indexOf("android")>-1;if(isAndroid){$('body').addClass('android');}});var idTabPosition;var tableHeight;var showTrendsHeight;var aspectsHeight;var tenderMessageHeight;$(window).scroll(function(){if(!$('#idTab1').length)
return;var idTabPosition=$('#idTab1').offset().top;var tableHeight=$('#marimi-disponibile_wrapper').outerHeight();var firstRow=305;var lastRow=150;var showTrendsHeight=$('#show_trends').outerHeight();var aspectsHeight=$("#idTab1 .pure-g-r").outerHeight();var tenderMessageHeight=$('#tender-message').outerHeight(true);var tablePosition=idTabPosition+tenderMessageHeight+aspectsHeight;var scrollTop=$(window).scrollTop();var windowHeight=$(window).height();if((scrollTop+windowHeight)-firstRow>tablePosition&&(tablePosition+tableHeight)>(scrollTop+windowHeight)-lastRow){$('#buy_block').addClass('fixed');}else{$('#buy_block').removeClass('fixed');}
var s=$(window).scrollTop(),d=$(document).height(),c=$(window).height();scrollPercent=(s/(d-c))*100;});$.fn.dataTableExt.oApi.fnResetAllFilters=function(oSettings,bDraw){for(iCol=0;iCol<oSettings.aoPreSearchCols.length;iCol++){oSettings.aoPreSearchCols[iCol].sSearch='';}
oSettings.oPreviousSearch.sSearch='';if(typeof bDraw==='undefined')bDraw=true;if(bDraw)this.fnDraw();}
function canalImgHolderHeight(){var gutterStepTwo=$('.fields-holder .img-holder');var gutterStepTwoImg=gutterStepTwo.find('.big-plan').width();gutterStepTwo.css({'height':gutterStepTwoImg+'px'});}
function calcLungimeAndGreutate(){var greutate=parseFloat($('#greutate').val());var quantity=parseInt($('#quantity_wanted').val());if($('#quantity_wanted').val()=='')
quantity=0;var szorzo=6;var m=quantity*szorzo;if($('#results').hasClass('sheet')){var kg=greutate*quantity;$('#results').html(kg.toFixed(2)+'kg');}else{var kg=greutate*quantity*szorzo;$('#results').html(m+' m ('+kg.toFixed(2)+' kg)');}}
function populateSearch(tr){tr.addClass('aadd');$('#diametru').val(tr.find('.diamteru').val());$('#grosime').val(tr.find('.grosime').val());$('#greautate').val(tr.find('.greautate').val());}
function showPopup(popup){popup.fadeIn();}
function hidePopup(popup){popup.fadeOut();}
function executeFunctionByName(functionName,context){var args=Array.prototype.slice.call(arguments).splice(2);var namespaces=functionName.split(".");var func=namespaces.pop();for(var i=0;i<namespaces.length;i++){context=context[namespaces[i]];};return context[func].apply(this,args);}
window.onload=function(){var $recaptcha=document.querySelector('#g-recaptcha-response');if($recaptcha){$recaptcha.setAttribute("required","required");}};;var search_block_top;var search_activator;var search_close;var search_input;var menu;var menu_main;var menu_main_width;var menu_elements;var elements_width;var search_width;var active;jQuery(document).ready(function($){var productsMenuLink=$('.main > li.termekek > a');var supportMenuLink=$('.menu-elements .support > a');productsMenuLink.click(function(event){event.preventDefault();$('ul.first').addClass('active-menu');});$('#menu-closer').click(function(){$('ul.first').removeClass('active-menu');});supportMenuLink.click(function(event){event.preventDefault();$('.support-first').addClass('active-menu');});$('#support-menu-closer').click(function(){$('.support-first').removeClass('active-menu');});var productsMenu=$('.main .first');$(document).mouseup(function(e){if(!productsMenu.is(e.target)&&productsMenu.has(e.target).length===0){productsMenu.removeClass('active-menu');}});var supportMenu=$('.menu-elements .support-first');$(document).mouseup(function(e){if(!supportMenu.is(e.target)&&supportMenu.has(e.target).length===0){supportMenu.removeClass('active-menu');}});$('.mobile-menu').click(function(){if(!$('body').hasClass('swipe-menu')){$('body').addClass('swipe-menu');}else{$('body').removeClass('swipe-menu');}});search_block_top=$('#search_block_top');search_activator=search_block_top.children('.search-activator');search_close=search_block_top.find('.search-close');search_input=search_block_top.find('#search_query_top');menu=$('#minicsimplemenu');menu_main=$('#minicsimplemenu > ul.main');menu_main_width=menu_main.width();menu_elements=$('#minicsimplemenu > .menu-elements');elements_width=menu_elements.width();search_width=search_block_top.width();active=false;search_activator.click(function(){if(active==false){showMenu();active=true;}else{hideMenu();active=false;}});search_close.click(function(){hideMenu();active=false;});$(window).resize(function(){menu_main_width=menu_main.width();if(active==true){showMenu();}});});function showMenu(){var small=(menu_elements.hasClass('small'))?3:2;search_block_top.addClass('active');menu.css({'overflow':'hidden'});menu_main.animate({'margin-left':-menu_main_width},function(){});menu_elements.animate({'width':'100%'},function(){});search_block_top.css({'width':(menu_main_width+elements_width/small)});search_input.focus();}
function hideMenu(margin,width){var small=(menu_elements.hasClass('small'))?3:2;search_block_top.removeClass('active');menu_main.animate({'margin-left':0},function(){menu.css({'overflow':'visible'});});menu_elements.animate({'width':elements_width},function(){});search_block_top.animate({'width':elements_width/small});search_input.blur().val('');tryToCloseInstantSearch();};jQuery(document).ready(function($){var cim=$('#szamlalo > h1 span');var nev;$('#termeklista li').click(function(){$('#termeklista li').removeClass('selected');$(this).addClass('selected');cim.text($(this).text());clearEredmenyAndInputs();nev=$(this).attr('data-termek');$('.rajzok img.selected, .ertekek .selected').removeClass('selected');$('#'+nev+'-img, #'+nev).addClass('selected');changeAluminiumImage(nev);if(nev=='profil-inp'||nev=='profil-ipe'||nev=='profil-unp'||nev=='plasa-sudata'){$('.aluminiu').hide();$('#otel').attr('checked','checked');}
$('#masa-metru').parent().show();if(nev=='tabla'||nev=='plasa-sudata'){$('#masa-metru').parent().hide();}});$('.produs input.number').keyup(getDatas);$('.tipus input[type=radio]').change(function(){getDatas();changeAluminiumImage(nev);});$('#profil-inp-tipus').on('change',function(){getDatas();});$('#profil-ipe-tipus').on('change',function(){getDatas();});$('#profil-unp-tipus').on('change',function(){getDatas();});$('#plasa-sudata-dimensiunea, #plasa-sudata-diametru, #plasa-sudata-ochiuri').on('change',function(){getDatas();});});function changeAluminiumImage(nev){if(nev=='profil-cornier'||nev=='profil-l'||nev=='profil-t'||nev=='teava-dreptunghiulara'||nev=='teava-patrata'){if($('.tipus input[type=radio]:checked').attr('id')=='aluminium'){$('.rajzok img.selected').removeClass('selected');$('#'+nev+'-img-al').addClass('selected');}else{$('.rajzok img.selected').removeClass('selected');$('#'+nev+'-img').addClass('selected');}}}
var metru=0;var diametru=0;var dimeniunea=0;var lungime=0;var latime=0;var inaltime=0;var grosime=0;var ochiuri_a=0;var ochiuri_b=0;var szorzo_a=0;var szorzo_b=0;function calcProfilRotund(densitate,lungime){diametru=parseFloat($('.produs.selected input[name=diametru]').val().replace(',','.'));metru=3.1415925*diametru*(diametru/4)*densitate/1000;showResults(metru,(metru*lungime));}
function calcProfilLat(densitate,lungime){latime=parseFloat($('.produs.selected input[name=latime]').val().replace(',','.'));inaltime=parseFloat($('.produs.selected input[name=inaltime]').val().replace(',','.'));metru=latime*inaltime*densitate/1000;showResults(metru,(metru*lungime));}
function calcBaraPatrata(densitate,lungime){latime=parseFloat($('.produs.selected input[name=latime]').val().replace(',','.'));metru=latime*latime*densitate/1000;showResults(metru,(metru*lungime));}
function calcProfilCornier(densitate,lungime){latime=parseFloat($('.produs.selected input[name=latime]').val().replace(',','.'));grosime=parseFloat($('.produs.selected input[name=grosime]').val().replace(',','.'));metru=grosime*(latime+latime-grosime)*densitate/1000*1.015;showResults(metru,(metru*lungime));}
function calcProfilL(densitate,lungime){latime=parseFloat($('.produs.selected input[name=latime]').val().replace(',','.'));inaltime=parseFloat($('.produs.selected input[name=inaltime]').val().replace(',','.'));grosime=parseFloat($('.produs.selected input[name=grosime]').val().replace(',','.'));metru=grosime*(latime+inaltime-grosime)*densitate/1000*1.015;showResults(metru,(metru*lungime));}
function calcProfilT(densitate,lungime){latime=parseFloat($('.produs.selected input[name=latime]').val().replace(',','.'));inaltime=parseFloat($('.produs.selected input[name=inaltime]').val().replace(',','.'));grosime=parseFloat($('.produs.selected input[name=grosime]').val().replace(',','.'));metru=grosime*(latime+inaltime-grosime)*densitate/1000*1.015;showResults(metru,(metru*lungime));}
function calcProfilInp(densitate,lungime){var datas=$('.produs.selected select').val().split('-');metru=parseFloat(datas[0]);$('.produs.selected input[name=latime]').attr({'placeholder':datas[1]});$('.produs.selected input[name=inaltime]').attr({'placeholder':datas[2]});$('.produs.selected input[name=grosime-t1]').attr({'placeholder':datas[3]});$('.produs.selected input[name=grosime-t2]').attr({'placeholder':datas[4]});showResults(metru,(metru*lungime));}
function calcProfilIpe(densitate,lungime){var datas=$('.produs.selected select').val().split('-');metru=parseFloat(datas[0]);$('.produs.selected input[name=latime]').attr({'placeholder':datas[1]});$('.produs.selected input[name=inaltime]').attr({'placeholder':datas[2]});$('.produs.selected input[name=grosime-t1]').attr({'placeholder':datas[3]});showResults(metru,(metru*lungime));}
function calcProfilUnp(densitate,lungime){var datas=$('.produs.selected select').val().split('-');metru=parseFloat(datas[0]);$('.produs.selected input[name=latime]').attr({'placeholder':datas[1]});$('.produs.selected input[name=inaltime]').attr({'placeholder':datas[2]});$('.produs.selected input[name=grosime-t1]').attr({'placeholder':datas[3]});$('.produs.selected input[name=grosime-t2]').attr({'placeholder':datas[4]});showResults(metru,(metru*lungime));}
function calcProfilHexagonal(densitate,lungime){diametru=parseFloat($('.produs.selected input[name=diametru]').val().replace(',','.'));metru=Math.tan(0.5235987)*1.5*diametru*diametru*densitate/1000;showResults(metru,(metru*lungime));}
function calcTeavaRotunda(densitate,lungime){diametru=parseFloat($('.produs.selected input[name=diametru]').val().replace(',','.'));grosime=parseFloat($('.produs.selected input[name=grosime]').val().replace(',','.'));metru=3.1415926*(Math.pow(diametru,2)-Math.pow((diametru-2*grosime),2))/4*densitate/1000;showResults(metru,(metru*lungime));}
function calcTeavaDreptunghiulara(densitate,lungime){latime=parseFloat($('.produs.selected input[name=latime]').val().replace(',','.'));inaltime=parseFloat($('.produs.selected input[name=inaltime]').val().replace(',','.'));grosime=parseFloat($('.produs.selected input[name=grosime]').val().replace(',','.'));metru=(((2*latime)+(2*inaltime))-(4*grosime))*grosime*densitate/1000;showResults(metru,(metru*lungime));}
function calcTeavaPatrata(densitate,lungime){latime=parseFloat($('.produs.selected input[name=latime]').val().replace(',','.'));grosime=parseFloat($('.produs.selected input[name=grosime]').val().replace(',','.'));metru=((4*latime)-(4*grosime))*grosime*densitate/1000;showResults(metru,(metru*lungime));}
function calcTabla(densitate,lungime){if(densitate==7.85)
densitate=8;latime=parseFloat($('.produs.selected input[name=latime]').val().replace(',','.'));grosime=parseFloat($('.produs.selected input[name=grosime]').val().replace(',','.'));metru=(grosime*densitate)*(latime*lungime);showResults(0,metru);}
function calcPlasaSudata(densitate,lungime){dimensiunea=parseFloat($('.produs.selected select[name=dimensiunea]').val().replace(',','.'));diametru=parseFloat($('.produs.selected select[name=diametru]').val().replace(',','.'));lungime=parseFloat($('.produs.selected select[name=lungime]').val().replace(',','.'));if(dimensiunea==1){if(lungime==100){ochiuri_a=50;ochiuri_b=20;}else if(lungime==150){ochiuri_a=34;ochiuri_b=14;}else{ochiuri_a=25;ochiuri_b=10;}
szorzo_a=2;szorzo_b=5;}else if(dimensiunea==2){if(lungime==100){ochiuri_a=58;ochiuri_b=20;}else if(lungime==150){ochiuri_a=41;ochiuri_b=14;}else{ochiuri_a=30;ochiuri_b=10;}
szorzo_a=2;szorzo_b=6;}else{ochiuri_a=0;ochiuri_b*0;}
metru=(ochiuri_a*szorzo_a*diametru)+(ochiuri_b*szorzo_b*diametru);showResults(0,metru);}
function showResults(metru,calculata){$('#masa-metru').text(((isNaN(metru))?0:metru.toFixed(3)));$('#masa-calculata').text(((isNaN(calculata))?0:calculata.toFixed(3)));}
function clearEredmenyAndInputs(){$('.produs input[type=text]').val('');$('#masa-metru, #masa-calculata').text('0');$('.aluminiu').show();}
function getDatas(){var f_name=$('.produs.selected').attr('data-function');densitate=$('.tipus input[type=radio]:checked').val();lungime=parseFloat($('.produs.selected input[name=lungime]').val());executeFunctionByName(f_name,window,densitate,lungime);};
