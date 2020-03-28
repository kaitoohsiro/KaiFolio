(function($) {
    $(function () {
    $('#nav-toggle').stop().on('click', function() {
        $('body').toggleClass('open');
    });
    });
})(jQuery);
