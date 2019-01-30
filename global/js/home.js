// ----------------------------------------------------------------------
// -- COURSE SPECIFI JS:
// ----------------------------------------------------------------------
// -- NOTE: This is where you can add anything you need to do specifically to the course homepage, it will load lastly.
// -- ABOUT: THis file will over-ride everything else, if you need to customize
// -- AUTHOR: You - WDS
// ======================================================================
function createIndex(){
	//console.log(FLVS.Sitemap);

	for(var i=0; i<FLVS.Sitemap.module.length; i++){
		// Find the first link in the module
		var link = FLVS.Sitemap.module[i].lesson[0].page[0].href;
		link = link.replace("../../","");
		if(FLVS.Sitemap.module[i].indexpage == 'true') {
			// Create Link and add it to the page
			var a = $(document.createElement('a')).attr('href',link).attr('class','moduleLink');
			if(!FLVS.Sitemap.module[i].icon){FLVS.Sitemap.module[i].icon = "icon_homeTemp.png";}

			var img = $(document.createElement('img'));
			var span = $(document.createElement('span')).html(FLVS.Sitemap.module[i].title);
			$(a).append(img).append(span);


			$('.modules').append(a);
		}
		$('#modules').append('<div class="clear">&nbsp;</div>');}



	// FADE IN CONTENT and position the nav_menu
	$('body').css('visibility','visible').hide();
	$('body').fadeIn(800, function(){

		// Navigation Position
		var pos = $('#menu_inner').offset();
		$('#nav_menu1').css('left',pos.left+'px');

		// Position Popup Menu
		$(window).on('resize',function(){
			var pos = $('#menu_inner').offset();
			$('#nav_menu1').css('left',pos.left+'px');

		});
	});

// Create Popup Menu
	createMenu();

	// Event for Menu Button
	$('.menubtn, .menubtn_mobile').click(function(){
		$('.nav_menu_lessons1').hide();

		if(!$('#nav_menu1').is(':visible')){
			$('body').append('<div class="menu_backdrop">&nbsp;</div>');
			$('.menu_backdrop').click(function(){
				$('#nav_menu1').fadeToggle('fast');
				$(this).remove();
			});
		} else {
			$('.menu_backdrop').remove();
		}

		$('#nav_menu1').fadeToggle('fast');

	});

	// Event for Showing Menu Lessons
	$('.modlink').click(function(){
		$('.nav_menu_lessons1').hide();
		$(this).next().stop().fadeIn('fast');
	});

}

function createMenu(){
	var menu = '<ul class="nav_menu_modules">';
	for(var i=0; i<FLVS.Sitemap.module.length; i++){
		menu += '<li>';
		menu += '<a href="javascript:void(0);" class="modlink">'+FLVS.Sitemap.module[i].title+'</a>';
		//menu += '<a href="javascript:void(0);" class="modlink"><span class="modnum">MOD '+(i+1)+'</span>'+FLVS.Sitemap.module[i].title;+'</a>';
		// Lessons
		menu += '<ul class="nav_menu_lessons1 mod'+(i + 1)+'">';
		var submenu = '';
		if(typeof FLVS.Sitemap.module[i].lesson != 'undefined'){ // Added to account for POC process where not all lessons in rest of course have content
			for(var j=0; j<FLVS.Sitemap.module[i].lesson.length; j++){
				var links = FLVS.Sitemap.module[i].lesson[j].page[0].href;
				links = links.replace("../../","");

				submenu += '<li>';
				submenu += '<a href="'+links+'"><span class="lesson_num">'+FLVS.Sitemap.module[i].lesson[j].num.substring(1)+'</span>';


				var minutes = "mins";
				if(Number(FLVS.Sitemap.module[i].lesson[j].time) < 2){
					minutes = "min";
				}
				var points = "pts";
				if(Number(FLVS.Sitemap.module[i].lesson[j].points) < 2){
					points = "pt";
				}

				submenu += '<span class="lesson_title">'+FLVS.Sitemap.module[i].lesson[j].title+'</span></a>';
				submenu += '</li>';
			}
		}
		menu += submenu;
		menu += '</ul>';

		menu += '</li>';
	}
	menu += '</ul>';

	// Remove all modlinks from nav_menu_lessons
	$('#nav_menu1').append(menu);
	$('.nav_menu_lessons1 .modlink').remove();
}

$('*').click(function(e) {
	$('#navSubmenu').css({'visibility':'hidden'});
});

$('li').click(function(e) {
	e.stopPropagation();
	clickedDiv = '#'+$(this).attr('id');

	$('#navSubmenu').css({'visibility':'hidden'});

	navList = ['#nav01','#nav02','#nav03','#nav04','#nav05','#nav06','#nav07','#nav08',]

	if(jQuery.inArray(clickedDiv,navList) >= 0){
		modNum = clickedDiv.substring(5);
		midPoint = (($(clickedDiv).position().left  + $(clickedDiv).width()) + $(clickedDiv).position().left)/2;
		borderWidth = ($(document).width() - $('.navCircles').width())/2;
		bottomPoint = ($(window).height() - $(clickedDiv).offset().top);
		leftPoint = $(clickedDiv).position().left
		menu = createLessons(modNum);

		if(($(document).width()-leftPoint) < $('#navSubmenu').width()){
			$('#navSubmenu').css('background-image','url(global/images/home/submenu_bottom_right.png)');
			leftPoint = leftPoint - 120;
		}else{
			$('#navSubmenu').css('background-image','url(global/images/home/submenu_bottom_left.png)');
		}

		$('.triangle-right').html(menu);

		finalHeight = $('.triangle-right').height()+40;

		//throw "stop execution";

		$('#navSubmenu')
			.css(
			{'bottom':120, 'left':leftPoint, 'height':0, 'opacity':0, 'visibility':'visible'}
		)
			.animate(
			{'height': finalHeight, opacity: 1, queue: false, duration: 'fast'},function(){
				doBounce($('#navSubmenu'), bottomPoint, 15, 80);
			}
		);
	}
});

function doBounce(element, fromPoint, distance, speed) {
	while(distance > 0){
		element.animate({bottom: '-='+distance+'px'},speed)
			.animate({bottom: '+='+distance+'px'},speed);

		distance = Math.floor(distance/2);
		speed = Math.floor(speed/2);

	}
}

function createLessons(i){
	var menu = '<ul class="lessons">';

	for(var j=0; j<FLVS.Sitemap.module[i].lesson.length; j++){
		var links = FLVS.Sitemap.module[i].lesson[j].page[0].href;
		links = links.replace("../../","");

		menu += '<li>';
		menu += '<a href="'+links+'"><span class="lesson_num">'+FLVS.Sitemap.module[i].lesson[j].num+'</span>';
		menu += FLVS.Sitemap.module[i].lesson[j].title+'</a>';
		menu += '</li>';
	}

	menu += '</ul>';

	return menu;
}

$(window).resize(function() {
	$('#navSubmenu').css('visibility','hidden');
});



//-------------------need to see if the sitemap is ready, if not lets wait for the ajax to finish---------------------//
if(FLVS.Sitemap){
	createIndex();
	//console.log("hello - FLVS.Sitemap");

}else{
	$( document ).ajaxSuccess(function( event, xhr, settings ) {
		if(settings.url == "global/xml/sitemap.xml" ) {
			//console.log("hello - ajaxSuccess");
			createIndex();
		}
	});
}


/* FROM FE */

$(document).ready(function () {							
	commonfn();
})

function commonfn(){
	addingClass();
	addTabIndex()
}
	
function addingClass(){
	$("a").addClass('accessibility');
	$(".navCircles li").addClass('accessibility');
}

function addTabIndex(){
	$('.accessibility').focus(function() {
		$(this).css('opacity', '0.9');
	});
	$('.accessibility').blur(function(){
		$(this).css('opacity', '1');		
	})	
	$('.accessibility').each(function (i) {
		$(this).attr('tabindex', i + 1);
		var el = $(this);
		$(document).keypress(function(e) {
			if(e.which == 13 && $(el).is(":focus")) {
				$(el).click();
			}
		});
	})
}

/* END FE */
