		$(document).ready(function()
			{
			
			idCheck();
			
// 					Label padding control

					var perfectPadding = $('.label').width() - $('#label').width();
					$('.label').animate({'padding-left': perfectPadding, opacity:1}, 300);


			
// 					Control Buttons
					
		 var pos = 0;
				$('#left').on('click', function()
					{
					var move = $('.active').width()+10;
					
					var index = $('.active').index();

					


					pos = pos + move;
							
						if (pos < 95) {
							$('.preview-Box').eq(index).removeClass('active');
							index = index -  1;
							$('.preview-Box').eq(index).addClass('active');
							$('.band').animate({left:pos}, 500);
							
						}
						else {
							pos=0;
							
						

							}
						
							
					
						labelChange();
						thumblCut();
						idCheck();
								
						
					});

					
				$('#right').on('click', function()
					{
					
			
					var move = $('.active').width() + 10;
					
					var index = $('.active').index();

						
						
						if (pos < -1455) {
			
							pos=0;					
							$('.preview-Box').removeClass('active');
							$('.preview-Box').eq(0).addClass('active');			
							$('.band').animate({left:pos}, 500);
								
							
								labelChange();
								thumblCut();
							}
						
						else{
							pos = pos - move;
							$('.preview-Box').eq(index).removeClass('active');
							index = index + 1 ;
							$('.preview-Box').eq(index).addClass('active');
							$('.band').animate({left:pos}, 500);
							
								
								labelChange();
								thumblCut();
							}
							
								idCheck();

					});
					
					
					
// 					Menu Buttons

				$('.menu-Button').on('click', function()
					{
						$('.menu-Button').css('color', '#d3d3d3');
						$(this).css('color', 'red');
						
						var anchor = '#' + $(this).attr('name');
						var anchorPos = - $(anchor).position().left;

						pos = anchorPos;


						labelChange();
						 
						
						$('.preview-Box').removeClass('active');
						$(anchor).addClass('active');
						
						thumblCut();
							
						$('.band').animate({left:anchorPos}, 1000);
							
					});
					
					
// 					Main Image
				
				$('.preview-Box').on('click', function()
					{
						var active = $(this);
						$('.preview-Box').removeClass('active');
						active.addClass('active');
						
						
						labelChange();
						thumblCut();
						idCheck();
								
					});
					
// 					Url correction
				
				function thumblCut(){
					var src = $('.preview-Box.active img').attr('src');
						src = src.replace('thumb_', '');
						$('.img-Box').css('opacity', 0.5);
						$('.img-Box').animate({opacity:1}, 800);
						$('.img-Box').css('background-image', 'url(' + src + ')');
						}
						
				function labelChange(){
					var data = $('.preview-Box.active').attr('data');
						$('#label').css('opacity', 0.7);
						$('#label').animate({opacity:1},600);
						$('#label').text(data);
						
	
// 						var perfectPadding = $('.label').width() - $('#label').width();
// 						$('.label').animate({'padding-left': perfectPadding, opacity:1}, 300);
							}
							
							
				function idCheck() {
						var id = $('.active').attr('id');
							if (id.length == 0){}
							else{
								$('.menu-Button').css('color', '#d3d3d3');
								$('.menu-Button[name=' + id+']').css('color', 'red');
								}
							
						}
		});