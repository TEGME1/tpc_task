import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [gridSize, setGridSize] = useState(() => 10)
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

    const verticalButtonStyles = {
        width: gridSize * boxSize
    }

    return (
        <div className="App">
            <div className="container">
                <button onClick={() => move(0)} className='up-button vertical-button' style={verticalButtonStyles}
                        disabled={position[1] === 0}>Up
                </button>
                <section className='mid'>
                    <button onClick={() => move(3)} className='left-button horizontal-button'
                            disabled={position[0] === 0}>Left
                    </button>
                    <div style={{
                        height: gridSize * boxSize,
                        width: gridSize * boxSize
                    }}>
                        <div className='movable'
                             style={{
                                 height: boxSize,
                                 width: boxSize,
                                 transform: `translate(${boxSize * position[0]}px, ${boxSize * position[1]}px)`
                             }}
                        >
                        </div>
                    </div>
                    <button onClick={() => move(1)} className='right-button horizontal-button'
                            disabled={position[0] === gridSize - 1}>Right
                    </button>
                </section>
                <button onClick={() => move(2)} className='down-button vertical-button'
                        style={verticalButtonStyles} disabled={position[1] === gridSize - 1}
                >Down
                </button>
            </div>

        </div>
    );
}

export default App;
