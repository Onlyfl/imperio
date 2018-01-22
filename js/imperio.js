
$(document).on("ready", function() {
	 $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });
	});	 
	
	$(window).on("load", function() {
	
	$('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "right_grip_selector": ".rightGrip",
    "value_bar_selector": ".bar",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        $(this).parent().find('.leftLabel').text(leftValue);
        $(this).parent().find('.rightLabel').text(rightValue);
		}
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
	
	$(document).on('mouseenter','.popup_favorites', function() {
			  $('.popup_favorites_full').show();

    });
	$(document).on('mouseleave','.popup_favorites_full', function() {
			  $('.popup_favorites_full').hide();

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
	
	$(document).on('click','.comparison_table_item .item_check', function() {
			$(this).toggleClass('checked');
			
    });
	
	$(document).on('click','.catalog_products_item .item_close', function() {
			$(this).parent().parent().hide();
			
    });
	
	$(document).on('click','.catalog_products_item_block .img_wrapp', function() {
		$('.closfon2').show();
			$('.popup_catalog').addClass('opened');
			
    });
	
	$(document).on('click','.popup_catalog_close .item_close', function() {
			$(this).parent().parent().removeClass('opened');
			$('.closfon2').hide();
			
    });
	$(document).on('click','.closfon2', function() {
			$('.popup_catalog').removeClass('opened');
			$('.closfon2').hide();
			
    });
	
	$(document).on('click','.privacy_close', function() {
			 $('.privacy').hide();		

    });
	
	$(document).on('click','.form_selected_item .item_close_hidden', function() {
			$(this).parent().next().show();
			
    });
	$(document).on('click','.form_selected_item .item_close_reverse', function() {
			$(this).parent().hide();
			
    });
	
	$(document).on('click','.additional_information', function() {
			$('.additional_information').addClass('opened');
			 $('.additional_information_main_wrapp').show();
			  $('.form_main_short_form_wrapp2').show();
			 $('.close_inf').show();

				

    });
	$(document).on('click','.close_inf', function() {
			$('.additional_information').removeClass('opened');
			 $('.additional_information_main_wrapp').hide();
				$(this).hide();			 

    });
	
	$(document).on('click','.closfon', function() {

        $('.wrapper_filter').fadeOut('slow');

    });
	
	$(document).on('click','.header_subscribe', function() {

        $('#form1').fadeIn('slow');

    });
	
	$(document).on('click','.favorites_subscribe', function() {

        $('#form2').fadeIn('slow');

    });
	
	$(document).on('click','.form-group_dd', function() {
			$(this).toggleClass('opened');
			$(this).next().toggleClass('opened');
			
    });
	
	
	
	



	
	
	

	
	