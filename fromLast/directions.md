# --- Directions

Given a linked list and integer 
spaces from the last node in the
'size' method of the linked list
be less than the length of the l

# --- Examples
   
    const list = new List();
    list.insertLast('a');
    list.insertLast('b');
    list.insertLast('c');
    list.insertLast('d');
    fromLast(list, 2).data // 'b'


# --- Solution

    function fromLast(list, n) {
      let slow = list.getFirst();
      let fast = list.getFirst();

      while( n > 0) {
        fast = fast.next;
        n--;
      }

      while(fast.next) {
        slow = slow.next;
        fast = fast.next;
      }

      return slow;
    }
