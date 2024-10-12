import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { BiSolidError } from "react-icons/bi";

const ProjectCard = ({ url, imageUrl, github, title, online }) => {
  return (
    <article className="bg-base-100 rounded-lg shadow-md block hover:shadow-xl group  duration-300">
      <div className="w-full overflow-hidden rounded-t-lg ">
        <img
          src={imageUrl}
          alt={title}
          className="w-full object-cover  h-64 group-hover:scale-105 duration-300 "
        />
      </div>

      <div className="capitalize p-4">
        <h2 className="text-xl tracking-wide font-semibold text-neutral">
          {title}
        </h2>
        <div className="flex items-center justify-between">
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
                data-tip="under maintenance"
                className="cursor-not-allowed tooltip tooltip-warning    "
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
          {!online && (
            <a
              href=""
              data-tip="under maintenance"
              className=" cursor-none tooltip tooltip-warning    "
              onClick={(e) => e.preventDefault()}
            >
              <BiSolidError className="h-8 w-8 text-slate-500 hover:text-error duration-300" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
export default ProjectCard;
