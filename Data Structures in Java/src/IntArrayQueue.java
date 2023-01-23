/**
 * Int Array Queue
 */

public class IntArrayQueue {

    private static final int DEFAULT_CAPACITY = 10;
    private int top;
    private Integer[] data;
    
    public IntArrayQueue(){
        data = new Integer[DEFAULT_CAPACITY];
        top = -1;
    }

    public boolean enqueue(Integer el){
        if (top + 1 == data.length) {
          Integer[] temp = new Integer[data.length * 2];
          for (int i = 0; i < data.length; i++) {
             temp[i] = data[i];
          }
          data = temp;
       }
 
       data[++top] = el;

       return true;
    }

    public Integer dequeue(){
        Integer removenum;
        if(data.length > 0){
            removenum = data[0];
            for (int i = 1; i < data.length; i++) {
                data[i-1] = data[i];
            }

        }else{
            return null;
        }

       return removenum;
    }

    public Integer peek(){
        if(data.length > 0){
            return data[0];

        }else{
            return null;
        }
    }

    public Integer showlast(){
        if(!isEmpty()){
            return data[top];
        }else{
            return null;
        }
        
    }

    public void clear(){
        data = new Integer[DEFAULT_CAPACITY];
        top = -1;
    }

    public boolean isEmpty(){
        if(top < 0){
            return true;
        }else{
            return false;
        }
    }

    public String print(){
        String result = "";
        if(top < 0){
            return result;
        }
        result += data[0];
        for (int i = 1; i < top+1; i++) {
            result += ", " + data[i];
        }

        return result;
    }
}
