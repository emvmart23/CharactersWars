import React, { MouseEventHandler } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { dataStar } from "@/Counter/context";

export interface Props {
  name: string;
  height: string;
}

export interface CharactersProps {
  data: Props;
}

const Characters: React.FC<CharactersProps> = ({ data }) => {
  const { setCharacterInfoData, characterInfoData, nav, setNavContent } =
    dataStar();

  const handleInfo: MouseEventHandler<HTMLButtonElement> = () => {
    if (nav.current != null) {
      nav.current.style.left = "0";
    }
    setCharacterInfoData(data);
    setNavContent(true);
  };

  return (
    <div className="flex justify-between border border-black p-3 w-full h-28 min-w-[320px] sm:w-72">
      <p className="flex flex-col text-2xl">
        <span>{data.name}</span>
        <span>{data.height}</span>
      </p>
      <button onClick={handleInfo}>
        <KeyboardArrowRightIcon className="w-10 h-10" />
      </button>
    </div>
  );
};

export default Characters;
