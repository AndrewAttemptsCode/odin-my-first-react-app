import { useState, useEffect } from 'react';

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState(true);

  useEffect(() => {
    console.log('Resubscribing');
    function handleMove(e) {
      if (canMove) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    }

    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, [canMove]);

  return (
    <>
      <label>
        <input type="checkbox"
          checked={canMove}
          onChange={e => setCanMove(e.target.checked)} 
        />
        The dot is allowed to move
      </label>
      <hr />
      <div style={{
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }} />
    </>
  );
}


// Challenge 3 of 5: Investigate a stale value bug 
// In this example, the pink dot should move when 
// the checkbox is on, and should stop moving when 
// the checkbox is off. The logic for this has already 
// been implemented: the handleMove event handler checks 
// the canMove state variable.

// However, for some reason, the canMove state variable 
// inside handleMove appears to be “stale”: it’s always 
// true, even after you tick off the checkbox. How is this 
// possible? Find the mistake in the code and fix it.


// move the function inside the effect
// you could keep the function outside without a dependency array
// but that would mean the useEffect would trigger a cleanup
// and apply the event listener repeatedly on mouse move
// which will be resource heavy
// best to move the function inside the useEffect and use the checkbox
// as a dependency trigger