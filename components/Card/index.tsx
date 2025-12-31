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
      className="flex flex-col mr-8 mb-8 rounded-md w-[calc(50%-16px)] p-[18px] bg-bg-dark border border-solid border-border-dark shadow-soft-elev ring-1 ring-white/5 hover:ring-white/15 hover:transition-all hover:duration-300 hover:ease-in-out hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand even:mr-0 mobile:my-2 mobile:w/full mobile:mr-0"
    >
      <p className="text-xl font-semibold flex justify-start items-center mobile:text-lg">
        {title}
      </p>
      <p className="mt-2.5 text-lg line-clamp-1 text-dark-secondary mobile:text-base">
        {description}
      </p>
    </Link>
  );
};

export default Card;
