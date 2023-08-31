import LeftSide from "./components/LeftSide.jsx";
import RightSide from "./components/RightSide.jsx";

export default function MyPortfolio() {
  return (
    <div >
      <div className="relative bg-white pt-[120px] pb-[110px] lg:pt-60 min-h-[100vh]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <LeftSide />
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <RightSide />
          </div>
        </div>
      </div>
    </div>
  );
}
