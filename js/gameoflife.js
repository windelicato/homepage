var gameoflife = function () {

    // Constant and global variables
    var POPULATION;
    var GRID_HEIGHT;
    var GRID_WIDTH;
    var GRID_SIZE;

    var current = new Array();
    var next = new Array();
    var colors = new Array("#e3e3e3", "#bdbdbd");

    // Set up the board with random items
    var _initialize = function(num) {
        POPULATION = $('#gameoflife').attr('data-population');
        GRID_HEIGHT = $('#gameoflife').attr('data-height');
        GRID_WIDTH = $('#gameoflife').attr('data-width');
        GRID_SIZE = GRID_HEIGHT*GRID_WIDTH;

        _populate();
        setInterval(_run, 150);

        $(document).on('click', '#gameoflife', function () {
            _initialize();
        });

    };

    var _populate = function() {
        // Set up 3d array of items
        current = new Array(GRID_WIDTH);
        next    = new Array(GRID_WIDTH);
        for(i=0; i<GRID_WIDTH; i++) {
            current[i] = new Array(GRID_HEIGHT);
            next[i] = new Array(GRID_HEIGHT);
        }

        // Populate grid
        for(i=0; i<POPULATION; i++) {
            var x = Math.floor(Math.random()*GRID_WIDTH);
            var y = Math.floor(Math.random()*GRID_HEIGHT);
            current[x][y] = 1;
        }
    };

    var _check_adjacent = function(x, y) {
        count = 0;
        var xmin, xmax, ymin, ymax;
        xmin = x-1;
        xmax = x+1;
        ymin = y-1;
        ymax = y+1;

        // Check edges
        if (x == 0) xmin = GRID_WIDTH-1;
        if (y == 0) ymin = GRID_HEIGHT-1;
        if (x == GRID_WIDTH-1) xmax = 0;
        if (y == GRID_HEIGHT-1) ymax = 0;

        // Check each surrounding edge
        if(current[xmin][ymin]) count++;
        if(current[xmin][y]) count++;
        if(current[xmin][ymax]) count++;
        if(current[x][ymin]) count++;
        if(current[x][ymax]) count++;
        if(current[xmax][ymin]) count++;
        if(current[xmax][y]) count++;
        if(current[xmax][ymax]) count++;

        // Kill if less then 2 adjacent
        if(count < 2) {
            return 0;
        } else if(count < 4) {
            // Revive if 3 adjacent
            if(!current[x][y]  && count ==3 ) {
                return 1;
                // Stay alive if 3 or 4 adjacent
            } else if (current[x][y]) {
                return 1;
            }
        }
        // Kill otherwise
        return 0;
    };

    var _run = function () {
        var string = "";
        if (!current.length) {
            return false;
        }
        for(var j=0; j < GRID_HEIGHT; j++) {
            for(var i = 0; i < GRID_WIDTH; i++) {
                next[i][j] = _check_adjacent(i,j);
                if ( current[i][j] ) {
                    var ncolor = Math.floor(Math.random()*colors.length);
                    string+="<span style='color: " + colors[ncolor] + "'>.<span>&#160";
                } else {
                    string+="&#160&#160";
                }
            }
            string+="<br\>"
        }

        $('#gameoflife').html(string);
        for(var i = 0; i < GRID_WIDTH; i++) {
            for(var j=0; j < GRID_HEIGHT; j++) {
                current[i][j]= next[i][j];
            }
        }

        // Display nicely
    }; 

    return {
        initialize: _initialize
    }
}();
