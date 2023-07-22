const TechCard = (props: { name: string; icon: any }) => {
  const { name, icon } = props;
  return (
    <div className="text-center m-4 mobile:my-2 mobile:mx-3 mobile:responsiveCards">
      <div className="p-8 rounded-md w-min border border-solid border-border-light bg-bg-light dark:border-border-dark dark:bg-bg-dark mobile:p-4 hover:transition-all hover:duration-300 hover:ease-in-out hover:border-black hover:dark:border-white">
        {icon}
      </div>
      <p className="mt-2 text-lg text-light-secondary dark:text-dark-secondary mobile:text-sm">
        {name}
      </p>
    </div>
  );
};

export default TechCard;
