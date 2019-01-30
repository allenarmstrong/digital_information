var DnD = DnD || {};
DnD.DragnDrop = function (left, right, _answerArray, _feedback, _instText) {

    var instText = _instText;

    var userAnsArray = new Array();
    var dragbuttonArray = left;
    var dropbuttonArray = right;
    var answerArray = _answerArray;
    var feedbackArray = _feedback;
    var offsetXPos;
    var offsetYPos;
    //var drag=new Array();
    var getlocationx = new Array();
    var getlocationy = new Array();
    var dropFlag = false;
    var _self = this;
    var visitedDragger = false;
    var correctAnswerTag;
    init();
    getLocationXY();

    function getLocationXY() {
        for (var i = 0; i < dragbuttonArray.length; i++) {
            getlocationx[i] = document.getElementById(dragbuttonArray[i]).offsetLeft;
            getlocationy[i] = document.getElementById(dragbuttonArray[i]).offsetTop;
        }
    }

    function handleDragStop(event, ui) {
        $("#" + dragId).css("border", "")
        if (ui.helper.attr("visited") == "false") {
            revertBack(ui);
        }
        if (ui.helper.attr("visited") == "true" && dropFlag == false) {
            userAnsArray.splice(parseInt(dragId.substring(4, dragId.length) - 1), 1);
            revertBack(ui);
        } else {
            dropFlag = false;
        }
        $(".droppable").css("background-color", "");
        offsetXPos = parseInt(ui.offset.left);
        offsetYPos = parseInt(ui.offset.top);
    }

    function saveDropDetails(ui, th) {
        dropFlag = true;
        dragId = ui.draggable.attr('id');
        var tempFlag = false;
        for (var t = 0; t < userAnsArray.length; t++) {
            var tempVar = parseInt(th.attr('id').substring(4, th.attr('id').length));
            if (userAnsArray[t] == tempVar) {
                tempFlag = true;
            }
        }
        if (tempFlag == false) {
            correctAnswerTag = ui.helper.attr("correctDragFeedback");
            //alert(ui.helper.attr("correctDragFeedback")+"  kuhkjhjk");
            ui.helper.attr("visited", "true");
            visitedDragger = true;
            dropId = th.attr('id');
            dragBoxId = dropId.substring(0, dropId.length);
            id1 = parseInt(dragId.substring(4, dragId.length));
            id2 = dropId.substring(4, dropId.length);
            userAnsArray[id1 - 1] = parseInt(dropId.substring(4, dropId.length));
            //drag.push(dragId);
            ui.draggable.css('left', $(th).css('left'));
            ui.draggable.css('top', $(th).css('top'));
            //Added by Sachin S to add Snap Back functionality
            validateAnswerEachTime(parseInt(id1 - 1));
        } else {
            setTimeout(function () {
                revertBack(ui)
            }, 100);
        }
    }

    function init() {
        //    alert("feedback :: "+ feedbackArray["htmlCorrect"]+" :: "+feedbackArray.length)
        $(".draggable").draggable({
            containment: "#mainDiv",
            revert: false,
            stack: ".droppable",
            start: function (event, ui) {
                dragId = $(this).attr("id");
                $("#" + this.id).css("border", "1px solid gray");
            },
            stop: handleDragStop
        }).each(function () {
            var top = $(this).position().top;
            var left = $(this).position().left;
            $(this).mousedown(
                function () {
                    document.getElementById("feedbacktext").className = "";
                    $("#feedbacktext").css("display", "none");
                }
            );
        });

        $(".droppable").droppable({
            accept: '.draggable',
            activeClass: 'active',
            hoverClass: "hover",
            drop: function (event, ui) {

                saveDropDetails(ui, $(this));
            }
        });
    }

    function outFunct(ui, th) {
        ui.draggable.draggable('option', 'revert', true);
    }

    function revertBack(ui) {
        var _id1 = parseInt(dragId.substring(4, dragId.length));
        $("#" + dragId).animate({
            'left': getlocationx[_id1 - 1] + "px",
            'top': getlocationy[_id1 - 1] + "px"
        }, 500, function () {
            // Animation complete.
        });
    }

    this.validateAnswer = function () {
        if (userAnsArray.toString() == answerArray.toString()) {
            document.getElementById("feedbacktext").className = "";
            $("#feedbacktext").addClass("correctAnswer");
            $("#feedbacktext").html(feedbackArray["feedbackArray"]);
            $("#feedbacktext").css("display", "block");
            // setTimeout(function(){
            $("#browserImg").css("display", "block");
            // },1000);

        } else {
            document.getElementById("feedbacktext").className = "";
            $("#feedbacktext").addClass("incorrectAnswer");
            $("#feedbacktext").css("display", "block");
            $("#feedbacktext").html("<p>" + feedbackArray[1] + "</p>");
        }

        //console.log( feedbackArray[0]+">>>>>>>>>>>>"+ feedbackArray[1])
    };
    //Added By Sachin S to validate the answer each time learner drags and drops the element
    validateAnswerEachTime = function (index) {

        document.getElementById("feedbacktext").className = "";
        if (userAnsArray.toString() == answerArray.toString()) { // All Answers Correct
            $("#finalfeedbacktext").css("display", "block");
            $("#finalfeedbacktext").html(feedbackArray["finalFeedback"]);
            $("#browserImg").css("display", "block");
            $("#instructionText").html(instText);
            $("#instructionText").css("left", "230px");
            $("#startOver").css("display", "block");
        } else if (userAnsArray[index].toString() == answerArray[index].toString()) {// Correct Answer Placed
            $("#feedbacktext").removeClass("incorrectAnswer");
            $("#feedbacktext").addClass("correctAnswer");
            $("#feedbacktext").html("<p style='position:relative;'>" + feedbackArray[correctAnswerTag] + "</p>");
            $("#feedbacktext").css("display", "block");


        } else {
            $("#feedbacktext").removeClass("correctAnswer");
            $("#feedbacktext").addClass("incorrectAnswer");
            $("#feedbacktext").html("<p style='position:relative;top:30%'>" + feedbackArray["incorrectFeedback"] + "</p>");
            $("#feedbacktext").css("display", "block");
            setTimeout(function () {
                revertBack()
            }, 100);
            userAnsArray[index] = "";
        }

    };


    this.resetAll = function () {
        for (var i = 0; i < dragbuttonArray.length; i++) {
            $("#" + dragbuttonArray[i]).css("cursor", "pointer");
            $("#" + dragbuttonArray[i]).animate({
                opacity: "1",
                top: parseInt(getlocationy[i]),
                left: parseInt(getlocationx[i])
            }, 500);
            userAnsArray = new Array();
            //drag=new Array();
        }
        $("#browserImg").css("display", "none");
        $("#feedbacktext").css("display", "none");
        $("#finalfeedbacktext").css("display", "none");
    }
};