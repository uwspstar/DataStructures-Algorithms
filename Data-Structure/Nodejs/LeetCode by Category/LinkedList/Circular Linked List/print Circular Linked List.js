// use do while to check the stop

//[->8->3->9->6>2]
{  //iteration
    const displayCircleLinkedListNode = head => {

        let curr = head;
        do {
            console.log(curr.val)
            curr = curr.next;
        } while (head !== curr)

    }
}

{ //recursive

    const displayCircleLinkedListNode = head => {

        let flag  = 0;
        let curr = head;
        const helpDisplayCircleLinkedListNode = curr => {
            if (curr !== head ||flag === 0 ) {
                flag = 1;
                console.log(curr.val);
                helpDisplayCircleLinkedListNode(curr.next);
            }
            flag = 0;
        }
        helpDisplayCircleLinkedListNode(curr);
    }
}