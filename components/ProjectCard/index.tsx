import { VscGithubInverted } from "react-icons/vsc";
import { GrLinkNext } from "react-icons/gr";

type ProjectProps = {
  title: string;
  link: string;
  description: string;
  githubUrl: string;
  imageUrl: string;
  og: string;
};

const ProjectCard = (props: ProjectProps) => {
  const { title, link, description, githubUrl } = props;

  return (
    <div className="group flex flex-col mr-9 cursor-pointer min-h-min w-[calc(50%-18px)] rounded-md bg-bg-light border border-solid border-border-light z-[1] dark:bg-bg-dark dark:border-border-dark mobile:w-full mobile:flex-row mobile:mr-0 mobile:mb-8 even:mr-0 hover:scale-101 hover:transition-all hover:duration-300 hover:ease-in-out hover:border-black hover:dark:border-white ">
      <div className="flex-col justify-end py-7 px-[18px] mobile:p-5 mobile">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center w-full">
            <a
              className="flex text-xl mobile:text-lg font-semibold justify-start items-center "
              href={link}
              target="_blank"
            >
              <p className="mr-2">{title}</p>
              <GrLinkNext className="group-hover:translate-x-1.5 h-5 w-5 text-black align-middle transition-all duration-300 ease-in-out dark:text-white stroke-white mobile:w-4 mobile:h-4 dark:stroke-white icon" />
            </a>
            <a
              className="flex justify-end items-center text-lg "
              href={githubUrl}
              target="_blank"
            >
              <VscGithubInverted className="align-middle ml-2.5 h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-lg mobile:text-base line-clamp-3 text-light-secondary dark:text-dark-secondary mobile:mt-2">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
