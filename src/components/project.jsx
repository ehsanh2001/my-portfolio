import FlipCard from "./flipCard/flip_card";

export default function Project({ project }) {
  return (
    <>
      <FlipCard>
        <div>
          <img
            height={"300"}
            width={"100%"}
            src={project.imageURL}
            alt="Front Image"
          />
          <br />
          <br />
          <h2>{project.title}</h2>
        </div>
        <div>
          <h1>{project.title}</h1>
          <p className="profile">{project.description}</p>
          <p className="profile">
            <a href={project.githubURL} target="_blank">
              <img width={50} src="./github.png" alt="" />
            </a>
          </p>
        </div>
      </FlipCard>
    </>
  );
}
