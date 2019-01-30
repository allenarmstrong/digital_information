// ----------------------------------------------------------------------
// -- COURSE SPECIFI JS:
// ----------------------------------------------------------------------
// -- NOTE: This is where you can add anything you need to do specifically to the course, it will load lastly.
// -- ABOUT: THis file will over-ride everything else, if you need to customize
// -- AUTHOR: You - WDS
// ======================================================================
/* indexOf for older browsers */


if (!Array.indexOf) {
    Array.prototype.indexOf = function (obj, start) {
        for (var i = (start || 0); i < this.length; i++) {
            if (this[i] == obj) {
                return i;
            }
        }
        return -1;
    }
}
/* end indexOf */

$(document).ready(function(){


    // Puts the image caption inside of a block below the image.
    $('.image-container').each(function(){
        var imgsize = $(this).find('img').width();
        $(this).find('span.copyright').css('max-width',(imgsize - 30) + 'px');
        $(this).find('span.caption').css('max-width', (imgsize - 30) + 'px');
    });

    if($('.landingImage').length != 0){
        sizeLandingPage();
    }

    // Video link to a new tab
    $('.video_link').attr('target', '_blank');

    //if($('.prevt').attr('href').search('index') != -1){	// Back button fix for Toolwire delivery
    //    $('.prevt').attr('href',home_url);
    //}
    //
    //if($('.nextt').attr('href').search('index') != -1){	// Forward button fix for Toolwire delivery
    //    $('.nextt').attr('href',home_url);
    //}

});

function sizeLandingPage(){
    var lessonList = createLessonList(FLVS.Sitemap.module[current_module].title.substring(0,1));
    $('.lessonContainerHeader').after(lessonList);
}

function createLessonList(i){
    var menu = '<ul class="lessonLists">';
    var module = FLVS.Sitemap.module[i];

    for(var j=1; j < module.lesson.length; j++){
        var links = module.lesson[j].page[0].href;
        links = links.substr(3,999);

        menu += '<li><a href="../' + links + '">';
        menu += '<span class="lesson_num">' + module.lesson[j].num + '</span>';
        menu += '<span class="lesson_title">' + module.lesson[j].title + '</span>';
        menu += '<span class="lesson_time">' + module.lesson[j].time + ' mins</span>';
        menu += '<span class="lesson_points">' + module.lesson[j].points + '</span>';
        menu += '</a></li>';
    }

    //if (i == 4){
    //    menu += '<li><span class="lesson_num">04.07</span>';
    //    menu += '<span class="lesson_title">Segment One Collaboration</span>';
    //    menu += '<span class="lesson_time">90 mins</span>';
    //    menu += '<span class="lesson_points">40</span></li>';
    //
    //    menu += '<li><span class="lesson_num">04.08</span>';
    //    menu += '<span class="lesson_title">Segment One Exam</span>';
    //    menu += '<span class="lesson_time">45 mins</span>';
    //    menu += '<span class="lesson_points">tbd</span></li>';
    //}
    //else if (i == 8){
    //    menu += '<li><span class="lesson_num">08.07</span>';
    //    menu += '<span class="lesson_title">Segment Two Collaboration</span>';
    //    menu += '<span class="lesson_time">90 mins</span>';
    //    menu += '<span class="lesson_points">40</span></li>';
    //
    //    menu += '<li><span class="lesson_num">08.08</span>';
    //    menu += '<span class="lesson_title">Segment Two Exam</span>';
    //    menu += '<span class="lesson_time">45 mins</span>';
    //    menu += '<span class="lesson_points">157</span></li>';
    //}


    menu += '</ul>';

    return menu;
}


$('*').click(function (e) {
    $('#navSubmenu').css({'visibility': 'hidden'});
});

$('.pace_list').click(function (e) {
    e.stopPropagation();
    clickedDiv = '#' + $(this).attr('id');
	
    $('#navSubmenu').css({'visibility': 'hidden'});

    navList = ['#nav01', '#nav02', '#nav03', '#nav04', '#nav05', '#nav06', '#nav07', '#nav08',]

    if (jQuery.inArray(clickedDiv, navList) >= 0) {
        modNum = clickedDiv.substring(5);
        midPoint = (($(clickedDiv).position().left + $(clickedDiv).width()) + $(clickedDiv).position().left) / 2;
        borderWidth = ($(document).width() - $('.navCircles').width()) / 2;
        bottomPoint = ($(window).height() - $(clickedDiv).offset().top);
        leftPoint = $(clickedDiv).position().left
        menu = createLessons(modNum);

        if (($(document).width() - leftPoint) < $('#navSubmenu').width()) {
            $('#navSubmenu').css('background-image', 'url(global/images/home/submenu_bottom_right.png)');
            leftPoint = leftPoint - 120;
        } else {
            $('#navSubmenu').css('background-image', 'url(global/images/home/submenu_bottom_left.png)');
        }

        $('.triangle-right').html(menu);

        finalHeight = $('.triangle-right').height() + 40;

        //throw "stop execution";

        $('#navSubmenu')
            .css(
            {'bottom': 120, 'left': leftPoint, 'height': 0, 'opacity': 0, 'visibility': 'visible'}
        )
            .animate(
            {'height': finalHeight, opacity: 1, queue: false, duration: 'fast'}, function () {
                doBounce($('#navSubmenu'), bottomPoint, 15, 80);
            }
        );
    }
});

function doBounce(element, fromPoint, distance, speed) {
    while (distance > 0) {
        element.animate({bottom: '-=' + distance + 'px'}, speed)
            .animate({bottom: '+=' + distance + 'px'}, speed);

        distance = Math.floor(distance / 2);
        speed = Math.floor(speed / 2);

    }
}

$(window).resize(function() {
    if($('.landingImage').length != 0){
        //sizeLandingPage();
    }
});


var ivdcount = 0;
var Timer
var ivdcountArray = [];

$(document).ready(function () {							
	commonfn();
});

function commonfn(){
	addingClass();
	panelHeadingClass();
	toolTipOver();
	toolTipOut();
	dbTipOver();
	dbTipOut();
	addTabIndex();
}
	
function addingClass(){
	fnFindVid();
	var id = $(document).find('div').eq(0).attr('id');
	if(id == 'externalContent'){
		$("a").addClass('accessibility');
		$("div.panel-heading").addClass('accessibility');                              
		$("span.da-arrows-prev").addClass('accessibility');
		$("span.da-arrows-next").addClass('accessibility');	
		$(".video").addClass('accessibility');	
		$(".view-second").addClass('accessibility');
		$(".view-fifth").addClass('accessibility');
		$(".view-tenth").addClass('accessibility');
		$("figure").addClass('accessibility');
		$(".toggleSwitch").removeClass('accessibility'); 	
		//console.log('check if')  
	}else{
		//console.log('check else');
		fnFindVid();
	 	$("a").addClass('accessibility');
		$("div.panel-heading").addClass('accessibility');
		$("span.da-arrows-prev").addClass('accessibility');
		$("span.da-arrows-next").addClass('accessibility');
		$(".video").addClass('accessibility');
		$(".view-second").addClass('accessibility');
		$(".view-fifth").addClass('accessibility');
		$(".view-tenth").addClass('accessibility');
		$("figure").addClass('accessibility');
		$(".toggleSwitch").removeClass('accessibility'); 		
	} 
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
		
		ivdcount = i+2
	})
}

function fnFindVid() {
	if($(".kal_vid, .kaltura").length){		
		Timer = setTimeout(function(){ 
		 	if($("div.kWidgetPlayBtn").length){				
				$(".kal_vid, .kaltura ").find("div.kWidgetPlayBtn").addClass('accessibility');					
				$('.accessibility').each(function (i) {
				$(this).attr('tabindex', i + ivdcount);
				ivdcountArray.push($(this))
				var el = $(this);
					$(document).keypress(function(e) {
						if(e.which == 13 && $(el).is(":focus")) {
							$(el).click();
						}
					});
				});							
			}
		}, 2000);		
	}
	else{
		fnClearTimeInt(); 
	} 
}

function fnClearTimeInt() {
    clearTimeout(Timer);
} 

function panelHeadingClass(){
	setTimeout(function(){		
		$(".ilTextVersion").find("div.panel-heading").addClass('accessibility');
	}, 2000)
}

function toolTipOver(){
	if($('._tip').length){
		$('._tip').focusin(function(){
			$(this).mouseover();
		});
	};
}

function toolTipOut(){
	if($('._tip').length){
		$('._tip').focusout(function(){
			$(this).mouseout();
		});
	};
}

/* db_tip container */
function dbTipOver(){
	if($('.dbtip_container').length){
		$('.dbtip_container').focusin(function(){
			$(this).mouseover();
		});
	};
}

function dbTipOut(){
	if($('.dbtip_container').length){
		$('.dbtip_container').focusout(function(){
			$(this).mouseout();
		});
	};
}
 