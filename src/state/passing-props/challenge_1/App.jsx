import { getImageUrl } from './utils.js';

const scientists = [
  {
    id: 1,
    name: "Maria Skłodowska-Curie",
    imgId: "szV5sdG",
    profession: "physicist and chemist",
    discovered: "polonium (chemical element)",
    awards: [
      'Nobel Prize in Physics', 
      'Nobel Prize in Chemistry', 
      'Davy Medal', 
      'Matteucci Medal'
    ],
  },
  {
    id: 2,
    name: "Katsuko Saruhashi",
    imgId: "YfeOqp2",
    profession: "geochemist",
    discovered: "a method for measuring carbon dioxide in seawater",
    awards: [
      'Miyake Prize for geochemistry', 
      'Tanaka Prize'
    ],
  },
];

function Profile({ scientist, imgSize=70 }) {
  const { name, imgId, profession, discovered, awards } = scientist;

  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imgId)}
        alt={name}
        width={imgSize}
        height={imgSize}
      />
      <ul>
        <li>
          <b>Profession: </b> 
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b> 
          ({awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      {scientists.map(scientist => 
        <Profile key={scientist.id} scientist={scientist} />
      )}
    </div>
  );
}

// Challenge 1 of 3: Extract a component 
// This Gallery component contains some very similar markup 
// for two profiles. Extract a Profile component out of it to 
// reduce the duplication. You’ll need to choose what props 
// to pass to it.