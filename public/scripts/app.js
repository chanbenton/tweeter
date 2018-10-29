/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

window.onload = () => {
    
    // Posts messages, otherwise gives an error with 0 or >140 characters 
    $("#tweet-form input").click(ev => {
        let msg = $("#tweet-form textarea").val();
        $("#too-short, #too-long, #all-spaces").removeClass("show");

        if (msg.length === 0) {
            $("#too-short").addClass("show");
        } else if (msg.trim().length === 0) {
            $("#all-spaces").addClass("show");
        } else if (msg.length > 140) {
            $("#too-long").addClass("show");
        } else {
            $.ajax({
                url: '/tweets',
                method: 'POST',
                data: {text:msg},
                success: function(){
                loadTweets();
                }
            });
            // Clears textarea
            $("#tweet-form textarea").val("");
        }
    });

    // Toggles compose screen, when pressed
    $("#nav-bar .compose-btn").click(function() {
        $("section.new-tweet").slideToggle("slow");
        if ($("section.new-tweet").is(':visible')) {
            $("section.new-tweet textarea").focus();
        }
    });
};