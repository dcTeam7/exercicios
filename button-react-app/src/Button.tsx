import { useState } from "react";
import App from "./App";

type Props = {count: number; setCount: React.Dispatch<React.SetStateAction<number>>}

export default function Button(props: Props) {
    return (
<button onClick={() => props.setCount((count) => count + 1)}>
      count is {props.count}
        </button>
    )}