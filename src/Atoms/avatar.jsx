import React, { createRef, useState, useEffect } from "react";

const Avatar = ({setAvatar}) => {
  const [image, setImage] = useState(null);
  const inputFileRef = createRef(null);
  const [newImage,setNewImage]=useState(null)
  
  const handleOnChange = async(event) => {

    const file = event.target.files[0];
    
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
    setNewImage(file)
  };
  useEffect(()=>{
    setAvatar(newImage)
  },[newImage])
  return (
    <div className=" flex align-items:center">
      <label className='text-left ml-5 mt-5  text-lg text-slate-700'>Select avatar</label>
      <input
        ref={inputFileRef}
        accept="image/*"
        hidden
        id="avatar-image-upload"
        type="file"
        onChange={handleOnChange}
      />
      <label htmlFor="avatar-image-upload" className="mt-5 ml-24">
          {image?<img  src={image}  className="w-20 h-20  border border-gray-300 hover:cursor-pointer" alt="Avatar"/>:<img  src="/default.png"  className="w-20 h-20  border border-gray-300 hover:cursor-pointer" alt="Avatar"/>}
      </label>
      <br></br>
    </div>
  );
};

export default Avatar;