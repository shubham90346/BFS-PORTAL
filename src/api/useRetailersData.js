import { useFetch } from "./useFetch";

export const useRetailersData = () => {
  const fetchedRetailers = useFetch(
    "https://dev.beautyfashionsales.com/beauty/v3/JbUxci",
    {
      method: "POST",
    }
  );
  // console.log(fetchedRetailers);
  return fetchedRetailers;
};
