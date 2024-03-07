// Quick Coding Test

// Please write code to change `seconds_batches` to be `sorted_uniq_seconds` in simplest way in Javascript

const seconds_batches = [
  [1, 2, 3, 4],
  [1, 2, 3, 4, 5, 6, 7],
  [30, 31, 32, 33],
  [1, 2, 3, 32, 33, 34, 35, 36, 37, 38, 39, 40],
]

const sorted_uniq_seconds = [1, 2, 3, 4, 5, 6, 7, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]

// answer

function sorted_uniq_seconds (seconds_batches) {
    const flattened = seconds_batches.flat();
    const set_uniq = new Set(flattened);
    const array_uniq = Array.from(set_uniq);
    const sorted_array = array_uniq.sort((a, b) => a - b)
    console.log(sorted_array)
  }
  
  sorted_uniq_seconds(seconds_batches)