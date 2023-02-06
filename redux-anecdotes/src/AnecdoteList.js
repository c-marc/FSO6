import { useSelector, useDispatch } from "react-redux";
import { addVote } from "./reducers/anecdoteReducer";
import { addNotif, removeNotif } from "./reducers/notificationReducer";

const AnecdoteList = () => {
  let list = useSelector(({ anecdotes, filter }) => {
    if (filter === "") {
      return [...anecdotes];
    }
    return [...anecdotes].filter((a) => a.content.includes(filter));
  });
  list = list.sort((a, b) => b.votes - a.votes);

  const dispatch = useDispatch();

  const vote = (id) => {
    //console.log("vote", id);
    dispatch(addVote(id));
    dispatch(addNotif("You voted"));
    setTimeout(() => dispatch(removeNotif()), 2000);
  };

  return (
    <>
      {list.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
