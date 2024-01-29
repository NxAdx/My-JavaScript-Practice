function daysUntilBirthday(dob) {
    // Parse the date of birth
    let dobParts = dob.split("/");
    let birthMonth = parseInt(dobParts[1], 10);
    let birthDay = parseInt(dobParts[0], 10);
    let birthYear = parseInt(dobParts[2], 10);

    // Get the current date
    let today = new Date();
    let currentMonth = today.getMonth() + 1; // Adjusting for zero-based month
    let currentDate = today.getDate();
    let currentYear = today.getFullYear();

    // Calculate the next birthday
    let nextBirthday = new Date(currentYear, birthMonth - 1, birthDay);
    if (nextBirthday < today) {
        // If the birthday has already passed this year, calculate for the next year
        nextBirthday.setFullYear(currentYear + 1);
    }

    // Calculate the difference in milliseconds
    let timeDifference = nextBirthday.getTime() - today.getTime();

    // Calculate the number of days
    let daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysLeft;
}

// Example usage:
let dob = "28/10/1998";
let daysLeft = daysUntilBirthday(dob);
console.log("Days left until the next birthday:", daysLeft);
