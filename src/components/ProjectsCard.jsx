import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
const ProjectsCard = ({ url, imageUrl, github, title, online }) => {
  return (
    <article className="bg-base-100 rounded-lg shadow-md block hover:shadow-xl group overflow-hidden duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64 group-hover:scale-105 duration-300 "
      />
      <div className="capitalize p-4">
        <h2 className="text-xl tracking-wide font-semibold text-neutral">
          {title}
        </h2>
        <div className="mt-2 flex gap-x-4">
          {online ? (
            <a href={url} target="_blank">
              <TbWorldWww
                className={`h-8 w-8 text-slate-500 hover:text-neutral duration-300 
              }`}
              />
            </a>
          ) : (
            <a
              href=""
              data-tip="site under maintenance"
              className="cursor-not-allowed tooltip "
              onClick={(e) => e.preventDefault()}
            >
              <TbWorldWww
                className={`h-8 w-8 text-slate-500 hover:text-neutral duration-300 
              }`}
              />
            </a>
          )}
          <a href={github} target="_blank">
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-neutral duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard;
