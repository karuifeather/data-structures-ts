import { PriorityQueue } from '../trees/priorityQueue/pq';

interface Vertex {
  node: string;
  weight: number;
}

class WeightedGraph {
  adjacencyList = {};

  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1: string, v2: string, weight: number): void {
    const list = this.adjacencyList;
    if (!list[v1] || !list[v2]) return undefined;

    list[v1].push({ node: v2, weight: weight });
    list[v2].push({ node: v1, weight: weight });
  }

  shortestPath(start: string, end: string) {
    const list = this.adjacencyList;
    // Setting up distances 'table'
    const distances = {}; /* Stores the shortest distances to each vertex from start */

    Object.keys(list).forEach((curr: string) => (distances[curr] = Infinity));
    distances[start] = 0;

    // Setting up priority queue
    const queue = new PriorityQueue();
    Object.keys(list).forEach((curr: string) => {
      if (curr === start) queue.enqueue(curr, 0);
      else queue.enqueue(curr, Infinity);
    });

    // Setting up object that remembers how we got there
    const previous = {};
    Object.keys(list).forEach((curr: string) => (previous[curr] = null));

    // Run the loop while the queue is not empty
    const visited = {};
    while (queue.store.length) {
      const vertex = queue.dequeue();
      if (vertex.val === end) break;

      if (!visited[vertex.val]) {
        visited[vertex.val] = true;
        list[vertex.val].forEach((curr: Vertex) => {
          let dist: number;

          if (!previous[vertex.val]) {
            dist = curr.weight;
          } else {
            dist = distances[vertex.val] + curr.weight;
          }

          if (dist < distances[curr.node]) {
            distances[curr.node] = dist;
            previous[curr.node] = vertex.val;
          }

          queue.enqueue(curr.node, distances[curr.node]);
        });
      }
    }

    // Here on out, did it just for the fun of it
    const stops = [];
    let currentStop = end;
    while (previous[currentStop]) {
      currentStop = previous[currentStop];
      stops.unshift(currentStop);
    }
    stops.shift();

    const report = `The shortest path from ${start} to ${end} is through ${stops} with the distance of ${distances[end]} units.`;

    return report;
  }
}

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph.shortestPath('F', 'A'));
