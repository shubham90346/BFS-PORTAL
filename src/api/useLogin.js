import axios from "axios";

const useLogin = () => {
  return {
    mutateLogin: async (email, password) => {
      const response = await axios.post("https://dev.beautyfashionsales.com/beauty/v3/PYmsWL", { email, password });
      // console.log(response.data);
      localStorage.setItem("response",JSON.stringify(response))
      return response.data;
    },
  };
};

export default useLogin;
