function changeSpacing() {
  const codeSpacing = document.getElementById("code-spacing");
  codeSpacing.innerText = this.value;

  const dom = document.documentElement;
  dom.style.setProperty("--spacing", `${this.value}px`);
}

function changeBlur() {
  const codeBlur = document.getElementById("code-blur");
  codeBlur.innerText = this.value;

  const dom = document.documentElement;
  dom.style.setProperty("--blur", `${this.value}px`);
}

function changeColor() {
  const codeBase = document.getElementById("code-base");
  codeBase.innerText = this.value;

  const dom = document.documentElement;
  dom.style.setProperty("--base", `${this.value}`);
}

window.onload = () => {
  const codeSpacing = document.getElementById("spacing");
  codeSpacing.addEventListener('input', changeSpacing);

  const blur = document.getElementById("blur");
  blur.addEventListener('input', changeBlur);
  
  const color = document.getElementById("color");
  color.addEventListener('change', changeColor)
}