var windelicato = function() {
    $(document).ready(function() {
        homepage.initialize();
        terminal.initialize();
        gameoflife.initialize();
    });
}();

var homepage = function() {
    var _initialize = function() {
        $(document).on('click', '.toggle-button', function (){
                $('header').slideToggle("fast");
                $('footer').slideToggle("fast");
                $('#homepage-html').slideToggle("fast");
                $('#homepage-terminal').slideToggle("fast");
                $('#').slideToggle("fast");
        });
    };
    return {
        initialize: _initialize
    }
}();
