# Binary Search Tree

![Binary Search Tree](http://www.questionsolves.com/Website-Content/image/BinaryTree10.jpg)

- Every parent node has at most two children
- Every node to the left of a parent node is always less than the parent
- Every node to the right of a parent node is always greater than the parent

## Big O

Insertion\* - O(log n)

Searching\* - O(log n)

Conditions apply; not guaranteed.

## Inserting a node

- Create a new node
- Starting at the root
  - Check if there is a root, if not - the root now becomes that new node!
  - If there is a root, check if the value of the new node is greater than or less than the value of the root
  - If it is greater
    - Check to see if there is a node to the right
      - If there is, move to that node and repeat these steps
      - If there is not, add that node as the right property
  - If it is less
    - Check to see if there is a node to the left
      - If there is, move to that node and repeat these steps
      - If there is not, add that node as the left property

## Finding a node

- Starting at the root
  - Check if there is a root, if not - we're done searching!
  - If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
  - If not, check to see if the value is greater than or less than the value of the root
  - If it is greater
    - Check to see if there is a node to the right
      - If there is, move to that node and repeat these steps
      - If there is not, we're done searching!
  - If it is less
    - Check to see if there is a node to the left
      - If there is, move to that node and repeat these steps
      - If there is not, we're done searching!

## Removing a node

### With no children

- Find the parent of the node that needs to be removed and the node that needs to be removed
- If the value we are removing is greater than the parent node
  - Set the right property of the parent to be null
- If the value we are removing is less than the parent node​
  - Set the left property of the parent to be null
- Otherwise, the node we are removing has to be the root, so set the root to be null

### With 1 child

- Find the parent of the node that needs to be removed and the node that needs to be removed
- See if the child of the node to be removed is on the right side or the left side
- If the value we are removing is greater than the parent node​​
  - Set the right property of the parent to be the child
- If the value we are removing is less than the parent node​
  - Set the left property of the parent to be the child
- Otherwise, set the root property of the tree to be the child

### With 2 children

- Find the parent of the node that needs to be removed and the node that needs to be removed
- Find the predecessor node and store that in a variable
- Set the left property of the predecessor node to be the left property of the node that is being removed
- If the value we are removing is greater than the parent node​​
  - Set the right property of the parent to be the right property of the node to be removed
- If the value we are removing is less than the parent node​
  - Set the left property of the parent to be the right property of the node to be removed
- Otherwise, set the root of the tree to be the right property of the node to be removed
