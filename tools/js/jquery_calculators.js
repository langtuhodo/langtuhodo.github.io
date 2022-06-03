 var MAIAK = {
    G: 0.007850,
    Q: 0.044877,
    Z: 0.0157,
    P: 0.0314
}, calcData;

function parseProfileCSV( data ){
    var separator = typeof arguments[1] === 'undefined' ? ';' : arguments[1],
        data = data.split("\n"), ret = [];
    $.each( data, function( i, v ){
        if( data[i].trim() )
            ret.push(data[i].trim().split(separator));
    });
    return ret;
}

function initCSVCalc( ){
    var select = $('#csvSelect'), i;

    for( i in calcData )
        select.append("<option value='"+i+"'>" +i+"</option>")

    select.on('change', function( e ){
        var data = calcData[ $(this).val() ];
        $('[data-param="h"]').val( data.h );
        $('[data-param="b"]').val( data.b );
        $('[data-param="s"]').val( data.s );
        $('[data-param="t"]').val( data.t );
        $('[data-param="l"]').trigger('keyup');
    }).trigger('change');

}

function initVinkelCalc(){
    var select = $('#sizeSelect'), tSelect = $('#tSelect'), i, t;
    //console.log( calcData );

    for( i in calcData )
        select.append("<option value='"+i+"'>" +i+"</option>");

    t = calcData[ $('option', select).eq(0).prop('selected', true).val() ];

    for( i in t )
        tSelect.append("<option value='"+i+"'>" +i+"</option>");


    select.on('change', function( e ){
        var t = calcData [ $(this).val()], i;
        tSelect.html('');
        for( i in t )
            tSelect.append("<option value='"+i+"'>" +i+"</option>");

        $('[data-param="l"]').trigger('keyup');
    });

    tSelect.on('change', function(e){
        $('[data-param="l"]').trigger('keyup');
    }).trigger('change');
}

function separateThousands(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ' ' + '$2');
    }
    return x1 + x2;
}

calculator_1 = function( calc ){
    var weight_single, weight_total;
    weight_single = calc.t * calc.w * calc.l * (MAIAK.G/1000);
    weight_total  = weight_single * calc.n;

    $('#result_single').val(separateThousands(weight_single.toFixedEx(2)));
    $('#result_total').val(separateThousands(weight_total.toFixedEx(2)));
}

calculator_2 = function( calc ){
    var weight_meter, weight_total;
    if( calc.t >= calc.d / 2 ){
        weight_total = weight_meter = 0;
        $('#calcError').show();
    }else {
        weight_meter = MAIAK.P * MAIAK.G * calc.t * (calc.d - calc.t) * 100;
        weight_total = weight_meter * (calc.l);
        $('#calcError').hide();
    }

    //console.log( weight_meter );
    if( weight_meter < 0.01 )
        $('#result_single').val(separateThousands(weight_meter.toFixedEx(4)));
    else
        $('#result_single').val(separateThousands(weight_meter.toFixedEx(2)));

    if( weight_total < 0.01 )
        $('#result_total').val(separateThousands(weight_total.toFixedEx(4)));
    else
        $('#result_total').val(separateThousands(weight_total.toFixedEx(2)));
};

calculator_4 = function( calc ){
    var weight_meter, weight_total;
    if( calc.t > calc.a / 2 ){
        weight_meter = 0;
        weight_total = 0;
        $('#calcError').show();
    }else{
        weight_meter = calc.t * ( MAIAK.P * calc.a - MAIAK.Q * calc.t );
        weight_total = weight_meter * ( calc.l );
        $('#calcError').hide();
    }


    if( weight_meter < 0.01 )
        $('#result_single').val(separateThousands(weight_meter.toFixedEx(4)));
    else
        $('#result_single').val(separateThousands(weight_meter.toFixedEx(2)));

    if( weight_total < 0.01 )
        $('#result_total').val(separateThousands(weight_total.toFixedEx(4)));
    else
        $('#result_total').val(separateThousands(weight_total.toFixedEx(2)));
};

calculator_5 = function( calc ){
    var weight_meter, weight_total;
    if( calc.t > calc.a / 2 || calc.t > calc.b / 2 ){
        weight_meter = 0;
        weight_total = 0;
        $('#calcError').show();
    }else{
        weight_meter = calc.t * ( MAIAK.Z * (calc.a + calc.b) - MAIAK.Q * calc.t );
        weight_total = weight_meter * ( calc.l );
        $('#calcError').hide();
    }


    if( weight_meter < 0.01 )
        $('#result_single').val(separateThousands(weight_meter.toFixedEx(4)));
    else
        $('#result_single').val(separateThousands(weight_meter.toFixedEx(2)));

    if( weight_total < 0.01 )
        $('#result_total').val(separateThousands(weight_total.toFixedEx(4)));
    else
        $('#result_total').val(separateThousands(weight_total.toFixedEx(2)));
};

calculator_6 = function( calc ){
    var weight_meter, weight_total;
    weight_meter = 0.0061654 * calc.d * calc.d;
    weight_total = weight_meter * ( calc.l );
    $('#result_single').val( separateThousands(weight_meter.toFixedEx(2)) );
    $('#result_total').val( separateThousands(weight_total.toFixedEx(2)) );
}

calculator_7 = function( calc ){
    var weight_meter, weight_total;
    weight_meter = MAIAK.G * Math.pow(calc.a, 2);
    weight_total = weight_meter * ( calc.l );
    $('#result_single').val(separateThousands(weight_meter.toFixedEx(4).toFixed(2)));
    $('#result_total').val(separateThousands(weight_total.toFixedEx(4).toFixed(2)));
}

calculator_8 = function( calc ){
    var weight_meter, weight_total;
    weight_meter = MAIAK.G * calc.t * calc.w;
    weight_total = weight_meter * ( calc.l  );
    $('#result_single').val(separateThousands(weight_meter.toFixedEx(4).toFixed(2)));
    $('#result_total').val(separateThousands(weight_total.toFixedEx(4).toFixed(2)));
}

calculator_9 = function( calc ){
    var weight_meter, weight_total;

    weight_meter = parseFloat( calcData[ $('#sizeSelect').val()][ $('#tSelect').val() ] );
    weight_total = weight_meter * calc.l;

    $('#result_single').val(separateThousands(weight_meter.toFixedEx(4).toFixed(2)));
    $('#result_total').val(separateThousands(weight_total.toFixedEx(4).toFixed(2)));
}

calculator_11 = function( calc ){
    var weight_meter, weight_total,
        data = calcData[  $('#csvSelect').val() ];
    weight_meter = parseFloat( data.w );
    weight_total = weight_meter * ( calc.l );
    $('#result_single').val(separateThousands(weight_meter.toFixedEx(4).toFixed(2)));
    $('#result_total').val(separateThousands(weight_total.toFixedEx(4).toFixed(2)));
}