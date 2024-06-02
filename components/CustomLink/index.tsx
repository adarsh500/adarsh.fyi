import Link from "next/link";

const LinkWithAnimation = (props) => {
  const { name, link, description, list = false } = props;
  return (
    <span className="flex gap-2">
      <Link
        href={link}
        target="_blank"
        className="font-medium underline decoration-zinc-800 underline-offset-6 hover:decoration-zinc-300 hover:underline-offset-4 transition-all duration-300 ease-in-out und"
      >
        {name}
      </Link>
      {description && (
        <p className="font-normal text-dark-secondary">- {description}</p>
      )}
    </span>
  );
};

export default LinkWithAnimation;
