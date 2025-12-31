function disemvowel(str) {
  let vowels = "aeiou"
  let solution = ""
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i].toLowerCase())) {
        solution += str[i]
        }
  }
  return solution;
}