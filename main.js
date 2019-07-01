function LinkedList() {
    this.head = null
    this.tail = null
}

function Node(prev, next, value) {
    this.prev = prev
    this.next = next
    this.value = value
}

LinkedList.prototype.insertToHead = function(value) {
    const newNode = new Node(null, this.head, value)
    if (this.head) this.head.prev = newNode
    else this.tail = newNode
    this.head = newNode
}

LinkedList.prototype.insertToTail = function(value) {
    const newNode = new Node(this.tail, null, value)
    if (this.tail) this.tail.next = newNode
    else this.head = newNode
    this.tail = newNode
}

LinkedList.prototype.removeHead = function() {
    if (!this.head) return null

    const val = this.head.value
    this.head = this.head.next 

    if (this.head) this.head.prev = null
    else this.tail = null

    return val
} 

LinkedList.prototype.removeTail = function() {
    if (!this.tail) return null

    const val = this.tail.value
    this.tail = this.tail.prev 

    if (this.tail) this.tail.next = null
    else this.head = null

    return val
} 

// make search key/value to lower case if it's a string
const getLow = searchKey => {
    switch (typeof searchKey) {
        case 'string': 
            return searchKey.toLowerCase()
        case 'number': 
           return searchKey
    }
}

LinkedList.prototype.search = function(value) {
    // make the current head as initial counter for the while loop
    let currentNode = this.head

    // convert search value to lower case 
    const searchValue = getLow(value)
    while (currentNode) {
        // convert current node value to lower case
        const currentNodeVal = getLow(currentNode.value)
        if (currentNodeVal === searchValue) {
            return `We've found: "${currentNode.value}"`
        } else {
            // continue iteration to next node
            currentNode = currentNode.next
        }
    }
    return `Cannot find: "${value}".`
}

const ll = new LinkedList
ll.insertToHead('hello') // tail
ll.insertToHead('world') // new head
ll.insertToTail('mario')

ll.removeTail()

console.log(ll)
