/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
var X0 = parseInt(inputs[0]); // first position X of Batman
var Y0 = parseInt(inputs[1]); // first position Y of Batman

var minX = 0 // range zero for the width of the building
var minY = 0 // range zero for the height of the building
var maxX = W - 1
var maxY = H - 1

// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    bombDir.includes("U") && (maxY = Y0 -1)
    bombDir.includes("D") && (minY = Y0 + 1)
    bombDir.includes("L") && (maxX = X0 - 1)
    bombDir.includes("R") && (minX = X0 + 1)

    X0 = Math.floor( (minX + maxX) /2 )
    Y0 = Math.floor( (minY + maxY) /2 )

    console.log(X0,Y0)
}
