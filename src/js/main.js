$( document ).ready(function() {
    $(".navbar-toggler").on("click", function () {
        $(this).toggleClass("active");
    });
    $.each($('.navbar-nav').find('li'), function() {
        $(this).toggleClass('active',
            window.location.pathname.indexOf($(this).find('a').attr('href')) > -1);
    });
});