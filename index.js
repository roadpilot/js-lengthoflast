/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {
    tStr = s.trim().split(' ')
    return (tStr[tStr.length-1].length)
};