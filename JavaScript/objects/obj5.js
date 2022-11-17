weatherdata=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

// display output in sorting order based on temperature

output = {}
for(let data of weatherdata){
    let distName= data['district']
    let curTemp = data['weather']
    if(distName in output){
        let oldtemp=output[distName]
        if(curTemp>oldtemp){
            output[distName]=curTemp
        }
    }
     else{
        output[distName]=curTemp
     }

    }
console.log(output);

// to convert object to a nested array object.entries() is used
// displaying object in sorted order by converting it to a nested array
Object.entries(output).sort((itm1,itm2)=>itm2[1]-itm1[1]).forEach(itm=>console.log(itm[0])));
  // to convert Object to array object.entries is used
