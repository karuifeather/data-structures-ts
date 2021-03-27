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
}

const g = new Graph();
g.addVertex('Kathmandu');
g.addVertex('Delhi');
g.addVertex('Boise');
g.addEdge('Kathmandu', 'Delhi');
g.addEdge('Kathmandu', 'Boise');
console.log(g.adjacencyList);
