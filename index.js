
// smooth scroll affect
function scrollPage() {
    $('a').on('click', function(event) {
        event.preventDefault();
        $('body, html').animate({
         scrollTop: $(this.hash).offset().top - 20}, 1000)
    });
};

scrollPage();
