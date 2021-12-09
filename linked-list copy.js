/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

/** push(val): add new value to end of list. */
const push = (headRef, newData) => {
  let newNode = new Node();
  newNode.data = newData
  newNode.next = (headRef);
  (headRef) = newNode;
  return headRef
}



/** unshift(val): add new value to start of list. */

const unshift = (val) => {

}

/** pop(): return & remove last item. */

const pop = () => {

}

/** shift(): return & remove first item. */

const shift = () => {

}

/** getAt(idx): get val at idx. */

const getAt = (idx) => {

}

/** setAt(idx, val): set val at idx to val */

const setAt = (idx, val) => {

}

/** insertAt(idx, val): add node w/val before idx. */

const insertAt = (idx, val) => {

}

/** removeAt(idx): return & remove item at idx, */

const removeAt = (idx) => {

}

/** average(): return an average of all values in the list */

const average = (head) => {
  // if head = null
  if (head === null)
    return -1;

  let count = 0; // Initialize count
  let sum = 0;
  let avg = 0.0;
  let current = head; // Initialize current

  while (current !== null) {
    count++;
    sum += current.data;
    current = current.next;
  }
  // calculate average
  avg = sum / count;

  return avg;
}

// Driver Code
let head = null;


module.exports = LinkedList;
