function getAdjSquares(pos) {
    const adjSquares = [];
    const toAdd = [[1, 2], [2, 1], [-1, 2], [-2, 1], [-1, -2], [-2, -1], [1, -2], [2, -1]];

    for(const vector of toAdd) {
        const x = pos[0] + vector[0];
        const y = pos[1] + vector[1];

        if((x >= 0 && x <= 7) && (y >= 0 && y <= 7)) {
            adjSquares.push([x, y]);
        }
    }

    return adjSquares;
}

function getPathMap(start, end) {
    const queue = [];
    const visited = new Map();

    queue.push(start);
    visited.set(`${start[0]}, ${start[1]}`, {cost: 0, prev: null});

    while(queue.length !== 0) {
        const currPos = queue.shift();

        if(visited.has(`${end[0]}, ${end[1]}`)) break;

        for (const vertex of getAdjSquares(currPos)) {
            if (!visited.has(`${vertex[0]}, ${vertex[1]}`)) {
                visited.set(`${vertex[0]}, ${vertex[1]}`, {cost: visited.get(`${currPos[0]}, ${currPos[1]}`).cost + 1, prev: currPos});
                queue.push(vertex);
            }
        }
    }

    return visited;
}

export default function (start, end) {
    const pathMap = getPathMap(start, end);
    const path = [end];
    let curr = pathMap.get(`${end[0]}, ${end[1]}`);

    while(curr.prev !== null) {
        path.push(curr.prev);
        curr = pathMap.get(`${curr.prev[0]}, ${curr.prev[1]}`);
    }

    return path.reverse();

}
