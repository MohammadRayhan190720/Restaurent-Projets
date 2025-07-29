import CheifReCard from "./CheifReCard";
import SectionTitle from "./shared/SectionTitle";

const ChiefRe = () => {
  return (
    
    
    <div className="my-10 border-t-2 border-b-2 border-yellow-400">
      <SectionTitle 
      subHeading={'Should Try'}
      heading={'cheif Recommendation'} >

      </SectionTitle>
      <CheifReCard></CheifReCard>
      
      
    </div>
  );
};

export default ChiefRe;