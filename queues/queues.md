# What is a Queue?

A FIFO data structure!

- Queues are a FIFO data structure, all elements are first in first out.
- Queues are useful for processing tasks and are foundational for more complex data structures
- Insertion and Removal can be done in O(1)

![Queue](http://ankitsharmablogs.com/wp-content/uploads/2017/12/Queue.png)

## Big O

| Methods   |          |
| --------- | -------- |
| Insertion | **O(1)** |
| Removal   | **O(1)** |
| Searching | **O(N)** |
| Access    | **O(N)** |

## Where are Queues used?

- Background tasks
- Uploading resources
- Printing / Task processing

# Enqueue

#### Adding to the beginning of the Queue!

Remember, queues are a FIFO data structure

- This function accepts some value
- Create a new node using that value passed to the function
- If there are no nodes in the queue, set this node to be the first and last property of the queue
- Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
- Increment the size of the queue by 1

## Dequeue

#### Removing from the beginning of the Queue!

- If there is no first property, just return null
- Store the first property in a variable
- See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
- If there is more than 1 node, set the first property to be the next property of first
- Decrement the size by 1
- Return the value of the node dequeued
