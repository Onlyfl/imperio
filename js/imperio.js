	
	$(document).ready(function () {
	 $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });
	});	 				

	
$(document).on('click','.full_form', function() {
		   $('.full_form').addClass('active');
		    $('.short_form').removeClass('active');
			 $('.form_block_full').fadeIn('1000');

    });
	
	$(document).on('click','.short_form', function() {
		   $('.short_form').addClass('active');
		    $('.full_form').removeClass('active');
			 $('.form_block_full').fadeOut('1000');

    });

$(document).on('click','.deactive_favorites', function() {
			 $('.active_favorites').show();
			 $('.popup_favorites').show();
			  $('.deactive_favorites').hide();

    });
$(document).on('click','.active_favorites', function() {
			 $('.deactive_favorites').show();
			  $('.active_favorites').hide();

    });
	
	$(document).on('click','.popup_favorites_close', function() {
			  $('.popup_favorites').hide();

    });
	
	$(document).on('click','.catalog_history_header_block', function() {
			 $('.catalog_history_main').show();
			  $('.catalog_history_button').show();

    });
	
	$(document).on('click','.catalog_history_button', function() {
			 $('.catalog_history_main').hide();
			  $('.catalog_history_button').hide();


    });
	
	
	
	
	



	
	
	

	
	