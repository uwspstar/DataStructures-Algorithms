//211. Design Add and Search Words Data Structure

var WordDictionary = function () {
    this.set = new Set();
    this.map = new Map();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    if (!this.set.has(word)) {
        this.set.add(word);
        let key = word.length;
        let tmp = this.map.has(key) ? this.map.get(key) : [];
        tmp.push(word);
        this.map.set(word.length, tmp);
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    if (this.set.has(word)) return true;
    if (this.map.has(word.length)) {
        let words = this.map.get(word.length);
        for (w of words) {
            let match = true;
            for (let j = 0; j < w.length; j++) {
                if (word[j] !== "." && word[j] !== w[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return true;
            }
        }
    }
    return false;

};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */