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

    public boolean hasLeftchild(){
        return leftchild != null;
    }
    public boolean hasRightchild(){
        return rightchild != null;
    }

    public IntBSTNode getLeftchild() {
        return leftchild;
    }

    public void setLeftchild(IntBSTNode leftchild) {
        this.leftchild = leftchild;
    }

    public IntBSTNode getRightchild() {
        return rightchild;
    }

    public void setRightchild(IntBSTNode rightchild) {
        this.rightchild = rightchild;
    }

    public Integer getValue() {
        return value;
    }
    
    public void setValue(Integer value) {
        this.value = value;
    }
    
     
}
