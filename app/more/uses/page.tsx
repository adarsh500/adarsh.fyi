import LinkWithAnimation from "@components/CustomLink";
import { HARDWARE, SOFTWARE } from "constants/uses";

const ToolsList = (props) => {
  const { subTitle, items } = props;
  return (
    <div>
      <h2 className="animate-fadeInUp text-2xl font-semibold">{subTitle}</h2>
      <ul className="slide-enter-content ml-4 my-6 flex flex-col justify-start gap-4 mobile:my-8 w-full list-disc marker:text-zinc-500 text-xl">
        {items.map((item) => {
          const { key, name, link, description } = item;

          return (
            <li key={key} className="flex gap-2">
              <LinkWithAnimation
                name={name}
                link={link}
                description={description}
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
        Gear that i use
      </p>
      <p className="animate-fadeInUp text-xl mt-4 text-dark-secondary">
        A growing collection of things i use everyday as a software engineer
      </p>

      <div className="flex flex-col my-8 mobile:my-6 gap-6">
        <ToolsList subTitle="What's on my desk" items={HARDWARE} />
        <ToolsList subTitle="Tools that i use" items={SOFTWARE} />
      </div>
    </main>
  );
}
