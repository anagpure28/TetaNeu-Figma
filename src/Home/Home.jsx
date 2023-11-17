import React from 'react'
import Section1 from '../Component/Section1/Section1'
import Section3 from '../Component/Section3/Section3'
import Section2 from '../Component/Section2/Section2'

const Home = () => {
  return (
    <div style={{zIndex: "-100"}}>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  )
}

export default Home