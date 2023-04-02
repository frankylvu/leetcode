/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
	if (head === null) return null;
	let pointer: ListNode | null = head;
	let pre: ListNode | null = null;
	while (pointer) {
		if (!!pre && pointer.val === pre.val) {
			pre.next  = pointer.next;
			pointer = pointer.next;
		} else {
			pre = pointer;
			pointer = pointer.next;
		}
	}
	return head;
}
// @lc code=end
