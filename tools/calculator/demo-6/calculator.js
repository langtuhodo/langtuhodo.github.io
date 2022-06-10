<!--
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getCalculation(form) {

    var Shape_Type = form.Shape_List.value;
    var Dim1 = form.Dim1.value;
    var Dim2 = form.Dim2.value;
    var Dim3 = form.Dim3.value;
    var Results = 0;

    switch (form.Units1.value) {
        case 'ft':
            Dim1 = Dim1 * 12;
            break;
        case 'mm':
            Dim1 = Dim1 * 0.03937;
            break;
        case 'm':
            Dim1 = Dim1 * 0.03937 * 1000;
            break;
    }

    switch (form.Units2.value) {
        case 'ft':
            Dim2 = Dim2 * 12;
            break;
        case 'mm':
            Dim2 = Dim2 * 0.03937;
            break;
        case 'm':
            Dim2 = Dim2 * 0.03937 * 1000;
            break;
    }

    switch (form.Units3.value) {
        case 'ft':
            Dim3 = Dim3 * 12;
            break;
        case 'mm':
            Dim3 = Dim3 * 0.03937;
            break;
        case 'm':
            Dim3 = Dim3 * 0.03937 * 1000;
            break;
    }

    if (Shape_Type == 'Flats') {
        document.getElementById("Dim3_Div").style.display = "block";
        document.getElementById('Dim1_Label').innerHTML = 'Thickness';
        document.getElementById('Dim2_Label').innerHTML = 'Length';
        document.getElementById('Dim3_Label').innerHTML = 'Width';
        Results = Dim1 * Dim2 * Dim3 * 0.2835;
    }
    if (Shape_Type == 'Square Bars') {
        document.getElementById("Dim3_Div").style.display = "none";
        document.getElementById('Dim1_Label').innerHTML = 'Width';
        document.getElementById('Dim2_Label').innerHTML = 'Length of Bar';
        Results = (Dim1 * Dim1) * Dim2 * 0.2835;
    }
    if (Shape_Type == 'Round Bars') {
        document.getElementById("Dim3_Div").style.display = "none";
        document.getElementById('Dim1_Label').innerHTML = 'Diameter';
        document.getElementById('Dim2_Label').innerHTML = 'Length of Bar';
        Results = (Dim1 / 2) * (Dim1 / 2) * Math.PI * Dim2 * 0.2835;
    }
    if (Shape_Type == 'Hexagon Bars') {
        document.getElementById("Dim3_Div").style.display = "none";
        document.getElementById('Dim1_Label').innerHTML = 'Width';
        document.getElementById('Dim2_Label').innerHTML = 'Length of Bar';
        Results = (Dim1 / 2) * (Dim1 / 2) * 2 * Math.sqrt(3) * Dim2 * 0.2835;
    }

    if (form.Units_Results.value == 'kg') {
        Results = Results * 0.4536;
    }

    form.Results.value = numberWithCommas(Results.toFixed(2));
}

// -->