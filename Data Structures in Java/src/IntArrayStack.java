public class IntArrayStack {
    private static final int DEFAULT_CAPACITY = 10;
 
    private Integer[] data;
    private int top;
 
    public IntArrayStack() {
       data = new Integer[DEFAULT_CAPACITY];
       top = -1;
    }
 
    public void push(Integer el) {
       if (top + 1 == data.length) {
          Integer[] temp = new Integer[data.length * 2];
          for (int i = 0; i < data.length; i++) {
             temp[i] = data[i];
          }
          data = temp;
       }
 
       data[++top] = el;
    }
 
    public Integer pop() {
       if (top < 0) {
          return null;
       } else {
          Integer delnum = data[top];
          data[top] = null;
          top--;
          return delnum;
       }
    }
 
    public boolean empty() {
       return top < 0;
    }
 
    public Integer peek() {
       if (top < 0) {
          return null;
       } else {
          return data[top];
       }
    }

    public Integer search(Integer el) {
        for (int i = 0; i < data.length; i++) {
            if(data[i] == el){
                return i;
            }
         }
        return null;
     }

     public String print() {
        String result = "";
        if(top > 0){
            for (int i = 0; i < top+1; i++) {
                if(i == 0){
                    result += data[i];
                }else{
                    result += ", " + data[i];
                } 
            }
        }
        return result;
     }
 
 }