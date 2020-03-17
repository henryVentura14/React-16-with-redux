import React from "react";
import { buy_action, return_action } from "../actions/shopGamesAction"
import { useDispatch } from "react-redux";

const Buy = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button
                onClick={
                    () => dispatch(buy_action(1))
                }
                className="btn btn-dark btn-sm">Buy</button>
            <button
                onClick={
                    () => dispatch(return_action(1))
                }
                className="btn btn-dark btn-sm ml-4">Return</button>
        </div>
    )
}


export default Buy;