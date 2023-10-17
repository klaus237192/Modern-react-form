import React,{useState} from 'react'
import './layout.css'
import Name from '../../Atoms/name'
import Email from '../../Atoms/email'
import Gender from '../../Atoms/gender'
import Birthday from '../../Atoms/birthday'
import PhoneNumber from '../../Atoms/phone_number'
import Fruit from '../../Atoms/fruit'
import MultiSelect from '../../Atoms/multiselect' 
import Avatar from '../../Atoms/avatar'
import Submit from '../../Atoms/submit'
const Layout = () => {
   const [name,setName]=useState("")
   const [birthday,setBirthDay]=useState(null)
   const [phoneNumber,setPhoneNumber]=useState("")
   const [isValidPhoneNumber,setIsValidPhoneNumber]=useState(false)
   const [gender,setGender]=useState("")
   const [multiSelect,setMultiSelect]=useState([])
   const [fruit,setFruit]=useState("")
   const [avatar,setAvatar]=useState("")
   const [email,setEmail]=useState("")
   return (
      <div className='layout  xs:w-[200px] sm:w-[330px]  lg:w-[450px] md:w-[400px] xl:w-[530px]'>
         <Name setName={setName} />
         <Email setEmail={setEmail}/>
         <Birthday setBirthDay={setBirthDay} />
         <Gender setGender={setGender} />
         <PhoneNumber setPhoneNumber={setPhoneNumber} setIsValidPhoneNumber={setIsValidPhoneNumber} />
         <Fruit fruit={fruit} setFruit={setFruit}/>
         <MultiSelect setMultiSelect={setMultiSelect} multiSelect={multiSelect}/>
         <Avatar setAvatar={setAvatar} />
         <Submit name={name} birthday={birthday} email={email} phoneNumber={phoneNumber} isValidPhoneNumber={isValidPhoneNumber} gender={gender} multiSelect={multiSelect} fruit={fruit} avatar={avatar}/>
      </div>
   )
}

export default Layout