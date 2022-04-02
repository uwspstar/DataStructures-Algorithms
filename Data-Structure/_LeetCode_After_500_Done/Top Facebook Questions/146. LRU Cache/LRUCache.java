import java.util.HashMap;

public class LRUCache {

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
            this.size++;
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
            } else {
                node.prev.next = node.next;
                node.next.prev = node.prev;
            }
            this.size--;
        }

        public Node removeLast() {
            Node node = tail;
            remove(tail);
            return node;
        }

        public int size() {
            return this.size;
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

    private HashMap<Integer, Node> map;
    private DoubleLinkedList cache;
    private int cap;

    public LRUCache(int capacity) {
        this.cap = capacity;
    }

    public void put (int key, int val){
        Node x = new Node(key, val);

        if (this.map.containsKey(key)) {
            Node node = this.map.get(key);
            this.cache.remove(node);
            this.cache.addFirst(x);
            this.map.put(key, x);
        } else {
            if (this.cap == this.cache.size()){
                Node last = this.cache.removeLast();
                this.map.remove(last.key);
            }

            this.cache.addFirst(x);
            this.map.put(key, x);
        }

    }
    
    public int get (int key) {
        if (!map.containsKey(key))
            return -1;
        int val = map.get(key).val;
        put(key, val);
        return val;
    }

}