import Link from "next/link";

const LinkWithAnimation = (props) => {
  const { name, link, href, description } = props;
  return (
    <span className="flex gap-2">
      <Link
        href={link ?? href}
        target="_blank"
        className="font-medium underline decoration-zinc-700 underline-offset-6 hover:decoration-zinc-300 hover:underline-offset-4 transition-all duration-300 ease-in-out und"
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
