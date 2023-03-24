import { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };
  const deletePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <main>
      <section className="container">
        <h2>{people.length} Birthdays today</h2>
        <List people={people} deletePerson={deletePerson} />
        <button onClick={clearAll}>Clear the list</button>
      </section>
    </main>
  );
}

export default App;
