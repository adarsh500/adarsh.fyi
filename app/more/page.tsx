import { more } from "@components/Content/more";
import Card from "@components/Card";

const More = () => (
  <main className="flex justify-start items-start flex-col break-words text-xl text-left mt-32 mb-24 flex-1 text-light-primary dark:text-dark-primary mobile:py-6 mobile:px-4 mobile:mt-12 mobile:mb-20 mobile:text-base">
    <div className="flex justify-center items-start flex-col animate-fadeInUp">
      <p className="text-5xl font-extrabold mobile:text-4xl mobile:font-bold">
        More
      </p>
      <div className="my-12 flex justify-start items-center flex-wrap mobile:my-8">
        {more.map((item) => (
          <Card {...item} key={item.title} />
        ))}
      </div>
    </div>
  </main>
);

export default More;
