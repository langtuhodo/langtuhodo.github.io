 /**
 * Created by Ð ÑšÐ Ñ‘Ð Â»Ð ÂµÐ Ð… on 20.9.2014 Ð Ñ–..
 */
var browser = {
    mail: function(e) {
        return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))){2,}$/i.test(e);
    },
    ie: function() {
        var rv = -1,
            ua = window.navigator.userAgent,
            msie = ua.indexOf('MSIE '),
            trident = ua.indexOf('Trident/');
        if (msie > 0) {
            rv = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        } else
        if (trident > 0) {
            var rvNum = ua.indexOf('rv:');
            rv = parseInt(ua.substring(rvNum + 3, ua.indexOf('.', rvNum)), 10);
        }
        return ((rv > -1) ? rv : false);
    },
    mobile: function() {
        if($.cookie('maiak_mobile') == '1')
            return true;
        if($.cookie('maiak_mobile') == '0')
                    return false;
        return (function(a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                return true;
            }
            return false;
        })(navigator.userAgent || navigator.vendor || window.opera);
    }
}
Timer = function( callback, delay ) {
    'use strict';
    var timerId, remaining = delay;
    this.pause = function() {
        clearInterval(timerId);
    };
    this.resume = function() {
        timerId = setInterval(callback, remaining);
    };
    this.resume2 = function() {
        timerId = setTimeout(callback, remaining);
    };
    if(arguments[2] === true) {
        this.resume2();
    }
    else
        this.resume();
};

$.fn.carousel = function( options ) {
    'use strict';
    this.settings = $.extend({
        containerClass  : '.container',
        sliderClass     : '.slider',
        itemClass       : '.item',
        navigationClass : '.navigation',
        prevClass       : '.prev',
        nextClass       : '.next',
        pageWidth       : 1000,
        itemsPerPage    : 4,
        current         : 0,
        pages           : 0,
		useTimer        : true,
		useNavigation   : true,
        timer           : null,
        interval        : 5000,
        speed           : 1000,
        effect          : 'swing'
    }, options );
	if( this.length == 0 ) return;
	
    var self = $(this),
        parent = this,
        navigation = $(this.settings.navigationClass, self),
        slider = $(this.settings.sliderClass, self);
    this.settings.pages = Math.ceil( $(this.settings.itemClass, self).length / this.settings.itemsPerPage );
    slider.css('width', (this.settings.pages * this.settings.pageWidth) + 'px');
   
   
   
	
    // Init navigation;
    for(var i = 0; i < this.settings.pages; i++) {
        navigation.append('<li data-idx="' + i + '"></li');
    }
    // Set current navigation item as active;
    $('li', navigation).eq( this.settings.current ).addClass( 'active' );
    // Previous page
    this.prev = function(){
        if(parent.settings.current === 0)
            parent.settings.current = parent.settings.pages - 1;
        else
            parent.settings.current--;
        var left = parent.settings.current * parent.settings.pageWidth;
        parent.left(-left);
        $('li', navigation).removeClass('active').eq(parent.settings.current).addClass( 'active' );
    };
    // Next page
    this.next = function(){
        if(parent.settings.current == parent.settings.pages - 1)
            parent.settings.current = 0;
        else
            parent.settings.current++;
        var left = parent.settings.current * parent.settings.pageWidth;
       parent.left(-left);
        $('li', navigation).removeClass('active').eq(parent.settings.current).addClass( 'active');
    };
    this.goTo = function(idx){
        parent.settings.current = idx;
        parent.left( -(parent.settings.current * parent.settings.pageWidth));
        $('li', navigation).removeClass('active').eq(parent.settings.current).addClass( 'active');
    };
    this.left = function(px){
        if ( 'transition' in slider[0].style ||
            'WebkitTransition' in slider[0].style ||
            'MozTransition' in slider[0].style ||
            'msTransition' in slider[0].style ||
            'OTransition' in slider[0].style ){
            slider.css({'left': px})
        }else{
            slider.animate({ 'left': px }, parent.settings.speed, parent.settings.effect);
        }
    };
	
	if( this.settings.useTimer ){
		this.settings.timer = new Timer( function(){
			parent.next();
		}, this.settings.interval);
		self.hover( function(){ parent.settings.timer.pause() }, function(){ parent.settings.timer.resume() } );
	}
	
	if( this.settings.useNavigation ){
	
		self.on( 'click', this.settings.prevClass, function(){
			parent.prev();
		});
		self.on( 'click', this.settings.nextClass, function(){
			parent.next();
		});
	
	}
	
    navigation.on( 'click', 'li', function(){
        parent.goTo( $(this).data('idx') );
    });

};

function ajaxBase( options ) {
    var defaults = {
        url : siteAbsolutePath + 'ajax.requests.php',
        type: 'POST'
    };
    // Load
    this.options = $.extend({}, defaults, options || {});
    // Ajax function
    this.asyncLoad = function( data, callback, noMessage ) {
        // Current class instance
        var parent = this;
        $.ajax({
            url     : this.options.url,
            type    : this.options.type,
            data    : data,
            dataType: 'text',
            success : function( data, status, xhr ) {
                try {
                    // Parse result json
                    resultData = $.parseJSON(data);

                    // Run callback
                    callback.call(parent, resultData);
                    // Collect debug
                    // if(typeof resultData.debug !== 'undefined') {
                        // $('#ajax_debug').append(resultData.debug);
                    // }
                    // Show message
                    if(typeof resultData.message !== 'undefined' && (typeof noMessage === 'undefined' || noMessage )) {
                        showAJAXMessage(resultData.message);
                    }
                } catch(err) {
                    //console.log(err, data);
                }
            },
            error   : function() {
                //console.log(arguments);
            }
        });
    }
}
if (!String.prototype.trim) {
  (function() {
    // Make sure we trim BOM and NBSP
    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    String.prototype.trim = function() {
      return this.replace(rtrim, '');
    };
  })();
}
;(function(g){function k(c){c&&c.printPage?c.printPage():setTimeout(function(){k(c)},50)}function l(c){c=a(c);a(":checked",c).each(function(){this.setAttribute("checked","checked")});a("input[type='text']",c).each(function(){this.setAttribute("value",a(this).val())});a("select",c).each(function(){var b=a(this);a("option",b).each(function(){b.val()==a(this).val()&&this.setAttribute("selected","selected")})});a("textarea",c).each(function(){var b=a(this).attr("value");if(this.firstChild)this.firstChild.textContent=
    b;else this.innerHTML=b});return a("<div></div>").append(c.clone()).html()}function m(c,b){var i=a(c);c=l(c);var d=[];d.push("<html><head><title>"+b.pageTitle+"</title>");if(b.overrideElementCSS){if(b.overrideElementCSS.length>0)for(var f=0;f<b.overrideElementCSS.length;f++){var e=b.overrideElementCSS[f];typeof e=="string"?d.push('<link type="text/css" rel="stylesheet" href="'+e+'" >'):d.push('<link type="text/css" rel="stylesheet" href="'+e.href+'" media="'+e.media+'" >')}}else a("link",j).filter(function(){return a(this).attr("rel").toLowerCase()==
    "stylesheet"}).each(function(){d.push('<link type="text/css" rel="stylesheet" href="'+a(this).attr("href")+'" media="'+a(this).attr("media")+'" >')});d.push('<base href="'+(g.location.protocol+"//"+g.location.hostname+(g.location.port?":"+g.location.port:"")+g.location.pathname)+'" />');d.push('</head><body style="'+b.printBodyOptions.styleToAdd+'" class="'+b.printBodyOptions.classNameToAdd+'">');d.push('<div class="'+i.attr("class")+'">'+c+"</div>");d.push('<script type="text/javascript">function printPage(){focus();print();'+
(!b.leaveOpen&&b.printMode.toLowerCase()=="popup"?"close();":"")+"}<\/script>");d.push("</body></html>");return d.join("")}var j=g.document,a=g.jQuery;a.fn.printElement=function(c){var b=a.extend({},a.fn.printElement.defaults,c);if(b.printMode=="iframe")if(a.browser.opera||/chrome/.test(navigator.userAgent.toLowerCase()))b.printMode="popup";a("[id^='printElement_']").remove();return this.each(function(){var i=a.a?a.extend({},b,a(this).data()):b,d=a(this);d=m(d,i);var f=null,e=null;
    if(i.printMode.toLowerCase()=="popup"){f=g.open("about:blank","printElementWindow","width=650,height=440,scrollbars=yes");e=f.document}else{f="printElement_"+Math.round(Math.random()*99999).toString();var h=j.createElement("IFRAME");a(h).attr({style:i.iframeElementOptions.styleToAdd,id:f,className:i.iframeElementOptions.classNameToAdd,frameBorder:0,scrolling:"no",src:"about:blank"});j.body.appendChild(h);e=h.contentWindow||h.contentDocument;if(e.document)e=e.document;h=j.frames?j.frames[f]:j.getElementById(f);
        f=h.contentWindow||h}focus();e.open();e.write(d);e.close();k(f)})};a.fn.printElement.defaults={printMode:"iframe",pageTitle:"",overrideElementCSS:null,printBodyOptions:{styleToAdd:"padding:10px;margin:10px;",classNameToAdd:""},leaveOpen:false,iframeElementOptions:{styleToAdd:"border:none;position:absolute;width:0px;height:0px;bottom:0px;left:0px;",classNameToAdd:""}};a.fn.printElement.cssElement={href:"",media:""}})(window);