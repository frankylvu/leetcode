/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
	const length = candidates.length;
	const res: number[][] = [];
	const used = new Array(length).fill(false);
	candidates.sort();

	function search(path: number[], target: number, index: number) {
		if (target < 0) {
			return;
		} else if (target === 0) {
			res.push([...path]);
			return;
		} else {
			for (let i = index; i < length; i++) {
				const nextTarget = target - candidates[i];

				if (candidates[i] === candidates[i - 1] && used[i - 1] === false) {
					continue;
				}
				used[i] = true;
				search([...path, candidates[i]], nextTarget, i + 1);
				used[i] = false;
			}
		}
	}

	search([], target, 0);

	return res;
}

console.log(combinationSum2([2,2,2], 2));
// @lc code=end
