$(function() {  	
    
    /*현재 윈도우사이즈 실시간보기*/
    var $window = $(window),
        $viewportInfo = $('#body > p'),
        viewportWidth, viewportHeight;
    
    function showWindowSize() {
        if (typeof window.innerWidth != 'undefined' || 
            typeof window.innerHeight != 'undefined') {
            viewportWidth = window.innerWidth;
            viewportHeight = window.innerHeight;
        }  
        $viewportInfo.text(viewportWidth + ' x ' + viewportHeight);
    }

    $window.on({
        load : showWindowSize,
        resize : showWindowSize
    });
    
    var $toggleGnb = $('.toggle-lnb'),
        $gnb = $('.gnb'), $lnb = $('.lnb'),
        $wrap = $('.wrap'), $pageContainer = $('.pages-container');
    
    /*토글 서브메뉴*/
    $toggleGnb.on('click', function(event) {
        event.preventDefault();
        
        $lnb.toggleClass('on');
        
        if (viewportWidth >= 1025) {
            if ($lnb.hasClass('on')) {
                $wrap.css({
                    paddingRight: '200px'
                });
            }
            else {
                $wrap.css({
                    paddingRight: '0px'
                });
            }
        }
    });

    /*메인메뉴*/
    $gnb.find('li').on('click', 'a', function(event) {
        
        var $clickItem = $(this).parent('li');
        
        if (!$clickItem.hasClass('on')) {
            return;
        }
        else { 
            event.preventDefault();
            
            $clickItem.addClass('on')
                .siblings().removeClass('on');

            // 서브메뉴 활성화
            var $indexGnb = $clickItem.index();
            $lnb.find('ul').removeClass()
                .eq($indexGnb).addClass('on');

            // 서브메뉴 초기화
            $lnb.find('ul[class="on"] > li:first-child')
                .addClass('on')
                .siblings().removeClass('on');
        }

        updateSection(0);
        updatePageIndicator();
    });
    
    /*서브메뉴*/
    $lnb.find('li').on('click', 'a', function(event) {
        var $clickItem = $(this).parent('li');
        
        event.preventDefault();
        
        $clickItem.addClass('on')
            .siblings().removeClass('on');
        
        // 섹션(페이지) 활성화        
        updateSection($clickItem.index());
        updatePageIndicator();
    });
    
    /*섹션(페이지) 업데이트*/
    function updateSection(index) { 
        $pageContainer.find('section').removeClass()
            .eq(index).addClass('on');
    }

    /*페이지 인디케이터 업데이트*/
    var gbnText, lnbText;
    var $pageIndicator = $('.page-indicator');

    function updatePageIndicator() {
        gbnText = $gnb.find('li[class="on"] > a').text();
        lnbText = $lnb.find('ul[class="on"] > li[class="on"] > a').text();
        
        $pageIndicator.text(gbnText + ' > ' + lnbText);
    }
    
    /*폼 - 탭 콘트롤*/
    var $formTab = $('.form-tab');
    
    $formTab.find('.form-tab-menu > li').on('click', 'a', function(event) {
        event.preventDefault();
        
        var $clickItem = $(this).parent('li');
        $clickItem.addClass('on')
            .siblings().removeClass('on');

        var indexTab = $clickItem.index(),
            $formTab = $clickItem.parent().parent();
        $formTab.find('.form-tab-content > li').removeClass()
            .eq(indexTab).addClass('on');
    });
});




















