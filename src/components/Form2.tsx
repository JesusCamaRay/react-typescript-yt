// import React, { ChangeEvent,useState } from 'react'

import { useForm } from "../hooks/useForm"


export const Form2 = () => {
  const {form,handleChange,city,postal}=useForm({
    postal:'15116',
    city:'Lima',
  })


  return (
    <form autoComplete='off'>
      <div className="mb-3">
        <label htmlFor="" className="form-label">Código Postal:</label>
        <input type="text" className="form-control" name='postal' onChange={handleChange} value={postal}/>
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">Ciudad:</label>
        <input type="text" className="form-control" name='city' onChange={handleChange} value={city}/>
      </div>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  )
}
