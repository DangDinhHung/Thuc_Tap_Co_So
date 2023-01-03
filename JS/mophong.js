const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Hàm Lấy dữ liệu từ file
function getData(callback) {
  const url = "http://localhost:3000/numbers";
  fetch(url)
    .then(res => res.json())
    .then(callback)
    .catch(err => console.log("Co loi!"))
}
//Hàm đổ dữ liệu ra html
function renderData(numbers) {
  let htmls = numbers.map(number => {
    return `
      <p class = "square"><label>${number}</label></p>
    `
  })
  $(".container").innerHTML = htmls.join("");
}
//Hàm duyệt mảng
async function browserArray(delay = 500) {
  let squares = $$(".square");
  for (var i = 0; i < squares.length; i += 1) {
    squares[i].style.backgroundColor = "#EB455F";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    const currValue = Number(squares[i].innerHTML);
    currValue != i ? squares[i].style.backgroundColor = "rgb(49, 226, 13)" : squares[i].style.backgroundColor = "#EB455F"
  }
}
//Hàm thêm 
async function insertElement(delay = 500) {
  let valueUserInsert = Number($("#valueUser").value);
  let insert_idx = Number($("#valueIdx").value);
  let squares = $$(".square");
  let length = squares.length;
  let container = $(".container");
  let p = document.createElement("p");
  p.classList.add("square");
  let label = document.createElement("label");
  p.appendChild(label);
  label.textContent = `${valueUserInsert}`;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = "#EB455F";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    if (insert_idx === i) {
      squares[i].style.backgroundColor = "rgb(49, 226, 13)"
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 1000)
      );
      // insertBefore(element, vị trí được thêm vào trước element được chọn)
      container.insertBefore(p, container.children[insert_idx]);
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 500)
      );
      p.style.backgroundColor = "violet";
      break;
    }
    else {
      squares[i].style.backgroundColor = "#000";
    }
  }
}
// Hàm xóa 
async function deleteElement(delay = 500) {
  let squares = $$(".square");
  let valueUser = Number($("#valueUser").value);
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = "#EB455F"
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    valueArr = Number(squares[i].childNodes[0].innerHTML);
    if (valueArr === valueUser) {
      squares[i].style.backgroundColor = "rgb(49, 226, 13)"
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      squares[i].classList.add("display-none");
      break;
    } else {
      squares[i].style.backgroundColor = "#000"
    }
  }
}
// Hàm tìm kiếm (Linear search)
async function linearSearch(delay = 500) {
  let squares = $$(".square");
  let valueUser = $("#valueUser").value;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = "#EB455F";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    var valueArr = Number(squares[i].childNodes[0].innerHTML);
    if (valueArr == valueUser) {
      squares[i].style.backgroundColor = "rgb(49, 226, 13)";
      $(".valueSearch").innerHTML = `${valueUser} ở vị trí thứ ${i}`
      break;
    }
    else {
      squares[i].style.backgroundColor = "#000";
    }
  }
}
// Sắp xếp (SelectionSort)
async function SelectionSort(delay = 500) {
  let squares = document.querySelectorAll(".square");
  for (var i = 0; i < squares.length; i++) {
    // chọn giá trị đầu mảng của dãy chưa được sắp xếp
    min_idx = i;
    squares[i].style.backgroundColor = "darkblue";
    // tìm phần tử bé nhất trong dãy chưa được sắp xếp
    for (var j = i + 1; j < squares.length; j++) {
      squares[j].style.backgroundColor = "#EB455F";
      // delay
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      var value1 = Number(squares[min_idx].childNodes[0].innerHTML);
      var value2 = Number(squares[j].childNodes[0].innerHTML);
      if (value1 > value2) {
        if (min_idx != i) {
          squares[min_idx].style.backgroundColor = "rgb(24, 190, 255)";
        }
        min_idx = j;
      } else {
        squares[j].style.backgroundColor = "rgb(24, 190, 255)";
      }
    }

    // Đổi chổ phần tử bé nhất với phần tử đầu tiên
    var temp = squares[min_idx].childNodes[0].innerText;
    squares[min_idx].childNodes[0].innerText = squares[i].childNodes[0].innerText;
    squares[i].childNodes[0].innerText = temp;

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    squares[min_idx].style.backgroundColor = "rgb(24, 190, 255)";
    squares[i].style.backgroundColor = "rgb(49, 226, 13)";
  }
}
getData(renderData);
