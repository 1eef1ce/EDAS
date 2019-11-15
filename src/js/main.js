$( document ).ready(function() {

    new WOW().init();

    $(".navbar-toggler").on("click", function () {
        $(this).toggleClass("active");
    });

    $.each($('.navbar-nav').find('li'), function() {
        $(this).toggleClass('active',
            window.location.pathname.indexOf($(this).find('a').attr('href')) > -1);
    });

    $('.link-vertical').click(function(e) {
        e.preventDefault();
        $(this).next('.list-hidden').show();
    })

});