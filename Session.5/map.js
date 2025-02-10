  try {
    const fs = require('fs');
    const csvData = fs.readFileSync('users_data.csv', 'utf-8');
    console.log(csvData);
    const rows = csvData.split('\n');
    const headers = rows[0].split(','); // ["id", "name", "city"]

    const data = rows.slice(1).map(row => {
        const values = row.split(',');
        return {
            id: parseInt(values[0]),
            name: values[1],
            city: values[2], 
        };
    });
    const city_map = Object.groupBy(data, ({ city }) => city);
    fs.writeFileSync('users.json', JSON.stringify(city_map, null, 2));
    console.log(city_map)
} catch (error) {
    console.error('Error:', error.message);
}
//City();

//groupBy

/* const users = [  
    { id: 1, name: 'Alice', city: 'Paris' },  
    { id: 2, name: 'Bob', city: 'London' },  
    { id: 3, name: 'Charlie', city: 'Paris' }  
  ];


try{


function City(){
    const city_map = new Map();

    users.forEach((user) => {
        if (city_map.has(user.city)){
            console.log(`${user.city} already added`)
        }
        if (!city_map.has(user.city)){
            city_map.set(user.city, []);
            console.log(`${user.city} added sucessfully`)
        }
        city_map.get(user.city).push(user)
        console.log(city_map)
    })
}
City();
} catch (error) {
    console.error('Error:', error.message);
}*/
