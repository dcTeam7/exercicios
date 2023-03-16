import React from "react"
import { useState } from 'react'
import App from "../App"
type Props = {count: number; setCount: React.Dispatch<React.SetStateAction<number>>}

function Botaocount(props: Props) {
    return (
    <button onClick={() => props.setCount((count) => count + 1)}>
      count is {props.count}
    </button>)
  }
export default Botaocount