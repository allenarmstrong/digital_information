// JavaScript Document
var rollOverCheck = false;
var rolloverId = 0;
var popHeading = ['Short and Sweet', 'Clear and Concise', 'Attention-grabbing', 'Narrative'];
var popContent = ['Short and sweet. Do not overload slides with text or have too many slides in one presentation. The average attention span is around eight seconds.',
'Clear and concise. If your content is too complex, you will lose your audience. Express your ideas as directly and briefly as possible. Use proper spelling, punctuation, and grammar, too.',
'Attention-grabbing. What good is your message if your audience loses interest? Think in headlines, hooks, famous quotes, figurative language, shocking images, and surprising anecdotes.',
'Narrative. Telling a story is way more interesting than using bullet points and cold, hard facts. So show, don't tell. Use active verbs, give concrete examples, create vivid images, be specific, rouse emotion, and use figurative language. ',
]

function init(){
	loadImages();
	$('#goBtn').off('click').on('click',goNext);
	$('.rollbtns').off('click').on('click',showPopupOver);
	$('.rollbtns').off('mouseenter').on('mouseenter',showPopupOver);
	$('.rollbtns').off('mouseleave').on('mouseleave',hidePopupOver);	
}

function goNext(){
	$('.launchBoxContainer').hide();
	$('#stage_1').show();	
	}

function loadImages() {
    $('#baseImage').css({ 'background-image': "url(" + $('#07_01_06').attr('src') + ")", "background-position": "0 0", "background-repeat": "no-repeat" });

}

function showPopupOver() {  
    rolloverId = parseInt($(this).attr('id').split('_')[1]);
	$('.rollbtns').removeClass('clickedButton');
    $(this).addClass('clickedButton');   
    $('.popText').hide();

    $('#popupHeading').html(popHeading[rolloverId - 1]);    
    $('#popText_' + rolloverId).html(popContent[rolloverId - 1]).show();
    $('#popupHolder').show();

}

function hidePopupOver() {
    $(this).removeClass('clickedButton');
    $('.popText').hide();
    $('#popupHolder').hide();
}

$(document).ready(function() {
	init();
});
