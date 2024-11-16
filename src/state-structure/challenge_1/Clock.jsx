export default function Clock({ color, time }) {
  return (
    <h1 style={{ color: color }}>
      {time}
    </h1>
  );
}

// Challenge 1 of 4: Fix a component that’s not updating 
// This Clock component receives two props: color and time. 
// When you select a different color in the select box, the Clock 
// component receives a different color prop from its parent component. 
// However, for some reason, the displayed color doesn’t update. 
// Why? Fix the problem.

// import { useState } from 'react';

// export default function Clock(props) {
//   const [color, setColor] = useState(props.color);
//   return (
//     <h1 style={{ color: color }}>
//       {props.time}
//     </h1>
//   );
// }

// If color being controlled by parent component state
// the passed color prop to the Clock component doesn't need to store state.