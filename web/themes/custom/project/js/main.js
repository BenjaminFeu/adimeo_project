
(function($) {
    $(document).ready(function() {
//        console.log("test");
        $('.view-liste-avis .views-row a').hide();
    });
    $('h3').on('click', e => {
        let reveal = $('.view-liste-avis .views-row a');
        console.log("click");
//        let target = $(e.target);
        reveal.toggle(1000);
        let view = $('div.field-content a');
        console.log(view);
        for (let i = 0; i < view.length; i++) {
            console.log(view.length);
//            let test = view[i];
//            test.toggle(1000);
//            console.log(target[i]);
//            let count = view + i;
//            console.log(count);
//            count.toggle(1000);
//            $(target[i]).on('click', e => {
//                view[i].toggle(1000);
//            });

        }

    });

})(jQuery);
//console.log('bonjour');


