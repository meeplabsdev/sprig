/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: 2048++  
@author: Judah Chung
@tags: []
@addedOn: 2024-00-00
*/

/*
TODO

Add powerup block

Add timer 
Add game over

2, 4, 8, 16, 32, 64
red, orange, green, pink, yellow, blue

*/
const bgblack = "-"
const bggrey = "_"
const bglight = "+"
const redblock = "r"
const orangeblock = "o"
const blueblock = "b"
const greenblock = "g"
const pinkblock = "p"
const yellowblock = "y"

const menu = bitmap``

var level = map`
--++++++--
--......--
--......--
--......--
--......--
--......--
--......--
--++++++--`

const title_art = bitmap`...............................................................................................................................1................................
...............................................................................................................................1................................
...............................................................................................................................1................................
..............................................................................................................................1.................................
..............................................................................................................................1.................................
..............................................................................................................................1.................................
..............................................................................................................................1.................................
............................................................................................................................111...............................11
..........................................................................................................................111...............................11..
.........................................................................................................................11...............................11....
........................................................................................................................1...............................11......
.......................................................................................................................1.............................111........
.......................................................................................................................1...........................111..........
......................................................................................................................1............................11...........
......................................................................................................................1.............................1...........
......................................................................................................................1.............................1...........
......................................................................................................................1..............................1..........
.................222222222222222.......22222222222222222.....2222222.......222222.......2222222222222222............22222.................22222.......1.........
.................22222222222222222....2222222222222222222....2222222......2222222......222222222222222222...........22222.................22222.......1.........
...............L222222222222222222...L22222222222222222222.LL2222222.....L2222222.....L222222222222222222.........L222222...............L222222........1........
...............L222222222222222222..LL22222222222222222222.LL222222.....LL2222222....L22222222222222222222........L222222...............L222222.........1.......
..............LL222222222222222222..L222222222222222222222.L2222222.....LL222222.....L22222222222222222222.......LL22222...............LL22222..........11......
..............LLLLLLLLLLLLL2222222..L2222222LLLLLLL222222..L2222222.....LL222222....LL2222222LLLLL2222222........LL22222...............LL22222...........1......
..............LLLLLLLLLLLLL2222222.LL2222222LLLLLLL222222.LL2222222.....L2222222....LL222222LLLLLL2222222........LL22222...............LL22222............1.....
.........................LL222222..LL2222222.....L2222222.LL2222222.....L2222222....LL222222....LL2222222...2222222222222222222...2222222222222222222.....1.....
.................2222222222222222..LL222222......L2222222.LL22222222222222222222....LL2222222222222222222..22222222222222222222..22222222222222222222.....1.....
................22222222222222222..L2222222.....LL2222222.LL2222222222222222222.....LLL22222222222222222..L22222222222222222222.L22222222222222222222.....1.....
...............222222222222222222..L2222222.....LL222222..LL2222222222222222222.....L2222222222222222222.LL2222222222222222222.LL2222222222222222222.....1......
..............L222222222222222222.LL2222222.....LL222222..LLL222222222222222222.....222222222222222222222LL2222222222222222222.LL2222222222222222222.....1......
.............LL222222LLLLLLLLLL...LL2222222.....L2222222..LLLLLLLLLLLLLL2222222....L222222LLLLLLLLL2222222LLLLLLL222222LLLLL...LLLLLLLL222222LLLLL......1.......
.............L2222222LLLLLLLLLL...LL222222......L2222222...LLLLLLLLLLLLL2222222...L2222222LLLLLLLLL2222222LLLLLLL222222LLLLL...LLLLLLLL222222LLLLL....11........
.............L2222222.............L2222222.....LL2222222..............LL222222....L2222222.......LL222222......LL2222211.............LL22222.........1..........
............LL2222222.............L2222222.....LL222222...............L2222222...LL2222222.......L2222222......LL22222.11............LL22222........1...........
............LL2222222............LL2222222.....LL222222...............L2222222...LL2222222.......L2222222......LL22222...1...........LL22222.......1............
............LL222222222222222222.LL22222222222222222222..............LL2222222...LL2222222222222222222222.....1L222222....1..........L222222.....11.............
............L2222222222222222222.LL22222222222222222222..............LL2222222...LL2222222222222222222222.....1L222222.....1.........L222222....1...............
............L2222222222222222222.LL22222222222222222222..............LL222222....LL222222222222222222222......LLLLLL........1.......LLLLLL...111................
...........LL2222222222222222222.LL2222222222222222222...............L2222222....LL222222222222222222222......LLLLLL.........1111111LLLLLL1111..................
...........LL2222222222222222222.LLLL2222222222222222................L2222222....LLLL222222222222222222.......1...........................1111111111111.........
...........LLLLLLLLLLLLLLLLLLL...LLLLLLLLLLLLLLLLLLL................LLLLLLL......LLLLLLLLLLLLLLLLLLLLL.......1........................................1.........
...........LLLLLLLLLLLLLLLLLLL.....LLLLLLLLLLLLLLLL.................LLLLLLL........LLLLLLLLLLLLLLLLLL........1......................................11..........
.............................................................................................................1....................................11............
.............................................................................................................1...................................1..............
.............................................................................................................1.................................11...............
............................................................................................................1................................11.................
............................................................................................................1..............................11...................
............................................................................................................1.............................1.....................
............................................................................................................1...........................11......................
............................................................................................................1.........................11........................
...........................................................................................................1.........................1..........................
...........................................................................................................1.......................11...........................
...........................................................................................................1.....................11.............................
...........................................................................................................1...................11...............................
...........................................................................................................1..................1.................................
..........................................................................................................1.................11..................................
..........................................................................................................1...............11....................................
..........................................................................................................1..............1......................................
..........................................................................................................1............11.......................................
..........................................................................................................1..........11.........................................
.........................................................................................................1..........1...........................................
.........................................................................................................1........11............................................
.........................................................................................................1......11..............................................
.........................................................................................................1....11................................................
.........................................................................................................1...1..................................................
........................................................................................................1..11...................................................
........................................................................................................111.....................................................
........................................................................................................1.......................................................
................................................................................................................................................................
................................................................................................................................................................
........................................................................222.....................................................................................
.......................................................................L222.....................................................................................
.................................111111111111111.......................L222.....................................................................................
............................11111...............11111...........222222.L222.....222222....222..222..............................................................
.........................111.........................111.......22222222L222....22222222..L222.L222..............................................................
......................111...............................111...L222LL222L222...L222LL222..L222.L222..............................................................
....................11.....................................11.L222.L222L222...L222.L222..L222.L222..............................................................
.................111.........................................1L22222222L22222.L222222222.L22222222..............................................................
................1.............................................L2222222.LL2222.LL22222222.LL2222222..............................................................
..............11..............................................L222LLL...LLLL...LLLLLLLL...LLLLL222..............................................................
............11...........................1111111..............L222.11......................2222222..............................................................
...........1..........................111.......111...........L222...1....................L222222...............................................................
.........11..........................1.............1..........LLL.....11..................LLLLLL................................................................
........1..........................11...............11..................1.......................................................................................
.......1..........................1...................1..................1......................................................................................
......1..........................1.....................1..................1.....................................................................................
.....1...........................1.....................1...................1....................................................................................
....1...........................1.......................1...................1...................................................................................
...1............................1.......................1....................1..................................................................................
..1............................1.........................1....................1.................................................................................
.1.............................1.........................1.....................1................................................................................
1..............................1.........................1......................1...............................................................................
...............................1.........................1.......................1..............................................................................
...............................1.........................1........................1.............................................................................
...............................1.........................1........................1.............................................................................
................................1.......................1..........................1............................................................................
................................1.......................1...........................1...........................................................................
.................................1.....................1.................11111......1...........................................................................
.................................1.....................1................1.....1......1..........................................................................
..................................1...................1................1.......1......1.........................................................................
...................................11...............11................1.........1.....1.........................................................................
.....................................1.............1..................1.........1......1........................................................................
.........11111........................111.......111...................1.........1......1........................................................................
.......11.....11.........................1111111......................1.........1.......1.......................................................................
......1.........1.....................................................1.........1.......1.......................................................................
.....1...........1.....................................................1.......1.........1......................................................................
....1.............1.....................................................1.....1..........1......................................................................
....1.............1......................................................11111...........1......................................................................
...1...............1......................................................................1.....................................................................
...1...............1......................................................................1.....................................................................
...1...............1......................................................................1.....................................................................
...1...............1.......................................................................1....................................................................
...1...............1.......................................................................1....................................................................
....1.............1........................................................................1....................................................................
....1.............1........................................................................1....................................................................
.....1...........1..........................................................................1...................................................................
......1.........1...........................................................................1...................................................................
.......11.....11............................................................................1...................................................................
.........11111..............................................................................1...................................................................
............................................................................................1...................................................................
..........................................................1111111............................1..................................................................
.......................................................111.......111.........................1..................................................................
.....................................................11.............11.......................1..................................................................
....................................................1.................1......................1..................................................................
...................................................1...................1.....................1..................................................................
..................................................1.....................1....................1..................................................................
.................................................1.......................1...................1..................................................................
................................................1.........................1..................1..................................................................
................................................1.........................1..................1..................................................................
`

var gamestate = "menu"
var moves = 0

var grid = []
var grid_values = []
var grid_size = 6

var core_legend =  [[bgblack, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
  [bggrey, bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`],
  [bglight, bitmap`
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111`],
  [redblock, bitmap`
................
................
...3333333993...
..333333339933..
.0333333339933..
.0333333339933..
.0333333339933..
.0333333339933..
.0333333339933..
.0333333339933..
.0333333339933..
.0333333339933..
.0333333339933..
.003333333993...
..0000000000....
................` ],
  [orangeblock, bitmap`
................
................
...9999999669...
..999999996699..
.0999999996699..
.0999999996699..
.0999999996699..
.0999999996699..
.0999999996699..
.0999999996699..
.0999999996699..
.0999999996699..
.0999999996699..
.009999999669...
..0000000000....
................` ],
  [blueblock, bitmap`
................
................
...5555555775...
..555555557755..
.0555555557755..
.0555555557755..
.0555555557755..
.0555555557755..
.0555555557755..
.0555555557755..
.0555555557755..
.0555555557755..
.0555555557755..
.005555555775...
..0000000000....
................` ],
  [greenblock, bitmap`
................
................
...DDDDDDD44D...
..DDDDDDDD44DD..
.0DDDDDDDD44DD..
.0DDDDDDDD44DD..
.0DDDDDDDD44DD..
.0DDDDDDDD44DD..
.0DDDDDDDD44DD..
.0DDDDDDDD44DD..
.0DDDDDDDD44DD..
.0DDDDDDDD44DD..
.0DDDDDDDD44DD..
.00DDDDDDD44D...
..0000000000....
................` ],
  [pinkblock, bitmap`
................
................
...HHHHHHH88H...
..HHHHHHHH88HH..
.0HHHHHHHH88HH..
.0HHHHHHHH88HH..
.0HHHHHHHH88HH..
.0HHHHHHHH88HH..
.0HHHHHHHH88HH..
.0HHHHHHHH88HH..
.0HHHHHHHH88HH..
.0HHHHHHHH88HH..
.0HHHHHHHH88HH..
.00HHHHHHH88H...
..0000000000....
................` ],
    [yellowblock, bitmap`
................
................
...6666666226...
..666666662266..
.0666666662266..
.0666666662266..
.0666666662266..
.0666666662266..
.0666666662266..
.0666666662266..
.0666666662266..
.0666666662266..
.0666666662266..
.006666666226...
..0000000000....
................` ],]


let currentLegendChar = 400;
function getLegendChar2() {
	const char = String.fromCharCode(currentLegendChar++);
	if (char == "." || char == "\n" || char == " ") {
		// skip reserved characters
		return String.fromCharCode(currentLegendChar++);
	}
	return char;
}

function generateScreen(SCREEN_ART) {
	const splitArt = splitBitmap(SCREEN_ART);
	const legend = splitArt.map(chunk => [
		getLegendChar2(),
		chunk,
	]);

	// create the map by joining every char for the image into one string, then inserting newlines
	const map = legend
		.map((v) => v[0])
		.join("")
		.replace(/(.{10})/g, "$1\n")
		.slice(0, -1);

	return [legend, map];
}

function splitBitmap(bitmap) {
	const rows = bitmap.trim().split("\n");
	const chunks = [];
	const chunkRows = rows.length / 16;
	const chunkCols = rows[0].length / 16;

	for (let i = 0; i < chunkRows; i++) {
		for (let j = 0; j < chunkCols; j++) {
			let chunk = [];
			for (let r = 0; r < 16; r++) {
				const rowIndex = i * 16 + r;
				const startCol = j * 16;
				const endCol = startCol + 16;

				chunk.push(rows[rowIndex].slice(startCol, endCol));
			}
			chunks.push(chunk.join("\n"));
		}
	}

	return chunks;
}

function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function create_grid(empty=".") {
    let empty_grid = []
    for (let x = 0; x < grid_size; x++) {
        let new_grid = []
        for (let y = 0; y < grid_size; y++) {
            new_grid.push(empty)
        }
        empty_grid.push(new_grid)
    }
    return empty_grid
}

function update_level() {
    clearText();

    addText("2048++", { x: 7, y: 1, color: color`2` });

    addText("Get", { x: 0, y: 3, color: color`2` });
    addText("6", { x: 0, y: 5, color: color`2` });
    addText("Blue", { x: 0, y: 7, color: color`2` });
    addText("in a", { x: 0, y: 9, color: color`2` });
    addText("row", { x: 0, y: 11, color: color`2` });

    addText("Do", { x: 16, y: 3, color: color`2` });
    addText("not", { x: 16, y: 5, color: color`2` });
    addText("fill", { x: 16, y: 7, color: color`2` });
    addText("up", { x: 16, y: 9, color: color`2` });
    addText("grid", { x: 16, y: 11, color: color`2` });

    addText("moves: " + parseInt(moves).toString(), { x: 6 - parseInt((parseInt(moves).toString().length) / 2), y: 15, color: color`2` });

    level = "++++++++++\n"
    for (let y = 0; y < grid_size; y++) {
        level += "--"
        for (let x = 0; x < grid_size; x++) {
            level += grid[x][y]
            if (grid_values[x][y] != 0) {
                addText(parseInt(grid_values[x][y]).toString(), { x: (x * 2) + 4, y: (y * 2) + 3, color: color`2` });
            }
        }
        level += "--\n"
    }
    level += "++++++++++\n"
    setMap(level)


    let gamewon = false
    for (let x = 0; x < grid_size; x++) {
        let new_row = []
        let new_column = []
        for (let y = 0; y < grid_size; y++) {
            new_row.push(grid[x][y])
            new_column.push(grid[y][x])
        }
        if (JSON.stringify(new_row) === JSON.stringify([blueblock, blueblock, blueblock, blueblock, blueblock, blueblock]) || JSON.stringify(new_column) === JSON.stringify([blueblock, blueblock, blueblock, blueblock, blueblock, blueblock])) {
            gamewon = true
        }
   
    }

    if (gamewon == true) {
        console.log("???")
        gamewin()
    }

   
    
}

function add_obj(x, y, obj, value = 2) {
    grid[x][y] = obj
    grid_values[x][y] = value
    update_level()
}

function shift_grid(is_vertical, down) {
    let direction = down ? -1 : 1;
    let start = down ? grid_size - 1 : 0;

    let new_grid = create_grid();
    let new_grid_values = create_grid(0);
    

    if (is_vertical) {
        for (let x = 0; x < grid_size; x++) {
            let lowest = start;
            for (let y = start; (direction > 0 ? y < grid_size : y >= 0); y += direction) {
                if (grid[x][y] !== ".") {
                    if (lowest !== start) {
                        if (grid_values[x][y] === new_grid_values[x][lowest - direction] && grid_values[x][y] != 64) {
                            lowest -= direction;
                            grid_values[x][y] *= 2;
             
                            if (grid_values[x][y] == 64) {
                                grid[x][y] = blueblock;
                            } else if (grid_values[x][y] == 32) {
                                grid[x][y] = yellowblock;
                            } else if (grid_values[x][y] == 16) {
                                grid[x][y] = pinkblock;
                            } else if (grid_values[x][y] == 8) {
                                grid[x][y] = greenblock;
                            } else if (grid_values[x][y] == 4) {
                                grid[x][y] = orangeblock;
                            } else {
                                grid[x][y] = redblock;
                            }
                            
                        }
                    }
                    new_grid[x][lowest] = grid[x][y];
                    new_grid_values[x][lowest] = grid_values[x][y];
                    lowest += direction;
                }
            }
        }
    } else {
        for (let y = 0; y < grid_size; y++) {
            let lowest = start;
            for (let x = start; (direction > 0 ? x < grid_size : x >= 0); x += direction) {
                if (grid[x][y] !== ".") {
                    if (lowest !== start) {
                        if (grid_values[x][y] === new_grid_values[lowest - direction][y]  && grid_values[x][y] != 64) {
                            lowest -= direction;
                            grid_values[x][y] *= 2;
                   
                            if (grid_values[x][y] == 64) {
                                grid[x][y] = blueblock;
                            } else if (grid_values[x][y] == 32) {
                                grid[x][y] = yellowblock;
                            } else if (grid_values[x][y] == 16) {
                                grid[x][y] = pinkblock;
                            } else if (grid_values[x][y] == 8) {
                                grid[x][y] = greenblock;
                            } else if (grid_values[x][y] == 4) {
                                grid[x][y] = orangeblock;
                            } else {
                                grid[x][y] = redblock;
                            }
                        }
                    }
                    new_grid[lowest][y] = grid[x][y];
                    new_grid_values[lowest][y] = grid_values[x][y];
                    lowest += direction;
                }
            }
        }
    }

    grid = structuredClone(new_grid);
    grid_values = structuredClone(new_grid_values);
    update_level();
}

function spawn_block(obj=redblock) {
    let available = []
    for (let x = 0; x < grid_size; x++) {
        for (let y = 0; y < grid_size; y++) {
            if (grid[x][y] == ".") {
                available.push([x, y])
            }
        }
    }

    if (available.length == 0) {
        gameover()
    } else {
        let chosen_pos = available[randint(0, available.length - 1)]
        add_obj(chosen_pos[0], chosen_pos[1], redblock, 2)
    }
}

setLegend(...core_legend)

const [titleScreenLegend, titleScreenMap] = generateScreen(title_art);
setBackground(bgblack)
setLegend(...titleScreenLegend);
setMap(titleScreenMap);
    
function startloop() {
    setLegend(...core_legend)
    grid = create_grid()
    moves = 0
    grid_values = create_grid(0)
    setBackground(bggrey)
    setMap(level)
    spawn_block()
    spawn_block()
}

function gameover() {
    gamestate ="over"
    var level = map`
++++++++++
----------
----------
----------
----------
----------
----------
----------`
    setMap(level)
    clearText();

    addText("GAME OVER", { x: 6, y: 1, color: color`2` });
    addText("The grid filled up", { x: 1, y: 7, color: color`2` });
    addText("Any key to restart", { x: 1, y: 9, color: color`2` });
}

function gamewin() {
    gamestate ="over"
    var level = map`
++++++++++
----------
----------
----------
----------
----------
----------
----------`
    setMap(level)
    clearText();

    addText("!VICTORY!", { x: 6, y: 1, color: color`2` });
    addText("You beat the game", { x: 2, y: 7, color: color`2` });
    addText("in " + parseInt(moves).toString() + " moves", { x: 5 - parseInt((parseInt(moves).toString().length) / 2), y: 9, color: color`2` });
    addText("Any key to restart", { x: 1, y: 11, color: color`2` });
}


onInput("s", () => {
    if (gamestate == "loop") {
        moves ++
        shift_grid(true, true)
        spawn_block()
    } else if (gamestate == "menu" || gamestate == "over") {
        gamestate = "loop"
        startloop()
    }
})

onInput("w", () => {
    if (gamestate == "loop") {
        moves++
        shift_grid(true, false)
        spawn_block()
    } else if (gamestate == "menu" || gamestate == "over") {
        gamestate = "loop"
        startloop()
    }
})

onInput("a", () => {
    if (gamestate == "loop") {
        moves++
        shift_grid(false, false)
        spawn_block()
    } else if (gamestate == "menu" || gamestate == "over") {
        gamestate = "loop"
        startloop()
    }
    
})

onInput("d", () => {
    if (gamestate == "loop") {
        moves++
        shift_grid(false, true)
        spawn_block()
    } else if (gamestate == "menu" || gamestate == "over") {
        game_state = "loop"
        startloop()
    }
})
