public class IntBSTNode {
    private IntBSTNode leftchild;
    private IntBSTNode rightchild;
    private Integer value;

    public IntBSTNode(IntBSTNode leftchild, IntBSTNode rightchild, Integer value) {
        this.leftchild = leftchild;
        this.rightchild = rightchild;
        this.value = value;
    }

    public IntBSTNode(Integer value) {
        this.value = value;
    }

    public boolean hasLeftChild(){
        return leftchild != null;
    }
    public boolean hasRightChild(){
        return rightchild != null;
    }

    public IntBSTNode getLeftChild() {
        return leftchild;
    }

    public void setLeftChild(IntBSTNode leftchild) {
        this.leftchild = leftchild;
    }

    public IntBSTNode getRightChild() {
        return rightchild;
    }

    public void setRightChild(IntBSTNode rightchild) {
        this.rightchild = rightchild;
    }

    public Integer getValue() {
        return value;
    }
    
    public void setValue(Integer value) {
        this.value = value;
    }
    
     
}
