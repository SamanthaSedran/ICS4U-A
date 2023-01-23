public class TestIntBST {
    public static void main(String[] args) {
        if(!testBST()){
            System.out.println("Test Failed! :(");
        }else{
            System.out.println("Test Passed! :)");
        }

        sortOrderTraversal();


    }

    public static IntBST prepareBST(){
        IntBST bst = new IntBST();

        bst.add(6);
        bst.add(8);
        bst.add(3);
        bst.add(1);
        bst.add(13);
        bst.add(9);
        bst.add(7);
        bst.add(11);

        return bst;
    }

    private static boolean testBST() {
        IntBST bst = prepareBST();
        
        if(bst.add(5).getValue() != 5){
            return false;
        }

        if(bst.find(5).getValue() != 5){
            return false;
        }

        bst.remove(9);
        if(bst.find(9) != null){
            return false;
        }

        return true;
    }

    public static void sortOrderTraversal(){
        IntBST bst = prepareBST();

        bst.preOrderPrintTraversal();
        System.out.println();
        bst.inOrderPrintTraversal();
        System.out.println();
        bst.postOrderPrintTraversal();
    }


}
