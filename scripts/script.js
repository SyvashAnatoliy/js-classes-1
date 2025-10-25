const showRadiusButton = document.getElementById('showRadius');
const changeRadiusButton = document.getElementById('changeRadius');
const showDiameterButton = document.getElementById('showDiameter');
const calculateAreaButton = document.getElementById('calculateArea');
const calculateLenghtButton = document.getElementById('calculateLenght');

class Circle {
  constructor (radius) {
    this.radius = radius;
    console.log(radius);
  }

  get currentRadius() {
    return this.radius;
  };

  set currentRadius(newRadius) {
    this.radius = newRadius;
  };

  get currentDiameter() {
    return this.radius * 2;
  };

  calcArea() {
    const area = Math.PI * this.currentRadius ** 2;
    return area;
  };

  calcLenght() {
    const lenght = Math.PI * Circle1.currentDiameter;
    return lenght;
  }
}

const Circle1 = new Circle (5);

showRadiusButton.onclick = function() {
  alert('Current circle radius is: ' + Circle1.currentRadius);
};

changeRadiusButton.onclick = function() {
  const newRadius = prompt('Enter new circle radius:');
  if(!newRadius || isNaN(newRadius) || Number(newRadius) <= 0) {
    alert('Error - enter correct positive number.')
  } else {
  Circle1.currentRadius = newRadius;
  }
};

showDiameterButton.onclick = function() {
  alert('Current circle diameter is: ' + Circle1.currentDiameter);
};

calculateAreaButton.onclick = function() {
  alert('Current circle area is: ' + Circle1.calcArea().toFixed(2));
};

calculateLenghtButton.onclick = function() {
  alert('Current circle lenght is: ' + Circle1.calcLenght().toFixed(2));
};

