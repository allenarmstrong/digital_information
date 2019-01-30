// JavaScript Document
var rollOverCheck = false;
var rolloverId = 0;
var popHeading = ['Scope', 'Money', 'Analysis', 'Resources', 'Time'];
var popContent = ['Scope. The project manager must determine the overall work that needs to be completed to deliver the desired product, service, or end result. If the scope is not accurate, it could negatively impact the cost and timeline of a project.',
'Money. Once project managers estimate the scope of a project, they must figure out the budget(glossary rollover: Budget: estimated amount of money needed to complete a project) to deliver a quality product. Time is money, so project managers need to enlist the best people and resources to get the job done quickly.',
'Analysis. Project managers must analyze the possible risks of a project like inaccurate scope, over budget, insufficient resources, missed deadlines, etc. Frequent meetings with team members can help project managers analyze potential risks.',
'Resources. Resources can be people, equipment, facilities, money, or anything else required for the completion of a project. Project managers are responsible for selecting the most efficient resources and delegating tasks appropriately. ',
'Time. Project managers know the importance of time, so they create project timelines that include specific deadlines and communicate these expectations with the team. Effective time management is a valued trait in a project manager. '
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
    $('#baseImage').css({ 'background-image': "url(" + $('#03_04_04').attr('src') + ")", "background-position": "0 0", "background-repeat": "no-repeat" });

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
