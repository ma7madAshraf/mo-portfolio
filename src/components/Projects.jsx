import ProjectsCard from "./ProjectsCard";
import SectionTitle from "./SectionTitle";
import useFetchProjects from "../fetchProjects";

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();
  const newProjects = [...projects.sort((a, b) => a.id - b.id)];
  if (isLoading)
    <section className="projects">
      <h2>loading....</h2>
    </section>;
  return (
    <section className="mt-8 py-20 align-element bg-base-300" id="projects">
      <SectionTitle text="web creations" />
      <div className="py-16 grid md:grid-cols-2 xl:grid-cols-3 gap-8  flex-row-reverse">
        {newProjects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
