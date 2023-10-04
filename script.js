function clock(){
    var todayDate = dayjs().format('MMM DD, YYYY, [at] HH:MM:ss a');
    $('#currentDay').text(todayDate);}
    
    setInterval(clock, 1000)