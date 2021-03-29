import { PriorityQueue } from '../trees/priorityQueue/pq';

interface Vertex {
  node: string;
  weight: number;
}

type Data = number | string;

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

    // Setting up priority queue
    const queue = new PriorityQueue();

    // Setting up object that remembers how we got there
    const previous = {};

    // Build up the initial state
    for (let vertex in list) {
      if (vertex === start) {
        distances[start] = 0;
        queue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        queue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // Run the loop while the queue is not empty
    let vertex: Data;
    while (queue.store.length) {
      vertex = queue.dequeue().val;
      if (vertex === end) break;

      if (distances[vertex] !== Infinity) {
        let dist: number;

        list[vertex].forEach((neighbor: Vertex) => {
          if (!previous[vertex]) {
            dist = neighbor.weight;
          } else {
            dist = distances[vertex] + neighbor.weight;
          }

          if (dist < distances[neighbor.node]) {
            distances[neighbor.node] = dist;
            previous[neighbor.node] = vertex;
            queue.enqueue(neighbor.node, distances[neighbor.node]);
          }
        });
      }
    }

    // Here on out, did it just for the fun of it
    const stops = [];
    let currentStop = end;
    while (previous[currentStop]) {
      currentStop = previous[currentStop];
      stops.push(currentStop);
    }
    stops.pop();

    const report = `The shortest path from ${start} to ${end} is through ${stops.reverse()} with the distance of ${
      distances[end]
    } units.`;

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
