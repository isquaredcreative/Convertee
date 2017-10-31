
$('#lgt').click(function(){
    
    $('#lengthGrid').slideToggle();
    $('#length-plus').toggleClass('fa-plus fa-minus');
    
});


$('select').on('change', function (e) {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
    
  
     $('body').css("background-color", valueSelected);
    $('#convert').css("background-color", valueSelected);
        

    
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

