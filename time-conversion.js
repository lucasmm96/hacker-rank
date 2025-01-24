function timeConversion(s) {
    let convertedHours = s;
    let hours = s.substring(0, 2);
    let period = s.substring(8);

    if (period === 'PM' && hours != 12) {
        convertedHours = s.replace(hours, parseInt(hours) + 12);
    } else if (period === 'AM' && hours == 12){
        convertedHours = s.replace(hours, '00');
    }

    return convertedHours.substring(0, 8);
}

// input = '07:05:45PM';
// input = '12:05:45PM';
input = '12:05:45AM';
output = timeConversion(input);
console.log(output);
