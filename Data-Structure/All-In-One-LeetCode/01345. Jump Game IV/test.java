//1345. Jump Game IV (Hard)

class Solution {
    public int minJumps(int[] arr) {
        if (arr.length == 1) return arr.length - 1;
        if (arr[0] == arr[arr.length - 1] || arr.length == 2) return 1;
        if (arr[0] == arr[arr.length - 2]) return 2;
        
        Queue<Integer> q = new LinkedList<>();
        
        HashMap<Integer, List<Integer>> ind = new HashMap<>();
        
        
        for (int i = 0; i < arr.length; i++) {
            if (!ind.containsKey(arr[i])) {
                ind.put(arr[i], new ArrayList<>());
            }
            ind.get(arr[i]).add(i);
        }
        
        q.add(arr.length - 1);
        boolean[] seen = new boolean[arr.length];
        int level = 0;
        while (!q.isEmpty()) {
            
            int sz = q.size();
            for (int s = 0; s < sz; s++) {
                int state = q.poll();

                if (state == 0) return level;

                if (state + 1 < arr.length && !seen[state + 1]) {
                    seen[state + 1] = true;
                    if (state + 1 == 0) return level + 1;
                    
                    q.add(state + 1);
                }
                
                if (state - 1 >= 0 && !seen[state - 1]) {
                    seen[state - 1] = true;
                    if (state - 1 == 0) return level + 1;
                    q.add(state - 1);
                }


                List<Integer> same = ind.get(arr[state]);     
                for (int i : same) {
                    if (i == state || seen[i]) continue;
                    seen[i] = true;
                    if (i == 0) return level + 1;
                    q.add(i);
                }
            }
            level++;
        }
        
        
        return -1;
    }
}