// Write your code here

import {formatDistanceToNow} from 'date-fns'

import './index.css'

const like =
  'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

const liked =
  'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

const del =
  'https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png'

const CommentItem = props => {
  const {commentDetails} = props

  const {name, comment, id} = commentDetails

  const index = name[0]
  return (
    <li className="items">
      <div className="person-details">
        <p className="first-letter">{index}</p>
        <p className="name">{name}</p>
        <p> {formatDistanceToNow(new Date())}</p>
      </div>
      <p>{comment}</p>
      <div className="last-container">
        <div className="like-container">
          <img className="icons" src={like} />
          <p alt="like">Like</p>
        </div>
        <img data-testid="delete" alt="delete" className="icons" src={del} />
      </div>
    </li>
  )
}
export default CommentItem
