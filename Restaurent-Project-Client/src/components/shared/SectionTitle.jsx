

const SectionTitle = ({heading,subHeading}) => {
  return (
    <div className="mx-auto py-5 space-y-5 text-center">
      <p className="text-yellow-400 italic  text-xl">---{subHeading}---</p>
      <h3 className="text-3xl font-bold border-y-2 py-4 ">{heading}</h3>
      
    </div>
  );
};

export default SectionTitle;