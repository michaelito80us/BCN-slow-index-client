import { useState } from "react";
import Select from "react-select";

const Filter = ({ zones, categories, setCurrentFilter }) => {
  const [filter, setFilter] = useState({
    zona: "",
    categoria: "",
    rating: "",
  });

  const handleSelectChange = (value, name) => {
    const newFilter = { ...filter, [name]: value };
    setFilter(newFilter);
    setCurrentFilter(newFilter);
  };

  return (
    <div className="flex justify-center">
      <div className="m-5 w-40">
        <span className="flex">Category</span>
        <Select
          value={filter.category}
          onChange={(selected) => handleSelectChange(selected, "category")}
          options={[{ value: "", label: "" }, ...categories]}
        />
      </div>
      <div className="m-5 w-40">
        <span className="flex">Zone</span>
        <Select
          value={filter.zone}
          onChange={(selected) => handleSelectChange(selected, "zone")}
          options={[{ value: "", label: "" }, ...zones]}
        />
      </div>
      <div className="m-5 w-40">
        <span className="flex">Index</span>
        <Select
          value={filter.index}
          onChange={(selected) => handleSelectChange(selected, "index")}
          options={[
            { value: "", label: "" },
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
