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
const timingFunction = [
  "ease",
  "linear",
  "ease-in",
  "ease-out",
  "ease-in-out",
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
const fontFamilies = [
  "Arial",
  "Verdana",
  "Helvetica",
  "Tahoma",
  "Trebuchet MS",
  "Times New Roman",
  "Georgia",
  "Garamond",
  "Courier New",
  "Brush Script MT",
];
const uniqueTagsMap = {};


let tagsEligibleForRng = [];

const rngfy = () => {

  if(tagsEligibleForRng.length === 0) {
    alert("Please select at least one tag to randomize from the menu!");
    return;
  }

  for (tag of tagsEligibleForRng) {
    tag.style.fontSize = `${rng(12, 24)}px`;
    tag.style.fontFamily = `${fontFamilies[rng(0, fontFamilies.length - 1)]}`;
    tag.style.background = `rgba(${rng(0, 255)}, ${rng(0, 255)}, ${rng(
      0,
      255
    )}, ${rngFloat(0, 1)})`;
    tag.style.color = `rgba(${rng(0, 255)}, ${rng(0, 255)}, ${rng(
      0,
      255
    )}, ${rngFloat(0, 1)})`;
    //tag.style.transform = `rotate(${rng(-10, 10)}deg)`;
    tag.style.fontWeight = `${rng(10, 1000)}`;
    tag.style.padding = `${rng(0, 16)}px`;
    tag.style.margin = `${rng(0, 16)}px`;
    tag.style.letterSpacing = `${rng(0, 5)}px`;
    tag.style.boxShadow = `${rng(0, 5)}px ${rng(0, 5)}px ${rng(
      0,
      5
    )}px ${rng(0, 5)}px`;
    tag.style.border = `${rng(0, 5)}px ${
      borderStyles[rng(0, borderStyles.length - 1)]
    } rgb(${rng(0, 255)}, ${rng(0, 255)}, ${rng(0, 255)}`;
    tag.style.borderRadius = `${rng(0, 16)}px`;
    //tag.style.position = positions[rng(0, positions.length - 1)];
    tag.style.opacity = rngFloat(0.7, 1);
    // tag.style.top = `${rng(0, 100)}px`;
    // tag.style.right = `${rng(0, 100)}px`;
    // tag.style.bottom = `${rng(0, 100)}px`;
    // tag.style.left = `${rng(0, 100)}px`;
    tag.style.float = floats[rng(0, floats.length - 1)];
    tag.style.transition = `${rngFloat(0, 1)}s ${
      timingFunction[rng(0, timingFunction.length - 1)]
    }`;
  }
}

const rng = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rngFloat = (min, max) => {
  return (Math.random() * (max - min + 1) + min).toFixed(2);
}

const populateTagsInOptions = (tags) => {
  const tagSelector = document.querySelector("#tag-selector");
  for(const tag of tags) {
    const option = document.createElement("option");
    option.textContent = tag.localName;
    option.value = tag.localName;
    
    if(!uniqueTagsMap[tag.localName]){
      uniqueTagsMap[tag.localName] =  true;
      tagSelector.appendChild(option);
    }
  }

}

const onSelectClick = (evt) => {
  const selectedOptions = Array.from(evt.target.parentElement.options).filter(option => option.selected).map(tag => tag.value);
  tagsEligibleForRng = document.querySelectorAll(selectedOptions.join(","));
}


window.onload = () => {
  const tags = document.querySelectorAll("*");

  const tagSelector = document.querySelector("#tag-selector");
  const rngfyButton = document.getElementById("rngfy");

  populateTagsInOptions(tags);
  tagSelector.addEventListener("click", (evt) => onSelectClick(evt));
  rngfyButton.addEventListener("click", (e) => {
    rngfy();
  });

  const menuCloseButton = document.getElementById("btn-close");
  menuCloseButton.addEventListener("click", (e) => {
    document.getElementById("menu-modal").classList.toggle("display-none");
  });

  const menuButton = document.getElementById("btn-menu");
  menuButton.addEventListener("click", (e) => {
    document.getElementById("menu-modal").classList.toggle("display-none");
  });
}
window.addEventListener("keydown", (event) => {
  if(event.key.toLowerCase() === "r") {
    rngfy();
  }
})