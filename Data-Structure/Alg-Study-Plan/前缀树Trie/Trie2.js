class TrieNode {
    constructor(char) {
        this.char = char;
        this.children = [];
        for (let i = 0; i < 26; i++) {
            this.children[i] = null;
        }
        this.isEnd = false;
    }

    markEndLeaf() {
        this.isEnd = true;
    }

    unMarkEndLeaf() {
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode('');
    }

    getIndex(char) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    insert(word) {
        if (word === null) return;
        word = word.toLowerCase();
        let curNode = this.root;
        let index = 0;
        for (let i = 0; i < word.length; i++) {
            index = this.getIndex(word[i]);
            if (curNode.children[index] === null) {
                curNode.children[index] = new TrieNode(word[i]);
            }
            curNode = curNode.children[index];
        }
        curNode.markEndLeaf();
    }
}