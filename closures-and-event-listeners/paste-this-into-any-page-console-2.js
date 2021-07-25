document.body.innerHTML = "";

var nums = [1, 2, 3];

for (var i = 0; i < nums.length; i++) {
  var num = nums[i];

  var elem = document.createElement("div");
  elem.textContent = num;

  // use an IIFE higher-order function to give the listener a function with a scoped variable
  elem.addEventListener(
    "click",
    (function (numCopy) {
      return function () {
        alert(numCopy);
      };
    })(num)
  );

  document.body.appendChild(elem);
}
