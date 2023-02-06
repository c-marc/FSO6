import AnecdoteForm from "./AnecdoteForm";
import AnecdoteList from "./AnecdoteList";
import Filter from "./Filter";

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  );
};

export default App;
