
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
    
    
    $('#output').val(parseFloat(output));

};

function liquidConvert(){ 

     var input = $('#input-1').val();
    
  
    
    var selectIn = $('#input-select-1').val();
    var selectOut = $('#output-select-1').val();

    var combo = selectIn + selectOut;
    
    
    var result;
    
    switch(combo){
            
              case "icpocp":
           result = (input/1).toFixed(9);
            break;
            
              case "icpogl":
           result = (input/16).toFixed(9);
            break;
            
              case "icpol":
           result = (input/4.226753).toFixed(9);
            break;
            
              case "icpoml":
           result = (input * 236.5882).toFixed(9);
            break;
            
              case "icpooz":
           result = (input * 8).toFixed(9);
            break;
            
              case "icpopt":
           result = (input/2).toFixed(9);
            break;
            
              case "icpoqt":
           result = (input/4).toFixed(9);
            break;
            
              case "icposp":
           result = (input * 48).toFixed(9);
            break;
            
              case "icpots":
           result = (input * 16).toFixed(9);
            break;
            
            // CUP CONVERSION END
            
            
             case "iglocp":
           result = (input * 16).toFixed(9);
            break;
            
             case "iglogl":
           result = (input/1).toFixed(9);
            break;
            
             case "iglol":
           result = (input * 3.785412).toFixed(9);
            break;
            
             case "igloml":
           result = (input * 3785.412).toFixed(9);
            break;
            
             case "iglooz":
           result = (input * 128).toFixed(9);
            break;
            
             case "iglopt":
           result = (input * 8).toFixed(9);
            break;
            
             case "igloqt":
           result = (input * 4).toFixed(9);
            break;
            
             case "iglosp":
           result = (input * 768).toFixed(9);
            break;
            
             case "iglots":
           result = (input * 256).toFixed(9);
            break;
      
            // GALLON CONVERSION END
            
             case "ilocp":
           result = (input * 4.226753).toFixed(9);
            break;
            
             case "ilogl":
           result = (input * 0.26417).toFixed(9);
            break;
            
             case "ilol":
           result = (input/1).toFixed(9);
            break;
            
             case "iloml":
           result = (input * 1000).toFixed(9);
            break;
            
             case "ilooz":
           result = (input * 33.81402).toFixed(9);
            break;
            
             case "ilopt":
           result = (input * 2.113376).toFixed(9);
            break;
            
             case "iloqt":
           result = (input * 1.056688).toFixed(9);
            break;
            
             case "ilosp":
           result = (input * 202.8841).toFixed(9);
            break;
            
             case "ilots":
           result = (input * 67.62805).toFixed(9);
            break;
            
            // LITER CONVERSIONS END
            
             case "imlocp":
           result = (input * 0.0042268).toFixed(9);
            break;
            
                 
             case "imlogl":
           result = (input * 0.00026417205124156).toFixed(9);
            break;
            
                 
             case "imlol":
           result = (input / 1000).toFixed(9);
            break;
            
                 
             case "imloml":
           result = (input * 1).toFixed(9);
            break;
            
                 
             case "imlooz":
           result = (input * .033814022558919).toFixed(9);
            break;
            
                 
             case "imlopt":
           result = (input * 0.002113376419).toFixed(9);
            break;
            
                 
             case "imloqt":
           result = (input * 0.0010567).toFixed(9);
            break;
            
                 
             case "imlosp":
           result = (input * 0.20288).toFixed(9);
            break;
            
                 
             case "imlots":
           result = (input * 0.067628).toFixed(9);
            break;
            
            // MILLILITER CONVERSIONS END
            
             case "iozocp":
           result = (input / 8).toFixed(9);
            break;
            
             case "iozogl":
           result = (input / 128).toFixed(9);
            break;
            
             case "iozol":
           result = (input / 33.81402).toFixed(9);
            break;
            
             case "iozoml":
           result = (input * 29.57353).toFixed(9);
            break;
            
             case "iozooz":
           result = (input / 1).toFixed(9);
            break;
            
             case "iozopt":
           result = (input / 16).toFixed(9);
            break;
            
             case "iozoqt":
           result = (input / 32).toFixed(9);
            break;
            
             case "iozosp":
           result = (input * 6).toFixed(9);
            break;
            
             case "iozots":
           result = (input * 2).toFixed(9);
            break;
            
            // OUNCES CONVERSIONS END
            
              
             case "iptocp":
           result = (input * 2).toFixed(9);
            break;
            
             case "iptogl":
           result = (input / 8).toFixed(9);
            break;
            
             case "iptol":
           result = (input / 2.113376).toFixed(9);
            break;
            
             case "iptoml":
           result = (input * 473.1765).toFixed(9);
            break;
            
             case "iptoz":
           result = (input * 16).toFixed(9);
            break;
            
             case "iptopt":
           result = (input * 1).toFixed(9);
            break;
            
             case "iptoqt":
           result = (input / 2).toFixed(9);
            break;
            
             case "iptosp":
           result = (input * 96).toFixed(9);
            break;
            
             case "iptots":
           result = (input * 32).toFixed(9);
            break;
            
             
    // PINT CONVERSIONS END
    
           case "iqtocp":
           result = (input * 4).toFixed(9);
            break;
            
             case "iqtogl":
           result = (input / 4).toFixed(9);
            break;
            
             case "iqtol":
           result = (input / 1.056688).toFixed(9);
            break;
            
             case "iqtoml":
           result = (input * 946.3530).toFixed(9);
            break;
            
             case "iqtoz":
           result = (input * 32).toFixed(9);
            break;
            
             case "iqtopt":
           result = (input * 2).toFixed(9);
            break;
            
             case "iqtoqt":
           result = (input / 2).toFixed(9);
            break;
            
             case "iqtosp":
           result = (input * 192).toFixed(9);
            break;
            
             case "iqtots":
           result = (input * 64).toFixed(9);
            break;
            
    //  QUART CONVERSIONS END
    
              case "ispocp":
           result = (input / 48).toFixed(9);
            break;
            
              case "ispogl":
           result = (input / 768.0000).toFixed(9);
            break;
            
              case "ispol":
           result = (input / 202.8841).toFixed(9);
            break;
            
              case "ispoml":
           result = (input * 4.928922).toFixed(9);
            break;
            
              case "ispooz":
           result = (input / 6).toFixed(9);
            break;
            
              case "ispopt":
           result = (input / 96).toFixed(9);
            break;
            
              case "ispoqt":
           result = (input / 192).toFixed(9);
            break;
            
              case "isposp":
           result = (input / 1).toFixed(9);
            break;
            
              case "ispots":
           result = (input / 3).toFixed(9);
            break;
            
            // TEASPOON CONVERSIONS END
            
             case "itsocp":
           result = (input / 16).toFixed(9);
            break;
            
              case "itsogl":
           result = (input / 256).toFixed(9);
            break;
            
              case "itsol":
           result = (input / 67.62805).toFixed(9);
            break;
            
              case "itsoml":
           result = (input / 0.067628).toFixed(9);
            break;
            
              case "itsooz":
           result = (input / 2).toFixed(9);
            break;
            
              case "itsopt":
           result = (input / 32).toFixed(9);
            break;
            
              case "itsoqt":
           result = (input / 64 ).toFixed(9);
            break;
            
              case "itsosp":
           result = (input * 3).toFixed(9);
            break;
            
              case "itsots":
           result = (input / 1).toFixed(9);
            break;
            
               
                } // switch end
   
            

     var output = result;
    
    ;
    
    
    $('#output-1').val(parseFloat(output));
    
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
    $('.convert').removeClass("purple-border");
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
    $('.convert').removeClass("purple-border");
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
    $('.convert').removeClass("purple-border");
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
    $('.convert').removeClass("purple-border");
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
    $('.convert').removeClass("purple-border");
    $('select').removeClass("purple-border");
    $('input').removeClass("purple-border");
    
    
    $('body').addClass("green-back");
    
    
    
});

$('#m-star-white').click(function(){
    
    
    
    $('body').addClass("white-back");
    $('h1').addClass("purple");
    $('p').addClass("purple");
    $('.convert').addClass("purple-border");
    $('select').addClass("purple-border");
    $('input').addClass("purple-border");
    
    
});


//
//
////function feet2MeterLengthConverter(valNum) {
////
////    var result = (valNum/3.2808).toFixed(4);
////
////    document.getElementById("outputText").value = result;
////    
////}
//
//
//function ftmLengthConverter() {
//
//    var num = document.getElementById("input1").value;
//    
//    var result = (num/3.2808).toFixed(4);
//
//    document.getElementById("outputText").value = result;
//    
//}
//
//
//
//function mtfLengthConverter() {
//
//    
//    var num = document.getElementById("input1").value;
//    
//    var result = (num * 3.2808).toFixed(4);
//
//    document.getElementById("outputText").value = result;
//    
//}
//
////function itcLengthConverter(valNum) {
////
////    var result = (valNum * 2.540).toFixed(4);
////
////    document.getElementById("outputText").value = result;
////    
////}
//
//function itcLengthConverter() {
//
//    
//    var num = document.getElementById("input1").value;
//    
//    var result = (num * 2.540).toFixed(4);
//
//    document.getElementById("outputText").value = result;
//    
//}
//
//
////function ctiLengthConverter(valNum) {
////
////    var result = (valNum / 2.540).toFixed(4);
////
////    document.getElementById("outputText").value = result;
////    
////}
//
//function ctiLengthConverter() {
//
//    
//    var num = document.getElementById("input1").value;
//    var result = (num / 2.540).toFixed(4);
//
//    document.getElementById("outputText").value = result;
//    
//}
//
////function itmLengthConverter(valNum) {
////
////    var result = (valNum * 25.400).toFixed(4);
////
////    document.getElementById("outputText").value = result;
////    
////}
//
//function itmLengthConverter() {
//
//    
//    var num = document.getElementById("input1").value;
//    
//    var result = (num *  25.4).toFixed(4);
//
//    document.getElementById("outputText").value = result;
//    
//}
////
////function mtiLengthConverter(valNum) {
////
////    var result = (valNum / 25.400).toFixed(4);
////
////    document.getElementById("outputText").value = result;
////    
////}
//
//function mtiLengthConverter() {
//
//    
//    var num = document.getElementById("input1").value;
//    var result = (num / 25.4).toFixed(9);
//
//    document.getElementById("outputText").value = result;
//    
//}
//
////function ftiLengthConverter(valNum) {
////
////    var result = (valNum * 12).toFixed(4);
////
////    document.getElementById("outputText").value = result;
////    
////}
//
////function ftiLengthConverter(valNum) {
////    
////
////    var result = (valNum / 12).toFixed(4);
////
////    document.getElementById("outputText").value = result;
////    
////}
//
//function ftiLengthConverter() {
//    
//    
//    var num = document.getElementById("input1").value;
//    var result = (num * 12).toFixed(4);
//
//    document.getElementById("outputText").value = result;
//    
//}
//
//function itfLengthConverter() {
//    
//    
//    var num = document.getElementById("input1").value;
//    var result = (num / 12).toFixed(4);
//
//    document.getElementById("outputText").value = result;
//    
//}
//
//function ytfLengthConverter() {
//    
//    
//    var num = document.getElementById("input1").value;
//    var result = (num * 3).toFixed(4);
//
//    document.getElementById("outputText").value = result;
//    
//}
//function ftyLengthConverter() {
//    
//    
//    var num = document.getElementById("input1").value;
//    var result = (num / 3).toFixed(4);
//
//    document.getElementById("outputText").value = result;
//    
//}
//
//function mtkLengthConverter() {
//    
//    
//    var num = document.getElementById("input1").value;
//    
//    var result = (num / 0.62137).toFixed(8);
//
//    document.getElementById("outputText").value = result;
//    
//}
//
//function ktmLengthConverter() {
//    
//    
//    var num = document.getElementById("input1").value;
//    
//    var result = (num * 0.62137).toFixed(8);
//
//    document.getElementById("outputText").value = result;
//    
//}



 

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


// choice Animations 
$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
              callback();
            }
        });
        return this;
    }
});


$( "#ruler" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  
    $('#ruler').addClass('animated ' + 'bounce').one(animationEnd, function() {
            $('#ruler').removeClass('animated ' + 'bounce');
         
           
        });
    
  });

$( "#bottle" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#bottle').addClass('animated ' + 'swing').one(animationEnd, function() {
            $('#bottle').removeClass('animated ' + 'swing');
           
        });
  });


//choice animations end

$("#ruler").click(function() {

    
    $('#liquid').hide();
    $('#length').fadeIn();
    $('#cll1').fadeIn();
    $('#cll2').hide();
    
    
   
    
});

$("#bottle").click(function() {

       $('#length').hide();
    $('#liquid').fadeIn();
    $('#cll1').hide();
    $('#cll2').fadeIn();
    
});


//Choice Sequence

$


// Choice Sequence End


$( "#m-star-purple" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#m-star-purple').addClass('animated ' + 'flip').one(animationEnd, function() {
            $('#m-star-purple').removeClass('animated ' + 'flip');
           
        });
  });

$( "#m-star-red" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#m-star-red').addClass('animated ' + 'flip').one(animationEnd, function() {
            $('#m-star-red').removeClass('animated ' + 'flip');
           
        });
  });

$( "#m-star-green" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#m-star-green').addClass('animated ' + 'flip').one(animationEnd, function() {
            $('#m-star-green').removeClass('animated ' + 'flip');
           
        });
  });

$( "#m-star-blue" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#m-star-blue').addClass('animated ' + 'flip').one(animationEnd, function() {
            $('#m-star-blue').removeClass('animated ' + 'flip');
           
        });
  });

$( "#m-star-black" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#m-star-black').addClass('animated ' + 'flip').one(animationEnd, function() {
            $('#m-star-black').removeClass('animated ' + 'flip');
           
        });
  });

$( "#m-star-white" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#m-star-white').addClass('animated ' + 'pulse').one(animationEnd, function() {
            $('#m-star-white').removeClass('animated ' + 'pulse');
           
        });
  });


$( "#fshare1" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#fshare1').addClass('animated ' + 'flipInY').one(animationEnd, function() {
            $('#fshare1').removeClass('animated ' + 'flipInY');
           
        });
  });


$( "#fshare2" )
  .mouseenter(function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#fshare2').addClass('animated ' + 'flipInY').one(animationEnd, function() {
            $('#fshare2').removeClass('animated ' + 'flipInY');
           
        });
  });