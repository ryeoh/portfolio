
// smooth scroll affect
function scrollPage() {
    $('.scroll').on('click', function(event) {
        event.preventDefault();
        $('body, html').animate({
         scrollTop: $(this.hash).offset().top - 20}, 1500)
    });
};

scrollPage();
