# So, HASH TABLE, we finally meet huh?

(I always thought they were some cool strange DS but apparently I have been using them the entire time. Don't get me wrong, they **are** cool. But I just thought I would get to learn some "new" DS. Anyways, here we go!)

Hash tables are used to store key-value pairs.

They are like arrays, but the keys are not ordered.

Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values!

So, basically:

- Hash tables are collections of key-value pairs
- Hash tables can find values quickly given a key
- Hash tables can add new key-values quickly
- Hash tables store data in a large array, and work by hashing the keys
- A good hash should be fast, distribute keys uniformly, and be deterministic
- Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index
- When in doubt, use a hash table!

## BIG O of HASH TABLES

(on average)

- Insert: O(1)
- Deletion: O(1)
- Access: O(1)

## WHAT MAKES A GOOD HASH?

- Fast (i.e. constant time)
- Doesn't cluster outputs at specific indices, but distributes uniformly
- Deterministic (same input yields same output)

## An example of a Hash function

```typescript
function hash(key: string, arrayLen: number): number {
  let total = 0;
  let PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * PRIME + value) % arrayLen;
  }
  return total;
}
```

## Dealing with Collisions

Even with a large array and a great hash function, collisions are inevitable.

There are many strategies for dealing with collisions, but we'll focus on two:

1. Separate Chaining
2. Linear Probing

### Separate Chaining

With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).

This allows us to store multiple key-value pairs at the same index.

### Linear Probing

With linear probing, when we find a collision, we search through the array to find the next empty slot.

Unlike with separate chaining, this allows us to store a single key-value at each index.

## Set / Get

- set

  - Accepts a key and a value
  - Hashes the key
  - Stores the key-value pair in the hash table array via separate chaining

- get
  - Accepts a key
  - Hashes the key
  - Retrieves the key-value pair in the hash table
  - If the key isn't found, returns undefined

## Keys / Values

- keys

  - Loops through the hash table array and returns an array of keys in the table

- values
  - Loops through the hash table array and returns an array of values in the table
