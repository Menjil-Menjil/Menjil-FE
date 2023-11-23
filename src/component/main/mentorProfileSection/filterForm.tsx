import {useState} from "react";

interface propsType {
  filterName: string
  initialValues: any
  onSubmit: any
}
const FilterForm = ({filterName, initialValues, onSubmit}: propsType) => {
  const [values, setValues] = useState(initialValues);
  const handleFilterChange = (e: any) => {
    setValues({
      ...values,
      company: e.target.value
    })
  };

  return (
    <form onSubmit={
      (event) => {
        event.preventDefault();
        onSubmit(values);
      }}
    >
      <fieldset>
        <label>
          <input type="radio"
                 name={filterName}
                 value="all"
                 defaultChecked
                 onChange={handleFilterChange}
          />모두
        </label>
        <label>
          <input type="radio"
                 name={filterName}
                 value="true"
                 defaultChecked={false}
                 onChange={handleFilterChange}
          />유
        </label>
        <label>
          <input type="radio"
                 name={filterName}
                 value="false"
                 defaultChecked={false}
                 onChange={handleFilterChange}
          />무
        </label>
      </fieldset>
      <button>검색</button>
    </form>
  );
}

export default FilterForm;