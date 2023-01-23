public class ArrayQueueTest {
    public static void main(String[] args) {
        if(!testQueue()){
            System.out.println("Test Failed! :(");
        }else{
            System.out.println("Test Passed! :)");
        }
    }

    private static IntArrayQueue prepareArrayQueue(){
        IntArrayQueue list = new IntArrayQueue();
        list.enqueue(1);
        list.enqueue(2);
        list.enqueue(3);
        list.enqueue(4);
        list.enqueue(5);

        return list;

    }

    public static boolean testQueue(){
        IntArrayQueue list = prepareArrayQueue();

        list.enqueue(6);
        if(list.showlast() != 6){
            return false;
        }

        if(list.dequeue() != 1){
            return false;
        }

        if(list.peek() != 2){
            return false;
        }

        list.clear();
        if(!list.isEmpty()){
            return false;
        }

        
        return true;
    }
}
