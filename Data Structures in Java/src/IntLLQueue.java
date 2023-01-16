public class IntLLQueue {
    private IntLinkedList data;

    /*Linked list implementation of a queue where the front of the Linked List is the front of the que */
    public IntLLQueue(){
        data = new IntLinkedList();
    }

    public boolean isEmpty(){
        return data.isEmpty();
    }

    public void clear(){
        data = new IntLinkedList();
    }

    public boolean endQueue(Integer el){
        return data.add(el);
    }

    public Integer dequeue(){
        return data.removeFront();
    }

    public Integer peek(){
        return data.showFront();
    }

    
}
