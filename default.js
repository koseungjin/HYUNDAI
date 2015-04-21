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

jQuery(function($){
    /*메인 메뉴*/
    var $mainGnb = $(".main_gnb ul>li>a");
    $mainGnb.on("click", function(){
        $(this).addClass("active")
            .parent("li").siblings().children("a")
                .removeClass("active");
    });
    /*콘텐츠 메뉴*/
    $('#content_lnb').on('click', 'li a', function(){
        var $this = $(this);
        $($this.attr('href'))
                .addClass('active')
            .siblings()
                .removeClass('active'); 
    });
});