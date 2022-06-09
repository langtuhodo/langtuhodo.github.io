function showimage() {
    if (!document.images)
        return
    document.images.pictures.src =
        document.form1.form.options[document.form1.form.selectedIndex].value
}

var focusflag = false;
var Factor = new Array(47);
Factor[0] = .3462;
Factor[1] = .3604;
Factor[2] = .3568;
Factor[3] = .3568;
Factor[4] = .3533;
Factor[5] = .3498;
Factor[6] = .3462;
Factor[7] = .3427;
Factor[8] = .3356;
Factor[9] = .3392;
Factor[10] = .3392;
Factor[11] = .3462;
Factor[12] = .3462;
Factor[13] = .3568;
Factor[14] = .3568;
Factor[15] = .3604;
Factor[16] = 1.030;
Factor[17] = 1.010;
Factor[18] = 1.132;
Factor[19] = 1.125;
Factor[20] = 1.121;
Factor[21] = 1.075;
Factor[22] = 1.072;
Factor[23] = 1.075;
Factor[24] = 1.012;
Factor[25] = 1.012;
Factor[26] = 1.037;
Factor[27] = 1.012;
Factor[28] = 1.030;
Factor[29] = 1.132;
Factor[30] = 1.012;
Factor[31] = .229;
Factor[32] = .236;
Factor[33] = .575;
Factor[34] = .812;
Factor[35] = .911;
Factor[36] = .911;
Factor[37] = 1.084;
Factor[38] = 1.095;
Factor[39] = 1.144;
Factor[40] = 1.303;
Factor[41] = 1.339;
Factor[42] = 1.448;
Factor[43] = 2.120;
Factor[44] = 2.462;
Factor[45] = 2.466;
var RoundOff = 5;

function UnitConvertI(value, type) {


    if (type == "cm")
        value = value / 2.54;
    if (type == "m")
        value = (value * 100) / 2.54;
    if (type == "mm")
        value = (value / 10) / 2.54;
    if (type == "ft")
        value = value * 12;
    if (type == "yd")
        value = value * 36;



    return value;
}

function UnitConvertF(value, type) {

    if (type == "cm")
        value = (value / 2.54) / 12;
    if (type == "m")
        value = ((value * 100) / 2.54) / 12;
    if (type == "mm")
        value = ((value / 10) / 2.54) / 12;
    if (type == "in")
        value = value / 12;
    if (type == "yd")
        value = value * 3;


    return value;
}

function CheckNum(value, label) {
    var String1 = new String(value);
    var String2 = new String("");
    var String3 = new String("");
    var String4 = new String("");
    var temp;
    var i = 0;
    var count = 0;
    for (i = 0; i < String1.length; i++) {
        String2 = new String(parseFloat(String1.charAt(i)));
        if (String1.charAt(i) == ".")
            count++;

        if ((String2.length != 1 && String1.charAt(i) != '.') || count > 1) {
            alert("You entered an illegal value for the " + label);
            return false;
        }
    }
    return true;
}

function CheckParam(Param1, Param2, Param3, Param4) {
    var Form = document.forms[0].form.options[document.forms[0].form.selectedIndex].text;
    var valid1 = 0,
        valid2 = 0,
        valid3 = 0,
        valid4 = 0;
    var counter = 0;

    if (Form == "Round" || Form == "Hexagonal" || Form == "Octagonal") {
        if (Param1 == "" || Param3 == "" || Param4 == "") {
            alert("You must fill in values for the Diameter And the Length!");
            return false;
        }
        valid1 = CheckNum(Param1, "Diameter");
        valid3 = CheckNum(Param3, "Length");
        valid4 = CheckNum(Param4, "Number of Pieces");
        if (valid1 != true || valid3 != true || valid4 != true)
            return false;
    }

    if (Form == "Square") {
        if (Param1 == "" || Param3 == "" || Param4 == "") {
            alert("You must fill in values for the Width And the Length!");
            return false;
        }
        valid1 = CheckNum(Param1, "Width");
        valid3 = CheckNum(Param3, "Length");
        valid4 = CheckNum(Param4, "Number of Pieces");
        if (valid1 != true || valid3 != true || valid4 != true)
            return false;
    }

    if (Form == "Flat" || Form == "Sheet" || Form == "Plate" || Form == "Coil" || Form == "Rectangle") {
        if (Param1 == "" || Param3 == "" || Param4 == "" || Param2 == "") {
            alert("You must fill in values for the Thickness And the Width And the Length!");
            return false;
        }
        valid1 = CheckNum(Param1, "Thickness");
        valid2 = CheckNum(Param2, "Width");
        valid3 = CheckNum(Param3, "Length");
        valid4 = CheckNum(Param4, "Number of Pieces");
        if (valid1 != true || valid3 != true || valid4 != true || valid2 != true)
            return false;

    }
    if (Form == "Tubular" || Form == "Pipe") {
        if (Param1 == "" || Param3 == "" || Param4 == "" || Param2 == "") {
            alert("You must fill in values for the Outer Diameter And the Wall And the Length!");
            return false;
        }
        valid1 = CheckNum(Param1, "Outer Diameter");
        valid2 = CheckNum(Param2, "Wall");
        valid3 = CheckNum(Param3, "Length");
        valid4 = CheckNum(Param4, "Number of Pieces");
        if (valid1 != true || valid2 != true || valid3 != true || valid4 != true)
            return false;

    }
    if (Form == "Circular") {
        if (Param1 == "" || Param3 == "" || Param4 == "") {
            alert("You must fill in values for the Diameter And the Thickness!");
            return false;
        }
        valid1 = CheckNum(Param1, "Diameter");
        valid3 = CheckNum(Param3, "Thickness");
        valid4 = CheckNum(Param4, "Number of Pieces");
        if (valid1 != true || valid3 != true || valid4 != true)
            return false;

    }
    if (Form == "Ring") {
        if (Param1 == "" || Param2 == "" || Param3 == "" || Param4 == "") {
            alert("You must fill in values for the Outer Diameter And the Inner Diameter And the Thickness!");
            return false;
        }
        valid1 = CheckNum(Param1, "Outer Diameter");
        valid2 = CheckNum(Param2, "Inner Diameter");
        valid3 = CheckNum(Param3, "Thickness");
        valid4 = CheckNum(Param4, "Number of Pieces");
        if (valid1 != true || valid2 != true || valid3 != true || valid4 != true)
            return false;

    }



    return true;
}

function CalculateWeight() {

    var Param = new Array(5);
    var Units = new Array(4);
    var Convert;
    var FormType;
    var Result;

    var Good;
    Param[0] = document.forms[0].param1.value;
    Param[1] = document.forms[0].param2.value;
    Param[2] = document.forms[0].param3.value;
    Param[3] = document.forms[0].param4.value;
    Good = CheckParam(Param[0], Param[1], Param[2], Param[3]);
    if (!Good)
        return;


    Units[0] = document.forms[0].units1.options[document.forms[0].units1.selectedIndex].text;
    Units[1] = document.forms[0].units2.options[document.forms[0].units2.selectedIndex].text;;
    Units[2] = document.forms[0].units3.options[document.forms[0].units3.selectedIndex].text;;

    Param[0] = UnitConvertI(Param[0], Units[0]);
    Param[1] = UnitConvertI(Param[1], Units[1]);
    Param[2] = UnitConvertF(Param[2], Units[2]);

    FormType = document.forms[0].form.options[document.forms[0].form.selectedIndex].text;
    if (document.forms[0].product.selectedIndex > 0)
        Convert = Factor[document.forms[0].product.selectedIndex - 1];
    else
        Convert = 1;
    document.forms[0].result.rsize = "4";

    if (FormType == "Round") {
        Result = new String(2.6729 * Param[0] * Param[0] * Convert * Param[2] * Param[3]);
        document.forms[0].result.value = Result.substring(0, Result.indexOf(".") + RoundOff);
        document.forms[0].result2.value = Result.substring(0, Result.indexOf(".") + RoundOff) * 0.4535;

    }
    if (FormType == "Square") {
        Result = new String(3.4032 * Param[0] * Param[0] * Convert * Param[2] * Param[3]);
        document.forms[0].result.value = Result.substring(0, Result.indexOf(".") + RoundOff);
        document.forms[0].result2.value = Result.substring(0, Result.indexOf(".") + RoundOff) * 0.4535;
    }
    if (FormType == "Hexagonal") {
        Result = new String(2.9473 * Param[0] * Param[0] * Convert * Param[2] * Param[3]);
        document.forms[0].result.value = Result.substring(0, Result.indexOf(".") + RoundOff);
        document.forms[0].result2.value = Result.substring(0, Result.indexOf(".") + RoundOff) * 0.4535;
    }
    if (FormType == "Octagonal") {
        Result = new String(2.8193 * Param[0] * Param[0] * Convert * Param[2] * Param[3]);
        document.forms[0].result.value = Result.substring(0, Result.indexOf(".") + RoundOff);
        document.forms[0].result2.value = Result.substring(0, Result.indexOf(".") + RoundOff) * 0.4535;
    }
    if (FormType == "Flat" || FormType == "Sheet" || FormType == "Plate" || FormType == "Coil" || FormType == "Rectangle") {
        Result = new String(3.4032 * Param[0] * Convert * Param[1] * Param[2] * Param[3]);
        document.forms[0].result.value = Result.substring(0, Result.indexOf(".") + RoundOff);
        document.forms[0].result2.value = Result.substring(0, Result.indexOf(".") + RoundOff) * 0.4535;
    }
    if (FormType == "Tubular" || FormType == "Pipe") {
        Result = 10.68 * (Param[0] - Param[1]) * Convert * Param[1] * Param[2] * Param[3];
        if (Result < 0)
            alert("The Width of the Tube Wall cannot exceed the Outer Diameter!");
        else {
            Result = new String(Result);
            document.forms[0].result.value = Result.substring(0, Result.indexOf(".") + RoundOff);
            document.forms[0].result2.value = Result.substring(0, Result.indexOf(".") + RoundOff) * 0.4535;
        }
    }
    if (FormType == "Circular") {
        Param[2] = UnitConvertI(Param[2], "ft");
        Result = new String(.22274 * Param[0] * Convert * Param[0] * Param[2] * Param[3]);
        document.forms[0].result.value = Result.substring(0, Result.indexOf(".") + RoundOff);
        document.forms[0].result2.value = Result.substring(0, Result.indexOf(".") + RoundOff) * 0.4535;
    }
    if (FormType == "Ring") {
        Param[2] = UnitConvertI(Param[2], "ft");
        Result = (.22274 * Param[2] * ((Param[0] * Param[0]) - (Param[1] * Param[1])) * Convert * Param[3]);
        if (Result < 0)
            alert("The Inner Diameter cannot exceed the Outer Diameter!");
        else {
            Result = new String(Result);
            document.forms[0].result.value = Result.substring(0, Result.indexOf(".") + RoundOff);
            document.forms[0].result2.value = Result.substring(0, Result.indexOf(".") + RoundOff) * 0.4535;
        }
    }



}

function ClearFields() {
    document.forms[0].param1.value = "";
    document.forms[0].param2.value = "";
    document.forms[0].param3.value = "";
    document.forms[0].param4.value = "1";
    document.forms[0].result.value = "";
    document.forms[0].result2.value = "";

}

function ChangeLabel() {
    var formType;
    formType = document.forms[0].form.options[document.forms[0].form.selectedIndex].text;



    if (formType == "Round") {
        document.forms[0].lbl1.value = "Diameter";
        document.forms[0].lbl2.value = "";
        document.forms[0].lbl3.value = "Length";
    }
    if (formType == "Square") {
        document.forms[0].lbl1.value = "Width";
        document.forms[0].lbl2.value = "";
        document.forms[0].lbl3.value = "Length";
    }
    if (formType == "Hexagonal") {
        document.forms[0].lbl1.value = "Diameter";
        document.forms[0].lbl2.value = "";
        document.forms[0].lbl3.value = "Length";
    }
    if (formType == "Octagonal") {
        document.forms[0].lbl1.value = "Diameter";
        document.forms[0].lbl2.value = "";
        document.forms[0].lbl3.value = "Length";
    }
    if (formType == "Flat" || formType == "Sheet" || formType == "Plate" || formType == "Coil" || formType == "Rectangle") {
        document.forms[0].lbl1.value = "Thickness";
        document.forms[0].lbl2.value = "Width";
        document.forms[0].lbl3.value = "Length";
    }
    if (formType == "Tubular" || formType == "Pipe") {
        document.forms[0].lbl1.value = "Outer Diameter";
        document.forms[0].lbl2.value = "Wall";
        document.forms[0].lbl3.value = "Length";
    }
    if (formType == "Circular") {
        document.forms[0].lbl1.value = "Diameter";
        document.forms[0].lbl2.value = "";
        document.forms[0].lbl3.value = "Thickness";
    }
    if (formType == "Ring") {
        document.forms[0].lbl1.value = "Outer Diameter";
        document.forms[0].lbl2.value = "Inner Diameter";
        document.forms[0].lbl3.value = "Thickness";
    }


}
ChangeLabel();
ClearFields();