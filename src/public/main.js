const search = document.getElementById("text");
const resList = document.getElementById("result-list");
const subbtn = document.getElementById("btn");
let temp;
let matchingCars;
//filters the json
//using async/await to deal with promises and wait until we fetch the data
const searchResults = async (search) => {
  resList.innerHTML = "";
  try {
    const res = await fetch("http://localhost:5000/autocomp");
    //saves the data in a variable

    const data = await res.json();
    const cars = JSON.parse(data).data;
    temp = cars;

    // now we need to filter the data
     matchingCars = cars.filter((car) => {
      //stores the car that begins with 'search' hence the "^" and 'gi' in order to accept capital/small letter results as well
      const exp = new RegExp(`^${search}`, "gi");
      return car.Name.match(exp);
    });
    //clears the array in case the user is not searching for anything
    if (search.length == 0) {
      matchingCars = [];
    }
    //sends data to be printed on the screen
    manipulateScreen(matchingCars);
  } catch (err) {
    console.log(err);
  }
};

function manipulateScreen(cars) {
 
      cars.map((car) => {
      const newLi = document.createElement("option");
      newLi.value = `${car.Name}`;
      resList.appendChild(newLi);
    });
  }

//works everytime we press a key
search.addEventListener("input", () => searchResults(search.value));
subbtn.addEventListener("click", () => data(matchingCars[0]));
function data(cars) {

  console.log( matchingCars)
  
 

    document.getElementById("name").innerHTML = "name: " + cars.Name;
    document.getElementById("Miles_per_Gallon").innerHTML =
      "Miles_per_Gallon: " + cars.Miles_per_Gallon;
    document.getElementById("Cylinders").innerHTML =
      "Cylinders: " + cars.Cylinders;
    document.getElementById("Displacement").innerHTML =
      "Displacement: " + cars.Displacement;
    document.getElementById("Horsepower").innerHTML =
      "Horsepower: " + cars.Horsepower;
    document.getElementById("Weight_in_lbs").innerHTML =
      "Weight_in_lbs: " + cars.Weight_in_lbs;
    document.getElementById("Acceleration").innerHTML =
      "Acceleration: " + cars.Acceleration;
    document.getElementById("Year").innerHTML = "Year: " + cars.Year;
    document.getElementById("Origin").innerHTML = "Origin: " + cars.Origin;
  
}

function select1(){
  search.value=resList.innerHTML;
}
