function reSpace(entry) {
    out = " "; // replace this
    add = "+"; // with this
    temp = "" + entry; // temporary holder
    
    while (temp.indexOf(out)>-1) {
    pos= temp.indexOf(out);
    temp = "" + (temp.substring(0, pos) + add + 
    temp.substring((pos + out.length), temp.length));
    }
    return temp;
    }
function getNumber(val){
    val = reSpace(val);
    tempval = eval(val);
    return parseFloat(tempval);
}
function calcPlate(thisform){
    var answer;
    answer = getNumber(thisform.length.value) * getNumber(thisform.width.value) * getNumber(thisform.thickness.value) * getNumber(thisform.var1.value);
    thisform.weight.readonly =false;
    thisform.weight.value = answer;
    thisform.weight.readonly = true;
}
function calcCircle(thisform){
    var answer;
    answer = (getNumber(thisform.OD.value) * getNumber(thisform.OD.value) * getNumber(thisform.thickness.value) * getNumber(thisform.var2.value)) - (getNumber(thisform.ID.value) * getNumber(thisform.ID.value) * getNumber(thisform.thickness.value) * getNumber(thisform.var2.value)) ;
    thisform.weight.readonly =false;
    thisform.weight.value = answer;
    thisform.weight.readonly = true;
}
function calcACircle(thisform){
    var answer;
    answer = (getNumber(thisform.OD.value) * getNumber(thisform.OD.value) * getNumber(thisform.thickness.value) * getNumber(thisform.var2.value)) - (getNumber(thisform.ID.value) * getNumber(thisform.ID.value) * getNumber(thisform.thickness.value) * getNumber(thisform.var2.value)) ;
    thisform.weight.readonly =false;
    thisform.weight.value = answer;
    thisform.weight.readonly = true;
}
function calcAPlate(thisform){
    var answer;
    answer = getNumber(thisform.length.value) * getNumber(thisform.width.value) * getNumber(thisform.thickness.value) * getNumber(thisform.var1.value);
    thisform.weight.readonly =false;
    thisform.weight.value = answer;
    thisform.weight.readonly = true;
}
function convInch(thisform){
    var answer;
    answer = getNumber(thisform.length.value) / getNumber(thisform.var3.value);
    thisform.weight.readonly =false;
    thisform.weight.value = answer;
    thisform.weight.readonly = true;
}
function convMilli(thisform){
    var answer;
    answer = getNumber(thisform.length.value) * getNumber(thisform.var4.value);
    thisform.weight.readonly =false;
    thisform.weight.value = answer;
    thisform.weight.readonly = true;
}
function poundstokilos(thisform){
    var answer;
    answer = getNumber(thisform.length.value) * getNumber(thisform.var5.value);
    thisform.weight.readonly =false;
    thisform.weight.value = answer;
    thisform.weight.readonly = true;
}
function kilostopounds(thisform){
    var answer;
    answer = getNumber(thisform.length.value) * getNumber(thisform.var6.value);
    thisform.weight.readonly =false;
    thisform.weight.value = answer;
    thisform.weight.readonly = true;
}
function MT_Pounds(thisform){
    var answer;
    answer = getNumber(thisform.length.value) * getNumber(thisform.var7.value);
    thisform.weight.readonly =false;
    thisform.weight.value = answer;
    thisform.weight.readonly = true;
}
function MT_Tons(thisform){
    var answer;
    answer = getNumber(thisform.length.value) / getNumber(thisform.var8.value);
    thisform.weight.readonly =false;
    thisform.weight.value = answer;
    thisform.weight.readonly = true;
}
function convFC(thisform){
    var answer;
    answer = (5/9)*(getNumber(thisform.length.value) - 32);
    thisform.weight.readonly =false;
    thisform.weight.value = answer;
    thisform.weight.readonly = true;
}
function convCF(thisform){
    var answer;
    answer = ((9/5)*getNumber(thisform.length.value)) + 32;
    thisform.weight.readonly =false;
    thisform.weight.value = answer;
    thisform.weight.readonly = true;
}
function ftJoules(thisform){
    var answer;
    answer = getNumber(thisform.length.value) * getNumber(thisform.var9.value);
    thisform.weight.readonly =false;
    thisform.weight.value = answer;
    thisform.weight.readonly = true;
}
function JoulesFt(thisform){
    var answer;
    answer = getNumber(thisform.length.value) / getNumber(thisform.var10.value);
    thisform.weight.readonly =false;
    thisform.weight.value = answer;
    thisform.weight.readonly = true;
}
function MPaPSI(thisform){
    var answer;
    answer = getNumber(thisform.length.value) * getNumber(thisform.var11.value);
    thisform.weight.readonly =false;
    thisform.weight.value = answer;
    thisform.weight.readonly = true;
}
function MPaKSI(thisform){
    var answer;
    answer = getNumber(thisform.length.value) * getNumber(thisform.var12.value);
    thisform.weight.readonly =false;
    thisform.weight.value = answer;
    thisform.weight.readonly = true;
}
function psi_MPa(thisform){
    var answer;
    answer = getNumber(thisform.length.value) / getNumber(thisform.var13.value);
    thisform.weight.readonly =false;
    thisform.weight.value = answer;
    thisform.weight.readonly = true;
}
function ksi_MPa(thisform){
    var answer;
    answer = getNumber(thisform.length.value) / getNumber(thisform.var14.value);
    thisform.weight.readonly =false;
    thisform.weight.value = answer;
    thisform.weight.readonly = true;
}
function carbon(thisform){
    var answer;
    answer = getNumber(thisform.C.value) + getNumber((thisform.Mn.value)/6) + ((getNumber(thisform.Cr.value) + getNumber(thisform.Mo.value) + getNumber(thisform.V.value))/5) + ((getNumber(thisform.Cu.value) + getNumber(thisform.Ni.value))/15);
    thisform.weight.readonly =false;
    thisform.weight.value = answer;
    thisform.weight.readonly = true;
}
function PcM(thisform){
    var answer;
    // C + Si/30 + (Mn+Cu+Cr)/20 + Ni/60 + Mo/15 + V/10 + 5B
    answer = getNumber(thisform.C.value) + (getNumber(thisform.Si.value)/30) + ((getNumber(thisform.Mn.value) + getNumber(thisform.Cu.value) + getNumber(thisform.Cr.value))/20) + (getNumber(thisform.Ni.value)/60) + (getNumber(thisform.Mo.value)/15) + (getNumber(thisform.V.value)/10) + (getNumber(thisform.B.value)*5);
    thisform.weight.readonly =false;
    thisform.weight.value = answer;
    thisform.weight.readonly = true;
}

function DoLength(value,unitType){

if(unitType=="cm")
value = value/2.54;
if(unitType=="m")
value = (value*100)/2.54;
if(unitType== "mm")
value = (value/10)/2.54;
if(unitType=="ft")
value = value*12;
if(unitType=="yd")
value = value*36;
return value;
}

function isFilledIn(value1,value2,value3,noPieces){
var metalForm = document.getElementById('MetricMetalWeight').shape.options[document.getElementById('MetricMetalWeight').shape.selectedIndex].text;

if(metalForm=="Round Bar"||metalForm=="Hexagon Bar"){
if(value1==""||value3==""){
alert("You must fill in values for the Diameter or WAF And the Length!");
return false;
}
}

if(metalForm=="Flat"||metalForm=="Sheet"||metalForm=="Plate"){
if(value1==""||value2==""||value3==""){
alert("You must fill in values for the Width1 and the Width2 and the Length!");
return false;
}
}

if(metalForm=="Round Tubing"){
if(value1==""||value2==""||value3==""){
alert("You must fill in values for the Outer Diameter and the Wall Thickness and the Length!");
return false;
}
}

if(metalForm=="Square Tubing"){
if(value1==""||value2==""||value3==""){
alert("You must fill in values for the WAF and the Wall Thickness and the Length!");
return false;
}
}




if(metalForm=="Circle"){
if(value1==""||value3==""){
alert("You must fill in values for the Diameter and the Thickness!");
return false;
}
}

if(metalForm=="Ring"){
if(value1==""||value2==""||value3==""){
alert("You must fill in values for the Outer Diameter and the Inner Diameter and the Thickness!");
return false;
}
}

if(metalForm=="Rectangular Tubing"){
if(value1==""||value2==""||value4==""||value3==""){
alert("You must fill in values for the Side 1 and Side 2 and the Thickness!");
return false;
}
}




if(noPieces==""){
alert("You must fill in a value for the Number of Pieces");
return false;
}

return true;
}

function MetalWeight(){
var value1, value2, value3, noPieces;
var units1, units2, units3;

var Convert;
var metalForm;
var Result;
var Good;
var density;
var Result2;



value1 = document.getElementById('MetricMetalWeight').value1.value;
value2 = document.getElementById('MetricMetalWeight').value2.value;
value3 = document.getElementById('MetricMetalWeight').value3.value;
noPieces = document.getElementById('MetricMetalWeight').noPieces.value;

Good = isFilledIn(value1,value2,value3,noPieces);

if(!Good)
return;

units1 = document.getElementById('MetricMetalWeight').units1.options[document.getElementById('MetricMetalWeight').units1.selectedIndex].text;
units2 = document.getElementById('MetricMetalWeight').units2.options[document.getElementById('MetricMetalWeight').units2.selectedIndex].text;
units3 = document.getElementById('MetricMetalWeight').units3.options[document.getElementById('MetricMetalWeight').units3.selectedIndex].text;

value1 = DoLength(value1,units1);
value2 = DoLength(value2,units2);
value3 = DoLength(value3,units3);

metalForm = document.getElementById('MetricMetalWeight').shape.options[document.getElementById('MetricMetalWeight').shape.selectedIndex].text;
metalType = document.getElementById('MetricMetalWeight').metalType.options[document.getElementById('MetricMetalWeight').metalType.selectedIndex].text;


if(metalType=="T-430 Stainless"||metalType=="Carbon Steel")density = .2836;
if(metalType=="Copper")density = .323;
if(metalType=="Brass")density = .308;
if(metalType=="T-304 Stainless")density = .290;
if(metalType=="Stainless 300 Series")density =0.286;
if(metalType=="Stainless 400 Series")density =0.283;
if(metalType=="Aluminum")density = .100;
if(metalType=="Aluminum 1100")density =0.098;
if(metalType=="Aluminum 2011")density =0.102;
if(metalType=="Aluminum 2014")density =0.101;
if(metalType=="Aluminum 2017")density =0.101;
if(metalType=="Aluminum 2024")density =0.101;
if(metalType=="Aluminum 3003")density =0.099;
if(metalType=="Aluminum 5005")density =0.098;
if(metalType=="Aluminum 5052")density =0.097;
if(metalType=="Aluminum 5056")density =0.095;
if(metalType=="Aluminum 5083")density =0.096;
if(metalType=="Aluminum 5086")density =0.096;
if(metalType=="Aluminum 6061")density =0.096;
if(metalType=="Aluminum 6063")density =0.097;
if(metalType=="Aluminum 7075")density =0.101;
if(metalType=="Aluminum 7178")density =0.102;
if(metalType=="Beryllium")density =0.067;
if(metalType=="Cast Iron")density =0.256;
if(metalType=="Columbium")density =0.31;
if(metalType=="Copper")density =0.324;
if(metalType=="Gold")density =0.698;
if(metalType=="Lead")density =0.41;
if(metalType=="Magnesium")density =0.065;
if(metalType=="Molybdenum")density =0.369;
if(metalType=="Nickel 200")density =0.321;
if(metalType=="Nickel 201")density =0.321;
if(metalType=="Nickel 400")density =0.319;
if(metalType=="Nickel 600")density =0.304;
if(metalType=="Nickel 625")density =0.305;
if(metalType=="Nickel 718")density =0.297;
if(metalType=="Nickel X750")density =0.298;
if(metalType=="Nickel 800")density =0.287;
if(metalType=="Nickel 800H")density =0.287;
if(metalType=="Nickel 825")density =0.294;
if(metalType=="Nickel 904L")density =0.291;
if(metalType=="Silver")density =0.379;

if(metalType=="Tantalum")density =0.6;
if(metalType=="Titanium")density =0.163;
if(metalType=="Tungsten")density =0.697;
if(metalType=="Zinc")density =0.258;
if(metalType=="Zirconium")density =0.23;

document.getElementById('MetricMetalWeight').result.value = density;

if(metalForm=="Sheet"||metalForm=="Plate"||metalForm=="Square or Flat Bar"){
Result = new String(value1 * value2 * value3 * noPieces * density);
Result = parseInt(Result);
document.getElementById('MetricMetalWeight').result.value = (Result+5).toLocaleString();
document.getElementById('MetricMetalWeight').result2.value = (((Result+5)/2.2046).toLocaleString()).split('.', 1);
}

if(metalForm=="Circle"){
Result = new String(.785 * value1 * value1 * value3 * noPieces * density);
Result = parseInt(Result);
document.getElementById('MetricMetalWeight').result.value = (Result+5).toLocaleString();
document.getElementById('MetricMetalWeight').result2.value = (((Result+5)/2.2046).toLocaleString()).split('.', 1);
}

if(metalForm=="Ring"){
Result = new String(.785 * (eval(value1) + eval(value2)) * (value1 - value2) * value3 * noPieces * density);
Result = parseInt(Result);
document.getElementById('MetricMetalWeight').result.value = (Result+5).toLocaleString();
document.getElementById('MetricMetalWeight').result2.value = (((Result+5)/2.2046).toLocaleString()).split('.', 1);
}

if(metalForm=="Round Bar"){
Result = new String(value1 * value1 * 9.42 * (value3/12) * noPieces * density);
Result = parseInt(Result);
document.getElementById('MetricMetalWeight').result.value = (Result+5).toLocaleString();
document.getElementById('MetricMetalWeight').result2.value = (((Result+5)/2.2046).toLocaleString()).split('.', 1);
}

if(metalForm=="Hexagon Bar"){
Result = new String(value1 * value1 * 10.4 * (value3/12) * noPieces * density);
Result = parseInt(Result);
document.getElementById('MetricMetalWeight').result.value = (Result+5).toLocaleString();
document.getElementById('MetricMetalWeight').result2.value = (((Result+5)/2.2046).toLocaleString()).split('.', 1);
}

if(metalForm=="Round Tubing"){
Result = new String(37.7 * (value1 - value2) * value2 * (value3/12) * noPieces * density);
Result = parseInt(Result);
document.getElementById('MetricMetalWeight').result.value = (Result+5).toLocaleString();
document.getElementById('MetricMetalWeight').result2.value = (((Result+5)/2.2046).toLocaleString()).split('.', 1);
}

if(metalForm=="Square Tubing"){
Result = new String(48.0 * (value1 - value2) * value2 * (value3/12) * noPieces * density);
Result = parseInt(Result);
document.getElementById('MetricMetalWeight').result.value = (Result+5).toLocaleString();
document.getElementById('MetricMetalWeight').result2.value = (((Result+5)/2.2046).toLocaleString()).split('.', 1);
}

if(metalForm=="Rectangular Tubing"){
Result = new String(48.0 * (value1 - value2) * value2 * (value3/12) * noPieces * density);
Result = parseInt(Result);
document.getElementById('MetricMetalWeight').result.value = (Result+5).toLocaleString();
document.getElementById('MetricMetalWeight').result2.value = (((Result+5)/2.2046).toLocaleString()).split('.', 1);
}

}
function ClearFields(){
document.getElementById('MetricMetalWeight').value1.value = "";
document.getElementById('MetricMetalWeight').value1.value = "";
document.getElementById('MetricMetalWeight').value2.value = "";
document.getElementById('MetricMetalWeight').value3.value = "";
document.getElementById('MetricMetalWeight').noPieces.value = "1";
document.getElementById('MetricMetalWeight').result.value = "";
document.getElementById('MetricMetalWeight').result2.value = "";

}
function ResetFields(){
document.getElementById('MetricMetalWeight').shape.value = "";
document.getElementById('MetricMetalWeight').lbl1.style.display = "";
document.getElementById('MetricMetalWeight').lbl1.value = "";
document.getElementById('MetricMetalWeight').value1.style.display = "";
document.getElementById('MetricMetalWeight').units1.style.display = "";
document.getElementById('MetricMetalWeight').lbl2.style.display = "";
document.getElementById('MetricMetalWeight').lbl2.value = "";
document.getElementById('MetricMetalWeight').value2.style.display = "";
document.getElementById('MetricMetalWeight').units2.style.display = "";
document.getElementById('MetricMetalWeight').lbl3.style.display = "";
document.getElementById('MetricMetalWeight').lbl3.value = "";
document.getElementById('MetricMetalWeight').value3.style.display = "";
document.getElementById('MetricMetalWeight').units3.style.display = "";
}
function ChangeLabel(){

var metalForm;

metalForm = document.getElementById('MetricMetalWeight').shape.options[document.getElementById('MetricMetalWeight').shape.selectedIndex].text;
if(metalForm=="Sheet"||metalForm=="Plate"||metalForm=="Square or Flat Bar"){
document.getElementById('MetricMetalWeight').lbl1.style.display = "";
document.getElementById('MetricMetalWeight').value1.style.display = "";
document.getElementById('MetricMetalWeight').units1.style.display = "";
document.getElementById('MetricMetalWeight').lbl2.style.display = "";
document.getElementById('MetricMetalWeight').value2.style.display = "";
document.getElementById('MetricMetalWeight').units2.style.display = "";
document.getElementById('MetricMetalWeight').lbl3.style.display = "";
document.getElementById('MetricMetalWeight').value3.style.display = "";
document.getElementById('MetricMetalWeight').units3.style.display = "";
document.getElementById('MetricMetalWeight').lbl1.value = "Length:";
document.getElementById('MetricMetalWeight').lbl2.value = "Width:";
document.getElementById('MetricMetalWeight').lbl3.value = "Thickness:";
}

if(metalForm=="Circle"){
document.getElementById('MetricMetalWeight').lbl1.style.display = "";
document.getElementById('MetricMetalWeight').value1.style.display = "";
document.getElementById('MetricMetalWeight').units1.style.display = "";
document.getElementById('MetricMetalWeight').lbl3.style.display = "";
document.getElementById('MetricMetalWeight').value3.style.display = "";
document.getElementById('MetricMetalWeight').units3.style.display = "";
document.getElementById('MetricMetalWeight').lbl1.value = "Diameter:";
document.getElementById('MetricMetalWeight').lbl3.value = "Thickness:";
document.getElementById('MetricMetalWeight').lbl2.style.display = "none";
document.getElementById('MetricMetalWeight').value2.style.display = "none";
document.getElementById('MetricMetalWeight').units2.style.display = "none";
}

if(metalForm=="Ring"){
document.getElementById('MetricMetalWeight').lbl1.style.display = "";
document.getElementById('MetricMetalWeight').value1.style.display = "";
document.getElementById('MetricMetalWeight').units1.style.display = "";
document.getElementById('MetricMetalWeight').lbl2.style.display = "";
document.getElementById('MetricMetalWeight').value2.style.display = "";
document.getElementById('MetricMetalWeight').units2.style.display = "";
document.getElementById('MetricMetalWeight').lbl3.style.display = "";
document.getElementById('MetricMetalWeight').value3.style.display = "";
document.getElementById('MetricMetalWeight').units3.style.display = "";
document.getElementById('MetricMetalWeight').lbl1.value = "Outer Diameter:";
document.getElementById('MetricMetalWeight').lbl2.value = "Inner Diameter:";
document.getElementById('MetricMetalWeight').lbl3.value = "Thickness:";
}

if(metalForm== "Round Bar"){
document.getElementById('MetricMetalWeight').lbl1.style.display = "";
document.getElementById('MetricMetalWeight').value1.style.display = "";
document.getElementById('MetricMetalWeight').units1.style.display = "";
document.getElementById('MetricMetalWeight').lbl3.style.display = "";
document.getElementById('MetricMetalWeight').value3.style.display = "";
document.getElementById('MetricMetalWeight').units3.style.display = "";
document.getElementById('MetricMetalWeight').lbl1.value = "Diameter:";
document.getElementById('MetricMetalWeight').lbl3.value = "Length:";
document.getElementById('MetricMetalWeight').lbl2.style.display = "none";
document.getElementById('MetricMetalWeight').value2.style.display = "none";
document.getElementById('MetricMetalWeight').units2.style.display = "none";
}


if(metalForm== "Hexagon Bar"){
document.getElementById('MetricMetalWeight').lbl1.style.display = "";
document.getElementById('MetricMetalWeight').value1.style.display = "";
document.getElementById('MetricMetalWeight').units1.style.display = "";
document.getElementById('MetricMetalWeight').lbl3.style.display = "";
document.getElementById('MetricMetalWeight').value3.style.display = "";
document.getElementById('MetricMetalWeight').units3.style.display = "";
document.getElementById('MetricMetalWeight').lbl1.value = "Width across flats:";
document.getElementById('MetricMetalWeight').lbl3.value = "Length:";
document.getElementById('MetricMetalWeight').lbl2.style.display = "none";
document.getElementById('MetricMetalWeight').value2.style.display = "none";
document.getElementById('MetricMetalWeight').units2.style.display = "none";
}


if(metalForm=="Round Tubing"){
document.getElementById('MetricMetalWeight').lbl1.style.display = "";
document.getElementById('MetricMetalWeight').value1.style.display = "";
document.getElementById('MetricMetalWeight').units1.style.display = "";
document.getElementById('MetricMetalWeight').lbl2.style.display = "";
document.getElementById('MetricMetalWeight').value2.style.display = "";
document.getElementById('MetricMetalWeight').units2.style.display = "";
document.getElementById('MetricMetalWeight').lbl3.style.display = "";
document.getElementById('MetricMetalWeight').value3.style.display = "";
document.getElementById('MetricMetalWeight').units3.style.display = "";
document.getElementById('MetricMetalWeight').lbl1.value = "Outer Diameter:";
document.getElementById('MetricMetalWeight').lbl2.value = "Wall Thickness:";
document.getElementById('MetricMetalWeight').lbl3.value = "Length:";
}

if(metalForm=="Square Tubing"){
document.getElementById('MetricMetalWeight').lbl1.style.display = "";
document.getElementById('MetricMetalWeight').value1.style.display = "";
document.getElementById('MetricMetalWeight').units1.style.display = "";
document.getElementById('MetricMetalWeight').lbl2.style.display = "";
document.getElementById('MetricMetalWeight').value2.style.display = "";
document.getElementById('MetricMetalWeight').units2.style.display = "";
document.getElementById('MetricMetalWeight').lbl3.style.display = "";
document.getElementById('MetricMetalWeight').value3.style.display = "";
document.getElementById('MetricMetalWeight').units3.style.display = "";
document.getElementById('MetricMetalWeight').lbl1.value = "Width across flats:";
document.getElementById('MetricMetalWeight').lbl2.value = "Wall Thickness:";
document.getElementById('MetricMetalWeight').lbl3.value = "Length:";
}
}