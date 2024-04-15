// https://coolors.co/463f3a-8a817c-bcb8b1-f4f3ee-e0afa0
let colors = ["#8a817c", "#bcb8b1", "#e0afa0", "#c0d6df"];
let bg = "#f4f3ee"; //背景顏色

let balls = []; //儲存球體物件的陣列

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(bg);

  let cells = 5;
  let offset = width / 10;
  let margin = offset / 1.5;
  let w = (width - offset * 2 - margin * (cells - 1)) / cells;
  let h = (height - offset * 2 - margin * (cells - 1)) / cells;

  for (let j = 0; j < cells; j++) {
    for (let i = 0; i < cells; i++) {
      let x = offset + i * (w + margin);
      let y = offset + j * (h + margin);

      let d = w;
      let c = random(colors);

      let ball = {
        p: createVector(x + w / 2, y + h / 2), //位置
        r: d, // 尺寸
        color: c, // 顏色
        v: createVector(random(-2, 2), random(-2, 2)) // 速度
      };

      balls.push(ball); // 
    }
  }
}

function draw() {
  background(bg);
  
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];

    push();
    translate(ball.p.x, ball.p.y);

    //  
    strokeWeight(ball.r / 3.4);
    stroke(ball.color);
    noFill();

    if (random(100) < 50) {
      arc(0, ball.r / 4, ball.r, ball.r, random(150, 210), random(330, 390));
    } else {
      push();
      rotate(180);
      arc(0, ball.r / 1.8, ball.r * 0.8, ball.r * 0.8, random(150, 210), random(330, 390));
      pop();
    }

    // 
    noStroke();
    fill(ball.color);
    ellipse(0, 0, ball.r, ball.r / 1.12);

    //  
    fill("#463f3a");
    circle(-ball.r / 6, -ball.r / 50, ball.r / 7);
    circle(ball.r / 6, -ball.r / 50, ball.r / 7);

    //  
    fill(bg);
    circle(ball.r / 9, ball.r / 7.5, ball.r / 3.5);
    circle(-ball.r / 9, ball.r / 7.5, ball.r / 3.5);

    //  
    fill(ball.color);
    ellipse(0, ball.r / 11, ball.r / 5, ball.r / 7);

    pop();

    // 
    ball.p.add(ball.v);

    // 
    if (ball.p.x + ball.r / 2 >= width || ball.p.x - ball.r / 2 <= 0) {
      ball.v.x *= 5;
    }
    if (ball.p.y + ball.r / 2 >= height || ball.p.y - ball.r / 2 <= 0) {
      ball.v.y *= 5;
    }
  }
}