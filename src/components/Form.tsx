// import React, { ChangeEvent,useState } from 'react'
import { useForm } from '../hooks/useForm'

interface FormData {
  email:string,
  name:string, 
  age?:number
}

export const Form = () => {
  // const [form, setForm] = useState({
  //   email:'',
  //   name:''
  // })

  // const handleChange = ({target}:ChangeEvent<HTMLInputElement>)=>{
  //   const {name, value} = target
  //   setForm({
  //     ...form,
  //     [name]:value
  //   })
  // }
  const {form,handleChange,email,name,age}=useForm<FormData>({
    email:'jesus@cama.com',
    name:'jesus',
    age:20
  })


  return (
    <form autoComplete='off'>
      <div className="mb-3">
        <label htmlFor="" className="form-label">Email:</label>
        <input type="email" className="form-control" name='email' onChange={handleChange} value={email}/>
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">Name:</label>
        <input type="text" className="form-control" name='name' onChange={handleChange} value={name}/>
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">Age:</label>
        <input type="number" className="form-control" name='age' onChange={handleChange} value={age}/>
      </div>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  )
}
