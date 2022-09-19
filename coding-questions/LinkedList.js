let Node = function (element) {
    this.element = element;
    this.next = null;
};
class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    append(element) {
        let node = new Node(element);

        // 如果当前链表为空，则将head指向node
        if (this.head === null) this.head = node;
        else {
            // 否则，找到链表尾部的元素，然后添加新元素
            let current = this.getElementAt(this.length - 1);
            current.next = node;
        }

        this.length++;
    }

    insert(position, element) {
        // position不能超出边界值
        if (position < 0 || position > this.length) return false;

        let node = new Node(element);

        if (position === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let previous = this.getElementAt(position - 1);
            node.next = previous.next;
            previous.next = node;
        }

        this.length++;
        return true;
    }

    removeAt(position) {
        // position不能超出边界值
        if (position < 0 || position >= this.length) return null;

        let current = this.head;

        if (position === 0) this.head = current.next;
        else {
            let previous = this.getElementAt(position - 1);
            current = previous.next;
            previous.next = current.next;
        }

        this.length--;
        return current.element;
    }

    remove(element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    }

    indexOf(element) {
        let current = this.head;

        for (let i = 0; i < this.length; i++) {
            if (current.element === element) return i;
            current = current.next;
        }

        return -1;
    }

    getElementAt(position) {
        if (position < 0 || position >= this.length) return null;

        let current = this.head;
        for (let i = 0; i < position; i++) {
            current = current.next;
        }
        return current;
    }

    isEmpty() {
        // return this.head === null;
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    getHead() {
        return this.head;
    }

    clear() {
        this.head = null;
        this.length = 0;
    }

    toString() {
        let current = this.head;
        let s = "";

        while (current) {
            let next = current.next;
            next = next ? next.element : "null";
            s += `[element: ${current.element}, next: ${next}] `;
            current = current.next;
        }

        return s;
    }
}

let linkedList = new LinkedList();
linkedList.append(0);
linkedList.append(1);
linkedList.append(2);
console.log("当前链表内容：");
console.log(linkedList.toString());

linkedList.insert(0, 10);
linkedList.insert(2, 9);
linkedList.insert(5, 8);

console.log("当前链表内容：");
console.log(linkedList.toString());

console.log("删除链表第0，1，3数据：");
console.log(linkedList.removeAt(0));
console.log(linkedList.removeAt(1));
console.log(linkedList.removeAt(3));

console.log("当前链表内容：");
console.log(linkedList.toString());

console.log("查询链表值为0的节点：");
console.log(linkedList.indexOf(0));

console.log("删除链表值为1的节点：");
linkedList.remove(1);

console.log("当前链表内容：");
console.log(linkedList.toString());

console.log("清除链表内容：");
linkedList.clear();
console.log(linkedList.size());