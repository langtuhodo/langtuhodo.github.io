 // On Load functions ============================================================================
$(document).ready(function() {
	$('.display_message').animate({height: 'show'}, 400).delay(3000).fadeOut(1000);
	htmlBubble();

	if( !browser.mobile() ) {
        $('.langMenu .popupLabel').html($('.langMenu .popupContainer .active').html());
        $('.carousel').carousel();
    }else{


        $('.carousel .slider').css('width', $('.carousel .slider .item').length * 270 + "px");
    }
	
	if( $('.rightSide .content > p:last').text().trim() == '' )
		$('.rightSide .content > p:last').remove();

    var calc = $('.calculator[data-calculator]');
    calcData;

    if( calc.length > 0 ){

        if( calc.data('preload') ){
            calc.addClass('loading');
            var ajax = new ajaxBase({url: siteAbsolutePath+'ajax.calculator.php'});
            ajax.asyncLoad( { action: calc.data('preload'), id: calc.data('calculator-id') }, function( data ){
                if( data.result ){
                    calcData = data.data;
                    window[calc.data('init')]();
                    calc.removeClass('loading');
                }
            } );


            //$.get(calc.data('preload'), function( data ){
            //    calcData = parseProfileCSV( data );
            //    window[calc.data('init')]();
            //    calc.removeClass('loading');
            //});
        }

        if( typeof window[calc.data('calculator')] === 'function' ) {
            $('input.field.calc', calc).each( function (i, v) {
                var el = $(v),
                    obj = {
                        allowFloat: el.is('[data-float]'),
                        limitMin: el.is('[data-min]'),
                        limitMax: el.is('[data-max]'),
                        min: parseFloat(el.data('min')),
                        max: parseFloat(el.data('max')),
                        calculate: function(){
                            var obj = {};
                            $('.calculator .field.calc').each(function(){
                                obj[ $(this).data('param') ] = parseFloat( $(this).val() );
                            });
                            window[calc.data('calculator')](obj);
                        }
                    };
                el.checkNumbers(obj);
            }).eq(0).trigger('keyup');

            $(calc).on('click', '#calculate', function(e){
                e.preventDefault();
                var obj = {};
                $('.calculator .field.calc').each(function(){
                    obj[ $(this).data('param') ] = parseFloat( $(this).val() );
                });
                window[calc.data('calculator')](obj);
            });
            if( calc.is(':not([data-init])') )
            $('#calculate').trigger('click');
        }
    }


	$('.tableContent').click( function(e){
		
		//if( $(this).hasClass('view') && e.target === $('.tableContent .tableContainer')[0] ){
			$(this).toggleClass('view');
			
		if( $(this).hasClass('view') ){
			$('html,body').css('overflow', 'hidden');
		}else{
			$('html,body').css('overflow', 'auto');
		}
		//}else{
			//$(this).addClass('view');
		//}
	});
	
	$('.categories .group .title').click(function(e){
		var el = $(this).parent();
		if( el.hasClass('active') ){
			el.removeClass('active').children('.items').slideUp();
		}else{
			el.addClass('active').children('.items').slideDown();
		}
	});
	$('.categories .group.active').children('.items').slideDown();
	
	
	$(document).keyup(function(e) {
	  if (e.keyCode == 27) { 
		if( $('.tableContent').hasClass('view') ){
			$('.tableContent').removeClass('view');
		}
	  }
	});
	
	$('.tableContent td').not('.header').hover(function() {
    var t = parseInt($(this).index()) + 1;
	
    $('.tableContent tr td:nth-child(' + t + ')').not('.header').css({'background-color': 'rgba(200, 200, 200, 0.3)'});
	

    },
    function() {
        var t = parseInt($(this).index()) + 1;
        $('.tableContent tr td:nth-child(' + t + ')').not('.header').css({'background-color': 'transparent'});
    });

    $('.field.calc').keypress(function (e) {
        var calcFn =  $(this).parents().find('#calculate').attr('onclick');

        var key = e.which;
        if(key == 13)  // the enter key code
        {
            eval(calcFn);
        }
    });

	if( browser.ie() < 9 ){
		$('.carousel .container .slider .item:nth-child(5n)').css({
			'margin-left': '39px'
		});
	}


});
