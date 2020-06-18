$window.on('load', function () {
    $(':lang(cn)').hide();

    $('#lang-cn').click(function () {
        $(':lang(jp)').hide();
        $(':lang(cn)').show();
    });

    $('#lang-jp').click(function () {
        $(':lang(cn)').hide();
        $(':lang(jp)').show();
    });

    // window.setTimeout(function () {
    //     $body.removeClass('is-preload');
    // }, 100);
});
