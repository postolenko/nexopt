$(document).ready(function() {


    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    getFooterPosition();

    $(window).resize(function() {

        if ( $(".footer").length > 0 ) {

            $(".wrapper").css({"min-height" : $(window).height() + "px"});

            $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        }

    });


    $(function() {



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
