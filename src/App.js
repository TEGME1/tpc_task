import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [gridSize, setGridSize] = useState(() => 9)
    const [boxSize, setBoxSize] = useState(() => 50)
    const [position, setPosition] = useState(() => [0, 0])
    const move = (direction) => {
        // eslint-disable-next-line default-case
        switch (direction) {
            case 0:
                setPosition(([x, y]) => [x, y - 1])
                break
            case 1:
                setPosition(([x, y]) => [x + 1, y])
                break
            case 2:
                setPosition(([x, y]) => [x, y + 1])
                break
            case 3:
                setPosition(([x, y]) => [x - 1, y])
        }
    }

    return (
        <div className="App">
            <div className="container">
                <button onClick={() => move(0)} className='up-button'>up</button>
                <button onClick={() => move(3)} className='left-button'>left</button>
                <button onClick={() => move(1)} className='right-button'>right</button>
                <button onClick={() => move(2)} className='right-button'>down</button>
            </div>
            <div style={{
                backgroundColor: 'red',
                height: gridSize * boxSize,
                width: gridSize * boxSize
            }}>
                <div className='movable'
                     style={{
                         backgroundColor: 'blue',
                         height: boxSize,
                         width: boxSize,
                         transform: `translate(${boxSize * position[0]}px, ${boxSize * position[1]}px)`
                     }}
                >
                </div>
            </div>
        </div>
    );
}

export default App;
