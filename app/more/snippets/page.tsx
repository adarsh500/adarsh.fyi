import WorkerClient from "@components/WorkerClient";

const Snippets = () => {
  return (
    <main className="slide-enter-content flex justify-start items-start flex-col break-words text-xl text-left mt-32 mb-24 flex-1 text-dark-primary mobile:py-6 mobile:px-4 mobile:mt-12 mobile:mb-20 mobile:text-base">
      <div className="flex justify-center items-start flex-col slide-enter-content">
        <p className="text-5xl font-extrabold mobile:text-4xl mobile:font-bold">
          Snippets
        </p>
        <div className="my-12 flex justify-start flex-col items-center flex-wrap mobile:my-8">
          <WorkerClient />
        </div>
      </div>
    </main>
  );
};

export default Snippets;
