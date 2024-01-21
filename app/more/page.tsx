import { more } from "@components/Content/more";
import Card from "@components/Card";

const More = () => (
  <main
    className="slide-enter-content flex justify-start items-start flex-col break-words text-xl text-left 
    mt-20 mb-16 flex-1 text-light-primary dark:text-dark-primary mobile:py-6 mobile:px-4 
    mobile:mt-6 mobile:mb-10 mobile:text-base"
  >
    <p className="text-5xl font-extrabold mobile:text-4xl mobile:font-bold mb-4 slide-enter-content">
      More
    </p>
    <div className="flex justify-center items-start flex-col slide-enter-content w-full">
      <div className="my-10 flex justify-start items-center flex-wrap mobile:my-8 w-full">
        {more.map((item) => (
          <Card {...item} key={item.title} />
        ))}
      </div>
    </div>
  </main>
);

export default More;
