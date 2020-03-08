function laundry(numShirts, numEvents, numDays, eventDate){
  laundryShirts = 0;
  laundryTimes = 0;
  
  for(let i =0; i <= numDays - 1; i++){
    if(numShirts == 0){
      laundryTimes += 1;
      numShirts = laundryShirts;
      laundryShirts = 0;
    }
    
    if(eventDate.includes(i+1)){
      numShirts += 1;
    }
    numShirts -= 1;
    laundryShirts += 1;
  }
  return laundryTimes
}

laundry(1, 1, 10, [10]);

