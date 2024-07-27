import "../App.css";

export default function Contact() {
  const handleBlur = (e) => {
    if (e.target.value === "") {
      e.target.style.border = "5px solid red";
    }
  };

  const handleChange = (e) => {
    e.target.style.border = "none";
  };

  const handleEmailBlur = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (e.target.value === "" || !emailRegex.test(e.target.value)) {
      e.target.style.border = "5px solid red";
    } else {
      e.target.style.border = "none";
    }
  };

  return (
    <>
      <div className="container pages">
        <h1>Contact</h1>
        <div className="row">
          <div className="col-md-6">
            <form
              action="mailto:ehsanh2001@gmail.com"
              method="post"
              encType="text/plain"
            >
              <label className="text-light mb-2" htmlFor="name">
                Name:
              </label>
              <br />
              <input
                onBlur={handleBlur}
                onChange={handleChange}
                className="form-control"
                type="text"
                id="name"
                name="name"
                required
              />
              <br />
              <label className="text-light mb-2" htmlFor="email">
                Email:
              </label>
              <br />
              <input
                onBlur={handleEmailBlur}
                onChange={handleChange}
                className="form-control"
                type="email"
                id="email"
                name="email"
                required
              />
              <br />
              <label className="text-light mb-2" htmlFor="message">
                Message:
              </label>
              <br />
              <textarea
                onBlur={handleBlur}
                onChange={handleChange}
                className="form-control"
                id="message"
                name="message"
                required
                rows={10}
              ></textarea>
              <br />
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
