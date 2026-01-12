import PageHeader from '../components/header'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/projectCard'
function Projects() {
  let i = 0;
  return (
    <div >
      <PageHeader />
      <main className="Home-Background">
        <div className="featuredProjects">
          {projects.map(p => {
            return <ProjectCard project={p} side={i++ % 2} />
          })}
        </div>
      </main>
    </div>);

}

export default Projects;
