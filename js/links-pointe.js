$(function(){
    const $links = $(".link");
    const $pointer = $(".pointer");
    $links.hover(function () {
                var myindex =  $(this).index();
                if(myindex>1){
                var top = 20+(myindex-1)*35.2;
                $pointer[0].style.setProperty("top", +top+"px");
                }
                else{
                    $pointer[0].style.setProperty("top","20px");
                }
        },
    );


})