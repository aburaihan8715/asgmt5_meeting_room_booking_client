type sectionHeadingProps = {
  heading: string;
};

const SectionHeading = ({ heading }: sectionHeadingProps) => {
  return (
    <div className="flex flex-col justify-center mb-10">
      <h3 className="mb-4 text-xl font-semibold text-transparent text-gray-900 sm:2xl title-font md:text-3xl bg-gradient-to-r from-blue-700 via-orange-600 to-blue-500 bg-clip-text">
        {heading}
      </h3>

      <div>
        <span className="relative flex justify-center">
          <div className="absolute inset-x-0 h-px -translate-y-1/2 bg-transparent opacity-75 top-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

          <span className="relative z-10 px-6"></span>
        </span>
      </div>
    </div>
  );
};

export default SectionHeading;
