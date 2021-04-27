class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.previous=null;
    }
}

class LinkedList{
    constructor(head){
        this.head=head;
    }
    add(node){
        const newNode = new Node(node);
        let current = this.head;
        while(current.next != null){
            current=current.next;
        }
        current.next = newNode;
    }
}

const head = new Node(1500);
const mBond = new LinkedList(head);
mBond.add(29)
mBond.add(9)
mBond.add(19)
mBond.add(22)
// console.log(mBond);
console.log(JSON.stringify(mBond))