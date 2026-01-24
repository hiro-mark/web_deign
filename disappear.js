setTimeout(() => {
  const elements = document.getElementsByClassName("js-disappear");

  for (let hide of elements) {
    hide.style.display = "none";
  }
}, 9001);