/**
 * Created by aarmstrong on 8/31/15.
 */
$(document).ready(function() {

    var clicker;
    for (var i = 1; i <= 9; i++) {
        var button = document.form1["button" + i];
        button.onclick = function () {
            clicker = this.value;
            console.log(clicker);
            if (clicker == 'Access') {
                $('.content1').css('display', 'block');
                $('#button1').addClass("on");
            } else {
                $('.content1').css('display', 'none');
                $('#button1').removeClass("on");
            }
            if (clicker == 'Administration') {
                $('.content2').css('display', 'block');
                $('#button2').addClass("on");
            } else {
                $('.content2').css('display', 'none');
                $('#button2').removeClass("on");
            }
            if (clicker == 'Cost') {
                $('.content3').css('display', 'block');
                $('#button3').addClass("on");
            } else {
                $('.content3').css('display', 'none');
                $('#button3').removeClass("on");
            }
            if (clicker == 'Data') {
                $('.content4').css('display', 'block');
                $('#button4').addClass("on");
            } else {
                $('.content4').css('display', 'none');
                $('#button4').removeClass("on");
            }
            if (clicker == 'Dependency') {
                $('.content5').css('display', 'block');
                $('#button5').addClass("on");
            } else {
                $('.content5').css('display', 'none');
                $('#button5').removeClass("on");
            }
            if (clicker == 'Security') {
                $('.content6').css('display', 'block');
                $('#button6').addClass("on");
            } else {
                $('.content6').css('display', 'none');
                $('#button6').removeClass("on");
            }
            if (clicker == 'Speed') {
                $('.content7').css('display', 'block');
                $('#button7').addClass("on");
            } else {
                $('.content7').css('display', 'none');
                $('#button7').removeClass("on");
            }
            if (clicker == 'Staffing') {
                $('.content8').css('display', 'block');
                $('#button8').addClass("on");
            } else {
                $('.content8').css('display', 'none');
                $('#button8').removeClass("on");
            }
            if (clicker == 'Updating') {
                $('.content9').css('display', 'block');
                $('#button9').addClass("on");
            } else {
                $('.content9').css('display', 'none');
                $('#button9').removeClass("on");
            }

        };


    }
});
