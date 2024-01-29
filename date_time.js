var today = new Date();

// Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
var day = today.getDay();

//  hours, Mintue, second,  Meridian, day, date 
var hr = today.getHours();
var mint = today.getMinutes();
var hr_12 = (12 - (24-hr));
var day = today.getDay();
var date = today.getDate();
var month = 1 + today.getMonth();
var year = today.getFullYear();
var secn = today.getSeconds();
var dayss = ["Sunday", "Monday", "Tuesday","Wednesday","Thusday","Friday","Saturday"];
var meri = '';
if (hr>12){
    meri = "PM";
}
else{
    meri = "AM";
}

 console.log(`${hr_12}:${mint}:${secn} ${meri}\n${dayss[day]} ${date}/${month}/${year}`);
