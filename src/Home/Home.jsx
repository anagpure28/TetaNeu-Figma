import React from 'react'
import Section1 from '../Component/Section1/Section1'
import Section3 from '../Component/Section3/Section3'
import Section2 from '../Component/Section2/Section2'
import SubSection from '../Component/SubSection/SubSection'
import Section8 from '../Component/Section8/Section8'
import SubSection2 from '../Component/SubSection/SubSection2'

const Home = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <SubSection />
      <SubSection2 />
      <Section3 />
      <Section8 />
    </div>
  )
}

export default Home