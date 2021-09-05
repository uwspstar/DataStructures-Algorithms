//：https://blog.csdn.net/wopelo/article/details/71081818

{
    //节点类
    function node(data, left, right) {
        this.data = data;
        this.left = left;//储存左节点
        this.right = right;//储存右节点
        this.show = show;
    }

    function show() {
        return this.data;
    }

    //二叉查找树类
    function BST() {
        this.root = null;
        this.insert = insert;
        this.inOrder = inOrder;//中序遍历
        this.perOrder = perOrder;//先序遍历
        this.posOrder = posOrder;//后序遍历
        this.getMax = getMax;//获得值最大的节点
        this.getMin = getMin;//获得值最小的节点
        this.find = findData;//查找节点
        this.remove = removeSurface;//删除节点
    }

    function insert(data) {
        data -= 0;
        var n = new node(data, null, null);
        if (this.root == null) {
            this.root = n;
        } else {
            var current = this.root;
            var parent;
            for (; ;) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current == null) {
                        parent.left = n;
                        break;
                    }
                } else {
                    current = current.right;
                    if (current == null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }

    //中序遍历
    function inOrder(node = this.root) {
        if (node != null) {
            inOrder(node.left);
            console.log(node.show() + " ");
            inOrder(node.right);
        }
    }
    //先序遍历
    function perOrder(node = this.root) {
        if (node != null) {
            console.log(node.show() + " ");
            perOrder(node.left);
            perOrder(node.right);
        }
    }
    //后序遍历
    function posOrder(node = this.root) {
        if (node != null) {
            posOrder(node.left);
            posOrder(node.right);
            console.log(node.show());
        }
    }

    function getMax(node = this.root) {
        if (node.right == null) {
            return node;
        } else {
            return getMax(node.right);
        }
    }

    function getMin(node = this.root) {
        if (node.left == null) {
            return node;
        } else {
            return getMin(node.left);
        }
    }

    function findData(data, current = this.root) {
        if (data == current.data) {
            return current;
        } else if (data < current.data) {
            if (current.left == null) {
                return false;
            } else {
                current = current.left;
                return findData(data, current);
            }
        } else if (data > current.data) {
            if (current.right == null) {
                return false;
            } else {
                current = current.right;
                return findData(data, current);
            }
        }
    }

    function removeSurface(data) {
        this.root = removeNode(this.root, data);
    }

    function removeNode(node, data) {
        if (node == null) {  //当树为空树时
            return null;
        } else if (node.data == data) { //当当前节点的值为data时
            if (node.left == null && node.right == null) { //当当前节点为叶子时
                return null;
            } else if (node.left == null) { //左子树为空
                return node.right;
            } else if (node.right == null) { //右子树为空
                return node.left;
            } else {
                var tempNode = getMin(node.right);
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            }
        } else if (data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
        } else {
            node.right = removeNode(node.right, data);
            return node;
        }
    }

}