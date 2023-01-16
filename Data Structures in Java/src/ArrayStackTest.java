public class ArrayStackTest {
    public static void main(String[] args) {
        if(!testStack()){
            System.out.println("Test Failed! :(");
        }else{
            System.out.println("Test Passed! :)");
        }


    }

    private static IntArrayStack prepareArray(){
        IntArrayStack list = new IntArrayStack();
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);
        list.push(5);

        return list;

    }

    public static boolean testStack(){
        IntArrayStack list = prepareArray();

        list.push(6);
        if(list.search(6) != 5){
            return false;
        }
        
        if(list.pop() != 6){
            return false;
        }

        if(list.peek() != 5){
            return false;
        }

        if(list.empty()){
            return false;
        }

        list.pop();
        list.pop();
        list.pop();
        list.pop();
        list.pop();

        if(!list.empty()){
            return false;
        }

        return true;
    }
}
