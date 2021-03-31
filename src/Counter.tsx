import React from "react";

type CounterType = {
    disabled: boolean
    addCounter: () => void
    className: string
    title: string
}

export function Counter(props: CounterType) {
    return (
        <span>
            <button disabled={props.disabled} onClick={props.addCounter} className={props.className}>{props.title}</button>
        </span>
    )
}