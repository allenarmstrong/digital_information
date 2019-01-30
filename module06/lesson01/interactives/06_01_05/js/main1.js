/**
 * Created with JetBrains WebStorm.
 * User: Anil.koranne
 * Date: 8/13/13
 * Time: 4:36 PM
 * To change this template use File | Settings | File Templates.
 */
var XMLParsing = XMLParsing || {};
XMLParsing.parseXML = function (_XMLPATH) {
    $.ajax({
        type: "GET",
        url: _XMLPATH,
        dataType: "xml",
        success: onXMLLoaded,
        error: function () {
            alert("SORRY! XML Cannot be parsed.");
        }
    });
    var xmlPath = null;
    var dragLength;
    var dTop = 50;
    var dLeft = 10;
    var draggableArray = new Array();
    var droppableArray = new Array();
    var crtAnsArray = new Array();
    var feedbackArray = new Array();
    var instText1;

    function onXMLLoaded(xmlObj) {
        draggableArray = new Array();
        droppableArray = new Array();
        crtAnsArray = new Array();
        feedbackArray = new Array();
        dTop = 50;
        dLeft = 10;
        //$("#submitBtn").bind("click",validate);
        $("#startOver").bind("click", startOver);
        xmlPath = xmlObj;
        instText1 = $(xmlPath).find("instructionText1").text();
        $("#instructionText").html(instText1);
        var dragPath = $(xmlPath).find("DragAndDrop").find("drag");
        dragLength = $(xmlPath).find("DragAndDrop").find("drag").length;
        //  console.log(dragLength+"  dragLength")
        for (var i = 0; i < dragLength; i++) {
            crtAnsArray.push($(xmlPath).find("DragAndDrop").find("drag").eq(i).attr("correctDropPos"));
            var createNewDiv = document.createElement("div");
            $(createNewDiv).html($(dragPath).eq(i).text());
            $(createNewDiv).addClass("dragItem draggable");
            $(createNewDiv).attr("id", "drag" + (i + 1));
            $(createNewDiv).attr("visited", "false");

            $(createNewDiv).attr("correctDragFeedback", $(xmlPath).find("DragAndDrop").find("drag").eq(i).attr("correctDragFeedback"));
            draggableArray[i] = "drag" + (i + 1);
            applyCssToElement(createNewDiv, $(dragPath).eq(i));
            $("#dropDiv").append(createNewDiv);
        }

        setDropElements();
        parseFeedback();
        DnD = new DnD.DragnDrop(draggableArray, droppableArray, crtAnsArray, feedbackArray, $(xmlPath).find("instructionText2").text());
    }

    function applyCssToElement(_divObj, _nodeObj) {
        //console.log($(_nodeObj)[0].attributes.length+"  THI HHI")
        //console.log($(_nodeObj)[0].attributes[0].name+"  attr")
        //console.log($(_nodeObj)[0].attributes[0].value+"  Val")
        var _attrLength = $(_nodeObj)[0].attributes.length;
        for (var temp = 0; temp < _attrLength; temp++) {
            $(_divObj).css($(_nodeObj)[0].attributes[temp].name, $(_nodeObj)[0].attributes[temp].value);
        }

        //$(_nodeObj).attr("id")
        /* for(var temp in $(_nodeObj)[0].attributes){
         $(_divObj).css($(_nodeObj)[0].attributes[temp].name,$(_nodeObj)[0].attributes[temp].value);
         } */
    }

    function setDropElements() {

        var imgSrc = $(xmlPath).find("DragAndDrop").find("drop").eq(0).find("dropImagePath").text();
        for (var i = 0; i < dragLength; i++) {
            var createNewImg = document.createElement("img");
            $(createNewImg).attr("src", imgSrc);
            $(createNewImg).addClass("dropItem droppable");
            $(createNewImg).css("position", "absolute");
            $(createNewImg).css("top", dTop + "px");

            $(createNewImg).css("left", dLeft + "px");
            dTop = dTop + 35;
            $(createNewImg).attr("id", "drop" + (i + 1));
            droppableArray[i] = "drop" + (i + 1);

            $("#dropDiv").append(createNewImg)
        }
    }

    function parseFeedback() {

        feedbackArray = {
            docCorrect: $(xmlPath).find("feedback").find("docCorrect").text(),
            htmlCorrect: $(xmlPath).find("feedback").find("htmlCorrect").text(),
            headCorrect: $(xmlPath).find("feedback").find("headCorrect").text(),
            titleCorrect: $(xmlPath).find("feedback").find("titleCorrect").text(),
            bodyCorrect: $(xmlPath).find("feedback").find("bodyCorrect").text(),
            fontCorrect: $(xmlPath).find("feedback").find("fontCorrect").text(),
            closingCorrect: $(xmlPath).find("feedback").find("closingCorrect").text(),
            finalFeedback: $(xmlPath).find("feedback").find("finalFeedback").text(),
            incorrectFeedback: $(xmlPath).find("feedback").find("incorrectFeedback").text()
        };

    }

    function validate() {
        /* $("#unbindDrag").css("display","block");
         DnD.validateAnswer(); */
        $("#unbindDrag").css("display", "block");
        $("#submitBtn").css("display", "none");
        $("#startOver").css("display", "block");
        $("#EndInstructionText").css("display", "block");
        $("#instructionText").css("display", "none");
        DnD.validateAnswer();
    }

    function startOver() {
        /* $("#unbindDrag").css("display","none")
         DnD.resetAll(); */

        $("#unbindDrag").css("display", "none");
        $("#submitBtn").css("display", "none");
        $("#startOver").css("display", "none");
        $("#EndInstructionText").css("display", "none");
        $("#instructionText").css("display", "block");
        $("#instructionText").html(instText1);
        $("#instructionText").css("left", "17px");
        DnD.resetAll();
    }
};