/**
 * That's code from my old homepage, untouched since 2014.
 */

var P = function (canvas, options) {
  var p = this,
    dots = [];
  this.canvas = canvas;

  this.init = function () {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');

    (this.vx = options.v.x), (this.vy = options.v.y);

    this.base = options.base;
    this.density = (this.width * this.height) / options.density;

    this.spread();

    this.ctx.fillStyle = this.ctx.strokeStyle = 'rgb(255, 255, 255)';
  };

  this.spread = function () {
    dots = [];
    for (var i in options.dots) {
      var quantity = options.dots[i] * this.density;
      for (var j = 0; j < quantity; j++) {
        var x = Math.random() * this.width,
          y = Math.random() * this.height,
          diff = Math.random() * 0.2;

        dots.push({
          size: Number(i),
          x: x,
          y: y,
          diff: diff,
        });
      }
    }
  };

  this.init();

  this.clear = function () {
    this.ctx.clearRect(0, 0, this.width, this.height);
  };

  this.dot = function (x, y, size) {
    if (size > 2) {
      this.ctx.beginPath();
      this.ctx.arc(x, y, (size - 1) / 2, 0, 2 * Math.PI, false);
      this.ctx.fill();
      this.ctx.stroke();
    } else {
      this.ctx.fillRect(x, y, size, size);
    }
  };

  this.draw = function () {
    dots.forEach(function (dot) {
      p.dot(dot.x, dot.y, dot.size);
    });
  };

  this.move = function () {
    dots.forEach(function (dot) {
      var factor = p.base * (1 + dot.diff) * dot.size;
      if (p.vx) {
        dot.x = (dot.x + p.vx * factor + p.width) % p.width;
      }

      if (p.vy) {
        dot.y = (dot.y + p.vy * factor + p.height) % p.height;
      }
    });
  };

  this.frame = function () {
    this.move();
    this.clear();
    this.draw();
  };

  this.next = function () {
    this.frame();
    this.queue();
  };

  this.queue = function () {
    window.requestAnimationFrame(p.next.bind(p));
  };

  this.orientation = function (event) {
    if (event.beta && event.gamma) {
      var x = event.beta,
        y = event.gamma;

      x = x / 90;
      y = y / 90;

      if (x > 1) {
        x = 1;
      }
      if (x < -1) {
        x = -1;
      }

      this.vx = -y;
      this.vy = -x;
    }
  };

  this.mouse = function (event) {
    var x = event.x,
      y = event.y;

    this.vx = 1 - (2 * x) / this.width;
    this.vy = 1 - (2 * y) / this.height;
  };

  this.clear();
  this.next();

  window.addEventListener('deviceorientation', p.orientation.bind(p));
  window.addEventListener('mousemove', p.mouse.bind(p));
  window.addEventListener('resize', p.init.bind(p));
};

export const run = () => {
  if (!document.querySelector || !window.addEventListener) {
    alert('Wow. Seems like you are using old browser, like IE8. Do you hate yourself?');
  } else {
    var p = new P(document.querySelector('#background'), {
      base: 0.1,
      density: 100000,
      dots: {
        '1': 20,
        '2': 5,
        '3': 2,
        '4': 1,
      },
      v: {
        x: 0,
        y: -0.5,
      },
    });
  }
};
