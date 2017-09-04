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



});
