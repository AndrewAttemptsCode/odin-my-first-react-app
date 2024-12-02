import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({ firstName: "John", lastName: "Smith", age: 100 });

  function handleIncreaseAge() {
    setPerson({ ...person, age: person.age + 1 });
  };

  function handleFirstNameChange(event) {
    setPerson({ ...person, firstName: event.target.value });
  }

  function handleLastNameChange(event) {
    setPerson({ ...person, lastName: event.target.value });
  }

  function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }

  const fullName = capitalize(person.firstName) + ' ' + capitalize(person.lastName);

  return (
    <>
      <h1>{fullName}</h1>
      <h2>{person.age}</h2>
      <Input label='First Name' name={person.firstName} onChange={handleFirstNameChange} />
      <Input label='Last Name' name={person.lastName} onChange={handleLastNameChange} />

      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

function Input({ label, name, onChange }) {
  return (
    <>
      <label>
        {label}: {' '}
        <input type="text" value={name} onChange={onChange} />
      </label>
      {' '}
    </>
  );
}

// Update the Person component we’ve been using above.

// Add two separate input fields for the first name and the last name. 
// Either of these should be able to update the full name in the 
// h1 element with every keystroke.

// There are many ways you can do this. Keep in mind what you’ve 
// learned in this lesson while coding it out.