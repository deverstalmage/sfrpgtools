export function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function articlize(word, capitalize) {
  const vowels = ['a','e','i','o','u']
  const firstLetter = word.toLowerCase().charAt(0);

  const article = capitalize ? 'A' : 'a';

  if (vowels.includes(firstLetter)) {
    return `${article}n ${word}`;
  } else {
    return `${article} ${word}`;
  }
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function createFilledArray(size, fill) {
  const arr = [];
  arr.length = size;
  arr.fill(fill);
  return arr;
}

export function randomWeightedChoice(choices, weights) {
  const totalWeight = weights.reduce((a, b) => a + b, 0);
  const randomNum = randomInt(0, totalWeight);
  let sum = 0;
  for (let i = 0; i < choices.length; i++) {
    sum += weights[i];
    sum = +sum.toFixed(2);

    if (randomNum <= sum) {
      return choices[i];
    }
  }
}
