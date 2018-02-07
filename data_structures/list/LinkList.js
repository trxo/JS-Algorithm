/**
 * 链表
 * Created by Arnold on 2018/2/7.
 */
function Node(element){
    this.element = element;
    this.next = null;
}

function LinkList() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.findPrev = findPrev;
    this.remove = remove;
    this.display = display;
}
function find(item) {
    var currNode  = this.head;
    while (currNode.element != item){
        currNode = currNode.next;
    }
    return currNode;
}

function findPrev(item) {
    var currNode  = this.head;
    while (!(currNode.element == null) && (currNode.next.element != item)){
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement,item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}
function remove(item) {
   var prevNode = this.findPrev(item);
   if(!(prevNode == null)){
       prevNode.next = prevNode.next.next;
   }
}
function display() {
    var currNode = this.head;
    while (currNode.next != null){
        console.log(currNode.next.element);
        currNode = currNode.next
    }
}

var obj = new LinkList();
obj.insert('hello','head');
obj.insert('world','head');
obj.insert('node','head');
// obj.remove('world');
obj.display();