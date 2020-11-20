const url = [
    'http://www.json-generator.com/api/json/get/cevhxOsZnS',
    'http://www.json-generator.com/api/json/get/cguaPsRxAi',
    'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
    'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
    'http://www.json-generator.com/api/json/get/ceQMMKpidK'
];

const data = [];
url.reduce((accum, item) => accum
    .then(() => fetch(item)) 
    .then(response => response.json())
    .then(result => data.push(result)), Promise.resolve())
console.log(data);


