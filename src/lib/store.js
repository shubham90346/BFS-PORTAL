let url = "https://dev.beautyfashionsales.com/beauty/"
let URL = "https://dev.beautyfashionsales.com/beauty/0DS68FOD7s"

export async function AuthCheck() {
  if (JSON.parse(localStorage.getItem("Api Data"))?.data)
  {
    return true;
  } else {
    return false;
  }
}


export async function DestoryAuth() {
   localStorage.clear()
   return true
  }

export async function GetAuthData() {
    if(!AuthCheck){
        DestoryAuth();
    }else{
        return JSON.parse(localStorage.getItem("Api Data"))?.data;
    }
}

export async function getOrderList({ user }) {

    let headersList = {
        "Accept": "*/*"
       }
       
        let bodyContent = new FormData();
        bodyContent.append("key", user.key);
        bodyContent.append("Sales_Rep__c",user.Sales_Rep__c);
    
       let response = await fetch(url+"v3/20h2J48c", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       });
       let data = JSON.parse(await response.text());
       return data.data
       
  }

