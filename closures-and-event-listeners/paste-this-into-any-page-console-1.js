document.body.innerHTML = "";
document.body.style.background = "white";

var nums = [1, 2, 3];

// instead of using .map or ()=>{}
for (var i = 0; i < nums.length; i++) {
  var num = nums[i];

  var elem = document.createElement("div");
  elem.textContent = num;

  elem.addEventListener("click", function () {
    // note: this num is scoped to outside this function, so it'll be the last value!
    alert(num);
  });

  document.body.appendChild(elem);
}
