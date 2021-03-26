# GRAPHS

A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

![Graph](http://www.btechsmartclass.com/data_structures/ds_images/Graph%20Adjacency%20Matrix%202.jpg)

## USES FOR GRAPHS

- Social Networks
- Location / Mapping
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations

**EVERYWHERE!**

## Terminology

- **Vertex** - a node
- **Edge** - connection between nodes
- **Weighted/Unweighted** - values assigned to distances between vertices
- **Directed/Undirected** - directions assigned to distanced between vertices

## DIFFERENCES & BIG O

|V| - number of vertices
|E| - number of edges

| OPERATION     | ADJACENCY LIST   | ADJACENCY MATRIX |
| ------------- | ---------------- | ---------------- |
| Add Vertex    | O(1)             | ​O(\|V^2\|)      |
| Add Edge      | O(1)             | O(1)             |
| Remove Vertex | O(\|V\| + \|E\|) | O(\|V^2\|)       |
| Remove Edge   | O(\|E\|)         | O(1)             |
| Query         | O(\|V\| + \|E\|) | O(1)             |
| Storage       | O(\|V\| + \|E\|) | ​O(\|V^2\|)      |

- Adjacency List

  - Can take up less space (in sparse graphs)
  - Faster to iterate over all edges
  - Can be slower to lookup specific edge

- Adjacency Matrix

  - Takes up more space (in sparse graphs)
  - Slower to iterate over all edges
  - Faster to lookup specific edge
