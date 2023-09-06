import React, { useContext} from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ContextStarWars } from "@/Counter/context";

interface CharactersProps {
  data: {
    name: string;
    height: string;
  };
}

const Characters: React.FC<CharactersProps> = ({ data }) => {
  const { setIsDataShowOpen } = useContext(ContextStarWars)

  const handleOpenInfo = () => {
    setIsDataShowOpen(true)
  }

  return (
      <div className="flex justify-between border border-black p-3 w-full h-full fix">
        <p className="flex flex-col">
          <span>{data.name}</span>
          <span>{data.height}</span>
        </p>
        <button onClick={() => handleOpenInfo()}>
          <KeyboardArrowRightIcon />
        </button>
      </div>
  );
};

export default Characters;
