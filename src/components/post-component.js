import './css/post.css';
import Comment from './comment-component';
import './css/post.css';
function Post(props) {
  const { comments } = props;
  return (
    <>
      <div className="col">
        <div className="card h-100 text-dark bg-light mb-3">
          <div className="card-header">
            <div>
              <h6 className="card-title">{props.username}</h6>
              <h5 className="card-title">{props.title}</h5>
            </div>
            <small className="text-muted" id="footer-text">
              {props.created_at}
            </small>
          </div>
          <div className="card-body">
            <p className="card-text">{props.message}</p>
          </div>
          <div className="card-footer">
            <p id="comment-btn-container">
              <button
                className="btn btn-warning text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${props.postId}`}
                aria-expanded="false"
                aria-controls={props.postId}
                onClick={handleShowComments}
                id="comments-btn"
              >
                Show Comments
              </button>
            </p>
            <div className="collapse" id={props.postId}>
              <div
                className="card card-body bg-secondary"
                id="comments-container"
              >
                {renderComments()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  function renderComments() {
    if (comments.length === 0)
      return <div style={{ color: 'white' }}>There is no comments yet...</div>;
    return comments.map((comment) => (
      <Comment author={comment.author.username} text={comment.text} />
    ));
  }
}

export default Post;

function handleShowComments(e) {
  if (e.target.textContent === 'Hide Comments')
    e.target.textContent = 'Show Comments';
  else e.target.textContent = 'Hide Comments';
}
