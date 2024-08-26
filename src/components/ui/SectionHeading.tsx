type sectionHeadingProps = {
  heading: string;
};

const SectionHeading = ({ heading }: sectionHeadingProps) => {
  return (
    <div className="flex justify-center mb-10 flex-col">
      <h3 className="mb-4 text-xl font-bold text-transparent text-gray-900  sm:2xl title-font md:text-4xl bg-gradient-to-r from-blue-700 via-orange-600 to-blue-500 bg-clip-text">
        {heading}
      </h3>

      <div>
        <span className="relative flex justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-75"></div>

          <span className="relative z-10 px-6"></span>
        </span>
      </div>
    </div>
  );
};

export default SectionHeading;
