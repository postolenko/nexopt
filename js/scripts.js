$(document).ready(function() {


    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

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

        // var indexVideoBox;
        // var videoIdAttr;

        $(".video-masck").on("click", function(playBtnEvent) {

            parentEl = $(this).closest(".video-box");

            indexVideoBox = parentEl.index(".video-box");

            console.log(indexVideoBox);

            videoIdAttr = "video_" + indexVideoBox;
            
            parentEl.find("iframe").attr("id", videoIdAttr);

            $(this).fadeOut(300);

            $("#" + videoIdAttr)[0].src += "?rel=0&autoplay=1";
            playBtnEvent.preventDefault();

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
