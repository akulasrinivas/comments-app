import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  onAddComments = event => {
    event.preventDefault()

    const {name, comment} = this.state

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  changeName = event => {
    this.setState({name: event.target.value})
  }

  changeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentsList, name, comment} = this.state
    return (
      <div className="bgc-comments-container">
        <h1 className="heading">Comments</h1>
        <div className="comments-container">
          <form className="form-container" onSubmit={this.onAddComments}>
            <p className="description">Say something about 4.0 Technologies</p>
            <input
              className="input"
              value={name}
              placeholder="Your Name"
              onChange={this.changeName}
            />
            <br />
            <textarea
              className="text-area"
              value={comment}
              cols="50"
              rows="10"
              placeholder="Your Comment"
              onChange={this.changeComment}
            />
            <br />
            <button type="submit" className="button">
              Add Comment
            </button>
          </form>
          <img
            alt="comments"
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
          />
        </div>
        <hr />
        <div className="count-comments">
          <button className="btn">{commentsList.length}</button>
          <p className="cmnt">Comments</p>
        </div>
        <ul>
          {commentsList.map(eachComment => (
            <CommentItem commentDetails={eachComment} key={eachComment.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
