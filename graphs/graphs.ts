class Graph {
  adjacencyList = {};

  addVertex(name: string): void {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }

  addEdge(v1: string, v2: string): void {
    const list = this.adjacencyList;
    if (!list[v1] || !list[v2]) return undefined;

    list[v1].push(v2);
    list[v2].push(v1);
  }

  removeEdge(v1: string, v2: string): void {
    const list = this.adjacencyList;
    let index: number = list[v1].indexOf(v2);

    if (index === -1) return undefined;

    // Removing ref from first vertex
    list[v1] = list[v1].filter((v: string, i: number) => {
      if (i !== index) return v;
    });

    // Removing ref from second vertex
    index = list[v2].indexOf(v1);
    list[v2] = list[v2].filter((v: string, i: number) => {
      if (i !== index) return v;
    });
  }

  removeVertex(vertex: string): void {
    const list = this.adjacencyList;

    if (!list[vertex]) return undefined;

    list[vertex].forEach((key: string) => {
      this.removeEdge(key, vertex);
    });

    delete list[vertex];
  }

  dfSearch(vertex: string): string[] {
    const list = this.adjacencyList;
    const vertices: string[] = [];

    const visited = {};

    const dfs = (startWith: string) => {
      if (!startWith) return;

      vertices.push(startWith);
      visited[startWith] = true;

      list[startWith].forEach((neighbor: string) => {
        if (!visited[neighbor]) dfs(neighbor);
      });
    };

    dfs(vertex);

    return vertices;
  }

  dfsIterative(vertex: string): string[] {
    const stack = [];

    const vertices = [];
    const visited = {};
    let currentVertex: string;

    stack.push(vertex);
    visited[vertex] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      vertices.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor: string) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return vertices;
  }

  bfsIterative(vertex: string): string[] {
    const queue = [];

    const vertices = [];
    const visited = {};
    let currentVertex: string;

    queue.push(vertex);
    visited[vertex] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      vertices.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor: string) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return vertices;
  }
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
// g.addVertex('Kathmandu');
// g.addVertex('Delhi');
// g.addVertex('Boise');
// g.addEdge('Kathmandu', 'Delhi');
// g.addEdge('Kathmandu', 'Boise');
// console.log(g.adjacencyList);

console.log(g.dfSearch('A'));
console.log(g.dfsIterative('A'));
console.log(g.bfsIterative('A'));
