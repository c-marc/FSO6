import { addAnecdote } from "./reducers/anecdoteReducer";
import { useDispatch } from "react-redux";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const submitAnecdote = (event) => {
    console.log(event);
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(addAnecdote(content));
  };

  return (
    <form onSubmit={submitAnecdote}>
      <textarea name="anecdote"></textarea>
      <button type="submit">add</button>
    </form>
  );
};

export default AnecdoteForm;
