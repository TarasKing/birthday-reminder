import React from "react";
import Person from "./Person";

const List = ({ people, deletePerson }) => {
  return (
    <section>
      {people.map((person) => {
        return (
          <Person person={person} key={person.id} deletePerson={deletePerson} />
        );
      })}
    </section>
  );
};

export default List;
