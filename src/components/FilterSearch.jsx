import React from "react";

const FilterSearch = ({ onChange, value, placeholder,width }) => {
  let minWidth=width|| "110px"
  return (
    <div className="flex">
      <input
        placeholder={placeholder}
        className="bg-transparent placeholder:uppercase placeholder:text-white placeholder:underline placeholder:underline-offset-2 focus:outline-none leading-tight " style={{minWidth:`${minWidth}`}}
        onChange={onChange}
        value={value}
      />
      <img src={"/assets/images/searchIconWhite.svg"} alt="img" />
    </div>
  );
};

export default FilterSearch;
