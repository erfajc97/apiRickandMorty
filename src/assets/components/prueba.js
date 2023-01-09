let page = 1;
const lastIndex = page * 20;
const firstIndex = lastIndex - 20;
// const paginacion = residents?.slice(firstIndex, lastIndex);
const lastPage = 12;

let numbers = [];
for (let i = page - 3; i <= page + 2; i++) {
    console.log(i);
  if (i >= page  && i <= lastPage) {
    numbers.push(i);
  }
}

console.log(numbers);