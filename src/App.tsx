import React, { useState } from "react";
import "./App.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const DATA = [
  {
    id: 0,
    name: "Fish Tacos",
  },
  {
    id: 1,
    name: "Baked Salmon",
  },
  {
    id: 2,
    name: "Bread Sticks",
  },
  {
    id: 3,
    name: "Cheese Balls",
  },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const increment = () => {
    setDirection("right");
    const newIndex = (activeIndex + 1) % DATA.length;
    setActiveIndex(newIndex);
  };

  const decrement = () => {
    setDirection("left");
    const newIndex = activeIndex === 0 ? 3 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  return (
    <div className="container">
      <div className="area">
        <TransitionGroup
          childFactory={(child) =>
            React.cloneElement(child, {
              classNames: `slide-${direction}`,
              timeout: 500,
            })
          }
        >
          <CSSTransition
            key={activeIndex}
            classNames={{
              enter: `slide-${direction}-enter`,
              enterActive: `slide-${direction}-enter-active`,
              // exit: `slide-${exitDirection()}-exit`,
              // exitActive: `slide-${exitDirection()}-exit-active`,
            }}
            timeout={500}
          >
            <div id="card" className="card">
              <h1>{DATA[activeIndex].name}</h1>
              <h3>{DATA[activeIndex].id}</h3>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div className="actions">
        <button
          onClick={() => {
            decrement();
          }}
        >
          prev
        </button>
        <button
          onClick={() => {
            increment();
          }}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default App;
