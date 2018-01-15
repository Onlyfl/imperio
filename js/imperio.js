
	$(document).ready(function () {
	 $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });
	});	 				


	$(document).on('click','.navbar-toggle', function() {
		  $('.navbar-toggle').addClass('navbar-toggle_opened');
		   $('.header_nav').toggle('slow');
    });
	
	$(document).on('click','.navbar-toggle_opened', function() {
		   $('.navbar-toggle').removeClass('navbar-toggle_opened');
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
	
	
	
	$(document).on('click','.second_table_tab', function() {
		   $('.second_table_tab').addClass('active');
		    $('.first_table_tab').removeClass('active');
			 $('.catalog_prices_table_second').fadeIn('1000');
			  $('.catalog_prices_table').fadeOut('1000');

    });
	
	
	$(document).on('click','.first_table_tab', function() {
		   $('.first_table_tab').addClass('active');
		    $('.second_table_tab').removeClass('active');
			 $('.catalog_prices_table_second').fadeOut('1000');
			  $('.catalog_prices_table').fadeIn('1000');

    });
	
	
	
	

$(document).on('click','.deactive_favorites', function() {
			$(this).next().show();
			$(this).parent().css({"display": "inline-block"});
			 $('.popup_favorites').show();
			  $(this).hide();

    });
$(document).on('click','.active_favorites', function() {
			$(this).prev().show();
			$(this).hide();
			$(this).parent().css({"display": ""});
			

    });
	
	$(document).on('click','.popup_favorites_close', function() {
			  $('.popup_favorites').hide();

    });
	
	$(document).on('click','.catalog_history_header_block_button', function() {
			 $('.catalog_history_main').show();
			  $('.catalog_history_button').show();

    });
	
	$(document).on('click','.catalog_history_button', function() {
			 $('.catalog_history_main').hide();
			$('.catalog_history_button').hide();


    });
	
	$(document).on('click','.catalog_products_item .item_check', function() {
			$(this).toggleClass('checked');
			
    });
	
	$(document).on('click','.catalog_products_item .item_close', function() {
			$(this).parent().parent().hide();
			
    });
	
	$(document).on('click','.privacy_close', function() {
			 $('.privacy').hide();
		


    });
	
	
	
	
	



	
	
	

	
	