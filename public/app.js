//ACCORDIAN
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    //     Uncomment in case you only want to allow for the display of only one collapsed item at a time!

    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

//MENU

const menubar = document.querySelector("#menubar");
const mobileMenu = document.querySelector(".mobile-menu");
const listItems = document.querySelectorAll(".mobile-menu li a");
const body = document.querySelector("body");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});

menubar.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
