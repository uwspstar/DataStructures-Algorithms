- https://marian5211.github.io/2018/01/27/%E3%80%90Java%E3%80%91Java%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/

### 错误做法：

```
for(int i = 0, len = list.size(); i < len; i++){
    if(list.get(i) == 1) {
       list.remove(i);
    }
}
```

因为删除了元素，但是未改变迭代的下标，这样当迭代到最后一个的时候就会抛异常。

### 正确做法：

```
for(int i = 0, len = list.size(); i < len; i++){
    if(list.get(i) == 1){
       list.remove(i);
       len--;
       i--;
    }
}
```

### 更好的一个做法

List 接口内部实现了 Iterator 接口，提供开发者一个 iterator()得到当前 list 对象的一个 iterator 对象。所以我们还有一个更好的做法是：

```java
Iterator<Integer> iterator = list.iterator();
while(iterator.hasNext()){
    int i = iterator.next();
    if(i == 1){
        iterator.remove();
    }
}
```
