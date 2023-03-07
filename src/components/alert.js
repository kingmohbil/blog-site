const Alert = () => {
  return (
    <div
      className="alert alert-info alert-dismissible fade show"
      role="alert"
      id="alert"
    >
      <strong>Important Note!</strong> Adding Posts is From{' '}
      <strong>
        <a
          href="https://kingmohbil.github.io/blog-form-page/#/login"
          target="_blank"
          rel="noreferrer"
          className="text-info"
          style={{ textDecoration: 'none' }}
        >
          another site
        </a>
      </strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
