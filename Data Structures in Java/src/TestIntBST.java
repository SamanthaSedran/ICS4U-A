public class TestIntBST {
    public static void main(String[] args) {
        if(!testBST() || !sortOrderTraversal()){
            System.out.println("Test Failed! :(");
        }else{
            System.out.println("Test Passed! :)");
        }


        


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

    public static boolean sortOrderTraversal(){
        IntBST bst = prepareBST();

        if(!bst.inOrderPrintTraversal().equals(" 1 3 6 7 8 9 11 13")){
            return false;
        }

        if(!bst.preOrderPrintTraversal().equals(" 6 3 1 8 7 13 9 11")){
            return false;
        }

        if(!bst.postOrderPrintTraversal().equals(" 1 3 7 11 9 13 8 6")){
            return false;
        }


        return true;
        
    }


}
