import AnecdoteForm from "./AnecdoteForm";
import AnecdoteList from "./AnecdoteList";
import Notification from "./components/Notification";
import Filter from "./Filter";

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  );
};

export default App;
