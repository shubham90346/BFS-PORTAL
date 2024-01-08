import { useFetch } from "./useFetch";

export const useManufacturer = () => {
  const manufacturers = useFetch(
    "https://dev.beautyfashionsales.com/beauty/v3/yRNGIO",
    {
      method: "POST",
    }
  );
  return manufacturers;
};
