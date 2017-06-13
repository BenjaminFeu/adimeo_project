(function($) {
    $(document).ready(function() {
//        console.log("test");
        $('.views-row').hide();
    });
    $('h3').on('click', e => {
        console.log("click");
//        let target = $(e.target);
//        target.siblings().toggle(1000);
        let view = $('.views-row');
        for (let i = 0; i < view.length; i++) {
            console.log("test");
//            view + i.toggle(1000);
        }
    });

})(jQuery);
//console.log('bonjour');


