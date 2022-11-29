import React, { useState } from 'react'
import Select from 'react-select';
import '../html-css-template/css/select.css'
import makeAnimated from 'react-select/animated';


const animatedComponents = makeAnimated();

const options = [

    {  value: "Java", label: "Java"     },
    {  value: "JavaScript", label: "JavaScript"     },
    {  value: "MySQL", label: "MySQL"     },
    {  value: "Kotlin", label: "Kotlin"     },
    {  value: "Swift", label: "Swift"     },
    ];

export const MultiSelect = () => {

    const  [selectOption, setSelectOptions] = useState([]);

    const [show , setShow] = useState(true);

    const handleSelect = () =>{
        console.log(selectOption)
        
    };

  return (
    <>

  <Select  className='select'
    components={animatedComponents}
    isMulti 
    onChange={(item) => setSelectOptions(item)}
    options={options} 
    isClearable={true}
    display="none" 
    placeholder ={"Buscar Habilidade..."}
    />

    {/* <button onClick={handleSelect}  >Printa o objeto</button> */}
    </>
  );
}; 

export default MultiSelect