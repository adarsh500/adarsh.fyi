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
      className="slide-enter-content flex justify-between mt-8 pb-8 mobile:mt-6 mobile:pb-6 border-b-[1px] border-solid border-border-light w-full dark:border-border-dark mobile:my-8"
    >
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold line-clamp-1 mobile:text-lg">
          {title}
        </h3>
        <p className="mt-2 text-lg line-clamp-2 text-light-secondary dark:text-dark-secondary ">
          {description}
        </p>
        <p className="mt-4 text-base line-clamp-2 text-light-secondary dark:text-dark-secondary">
          {format(parseISO(date), "LLLL d, yyyy")}
          &nbsp;&#8901;&nbsp;
          {readingTime.text}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
