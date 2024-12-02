export default function Profile() {
  return (
    <div>
      <Card>
        <h1>Photo</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      <Card>
        <h1>About</h1>
        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </Card>
    </div>
  );
}

function Card({ children }) {
  return (
    <section className="card">
      <div className="card-content">
        {children}
      </div>
    </section>
  )
}

// Challenge 3 of 3: Passing JSX in a children prop 
// Extract a Card component from the markup below, 
// and use the children prop to pass different JSX to it