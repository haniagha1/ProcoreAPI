const fetch = require("node-fetch");
require('dotenv').config()
const gettoken =require("./Module/auth")
const getcompanies=require("./Module/getcompanies")
//get access info

project_id="13572"
let authurl = "https://sandbox.procore.com/oauth/token"
let apiurl ="https://sandbox.procore.com"





getcompanies(apiurl,project_id).then(companies=>{
    console.log(companies)

})


const getusers = async () => {
    const token = await gettoken();
    try {
        var res = await fetch(`${apiurl}/vapid/companies/${company_id}/users`, {
            method: "GET",
            headers: token
        })
    } catch (e) {
        console.log(e)
    }
    let data = await res.json()
    console.log(data)
    return data
   
}



