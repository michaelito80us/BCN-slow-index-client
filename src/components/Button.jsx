import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "district", label: "district" },
  { value: "district1", label: "district1" },
  { value: "district", label: "district" },
];

const Button = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div div className="flex justify-center">
      <div className="w-40 m-5">
        <span className=" flex ">Category</span>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
      <div className="w-40 m-5">
        <span className=" flex ">Zona</span>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
      <div className="w-40 m-5">
        <span className=" flex ">Index</span>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
    </div>
  );
};

export default Button;
