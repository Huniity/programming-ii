export const WEATHER_CODES = {
    0: { condition: 'Clear sky'},
    1: { condition: 'Mainly clear'},
    2: { condition: 'Partly cloudy'},
    3: { condition: 'Overcast'},
    45: { condition: 'Fog'},
    48: { condition: 'Depositing rime fog'},
    51: { condition: 'Light drizzle'},
    53: { condition: 'Moderate drizzle'},
    55: { condition: 'Dense drizzle'},
    56: { condition: 'Light freezing drizzle'},
    57: { condition: 'Dense freezing drizzle'},
    61: { condition: 'Light rain'},
    63: { condition: 'Moderate rain'},
    65: { condition: 'Heavy rain'},
    66: { condition: 'Light freezing rain'},
    67: { condition: 'Heavy freezing rain'},
    71: { condition: 'Light snow fall'},
    73: { condition: 'Moderate snow fall'},
    75: { condition: 'Heavy snow fall'},
    77: { condition: 'Snow grains'},
    80: { condition: 'Light rain showers'},
    81: { condition: 'Moderate rain showers'},
    82: { condition: 'Violent rain showers'},
    85: { condition: 'Light snow showers'},
    86: { condition: 'Heavy snow showers'},
    95: { condition: 'Thunderstorm'},
    96: { condition: 'Thunderstorm with slight hail'},
    99: { condition: 'Thunderstorm with heavy hail'},
  };
  

// fs.writeFile('./userdata.json', data, { flag: 'a+' }, (err) => {
//   if (!err) {
//     console.log('done');
//   }
// });

// ORRRRRRRRRRRR

// fs.readFile('./userdata.json', (err, data) => {
//   if (err){
//       console.log(err);
//   } else {
//       obj = JSON.parse(data);
//       obj.push(sendData);
//       json = JSON.stringify(obj); 
//       fs.writeFile('./userdata.json', json, callback);
// }});