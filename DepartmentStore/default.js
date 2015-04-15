var viewporinfo = document.querySelector('.body > p');
var viewportwidth;
var viewportheight;

function showWindowSize() {
    if (typeof window.innerWidth != 'undefined')
    {
         viewportwidth = window.innerWidth,
         viewportheight = window.innerHeight;
    }

    viewporinfo.innerHTML = viewportwidth + ' * ' + viewportheight;
}

//jQuery.noConflict();
//jQuery(function($){
//
//    var $doc = $(document), $win = $(window);
//
//    var viewporinfo = $doc.querySelector('.body > p'),
//        viewportwidth,
//        viewportheight;
//
//    function showWindowSize() {
//        if (typeof $win.innerWidth != 'undefined')
//        {
//            viewportwidth = $win.innerWidth,
//                viewportheight = $win.innerHeight;
//        }
//
//        viewporinfo.innerHTML = viewportwidth + ' * ' + viewportheight;
//    }
//});

jQuery(function($){
    var $mainGnb = $(".main_gnb ul>li>a");
    $mainGnb.on("click", function(){
        $(this).addClass("active")
            .parent("li").siblings().children("a")
                .removeClass("active");
    });
});