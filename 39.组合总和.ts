/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  let res: number[][] = [];
  const copyCandidates = Array.from(candidates);
  for (const num of candidates) {
    const reduce = target - num;
    if (reduce > 0) {
      const solution = combinationSum(copyCandidates, reduce);
			res = res.concat(solution.map((item) => {
				item.push(num);
				return item;
			}));
    } else if (reduce === 0) {
      res.push([num]);
    }
    copyCandidates.shift();
  }
  return res;
};
// @lc code=end

