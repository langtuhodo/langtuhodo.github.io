// call jRespond and add breakpoints
var jRes = jRespond([
    {
        label: 'mobile',
        enter: 0,
        exit: 767
    },{
        label: 'tablet',
        enter: 768,
        exit: 1199
    },{
        label: 'desktop',
        enter: 1200,
        exit: 10000
    }
]);

$(document).ready(function(){
    $('.flexslider').flexslider({
            animation: "slide",
            controlNav: true,
            directionNav: true,
            prevText: "Previous",
            nextText: "Next",
            slideshow: true,
            slideshowSpeed: 5500,
        });
    
    $('body').show(); // stop load flicker
    
    // Desktop Primay Navigation Dropdowns
    $('#primary-nav li').hoverIntent(primaryNavConfig);
    
    //IE Placeholder/Value
    $("[placeholder]").focus(function(){
        var input = $(this);
        if(input.val() == input.attr("placeholder")){
            input.val("");
            input.removeClass("placeholder");
        }
    });
    $("[placeholder]").blur(function(){
        var input = $(this);
        if(input.val() == "" || input.val() == input.attr("placeholder")){
            input.addClass("placeholder");
            input.val(input.attr("placeholder"));
        }
    });
    $("[placeholder]").parents("form").submit(function(){
        $(this).find("[placeholder]").each(function(){
            var input = $(this);
            if(input.val() == input.attr("placeholder")){
                input.val("");
            }
        });
    });
    
    // Form Validation
    if($.isFunction($.fn.validate)){ 
        $('#content form').validate();
    }
    
    // Clone primary navigation for mobile nav dropdown
    $('#primary-nav').clone().prop("id", "mobile-nav").insertAfter('#primary-nav');
    // Change the list-item IDs
    $('#mobile-nav li').each(function(){
        var currentID = $(this).attr('id');
        $(this).prop('id', 'm'+currentID);
    });
    
    // Mobile & Tablet primary nav dropdown trigger
    $('#header .nav-trigger').click(function(e){
        e.preventDefault();
       $(this).toggleClass('active');
       $('#mobile-nav').slideToggle();
       //$('#mobile-nav').toggle('slide', 'left', 500); 
    });
    
    // Mobile Search Bar Trigger
    $('#header .mobile-search-trigger').click(function(e){
        e.preventDefault();
       $('#header .search-form').slideToggle(); 
       $(this).toggleClass('form-hidden');
    });
    // Focus on search input
    $('#header .mobile-search-trigger.form-hidden').click(function(e){
        e.preventDefault();
        $('#header .search-form .form-control').focus();
    });
    
    // Mobile nav open/close child menus
    $('#mobile-nav li.parent > a span').click(function(e){
        e.preventDefault();
        $(this).parent().parent().toggleClass('open');
        $(this).parent().siblings('.dd').slideToggle();
    });
    
    // Bootstrap Image Slideshow - Add active class to initiate slideshow
    $("#carousel-slideshow .carousel-inner > div:first-child").addClass("active");
    
    // Mobile Secondary Dropdown Navigation
    $('.secondary-nav-trigger').click(function(e){
        e.preventDefault();
        $(this).toggleClass("open");
        $('#secondary-nav > ul').slideToggle();
    });
    
 
    // Slider - Company Logos in footer
    $('.slider .logos').slick({
        dots: false,
        infinite: true,
        speed: 300,
        //centerMode: true,
        variableWidth: true,
        prevArrow: "<div class='slick-prev'><i class='glyphicon glyphicon-triangle-left' aria-label='Previous'></i></div>",
        nextArrow: "<div class='slick-next'><i class='glyphicon glyphicon-triangle-right' aria-label='Next'></i></div>",
        slidesToShow: 1
/*
        slidesToScroll: 6,
        responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 599,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
*/
    });
    
    // Portfolio
    //$(".carousel #item-1").addClass("active");
    $('.portfolio-buckets .bkt-portfolio > a, .portfolio-header .link-one').click(function(e){
        e.preventDefault();
        var portfolioId = $(this).attr("data-item-target");
        $('#portfolio-slideshow .item').removeClass('active');
        $('#portfolio-slideshow #'+portfolioId).addClass('active');
    });
    // Load More - Portfolio
    var bucketCount = $('.portfolio-buckets .bkt-portfolio').length;
    //var bucketCountPortfolio = $('#page-18 .portfolio-buckets .bkt-portfolio').length;
    //if (bucketCount > 3) {$('.portfolio-buckets .btn-load').css( "display", "block");}
    //if (bucketCountPortfolio > 6) {$('.portfolio-buckets .btn-load').css( "display", "block");}
    // Bucket Count
    if (bucketCount > 2) {$('.portfolio-buckets').addClass('buckets-over-2');}
    if (bucketCount > 3) {$('.portfolio-buckets').addClass('buckets-over-3');}
    if (bucketCount > 4) {$('.portfolio-buckets').addClass('buckets-over-4');}
    if (bucketCount > 6) {$('.portfolio-buckets').addClass('buckets-over-6');}
    $('.portfolio-buckets .btn-load').click(function(e){
        e.preventDefault();
        $(this).hide();
        $('.portfolio-buckets .bkt-portfolio').fadeIn(); 
    });
    // Filtering - Portfolio
    $("#page-18 .portfolio-buckets .bkt-portfolio").addClass("mix");
    $("#filter-buckets").mixItUp({
        layout: {display: 'block'},
        animation: {effects: 'fade rotateY(-10deg)'},
        callbacks: {
            onMixLoad: function(state){
                $("#page-18 .portfolio-buckets .bkt-portfolio:nth-child(n+7)").hide();
            }
        }
    });
    
    $("#page-18 #secondary-nav a").click(function(){
        // Active state
        $('#secondary-nav li').removeClass('current');
        $(this).parent('li').addClass('current');
        // Hide "Load More" button when click filter option
        $(".portfolio-buckets .btn-load").hide();
    });
    
    // Catalog tables
    
    $(".catalog-table-header").click(function(){
        $(this).toggleClass("collapsed");
        $(this).next(".catalog-table-group").slideToggle();
    });
    
    //$('.carousel').carousel();
    // Active Indicators
/*
    $(".carousel").on("slide.bs.carousel", function() {
        if ($(".indicators li:last-child").hasClass("active")) {
            $(".indicators li:last-child").removeClass("active");
            $(".indicators li:first-child").addClass("active");
        } else {
            $(".indicators").find(".active").removeClass("active").next().addClass("active");
        };  
    });
*/
    
    
    ///////////////////// Media Queries
    
    // Tablet & Mobile
    jRes.addFunc({
        breakpoint: ['tablet','mobile'],
        enter: function() {
            
        // Tablesaw
    
        //$( "#page-40 #content-content" ).trigger( "enhance.tablesaw" );
        $( "#content-content" ).trigger( "enhance.tablesaw" );
            
        },
        exit: function() {
            //$(".secondary-nav-trigger").unbind('click');
        }
    });
    
    // Tablet
    jRes.addFunc({
        breakpoint: ['tablet'],
        enter: function() {
            // Dropdown trigger for Android
            $('#primary-nav > ul > li.parent > a').one("click", function(e) {
                e.preventDefault();
                $(this).parent().siblings('.dd').slideDown(); 
            });
        },
        exit: function() {
            
        }
    });
    
    // Desktop
    jRes.addFunc({
        breakpoint: ['desktop'],
        enter: function() {
            // Sticky Navigation Bar
            var headerHeight = $('#header').height();
            //alert("The header height is "+headerHeight+" pixels")
            $(window).scroll(function() {
                if ($(window).scrollTop() > headerHeight) {
                    $("body").addClass("anchor-navbar");
                }
                else {
                    $("body").removeClass("anchor-navbar");
                };
            });
            
            // Adjust width of Contact button so navbar spans 100% width
/*
            var $li1 = $('#primary-nav #nav-li-2').outerWidth();
            var $li2 = $('#primary-nav #nav-li-4').outerWidth();
            var $li3 = $('#primary-nav #nav-li-8').outerWidth();
            var $li4 = $('#primary-nav #nav-li-9').outerWidth();
            var $li5 = $('#primary-nav #nav-li-14').outerWidth();
            var $li6 = $('#primary-nav #nav-li-18').outerWidth();
            var $li7 = $('#primary-nav #nav-li-15').outerWidth();
            var $li8 = $('#primary-nav #nav-li-17').outerWidth();
            var contactLiWidth = (1160 - $li1 - $li2 - $li3 - $li4 - $li5 - $li6 - $li7 - $li8);
            $('#primary-nav #nav-li-20').css("width", contactLiWidth);
*/
        },
        exit: function() {
            
        }
    });
    
    $("#ribbon").click(function() {
      window.location = $(this).find("a").attr("href"); 
      return false;
    });
    $('#ribbon').hover(function() {
            $(this).css('cursor','pointer');
        });
    
    /* Sticky Catalog Table Headers */
    if ($(window).width() > 1024) {
        $(window).scroll(function() {
                
                var contentheight = $("#content-wrap").height();        
                var scrolled = $(this).scrollTop();             
                if ( 535 < scrolled && scrolled < contentheight ){          
                    $(".catalog-table-header").addClass("sticky");
        
                } else {
                    $(".catalog-table-header").removeClass("sticky");           
                }
            });         
    };    
    
    /* Reveal Steps */
    $( '.steps .step-1' ).click(function() {
        if ( $('.steps .step-1 .options div').hasClass('selected') ) {
            $( '.steps .step-2' ).show();
        } else {
            $( '.steps .step-2' ).hide();
            $( '.steps .step-3' ).hide();
            $( '.steps .step-4' ).hide();
        }
    });
    
    $( '.steps .step-2' ).click(function() {
        if ( $('.steps .step-2 .options div').hasClass('selected') ) {
            $( '.steps .step-3' ).show();
        } else {
            $( '.steps .step-3' ).hide();
            $( '.steps .step-4' ).hide();
        }
    });
    
    $( '.steps .step-3' ).click(function() {
        if ( $('.steps .step-3 .options div').hasClass('selected') ) {
            $( '.steps .step-4' ).show();
        } else {
            $( '.steps .step-4' ).hide();
        }
    });
    
    /* Check Option Selected */
    $( '.steps .options div' ).click(function() {
        $(this).toggleClass('selected').siblings().removeClass('selected');
    });
    
    /* Inactive Options */
    
    //Cold Finished + Alloy + Hexagonal/Square â€“ hexagonal not working
    $('.options div').click(function() {
        if ( $('.cold-finished').hasClass('selected') && $('.alloy').hasClass('selected') ) {
            $('.hexagonal').hide();
             $('.square').hide();
        } else {
            $('.hexagonal').show();
            $('.square').show();
        }
    });
    
     //Hot Rolled + Carbon + Hexagonal â€“ not working
    $('.options div').click(function() {
        if ( $('.hot-rolled').hasClass('selected') && $('.carbon').hasClass('selected') ) {
            $('.hexagonal').hide();
        } 
    });
    
     //Hot Rolled + Alloy + Hexagonal
    $('.options div').click(function() {
        if ( $('.hot-rolled').hasClass('selected') && $('.alloy').hasClass('selected') ) {
            $('.hexagonal').hide();
        } 
    });
    
    $(".inactive").click(function(e){         
            e.preventDefault();
    });
    
    /* Results */
    $('.step-4 .view-results').click(function() {
        
        /* Cold Finished + Carbon + Round */
        if ($('.cold-finished').hasClass('selected') && $('.carbon').hasClass('selected') && $('.round').hasClass('selected')) {
            $('html, body').animate({scrollTop: $('#CFCarbonRD').offset().top - 100}, 700);
            
        }
        
        /* Cold Finished + Carbon + Hexagon */
        if ($('.cold-finished').hasClass('selected') && $('.carbon').hasClass('selected') && $('.hexagonal').hasClass('selected')) {
            $('html, body').animate({scrollTop: $('#CFCarbonHX').offset().top - 100}, 700);
            
        }
        
        /* Cold Finished + Carbon + Square */
        if ($('.cold-finished').hasClass('selected') && $('.carbon').hasClass('selected') && $('.square').hasClass('selected')) {
            $('html, body').animate({scrollTop: $('#CFCarbonSQ').offset().top - 100}, 700);
            
        }
        
        /* Cold Finished + Alloy + Round */
        if ($('.cold-finished').hasClass('selected') && $('.alloy').hasClass('selected') && $('.round').hasClass('selected')) {
            $('html, body').animate({scrollTop: $('#CFAlloyRD').offset().top - 100}, 700);
            
        }
        
        /* Hot Rolled + Carbon + Round */
        if ($('.hot-rolled').hasClass('selected') && $('.carbon').hasClass('selected') && $('.round').hasClass('selected')) {
            $('html, body').animate({scrollTop: $('#HWCarbonRD').offset().top - 100}, 700);
            
        }
        
        /* Hot Rolled + Carbon + Square */
        if ($('.hot-rolled').hasClass('selected') && $('.carbon').hasClass('selected') && $('.square').hasClass('selected')) {
            $('html, body').animate({scrollTop: $('#HWCarbonSQ').offset().top - 100}, 700);
            
        }
        
        /* Hot Rolled + Alloy + Round */
        if ($('.hot-rolled').hasClass('selected') && $('.alloy').hasClass('selected') && $('.round').hasClass('selected')) {
            $('html, body').animate({scrollTop: $('#HWAlloyRD').offset().top - 100}, 700);
            
        }
        
        /* Hot Rolled + Alloy + Square */
        if ($('.hot-rolled').hasClass('selected') && $('.alloy').hasClass('selected') && $('.square').hasClass('selected')) {
            $('html, body').animate({scrollTop: $('#HWAlloySQ').offset().top - 100}, 700);
            
        }
        
    });
    
      $('#category').change(function(){
          if($(this).val() == 'hotrolled'){ 
              $('.hotrolled').css("display","inline");
            $('.hotrolled .selectpicker').css("display","inline");
            $('.coldfinished .selectpicker').css("display","none");
            $('#dropexam').css("display","none");
          
          }
          if($(this).val() == 'coldfinished'){ 
              $('.coldfinished .selectpicker').css("display","inline");
              $('.hotrolled .selectpicker').css("display","none");
              $('#dropexam').css("display","none");
          }
          
         
        });
        
         $('#category').change(function(){
           if($(window).width() < 1199){     
          if($(this).val() == 'hotrolled'){ 
            $('.hotrolled .selectpicker').css("display","block");
            $('.coldfinished .selectpicker').css("display","none");
            $('#dropexam').css("display","none");
          }
         
          if($(this).val() == 'coldfinished'){ 
              $('.coldfinished .selectpicker').css("display","inline");
              $('.hotrolled .selectpicker').css("display","none");
              $('#dropexam').css("display","none");
          }
           
         }
        });


    function redirectDropdown(){
    var href = '/' + $(this).find('option:selected').attr('data-href');
           
            $('.grade').attr('href',href);
    }
    $('#hotrolled').change(function(){
        var href = '/' + $(this).find('option:selected').attr('data-href');
                
                $('.grade').attr('href',href);
                $('.grade').css("pointer-events","auto");
                
    /*    redirectDropdown();*/
    });
    
    $('#coldfinished').change(function(){
        var href = '/' + $(this).find('option:selected').attr('data-href');
               
                $('.grade').attr('href',href);
                $('.grade').css("pointer-events","auto");
        /*redirectDropdown();*/
    });
    
    $('#roundsCalculator .btn-submit').click(function() {
        $("#roundsCalculator .rfq-reset").show();
    });
    
    $('#hexCalculator .btn-submit').click(function() {
        $("#hexCalculator .rfq-reset").show();
    });
    
    $('#squareCalculator .btn-submit').click(function() {
        $("#squareCalculator .rfq-reset").show();
    });

    
});

//primaryNav Hover Intent Configuration
var primaryNavConfig = {
    sensitivity: 10,
    interval: 100,
    over: primaryOver,
    out: primaryOut,
    timeout: 250
};

function primaryOver(){$(this).find(">.dd").slideDown('fast'); $(this).addClass("hover");}
function primaryOut(){$(this).find(">.dd").slideUp('fast'); $(this).removeClass("hover");}