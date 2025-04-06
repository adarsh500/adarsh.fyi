import BlurImage from "@components/BlurImage";
import LinkWithAnimation from "@components/CustomLink";
import { CONFIGS, DOTFILES, HARDWARE, SOFTWARE } from "constants/uses";
import image from "../../../assets/images/setup.jpg";

type Tool = {
  key: string;
  name: string;
  link: string;
  description: string;
};

type ToolsListProps = {
  subTitle: string;
  items: Array<Tool>;
};

const ToolsList = (props: ToolsListProps) => {
  const { subTitle, items } = props;
  return (
    <div>
      <h2 className="animate-fadeInUp text-2xl font-semibold">{subTitle}</h2>
      <ul className="slide-enter-content ml-4 my-6 mobile:ml-2 flex flex-col justify-start gap-4 mobile:gap-2 mobile:my-8 w-full list-none marker:text-zinc-500 text-xl">
        {items.map((item) => {
          const { key, name, link, description } = item;

          return (
            <li
              key={key}
              className="flex gap-2 mobile:gap-1 before:content-['-'] before:text-zinc-200 before:mr-2"
            >
              <LinkWithAnimation
                name={name}
                link={link}
                // description={description}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default async function Uses() {
  return (
    <main
      className="flex justify-start items-start flex-col break-words text-xl text-left 
    mt-20 mb-16 flex-1 text-dark-primary mobile:py-6 mobile:px-4 
    mobile:mt-6 mobile:mb-10 mobile:text-base"
    >
      <p className="animate-fadeInUp text-5xl font-extrabold mobile:text-4xl mobile:font-bold mb-4 slide-enter-content">
        Tech that i use
      </p>
      <p className="animate-fadeInUp text-xl my-4 mb-8 text-dark-secondary">
        A growing collection of things i use everyday as a software engineer
      </p>

      <BlurImage src={image} alt="uses" height={400} width={760} />
      <div className="flex flex-col my-8 mobile:my-6 gap-6">
        <ToolsList subTitle="On my desk" items={HARDWARE} />
        <ToolsList subTitle="Software" items={SOFTWARE} />
        <ToolsList subTitle="Config" items={CONFIGS} />
      </div>
    </main>
  );
}
