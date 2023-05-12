import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [gridSize, setGridSize] = useState(() => 10)
    const [boxSize, setBoxSize] = useState(() => 50)
    const [[x, y], setPosition] = useState(() => [0, 0])
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

    const gridWidthStyle = {
        width: gridSize * boxSize
    }

    return (
        <div className="App">
            <div className="container">
                <button onClick={() => move(0)} className='vertical-button' style={gridWidthStyle}
                        disabled={y === 0}>Up
                </button>
                <section className='mid'>
                    <button onClick={() => move(3)} className='horizontal-button'
                            disabled={x === 0}>Left
                    </button>
                    <div style={{
                        height: gridSize * boxSize,
                        ...gridWidthStyle
                    }}>
                        <div className='movable'
                             style={{
                                 height: boxSize,
                                 width: boxSize,
                                 transform: `translate(${boxSize * x}px, ${boxSize * y}px)`
                             }}
                        >
                        </div>
                    </div>
                    <button onClick={() => move(1)} className='horizontal-button'
                            disabled={x === gridSize - 1}>Right
                    </button>
                </section>
                <button onClick={() => move(2)} className='vertical-button'
                        style={gridWidthStyle} disabled={y === gridSize - 1}
                >Bottom
                </button>
            </div>

        </div>
    );
}

export default App;
