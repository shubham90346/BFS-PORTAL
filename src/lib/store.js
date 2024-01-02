let url = "https://dev.beautyfashionsales.com/beauty/"

export async function AuthCheck() {
  if (JSON.parse(localStorage.getItem("Api Data"))?.data) {
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
        bodyContent.append("key", "00D30000001G9fh!AQEAQORv8mcnF5PJrQBgHHfsKMG1wicPw5tQRnnNUhZsMNh.SUu3zd2q6Suo9hV9YsOLzy56IzmyXSnRcdhI8MhoE5w1qVDF");
        bodyContent.append("Sales_Rep__c", "00530000005AdvsAAC");
       
       let response = await fetch("https://dev.beautyfashionsales.com/beauty/v3/20h2J48c", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       });
       
       let data = JSON.parse(await response.text());
       return data.data
       
  }
