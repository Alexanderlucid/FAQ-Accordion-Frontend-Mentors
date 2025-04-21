const accordionBoxItemHeader = document.querySelectorAll(".accordion-box-item-header");
// console.log(accordionBoxItemHeader);
accordionBoxItemHeader.forEach((item) => {
    item.addEventListener("click", () => {
        const accordionPanel = item.nextElementSibling;

        const icon = item.querySelector("img")

        
        accordionPanel.classList.toggle("open")
        if(accordionPanel.classList.contains("open")) {
            icon.src = "./assets/images/icon-minus.svg";
        }else{
            icon.src = "./assets/images/icon-plus.svg"
        }

        // Toggle the icon based on the state of the accordion panel

        document.querySelectorAll(".accordion-panel").forEach((panel) => {
            if(panel !== item.nextElementSibling) {
                panel.classList.remove("open");
                panel.previousElementSibling.querySelector("img").src = "./assets/images/icon-plus.svg";
                // panel.previousElementSibling.querySelector("img").src = "./assets/images/icon-plus.svg"; 
            }})
    });
    
})