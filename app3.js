//fetching from json file
fetch('./data.json')
  .then(function (res) {
    return res.json();
  })
  // storing array in 'arr'
  .then(function (data) {
    const arr = data;
    //console.log(arr);

    // creating a new array 'int' -> filling it with ALL intents
    let int = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].intents.length; j++) {
        int.push(arr[i].intents[j]);
      }
    }
    // filtering by 'faq/' -> new array intFiltered
    const intFilter = int.filter((word) => word.includes('faq/'));
    //console.log(intFilter);

    // counting any occurences of 'faq/* in the array' -> new array occurences
    const occurrences = intFilter.reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});
    //console.log(occurrences);

    //sorting the occurences and displaying index[0]
    const sorted = Object.entries(occurrences).sort((a, b) => {
      return b[1] - a[1];
    });

    console.log(sorted);
    console.log('häufigster Intent: ', sorted[0]);
  });
