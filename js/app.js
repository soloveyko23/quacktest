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
                if (item.classList.contains("item-shop")) {
                    document.querySelector("#appMain").classList.add("hidden");
                    document.querySelector("#app").classList.add("change-bg");
                    document.querySelector("#appShop").classList.add("show");
                }
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
    function pageShop() {
        const close = document.querySelector(".app-shop .close");
        close.addEventListener("click", (() => {
            document.querySelector("#appMain").classList.remove("hidden");
            document.querySelector("#app").classList.remove("change-bg");
            document.querySelector("#appShop").classList.remove("show");
        }));
    }
    const box = document.getElementById("duck");
    pageShop();
    box.addEventListener("click", (function(event) {
        const rect = box.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const span = document.createElement("span");
        span.textContent = "+1";
        span.classList.add("message");
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
        box.appendChild(span);
        setTimeout((() => {
            span.style.opacity = "0";
            setTimeout((() => {
                span.remove();
            }), 1e3);
        }), 500);
        const originX = x / rect.width * 100;
        const originY = y / rect.height * 100;
        box.style.transformOrigin = `${originX}% ${originY}%`;
        box.style.transform = "scale(0.95) rotateX(10deg) rotateY(-10deg)";
        setTimeout((() => {
            box.style.transform = "none";
        }), 500);
    }));
    window["FLS"] = true;
})();