import { useState } from "react"

interface User {
  uid:string;
  name: string;
}

export const Usuario = () => {
  const [user, setUser] = useState<User>()

  const login = ()=>{
    setUser({ 
      uid:'123',
      name:'Jesus'
    })
  }

  return (
    <div className='mt-5'>
      <h3>
        User: useState
      </h3>
      <button className='btn btn-outline-primary' onClick={login}>
        Login
      </button>
      <pre>{
        (!user) ? 'No User':
          JSON.stringify(user)
        }</pre>
    </div>
  )
}
