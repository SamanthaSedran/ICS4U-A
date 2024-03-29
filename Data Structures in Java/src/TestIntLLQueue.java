public class TestIntLLQueue {
    public static void main(String[] args) {
        if(!testQueue()){
            System.out.println("Test Failed! :(");
        }else{
            System.out.println("Test Passed! :)");
        }
    }

    private static IntLLQueue prepareLLQueue(){
        IntLLQueue list = new IntLLQueue();
        list.endQueue(1);
        list.endQueue(2);
        list.endQueue(3);
        list.endQueue(4);
        list.endQueue(5);

        return list;

    }

    public static boolean testQueue(){
        IntLLQueue list = prepareLLQueue();

        if(!list.endQueue(6)){
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
