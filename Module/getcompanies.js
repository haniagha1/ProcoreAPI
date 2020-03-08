const gettoken =require("../Module/auth")

const fetch = require("node-fetch");

//get request to procore 
const getvendors = async (apiurl,project_id) => {
    const token = await gettoken();
    try {
        var res = await fetch(`${apiurl}/vapid/projects/${project_id}/vendors`, {
            method: "GET",
            headers: token
        })
    } catch (e) {
        console.log(e)
    }
    let data = await res.json()
    return data
   
}

//format companies
const  getcompanies= async(apiurl,project_id)=>{
var companies=[];
let vendors= await getvendors(apiurl,project_id);

vendors.map(vendor=>{

    companies.push({id:vendor.id, name:vendor.name,address:vendor.address,phone:vendor.business_phone})
})
return companies

}

module.exports=getcompanies