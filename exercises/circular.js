function isCircularLinkList(list) {
    let slow = list.head;
    let fast = list.head;
    let isCque = false;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        isCque = true;
        return isCque;
      }
    }
    return isCque;
  }
  
  module.exports = isCircularLinkList;