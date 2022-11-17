//[ no,district,+ve cases,death rate,curred rate,1st dose vaccine,2nd dose vaccine]
covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]

]

//1. district having Highest +ve case - red

//2. district having Highest 1st dose vaccine -red

//3. district having lowest death rate - red

//4. sort data with +ve case in descending order - sort

//5. is district with +ve cases > 15000

//6. sort data with 1st dose vaccine - sort

//7. Print Thrissur details - find

//8. Print total number of positive cases - reduce

//9. Print total number of curred cases - reduce

//10. Print curred cases in Idukki - find


// 1.
console.log("red zone district: "+covid_data.reduce((data1,data2)=>data1[2]>data2[2]?data1:data2).find((item=>item[1]))); 

// 2.
console.log("green zone district: "+covid_data.reduce((data1,data2)=>data1[5]>data2[5]?data1:data2).find((item=>item[1]))); 

// 3.
console.log(covid_data.reduce((data1,data2)=>data1[3]<data2[3]?data1:data2).find((item=>item[1]))); 

// 4.
console.log(covid_data.sort((data1,data2)=>data2[2]-data1[2]).map(item=>item[1]));

// 5.
console.log(covid_data.find((item=>item[1]=='Thrissur')));