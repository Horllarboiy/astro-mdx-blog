import React from 'react'
import CountUp from "react-countup";

const CountUpNum = ({end}) => {
  return (
    <CountUp end={end} duration={5} enableScrollSpy />
  )
}

export default CountUpNum