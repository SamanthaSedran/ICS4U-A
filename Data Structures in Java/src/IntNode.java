public class IntNode {
    private Integer data;
    private IntNode link; //this attribute will link it to another node
    //it is a list that is chained together

    public Integer getData() {
        return data;
    }
    public void setData(Integer data) {
        this.data = data;
    }
    public IntNode(Integer data, IntNode link) {
        this.data = data;
        this.link = link;
    }
    public IntNode getLink() {
        return link;
    }
    public void setLink(IntNode link) {
        this.link = link;
    }
    public IntNode(Integer data) {
        this.data = data;
    }

    


}
