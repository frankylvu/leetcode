/*
 * @lc app=leetcode.cn id=38 lang=typescript
 *
 * [38] 外观数列
 */

// @lc code=start
function countAndSay(n: number): string {
	if (n === 1) return "1";
	return countAndSay(n - 1).replace(/(.)\1*/g, (matched, char) => {
		return matched.length + char;
	});
}

// @lc code=end
