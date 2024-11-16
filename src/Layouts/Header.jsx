import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mt-12">
      <div>
        <img className="w-[450px]" src={logo} alt="" />
      </div>
      <p className="font-semibold text-xl py-3 text-[#706F6F]">Journalism Without Fear or Favour</p>
      <p className="text-slate-500 font-semibold">{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;