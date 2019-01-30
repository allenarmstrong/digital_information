/**
 * Tabbed Treatment interactive for DIT
 * Created by aarmstrong@flvs.net - email or IM with questions
 */

    var clicker;
    for (var i = 1; i <= 10; i++) {
        var button = document.form1["button" + i];
        button.onclick = function () {
            clicker = this.value;
            console.log(clicker);
            if (clicker == 'button1') {
                $('.content1').css('display', 'block');
                $('.arrow1').css('display', 'block');
                $('#button1').addClass("on");
            } else {
                $('.content1').css('display', 'none');
                $('.arrow1').css('display', 'none');
                $('#button1').removeClass("on");
            }
            if (clicker == 'button2') {
                $('.content2').css('display', 'block');
                $('.arrow2').css('display', 'block');
                $('#button2').addClass("on");
            } else {
                $('.content2').css('display', 'none');
                $('.arrow2').css('display', 'none');
                $('#button2').removeClass("on");
            }
            if (clicker == 'button3') {
                $('.content3').css('display', 'block');
                $('.arrow3').css('display', 'block');
                $('#button3').addClass("on");
            } else {
                $('.content3').css('display', 'none');
                $('.arrow3').css('display', 'none');
                $('#button3').removeClass("on");
            }
            if (clicker == 'button4') {
                $('.content4').css('display', 'block');
                $('.arrow4').css('display', 'block');
                $('#button4').addClass("on");
            } else {
                $('.content4').css('display', 'none');
                $('.arrow4').css('display', 'none');
                $('#button4').removeClass("on");
            }
            if (clicker == 'button5') {
                $('.content5').css('display', 'block');
                $('.arrow5').css('display', 'block');
                $('#button5').addClass("on");
            } else {
                $('.content5').css('display', 'none');
                $('.arrow5').css('display', 'none');
                $('#button5').removeClass("on");
            }
            if (clicker == 'button6') {
                $('.content6').css('display', 'block');
                $('.arrow6').css('display', 'block');
                $('#button6').addClass("on");
            } else {
                $('.content6').css('display', 'none');
                $('.arrow6').css('display', 'none');
                $('#button6').removeClass("on");
            }
            if (clicker == 'button7') {
                $('.content7').css('display', 'block');
                $('.arrow7').css('display', 'block');
                $('#button7').addClass("on");
            } else {
                $('.content7').css('display', 'none');
                $('.arrow7').css('display', 'none');
                $('#button7').removeClass("on");
            }
            if (clicker == 'button8') {
                $('.content8').css('display', 'block');
                $('.arrow8').css('display', 'block');
                $('#button8').addClass("on");
            } else {
                $('.content8').css('display', 'none');
                $('.arrow8').css('display', 'none');
                $('#button8').removeClass("on");
            }
            if (clicker == 'button9') {
                $('.content9').css('display', 'block');
                $('.arrow9').css('display', 'block');
                $('#button9').addClass("on");
            } else {
                $('.content9').css('display', 'none');
                $('.arrow9').css('display', 'none');
                $('#button9').removeClass("on");
            }
            if (clicker == 'button10') {
                $('.content10').css('display', 'block');
                $('.arrow10').css('display', 'block');
                $('#button10').addClass("on");
            } else {
                $('.content10').css('display', 'none');
                $('.arrow10').css('display', 'none');
                $('#button10').removeClass("on");
            }
        };


    }
