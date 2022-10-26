import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

const MoleContainer = (props) => {
    let [mole, setMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setMole(false)
    }

    let screen = mole ? <Mole setScore={props.setScore} toggle={setMole} handleClick={handleClick} /> : <EmptySlot toggle={setMole} />

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {screen}
        </div>
    )
}

export default MoleContainer