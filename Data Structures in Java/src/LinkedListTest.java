public class LinkedListTest {
    public static void main(String[] args) {
        testAddNodes();
        //testRemoveNodes();;
    }

    private static void testAddNodes(){
        IntLinkedList list = new IntLinkedList();

        list.add(1);
        list.add(2);
        list.add(3);
        System.out.println(list);

        list.addFront(4);
        list.addFront(5);
        System.out.println(list);

        list.add(1,6);
        System.out.println(list);

        list.add(0,7);
        System.out.println(list);
        list.add(list.size(), 8);
        System.out.println(list);
    }

    private static void testRemoveNodes(){
        IntLinkedList list = new IntLinkedList();
        list.remove(6);

        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        System.out.println(list);

        list.remove(3);
        System.out.println(list);
        list.remove(1);
        list.remove(5);
        System.out.println(list);
        list.remove(23);
        System.out.println(list);

        
    }
}
