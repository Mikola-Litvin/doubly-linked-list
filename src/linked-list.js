const Node = require('./node');

class LinkedList {
    constructor() {

        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {

        let node = new Node(data);

        if (this.length > 0) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        else {
            this._head = node;
            this._tail = node;
        }

        this.length++;

        return this;
    }

    head() {

        if (this._head != null) {
            return this._head.data;
        }
        else {
            return null;
        }
    }

    tail() {

        if (this._tail != null) {
            return this._tail.data;
        }
        else {
            return null;
        }
    }

    at(index) {

        let currentNode = this._head,
            position = 0;

        while (position < index) {

            currentNode = currentNode.next;
            position++;
        }

        return currentNode.data;
    }

    insertAt(index, data) {

        if (this.length == 0) {

            this.append(data);
        }
        else {

            let currentNode = this._head,
                node = new Node(data),
                position = 0;

            while (position < index) {

                currentNode = currentNode.next;
                position++;
            }

            if (index == 0) {
                this._head = node; 
            }
            else {
                node.prev = currentNode.prev;
                currentNode.prev.next = node;
            }
            
            node.next = currentNode;
            currentNode.prev = node;
            this.length++;

            return this;
        }
    }

    isEmpty() {

        if (this.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    clear() {

        this.length = 0;
        this._head = null;
        this._tail = null;
        return this;
    }

    deleteAt(index) {

        let currentNode = this._head,
        position = 0;

        while (position < index) {

            currentNode = currentNode.next;
            position++;
        }
        
        if (index == 0) {
            this._head = currentNode.next;
        }
        else if (index == this.length - 1) {
            currentNode.prev.next = null;
            this._tail = currentNode.prev; 
        }
        else {
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
        }

        this.length--;

        return this;
    }

    reverse() {

        if (this.length < 2) {

            return this;
        }
        else {

            let currentNode = this._head,
                position = 0,
                rev;
    
            while (position <= this.length - 1) {
    
                rev = currentNode.prev;
                currentNode.prev = currentNode.next;
                currentNode.next = rev;
                currentNode = currentNode.prev;
                position++;
            }

            rev = this._head;
            this._head = this._tail;
            this._tail = rev;

            return this;
        }
    }

    indexOf(data) {
        
        let currentNode = this._head,
            position = 0;

        while (position <= this.length - 1) {

            if (currentNode.data == data) {

                return position;
            }
            currentNode = currentNode.next;
            position++;
        }

        return -1;
    }
}

module.exports = LinkedList;