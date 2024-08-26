type sectionHeadingProps = {
  heading: string;
};

const SectionHeading = ({ heading }: sectionHeadingProps) => {
  return (
    <div className="flex justify-center mb-10">
      <h3 className="pb-2 mb-4 text-xl font-bold text-transparent text-gray-900 border-b sm:2xl border-primary title-font md:text-4xl bg-gradient-to-r from-blue-700 via-orange-600 to-blue-500 bg-clip-text">
        {heading}
      </h3>
    </div>
  );
};

export default SectionHeading;
