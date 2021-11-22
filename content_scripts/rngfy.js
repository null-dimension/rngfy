(function () {
  if (window.hasRun) {
    return false;
  }
  window.hasRun = true;

  function rngfy() {
    const positions = [
      "relative",
      "absolute",
      "static",
      "inherit",
      "fixed",
      "sticky",
    ];
    const tags = document.querySelectorAll("*");
    for (tag of tags) {
      tag.style.fontSize = `${rng(12, 72)}px`;
      //tag.style.background = `rgba(${rng(0, 255)}, ${rng(0, 255)}, ${rng(0, 255)}, ${rng(0,1)})`;
      //tag.style.transform = `rotate(${rng(0, 360)}deg`;
      tag.style.fontWeight = `${rng(10, 1000)}`;
      tag.style.padding = `${rng(0, 64)}px`;
      tag.style.margin = `${rng(0, 32)}px`;
      //tag.style.letterSpacing = `${rng(0, 10)}px`;
      //tag.style.boxShadow = `${rng(0, 10)}px ${rng(0, 10)}px ${rng(0, 10)}px ${rng(0, 10)}px`;
      //tag.style.border = `${rng(0, 10)}px solid black`;
      //tag.style.position = positions[rng(0, positions.length - 1)];
      //tag.style.opacity = rngFloat(0.5, 1);
    }
  }
  function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function rngFloat(min, max) {
    return (Math.random() * (max - min + 1) + min).toFixed(2);
  }

  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "rngfy") {
      rngfy();
    }
  });
})();