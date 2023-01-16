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
            if(head.getLink() != null){
                head = head.getLink();
            }
            if(manyItems == 1){
                head.setLink(null);
                head.setData(null);
            }
            manyItems--;
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
            throw new IndexOutOfBoundsException("Index "+ index + "is not allowed. Max index is "+manyItems);
        }else if(index == 0){
            addFront(data);
        }else{
            IntNode curr = head;
            for(int i=0; i<index-1; i++){
                curr = curr.getLink();
            }

            curr.setLink(new IntNode(data, curr.getLink()));
            manyItems++;
            
        }
        return message;
    }

    public Integer showFront(){
        return head.getData();
    }


    public Integer searchNum(int data){
        if(head == null){
            return null;
        }
        if(head != null && head.getData() == data){
            head = head.getLink();
            manyItems--;
            return 0;
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

    public boolean isEmpty(){
        return manyItems == 0;
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
            if(curr == head){
                result += curr.getData();
            }else{
                result +=  ", " + curr.getData();
            }
            
            curr = curr.getLink();
        }

        return result;

    }

    public Integer get(int index){
        if(index < 0){
            throw new IndexOutOfBoundsException("Invalid index" + index + " must be greater than zero."); 
        }
        if(head == null){
            throw new IllegalStateException("Can't get an element from an empty list");
        }else if (index > size()){
            throw new IndexOutOfBoundsException("Invalid index" + index + " max index is " + (size()-1));            
        }else{
            IntNode curr = head;
            for(int i=0; i<index; i++){
                curr = curr.getLink();
            }

            return curr.getData();
        }
    }
}



