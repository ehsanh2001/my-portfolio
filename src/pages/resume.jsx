import "../App.css";

export default function Resume() {
  return (
    <>
      <div className="container pages">
        <h1>Resume</h1>
        <p>
          <a href="https://drive.google.com/file/d/1-ANzWjs6rYbERI-33PKf98m1Bl5rQ6Qv/view?usp=sharing">
            Click here to view my resume.
          </a>
        </p>
        <h2>Skills</h2>
        <ul className="white-text">
          <li>
            <strong>Programming Languages: </strong> JavaScript, Python, Java,
            C/C++, C#
          </li>
          <li>
            <strong>Web Technologies: </strong> RESTful APIs, GraphQL, React,
            Express.js, HTML, CSS
          </li>
          <li>
            <strong>Databases: </strong> MS SQL Server, MySQL, MongoDB, MS
            Access
          </li>
          <li>
            <strong>Unit Testing: </strong> pytest, Jest
          </li>
          <li>
            <strong>Concurrent Programming: </strong> C#, Java, Python threads
            and processes, Javascript async programming
          </li>
          <li>
            <strong>Version Control: </strong> Git, GitHub
          </li>
          <li>
            <strong>Design & Architecture: </strong> OO Design Patterns, SOLID
            principles, TDD
          </li>
          <li>
            <strong>Agile Methodology: </strong> Scrum
          </li>
        </ul>
      </div>
    </>
  );
}
