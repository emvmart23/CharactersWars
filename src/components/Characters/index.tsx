import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
interface CharactersProps {
  data: {
    name: string;
    height: string;
    // mass: string
  };
}

const Characters: React.FC<CharactersProps> = ({ data }) => {
  return (
    <div className="flex justify-between border border-black p-3 w-full h-full fix">
      <p className="flex flex-col">
        <span>{data.name}</span>
        <span>{data.height}</span>
      </p>
      <button>
        <KeyboardArrowRightIcon />
      </button>
    </div>
  );
};

export default Characters;
