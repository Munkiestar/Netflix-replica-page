const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Listen for tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));

// Select tab content item
function selectItem(e) {
  // first remove the border-bottom
  removeBorder();

  removeShow();

  // add border to current tab
  this.classList.add("tab-border");

  // Grab content item from DOM
  // console.log(this.id);
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //add show class
  tabContentItem.classList.add("show");
}

// remove the border - bottom
function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove("show"));
}
