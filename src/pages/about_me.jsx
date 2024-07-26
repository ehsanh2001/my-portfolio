import "../App.css";

export default function AboutMe() {
  return (
    <>
      <div className="container pages">
        <h1>About Me</h1>
        <img className="my-pic" src="./my-pic.png" alt="" />

        <div className="about-me">
          <p>
            With over a decade in software engineering, I have deep expertise in
            web development and database management. I recently completed a full
            stack development certificate from the University of Toronto to stay
            current with industry trends. My experience also includes teaching
            computer science at the undergraduate level, which has sharpened my
            ability to explain complex concepts. I’m dedicated to applying my
            skills to develop innovative solutions and drive impactful projects.
          </p>
        </div>
      </div>
    </>
  );
}
