// ! Selectors
$("*")                      // all elements
$("p.demo")                 // <p> elements with class="intro"
$("p:first")                // the first <p> element
$("p span")                 // span, descendant of p
$("p > span")               // span, direct child of p
$("ul li:first")            // the first <li> element of the first <ul>
$("ul li:first-child")      // the first <li> element of every <ul>
$("ul li:nth-child(1)")     // one child
$("input[type='text']")     // <input> elements with a type "text" attribute
$("a[target!='_blank']")    // <a> elements with a target attribute value other than "_blank"
$("p:even")                // even <p> elements
$("p:odd")                 // odd <p> elements



  //  Document Ready
$(document).ready(function(){
 console.log(`Document Ready`)
 });
 $(function(){
    // Short Document Ready
 });
 $(".demo").click(function() {                
     console.log($(this));  // this return of .demo
 });

 //Hide / Show
$("#demo").hide(100,callbackFunction);    // sets to display: none
$("#demo").show(100,callbackFunction);  // shows hidden elemnt with animation (speed)
$("#demo").toggle(100,callbackFunction);   // toggle between show and hide


//fadeIn, fadeOut, fadeToggle, fadeTo
$("#demo").fadeIn(100,callbackFunction);               // fade in a hidden element
$("#demo").fadeOut(100,callbackFunction);        // fade out
$("#demo").fadeToggle(100,callbackFunction);    // toggle between fadeIn and hadeOut
$("#demo").fadeTo(100,callbackFunction);    // fades to 0.25 opacity
//slideDown, slideUp, slideToggle
$("#demo").slideDown(100,callbackFunction);
$("#demo").slideUp(100,callbackFunction);
$("#demo").slideToggle(100,callbackFunction);
Animate
$(selector).animate({property:'value'},speed,callbackFunction);


$("#demo").text();                  // returns text content
$("#demo").html();                  // returns content, including HTML markup
$("input").val();                   // returns field value

$("#link").attr("href");                    // get an attribute
$("#link").attr("href",'https://htmlg.com'); // set attribute


$("#demo").remove();            // removes the selected element
$("#demo").empty();             // empty the selected element


$("#demo").css("background-color");     // get CSS value
$("#demo").css("color", "blue");        // sets CSS rule
$("#demo").css({"color": "blue", "font-size": "20px"}); //


//Traversing
$("#demo").parent();                // accessing direct parent
$("span").parent().hide();          // changing parent color
$("#demo").parents();               // all ancestors of the element
$("#demo").parentsUntil("#demo2");  // all ancestors between two - demo is inside demo2
$("#demo").children();              // all direct children
$("#demo").children(".first");      // all direct children having a specified class
$("#demo").find("span");            // all span elements inside #demo
$("#demo").find("*");               // all descendants
$("#demo").siblings("span");        // span siblings of #demo
$("#demo").next();                  // the next sibling
$("p").nextAll();                   // all next siblings
$("#demo").nextUntil("#demo2");     // siblings between two arguments
$("#demo").prev();                  // the previous sibling
$("p").prevAll();                   // all previous siblings
$("#demo").prevUntil("#demo2");     // previous siblings between two arguments
//Filtering
$("span strong").first();   // first strong in first span
$("span strong").last();    // last strong in last span
$("div").eq(9);             // element with a specific index
$("div").filter(".big");    // all div elements with .big class
$("div").not(".big");      



$( "li" ).eq( 2 ).css( "background-color", "red" );
$( "li" ).filter( ":nth-child(2n)" ).css( "background-color", "red" );


$( "#other" ).scroll(function() {
     $(selector).scrollTop();
   });

           // event
          //-keyup
         //-keypress
        //-keydown
       //-dblclick
      //-click
     

 $( "#other" ).click(function() {
     console.log( $('#other').index(this) );
});

$( "li" ).hover(
     function() {
       $( this ).append( $( "<span> ***</span>" ) );
     }, function() {
       $( this ).find( "span" ).last().remove();
     }
   );

   $("input").val();
   $("input[type='checkbox']:checked").val();
   $("#radio_1").attr('checked', true);
   $("#radio_1").attr('checked', true);
   $('input[type=checkbox])').attr('checked', 'checked');
   $('#rd_male').prop('checked', true);
   $('.checkbox').click(function() {
     if ($(this).is(':checked')) {
       // Do stuff
     }
   });
   $(".checkbox").change(function() {
     if(this.checked) {
         //Do stuff
     }
 });
 $(document).on('change', '.checkbox', function() {
     if(this.checked) {
       // checkbox is checked
     }
 });

 $(document).ready(function() {
     $('#checkbox').val($(this).is(':checked'));
   
     $('#checkbox1').change(function() {
       $('#checkbox1').val($(this).is(':checked'));
     });
   
     $('#checkbox1').click(function() {
       if (!$(this).is(':checked')) {
         console.log("Are you sure?");
       }
     });
   });


   $(document).ready(function(){
     $('input[type="checkbox"]').click(function(){
         if($(this).prop("checked") == true){
             console.log("Checkbox is checked.");
         }
         else if($(this).prop("checked") == false){
             console.log("Checkbox is unchecked.");
         }
     });
 });
 $(selector).removeClass('nameClass')
  $(selector).addClass('nameClass')
    $('div.chapter a').attr({rel: 'external',title: 'Learn more at Wikipedia'});