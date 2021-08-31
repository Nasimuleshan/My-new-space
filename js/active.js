$(document).ready(function(){
	
	
jQuery('.body').meanmenu({
	
	meanScreenWidth: "1100",
	meanMenuContainer: 'body'
	
	
});
	$(' .big-slider') .owlCarousel({
    loop:true,
   margin:10,
    nav:true,
	navText: ['<i class="icofont-curved-left"></i>','<i class="icofont-curved-right"></i>'], 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
var owl = $('.small-slider');
owl.owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },            
        960:{
            items:2
        },
        1200:{
            items:2
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
     if(e.deltaY>0) {
        owl.trigger('next.owl');
    } 
	else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
	
	
})


