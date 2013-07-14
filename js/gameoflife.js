// Constant and global variables
var POPULATION = 500;
var GRID_SIZE = 30;

var current = new Array(GRID_SIZE);
var next = new Array(GRID_SIZE);

// Set up the board with random items
function init(num) {
	current = new Array(GRID_SIZE);
	next    = new Array(GRID_SIZE);

	for(i=0; i<GRID_SIZE; i++) {
		current[i] = new Array(GRID_SIZE);
		next[i] = new Array(GRID_SIZE);
	}
	for(i=0; i<num; i++) {
		var x = Math.floor(Math.random()*GRID_SIZE);
		var y = Math.floor(Math.random()*GRID_SIZE);
		current[x][y] = 1;
	}

} init(POPULATION);

function check_adjacent(x, y) {
	count = 0;
	var xmin, xmax, ymin, ymax;
	xmin = x-1;
	xmax = x+1;
	ymin = y-1;
	ymax = y+1;

	// Check edges
	if (x == 0) xmin = GRID_SIZE-1;
	if (y == 0) ymin = GRID_SIZE-1;
	if (x == GRID_SIZE-1) xmax = 0;
	if (y == GRID_SIZE-1) ymax = 0;

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
}

function gameoflife() {

	var string = " <span style='color: #8c644c'>»</span> <span style='color: #d6c3b6'>gcc gameoflife.c -o gameoflife && ./gameoflife</span><br\><br\>"
	for(var i = 0; i < GRID_SIZE; i++) {
		for(var j=0; j < GRID_SIZE; j++) {
			next[i][j] = check_adjacent(i,j);
			if ( current[i][j] ) {
				string+=".&#160";
			} else {
				string+="&#160&#160";
			}
		}
		string+="<br\>"
	}

	console.log(string);
	$('#gameoflife').html(string);
	for(i = 0; i < GRID_SIZE; i++) {
		for(var j=0; j < GRID_SIZE; j++) { // TODO: see if js allows current = next;
			current[i][j] = next[i][j];
		}
	}

// Display nicely
} setInterval(gameoflife, 100); gameoflife();
