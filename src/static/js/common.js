
var burger = document.querySelector('.burger');
var toggleMenu = document.querySelector('.main-nav__list');
burger.addEventListener('click', function(){
    toggleMenu.classList.toggle('active');
});

$( "#polzunok" ).slider({
    animate: "slow",
    range: "min",
    value: 50
});

$('.js-range__text_min').click(function(){
    $("#polzunok" ).slider( "value", 0 );
});
$('.js-range__text_left').click(function(){
    $("#polzunok" ).slider( "value", 25 );
});
$('.js-range__text_center').click(function(){
    $("#polzunok" ).slider( "value", 50 );
});
$('.js-range__text_max').click(function(){
    $("#polzunok" ).slider( "value", 100 );
});

$('#datep').datepicker();
$('#datep').datepicker($.datepicker.regional["ru"]);

$(function() {
   $(".main-nav__list a").click(function(e){
       e.preventDefault();
       var currentBlock = $(this).attr("href");
       currentBlockoffset = $(currentBlock).offset().top;
       $("html, body").animate({
           scrollTop: currentBlockoffset - 100
       }, 500);
   });
});

var div = $("#about-self");
var offset = div.offset();
console.log(offset.top);

$(window).scroll(function(){
   if ( $(window).scrollTop() >= 0 ){
       $('.main-nav__list a').removeClass('active');
       $('.link-about').addClass('active');
   }
   if ( $(window).scrollTop() >= 800 ){
       $('.main-nav__list a').removeClass('active');
       $('.link-skill').addClass('active');
   }
   if ( $(window).scrollTop() >= 1300 ){
       $('.main-nav__list a').removeClass('active');
       $('.link-js').addClass('active');
   }
   if ( $(window).scrollTop() >= 1600 ){
       $('.main-nav__list a').removeClass('active');
       $('.link-self').addClass('active');
   }
});
