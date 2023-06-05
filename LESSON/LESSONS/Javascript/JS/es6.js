function run() {
  //   function getSum(x, y = 0) {
  //     return x + y;
  //   }
  //   let x = function getSum(x, y) {
  //     return x + y;
  //   };
  //   let getSum = function (x, y) {
  //     return x + y;
  //   };
  //   const getSum = (x, y) => {
  //     return x + y;
  //   };
  //   const getSum = (x, y) => x + y;
  //   function getProduct(...nums) {
  //     let prod = 1;
  //     for (let i = 0; i < nums.length; i++) {
  //       prod *= nums[i];
  //     }
  //     return prod;
  //   }
  //   console.log(getProduct(3, 4, 10, 1000));
  //   let x = "AEIOU";
  //   let y = Array.from("AEIOU");
  //   console.log(y[1]);
  //   const fruits = ["Banana", "Orange", "Apple", "Mango"];
  //   const keys = fruits.values();
  //   for (let x of keys) {
  //     console.log(x);
  //   }

  const numbers = [4, 9, 16, 25, 20];
  //   let first = numbers.find(checkNumbers);
  let first = numbers.filter(checkNumbers)[0];

  function checkNumbers(value) {
    return value > 15;
  }

  console.log(first);
}
