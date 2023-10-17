import React ,{useState} from "react";

const Email=({setEmail})=>{
    const [isValid,setIsValid]=useState(true)
    const handleChange=(e)=>{
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(e.target.value)) { // check if the input value matches the regular expression
            setEmail(e.target.value);
            setIsValid(true)
        }else{
            setIsValid(false)
            setEmail("")
        }
    }
    return(
        <div className="mb-1 ml-5">
            <label htmlFor="default-input" className="block mb-2 text-lg text-gray-700 dark:text-white">Email</label>
            <input onChange={handleChange} type="text" id="default-input" className="xl:w-[92%] sm:w-[92%] h-14 hover:border-black focus:border-none bg-white border border-gray-300 text-gray-900 text-lg rounded-[4px]  focus:border-black block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" />
            {!isValid&&<label className="block mb-2 text-sm text-red-700 dark:text-white">Please input valid email</label>}
        </div>
    )
}

export default Email