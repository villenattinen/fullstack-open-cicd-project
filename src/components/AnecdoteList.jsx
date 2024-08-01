import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecodeList = () => {
	const anecdotes = useSelector(state => {
		if (state.filter === '') {
			return state.anecdotes
		}
		return state.anecdotes.filter(anecdote => 
			anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
		)
	})
	const dispatch = useDispatch()

	const vote = (anecdote) => {
		console.log('vote', anecdote.id)
		dispatch(voteAnecdote(anecdote))
		dispatch(setNotification(`you voted '${anecdote.content}'`, 5))
	}

	return (
		[...anecdotes].sort((firstAnecdote, secondAnecdote) => 
			secondAnecdote.votes - firstAnecdote.votes).map(anecdote =>
				<div key={anecdote.id}>
					<div>
						{anecdote.content}
					</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => vote(anecdote)}>vote</button>
					</div>
				</div>
		)
	)
}

export default AnecodeList