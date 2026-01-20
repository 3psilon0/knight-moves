import knightMoves from "./knightMoves.js";

const shortestPath = knightMoves([0, 0], [1, 3]);

console.log(`You made it in ${shortestPath.length - 1} moves! Here is your path:`)
for (const pos of shortestPath) {
    console.log(pos);
}