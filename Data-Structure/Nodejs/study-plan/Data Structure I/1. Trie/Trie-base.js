class TreeNode {
    constructor(val) {
        this.val = val
        this.isWord = false;
        this.children = {}
    }
}

class Trie {
    constructor() {
        this.root = new TreeNode();
    }

    insert(word) {

        // we start at the root
        let curNode = this.root;

        let arr = word.split('');

        // for every character in the word
        for (let i = 0; i < arr.length; i++) {
            let val = arr[i];

            // 没有子节点的话 以当前字符为val的子节点
            if (!curNode.children[val]) {
                curNode.children[val] = new TreeNode(val);
            }

            // proceed to the next depth in the trie.
            curNode = curNode.children[val];

            // 遍历到最后一个字符所对应的节点，将这个节点的isWord属性设为true。
            if (i === arr.length - 1) {
                curNode.isWord = true;
            }
        }
    }

    search(word) {
        let curNode = this.root;

        let arr = word.split('');

        for (let i = 0; i < word.length; i++) {
            if (!curNode.children[arr[i]]) {
                return false;
            }
            curNode = curNode.children[arr[i]];
        }

        return curNode.isWord;
    };

    searchPrefix(prefix) {
        let curNode = this.root;
        let arr = prefix.split('');

        for (let i = 0; i < arr.length; i++) {
            // 凡是查找的单词的中间某个字符，没有找到节点的，返回false
            if (!curNode.children[arr[i]]) {
                return false;
            }
            curNode = curNode.children[arr[i]]
        }
        // 每个字符都找到了节点，返回true
        return true
    };
};