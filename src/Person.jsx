import React from "react";

const Person = ({ person, deletePerson }) => {
  const { id, name, age, image } = person;
  return (
    <div>
      <article className="person">
        <img src={image} alt={name}></img>
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
        <button onClick={() => deletePerson(id)}>x</button>
      </article>
    </div>
  );
};

export default Person;
