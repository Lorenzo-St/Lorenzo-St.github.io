import '../styles/components/projectCard.css'
import ProjectDescription from './projectDescription'
import Embed from './videoEmbed.js'
const Side = Object.freeze({
  LEFT: 0,
  RIGHT: 1
});

function ProjectCard({ project, side = Side.LEFT }) {
  let projectImage = (<img src={project.image} className="projectImage" alt="Texs" />);
  if (project.video != null) {
    projectImage = (<Embed videoId={project.video} />);

  }
  const projectText = (<div className="projectText">
    <ProjectDescription fileName={project.markdown} />
  </div>);

  if (side === Side.RIGHT) {
    return (
      <article className="article">
        <div className="backgroundColor">
          <div className="project">
            <div className="content">
              {projectText}
              {projectImage}
            </div>
          </div>
        </div>
      </article>
    );
  }
  return (
    <article className="article">
      <div className="backgroundColor">
        <div className="project">
          <div className="content">
            {projectImage}
            {projectText}
          </div>
        </div>
      </div>
    </article>
  );
}
export default ProjectCard;
