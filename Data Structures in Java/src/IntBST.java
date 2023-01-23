 public class IntBST {
        private IntBSTNode root;
     
        public IntBST() {
           this.root = null;
        }
     
        public IntBSTNode add(Integer val) {
           if (root == null) {
              root = new IntBSTNode(val);
           }
           return addRecursive(root, val);
        }
     
        public IntBSTNode find(Integer val) {
           return findRecursive(root, val);
        }
     
        public void preOrderPrintTraversal() {
           preOrderPrintTraversal(root);
        }
     
        private Integer findSmallest(IntBSTNode root) {
           Integer min = root.getValue();
     
           while (root.getLeftChild() != null) {
              min = root.getLeftChild().getValue();
              root = root.getLeftChild();
           }
     
           return min;
        }
     
        public void remove(Integer val) {
           // removing the root node of our BST
           root = removeRecursive(root, val);
     
        }
     
        private IntBSTNode removeRecursive(IntBSTNode root, Integer val) {
           if (root == null)
              return root;
     
           if (val < root.getValue()) {
              root.setLeftChild(removeRecursive(root.getLeftChild(), val));
           } else if (val > root.getValue()) {
              root.setRightChild(removeRecursive(root.getRightChild(), val));
           } else {
              if (root.getLeftChild() == null) {
                 return root.getRightChild();
              } else if (root.getRightChild() == null) {
                 return root.getLeftChild();
              } else {
                 Integer biggest = findSmallest(root.getRightChild());
                 root.setValue(biggest);
                 root.setRightChild(removeRecursive(root.getRightChild(), root.getValue()));
              }
           }
     
           return root;
        }
     
        private void preOrderPrintTraversal(IntBSTNode root) {
           System.out.println(root.getValue());

           if (root.hasLeftChild()) {
              preOrderPrintTraversal(root.getLeftChild());
           }
     
           if (root.hasRightChild()) {
              preOrderPrintTraversal(root.getRightChild());
           }
        }
     
        public void postOrderPrintTraversal() {
           postOrderPrintTraversal(root);
        }
     
        private void postOrderPrintTraversal(IntBSTNode root) {
           if (root.hasLeftChild()) {
              postOrderPrintTraversal(root.getLeftChild());
           }
     
           if (root.hasRightChild()) {
              postOrderPrintTraversal(root.getRightChild());
           }
     
           System.out.println(root.getValue());
     
        }
     
        public void inOrderPrintTraversal() {
           inOrderPrintTraversal(root);
        }
     
        private void inOrderPrintTraversal(IntBSTNode root) {
           if (root.hasLeftChild()) {
              inOrderPrintTraversal(root.getLeftChild());
           }
     
           System.out.println(root.getValue());
     
           if (root.hasRightChild()) {
              inOrderPrintTraversal(root.getRightChild());
           }
     
        }
     
        private IntBSTNode findRecursive(IntBSTNode root, Integer val) {
           if (root.getValue() == val)
              return root;
           else if (root.hasLeftChild() && root.getValue() > val)
              return findRecursive(root.getLeftChild(), val);
           else if (root.hasRightChild() && root.getValue() < val)
              return findRecursive(root.getRightChild(), val);
           else
              return null;
        }
     
        /**
         * 
         * @param root root of the subtree we are adding val to
         * @param val  the Integer we are adding to the BST (no duplicates)
         * @return reference to the InstBSTNode we inserted
         */
        private IntBSTNode addRecursive(IntBSTNode root, Integer val) {
           if (val < root.getValue()) {
              if (root.hasLeftChild())
                 return addRecursive(root.getLeftChild(), val);
              else {
                 IntBSTNode child = new IntBSTNode(val);
                 root.setLeftChild(child);
                 return child;
              }
           } else if (val > root.getValue()) {
              if (root.hasRightChild())
                 return addRecursive(root.getRightChild(), val);
              else {
                 IntBSTNode child = new IntBSTNode(val);
                 root.setRightChild(child);
                 return child;
              }
           } else {
              return root;
           }
        }
     }

