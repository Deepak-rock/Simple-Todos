// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoListdetails, todoDelete} = props
  const {title, id} = todoListdetails

  const onClickDelete = () => {
    todoDelete(id)
  }

  return (
    <li className="todolist-item">
      <p className="title">{title}</p>
      <button className="delete-button" type="button" onClick={onClickDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
