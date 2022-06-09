// https://www.onealsteel.com/wp-content/themes/kronos/assets/js/calc.js?ver=1592407040
var metalWeightForm=jQuery("#MedivicMetalWeight");jQuery(metalWeightForm).on("submit",function(e){e.preventDefault();MetalWeight()});jQuery("#calculatebtn").click(function(e){e.preventDefault();MetalWeight()});function reSpace(e){out=" ";add="+";temp=""+e;while(temp.indexOf(out)>-1){pos=temp.indexOf(out);temp=""+(temp.substring(0,pos)+add+temp.substring(pos+out.length,temp.length))}return temp}function getNumber(val){val=reSpace(val);tempval=eval(val);return parseFloat(tempval)}function calcPlate(e){var a;a=getNumber(e.length.value)*getNumber(e.width.value)*getNumber(e.thickness.value)*getNumber(e.var1.value);e.weight.readonly=false;e.weight.value=a;e.weight.readonly=true}function calcCircle(e){var a;a=getNumber(e.OD.value)*getNumber(e.OD.value)*getNumber(e.thickness.value)*getNumber(e.var2.value)-getNumber(e.ID.value)*getNumber(e.ID.value)*getNumber(e.thickness.value)*getNumber(e.var2.value);e.weight.readonly=false;e.weight.value=a;e.weight.readonly=true}function calcACircle(e){var a;a=getNumber(e.OD.value)*getNumber(e.OD.value)*getNumber(e.thickness.value)*getNumber(e.var2.value)-getNumber(e.ID.value)*getNumber(e.ID.value)*getNumber(e.thickness.value)*getNumber(e.var2.value);e.weight.readonly=false;e.weight.value=a;e.weight.readonly=true}function calcAPlate(e){var a;a=getNumber(e.length.value)*getNumber(e.width.value)*getNumber(e.thickness.value)*getNumber(e.var1.value);e.weight.readonly=false;e.weight.value=a;e.weight.readonly=true}function convInch(e){var a;a=getNumber(e.length.value)/getNumber(e.var3.value);e.weight.readonly=false;e.weight.value=a;e.weight.readonly=true}function convMilli(e){var a;a=getNumber(e.length.value)*getNumber(e.var4.value);e.weight.readonly=false;e.weight.value=a;e.weight.readonly=true}function poundstokilos(e){var a;a=getNumber(e.length.value)*getNumber(e.var5.value);e.weight.readonly=false;e.weight.value=a;e.weight.readonly=true}function kilostopounds(e){var a;a=getNumber(e.length.value)*getNumber(e.var6.value);e.weight.readonly=false;e.weight.value=a;e.weight.readonly=true}function MT_Pounds(e){var a;a=getNumber(e.length.value)*getNumber(e.var7.value);e.weight.readonly=false;e.weight.value=a;e.weight.readonly=true}function MT_Tons(e){var a;a=getNumber(e.length.value)/getNumber(e.var8.value);e.weight.readonly=false;e.weight.value=a;e.weight.readonly=true}function convFC(e){var a;a=5/9*(getNumber(e.length.value)-32);e.weight.readonly=false;e.weight.value=a;e.weight.readonly=true}function convCF(e){var a;a=9/5*getNumber(e.length.value)+32;e.weight.readonly=false;e.weight.value=a;e.weight.readonly=true}function ftJoules(e){var a;a=getNumber(e.length.value)*getNumber(e.var9.value);e.weight.readonly=false;e.weight.value=a;e.weight.readonly=true}function JoulesFt(e){var a;a=getNumber(e.length.value)/getNumber(e.var10.value);e.weight.readonly=false;e.weight.value=a;e.weight.readonly=true}function MPaPSI(e){var a;a=getNumber(e.length.value)*getNumber(e.var11.value);e.weight.readonly=false;e.weight.value=a;e.weight.readonly=true}function MPaKSI(e){var a;a=getNumber(e.length.value)*getNumber(e.var12.value);e.weight.readonly=false;e.weight.value=a;e.weight.readonly=true}function psi_MPa(e){var a;a=getNumber(e.length.value)/getNumber(e.var13.value);e.weight.readonly=false;e.weight.value=a;e.weight.readonly=true}function ksi_MPa(e){var a;a=getNumber(e.length.value)/getNumber(e.var14.value);e.weight.readonly=false;e.weight.value=a;e.weight.readonly=true}function carbon(e){var a;a=getNumber(e.C.value)+getNumber(e.Mn.value/6)+(getNumber(e.Cr.value)+getNumber(e.Mo.value)+getNumber(e.V.value))/5+(getNumber(e.Cu.value)+getNumber(e.Ni.value))/15;e.weight.readonly=false;e.weight.value=a;e.weight.readonly=true}function PcM(e){var a;a=getNumber(e.C.value)+getNumber(e.Si.value)/30+(getNumber(e.Mn.value)+getNumber(e.Cu.value)+getNumber(e.Cr.value))/20+getNumber(e.Ni.value)/60+getNumber(e.Mo.value)/15+getNumber(e.V.value)/10+5*getNumber(e.B.value);e.weight.readonly=false;e.weight.value=a;e.weight.readonly=true}function DoLength(e,a){if("cm"==a)e/=2.54;if("m"==a)e=100*e/2.54;if("mm"==a)e=e/10/2.54;if("ft"==a)e=12*e;if("yd"==a)e=36*e;return e}function isFilledIn(e,a,l,t){var u=jQuery("#shape").val();if("Round Bar"==u||"Hexagon Bar"==u)if(""==e||""==l){alert("You must fill in values for the Diameter or WAF And the Length!");return false}if("Flat"==u||"Sheet"==u||"Plate"==u)if(""==e||""==a||""==l){alert("You must fill in values for the Width1 and the Width2 and the Length!");return false}if("Round Tubing"==u)if(""==e||""==a||""==l){alert("You must fill in values for the Outer Diameter and the Wall Thickness and the Length!");return false}if("Square Tubing"==u)if(""==e||""==a||""==l){alert("You must fill in values for the WAF and the Wall Thickness and the Length!");return false}if("Circle"==u)if(""==e||""==l){alert("You must fill in values for the Diameter and the Thickness!");return false}if("Ring"==u)if(""==e||""==a||""==l){alert("You must fill in values for the Outer Diameter and the Inner Diameter and the Thickness!");return false}if("Rectangular Tubing"==u)if(""==e||""==a||""==value4||""==l){alert("You must fill in values for the Side 1 and Side 2 and the Thickness!");return false}if(""==t){alert("You must fill in a value for the Number of Pieces");return false}return true}function MetalWeight(){var value1,value2,value3,noPieces;var units1,units2,units3;var Convert;var metalForm;var Result;var Good;var density;var Result2;value1=jQuery("[name=value1]").val();value2=jQuery("[name=value2]").val();value3=jQuery("[name=value3]").val();noPieces=jQuery("[name=noPieces]").val();Good=isFilledIn(value1,value2,value3,noPieces);if(!Good)return;units1=jQuery("[name=units1]").val();units2=jQuery("[name=units2]").val();units3=jQuery("[name=units3]").val();value1=DoLength(value1,units1);value2=DoLength(value2,units2);value3=DoLength(value3,units3);metalForm=jQuery("#shape").val();metalType=jQuery("#metal_type").val();if("T-430 Stainless"==metalType||"Carbon Steel"==metalType)density=.2836;if("Copper"==metalType)density=.323;if("Brass"==metalType)density=.308;if("T-304 Stainless"==metalType)density=.29;if("Stainless 300 Series"==metalType)density=.286;if("Stainless 400 Series"==metalType)density=.283;if("Aluminum"==metalType)density=.1;if("Aluminum 1100"==metalType)density=.098;if("Aluminum 2011"==metalType)density=.102;if("Aluminum 2014"==metalType)density=.101;if("Aluminum 2017"==metalType)density=.101;if("Aluminum 2024"==metalType)density=.101;if("Aluminum 3003"==metalType)density=.099;if("Aluminum 5005"==metalType)density=.098;if("Aluminum 5052"==metalType)density=.097;if("Aluminum 5056"==metalType)density=.095;if("Aluminum 5083"==metalType)density=.096;if("Aluminum 5086"==metalType)density=.096;if("Aluminum 6061"==metalType)density=.096;if("Aluminum 6063"==metalType)density=.097;if("Aluminum 7075"==metalType)density=.101;if("Aluminum 7178"==metalType)density=.102;if("Beryllium"==metalType)density=.067;if("Cast Iron"==metalType)density=.256;if("Columbium"==metalType)density=.31;if("Copper"==metalType)density=.324;if("Gold"==metalType)density=.698;if("Lead"==metalType)density=.41;if("Magnesium"==metalType)density=.065;if("Molybdenum"==metalType)density=.369;if("Nickel 200"==metalType)density=.321;if("Nickel 201"==metalType)density=.321;if("Nickel 400"==metalType)density=.319;if("Nickel 600"==metalType)density=.304;if("Nickel 625"==metalType)density=.305;if("Nickel 718"==metalType)density=.297;if("Nickel X750"==metalType)density=.298;if("Nickel 800"==metalType)density=.287;if("Nickel 800H"==metalType)density=.287;if("Nickel 825"==metalType)density=.294;if("Nickel 904L"==metalType)density=.291;if("Silver"==metalType)density=.379;if("Tantalum"==metalType)density=.6;if("Titanium"==metalType)density=.163;if("Tungsten"==metalType)density=.697;if("Zinc"==metalType)density=.258;if("Zirconium"==metalType)density=.23;jQuery("#result").val(density);if("Sheet"==metalForm||"Plate"==metalForm||"Square or Flat Bar"==metalForm){Result=new String(value1*value2*value3*noPieces*density);jQuery("#result").val(Math.round(Result));jQuery("#result2").val(Math.round(Result/2.2046))}if("Circle"==metalForm){Result=new String(.785*value1*value1*value3*noPieces*density);jQuery("#result").val(Math.round(Result));jQuery("#result2").val(Math.round(Result/2.2046))}if("Ring"==metalForm){Result=new String(.785*(eval(value1)+eval(value2))*(value1-value2)*value3*noPieces*density);jQuery("#result").val(Math.round(Result));jQuery("#result2").val(Math.round(Result/2.2046))}if("Round Bar"==metalForm){Result=new String(value1*value1*9.42*(value3/12)*noPieces*density);jQuery("#result").val(Math.round(Result));jQuery("#result2").val(Math.round(Result/2.2046))}if("Hexagon Bar"==metalForm){Result=new String(value1*value1*10.4*(value3/12)*noPieces*density);jQuery("#result").val(Math.round(Result));jQuery("#result2").val(Math.round(Result/2.2046))}if("Round Tubing"==metalForm){Result=new String(37.7*(value1-value2)*value2*(value3/12)*noPieces*density);jQuery("#result").val(Math.round(Result));jQuery("#result2").val(Math.round(Result/2.2046))}if("Square Tubing"==metalForm){Result=new String(48*(value1-value2)*value2*(value3/12)*noPieces*density);jQuery("#result").val(Math.round(Result));jQuery("#result2").val(Math.round(Result/2.2046))}if("Rectangular Tubing"==metalForm){Result=new String(48*(value1-value2)*value2*(value3/12)*noPieces*density);jQuery("#result").val(Math.round(Result));jQuery("#result2").val(Math.round(Result/2.2046))}}function ClearFields(){clear_fields=jQuery("[name=value1], [name=value2], [name=value3], [name=result], [name=result2]");clear_fields.val("");jQuery("[name=noPieces]").val(1)}function ResetFields(){jQuery("[name=shape], [name=lbl1], [name=lbl2], [name=lbl3]").val("");jQuery("[name=lbl1], [name=value1], [name=units1], [name=lbl2], [name=value2], [name=units2], [name=lbl3], [name=value3], [name=units3]").show()}function ChangeLabel(){var e=jQuery("#shape").val();if("Sheet"==e||"Plate"==e||"Square or Flat Bar"==e){jQuery("[name=lbl1], [name=value1], [name=units1], [name=lbl2], [name=value2], [name=units2], [name=lbl3], [name=value3], [name=units3]").show();jQuery("[name=lbl1]").val("Length");jQuery("[name=lbl2]").val("Width");jQuery("[name=lbl3]").val("Thickness")}if("Circle"==e){jQuery("[name=lbl1], [name=value1], [name=units1], [name=lbl3], [name=value3], [name=units3]").show();jQuery("[name=lbl2], [name=value2], [name=units2]").hide();jQuery("[name=lbl1]").val("Diameter");jQuery("[name=lbl3]").val("Thickness")}if("Ring"==e){jQuery("[name=lbl1], [name=value1], [name=units1], [name=lbl2], [name=value2], [name=units2], [name=lbl3], [name=value3], [name=units3]").show();jQuery("[name=lbl1]").val("Outer Diameter");jQuery("[name=lbl2]").val("Inner Diameter");jQuery("[name=lbl3]").val("Thickness")}if("Round Bar"==e){jQuery("[name=lbl1], [name=value1], [name=units1], [name=lbl3], [name=value3], [name=units3]").show();jQuery("[name=lbl2], [name=value2], [name=units2]").hide();jQuery("[name=lbl1]").val("Diameter");jQuery("[name=lbl3]").val("Length")}if("Hexagon Bar"==e){jQuery("[name=lbl1], [name=value1], [name=units1], [name=lbl3], [name=value3], [name=units3]").show();jQuery("[name=lbl2], [name=value2], [name=units2]").hide();jQuery("[name=lbl1]").val("Width across flats");jQuery("[name=lbl3]").val("Length")}if("Round Tubing"==e){jQuery("[name=lbl1], [name=value1], [name=units1], [name=lbl3], [name=value3], [name=units3]").show();jQuery("[name=lbl1]").val("Outer Diameter");jQuery("[name=lbl2]").val("Wall Thickness");jQuery("[name=lbl3]").val("Length")}if("Square Tubing"==e){jQuery("[name=lbl1], [name=value1], [name=units1], [name=lbl2], [name=value2], [name=units2], [name=lbl3], [name=value3], [name=units3]").show();jQuery("[name=lbl1]").val("Width across flats");jQuery("[name=lbl2]").val("Wall Thickness");jQuery("[name=lbl3]").val("Length")}}