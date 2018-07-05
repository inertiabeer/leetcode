var addTwoNumbers = function(l1, l2) {

    var head= new ListNode("head");
    var node =head;
    var flag=false;
    while(l1!==null&&l2!==null)
    {
        if(flag)
        {
            var singleNum=l2.val+l1.val+1;
            node.next={
                val:singleNum%10,
                next:null
            };
            l2=l2.next;l1=l1.next;
            flag=false;

        }
        else
        {
            var singleNum=l1.val+l2.val;
            node.next= {
                val:singleNum%10,
                next:null
            }
            l1=l1.next;
            l2=l2.next;

        }
        if(singleNum>=10)
        {
            flag=true;
        }

        node =node.next;

    }
    while(flag)
    {
        if(l1===null&&l2===null)
        {
            node.next=new ListNode(1);
            node =node.next;
            flag=false;
        }
        if(l1!==null)
        {
            node.next=new ListNode((l1.val+1)%10);

            if(l1.val+1>=10)
            {
                flag=true;

            }
            else
            {
                flag=false;
            }
            l1=l1.next;
            node=node.next;


        }
        if(l2!==null)
        {
            node.next=new ListNode((l2.val+1)%10);

            if(l2.val+1>=10)
            {
                flag=true;

            }
            else
            {
                flag=false;
            }
            l2=l2.next;
            node=node.next;

        }
    }
    node.next=(l1!==null)?l1:l2;
    var result=[];
    while(head.next!==null)
    {
        head=head.next;
        result.push(head.val);

    }
    return result;



};
