const url = [
    'http://www.json-generator.com/api/json/get/cevhxOsZnS',
    'http://www.json-generator.com/api/json/get/cguaPsRxAi',
    'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
    'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
    'http://www.json-generator.com/api/json/get/ceQMMKpidK'
];
// через цикл 
/*async function server_request(arr) {
    const data = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        const getData = await fetch(item).then(response => response.json());
        data.push(getData);
    }
    console.log(data);
}
server_request(url);*/

//через reduce

Promise.resolve(url.reduce((accum, item) => {return accum
    .then(res => fetch(item, res)) 
    .then(response => response.json())
    .then(result => console.log(result))}, Promise.resolve()))

