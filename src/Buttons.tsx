import React from "react";
import {Counter} from "./Counter";

type ButtonsType = {
    addCount: () => void
    resetCount: () => void
    count: number
}

export function Buttons(props: ButtonsType) {

    const addCounter = props.addCount
    const resetCounter = props.resetCount
    const disabledAdd = props.count > 4
    const disabledReset = props.count < 1

    return (
        <div className={"buttons"}>
            <div className={"counts"}>
                <div className={props.count > 4 ? "count" : ""}>{props.count}</div>
            </div>
                <Counter disabled={disabledAdd} addCounter={addCounter} className={"inc"} title={"inc"}/>
                <Counter disabled={disabledReset} addCounter={resetCounter} className={"reset"} title={"reset"}/>
            {/*<button disabled={disabledAdd} onClick={props.addCount} className={"inc"}>inc</button>
            <button disabled={props.count < 1} onClick={props.resetCount} className={"reset"}>reset</button>*/}
        </div>
    )
}
