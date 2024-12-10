require('dotenv').config();

const axios = require('axios');

const myPostCode = process.env.myPostCode;
const arthurPostCode = process.env.arthurPostCode;
const myOutCode = process.env.myOutCode;

const apiUrl = `https://api.postcodes.io/postcodes/${myPostCode.toLowerCase()}`;
const outCodeUrl = `https://api.postcodes.io/outcodes/${myOutCode.toLowerCase()}`;
const apiPostcodesUrl = `https://api.postcodes.io/postcodes/`;

//Request Config
var requestConfigApi = {
    method:'get',
    url:apiUrl,
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

var requestConfigPostcodes = {
    method:'post',
    url:apiPostcodesUrl,
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    data: {"postcodes": [`${myPostCode}`, `${arthurPostCode}`]}
}

var requestConfigOutCode = {
    method:'get',
    url:outCodeUrl,
    headers:{
        'Accept': 'application/json',
        'Content-Type':  'application/json'
    }
}
//Create create an instance
const requestInstance = axios.create();

//Use instance to create a request
const postCodeDataRequest = requestInstance.request(requestConfigApi);
const outCodeDataRequest = requestInstance.request(requestConfigOutCode);
const poscodeGetAll = requestInstance.request(requestConfigPostcodes);

//Handle Response
postCodeDataRequest
.then(function(response){
    console.log("Response Content (JSON)");
    console.log(response.data);
})
.catch(function(error){
    console.log("Error occured");
    console.log(error.message);
})

outCodeDataRequest
.then(function(response){
    console.log("Outcode:");
    console.log(response.data);
})
.catch(function(error){
    console.log("Error occured");
    console.log(error.message);
})

poscodeGetAll.then(function(response){
    console.log("Postcodes List")
    console.log(response.data);
})