// JavaScript Document
var rollOverCheck = false;
var rolloverId = 0;
var popHeading = ['Productivity', 'Accessibility', 'Collaboration', 'Efficiency'];
var popContent = ['Productivity refers to the quantity or amount produced (output) in relation to the effort it takes to produce (input). Communication technologies like cloud computing, email, file sharing, instant messaging, and web conferencing allow employees to produce more in a given period of time.',
'Accessibility refers to the quality of being available when needed. Cloud computing, email, instant messaging, and web conferencing make information, resources, and people easily accessible on any device that has wireless capabilities. These communication technologies can be accessed through any device with wireless capabilities, which also increases productivity in the workplace.',
'Collaboration refers to working with one or more people to create something. Today, communication tools allow us to communicate and collaborate across the office, the country, even the world. Video conferencing tools like Skype allow people to come together virtually to share and exchange information in real time while cloud computing services allow users to share files.',
'Efficiency refers to achieving maximum productivity with minimum wasted time, energy, or effort. Communication tools have improved the workplace by automating various tasks. For example, you can adjust calendar settings to send automatic appointment and meeting reminders and email messages to be delivered on a certain date and at a certain time. Cloud computing has improved efficiency by allowing users to access and edit information any time from any wireless device. Instant messaging enables you to see who is online, which literally makes it more efficient than making a phone call or even sending an email.',
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
    $('#baseImage').css({ 'background-image': "url(" + $('#05_05_03').attr('src') + ")", "background-position": "0 0", "background-repeat": "no-repeat" });

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
