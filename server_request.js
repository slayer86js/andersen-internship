
async function server_request () {
    const response = await fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
    const data = await response.json();
    if (data.getUsersData) {
       const responseArray = await fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC');
       const fulldata = await responseArray.json();
       console.log(fulldata);
    }
}
server_request();

