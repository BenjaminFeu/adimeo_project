function log(...data) {
    console.log(...data);
}
(function($) {
//    $(document).ready(function() {
////        console.log("test");
//        $('.view-liste-des-avis .views-row a').hide();
//    });
    $('h3').on('click', e => {
        console.log("click");
//        let target = $(e.target);
//        target.siblings().toggle(1000);
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


