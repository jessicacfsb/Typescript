interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    SideLength: number;
}

window.onload = () => {

    var square = <Square>{};
    square.color = "Blue";
    square.penWidth = 5.0;
    square.SideLength = 10;

    (alert (square.color + " " + square.penWidth + " " + square.SideLength))
}