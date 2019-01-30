/**
 * Created by aarmstrong on 8/31/15.
 */
$(document).ready(function () {

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
        };


    }
});
