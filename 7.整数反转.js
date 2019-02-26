/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (31.54%)
 * Total Accepted:    82.3K
 * Total Submissions: 261K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x > 2147483647 || x < -2147483647) {
        return 0
    }
    var newArr = [], flag = false
    x > 0 ? flag = true : flag == false
    currentArr = Math.abs(x).toString().split("")
    if (currentArr.indexOf(0) == 0 || currentArr.indexOf(0) == currentArr.length - 1) {
        currentArr.splice(currentArr.indexOf(0), 1)
    }
    newArr = currentArr.reverse()
    if (parseInt(newArr.join("")) > 2147483647) {
        return 0
    }
    return flag ? parseInt(newArr.join("")) : -parseInt(newArr.join(""))
};

