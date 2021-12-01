


<script type="text/javascript">
$(document).ready(function() {
 $(".slider").each(function () { // обрабатываем каждый слайдер
  var obj = $(this);
  $(obj).append("<div class='nav'></div>");
  $(obj).find("li").each(function () {
   $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
   $(this).addClass("slider"+$(this).index());
  });
  $(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
 });
});
function sliderJS (obj, sl) { // slider function
 var ul = $(sl).find("ul"); // находим блок
 var bl = $(sl).find("li.slider"+obj); // находим любой из элементов блока
 var step = $(bl).width(); // ширина объекта
 $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
}
$(document).on("click", ".slider .nav span", function() { // slider click navigate
 var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
 $(sl).find("span").removeClass("on"); // убираем активный элемент
 $(this).addClass("on"); // делаем активным текущий
 var obj = $(this).attr("rel"); // узнаем его номер
 sliderJS(obj, sl); // слайдим
 return false;
});
</script>


"use strict"

let type = prompt("Какой сайт вам нужен? 1.Сайт-визитка 2.Корпоративный 3.Интернет-магазин");
let style = prompt("Дизайн? 1.Новый 2.Ретро 3.Индивидуальный");
let adaptivity = prompt("Адаптивность? 1.Телефон 2.Компьютер 3.Два в одном");

let finishCash;
let finishDate;


let calculate={
    
    cash:[
        [3000, 5500, 10000],
        [2500, 3000, 4500],
        [3000, 2500, 6500],
    ],
    date: [
        [3, 5, 10],
        [4, 4, 5],
        [4, 4, 5],  
    ]
    
};
/*-------------------------------------------------*/
if( type == 1 && style == 1 && adaptivity == 1){
    finishCash = calculate.cash[0][0] + calculate.cash[1][0] + calculate.cash[2][0];
    finishDate = calculate.date[0][0] + calculate.date[1][0] + calculate.date[2][0];
}
if( type == 1 && style == 2 && adaptivity == 1){
    finishCash = calculate.cash[0][0] + calculate.cash[1][1] + calculate.cash[2][0];
    finishDate = calculate.date[0][0] + calculate.date[1][1] + calculate.date[2][0];
}
if( type == 1 && style == 3 && adaptivity == 1){
    finishCash = calculate.cash[0][0] + calculate.cash[1][2] + calculate.cash[2][0];
    finishDate = calculate.date[0][0] + calculate.date[1][2] + calculate.date[2][0];
}
/*-------------------------------------------------*/
if( type == 2 && style == 1 && adaptivity == 1){
    finishCash = calculate.cash[0][1] + calculate.cash[1][0] + calculate.cash[2][0];
    finishDate = calculate.date[0][1] + calculate.date[1][0] + calculate.date[2][0];
}
if( type == 3 && style == 1 && adaptivity == 1){
    finishCash = calculate.cash[0][2] + calculate.cash[1][2] + calculate.cash[2][0];
    finishDate = calculate.date[0][2] + calculate.date[1][0] + calculate.date[2][0];
}
/*-------------------------------------------------*/
if( type == 1 && style == 1 && adaptivity == 2){
    finishCash = calculate.cash[0][0] + calculate.cash[1][0] + calculate.cash[2][1];
    finishDate = calculate.date[0][0] + calculate.date[1][0] + calculate.date[2][1];
}
if( type == 1 && style == 1 && adaptivity == 3){
    finishCash = calculate.cash[0][0] + calculate.cash[1][2] + calculate.cash[2][2];
    finishDate = calculate.date[0][0] + calculate.date[1][2] + calculate.date[2][2];
}
/*-------------------------------------------------*/
if( type == 2 && style == 2 && adaptivity == 2){
    finishCash = calculate.cash[0][1] + calculate.cash[1][1] + calculate.cash[2][1];
    finishDate = calculate.date[0][1] + calculate.date[1][1] + calculate.date[2][1];
}
if( type == 3 && style == 3 && adaptivity == 3){
    finishCash = calculate.cash[0][2] + calculate.cash[1][2] + calculate.cash[2][2];
    finishDate = calculate.date[0][2] + calculate.date[1][2] + calculate.date[2][2];
}
/*-------------------------------------------------*/
if( type == 2 && style == 1 && adaptivity == 2){
    finishCash = calculate.cash[0][1] + calculate.cash[1][0] + calculate.cash[2][1];
    finishDate = calculate.date[0][1] + calculate.date[1][0] + calculate.date[2][1];
}
if( type == 3 && style == 1 && adaptivity == 3){
    finishCash = calculate.cash[0][2] + calculate.cash[1][0] + calculate.cash[2][2];
    finishDate = calculate.date[0][2] + calculate.date[1][0] + calculate.date[2][2];
}
/*-------------------------------------------------*/
if( type == 2 && style == 2 && adaptivity == 1){
    finishCash = calculate.cash[0][1] + calculate.cash[1][1] + calculate.cash[2][0];
    finishDate = calculate.date[0][1] + calculate.date[1][1] + calculate.date[2][0];
}
if( type == 3 && style == 3 && adaptivity == 1){
    finishCash = calculate.cash[0][2] + calculate.cash[1][2] + calculate.cash[2][0];
    finishDate = calculate.date[0][2] + calculate.date[1][2] + calculate.date[2][0];
}
/*-------------------------------------------------*/
if( type == 1 && style == 2 && adaptivity == 3){
    finishCash = calculate.cash[0][0] + calculate.cash[1][1] + calculate.cash[2][2];
    finishDate = calculate.date[0][0] + calculate.date[1][1] + calculate.date[2][2];
}
if( type == 3 && style == 2 && adaptivity == 1){
    finishCash = calculate.cash[0][2] + calculate.cash[1][1] + calculate.cash[2][0];
    finishDate = calculate.date[0][2] + calculate.date[1][1] + calculate.date[2][0];
}
/*-------------------------------------------------*/
if( type == 1 && style == 3 && adaptivity == 2){
    finishCash = calculate.cash[0][0] + calculate.cash[1][2] + calculate.cash[2][1];
    finishDate = calculate.date[0][0] + calculate.date[1][2] + calculate.date[2][1];
}
if( type == 3 && style == 1 && adaptivity == 2){
    finishCash = calculate.cash[0][2] + calculate.cash[1][0] + calculate.cash[2][1];
    finishDate = calculate.date[0][2] + calculate.date[1][0] + calculate.date[2][1];
}
/*-------------------------------------------------*/
if( type == 2 && style == 3 && adaptivity == 1){
    finishCash = calculate.cash[0][1] + calculate.cash[1][2] + calculate.cash[2][0];
    finishDate = calculate.date[0][1] + calculate.date[1][2] + calculate.date[2][0];
}
if( type == 2 && style == 1 && adaptivity == 3){
    finishCash = calculate.cash[0][1] + calculate.cash[1][0] + calculate.cash[2][2];
    finishDate = calculate.date[0][1] + calculate.date[1][0] + calculate.date[2][2];
}

alert("Стоимость " + finishCash + " рублей, сроки " + finishDate + " дней");




$(document).ready(function(){
    $('.benefits__number').spincrement({
        thousandSeparator: "",
        duration: 1200
    });
});

$(document).ready(function () {
 
    var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });
             
            show = false;
        }
    });
 
});
