import React from 'react';

type Props = {count: number; setCount: React.Dispatch<React.SetStateAction<number>>}

export default function ButtonCount(props: Props) {

    function handclik() {
        props.setCount((c) => c + 1) // forma mais precisa de realizar a contagem
    }
    return (
        <button onClick={handclik}>
            count is <span>{props.count}</span>
        </button>
    )
}