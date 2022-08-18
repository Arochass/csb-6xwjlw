(() => {
  const ball = document.querySelector(".ball");
  const garden = document.querySelector(".garden");
  const output = document.querySelector(".output");

  const maxX = garden.clientWidth - ball.clientWidth;
  const maxY = garden.clientHeight - ball.clientHeight;

  function handleOrientation(event) {
    let x = event.gamma; // In degree in the range [-180,180)
    let y = event.beta;
    let z = event.alpha; // In degree in the range [-90,90)

    output.textContent = `gamma : ${x}\n`;
    output.textContent += `beta: ${y}\n`;
    output.textContent += `alpha: ${z}\n`;

    // Because we don't want to have the device upside down
    // We constrain the x value to the range [-90,90]
    if (x > 90) {
      x = 90;
    }
    if (x < -90) {
      x = -90;
    }

    // To make computation easier we shift the range of
    // x and y to [0,180]
    x += 90;
    y += 90;
    z += 90;

    // 10 is half the size of the ball
    // It center the positioning point to the center of the ball
    ball.style.top = (maxY * y) / 180 - 10 + "px";
    ball.style.left = (maxX * x) / 180 - 10 + "px";
  }

  window.addEventListener("deviceorientation", handleOrientation);
})();
