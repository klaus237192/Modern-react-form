import React ,{useState} from 'react'
const Name=({setName})=>{
    const [isValid,setIsValid]=useState(true)
    const handleChange=(e)=>{
        const regex = /^[a-zA-Z]*$/; // regular expression to match only English uppercase and lowercase letters
        if (regex.test(e.target.value)) { // check if the input value matches the regular expression
            setName(e.target.value);
            setIsValid(true)
        }else{
            setIsValid(false)
            setName("")
        }
    }
    return(
        <div className="mb-1 ml-5">
            <label htmlFor="default-input" className="block mb-2 text-lg text-gray-700 dark:text-white">Name</label>
            <input onChange={handleChange} type="text" id="default-input" className="w-[92%] text-lg  focus:border-none bg-white border h-14 border-[#D1D5DB] hover:border-black text-gray-900 rounded-[4px]  focus:border-black block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" />
            {!isValid&&<label className="block mb-2 text-sm text-red-700 dark:text-white">Please input valid name</label>}
        </div>
        )
    }
export default Name