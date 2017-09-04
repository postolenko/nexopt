$(document).ready(function() {


    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------
    var parentEl;
    var indexVideoBox;
    var videoIdAttr;

    // ----------------------------

    getFooterPosition();

    $(window).resize(function() {

        if ( $(".footer").length > 0 ) {

            $(".wrapper").css({"min-height" : $(window).height() + "px"});

            $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        }

    });


    $(function() {

        $(".video-masck").on("click", function(playBtnEvent) {

            playBtnEvent.preventDefault();

            parentEl = $(this).closest(".video-box");

            indexVideoBox = parentEl.index(".video-box");

            videoIdAttr = "video_" + indexVideoBox;
            
            parentEl.find("iframe").attr("id", videoIdAttr);

            $(this).fadeOut(300);

            $("#" + videoIdAttr)[0].src += "?rel=0&autoplay=1";            

        });

    });


    function getFooterPosition() {

        if ( $(".footer").length ) {

            $(".wrapper").css({"min-height" : $(window).height() + "px"});

            $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

            setFooterPositionInterval = setInterval(function() {

                contentCoor = $(".content").offset().top + $(".content").height();
                footerCoor = $(".footer").offset().top;

                if( contentCoor != footerCoor ) {

                    $(".wrapper").css({"min-height" : $(window).height() + "px"});

                    $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

                    clearInterval(setFooterPositionInterval);

                }

            }, 35);

        }

    }

    function validateEmail(form_id) {
        var email = $("#" + form_id + " input[name=email]").val(),
            emailPattern = /^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$/;
        if (emailPattern.test(email)) {
            $("#" + form_id + " input[name=email]").removeClass('error_input');
            return true;
        }
        $("#" + form_id + " input[name=email]").addClass('error_input');
        return false;
    }

    function validateName(form_id) {
        var name = $("#" + form_id + " input[name=name]").val(),
            patt =  /^[а-яА-Яa-zA-Z\s\.]{3,30}$/;
        if (patt.test(name)) {
            $("#" + form_id + " input[name=name]").removeClass('error_input');
            return true;
        }
        $("#" + form_id + " input[name=name]").addClass('error_input');
        return false;
    }

    function validateTel(form_id) {
        var tel = $("#" + form_id + " input[name=tel]").val(),
            telpatt =  /^\d[\d\(\)\ -]{4,14}\d$/;
        if (telpatt.test(tel)) {
            $("#" + form_id + " input[name=tel]").removeClass('error_input');
            return true;
        }
        $("#" + form_id + " input[name=tel]").addClass('error_input');
        return false;
    }

    function validateMsg(form_id) {
        var msg = $("#" + form_id + " textarea[name=msg]").val();
            // msgpatt =  /^[0-9]/;
        if (msg.length > 4) {
            $("#" + form_id + " textarea[name=msg]").removeClass('error_input');
            return true;
        }
        $("#" + form_id + " textarea[name=msg]").addClass('error_input');
        return false;
    }

    function validateForm(form_id) {
        var a = validateEmail(form_id),
            c = validateName(form_id);
            d = validateTel(form_id);
            e = validateMsg(form_id);
        return a && c && d && e;
    }

    function ajaxFormRequest(result_id, form_id, url) {
        if (validateForm(form_id)) {
            $.ajax({
                url:    url,
                type:     "POST",
                dataType: "html",
                data: $("#" + form_id).serialize(),
                beforeSend: function () {
                    $("#" + result_id).html("Идет отправка...");
                },
                success: function (response) {
                    $("#" + result_id).html(response);
                    $("#" + form_id).trigger("reset");
                },
                error: function () {
                    $("#" + result_id).html("ERROR");
                }
            });
        } else { return false; }
    }

    $('#feedback_form').submit(function (e) {
        e.preventDefault();
        ajaxFormRequest('sendresult', 'feedback_form', 'processform.php');
    });

});
