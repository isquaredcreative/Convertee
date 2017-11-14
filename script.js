
//var alert1 = $('#input').val()
//
//alert(alert1);

function convert(){ 

    var input = $('#input').val();
    
    
    var selectIn = $('#input-select').val();
    var selectOut = $('#output-select').val();

    var combo = selectIn + selectOut;
    
    
    var result;
    
   
//    
//    alert(selectIn);
    
    switch(combo){
            
            //CM CONVERSIONS BEGIN
            
        case "icmocm":
           result = (input/1).toFixed(9);
            break;
            
         case "icmodm":
          result = (input/10).toFixed(9);
            break;    
            
          case "icmoft":
          result = (input/30.48).toFixed(9);
            break;    
            
             case "icmoin":
          result = (input/2.54).toFixed(9);
            break;   
            
             case "icmokm":
          result = (input/100000).toFixed(9);
            
            break;   
            
             case "icmom":
          result = (input/100).toFixed(9);
            break;   
            
             case "icmomi":
          result = (input * 0.0000062137).toFixed(9);
            break;   
            
             case "icmomm":
           result = (input * 10).toFixed(9);
            break;   
                   
             case "icmoyd":
          result = (input * 0.010936).toFixed(9);
            break;   
                
            // CM Conversions End
            
            // DM CONVERSIONS BEGIN
            case "idmocm":
           result = (input/0.1).toFixed(9);
            break;
            
            case "idmodm":
           result = (input * 1).toFixed(9);
            break;
            
            case "idmoft":
           result = (input * 0.32808).toFixed(9);
            break;
                
            case "idmoin":
           result = (input * 3.9370).toFixed(9);
            break;
            
            case "idmokm":
           result = (input/10000).toFixed(9);
            break;
                
            case "idmom":
           result = (input/10).toFixed(9);
            break;
            
            case "idmomi":
           result = (input * 0.000062137).toFixed(9);
            break;
            
            case "idmomm":
           result = (input/0.010000).toFixed(9);
            break;
            
            case "idmoyd":
           result = (input/9.144).toFixed(9);
            break;
            
            // DM CONERSIONS END
            //FT CONVERSION BEGIN
            
             case "iftocm":
           result = (input * 30.48).toFixed(9);
            break;
            
            case "iftodm":
           result = (input * 3.048).toFixed(9);
            break;
            
            case "iftoft":
           result = (input * 1).toFixed(9);
            break;
            
            case "iftoin":
           result = (input * 12).toFixed(9);
            break;
            
            case "iftokm":
           result = (input/3280.8).toFixed(9);
            break;
            
            case "iftom":
           result = (input * 0.3048 ).toFixed(9);
            break;
            
            case "iftomi":
           result = (input * 0.00018939).toFixed(9);
            break;
            
            case "iftomm":
           result = (input * 304.8).toFixed(9);
            break;
            
            case "iftoyd":
           result = (input/3).toFixed(9);
            break;
            
            //FT CONVERSIONS END
            
           case "iinocm":
           result = (input * 1).toFixed(9);
            break; 
            
             case "iinodm":
           result = (input * 1).toFixed(9);
            break; 
            
             case "iinoft":
           result = (input / 12).toFixed(9);
            break; 
            
             case "iinoin":
           result = (input * 1).toFixed(9);
            break; 
            
             case "iinokm":
           result = (input / 39370).toFixed(9);
            break; 
            
             case "iinom":
           result = (input * 0.0254).toFixed(9);
            break; 
            
             case "iinomi":
           result = (input / 63360).toFixed(9);
            break; 
            
             case "iinomm":
           result = (input * 25.4).toFixed(9);
            break; 
            
             case "iinoyd":
           result = (input / 36).toFixed(9);
            break;
            
            // IN CONVERSIONS END
            
            // KM CONVERSIONS BEGIN
            
            case "ikmocm":
           result = (input * 100000).toFixed(9);
            break; 
            
            case "ikmodm":
           result = (input * 10000).toFixed(9);
            break; 
            
            case "ikmoft":
           result = (input * 3280.8).toFixed(9);
            break; 
            
            case "ikmoin":
           result = (input * 39370).toFixed(9);
            break; 
            
            case "ikmokm":
           result = (input * 1).toFixed(9);
            break; 
            
            case "ikmom":
           result = (input * 1000).toFixed(9);
            break; 
            
            case "ikmomi":
           result = (input *  0.62137).toFixed(9);
            break; 
            
            case "ikmomm":
           result = (input * 1000000).toFixed(9);
            break; 
            
            case "ikmoyd":
           result = (input * 1093.6).toFixed(9);
            break; 
            
            
            // KM CONVERSIONS END
            
            
            // M CONVERSIONS BEGIN
            
            case "imocm":
           result = (input * 100).toFixed(9);
            break; 
            
            case "imodm":
           result = (input * 10).toFixed(9);
            break; 
            
            case "imoft":
           result = (input / 0.3048).toFixed(9);
            break; 
            
            case "imoin":
           result = (input / 0.0254).toFixed(9);
            break; 
            
            case "imokm":
           result = (input / 1000.0).toFixed(9);
            break; 
            
            case "imom":
           result = (input * 1).toFixed(9);
            break; 
            
            case "imomi":
           result = (input * 0.00062137).toFixed(9);
            break; 
            
            case "imomm":
           result = (input / 0.0010000).toFixed(9);
            break; 
            
            case "imoyd":
           result = (input * 1.0936).toFixed(9);
            break; 
            
            
            
            
            // M CONVERSIONS END
            
            
            // MI CONVERSIONS START
            
             case "imiocm":
           result = (input * 160934.4).toFixed(9);
            break;
        
            case "imiodm":
           result = (input * 16093.44).toFixed(9);
            break; 
            
             case "imioft":
           result = (input * 5280.0).toFixed(9);
            break; 
            
             case "imioin":
           result = (input * 63360).toFixed(9);
            break; 
            
             case "imiokm":
           result = (input * 1.60934).toFixed(9);
            break; 
            
             case "imiom":
           result = (input  * 1609.344).toFixed(9);
            break; 
            
             case "imiomi":
           result = (input * 1).toFixed(9);
            break; 
            
             case "imiomm":
           result = (input * 1609344).toFixed(9);
            break; 
            
             case "imioyd":
           result = (input * 1760.0).toFixed(9);
            break; 
            
            
            
            // MI CONVERSIONS END
            
            // MM CONVERSIONS BEGIN
            
              case "immocm":
           result = (input / 10).toFixed(9);
            break;
            
              case "immodm":
           result = (input / 100).toFixed(9);
            break;
            
              case "immoft":
           result = (input / 304.8).toFixed(9);
            break;
            
              case "immoin":
           result = (input / 25.4).toFixed(9);
            break;
            
              case "immokm":
           result = (input / 1000000).toFixed(9);
            break;
            
              case "immom":
           result = (input /1000).toFixed(9);
            break;
            
              case "immomi":
           result = (input * 0.00000062137).toFixed(9);
            break;
            
              case "immomm":
           result = (input * 1).toFixed(9);
            break;
            
              case "immoyd":
           result = (input / 914.4000).toFixed(9);
            break;
            
            // MM CONVERSIONS END
            
            // YARD CONVERSIONS START
            
              case "iydocm":
           result = (input * 91.44000).toFixed(9);
            break;
            
              case "iydodm":
           result = (input * 9.144).toFixed(9);
            break;
            
              case "iydoft":
           result = (input / 3).toFixed(9);
            break;
            
              case "iydoin":
           result = (input * 36).toFixed(9);
            break;
            
              case "iydokm":
           result = (input / 1093.613).toFixed(9);
            break;
            
              case "iydom":
           result = (input / 1.093613 ).toFixed(9);
            break;
            
              case "iydomi":
           result = (input / 1760.000).toFixed(9);
            break;
            
              case "iydomm":
           result = (input * 914.4000).toFixed(9);
            break;
            
              case "iydoyd":
           result = (input * 1).toFixed(9);
            break;
            
            
            
            // YARD CONVERSIONS END
            
    }
       
    
 var output = result;
    
    
    $('#output').val(output);

};


$('#lgt').click(function(){
    
    $('#lengthGrid').slideToggle();
    $('#length-plus').toggleClass('fa-plus fa-minus');
    
});

//
//$('select').on('change', function (e) {
//    var optionSelected = $("option:selected", this);
//    var valueSelected = this.value;
//    
//  
//     $('body').css("background-color", valueSelected);
//    $('#convert').css("background-color", valueSelected);
//        
//
//    
//});

$('#m-star-purple').click(function(){
    
    $('body').removeClass("red-back");
    $('body').removeClass("black-back");
    $('body').removeClass("blue-back");
    $('body').removeClass("green-back");
    
     $('body').removeClass("white-back");
    $('h1').removeClass("purple");
    $('p').removeClass("purple");
    $('#convert').removeClass("purple-border");
    $('select').removeClass("purple-border");
    $('input').removeClass("purple-border");
    
    $('body').addClass("purple-back");
   
    
    
});

$('#m-star-red').click(function(){
    
    $('body').removeClass("purple-back");
    $('body').removeClass("black-back");
    $('body').removeClass("blue-back");
    $('body').removeClass("green-back");
   
     $('body').removeClass("white-back");
    $('h1').removeClass("purple");
    $('p').removeClass("purple");
    $('#convert').removeClass("purple-border");
    $('select').removeClass("purple-border");
    $('input').removeClass("purple-border");
    
    $('body').addClass("red-back");
   
    
    
    
    
    
});

$('#m-star-black').click(function(){
    
    
    $('body').removeClass("purple-back");
    $('body').removeClass("red-back");
    $('body').removeClass("blue-back");
    $('body').removeClass("green-back");
  
     $('body').removeClass("white-back");
    $('h1').removeClass("purple");
    $('p').removeClass("purple");
    $('#convert').removeClass("purple-border");
    $('select').removeClass("purple-border");
    $('input').removeClass("purple-border");
    
    $('body').addClass("black-back");
    
});

$('#m-star-blue').click(function(){
    
    $('body').removeClass("purple-back");
    $('body').removeClass("black-back");
    $('body').removeClass("red-back");
    $('body').removeClass("green-back");

     $('body').removeClass("white-back");
    $('h1').removeClass("purple");
    $('p').removeClass("purple");
    $('#convert').removeClass("purple-border");
    $('select').removeClass("purple-border");
    $('input').removeClass("purple-border");
    
    $('body').addClass("blue-back");
    
    
    
});

$('#m-star-green').click(function(){
    
    
    $('body').removeClass("purple-back");
    $('body').removeClass("black-back");
    $('body').removeClass("red-back");
    $('body').removeClass("blue-back");
    
    $('body').removeClass("white-back");
    $('h1').removeClass("purple");
    $('p').removeClass("purple");
    $('#convert').removeClass("purple-border");
    $('select').removeClass("purple-border");
    $('input').removeClass("purple-border");
    
    
    $('body').addClass("green-back");
    
    
    
});

$('#m-star-white').click(function(){
    
    
    
    $('body').addClass("white-back");
    $('h1').addClass("purple");
    $('p').addClass("purple");
    $('#convert').addClass("purple-border");
    $('select').addClass("purple-border");
    $('input').addClass("purple-border");
    
    
});




//function feet2MeterLengthConverter(valNum) {
//
//    var result = (valNum/3.2808).toFixed(4);
//
//    document.getElementById("outputText").value = result;
//    
//}


function ftmLengthConverter() {

    var num = document.getElementById("input1").value;
    
    var result = (num/3.2808).toFixed(4);

    document.getElementById("outputText").value = result;
    
}



function mtfLengthConverter() {

    
    var num = document.getElementById("input1").value;
    
    var result = (num * 3.2808).toFixed(4);

    document.getElementById("outputText").value = result;
    
}

//function itcLengthConverter(valNum) {
//
//    var result = (valNum * 2.540).toFixed(4);
//
//    document.getElementById("outputText").value = result;
//    
//}

function itcLengthConverter() {

    
    var num = document.getElementById("input1").value;
    
    var result = (num * 2.540).toFixed(4);

    document.getElementById("outputText").value = result;
    
}


//function ctiLengthConverter(valNum) {
//
//    var result = (valNum / 2.540).toFixed(4);
//
//    document.getElementById("outputText").value = result;
//    
//}

function ctiLengthConverter() {

    
    var num = document.getElementById("input1").value;
    var result = (num / 2.540).toFixed(4);

    document.getElementById("outputText").value = result;
    
}

//function itmLengthConverter(valNum) {
//
//    var result = (valNum * 25.400).toFixed(4);
//
//    document.getElementById("outputText").value = result;
//    
//}

function itmLengthConverter() {

    
    var num = document.getElementById("input1").value;
    
    var result = (num *  25.4).toFixed(4);

    document.getElementById("outputText").value = result;
    
}
//
//function mtiLengthConverter(valNum) {
//
//    var result = (valNum / 25.400).toFixed(4);
//
//    document.getElementById("outputText").value = result;
//    
//}

function mtiLengthConverter() {

    
    var num = document.getElementById("input1").value;
    var result = (num / 25.4).toFixed(9);

    document.getElementById("outputText").value = result;
    
}

//function ftiLengthConverter(valNum) {
//
//    var result = (valNum * 12).toFixed(4);
//
//    document.getElementById("outputText").value = result;
//    
//}

//function ftiLengthConverter(valNum) {
//    
//
//    var result = (valNum / 12).toFixed(4);
//
//    document.getElementById("outputText").value = result;
//    
//}

function ftiLengthConverter() {
    
    
    var num = document.getElementById("input1").value;
    var result = (num * 12).toFixed(4);

    document.getElementById("outputText").value = result;
    
}

function itfLengthConverter() {
    
    
    var num = document.getElementById("input1").value;
    var result = (num / 12).toFixed(4);

    document.getElementById("outputText").value = result;
    
}

function ytfLengthConverter() {
    
    
    var num = document.getElementById("input1").value;
    var result = (num * 3).toFixed(4);

    document.getElementById("outputText").value = result;
    
}
function ftyLengthConverter() {
    
    
    var num = document.getElementById("input1").value;
    var result = (num / 3).toFixed(4);

    document.getElementById("outputText").value = result;
    
}

function mtkLengthConverter() {
    
    
    var num = document.getElementById("input1").value;
    
    var result = (num / 0.62137).toFixed(8);

    document.getElementById("outputText").value = result;
    
}

function ktmLengthConverter() {
    
    
    var num = document.getElementById("input1").value;
    
    var result = (num * 0.62137).toFixed(8);

    document.getElementById("outputText").value = result;
    
}

$('#ftm').click(function(){
    
    $('#input1').val("");  $('#outputText').val("");
    $('#inputTitle').text('Feet To Meters Conversion');
    $('#inputText').text('Enter Feet:');
    $('#outputTitle').text('Meters:');
    $('#input1').attr("placeholder", "Feet");
    $('#outputText').attr("placeholder", "Meters");
 
    
    
    
    $("#convert").attr("onclick","ftmLengthConverter()");
    
   
    
});

$( "#ftm" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#ftmText').addClass('animated ' + 'flipInX').one(animationEnd, function() {
            $('#ftmText').removeClass('animated ' + 'flipInX');
        });
  });
 


$('#mtf').click(function(){
    
    $('#input1').val(""); $('#outputText').val("");
    $('#inputTitle').text('Meters To Feet Conversion');
    $('#inputText').text('Enter Meters:');
    $('#outputTitle').text('Feet:');
    $('#input1').attr("placeholder", "Meters");
     $('#outputText').attr("placeholder", "Feet");
    
    $("#convert").attr("onclick","mtfLengthConverter()");
    
    
});

$( "#mtf" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#mtfText').addClass('animated ' + 'flipInX').one(animationEnd, function() {
            $('#mtfText').removeClass('animated ' + 'flipInX');
        });
  });
 

$('#itc').click(function(){
    
    $('#input1').val(""); $('#outputText').val("");
    $('#inputTitle').text('Inches to Centimeters Conversion');
    $('#inputText').text('Enter Inches:');
    $('#outputTitle').text('Centimeters:');
    $('#input1').attr("placeholder", "Inches");
     $('#outputText').attr("placeholder", "Centimeters");
    
    $("#convert").attr("onclick","itcLengthConverter()");
    
    
});

$( "#itc" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#itcText').addClass('animated ' + 'flipInX').one(animationEnd, function() {
            $('#itcText').removeClass('animated ' + 'flipInX');
        });
  });
 


$('#cti').click(function(){
    
    $('#input1').val(""); $('#outputText').val("");
    $('#inputTitle').text('Centimeters to Inches Conversion');
    $('#inputText').text('Enter Centimeters:');
    $('#outputTitle').text('Inches:');
    $('#input1').attr("placeholder", "Centimeters");
    $('#outputText').attr("placeholder", "Inches");
    
    
    $("#convert").attr("onclick","ctiLengthConverter()");
    
    
});

$( "#cti" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#ctiText').addClass('animated ' + 'flipInX').one(animationEnd, function() {
            $('#ctiText').removeClass('animated ' + 'flipInX');
        });
  });
 

$('#itm').click(function(){
    
    $('#input1').val(""); $('#outputText').val("");
    $('#inputTitle').text('Inches to Meters Conversion');
    $('#inputText').text('Enter Inches:');
    $('#outputTitle').text('Millimeters:');
    $('#input1').attr("placeholder", "Inches");
     $('#outputText').attr("placeholder", "Millimeters");
    
    
    
    $("#convert").attr("onclick","itmLengthConverter()");
    
    
});

$( "#itm" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#itmText').addClass('animated ' + 'flipInX').one(animationEnd, function() {
            $('#itmText').removeClass('animated ' + 'flipInX');
        });
  });
 

$('#mti').click(function(){
    
    $('#input1').val(""); $('#outputText').val("");
    $('#inputTitle').text('Millimeters To Inches Conversion');
    $('#inputText').text('Enter Millimeters:');
    $('#outputTitle').text('Inches:');
    $('#input1').attr("placeholder", "Millieters");
     $('#outputText').attr("placeholder", "Inches");
    
    
    
    $("#convert").attr("onclick","mtiLengthConverter()");
    
    
});

$( "#mti" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#mtiText').addClass('animated ' + 'flipInX').one(animationEnd, function() {
            $('#mtiText').removeClass('animated ' + 'flipInX');
        });
  });
 

$('#fti').click(function(){
    
    $('#input1').val(""); $('#outputText').val("");
    $('#inputTitle').text('Feet to Inches Conversion');
    $('#inputText').text('Enter Feet:');
    $('#outputTitle').text('Inches:');
    $('#input1').attr("placeholder", "Feet");
     $('#outputText').attr("placeholder", "Inches");
    
    
    
    $("#convert").attr("onclick","ftiLengthConverter()");
    
    
});

$( "#fti" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#ftiText').addClass('animated ' + 'flipInX').one(animationEnd, function() {
            $('#ftiText').removeClass('animated ' + 'flipInX');
        });
  });
 

$('#itf').click(function(){
    
    $('#input1').val(""); $('#outputText').val("");
    $('#inputTitle').text('Inches to Feet Conversion');
    $('#inputText').text('Enter Inches:');
    $('#outputTitle').text('Feet:');
    $('#input1').attr("placeholder", "Inches");
     $('#outputText').attr("placeholder", "Feet");
    
    
    
    $("#convert").attr("onclick","itfLengthConverter()");
    
    
});

$( "#itf" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#itfText').addClass('animated ' + 'flipInX').one(animationEnd, function() {
            $('#itfText').removeClass('animated ' + 'flipInX');
        });
  });
 
$('#fty').click(function(){
    
    $('#input1').val(""); $('#outputText').val("");
    $('#inputTitle').text('Feet To Yards Conversion');
    $('#inputText').text('Enter Feet:');
    $('#outputTitle').text('Yards:');
    $('#input1').attr("placeholder", "Feet");
     $('#outputText').attr("placeholder", "Yards");
    
    
    
    $("#convert").attr("onclick","ftyLengthConverter()");
    
    
});

$( "#fty" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#ftyText').addClass('animated ' + 'flipInX').one(animationEnd, function() {
            $('#ftyText').removeClass('animated ' + 'flipInX');
        });
  });

$('#ytf').click(function(){
    
    $('#input1').val(""); $('#outputText').val("");
    $('#inputTitle').text('Yards To Feet Conversion');
    $('#inputText').text('Enter Yards:');
     $('#input1').attr("placeholder", "Yards");
    $('#outputTitle').text('Feet:');
   
     $('#outputText').attr("placeholder", "Feet");
    
    
    
    $("#convert").attr("onclick","ytfLengthConverter()");
    
    
});

$( "#ytf" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#ytfText').addClass('animated ' + 'flipInX').one(animationEnd, function() {
            $('#ytfText').removeClass('animated ' + 'flipInX');
        });
  });
 
$('#mtk').click(function(){
    
    $('#input1').val(""); $('#outputText').val("");
    $('#inputTitle').text('Miles to Kilometers Conversion');
    $('#inputText').text('Enter Miles:');
     $('#input1').attr("placeholder", "Miles");
    $('#outputTitle').text('Kilometers:');
   
     $('#outputText').attr("placeholder", "Kilometers");
    
    
    
    $("#convert").attr("onclick","mtkLengthConverter()");
    
    
});

$( "#mtk" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#mtkText').addClass('animated ' + 'flipInX').one(animationEnd, function() {
            $('#mtkText').removeClass('animated ' + 'flipInX');
        });
  });


$('#ktm').click(function(){
    
    $('#input1').val(""); $('#outputText').val("");
    $('#inputTitle').text('Kilometers to Miles Conversion');
    $('#inputText').text('Enter Kilometers:');
     $('#input1').attr("placeholder", "Kilometers");
    $('#outputTitle').text('Miles:');
   
     $('#outputText').attr("placeholder", "Miles");
    
    
    
    $("#convert").attr("onclick","ktmLengthConverter()");
    
    
});

$( "#ktm" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#ktmText').addClass('animated ' + 'flipInX').one(animationEnd, function() {
            $('#ktmText').removeClass('animated ' + 'flipInX');
        });
  });

 

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

$( "#m-star-purple" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#m-star-purple').addClass('animated ' + 'bounce').one(animationEnd, function() {
            $('#m-star-purple').removeClass('animated ' + 'bounce');
           
        });
  });

$( "#m-star-red" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#m-star-red').addClass('animated ' + 'bounce').one(animationEnd, function() {
            $('#m-star-red').removeClass('animated ' + 'bounce');
           
        });
  });

$( "#m-star-green" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#m-star-green').addClass('animated ' + 'bounce').one(animationEnd, function() {
            $('#m-star-green').removeClass('animated ' + 'bounce');
           
        });
  });

$( "#m-star-blue" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#m-star-blue').addClass('animated ' + 'bounce').one(animationEnd, function() {
            $('#m-star-blue').removeClass('animated ' + 'bounce');
           
        });
  });

$( "#m-star-black" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#m-star-black').addClass('animated ' + 'bounce').one(animationEnd, function() {
            $('#m-star-black').removeClass('animated ' + 'bounce');
           
        });
  });

$( "#m-star-white" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#m-star-white').addClass('animated ' + 'bounce').one(animationEnd, function() {
            $('#m-star-white').removeClass('animated ' + 'bounce');
           
        });
  });