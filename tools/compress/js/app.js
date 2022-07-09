$(document).ready( function(){
    //set cache
    if(localStorage['visit_counter'] == undefined){
        localStorage['visit_counter'] = 1;
    } else {
        localStorage['visit_counter'] = parseInt(localStorage['visit_counter']) + 1;
    }

    if(parseInt(localStorage['visit_counter']) %8 == 0 ){
        
        feedback_modal = new bootstrap.Modal(document.getElementById('feedback_modal'), {
                                    keyboard: false,
                                    backdrop: 'static'
                                });
        feedback_modal.show()

        $('.close_feedback_modal').click(function(){
            
            feedback_modal.hide();
        });
    }

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    if($("#css-formatter_input").length) {
        initialize_codemirror("css-formatter_input", 'css');
        initialize_codemirror("css-formatter_output", 'css');
    }
    if($("#html-formatter_input").length) {
        initialize_codemirror("html-formatter_input", 'xml');
        initialize_codemirror("html-formatter_output", 'xml');
    }
    if($("#javascript-formatter_input").length) {
        initialize_codemirror("javascript-formatter_input", 'javascript');
        initialize_codemirror("javascript-formatter_output", 'javascript');
    }
    if($("#compress-javascript_input").length) {
        initialize_codemirror("compress-javascript_input", 'javascript');
        initialize_codemirror("compress-javascript_output", 'javascript');
    }

    if($("#compress-css_input").length) {
        initialize_codemirror("compress-css_input", 'css');
        initialize_codemirror("compress-css_output", 'css');
    }
    if($("#json-formatter_input").length) {
        initialize_codemirror("json-formatter_input");
        initialize_codemirror("json-formatter_output");
    }

    if($("#sql-formatter_input").length) {
        initialize_codemirror("sql-formatter_input", 'sql');
        initialize_codemirror("sql-formatter_output", 'sql');
    }

    if($("#html-to-markdown-converter_input").length) {
        initialize_codemirror("html-to-markdown-converter_input");
        initialize_codemirror("html-to-markdown-converter_output");
    }

    var search_options = {
      valueNames: [ 'name', 'description' ]
    };
    // Init list
    var toolList = new List('tools-list', search_options);

    var clipboard = new ClipboardJS('.dev_tool_copy');
    clipboard.on('success', function(e) {
        toastr.success('Copied');
    });

    var copyShareLink = new ClipboardJS('#copy-share-link');

    $('#add_field').click( function(){
        if ($('#faker_field_table tbody').find('tr').length > 9) {
            alert('Maximum 10 fields can be added');
            return false;
        }

        $('#faker_field_table').append($('#hidden_faker_row').html());
        $('#faker_field_table tr:last').find('.faker_field').last().focus();
    });

    $(document).on('click', '.remove-row', function (e) {
        $(this).closest('tr').remove();
    });

    if($("#shared_content").length) {
        var code_language = $('#code_language').val();
        initialize_codemirror("shared_content", code_language);
        var cm = $("#shared_content").next(".CodeMirror").get(0).CodeMirror;
        //cm.setSize(null, 500);
    }

    $('select#code_language').select2({
        theme: "bootstrap-5"
    });
    $(document).on('select2:open', () => {
        let allFound = document.querySelectorAll('.select2-container--open .select2-search__field');
        allFound[allFound.length - 1].focus();
    });

    var urlCopy = new ClipboardJS('#url_copy_btn');
    urlCopy.on('success', function(e) {
        toastr.success('Copied');
    }); 

    $('#lorem_ipsum_generator_form').on('submit', function(e) {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax({
            url: '/generate-lorem-ipsum',
            type: "POST",
            data: data,
            success: function (response) {
                $(".dev_tool_result").val(response);  
                toastr.success('done');        
            }
        });
    });

    $('#generate_credit_card_form').on('submit', function(e) {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax({
            url: '/generate-credit-card',
            type: "POST",
            data: data,
            success: function (response) {
                $(".dev_tool_result").val(response);  
                toastr.success('done');        
            }
        });
    });

    $('#placeholder_image_generator_form').on('submit', function(e) {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax({
            url: '/generate-placeholder-image',
            type: "POST",
            data: data,
            success: function (response) {
                $(".dev_tool_result").val(response); 

                $('#placeholder_image').attr('src', response);
                $('#placeholder_image').show();
                toastr.success('done');        
            }
        });
    });

    $('#code_snapshot').click( function(){
        var editor = $("#shared_content").next(".CodeMirror").get(0).CodeMirror;
        var url = "https://carbon.now.sh?code=" + encodeURI(editor.getValue());
        window.open(url, '_blank'); 
    })

    $('#download_image').click(function(e) {
        var src = $("#qrcode").find("img").attr("src");
        $('#download_image').attr("href", src);
    });

    image_input = document.getElementById("image");
    if (image_input) {
        image_input.addEventListener("change", function () {
            getImgData();
        });
    }

    //Used in string utils
    $('select#remove').change(function(){
        if($(this).val() == 3){
            $('#remove_specify').removeClass('d-none');
        } else {
            $('#remove_specify').addClass('d-none');
        }
    });

    //Used in string utils
    $('select#replace').change(function(){
        if($(this).val() == 3){
            $('#replace_specify').removeClass('d-none');
        } else {
            $('#replace_specify').addClass('d-none');
        }
    });

});
function getImgData() {
    image_input = document.getElementById("image");
    const files = image_input.files[0];
    if (files) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(files);
        fileReader.addEventListener("load", function () {
            $('#hidden_image').val(this.result);
        });    
    }
}
function dev_tool_submit(b) {
    var btn = $(b);
    var container = btn.closest("div.dev_tool_container");
    var textarea = container.find("textarea.dev_tool_text");
    var formatter = textarea.attr("data-formatter");
    var ajaxurl = $('#dev_tool_admin_url').val();
    var val = textarea.val();

    if (formatter == "html-to-pdf-converter") {
        val = CKEDITOR.instances["html-to-pdf-converter_input"].getData();
    }

    if(val == "") {
        toastr.error("Invalid input");
        return false;
    }
    if(formatter == "json-decoder") {
        try {
            val = JSON.parse(val);
            document.getElementsByClassName("output_card")[0].scrollIntoView(false);
            toastr.success('done');
            return true;
        } catch (e) {
            console.log(e);

            toastr.error('Invalid json input');
            return true;
        }
    }

    if(formatter == "base64-encoder") {
        container.find(".dev_tool_result").val(btoa(val));
        document.getElementsByClassName("output_card")[0].scrollIntoView(false);
        toastr.success('done');
        return true;
    }

    if(formatter == "base64-decoder") {
        container.find(".dev_tool_result").val(atob(val));
        document.getElementsByClassName("output_card")[0].scrollIntoView(false);
        toastr.success('done');
        return true;
    }

    if(formatter == "html-to-pdf-converter") {
        window.jsPDF = window.jspdf.jsPDF;
        const pdf = new window.jsPDF('p', 'pt', 'a4');
        var val = "<div style='width: 600px; '>"+val+"</div>";

        pdf.html(val, {
            callback: function (doc) {
                doc.save('doc.pdf');
            },
            margin: [10, 10, 10, 10],
        });


        toastr.success('done');
        return true;
    }

    if(formatter == "qr-code-generator") {
            $('#qrcode').html('');
            $('#download_image').show();
            var color = '#000000';
            if ($('#color').val().trim() != '') {
                color = $('#color').val();
            }
            var opts = {
                text: val,
                margin: 4,
                width: 256,
                height: 256,
                quietZone: 20,
                colorDark: color,
                colorLight: "#ffffffff", 
            }

            if ($('#title').val().trim() !== '') {
                opts.title = $('#title').val();
                opts.titleFont = "bold 18px Arial";
                opts.titleColor = "#004284";
                opts.titleBackgroundColor = "#ffffff";
                opts.titleHeight = 60;
                opts.titleTop = 20;
            }

            if ($('#subtitle').val().trim() !== '') {
                opts.subTitle = $('#subtitle').val();
                opts.subTitleFont = "14px Arial";
                opts.subTitleColor = "#4F4F4F";
                opts.subTitleTop = 40;
            }
            if ($('#hidden_image').val().trim() !== '') {
                opts.logo = $('#hidden_image').val();
            }

            new QRCode(document.getElementById("qrcode"), opts);
    }

    if(formatter == "javascript-formatter" || formatter == "html-formatter" || 
        formatter == "css-formatter" || formatter == "compress-javascript"
        || formatter == "compress-css" || formatter == "json-formatter" 
        || formatter == "sql-formatter" || formatter == 'html-to-markdown-converter') {
        var spaces = parseInt(container.find(".tabsize").val());
        var wrap = container.find(".wrap-line-length").val();
        var max_preserve_newlines = container.find(".max-preserve-newlines").val();
        var beautify_option = {
            wrap_line_length: wrap,
            max_preserve_newlines: max_preserve_newlines
        };
        if(spaces == 0) {
            beautify_option.indent_with_tabs = true;
        } else {
            beautify_option.indent_size = spaces;
        }

        if(formatter == "javascript-formatter") {
            var editor = $("#javascript-formatter_output").next(".CodeMirror").get(0).CodeMirror;
            editor.getDoc().setValue(js_beautify(val, beautify_option)); 
        }
        if(formatter == "html-formatter") {
            var editor = $("#html-formatter_output").next(".CodeMirror").get(0).CodeMirror;
            editor.getDoc().setValue(html_beautify(val, beautify_option));
        }
        if(formatter == "css-formatter") {
            var editor = $("#css-formatter_output").next(".CodeMirror").get(0).CodeMirror;
            editor.getDoc().setValue(css_beautify(val, beautify_option));
        }

        if(formatter == "compress-javascript") {
            const result = Terser.minify(val);
            const getMinified = async () => {
                const minified = await result;
                var editor = $("#compress-javascript_output").next(".CodeMirror").get(0).CodeMirror;
                editor.getDoc().setValue(minified.code);
            };
            getMinified();
        }

        if(formatter == "compress-css") {
            var editor = $("#compress-css_output").next(".CodeMirror").get(0).CodeMirror;
            editor.getDoc().setValue(minify_css(val));
        }

        if(formatter == "json-formatter") {
            val = JSON.parse(val);

            if (spaces == 0) {
                spaces = "\t";
            }
            var editor = $("#json-formatter_output").next(".CodeMirror").get(0).CodeMirror;
            editor.getDoc().setValue(JSON.stringify(val, null, spaces));
        }

        if(formatter == "sql-formatter") {
            var indent = spaces > 0 ? numToSpaces(spaces) : '   ';
            var is_uppercase = false;
            if ($('#is_uppercase').is(':checked')) {
                is_uppercase = true;
            }
            var editor = $("#sql-formatter_output").next(".CodeMirror").get(0).CodeMirror;
            editor.getDoc().setValue(window.sqlFormatter.format(val, 
                {indent: indent, uppercase: is_uppercase}));
        }

        if(formatter == "html-to-markdown-converter") {
            var turndownService = new TurndownService({
                    headingStyle: 'atx',
                    codeBlockStyle: 'fenced'
                });
            var markdown = turndownService.turndown(val)
            var editor = $("#html-to-markdown-converter_output").next(".CodeMirror").get(0).CodeMirror;
            editor.getDoc().setValue(markdown);
        }

        document.getElementsByClassName("output_card")[0].scrollIntoView(false);
        toastr.success('done');
        return true;
    }

    if(formatter == 'sorting-list'){
        sortby = $('#sortby').val();

        val_array = val.replace( /\n/g, "@@@#" ).split( "@@@#" );

        output = '';
        if(sortby == 1){
            output = val_array.sort();
        } else if(sortby == 2){
            output = val_array.sort().reverse();
        } else if(sortby == 3){
            output = val_array.sort((a, b) => b.length - a.length).reverse();
        } else if(sortby == 4){
            output = val_array.sort((a, b) => b.length - a.length);
        } else if(sortby == 5){
            output = val_array.reverse();
        }

        container.find(".dev_tool_result").val(output.join("\n"));
        document.getElementsByClassName("output_card")[0].scrollIntoView(false);

        toastr.success('done');
        return true;
    }

    if(formatter == 'string-utils'){

        convert = $('#convert').val();
        remove = $('#remove').val();
        replace = $('#replace').val();


        output = val;

        if(convert == 1){
            temp = val.toLowerCase();
            output = temp.charAt(0).toUpperCase() + temp.slice(1);
        } else if(convert == 2){
            output = val.toUpperCase();
        } else if(convert == 3){
            output = val.toLowerCase();
        } else if(convert == 4){
            output = val.replace(/\w\S*/g,
                            function(txt) {
                                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                            }
                        );
        }

        remove_char = '';
        if(remove == 1){
            remove_char = '\n';
        } else if(remove == 2){
            remove_char = ' ';
        } else if(remove == 3){
            remove_char = $('#remove_specify').val();
        }
        console.log(remove_char);

        replace_char = '';
        if(replace == 1){
            replace_char = '\n';
        } else if(replace == 2){
            replace_char = ' ';
        } else if(replace == 3){
            replace_char = $('#replace_specify').val();
        }
        console.log(replace_char);

        output = output.replaceAll(remove_char, replace_char);
        

        container.find(".dev_tool_result").val(output);
        document.getElementsByClassName("output_card")[0].scrollIntoView(false);

        toastr.success('done');
        return true;
    }

    var data = {
        text: val,
        formatter: formatter
    };

    $.ajax({
        url: '/format',
        type: "POST",
        data: data,
        success: function (response) {
            container.find(".dev_tool_result").val(response);
            document.getElementsByClassName("output_card")[0].scrollIntoView(false);
            toastr.success('done');        
        }
    });
}

function numToSpaces(num) {
    var spaces = '';

    for (i = 1; i <= num; i++) {
        spaces += ' ';
    }

    return spaces;
}

function codemirror_copy(b) {
    var btn = $(b);
    var container = btn.closest("div.dev_tool_container");
    var editor = '';
    if(container.find("#css-formatter_output").length) {
        editor = $("#css-formatter_output").next(".CodeMirror").get(0).CodeMirror;
    }
    if(container.find("#html-formatter_output").length) {
        editor = $("#html-formatter_output").next(".CodeMirror").get(0).CodeMirror;
    }
    if(container.find("#javascript-formatter_output").length) {
        editor = $("#javascript-formatter_output").next(".CodeMirror").get(0).CodeMirror;
    }
    if(container.find("#compress-javascript_output").length) {
        editor = $("#compress-javascript_output").next(".CodeMirror").get(0).CodeMirror;
    }
    if(container.find("#compress-css_output").length) {
        editor = $("#compress-css_output").next(".CodeMirror").get(0).CodeMirror;
    }
    if(container.find("#json-formatter_output").length) {
        editor = $("#json-formatter_output").next(".CodeMirror").get(0).CodeMirror;
    }
    if(container.find("#sql-formatter_output").length) {
        editor = $("#sql-formatter_output").next(".CodeMirror").get(0).CodeMirror;
    }
    if(container.find("#html-to-markdown-converter_output").length) {
        editor = $("#html-to-markdown-converter_output").next(".CodeMirror").get(0).CodeMirror;
    }

    if(container.find("#shared_content").length) {
        editor = $("#shared_content").next(".CodeMirror").get(0).CodeMirror;
    }

    editor.execCommand('selectAll');
    new ClipboardJS('.dev_tool_codemirror_copy', {
        text: function(trigger) {
            return editor.getValue();
        }
    });
    toastr.success('Copied')
}

function initialize_codemirror(selector, mode = 'htmlmixed') {
    var editor = CodeMirror.fromTextArea(document.getElementById(selector), {
        lineNumbers: true,
        theme: 'base16-light',
        mode: {name: mode, startOpen: true},
        //mode: mode,
        indentUnit: 4,
        extraKeys: {
            "F11": function(cm) {
              cm.setOption("fullScreen", !cm.getOption("fullScreen"));
            },
            "Esc": function(cm) {
              if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
            }
          }
    }).on("change", editor => {
        editor.save();
    });
}

function minify_css(val) {
  return val
    .replace(/([^0-9a-zA-Z\.#])\s+/g, "$1")
    .replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1")
    .replace(/;}/g, "}")
    .replace(/\/\*.*?\*\//g, "");
}

$(document).on('click', 'button.share', function(){
    var target = $(this).attr('data-target');
    var lang = $('#code_language').val();
    var val = $(target).val();
    var title = $('input#title').val();

    if (val.trim() == '') {
        toastr.error('Nothing to share');
        return false;
    }
    $.ajax({
        url: '/get-share-link',
        type: "POST",
        data: {
            content: val,
            language: lang,
            title: title
        },
        success: function (response) {
            toastr.success("Share link generated");
            window.location.href = response;
            // $('#share-link-div').show();
            // $([document.documentElement, document.body]).animate({
            //     scrollTop: $("#share-link-div").offset().top
            // }, 2000);
            // $('#share-link').val(response); 
            // $('#share-link').select(); 
            // $('#share-link').focus();  
        },
        error: function (jqXHR, textStatus, errorThrown ){
            if(jqXHR.status == 429){
                toastr.error("Too many requests, try again in a few minutes");
            }
        }
    });
})

$(document).on('click', '.toggle_fullscreen', function (e){
    var target = $($(this).attr('data-target'));

    if (target.hasClass('full-screen')) {
        target.removeClass('full-screen');
        $('.subscribe_div').show();
    } else {
        target.addClass('full-screen');
        $('.subscribe_div').hide();
    }
    //trigger resize event
    window.dispatchEvent(new Event('resize'));
})