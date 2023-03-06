import './comments.css';
function Comment(props) {
  return (
    <div className="comment bg-light">
      <h5 className="comment-author">{props.author}</h5>
      <p className="comment-text">{props.text}</p>
    </div>
  );
}
export default Comment;
