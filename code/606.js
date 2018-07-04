/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**     "1(2()(4))(3)"
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
    //后序遍历

    var result="";
    if(t!=null)
    {
        result=result+t.val;
        let lt=tree2str(t.left);
        let rt=tree2str(t.right);
        if(lt==""&&rt!="")
        {
            result=result+`()(${rt})`
        }
        else {
            lt= (lt==""?"":`(${lt})`);
            rt=(rt==""?"":`(${rt})`);
            result+=lt+rt;
        }
    }
    return result;

};