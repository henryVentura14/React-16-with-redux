import React from "react"
import { useSelector } from 'react-redux'

const Quantity = () => {
    const games = useSelector((state) => state.gamesReducer);
    return (
        <React.Fragment>
            Units: {games.game}
        </React.Fragment>
    )
}
export default Quantity;