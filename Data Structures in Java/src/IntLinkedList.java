public class IntLinkedList {

    private IntNode head;
    private int manyItems;

    public IntLinkedList() {
        this.head = null;
    }

    public boolean add(Integer data) {
        IntNode temp = new IntNode(data);

        if(head == null){
            head = temp;
            
        }else{
           IntNode curr = head;
           while(curr.getLink() != null){ 
            curr = curr.getLink();
           }
            curr.setLink(temp);
        }
        manyItems++;

        return true;
    }

    public Integer removeFront(){
        Integer removenum;
        if(head == null){
            return null;
        }else{
            removenum = head.getData();
            head = head.getLink();
            return removenum;
        }

    }

    public boolean addFront(Integer data){
        head = new IntNode(data, head);
        manyItems++;
    
        return true;
    }

    public String add(int index, Integer data){
        String message = "";
        if (index > manyItems){
            message = "bad";
            throw new IndexOutOfBoundsException("Index "+ index + "is not allowed. Max index is "+manyItems);
        }else if(index == 0){
            addFront(data);
            message = "front bad";
        }else{
            IntNode curr = head;
            for(int i=0; i<index-1; i++){
                curr = curr.getLink();
            }

            curr.setLink(new IntNode(data, curr.getLink()));
            message = "worked";
            manyItems++;
            
        }
        return message;
    }

    public boolean isEmpty(){
        return head == null;
    }
    

    public Integer remove(Integer data){
        if(head == null){
            return null;
        }
        if(head != null && head.getData() == data){
            head = head.getLink();
            manyItems--;
            return data;
        }else{
            IntNode curr = head;
            while(curr.getLink() != null && curr.getLink().getData() != data){
                curr = curr.getLink();
            }

            if(curr.getLink() != null){
            curr.setLink(curr.getLink().getLink());
            manyItems--;
            return data;
            }
                return null;
            
        }
    }

    public int size(){
        return manyItems;
    }

    public String print(){
        IntNode curr = head;
        String list = "";

        if(isEmpty()){
            list = "Empty List!";
            return list;
        }

        for(int i=0; i<manyItems; i++){
            if(i == 0){
                list += curr.getData();
            }else{
                list += ", " + curr.getData();
            }
            curr = curr.getLink();
        }
        return list;
    }

    public String toString(){ //we're using inheritance to overwrite this to string
        IntNode curr = head;
        String result = "";

        if(isEmpty()){
            result = "Empty List!";
            return result;
        }

        while(curr != null){
            result += curr.getData() + ", ";
            curr = curr.getLink();
        }

        return result;

    }
}



