
/*
 * ($document.ready() shorthand, code block)
 * Runs a character count verify every time a keystroke is made, adds
 * class 'invalid' to turn font red when exceeding 140 chars.
 */
$(() => {
    $("textarea").on("input", function(event) {
        let count = 140 - this.value.length;
        $(this).siblings(".counter").text(count);
        if (count < 0) {
          $(this).parent().find('.counter').addClass('invalid').text(count);
        } else {
          $(this).parent().find('.counter').removeClass('invalid').text(count);
        }
    });
});