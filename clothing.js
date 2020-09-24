
const clothing = [
  {
    cost: 13.95,
    gender: 'M',
    name: 'shirt',
    size: 'XL',
  },
  {
    cost: 6.95,
    gender: 'W',
    name: 'scarf',
    size: 3,
  },
  {
    cost: 44.95,
    gender: 'M',
    name: 'jeans',
    size: 'M',
  },
  {
    cost: 22.95,
    gender: 'W',
    name: 'shirt',
    size: 'L',
  },
  {
    cost: 22.95,
    gender: 'M',
    name: 'shirt',
    size: 'S',
  },
  {
    cost: 13.95,
    gender: 'M',
    name: 'belt',
    size: 44,
  },
  {
    cost: 19.95,
    gender: 'W',
    name: 'panties',
    size: 'M',
  },
  {
    cost: 17.95,
    gender: 'M',
    name: 'undershirts',
    size: 'XL',
  },
  {
    cost: 33.95,
    gender: 'W',
    name: 'pants',
    size: 'S',
  },
  {
    cost: 17.95,
    gender: 'W',
    name: 'shirt',
    size: 'L',
  },
  {
    cost: 67.95,
    gender: 'M',
    name: 'hat',
    size: 'XL',
  },

];

function cheap(el) {
  if (el.cost < 10) {
    return el;
  }
}
const clothingCheap = clothing.filter(cheap);
console.log(clothingCheap);

function expensive(el) {
  if (el.cost >= 10 && el.gender === "M") {
    return el;
  }
}
const expensiveMale = clothing.filter(expensive);

function maleOnly(el) {
  if (el.gender === "M") {
    return el;
  }
}
function femaleOnly(el) {
  if (el.gender === "F") {
    return el;
  }
}
function s(el1, el2) {
  return el1.cost - el2.cost;

}

const maleSorted = clothing.filter(maleOnly).sort(s);
console.log(maleSorted);

const femaleSorted = clothing.filter(femaleOnly).sort(s);