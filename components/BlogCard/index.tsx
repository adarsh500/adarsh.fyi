import Link from "next/link";
import { format, parseISO } from "date-fns";

type Blog = {
  title: string;
  date: string;
  description: string;
  thumbnail: string;
  tags: string[];
  slug: string;
  readingTime: {
    text: string;
  };
};

const BlogCard = (props: Blog) => {
  const { title, date, description, slug, readingTime } = props;

  return (
    <Link
      href={slug}
      className="flex justify-between mt-8 pb-8 border-b-[1px] border-solid border-border-light w-full dark:border-border-dark mobile:my-8"
    >
      <div className="flex flex-col">
        <h3 className="text-2xl font-semibold line-clamp-1 mobile:text-xl">
          {title}
        </h3>
        <p className="mt-2 text-xl line-clamp-2 text-light-secondary dark:text-dark-secondary ">
          {description}
        </p>
        <p className="mt-4 text-xl line-clamp-2 text-light-secondary dark:text-dark-secondary ">
          {format(parseISO(date), "LLLL d, yyyy")}
          &nbsp;&#8901; &nbsp;
          {readingTime.text}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
