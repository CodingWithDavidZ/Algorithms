// Data
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
	['PHX', 'LAX'],
	['PHX', 'JFK'],
	['JFK', 'OKC'],
	['JFK', 'HEL'],
	['JFK', 'LOS'],
	['MEX', 'LAX'],
	['MEX', 'BKK'],
	['MEX', 'LIM'],
	['MEX', 'EZE'],
	['LIM', 'BKK'],
];

// Adjacency List
const adjacencyList = new Map();

//Add Node
function addNode(airport) {
	adjacencyList.set(airport, []);
}

//Add undirected Edge
function addUndirectedEdge(origin, destination) {
	adjacencyList.get(origin).push(destination);
	adjacencyList.get(destination).push(origin);
}

//Create Graph
airports.forEach(addNode);
routes.forEach((route) => addUndirectedEdge(...route));

console.log(adjacencyList);

//Graph Traversal

//BFS Breadth First Search

function bfs(start) {
    let counter = 0

	const visited = new Set();

	const queue = [start];

	while (queue.length > 0) {
		const airport = queue.shift(); // mutates queue

		const destinations = adjacencyList.get(airport);

		for (const destination of destinations) {
            counter++;
			if (destination === 'BKK') {
				console.log(`BFS found Bangkok in ${counter} steps`);
			}

			if (!visited.has(destination)) {
				visited.add(destination);
				queue.push(destination);
			}
		}
	}
}

bfs('PHX');


//DFS Depth First Search
let dfsCounter = 0

function dfs(start, visited = new Set()){
    console.log(start)

    visited.add(start);

    const destinations = adjacencyList.get(start)

    for (const destination of destinations){
        dfsCounter++
        if (destination === 'BKK'){
            console.log(`DFS found Bangkok in ${dfsCounter} steps`)
        }
        if(!visited.has(destination)){
            dfs(destination, visited);
        }

    }
}

dfs('PHX')