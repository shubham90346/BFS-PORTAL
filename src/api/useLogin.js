import axios from "axios";

const useLogin = () => {
  return {
    mutateLogin: async (email, password) => {
      const response = await axios.post("https://dev.beautyfashionsales.com/beauty/v3/PYmsWL", { email, password });
      localStorage.setItem("response",JSON.stringify(response))
      return response.data;
    },
  };
};

export default useLogin;
