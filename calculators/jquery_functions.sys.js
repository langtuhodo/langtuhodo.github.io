 var customScroll = false;

// functions for the system ======================================================================

// fixing Number.toFixed
Number.prototype.toFixedEx = function( exp ) {

    value = +this.valueOf();
    exp  = +exp;

    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
        return NaN;

    // Shift
    value = value.toString().split('e');
    value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}

// ajax message 
function showAJAXMessage( messageText ) {
	var ajaxMessageVisibility = $('.ajax_message').css('display');
	if(messageText && ajaxMessageVisibility == 'none') {
		$('.ajax_message').children(".content").html( messageText );
		$('.ajax_message').stop(true, true).animate({height: 'show'}, 400).delay(3000).fadeOut(1000);
	}
}

function delConfirm() {
	a = confirm( langLabels.delete_confirm );
	if(a) {
		return true;
	}
	else {
		return false;
	}
}

function check_numbers_input(a) {
	b = '';
	for (i=0;i<a.value.length;i++) {
		if ( (!isNaN(a.value.substr(i,1)) && a.value.substr(i,1) != ' ') || (a.value.substr(i,1) == '.' && a.value.indexOf('.')==i) || (a.value.substr(i,1) == '-' && i==0) ) {
			b += a.value.substr(i,1);
		}
	}
	if(a.value != b)
		a.value = b;
}


// error dialog
function showErrorDialog( error ) {
	$( '#show_error_dialog .content' ).html( error );
	$( '#show_error_dialog' ).modal({
		autoResize : true
		,minWidth  : 640
		,onShow    : function (dialog) {
			$( dialog.container ).css('height','auto');
		}
	});
}


// ajax show busy
var ajaxDisplayStatus = 0;
function ajaxBusy() {
	ajaxDisplayStatus ++;
	//if( $('#ajax_load_shield').length == 0 ) {
	if( $('#ajax_load_shield').css('display') == 'none' ) {
		//$('#ajax_load_shield').css({'height': $(document).height() + 'px'});
		$('#ajax_load_shield').css('display', 'table');
		$('#ajax_load_shield').animate({opacity: 0.7}, 100);
		//$('.ajax_message').animate({height: 'show'}, 100);
		$("body").css("cursor", "progress");
	}
	//debug('ajaxBusy: '+ajaxDisplayStatus);
}
function ajaxIdle() {
	ajaxDisplayStatus --;
	if(ajaxDisplayStatus < 0)
		ajaxDisplayStatus = 0;
	if(!ajaxDisplayStatus) {
		$('#ajax_load_shield').animate({opacity: 0}, 100, function() {
			$('#ajax_load_shield').css('display', 'none');
			//$('#ajax_load_shield').remove();
		});
		//$('.ajax_message').animate({height: 'hide'}, 200);
		$("body").css("cursor", "auto");
	}
	//debug('ajaxIdle: '+ajaxDisplayStatus);
}


// BUBBLE functions ==========================

/*
bubbles from tag's attribute 'bubble=""'
other tag's attributes:
bubbleSource : specifying which is source of the bubble content
    'messages' : from the system messages through AJAX with link in 'bubble' attribute
    'next'     : from the innerHTML of the next DOM object
    'id'       : from the innerHTML of the DOM object with id specified in 'bubble' attribute
    if 'bubbleSource' is empty or missing, bubble gets content from value of the 'bubble' attribute
bubbleTitle=""  : title for bubble
bubbleMy=""     : [left,center,right,top,center,bottom] position of the tip on bubble, 2 words ex. "left top"
bubbleAt=""     : [left,center,right,top,center,bottom] position of the tip on target object, 2 words ex. "right center"
bubblePinned="" : [show,hide,click] if set bubble is visible onLoad. If 'hide' then will hide after 'mouseover'
htmlBubble() parameters:
    container : (string)  : identifier of the object containing elemehts with bubbles
    destroy   : (boolean) : destroys all qtips in given container
*/

function htmlBubble() {
	var customArguments = {};
	if(arguments.length > 0) {
		if(typeof arguments[0] === 'object')
			customArguments = arguments[0];
		else
			customArguments = {};
	}

	var inContainer = 'body';
	if(customArguments.container)
		inContainer = customArguments.container;

	if(customArguments.destroy) {
		// destroy qtips
		$( inContainer ).find( '[bubble][bubble!=""]' ).each( function(index){
			$(this).qtip('destroy', true);
		});
	}
	else {
		// adds qtips
		$( inContainer ).find( '[bubble][bubble!=""]' ).each( function(index){
			var bubbleContent = $(this).attr('bubble');
			var bubbleSource = $(this).attr('bubbleSource');
			if(bubbleSource == 'messages') {
				// from the system messages through AJAX
				var bubbleObject = $(this);
				$.ajax({
					type: "POST",
					dataType: 'json',
					url: siteAbsolutePath + "ajax.bubble.php",
					data: { part: "bubbleFromMessage", code: bubbleContent },
					success: function( returnedData ) {
						if( returnedData.result )
							placeQtips( bubbleObject, returnedData.message );
					}
				});
			}
			else if(bubbleSource == 'next') {
				// from the innerHTML of the next DOM object
				placeQtips( this, $(this).next().html() );
			}
			else if(bubbleSource == 'id') {
				// from the innerHTML of the DOM object with specific id
				placeQtips( this, $( '#'+bubbleContent ).html() );
			}
			else {
				// from the 'bubble' attribute
				placeQtips( this, bubbleContent );
			}
		});
	}
}

function placeQtips( obj, text ) {
	var positionMy = $( obj ).attr( 'bubbleMy' );
	var positionAt = $( obj ).attr( 'bubbleAt' );
	if(typeof(positionMy) == 'undefined')
		positionMy = 'bottom center';
	if(typeof(positionAt) == 'undefined')
		positionAt = 'top center';
	var contentTitle = $( obj ).attr( 'bubbleTitle' );
	
	// qtip
	var qTipOptions = {
		//content: bubbleContextCode, // Use the 'bubble' attribute of the element for the content
		content: {
			//attr: 'bubble',
			text: text,
			title: contentTitle
		}
		,style: {
			classes: 'bubbleStyle',
			tip: {
				corner: true, // Give it a speech bubble tip with automatic corner detection
				//border: 2,
				width: 20,
				height: 14
			},
			//widget: true, // Use the jQuery UI widget classes
			def: false // Remove the default styling (usually a good idea, see below)
		}
		,position: {
			my: positionMy,
			at: positionAt,
			target: false, // Defaults to target element
			container: false, // Defaults to $(document.body)
			viewport: false, // Requires Viewport plugin
			adjust: {
				x: 0, y: 0, // Minor x/y adjustments
				mouse: true, // Follow mouse when using target:'mouse'
				resize: true, // Reposition on resize by default
				method: 'flip flip' // Requires Viewport plugin
			}
		}
	};
	var pinnedBehavior = $( obj ).attr( 'bubblePinned' );
	if(typeof(pinnedBehavior) != 'undefined') {
		if(pinnedBehavior) {
			qTipOptions.show = { ready: true };
		}
		if(pinnedBehavior == 'click')
			qTipOptions.hide = { event: 'click' };
		if(pinnedBehavior == 'show')
			qTipOptions.hide = false;
		if(pinnedBehavior == 'hide')
			qTipOptions.hide = { event: 'mouseout' };
	}
//		,show: showOnLoad
//		,hide: hideOnMouse
	$( obj ).qtip( qTipOptions );
	//$( obj ).api.toggle(true); // Show
}


(function( $ ) {

    // format numeric inputs
    $.fn.checkNumbers = function() {
        var self = this;
        var iDummy = document.createElement("input");
        iDummy.setAttribute("type", "number");

        var options = arguments[0];
        var defaults = {
            allowFloat : false,
            arrowNav   : false,
            limitMin   : false,
            limitMax   : false,
            min        : 0,
            max        : 100,
            precision  : 2, // future feature
            html5      : iDummy.type !== "text",
            calculate  : function(){}
        };
        iDummy = null;

        this.settings = $.extend(defaults, options);

        this.on('paste', function( e ){ e.preventDefault() });

        this.keyup( {settings: this.settings}, function( event ) {
            // callback
            event.data.settings.calculate.call(this);
        });

        this.keydown( {settings: this.settings}, function( event ) {

            // Floating point limit
            var kC = event.which;
            var str = $(event.target).val();
            var val = parseFloat(str);
            var sel = {start: event.target.selectionStart, end : event.target.selectionEnd};

            // only one decimal point
            if( (kC == 190 || kC == 110) && str.indexOf(".") > 0 ) {
                event.preventDefault();
            }

            // // Minus sign
            // if( kC == 189  ) {
            // if( event.target.selectionStart !== 0 ) {
            // event.preventDefault();
            // }
            // else {
            // if(event.data.settings.limit){
            // if( -val < event.data.settings.min )
            // event.preventDefault();
            // else
            // $(event.target).val(-val);
            // }
            // else {
            // $(event.target).val( isNaN(val) ? '' : -val);
            // }
            // }
            // }

            // Backspace
            // if( (kC == 8) ){
            // if ( (sel.end == str.length && sel.start == 0 ) || str.length == 1){

            // if(event.data.settings.limitMin){
            // $(event.target).val(event.data.settings.min);
            // }else{
            // $(event.target).val(0);
            // }
            // event.preventDefault();
            // }
            // }

            // arrow keys
            if( event.data.settings.arrowNav ) {
                if( (kC == 38) ){
                    if( isNaN(val) ) {
                        $(event.target).val( event.data.settings.min);
                    }
                    else {
                        event.preventDefault();
                        if( val+1 <= event.data.settings.max && event.data.settings.limitMax == true ) {
                            $(event.target).val( val + 1 );
                        }
                        else {
                            if( !event.data.settings.limitMax )
                                $(event.target).val( val + 1 );
                        }
                    }
                }
                if( (kC == 40) ) {
                    event.preventDefault();
                    if( val-1 >= event.data.settings.min && event.data.settings.limitMin == true ) {
                        $(event.target).val( val - 1 );
                    }
                    else {
                        if( !event.data.settings.limitMin )
                            $(event.target).val( val - 1 );
                    }
                }
            }

            // Limit number range
            if( event.data.settings.limitMax ) {
                if( (kC >= 48 && kC <= 57) || (kC >= 96 && kC <= 105) ) {
                    if( kC >= 48 && kC <= 57 )
                        var difference = 48;
                    else
                        var difference = 96;
                    var newNumber = kC - difference;
                    var val = parseFloat((sel.start > 0 ? str.substring(0, sel.start) : "") + newNumber.toString() + (sel.end == str.length ? "" : str.substring(sel.end)));
                    if( val > event.data.settings.max ) {
                        $(this).val(event.data.settings.max);
                        event.preventDefault();
                    }
                }
            }

            // if ( event.data.settings.limitMin ) {
            // if( (kC >= 48 && kC <= 57) || (kC >= 96 && kC <= 105) ){
            // if( kC >= 48 && kC <= 57 )
            // var difference = 48;
            // else
            // var difference = 96;
            // var newNumber = kC - difference;
            // var val = parseFloat((sel.start > 0 ? str.substring(0, sel.start) : "") + newNumber.toString() + (sel.end == str.length ? "" : str.substring(sel.end)));
            // if( val < event.data.settings.min ){
            // $(this).val(event.data.settings.min);
            // event.preventDefault();
            // }
            // }
            // }

            // Allow: backspace, delete, tab, escape, and enter
            if( kC == 46 || kC == 9 || kC == 8 || kC == 27 || kC == 13 ||
                    // F5
                kC == 116 ||
                    // allow decimals
                ( ( kC == 190 || kC == 110 ) && event.data.settings.allowFloat  ) ||
                    // Allow: Ctrl+A
                ( kC == 65 && event.ctrlKey === true ) ||
                    // Allow: home, end, left, right
                ( kC >= 35 && kC <= 39 ) ) {
                // let it happen, don't do anything
                //console.log( [kC, event.shiftKey] );
                return;
            }
            else {
                // Ensure that it is a number and stop the keypress
                if( event.shiftKey || ( kC < 48 || kC > 57 ) && ( kC < 96 || kC > 105 ) ) {
                    event.preventDefault();
                }
            }


        });

        if( this.settings.limitMin == true || this.settings.limitMax == true ) {
            this.blur( {settings: this.settings}, function( event ){
                var val = $(this).val();
                if(val == "-") {
                    if(event.data.settings.limitMin) {
                        val= event.data.settings.min;
                    }
                    else {
                        val= 0;
                    }
                }
                if( event.data.settings.limitMax && parseFloat(val) > event.data.settings.max ) {
                    $(this).val(event.data.settings.max);
                }
                if( event.data.settings.limitMin && parseFloat(val) < event.data.settings.min ) {
                    $(this).val(event.data.settings.min);
                }
                if( event.data.settings.allowFloat ){
                    $(this).val( parseFloat( $(this).val() ) );
                }else{
                    $(this).val( parseInt( $(this).val() ) );
                }
                if ( val == "" ) {
                    $(this).val(event.data.settings.min);
                }

                $(this).trigger('keyup');
                //$(event.target).val(parseFloat(val));
            });
        }

        return this
    };

}( jQuery ));




// test plugin ----------------
(function( $ ) {

	$.fn.plugTest = function( options ) {
		
		var self = this;
		// defaults plugin settings
		this.settings = $.extend({
			color:           "#556b2f",
			backgroundColor: "red",
			afterCorrect:    function(){}
		}, options );

		return this.find( 'input' ).each(function(){
			// main plugin functionality
			var obj = $( this );
			obj.css({
				color: self.settings.color,
				backgroundColor: self.settings.backgroundColor
			});
			if( !isNaN($( obj ).val()) )
				privateFunct( obj );
			// call callBack function
			self.settings.afterCorrect.call( obj );
		});
		// OR
		// this.some_actions;
		// return this;
	};

	// private function
	var privateFunct = function( obj ) {
		$( obj ).css('font-weight', 'bold');
	}

}( jQuery ));
