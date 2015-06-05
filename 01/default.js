var viewporInfo = document.querySelector('.body > p');
var viewportWidth;
var viewportHeight;

function showWindowSize() {
    if (typeof window.innerWidth != 'undefined')
    {
         viewportWidth = window.innerWidth,
         viewportHeight = window.innerHeight;
    }

    viewporInfo.innerHTML = viewportWidth + ' * ' + viewportHeight;
}

jQuery(function($){
    /*메인 메뉴*/
    var $mainGnb = $(".main_gnb ul>li>a");
    $mainGnb.on("click", function(event){
        $(this).addClass("active")
            .parent("li").siblings().children("a")
                .removeClass("active");
    });
    /*콘텐츠 메뉴*/
    $('#content_lnb').on('click', 'li a', function(event){
        var $this = $(this);
        $($this.attr('href'))
                .addClass('active')
            .siblings()
                .removeClass('active'); 
    });
    /*기본 동작 무시*/
    $('.content_lnb a').on('click', function(event){
        event.preventDefault();
    });
    /*미디어 그룹에 미디어 추가/삭제*/
    $('.form_unit > #add_media').on('click', function(event){
        console.log('add');
        var $test = $('.form_unit > #add_media').parent().clone();
        $test.appendTo('.mediagroup_list');
    });
    $('.form_unit > #remove_media').on('click', function(event){
        console.log('remove');
        $(this).parent().remove();
    });
});