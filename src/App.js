import { useState } from 'react'
import MoleContainer from './MoleContainer'
import './App.css';

function App(){
    let [score, setScore] = useState(0)

    const createMoleHill = () => {
        let hills = []
        for (let i = 0; i < 6; i++) {
            hills.push(
                <MoleContainer
                key= {i}
                setScore={setScore}
                score={score} />
            )
        }
    
        return (
            <div>
                {hills}
            </div>
        )
    }

    return (
        <div className="App">
            <h1>React-a-Mole!</h1>
           <h1>{score} </h1> 
            {createMoleHill()}

        </div>
    )
}

export default App
