import axios from "axios";

const useSalesReport = (props) => {
  // console.log(JSON.parse(localStorage.getItem("Api Data")));
  return {
    salesReportData: async (props) => {
      const response = await axios.post(
        "https://dev.beautyfashionsales.com/9kJs2I6Bn/i0IT68Q8&0",
        {
          salesRepId: JSON.parse(localStorage.getItem("Api Data")).data.Sales_Rep__c,
        }
      );
      // const response = await axios.post("https://dev.beautyfashionsales.com/report/4i1cKeDt9");
      console.log(response);
      return response;
    },
  };
};

export default useSalesReport;
