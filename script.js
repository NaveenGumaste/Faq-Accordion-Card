document.querySelectorAll(".accordion-question").forEach((item) => {
    item.addEventListener("click", (event) => {
        let accCollapse = item.nextElementSibling;
        //accordion is closed and we want to open it
        if (!item.classList.contains("open")) {
            accCollapse.style.display = "block";
            let accHeight = accCollapse.clientHeight;

            setTimeout(() => {
                accCollapse.style.height = accHeight + "px";
                accCollapse.style.display = "";
            }, 1);

            accCollapse.classList = "accordion-collapse collapsing";

            // after x amount of time remove class 'collapsing' and add class 'open'
            setTimeout(() => {
                accCollapse.classList = "accordion-collapse collapse open";
            }, 300);
        } else {
            //accordion is open and we want to close it. remove open class and add collapsing
            accCollapse.classList = "accordion-collapse collapsing";

            setTimeout(() => {
                accCollapse.style.height = "0px";
            }, 1);
            //after x amount of time remove class 'collapsing' and add class 'collapse'
            setTimeout(() => {
                accCollapse.classList = "accordion-collapse collapse";
                accCollapse.style.height = ""; //cancels the height
            }, 300);
        }
        item.classList.toggle("open");
    });
});