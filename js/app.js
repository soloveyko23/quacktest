(() => {
    "use strict";
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.addEventListener("DOMContentLoaded", (() => {
        const menuItems = document.querySelectorAll(".main-menu__item");
        if (menuItems.length === 0) {
            console.error("No elements with class 'main-menu__item' found.");
            return;
        }
        menuItems.forEach((item => {
            item.addEventListener("click", (() => {
                menuItems.forEach((el => {
                    if (el !== item) el.classList.add("disabled");
                }));
                item.classList.add("animate");
                setTimeout((() => {
                    item.classList.remove("animate");
                    menuItems.forEach((el => {
                        el.classList.remove("disabled");
                    }));
                }), 500);
            }));
        }));
    }));
    window["FLS"] = true;
})();