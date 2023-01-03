// Hàm Lấy dữ liệu từ file
function getData(callback) {
  const url = "http://localhost:3000/numbers";
  fetch(url)
    .then(res => res.json())
    .then(callback)
    .catch(err => console.log("Co loi!"))
}
// Duyệt mảng
function duyetFn(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(`index: ${i}: Element: ${numbers[i]}`);
  }
}

// Thêm phần tử
function inserFn(numbers) {
  let insert_value = 200;
  let insert_idx = 5;
  for (let i = numbers.length; i > insert_idx; i--) {
    numbers[i] = numbers[i - 1];
  }
  numbers[insert_idx] = insert_value;
  console.log(numbers);
}
// Xóa
function deleteFn(numbers) {
  let delete_idx = 5;
  for (let i = delete_idx; i < numbers.length - 1; i++) {
    numbers[i] = numbers[i + 1];
  }
  numbers.length--;
  console.log(numbers);
}
// Tìm kiếm
function searchFn(numbers) {
  value = 100;
  for (let i = 0; i < numbers.length; i++) {
    if (value == numbers[i]) {
      console.log(`${value} ở vị trí ${i}`);
      break;
    }
  }
}
// Sắp xếp
function Selectionsort(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    min_idx = i;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[min_idx] > numbers[j]) {
        min_idx = j;
      }
      var temp = numbers[min_idx];
      numbers[min_idx] = numbers[i];
      numbers[i] = temp;
    }
  }
  console.log(numbers);
}
function start() {
  // getData(duyetFn);
  // getData(inserFn);
  // getData(deleteFn);
  // getData(searchFn);
  // getData(Selectionsort);
}
start();