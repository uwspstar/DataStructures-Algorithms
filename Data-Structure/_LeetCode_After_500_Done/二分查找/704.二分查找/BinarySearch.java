class BinarySearch {
    private int count;

    public int getCount() {
        return count;
    }

    public int count() {
        count += 1;
        return count;
    }

    public static void main(String[] args) {
        BinarySearch c1 = new BinarySearch();
        c1.count();
        System.out.println("c1 = " + c1.getCount());
        BinarySearch c2 = c1;
        c2.count(); // did not change c1

        System.out.println("c1 address = " + c1); //BinarySearch@18b4aac2 @18b4aac2
        System.out.println("c2 address = " + c2); //BinarySearch@18b4aac2
        System.out.println("c1 count = " + c1.getCount()); // 3
        System.out.println("c2 count = " + c2.getCount()); // 3
    }
}