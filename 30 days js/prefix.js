// strs = ["flower", "flow", "flight"];
strs = ["dog", "cat"];
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return "";
  let prefix = strs[0];
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (prefix.slice(0, j + 1) == strs[i].slice(0, j + 1)) continue;
      prefix = prefix.slice(0, j);
      return prefix;
    }
  }
};

console.log(longestCommonPrefix(strs));
