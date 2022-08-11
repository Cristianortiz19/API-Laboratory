let canvas;
let URL1 = 'https://randomuser.me/api/';
let data1 = null;

let URL2 = 'https://api.coindesk.com/v1/bpi/currentprice.json'
let data2 = null;

let URL3 = 'https://catfact.ninja/fact'
let data3 = null;

let URL4 = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
let data4 = null;

let URL5 = 'https://dog.ceo/api/breeds/image/random'
let data5 = null;

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');

    fetch(URL1)
        .then(response => response.json())
        .then(data => {data1 = data})
        .catch(error => console.error('Error', error))

    fetch(URL2)
        .then(response => response.json())
        .then(data => {data2 = data})
        .catch(error => console.error('Error', error))

    fetch(URL3)
        .then(response => response.json())
        .then(data => {data3 = data})
        .catch(error => console.error('Error', error))

    fetch(URL4)
        .then(response => response.json())
        .then(data => {data4 = data})
        .catch(error => console.error('Error', error))

    fetch(URL5)
        .then(response => response.json())
        .then(data => {data5 = loadImage(data.message)})
        .catch(error => console.error('Error', error))
    //Async Await model
    /*async function createJoke(category, amount, langCode){
        const query = await fetch(`https://v2.jokeapi.dev/joke/${category}?lang=${langCode}&type=single&amount=${amount}`);
        try {
            const query = await fetch(URL);
            const data = await query.json();
        }catch(error){
            console.log(error);
        
    }*/
}   
    

function draw() {
    //background(0, 50);
    background(0);
    newCursor();

    // Divisiones

    // Random user
    fill(255, 80, 80);
    rect(0, 0, windowWidth/3, windowHeight/2);
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text('Random User', windowWidth/6, (windowHeight/4) - 130);

    fill(80, 255, 80)
    rect(windowWidth/3, 0, windowWidth/3, windowHeight/2);
    textAlign(CENTER);
    fill(255);
    textSize(20);
    text('Coin Desk', (windowWidth/6)*3, (windowHeight/4) - 130);

    fill(110, 110, 215);    
    rect((windowWidth/3) * 2, 0, windowWidth/3, windowHeight/2);
    fill(255);
    textSize(20);
    text('Cat Fact', (windowWidth/6)*5, (windowHeight/4) - 130);

    fill(240, 240, 100);
    rect(0, windowHeight/2, windowWidth/2, windowHeight/2);
    fill(0);
    textSize(20);
    text('Data Population - United States', windowWidth/4, ((windowHeight/4)*2)+50);

    fill(240, 150, 200);
    rect(windowWidth/2, windowHeight/2, windowWidth/2, windowHeight/2);
    fill(0);
    text('Image Dog Generator', (windowWidth/4)*3, ((windowHeight/4)*2)+50);

    //text(users.results[0].name.first, 10, 10);
    if(data1 != null) {
        fill(255);
        textAlign(CENTER);
        textSize(25);
        text(data1.results[0].name.title + '. ' +data1.results[0].name.first + ' ' + data1.results[0].name.last, windowWidth/6, (windowHeight/4)-70);
        textSize(17);
        text(data1.results[0].gender, windowWidth/6, (windowHeight/4)-50);
        rectMode(CENTER);
        rect(windowWidth/6, (windowHeight/4)+140, 130, 40);
        fill(255, 80, 80);
        textSize(14)
        text('Generate user', windowWidth/6, (windowHeight/4)+145);
        rectMode(CORNER);
    }

    if(data2 != null) {
        fill(255);
        textAlign(CENTER);
        textSize(15);
        text('Time: '+data2.time.updateduk, (windowWidth/6) * 3, 120 + (windowHeight/4) - 225);
    }

    if(data3 != null) {
        fill(255);
        textAlign(CENTER);
        textSize(15);
        text(data3.fact,((windowWidth/6) * 5) - 110, 120 + (windowHeight/4) - 180, 220);
        rectMode(CENTER);
        rect((windowWidth/6)*5, (windowHeight/4)+140, 130, 40);
        fill(110, 110, 215);
        textSize(14)
        text('Generate user', (windowWidth/6)*5, (windowHeight/4)+145);
        rectMode(CORNER);
    }

    if(data4 != null) {
        fill(0);
        textAlign(CENTER);
        textSize(20);
        let xPos = 100;
        let yPos = 380;
        for (let x = 0; x < 7; x++) {
            xPos += 160;
            if(xPos > 170) {
                xPos = 0;
                yPos += 50;
            }
            fill(255);
            rect(xPos+50, yPos, 150, 40);
            fill(0);
            textSize(12);
            text(data4.data[x].Year, xPos+120, yPos +12);
            fill(255, 0, 0);
            textSize(18);
            text(data4.data[0].Population, xPos+120, yPos +30);
        }
    }

    if(data5 != null) {
        fill(0);
        imageMode(CENTER)
        image(data5, (windowWidth/4)*3, (windowHeight/4)*3, 230, 230);
        rectMode(CENTER);
        fill(255);
        rect((windowWidth/4)*3, ((windowHeight/4)*3)+145, 130, 40);
        fill(255, 80, 80);
        textSize(14)
        text('Generate dog', (windowWidth/4)*3, ((windowHeight/4)*3)+150);
        rectMode(CORNER);
        }

    newCursor();
}

function mouseClicked(){
    if(pmouseX > (windowWidth/6)-65 && pmouseX < (windowWidth/6)+65 &&
    pmouseY > (windowHeight/4)+125 && pmouseY < (windowHeight/4)+165){
        fetch(URL1)
        .then(response => response.json())
        .then(data => {data1 = data})
        .catch(error => console.error('Error', error))
    }

    if(pmouseX > ((windowWidth/6)*5)-65 && pmouseX < ((windowWidth/6)*5)+65 &&
    pmouseY > (windowHeight/4)+125 && pmouseY < (windowHeight/4)+165){
        fetch(URL3)
        .then(response => response.json())
        .then(data => {data3 = data})
        .catch(error => console.error('Error', error))
    }

    if(pmouseX > ((windowWidth/4)*3)-65 && pmouseX < ((windowWidth/4)*3)+65 &&
    pmouseY > ((windowHeight/4)*3)+130 && pmouseY < ((windowHeight/4)*3)+170){
        fetch(URL5)
        .then(response => response.json())
        .then(data => {data5 = loadImage(data.message)})
        .catch(error => console.error('Error', error))
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(0);
    ellipse(pmouseX, pmouseY, 10, 10);
}