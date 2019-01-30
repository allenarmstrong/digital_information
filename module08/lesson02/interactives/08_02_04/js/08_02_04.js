// JavaScript Document
var rollOverCheck = false;
var rolloverId = 0;
var popHeading = ['Start', 'Homework', 'Identify', 'Note', 'End'];
var popContent = ['Start. Start with a personal greeting. Avoid “To Whom it May Concern" and instead use the hiring manager's name. Example: “Dear Mr. or Mrs. Last Name." (After all, being referred to as a “Mr." or “Mrs." is better than being referred to as an “it.”)',
'Homework! Do your research about the company and job to show you are excited to work for them. Make it clear you know their background, what exactly they do, and what their mission and values are. If the company is serious, your cover letter should be more serious. If the company is on the creative side, your cover letter should be, too. Example: “I have followed your CEO from when she launched her first product five years ago, and I am still wearing her sandals to this day!”',
'Identify. Identify your skills. You résumé may have listed your skills, but now's your chance to show how you put your top skills into practice. Tell a story that will really highlight how awesome you are. Be specific! Example: “Even though I outsold 98% of other ROTC members in our fall fundraiser, I have a strategy to outsell by 100% in the spring. Imagine what I could do for your sales." ',
'Note. Note how you can benefit the company. Example: “My years of experience in child care, and the fact that I hold the “Most Spirited" title for three years in a row, will allow me to train junior counselors so they want to work for Camp Geronimo for years to come.”',
'End with a request to meet in person to discuss your skills and experience and close with “Sincerely" (or another friendly and professional conclusion). Example: “I look forward to meeting you in person to discuss the job and my qualifications. I will follow up with you in a week, after you have had a chance to read my résumé. Sincerely, Jane Doe.”'
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
    $('#baseImage').css({ 'background-image': "url(" + $('#08_02_04').attr('src') + ")", "background-position": "0 0", "background-repeat": "no-repeat" });

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
