type PageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <main
      className="slide-enter-content flex justify-start items-start flex-col break-words text-xl text-left 
      mt-20 mb-16 flex-1 text-dark-primary mobile:py-6 mobile:px-4 
      mobile:mt-6 mobile:mb-10 mobile:text-base"
    >
      <p className="text-5xl font-extrabold mobile:text-4xl mobile:font-bold mb-4">
        {title}
      </p>
      {children}
    </main>
  );
};

export default PageLayout;
