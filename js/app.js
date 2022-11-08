const CANVAS = document.getElementById("canvas");
const CONTEXT = CANVAS.getContext("2d");

let worldGenArray = [];
for (let i = 0; i < 20; i++) {
    worldGenArray.push([]);
    for (let j = 0; j < 11; j++) {
        worldGenArray[i].push([]);
        for(let k = 0; k < 4; k++){
            worldGenArray[i][j].push(k);
        }
    }
}

console.log(worldGenArray)

function update() {
    for (let i = 0; i < 6; i++) {
        for (let row = 0; row < worldGenArray.length; row++) {
            for (let col = 0; col < worldGenArray[row].length; col++) {
                for (let cell = 0; cell < worldGenArray[row][col].length; cell++) {
                    
                }
            }
        }
    }
    let randomRow = Math.floor(Math.random() * 20)
    let randomCol = Math.floor(Math.random() * 11)
    let randomCell = Math.floor(Math.random() * worldGenArray[randomRow][randomCol].length)
    for (let cell = 0; cell < worldGenArray[randomRow][randomCol].length-1; cell++) {
        worldGenArray[randomRow][randomCol].splice(randomCell,1)
    }
}

console.log(worldGenArray)

function drawElements(context) {
    
}




setInterval(() => {
    CONTEXT.clearRect(0, 0, 100, 100);

    update()
    drawElements(CONTEXT);
}, 10);