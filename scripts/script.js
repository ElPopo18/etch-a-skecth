document.addEventListener('DOMContentLoaded', function () {

    function assignGrid(){
        size = window.prompt("Enter the size of the grid (between 1 and 100)");

        if(size > 100){
            size = window.prompt("Please enter a valid size (between 1 and 100)");
        }

        for(let j = 0; j < grid; j++){
            container.removeChild(container.firstElementChild);
        }

        grid = parseInt(size);

        grid = Math.pow(grid, 2);

        createGrid(grid, size);
    }

     function createGrid(grid, size){

        size = 850/size;        /* Is 850 because thats the height and width of the container  */
        let dimensions = `${size}px`;
        
        for (let i = 0; i < grid; i++){
            const item = document.createElement("div");

            item.classList.add("item", "item-" + i);
            container.appendChild(item);

            item.style.border = '1px solid black';
            item.style.width = dimensions;
            item.style.height = dimensions;

            item.addEventListener("mouseover", (e) => {

                function generateRandomInteger(min, max){
                    let color = Math.floor(Math.random() * (max - min + 1)) + min;
                    return color;
                }

                const r = generateRandomInteger(0, 255);
                const g = generateRandomInteger(0, 255);
                const b = generateRandomInteger(0, 255);
                item.style.backgroundColor = `rgb(${[r,g,b].join(',')})`;
            })
        }
    }

    let container = document.querySelector(".container")
    const button = document.querySelector(".button");

    /* The default size of the grid */
    let defaultSize = 16;
    let grid = Math.pow(defaultSize, 2); 

    createGrid(grid, defaultSize);

    button.addEventListener("click", assignGrid);

})