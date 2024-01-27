import React from 'react'
import { useGetUserInfo } from '../hooks/useGetUserInfo'

const HeaderGreet = () => {
  const { name } = useGetUserInfo()
  const origName = name 

  const slicedName = origName.split(' ')
  slicedName.splice(1,1)
  const finalName = slicedName.join(' ')
  const greetName = finalName.charAt(0).toUpperCase() + finalName.slice(1)

  return (
    <>
      <h1>Hello {greetName}👋</h1>
      <p>Let's track what you have for today</p>
    </>
  )
}

export default HeaderGreet