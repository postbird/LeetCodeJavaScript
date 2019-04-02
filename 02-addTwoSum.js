/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let resNode = new ListNode(0); // 临时使用的 node 用来不停的增加链表节点
    let result = resNode; // 第一次挂载
    let tmpS = 0; // 相加 > 10 的进位数(1 或 0)
    while(l1 || l2 || tmpS) { // 判断 tmpS 的目的是防止最后还有一位进位需要前置
        let val1 = l1 ? l1.val || 0 : 0; // 需要判断 l1 是 null
        let val2 = l2 ? l2.val || 0 : 0; // 需要判断 l2 是 null
        let sum = val1 + val2 + tmpS; // this.val 相加并加上进位值
        tmpS = sum >= 10 ? 1 : 0; // 计算本次相加是否需要进位
        sum = sum % 10; // 当前位只需要个位数
        if(l1) l1 = l1.next; // 遍历链表
        if(l2) l2 = l2.next; // 遍历链表
        resNode.next = new ListNode(sum); // 将当前结果挂到临时的 node 上
        resNode = resNode.next; // 如果要继续挂载链表，需要将当前的指针移动到 next 上
        console.log(resNode);
    }
    return result.next; // result 是 resNode, resNode.next 才是最终结果
};

let l1_1 = new ListNode(2);
let l1_2 = new ListNode(4);
let l1_3 = new ListNode(3);
l1_1.next = l1_2;
l1_2.next = l1_3;

let l2_1 = new ListNode(5);
let l2_2 = new ListNode(6);
let l2_3 = new ListNode(4);
l2_1.next = l2_2;
l2_2.next = l2_3;

const input1 = l1_1;
const input2 = l2_1;

console.log(addTwoNumbers(input1, input2));