function validAnagram(first, second) {
  if (first.length !== second.length) return true;

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    if (!lookup[letter] || lookup[letter] === 0) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(validAnagram("anagram", "nagram")); // true
console.log(validAnagram("aaz", "zza")); // false
