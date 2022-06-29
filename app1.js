//fetching from json file
fetch('./data.json')
  .then(function (res) {
    return res.json();
  })
  // storing array in 'arr'
  .then(function (data) {
    //console.log(data);
    const arr = data;

    // creating a new array and filling it with 'n_user_messages'
    let arrarr = [];
    for (let i = 0; i < arr.length; i++) {
      arrarr.push(arr[i].n_user_messages);
    }
    // filtering out the 'ones' and crating a new array 'filtered'
    const filtered = arrarr.filter((num) => num > 1);
    console.log('filtered', filtered);

    // getting the total number of conversations without the 'ones'
    let sum = 0;
    for (let i = 0; i < filtered.length; i++) {
      sum += filtered[i];
    }

    //calculating the mean
    let mean = 0;
    if (sum > 0) {
      mean = sum / filtered.length;
      //console.log('sum', sum);
      //console.log(mean);
      let rounded = Math.round(mean * 100) / 100;
      console.log(
        'Die durchschnittliche Länge einer Konversation beträgt ' + rounded
      );
    } else console.log('arrray is empty');
  });
