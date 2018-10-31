class Canvas {
  init = (elem, canvasW, canvasH) => {
    this.canvasW = canvasW;
    this.canvasH = canvasH;

    let canvasElem = document.createElement("canvas");
    canvasElem.className = "swipeCanvasElement";
    canvasElem.width = canvasW;
    canvasElem.height = canvasH;

    elem.insertAdjacentElement('beforebegin', canvasElem);
    this.canvas = document.querySelector(`.swipeCanvasElement`);
    this.ctx = this.canvas.getContext("2d");
  }

  clear = () => {
    this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);
  }

  draw = (prevX, prevY, currX, currY) => {
    //this.ctx.fillRect(this.currX - 2, this.currY - 2, 5, 5);
    this.ctx.beginPath();
    this.ctx.moveTo(prevX, prevY);
    this.ctx.lineTo(currX, currY);
    this.ctx.strokeStyle = "rgba(10, 103, 115, 0.9)";
    this.ctx.lineWidth = 3;
    this.ctx.stroke();
    this.ctx.closePath();
  }
}

export default Canvas;