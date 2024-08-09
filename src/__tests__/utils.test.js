// Your tests here
function isPalindrome(word) {
    const reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
  }
  
  describe("isPalindrome", () => {
    it("returns true for a palindrome", () => {
      expect(isPalindrome("racecar")).toBe(true);
    });
  
    it("returns false for a non-palindrome", () => {
      expect(isPalindrome("car")).toBe(false);
    });
  });
  