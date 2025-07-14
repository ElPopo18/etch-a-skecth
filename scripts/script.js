document.addEventListener('DOMContentLoaded', function () {

    function assignGrid(){
        let message = window.prompt("Enter the size of the grid (between 1 and 100)");
        let totalDivs = parseInt(message);

        totalDivs = Math.pow(totalDivs, 2);

        createGrid(totalDivs, message);
    }

    let container = document.querySelector(".container")
    const button = document.querySelector(".button");

    let grid = Math.pow(16, 2);

    function createGrid(totalDivs, size){
        size = 900/size;
        let size2 = `${size}px`;
        
        for (let i = 0; i < totalDivs; i++){
            const item = document.createElement("div");

            item.classList.add("item", "item-" + i);
            container.appendChild(item);

            item.style.border = '1px solid black';
            item.style.width = size2;
            item.style.height = size2;

            item.addEventListener("mouseover", (e) => {
            item.style.backgroundColor = "black";
            console.log(item);
        })
        }
    }

    button.addEventListener("click", assignGrid);

})