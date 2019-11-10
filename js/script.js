// event pada saat link klik
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	e.preventDefault();


	// pindahkan scroll
	$('body, html').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo');


});



// parallax
// about
$(window).on('load', function() {
	$('.pkiri').addClass('pmuncul');
	$('.pkanan').addClass('pmuncul');
});


$(window).scroll(function() {
	var wscroll = $(this).scrollTop();

	// jumbotron
	$('.jumbotron img').css({
		'transform' :'translate(0px, '+ wscroll/4+'%)'
	});

	$('.jumbotron h1').css({
		'transform' :'translate(0px, '+ wscroll/2+'%)'
	});

	$('.jumbotron h3').css({
		'transform' :'translate(0px, '+ wscroll/1.2+'%)'
	});


	// portfolio
	if(wscroll > $('.portfolio').offset().top -250) {
		
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});


		//$('.portfolio .thumbnail').addClass('muncul');
	}



});



$(function(){
	$('#galery a').fancybox();
});



