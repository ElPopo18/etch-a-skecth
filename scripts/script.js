document.addEventListener('DOMContentLoaded', function () {

    let container = document.querySelector(".container")

    let grid = Math.pow(16, 2);

    for (let i = 0; i < grid; i++){
        const item = document.createElement("div");

        item.classList.add("item", "item-" + i);
        container.appendChild(item);
    }

})