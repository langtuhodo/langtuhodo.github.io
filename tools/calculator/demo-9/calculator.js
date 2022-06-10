
    $('#roundsCalculator button').click(function(e){
            e.preventDefault();
            var size = $('#roundSize').val();
            var length = $('#roundLengthFt').val() + $('#roundLengthIn').val()*12;
            var number = $('#roundNumber').val();
            var roundsWPI =  ((size * size)*2.6729)/12;
            var roundsWPF = (size * size)*2.6729
            var roundsWPB = ($('#roundLengthFt').val()*roundsWPF) + ($('#roundLengthIn').val()*roundsWPI);
            var roundsTotalWeight = number*roundsWPB;
            if(roundsTotalWeight){
                $('#roundsCalculatedWeight').html(roundsTotalWeight.toFixed(4))
            }
            $("#roundsCalculatedWeight").show();
    });
    
    $('#hexCalculator button').click(function(e){
            e.preventDefault();
            var size = $('#hexSize').val();
            var length = $('#hexLengthFt').val() + $('#hexLengthIn').val()*12;
            var number = $('#hexNumber').val();
            var roundsWPI =  ((size * size)*2.9473)/12;
            var roundsWPF = (size * size)*2.9473
            var roundsWPB = ($('#hexLengthFt').val()*roundsWPF) + ($('#hexLengthIn').val()*roundsWPI);
            var roundsTotalWeight = number*roundsWPB;
            if(roundsTotalWeight){
                $('#hexCalculatedWeight').html(roundsTotalWeight.toFixed(4))
            }
            $("#hexCalculatedWeight").show();
    });
    
    $('#squareCalculator button').click(function(e){
            e.preventDefault();
            var size = $('#squareSize').val();
            var length = $('#squareLengthFt').val() + $('#hexLengthIn').val()*12;
            var number = $('#squareNumber').val();
            var roundsWPI =  ((size * size)*3.4032)/12;
            var roundsWPF = (size * size)*3.4032;
            var roundsWPB = ($('#squareLengthFt').val()*roundsWPF) + ($('#squareLengthIn').val()*roundsWPI);
            var roundsTotalWeight = number*roundsWPB;
            if(roundsTotalWeight){
                $('#squareCalculatedWeight').html(roundsTotalWeight.toFixed(4))
            }
            $("#squareCalculatedWeight").show();
    });
            
    function resetRound() {
        document.getElementById("roundSize").value = "2.375";
        document.getElementById("roundLengthFt").value = "0";
        document.getElementById("roundLengthIn").value = "1.04";
        document.getElementById("roundNumber").value = "1";
        $("#roundsCalculatedWeight").hide();
        
     }
       
    function resetHex() { 
        document.getElementById("hexSize").value = "2.375";
        document.getElementById("hexLengthFt").value = "0";
        document.getElementById("hexLengthIn").value = "1.04";
        document.getElementById("hexNumber").value = "1";
        $("#hexCalculatedWeight").hide();
    }
    
    function resetSquare() {
        document.getElementById("squareSize").value = "2.375";
        document.getElementById("squareLengthFt").value = "0";
        document.getElementById("squareLengthIn").value = "1.04";
        document.getElementById("squareNumber").value = "1";
        $("#squareCalculatedWeight").hide();
    }       
    
