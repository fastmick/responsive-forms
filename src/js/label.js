(function () {
    $("input").focus(function () {
        $(this).addClass('active-input');
        $(this).parent().prev().addClass('show-label');
        $(this).parent().prev().fadeIn();
        $(this).parent().prev().css('display', 'block');

    });

    $("input").blur(function () {
        var labelText = $(this).parent().prev().data("text");
        var labelTextOrign = $(this).parent().prev().data("text-orign");

        $(this).removeClass('active-input');

        if ($(this).val() == "") {
            $(this).parent().prev().removeClass('show-label');
            $(this).parent().prev().fadeOut(0);
            $(this).parent().prev().css('color', '#f00');
            $(this).parent().prev().html('<span>' + labelTextOrign + '</span>');
        } else {
            $(this).parent().prev().html('<span class="ok">' + labelText + '</span>');
            $(this).parent().prev().css('color', '#000');
        }
    });



    


})();