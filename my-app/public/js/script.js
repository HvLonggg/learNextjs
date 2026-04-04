const numbers = document.querySelectorAll(".number");

numbers.forEach((num) => {
  const target = +num.getAttribute("data-target");
  let count = 0;

  const update = () => {
    const increment = target / 30;

    if (count < target) {
      count += increment;
      num.innerText = Math.floor(count) + " +";
      setTimeout(update, 30);
    } else {
      num.innerText = target + " +";
    }
  };

  update();
});



