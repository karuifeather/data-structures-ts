# What is a Stack?

A LIFO data structure!

The last element added to the stack will be the first element removed from the stack

![Stack using SLL](http://tekslate.com/wp-content/uploads/2014/12/442-460x432.png)

## Big O

| Method    |          |
| --------- | -------- |
| Insertion | **O(1)** |
| Removal   | **O(1)** |
| Searching | **O(N)** |
| Access    | **O(N)** |

## Where are stacks used?

- Managing function invocations
- Undo / Redo
- Routing (the history object) is treated like a stack!

## Pushing

#### Add a value to the top of the stack!

- The function should accept a value
- Create a new node with that value
- If there are no nodes in the stack, set the first and last property to be the newly created node
- If there is at least one node, create a variable that stores the current first property on the stack
- Reset the first property to be the newly created node
- Set the next property on the node to be the previously created variable
- Increment the size of the stack by 1

## Pop

#### Remove a value from the top of the stack!

- If there are no nodes in the stack, return null
- Create a temporary variable to store the first property on the stack
- If there is only 1 node, set the first and last property to be null
- If there is more than one node, set the first property to be the next property on the current first
- Decrement the size by 1
- Return the value of the node removed
