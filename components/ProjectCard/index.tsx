import LinkWithHover from "@components/LinkWithHover";
import { LuExternalLink } from "react-icons/lu";
import { VscGithubInverted } from "react-icons/vsc";

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
    <div className="slide-enter-content group flex flex-col mr-9 min-h-min w-[calc(50%-18px)] rounded-md border border-solid border-border-dark z-[1] bg-bg-dark  mobile:w-full mobile:flex-row mobile:mr-0 mobile:mb-8 even:mr-0 hover:transition-all hover:duration-300 hover:ease-in-out">
      <div className="flex-col justify-end py-7 px-[18px] mobile:p-5 mobile ">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center w-full">
            <p className="flex text-xl mobile:text-lg font-semibold justify-start items-center text-dark-primary">
              {title}
            </p>
          </div>
        </div>
        <p className="mt-4 text-lg mobile:text-base line-clamp-3 text-dark-secondary mobile:mt-2">
          {description}
        </p>
        <div className="mt-4 text-base flex justify-start items-center gap-6">
          <LinkWithHover
            href={link}
            className="text-lg flex gap-2 items-center mobile:text-base font-normal underline-offset-8"
          >
            <LuExternalLink className="text-border-dark" />
            live
          </LinkWithHover>
          <LinkWithHover
            href={githubUrl}
            className="text-lg flex gap-2 items-center mobile:text-base font-normal underline-offset-8"
          >
            <VscGithubInverted className="align-middle text-border-dark" />
            github
          </LinkWithHover>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
