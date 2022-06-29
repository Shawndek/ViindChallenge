const cTwo = () => {
  //fetching from json file
  fetch('./data.json')
    .then(function (res) {
      return res.json();
    })
    // storing array in 'arr'
    .then(function (data) {
      const arr = data;

      // going through the array and counting the actions 'action_default_fallback'
      let counter = 0;
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].actions.length; j++) {
          if (arr[i].actions[j] === 'action_default_fallback') counter++;
        }
      }
      // percentage and round
      const percent = (counter / arr.length) * 100;
      let rounded = Math.round(percent * 100) / 100;
      // console.log(arr.length);
      // console.log(counter);
      // console.log(percent);
      console.log(
        rounded + ' % der Konversationen sind in einen Fallback gelaufen.'
      );
    });
};
cTwo();
