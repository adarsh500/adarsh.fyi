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
      className="slide-enter-content flex justify-between pb-8 mt-6 mobile:mt-2 mobile:pb-6 border-b-[1px] border-solid border-border-dark w-full mobile:my-8"
    >
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold line-clamp-1 mobile:text-lg text-dark-primary">
          {title}
        </h3>
        <p className="mt-2 text-lg line-clamp-2 text-dark-secondary mobile:leading-6">
          {description}
        </p>
        <p className="mt-4 text-base line-clamp-2 text-dark-secondary">
          {format(parseISO(date), "LLLL d, yyyy")}
          &nbsp;&#8901;&nbsp;
          {readingTime.text}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
