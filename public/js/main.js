console.log(name);

$(function () {
    $('.KV-group').on('click', function () {
        $('html,body').animate({scrollTop: $('#Q1').offset().top}, 500);
    });
});

var answer1 = "";
var answer2 = "";
var answer3 = "";
var answer4 = "";

$(function () {

    $('#Q1 button').on('click', function () {
        $('#Q1').removeAttr("style");
        $('html,body').animate({
            scrollTop: $('#Q2').offset().top
        }, 500);
        answer1 = $(this).find(".MC_button_circle").text();
    });
    $('#Q2 button').on('click', function () {
        $('#Q2').removeAttr("style");
        $('html,body').animate({
            scrollTop: $('#Q3').offset().top
        }, 500);
        answer2 = $(this).find(".MC_button_circle").text();
    });
    $('#Q3 button').on('click', function () {
        $('#Q3').removeAttr("style");
        $('html,body').animate({
            scrollTop: $('#Q4').offset().top
        }, 500);
        answer3 = $(this).find(".MC_button_circle").text();
    });
    $('#Q4 button').on('click', function () {
        $('#Q4').removeAttr("style");
        $('html,body').animate({
            scrollTop: $('.FORM_title').offset().top
        }, 500);
        answer4 = $(this).find(".MC_button_circle").text();
    });

});

var ans = 0;


$(function () {
    $('div.wow.fadeIn button').click(function () {

        //先將所有選項拿掉
        $('.MCC2', $(this).parent('.wow.fadeIn')).removeClass('MCC2');
        $('.MC2', $(this).parent('.wow.fadeIn')).removeClass('MC2');

        //自己在加上去
        $(this).children('.MC_button_circle').addClass('MCC2');
        $(this).children('.MC_button_text').addClass('MC2');
        //有答題~~data-status就+1
        $(this).parent('.wow.fadeIn').attr('data-status', 1);
    });


});
var testResult;

function answersGroup(a, b, c, d) {
    testResult = a + b + c + d;
}

// Form submitted
var dept = "";
var seq_no = "G001";
var web_pno = "10703B000002";
var mobile_pno = '10703B000003';
var NList_Type = "1";
var memo = "";
var isMobile = false;
var Favorite_Class = "";

$(function () {
    // (function (a, b) {
    //     if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
    //         web_pno = "10703B000002";
    //         IsMoblie = "Y";
    //         memo = "(手機傳送)" + memo;
    //     }
    // })(navigator.userAgent || navigator.vendor || window.opera);

    // analyze whether from mobile or not
    (function(a) {
        (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
    })(navigator.userAgent || navigator.vendor || window.opera);

    if (jQuery.browser.mobile === true) {
        isMobile = true;
        //alert("您使用手機瀏覽。");
    } else {
        isMobile = false;
    }
});

$(function () {

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    var lotteryGift = ['12000堂電腦數位課程', '免費試聽課程(3hrs)', '求職必勝完全指南', '繪圖軟體免費送(Autodesk)'];

    var giftlenth = lotteryGift.length;
    var drawResut = $('.lotteryResults'),
        lotterbtn = $('.balloon'),
        gift;

    lotterbtn.click(function () {
        drawResut.css('display', 'block');
        lotterbtn.css('display', 'none');
        // console.log('giftlenth:'+giftlenth);


    });

    $('#sBut').click(function () {
        $('#sBut').hide();

        var computerChoose = getRandomInt(giftlenth);

        switch (computerChoose) {
            case 0:
                // console.log('恭喜您獲得：12000堂電腦數位課程!!');
                drawResut.text('恭喜您獲得：'+ lotteryGift[computerChoose] +'!!');
                gift = lotteryGift[computerChoose];
                // console.log('gift is :' + gift);
                // JSonData.memo+= 'gift is :' + gift;
                // console.log(JSonData.memo);
                break;
            case 1:
                // console.log('恭喜您獲得：免費試聽!!');
                drawResut.text('恭喜您獲得：'+ lotteryGift[computerChoose] +'!!');
                gift = lotteryGift[computerChoose];
                // console.log('gift is :' + gift);
                drawResut.addClass('wow rubberBand');
                // JSonData.memo+= 'gift is :' + gift;
                // console.log(JSonData.memo);
                break;
            case 2:
                // console.log('恭喜您獲得：求職手冊!!');
                drawResut.text('恭喜您獲得：'+ lotteryGift[computerChoose] +'!!');
                gift = lotteryGift[computerChoose];
                // console.log('gift is :' + gift);
                // JSonData.memo+= 'gift is :' + gift;
                // console.log(JSonData.memo);
                break;
            case 3:
                // console.log('恭喜您獲得：繪圖軟體!!');
                drawResut.text('恭喜您獲得：'+ lotteryGift[computerChoose] +'!!');
                gift = lotteryGift[computerChoose];
                // console.log('gift is :' + gift);
                // JSonData.memo+= 'gift is :' + gift;
                // console.log(JSonData.memo);
                break;
            default:
                break;
        }

        // charater analyze

        // To determine whether to complete the answer
        ans = $('.wow.fadeIn[data-status="1"]').length;

        if (ans !== 4) {
            alert('【請完整作答再送出！】');
            $('#sBut').show();
            return;

        } else {
            // Yahoo
            window.dotq = window.dotq || [];
            window.dotq.push(
                {
                    'projectId': '10000',
                    'properties': {
                        'pixelId': '10049206',
                        'qstrings': {
                            'et': 'custom',
                            'ea': 'submit'
                        }
                    } } );
            // End of Yahoo
        }

        answersGroup(answer1, answer2, answer3, answer4);

        // result classification
        var resultType = '';
        if (testResult === 'abab' || testResult === 'abbb' || testResult === 'aabb') {
            resultType = 'A';
        }
        if (testResult === 'baaa' || testResult === 'bbbb' || testResult === 'bbab') {
            resultType = 'B';
        }
        if (testResult === 'aaaa' || testResult === 'aaba' || testResult === 'aaab') {
            resultType = 'C';
        }
        if (testResult === 'baab' || testResult === 'abaa' || testResult === 'abba') {
            resultType = 'D';
        }
        if (testResult === 'bbba' || testResult === 'baba' || testResult === 'babb') {
            resultType = 'E';
        }
        switch (resultType) {
            case 'A':
                $('#Type-A').modal();
                memo += "【性格偏向「協作型」的你】；";
                break;
            case 'B':
                $('#Type-B').modal();
                memo += "【性格偏向「勸服型」的你】";
                break;
            case 'C':
                $('#Type-C').modal();
                memo += "【性格偏向「機智型」的你】";
                break;
            case 'D':
                $('#Type-D').modal();
                memo += "【性格偏向「自我表現型」的你】";
                break;
            case 'E':
                $('#Type-E').modal();
                memo += "【性格偏向「嚴謹型」的你】";
                break;
            default:
                break;
        } // end od character analyze

        if (isMobile === true) {
            web_pno = mobile_pno;
        }
        var JSonData = {
            "name": $("#name").val() == "姓 名" ? "" : $("#name").val(),
            "mobile": $("#mobile").val() == "行動電話" ? "" : $("#mobile").val(),
            "email": $("#email").val() == "E-mail" ? "" : $("#email").val(),
            "seq_no": seq_no,
            "cityno": $("#ddl_city_no :selected").val(),
            "citynoname": $("#ddl_city_no :selected").text(),
            "townno": $("#ddl_area_no :selected").val(),
            "townnoname": $("#ddl_area_no :selected").text(),
            "per_chk": $("input[name=per_chk]:checked").length,
            "memo": memo + "獎品: " + gift + "；",
            "web_pno": web_pno,
            "fromto": QueryString("fromto") !== null ? QueryString("fromto") : "",
            "fromurl": document.location.href, //location.href,
            "sourceid": QueryString("fc") !== null ? QueryString("fc") : "",
            "NList_Type": NList_Type,
            "func": "njycooooqj"
        };

        //表單共用檢查 name mobile cityno townno per_chk
        if (checkinfo(JSonData) === false) return;

        goSubmit(JSonData, s, f);
    });

    function s(data) {
        if (data[0].result == "1") {
            $("#name").val("");
            $("#mobile").val("");
            // fbq('track', 'Lead');
            doConversion();

            alert('送出成功！');
            $("#sBut").show();

        } else {
            alert('送出失敗！');
            console.log(data);
            $("#sBut").show();
        }
    }
    function f(data) {
        alert(data);
        $("#sBut").show();
    }

});