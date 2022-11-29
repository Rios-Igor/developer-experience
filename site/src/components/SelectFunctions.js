import React, { useState } from 'react'
import Select from 'react-select';
import '../html-css-template/css/select.css'
import makeAnimated from 'react-select/animated';


const animatedComponents = makeAnimated();

const options = [

    {  value: "Mobile Developer", label: "Mobile Developer"     },
    {  value: "Desenvolvedor Web", label: "Desenvolvedor Web"     },
    {  value: "Desenvolvedor Front-end", label: "Desenvolvedor Front-end"     },
    {  value: "Desenvolvedor Back-end", label: "Desenvolvedor Back-end"     },
    {  value: "Desenvolvedor Full Stack", label: "Desenvolvedor Full Stack"     },
    ];

export const SelectFuntions = () => {

    const  [selectOption, setSelectOptions] = useState([]);

    const [show , setShow] = useState(true);

    const handleSelect = () =>{
        console.log(selectOption)
        
    };

  return (
    <>

  <Select  className='select'
    options={options} 
    isClearable={true}
    onChange={(item) => setSelectOptions(item)}
    />

    {/* <button onClick={handleSelect}  > Printar o objeto </button> */}
    </>
  );
}; 

export default SelectFuntions