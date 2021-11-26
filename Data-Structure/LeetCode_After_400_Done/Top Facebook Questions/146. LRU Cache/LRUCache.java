public class LRUCache {
    public LRUCache(int capacity) {
    }

    public class DoubleLinkedList {
        public Node head;
        public Node tail;
        public int size = 0;

        public DoubleLinkedList() {
            this.head = null;
            this.tail = null;
        }

        public void addFirst(Node node) {
            if (this.head == null) {
                this.head = node;
                this.tail = node;
            } else {
                Node n = this.head;
                n.prev = node;
                node.next = n;
                this.head = node;
            }
            size++;
        }

        public void remove(Node node) {
            if (this.head == node && this.tail == node) {
                this.head = null;
                this.tail = null;
            } else if (this.tail == node) {
                node.prve.next = null;
                this.tail = node.prev;
            } else if (this.head == node) {
                node.next.prev = null;
                this.head = node.next;
            }
        }
    }

    public class Node {
        public int key;
        public int val;
        public Node prev;
        public Node next;

        public Node(int key, int val) {
            this.key = key;
            this.val = val;
        }
    }
}