const positions = [
  "relative",
  "absolute",
  "static",
  "inherit",
  "fixed",
  "sticky",
];
const borderStyles = [
  "none",
  "hidden",
  "dotted",
  "dashed",
  "solid",
  "double",
  "groove",
  "ridge",
  "inset",
  "outset",
  "initial",
  "inherit",
];
const floats = ["none", "left", "right", "initial", "inherit"];
const property = {
  fontSize: true,
  background: false,
  transform: false,
  fontWeight: false,
  padding: false,
  margin: false,
  letterSpacing: false,
  boxShadow: false,
  border: false,
  position: false,
  opacity: false,
};
const tags = document.querySelectorAll("*");
for (tag of tags) {
  tag.style.fontSize = `${rng(12, 72)}px`;
  tag.style.background = `rgba(${rng(0, 255)}, ${rng(0, 255)}, ${rng(
    0,
    255
  )}, ${rng(0, 1)})`;
  tag.style.color = `rgba(${rng(0, 255)}, ${rng(0, 255)}, ${rng(0, 255)}, ${rng(
    0,
    1
  )})`;
  //tag.style.transform = `rotate(${rng(0, 360)}deg`;
  tag.style.fontWeight = `${rng(10, 1000)}`;
  tag.style.padding = `${rng(0, 64)}px`;
  tag.style.margin = `${rng(0, 32)}px`;
  tag.style.letterSpacing = `${rng(0, 10)}px`;
  tag.style.boxShadow = `${rng(0, 10)}px ${rng(0, 10)}px ${rng(0, 10)}px ${rng(
    0,
    10
  )}px`;
  tag.style.border = `${rng(0, 10)}px ${
    borderStyles[rng(0, borderStyles.length - 1)]
  } rgb(${rng(0, 255)}, ${rng(0, 255)}, ${rng(0, 255)}`;
  tag.style.position = positions[rng(0, positions.length - 1)];
  tag.style.opacity = rngFloat(0.5, 1);
  tag.style.top = `${rng(0, 100)}px`;
  tag.style.right = `${rng(0, 100)}px`;
  tag.style.bottom = `${rng(0, 100)}px`;
  tag.style.left = `${rng(0, 100)}px`;
  tag.style.float = floats[rng(0, floats.length - 1)];
}

function rng(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function rngFloat(min, max) {
  return (Math.random() * (max - min + 1) + min).toFixed(2);
}
