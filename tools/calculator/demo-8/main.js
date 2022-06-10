require(['jquery','slick','domReady!'], function($){
    //sticky header
    function stickHead(){
        if ($(this).scrollTop() > 1){
            $('.page-header').addClass("sticky");
            $('#beforeMain').addClass("sticky");
            $('.catLoginWrap').addClass("sticky");
        } else {
            $('.page-header').removeClass("sticky");
            $('#beforeMain').removeClass("sticky");
            $('.catLoginWrap').removeClass("sticky");
        }
    };
    stickHead();
    $(window).scroll(stickHead);
    //Move elements for mobile
    function checkWidth() {
        var windowsize = $(window).width();
        //if window size less than 1100px
        if (windowsize < 1100) {            
            $('#tContact').appendTo($('nav.navigation')); 
            $('.loginCTA').appendTo($('nav.navigation'));
        } else {
            $('nav.navigation #tContact').insertBefore($('.miniquote-wrapper'));
            $('nav.navigation .loginCTA').appendTo($('div.headerLoginWrap'));
        }
        //if window size less than 1025px
        if (windowsize > 1025) {
                // locations map parent height:
            if ($('.cms-home .sectionWrap.location .sectionLeft img').length > 0) {
                $('.cms-home .sectionWrap.location').height($('.sectionWrap.location .sectionLeft img').outerHeight());
            } else {
                $('.cms-home .sectionWrap.location').css('height','unset !important');
            }
        } 
  
        if (windowsize < 768) {
            if ($('header nav.navigation .block.block-search').length > 0) {
                //do nothing -- search is already moved
            } else {
                //move search into nav
                $('header .block.block-search').prependTo($('nav.navigation'));
            }
        } else {
            //move search out of nav 
            $('header nav.navigation .block.block-search').insertAfter($('#tLang'));
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);

    //HP Quick Grade Search
    if ($('#hpDrop').length > 0) {
        $('#hpDrop').click(function() {
            $('.dropContent').toggle();
        });
    };

    //HP Film Slider
    $('.responsive').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
                {
                    breakpoint: 480,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //Film Slider a href feux link
    $('.filmSlider .slick-slide').click(function(){
        href = $(this).find('a').attr('href');
        if ($(this).find('a').attr('target') != '_blank'){
            window.location.href = href;
        } else {
            window.open(href,'_blank'); 
        }
    });

    //blog a href feux link
    $('.blogStrip li').click(function(){
        href = $(this).find('a').attr('href');
        if ($(this).find('a').attr('target') != '_blank'){
            window.location.href = href;
        } else {
            window.open(href,'_blank'); 
        }
    });

    // Video Gallery
    $('.sectionVideo').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        swipe:false,
        touchMove:false,
        accessibility: false,
        centerPadding: 0,
        responsive: 
        [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 788,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 470,
                settings: {
                    slidesToShow: 1
                }
            }            
        ]
    }); 

    // Category Buckets faux link
    if ($('.catBuckWrap').length > 0) {
        $('.container.category-bucket__item').click(function(){
            href = $(this).find('a').attr('href');
            if ($(this).find('a').attr('target') != '_blank'){
                window.location.href = href;
            } else {
                window.open(href,'_blank'); 
            }
        });
    };

    //Table expand
    if ($('table.dropdown').length > 0) {
        $('table.dropdown thead').click(function() {
            $(this).closest('table').find('tbody').toggle();
            //$(this).parent('table').closest('tbody').toggle();
        });
    };

    //Mobile Table Scroll
    $('.page-layout-2columns-left .product.attribute.description table, .page-layout-1column .category-description table, .page-layout-2columns-left .product.attribute.overview table, .blog-page .post-content table').wrap('<div class="table-responsive"></div>');    

    // Scroll To Top
    $("#fScroll").click(function (){
        $("body,html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    //calculator tabs 
    $('.calculators .nav-tabs > li > a').click(function(e){
        event.preventDefault();//stop browser to take action for clicked anchor
                    
        //get displaying tab content jQuery selector
        var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');                  
                    
        //find actived navigation and remove 'active' css
        var actived_nav = $('.nav-tabs > li.active');
        actived_nav.removeClass('active');
                    
        //add 'active' css into clicked navigation
        $(this).parents('li').addClass('active');
                    
        //hide displaying tab content
        $(active_tab_selector).removeClass('active');
        $(active_tab_selector).addClass('hide');
                    
        //show target tab content
        var target_tab_selector = $(this).attr('href');
        $(target_tab_selector).removeClass('hide');
        $(target_tab_selector).addClass('active');
    });

    //calculator dropdowns
    $('.calculators .accordion-toggle').click(function(e){
        //stop browser to take action for clicked anchor
        event.preventDefault();
                            
        //get ID for div we will be showing
        var active_content_selector = $('.calculators .accordion-toggle').attr('href'); 
        
        //Remove active from all links
        $('.accordion-toggle').removeClass('active');
                    
        //find expandend content and remove class to collapse
        var actived_content = $('.accordion-body.collapse.in');
        actived_content.removeClass('in');
                    
        //expand content add class to link
        var target_content_selector = $(this).attr('href');
        $(target_content_selector).addClass('in');
        $(this).addClass('active');
    });
    //qty decimal override
    $('#qty,.qty').keydown(function(e){
        var kCode = (e.which || e.keyCode)
        if(kCode == 190 || kCode == 110) return false;
        if(e.which === 86 && (e.ctrlKey || e.metaKey)) return false;
    });
    //remove target blank
    $('.amlocator-link').removeAttr('target');
    $('body').on('click', 'a.amlocator-link[target="_blank"]', function() {
        event.preventDefault();
        $(this).removeAttr('target');
        window.location.href = $(this).attr("href");        
    });
    //disable quote sign in with enter button
    $('body.quotation-quote-index').on('keypress','#customer-email', function (e) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    //404 go back 
    $('#goBack').on('click', function(e){
        e.preventDefault();
        window.history.back();
    });

    //add covid message to top
    /*if(jQuery('#covidmsg').length<1){
        $covidMsg = '<div id="covidmsg" class="sticky text-center" style="display:none; background: #000;color: #fff;padding: 20px;font-size: 18px;"><i class="fas fa-exclamation-circle" style="font-size: 25px;padding: 0 10px;color: orange;"></i> Health and safety are top priorities for our employees and customers. <a href="https://www.leecosteel.com/covid19-updates/" style="color: #adc72c;">Read more</a></div>'
        jQuery('.page-wrapper').before($covidMsg);
        jQuery('#covidmsg').slideDown("slow");    
    }*/
    
    //translate page to Spanish if it is in an es category
    /*if (window.location.href.indexOf("/es/") > -1) {
        {doGTranslate('es|es');}
    }*/
});