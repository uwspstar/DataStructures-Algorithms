//1041. Robot Bounded In Circle
/*
"G": go straight 1 unit;
"L": turn 90 degrees to the left;
"R": turn 90 degrees to the right.
*/
var isRobotBounded = function (instructions) {
    let x = 0;
    let y = 0;
    let dir = 'N'; // 'S', 'W', 'E',

    for (let c of instructions) {
        if (c === 'G') {
            if (dir === 'N') y++;
            else if (dir === 'S') y--;
            else if (dir === 'E') x++;
            else if (dir === 'W') x--;
        } else if (c === 'L') {
            if (dir === 'N') dir = 'W';
            else if (dir === 'S') dir = 'W';
            else if (dir === 'E') dir = 'N';
            else if (dir === 'W') dir = 'S';
        } else if (c === 'R') {
            if (dir === 'N') dir = 'E';
            else if (dir === 'S') dir = 'W';
            else if (dir === 'E') dir = 'S';
            else if (dir === 'W') dir = 'N';
        }
    }

    return (x===0 && y===0) || dir !=='N'
}