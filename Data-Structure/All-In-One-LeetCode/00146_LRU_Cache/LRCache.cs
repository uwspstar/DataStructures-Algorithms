namespace Leetcode
{
    using System.Collections.Generic;

    public class LRUCache
    {
        public class DoubleLinkedList
        {
            public int Key { get; set; }
            public int Value { get; set; }
            public DoubleLinkedList Prev { get; set; }
            public DoubleLinkedList Next { get; set; }
        }
        private readonly int capacity;
        private readonly IDictionary<int, DoubleLinkedList> hashMap;
        private readonly DoubleLinkedList dummyHead;
        private readonly DoubleLinkedList dummyTail;
        private int size;

        public LRUCache(int capacity)
        {
            this.size = 0;
            this.capacity = capacity;
            this.hashMap = new Dictionary<int, DoubleLinkedList>();
            this.dummyHead = new DoubleLinkedList();
            this.dummyTail = new DoubleLinkedList();

            dummyHead.Next = dummyTail;
            dummyTail.Prev = dummyHead;

        }

        public int Get(int key)
        {
            if (!hashMap.ContainsKey(key)) return -1;
            var node = hashMap[key]; //O(1) find the node
            MoveNodeToHead(node);
            return node.Value;
        }

        public void Put(int key, int value)
        {
            if (hashMap.ContainsKey(key))
            {
                var node = hashMap[key];
                node.Value = value;
                MoveNodeToHead(node);
                return;
            }

            var newNode = new DoubleLinkedList()
            {
                Key = key,
                Value = value
            };

            hashMap[key] = newNode;
            AddNodeToHead(newNode);
            size++;

            if (size > capacity)
            {
                var node = RemoveLastestNode();
                hashMap.Remove(node.Key);
                size--;
            }

        }
        private void MoveNodeToHead(DoubleLinkedList node)
        {
            RemoveNode(node);
            AddNodeToHead(node);
        }

        private void RemoveNode(DoubleLinkedList node)
        {
            var prev = node.Prev;
            var next = node.Next;
            prev.Next = next;
            next.Prev = prev;
        }

        private void AddNodeToHead(DoubleLinkedList node)
        {
            var next = this.dummyHead.Next;

            node.Next = next;
            next.Prev = node;

            this.dummyHead.Next = node;
            node.Prev = dummyHead;
        }

        private DoubleLinkedList RemoveLastestNode()
        {
            var last = this.dummyTail.Prev;
            RemoveNode(last);
            return last;
        }
    }
}