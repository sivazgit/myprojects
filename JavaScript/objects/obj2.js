// Create an object for car {name,model,manufacture,price}

var car={
        name:"polo",
        model: "hatchback",
        manufacture:"volkswagen",
        price:1300000
}

// display manufacture of the car

// check whether the model is present otherwise add model and display

// add property 'varient'

// add more item to the varient key using push method

// add color as new property and add more option to it

// 1.
console.log(car["manufacture"]);

// 2.
if("model" in car){
console.log(car.model);
}

// 3.
car["varient"]=["value"]
console.log(car);

// inserting value using push method

car["varient"].push('value2')
console.log(car);


car["color"]=["red","black"]
car["color"].push("blue")
console.log(car);


