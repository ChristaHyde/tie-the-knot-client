import React, { useState } from 'react'

import TextInput from '../../components/text-input'

export default function LogIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function auth0(e) {
    e.preventDefault()
    console.log(`Logging in using auth0: email (${email}), password (${password})`)
  }

  return <div>
    <h1>Log in page</h1>

    <form onSubmit={auth0}>
      <TextInput type="text" label="Email" name="email" value={email} changeHandler={(e) => setEmail(e.target.value)} />
      <TextInput type="password" label="Password" name="password" value={password} changeHandler={(e) => setPassword(e.target.value)} />
      <input type="submit" value="Log in" />
    </form>
  </div>
}