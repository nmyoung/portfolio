$(document).ready(function(){

//Flickity

$('.project-slider').flickity({
	cellAlign: 'center',
	contain: true,
	imagesLoaded: true,
	lazyLoad: true,
	wrapAround: true,
  draggable: false,
})

var carouselContainers = document.querySelectorAll('.project-container');

for ( var i=0; i < carouselContainers.length; i++ ) {
  var container = carouselContainers[i];
  initCarouselContainer( container );
}

function initCarouselContainer( container ) {
  var carousel = container.querySelector('.project-slider');
  var flkty = new Flickity( carousel );
  var carouselStatus = container.querySelector('.carousel-status');

  function updateStatus() {
    var slideNumber = flkty.selectedIndex + 1;
    carouselStatus.textContent = slideNumber + ' of ' + flkty.slides.length;
  }
  updateStatus();

  flkty.on( 'select', updateStatus );
  
}



//Videos

var $gallery = $('.project-slider').flickity();

  function onLoadeddata( event ) {
    var cell = $gallery.flickity( 'getParentCell', event.target );
    $gallery.flickity( 'cellSizeChange', cell && cell.element );
  }
  
  $gallery.find('video').each( function( i, video ) {
    video.play();
    $( video ).on( 'loadeddata', onLoadeddata );
  });



//Project Description//

var container = $('.project-description');
  
  container.each(function(){
    var open = $(this).find('.open');
    var close = $(this).find('.close');
    var full = $(this).find('.full');

    open.click(function() {
       full.removeClass('hidden');
       $(this).css('display', 'none');
    })

    close.click(function() {
       full.addClass('hidden');
       open.css('display', 'inline-block');
    })
  
  })
  


//Navigation//

$('.select h4').click(function() {
    $('html, body').animate({
        scrollTop: $('.background').offset().top+50
    }, 1300);
});

$('.top-arrow').click(function() {
    $('html, body').animate({
        scrollTop: $('.site').offset().top
    }, 1300);
});

$('.branding').click(function() {
    $('html, body').animate({
        scrollTop: $('#silica').offset().top-40
    }, 1300);
});

$('.web').click(function() {
    $('html, body').animate({
        scrollTop: $('#bnw').offset().top-40
    }, 1800);
});

$('.editorial').click(function() {
    $('html, body').animate({
        scrollTop: $('#court-vision').offset().top-40
    }, 2500);
});



//Scroll Fade//
$(window).scroll(function(){
    $('.site-header').css("opacity", 1 - $(window).scrollTop() / 500);
  });



//Menu//

var senseSpeed = 0;
var previousScroll = 0;
var bg = $('.background').offset().top;
  $(document).scroll(function() {
      var scroller = $(this).scrollTop();
      if (scroller-senseSpeed < previousScroll){
        $('.nav-bar').css('opacity', '1', 'transform', 'translateY(100px');
      } else if (scroller+senseSpeed > previousScroll) {
        $('.nav-bar').css('opacity', '0', 'transform', 'translateY(-100px)');
      }
        previousScroll = scroller;
      
      if($(document).scrollTop() < bg) {
        $('.nav-bar').css('opacity', '0', 'transform', 'translateY(-100px)');
    }
});


});