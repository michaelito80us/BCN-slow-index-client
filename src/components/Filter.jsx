import { useState } from "react";
import Select from "react-select";

const Filter = ({ zones, categories, setCurrentFilter }) => {
  const [filter, setFilter] = useState({
    zone: "",
    category: "",
    index: "",
  });

  const handleSelectChange = (value, name) => {
    const newFilter = { ...filter, [name]: value };
    setFilter(newFilter);
    setCurrentFilter(newFilter);
  };

  return (
    <div className="flex justify-center">
      <div className="w-40 m-5">
        <span className="flex">Category</span>
        <Select
          value={filter.category}
          onChange={(selected) => handleSelectChange(selected, "category")}
          options={[{ value: "", label: "Select Category" }, ...categories]}
        />
      </div>
      <div className="w-40 m-5">
        <span className="flex">Zone</span>
        <Select
          value={filter.zone}
          onChange={(selected) => handleSelectChange(selected, "zone")}
          options={[{ value: "", label: "Select Zone" }, ...zones]}
        />
      </div>
      <div className="w-40 m-5">
        <span className="flex">Index</span>
        <Select
          value={filter.index}
          onChange={(selected) => handleSelectChange(selected, "index")}
          options={[
            { value: "", label: "Select Index" },
            ...Array.from({ length: 10 }, (_, i) => ({
              value: i + 1,
              label: `${i + 1}+`,
            })),
          ]}
        />
      </div>
    </div>
  );
};

export default Filter;
