const drinks = {
  tea: {
    part: 'tea',
    caffeine: '15-70 mg/cup',
    age: '4,000+ years'
  },
  coffee: {
    part: 'bean',
    caffeine: '80-185 mg/cup',
    age: '1,000+ years'
  }
};

function Drink({ name }) {
  const info = drinks[name];

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{info.part}</dd>
        <dt>Caffeine content</dt>
        <dd>{info.caffeine}</dd>
        <dt>Age</dt>
        <dd>{info.age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}

// Refactor a series of ? : to if and variables 

// This Drink component uses a series of ? : conditions 
// to show different information depending on whether the
// name prop is "tea" or "coffee". The problem is that the
// information about each drink is spread across multiple
// conditions. Refactor this code to use a single if 
// statement instead of three ? : conditions.

// Once you’ve refactored the code to use if, do you have 
// further ideas on how to simplify it?