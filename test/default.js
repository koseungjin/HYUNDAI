
var indexOut = 0;

$(function() {  
    
    // 윈도우 / 목록 / 인덱스
    var $window = $(window),
        $list = $('.list'),
        $clickItem,
        $indexOfSelected = $('.index-of-selected'),
        
        testIndex = 0;
    
    $list.find('li').trigger('click');
    
    $window.on({
        load : showIndex
    });  

    $list.find('li').on('click', 'a', function(event) {
        event.preventDefault();
        
        $clickItem = $(this).parent('li'); 
        $clickItem.addClass('on')
            .siblings().removeClass('on');
        
        showIndex($clickItem.index());
    });
    
    function showIndex(index) {
        
            
            testIndex = index; 
            indexOut = index;
        
            $indexOfSelected.text(testIndex);
            console.log(indexOut);
    }  
});