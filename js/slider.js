$(function(){
    let isMobile = window.matchMedia("only screen and (max-width: 1023px)").matches;
    if(isMobile){
    const $slider = $('.articles-container');
    const $size = document.body.clientWidth;
    let $counter = -3.5;
    const prevBT = $("#prevBT");
    const nextBT = $("#nextBT");
    $slider[0].style.transform = 'translateX(' + (-$size*$counter) +'px)';

    
    let touchstartX = 0
    let touchendX = 0
        
    function checkDirection() {
    if (touchendX < touchstartX) return 'left';
    if (touchendX > touchstartX) return 'right';
    }

    $slider.on('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX
      })

    $slider.on('touchend', e => {
        touchendX = e.changedTouches[0].screenX
          if(checkDirection()==='left')
          { if($counter>3.5) return;
            $slider[0].style.transition ='transform 0.4s ease-in-out';
            $counter++;
            $slider[0].style.transform = 'translateX(' + (-$size*$counter) +'px)';
          }
          if(checkDirection()==='right'){
            if($counter>3.5) return;
            $slider[0].style.transition ='transform 0.4s ease-in-out';
            $counter--;
            $slider[0].style.transform = 'translateX(' + (-$size*$counter) +'px)';
          }
    })





    $slider.on("transitionend",function (e) { 
        if($counter===-4.5)
        {
            $slider[0].style.transition ='none';
            $counter=3.5;
            $slider[0].style.transform = 'translateX(' + (-$size*$counter) +'px)';
        }    
        if($counter===4.5)
        {
            
                $slider[0].style.transition ='none';
                $counter=-3.5;
                $slider[0].style.transform = 'translateX(' + (-$size*$counter) +'px)';
            
        }
    });
}
})
