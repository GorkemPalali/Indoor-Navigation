("use strict");

let isDrawed = false;

const resetButton = function(){
  localStorage.removeItem("begin");
  localStorage.removeItem("end");
  console.log("sdfg");
  location.reload();
}
const calcDistance = function (a, b) {
  return (
    (Math.abs(a.coordinates[0] - b.coordinates[0]) ** 2 +
      Math.abs(a.coordinates[1] - b.coordinates[1]) ** 2) **
    (1 / 2)
  );
};
const findFloor = function (id) {
  for (let i = 0; i < DBlokstr.length; i++)
    for (let j = 0; j < DBlokstr[i].length; j++)
      if (DBlokstr[i][j] === id) return i;
};

const findPath = function (start12, final) {
  const arr = [[start12]];
  const distances = [0];
  let line = [];

  document.querySelectorAll("circle").forEach((circle) => {
    circle.style.opacity = 0;
  });

  while (true) {
    //find arrIndex
    const min = Math.min(...distances);
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!değiştirildi!
    const arrIndex = distances.indexOf(min);

    //path: which is the last element of the current path
    const path = arr[arrIndex][arr[arrIndex].length - 1];
    //check if we already came to the end
    if (path === final) {
      arr[arrIndex].push(path);
      line = arr[arrIndex];
      console.log(path, final);
      break;
    }
    //get the available options
    let options = path.options.filter(
      (option) => !arr[arrIndex].includes(option)
    );

    if (options.length === 0) {
      arr.splice(arrIndex, 1);
      distances.splice(arrIndex, 1);
    } else {
      let i = options.length - 1;
      const added = options[i--];
      const copy = arr[arrIndex].slice("");
      arr[arrIndex].push(added);
      distances[arrIndex] =
        calcDistance(added, final) + calcDistance(added, start12);
      while (i >= 0) {
        const copy2 = copy.slice("");
        copy2.push(options[i]);
        arr.push(copy2);
        distances.push(
          calcDistance(options[i], start12) + calcDistance(options[i], final)
        );
        i--;
      }
    }
  }

  for (let i = 0; i < line.length - 2; i++) drawLineObj(line[i], line[i + 1]);

  document.getElementById(final.id).style.opacity = 100;

  isDrawed = true;
};

let beginStorage = null,
  endStorage = null,
  floor = null;
for (let i = 0; i < DBlok.length; i++) {
  for (let j = 0; j < DBlok[i].length; j++) {
    if (DBlok[i][j].id === localStorage.getItem("begin")) {
      beginStorage = DBlok[i][j];
      floor = i;
      break;
    }
  }
}
for (let i = 0; i < DBlok.length; i++) {
  for (let j = 0; j < DBlok[i].length; j++) {
    if (DBlok[i][j].id === localStorage.getItem("end")) {
      endStorage = DBlok[i][j];
      floor = i;
      break;
    }
  }
}

if (beginStorage && endStorage) findPath(beginStorage, endStorage);
else if (beginStorage && !endStorage) findPath(beginStorage, DBlok[floor][0]);
else if (!beginStorage && endStorage) findPath(DBlok[floor][0], endStorage);
console.log(localStorage.getItem("end"), localStorage.getItem("begin"));

const submitButtonDOM = document.getElementById("submitButton");

//hide the dots by default

let begin;
let end;

const decleareDot = function () {
  if (isDrawed === true) {
    document.querySelectorAll("#line2").forEach((element) => {
      element.remove();
    });
  }

  let beginInputDOM = document.getElementById("beginInput").value;
  let endInputDOM = document.getElementById("endInput").value;

  (begin = null), (end = null);
  let beginKat, endKat;

  for (let i = 0; i < DBlok.length; i++) {
    for (let j = 0; j < DBlok[i].length; j++) {
      if (DBlok[i][j].id === beginInputDOM) {
        begin = DBlok[i][j];
        beginKat = i;
        break;
      }
    }
  }

  for (let i = 0; i < DBlok.length; i++) {
    for (let j = 0; j < DBlok[i].length; j++) {
      if (DBlok[i][j].id === endInputDOM) {
        end = DBlok[i][j];
        endKat = i;
        break;
      }
    }
  }
  if (!beginKat) beginKat = findFloor(beginInputDOM);
  if (!endKat) endKat = findFloor(endInputDOM);

  if (
    !DBlokstr[beginKat].includes(beginInputDOM) ||
    !DBlokstr[endKat].includes(endInputDOM)
  )
    console.log("unvalid input");
  else {
    localStorage.setItem("end", endInputDOM);
    localStorage.setItem("begin", beginInputDOM);

    if (beginKat === endKat) findPath(begin, end);
    else {
      if (begin) findPath(begin, DBlok[beginKat][0]);
      else if (end) findPath(DBlok[endKat][0], end);
    }
  }
};

// const resetButtonDOM = document.getElementById("reset");
// resetButtonDOM.addEventListener("click", resetButton)

var resetButtonDOM = document.getElementById('reset');
if(resetButtonDOM){
  resetButtonDOM.addEventListener("click", resetButton)
}

submitButtonDOM.addEventListener("click", decleareDot);



