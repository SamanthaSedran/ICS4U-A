public class IntBST {
    private IntBSTNode root;

    public IntBST(){
        this.root = null;

    }

    public IntBSTNode add(Integer val){
        return addRecursive(root, val);
    }

    /**
     * 
     * @param root - root of the subtree we are adding val to
     * @param val - the interger we are adding to the BST 
     * @return - reference to the IntBSTNode we inserted
     */

    public IntBSTNode addRecursive(IntBSTNode root, Integer val){
        if(val < root.getValue()){
            if(root.hasLeftchild()){
                return addRecursive(root.getLeftchild(), val);

            }else{
                IntBSTNode child = new IntBSTNode(val);
                root.setLeftchild(child);
                return child;
            }
        }else if(val > root.getValue()){
            if(root.hasRightchild()){
                return addRecursive(root.getRightchild(), val);
            }else{
                IntBSTNode child = new IntBSTNode(val);
                root.setRightchild(child);
                return child;
            }
        }else{
            return root;
        }
    }
}
