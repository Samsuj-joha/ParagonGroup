import SectionThree from "./section3/page";
import Header from "@/layout/header/page";
import SectionTwo from "./section2/page";
import SectionOne from "./section1/page";
const Home = () => {
  return (
    <>
      <Header />
      <div className="">
        {/* Section 1 */}
        <SectionOne />
        {/* Section 2 */}
        <SectionTwo />
        {/* Section 3 */}
        <SectionThree />
      </div>
    </>
  );
};
export default Home;
