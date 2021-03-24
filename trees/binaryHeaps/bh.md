# WHAT IS A BINARY HEAP?

Binary Heaps are very useful data structures for sorting, and implementing other data structures like priority queues

Binary Heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either being smaller or larger than their children

With just a little bit of math, we can represent heaps using arrays

Very similar to a binary search tree, but with some different rules!

In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes.

![Binary Heaps](https://miro.medium.com/max/3076/1*2XhoV0IYgNlRxQ8jCW1Guw.png)

## Big O

Insertion - O(log n)
Removal - O(log n)
Searching - O(n)

## Rules For Max Binary Heap

- Each parent has at most two child nodes
- The value of each parent node is always greater than its child nodes
- In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

![Max Binary Tree](https://upload.wikimedia.org/wikipedia/commons/3/38/Max-Heap.svg)

## Where are they used?

Binary Heaps are used to implement Priority Queues, which are very commonly used data structures

They are also used quite a bit, with graph traversal algorithms

## Know this!

1. For any index of an array n...

- The left child is stored at 2n + 1
- The right child is at 2n + 2

2. For any child node at index n...

- Its parent is at index Math.floor((n-1)/2)

## Insert

- Push the value into the values property on the heap
- Bubble Up:
  - Create a variable called index which is the length of the values property - 1
  - Create a variable called parentIndex which is the floor of (index-1)/2
  - Keep looping as long as the values element at the parentIndex is less than the values element at the child index
    - Swap the value of the values element at the parentIndex with the value of the element property at the child index
    - Set the index to be the parentIndex, and start over!

## Removing

- Swap the first value in the values property with the last one
- Pop from the values property, so you can return the value at the end.
- Have the new root "sink down" to the correct spot...​
  - Your parent index starts at 0 (the root)
  - Find the index of the left child: 2 \* index + 1 (make sure its not out of bounds)
  - Find the index of the right child: 2\*index + 2 (make sure its not out of bounds)
  - If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
  - The child index you swapped to now becomes the new parent index.
  - Keep looping and swapping
