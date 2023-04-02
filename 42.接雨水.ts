/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {
	const length: number = height.length;
	let leftMax = 0;
  let res = 0;
	for (let i = 0; i < length; i++) {
		leftMax = Math.max(leftMax, height[i]);
		let rightMax = height[i];
		for (let j = i; j < length; j++) {
      rightMax = Math.max(rightMax, height[j]);
    }
		res += Math.min(rightMax, leftMax) - height[i];
	}
	return res;
}
// @lc code=end
