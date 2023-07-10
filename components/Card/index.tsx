import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  href?: string;
};

const Card = (props: CardProps) => {
  const { title, description, href } = props;

  return (
    <Link
      href={href || "/more"}
      className="flex flex-col mr-8 mb-8 rounded-lg w-[calc(50%-16px)] p-[18px] bg-bg-light border border-solid border-border-light dark:bg-bg-dark dark:border-border-dark hover:scale-101 hover:transition-all hover:duration-300 hover:ease-in-out hover:dark:border-white even:mr-0 mobile:my-2 mobile:w-full mobile:mr-0"
    >
      <p className="text-xl font-medium flex justify-start items-center mobile:text-lg">
        {title}
      </p>
      <p className="mt-2.5 text-lg line-clamp-1 text-light-secondary dark:text-dark-secondary mobile:text-base">
        {description}
      </p>
    </Link>
  );
};

export default Card;