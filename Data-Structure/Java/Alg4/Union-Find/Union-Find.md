# ALGORITHM 1.5 Union-find implementation

```java
  public class UF
  {
     private int[] id;     // access to component id (site indexed)
     private int count;    // number of components
     public UF(int N)
     {  // Initialize component id array.
        count = N;
        id = new int[N];
        for (int i = 0; i < N; i++)
            id[i] = i;
        }
     public int count()
     {  return count;  }
     public boolean connected(int p, int q)
     {  return find(p) == find(q);  }
     public int  find(int p)
     public void union(int p, int q)
    // See page 222 (quick-find),page 224 (quick-union) andpage 228 (weighted).
     public static void main(String[] args)
     {  // Solve dynamic connectivity problem on StdIn.

        int N = StdIn.readInt();
        UF uf = new UF(N);
        while (!StdIn.isEmpty())
        {
           int p = StdIn.readInt();
           int q = StdIn.readInt();
           if (uf.connected(p, q)) continue;  // Ignore if connected.
           uf.union(p, q);                    // Combine components
           StdOut.println(p + " " + q);       //   and print connection.
}
        StdOut.println(uf.count() + " components");
     }
}
```

- Our UF implementations are based on this code, which maintains an array of integers id[] such that the find() method returns the same integer for every site in each connected component. The union() method must maintain this invariant.
