public class IntLLStack {
    //create linked list and call the linked list methods
    private IntLinkedList list;

    public IntLLStack() {
        list = new IntLinkedList();
    }

    public boolean push(Integer el){
        list.addFront(el);
        return true;
    }

    public Integer pop(){
        list.removeFront();
        return list.showFront();
    }

    public Integer peek(){
        return list.showFront();
        
    }

    public Integer search(Integer el){
        for(int i=0; i<list.size(); i++){
            if(list.get(i) == el){
                return i;
            }
        }

        return null;
        
    }

    public boolean empty(){
        return list.isEmpty();
        
    }

    public String toPrint(){
        return list.toString();
    }

}
