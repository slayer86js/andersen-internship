
async function server_request () {
    const response = await fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
    const data = await response.json();
    if (data.getUsersData == true) {
       const response_2 = await fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC');
       const fulldata = await response_2.json();
       console.log(fulldata);
    }
}
server_request();

