var terminal = function () {
    var term = null;

    var _showHelpMessage = function() {
        term.echo(
            "<span class='toggle-button' href='#'>Type <b>help</b> for list of commands or <b>click here</b> if you don't wish to interact</span>",
            {
                raw: true
            }
        );
    };

    var _showTerminalGreeting = function () {
        if (typeof $('.console .data #greeting') !== undefined) {
            term.echo($('.console .data #greeting').html(), {raw:'true'});
        }
    };

    var _handleTerminalInput = function (command, term) {
         var commandData = $('#command-'+command);
         term.echo("<br>", {raw: 'true'});
         if (!commandData.length) {
             term.echo("Not a valid command");
             _showHelpMessage();
         } else {
            return term.echo(commandData.html(), {raw: 'true'});
         }
    };

    var _initialize = function() {
        term = $('#terminal').terminal(function (cmd, term) {
                if (cmd.length > 0) {
                    _handleTerminalInput(cmd, term);
                }
                term.echo("\n");
            },
            {
                prompt: '» ',
                name:'urxvt',
                width:'100%',
                greetings: ''
            }
        );

        _showTerminalGreeting();

        var lines = $('.console .data #loader').html().split('\n');
        term.pause();
        $.each(lines, function (index, line) {
            window.setTimeout(function () {
                term.echo(line);
            }, 100*index, line);
        })
        window.setTimeout(function () {
            term.clear();
            _showHelpMessage();
            term.resume();
        }, 100*lines.length + 200);

    };

    return {
        initialize: _initialize
    }
}();
