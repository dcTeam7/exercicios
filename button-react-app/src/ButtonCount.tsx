import React from 'react';
import './ButtonCount.css'

type Props = {count: number; setCount: React.Dispatch<React.SetStateAction<number>>}

export default function ButtonCount(props: Props) {

    function handclik() {
        props.setCount((c) => c + 1) // forma mais precisa de realizar a contagem
    }
    return (
        <button className='butauzin' onClick={handclik}>
            count is <span>{props.count}</span>
        </button>
    )
}