import { MdOutlineStarOutline } from "react-icons/md";
import type { Itecnology } from "../../type/Tecnology";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

export type TechnologyCardProps = {
  technology: Itecnology;
  selectTecnology: Itecnology[];
  setSelectTecnology: Dispatch<SetStateAction<Itecnology[]>>;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

export default function TechnologyCard({
  technology,
  selectTecnology,
  setSelectTecnology,
  count,
  setCount
}: TechnologyCardProps) {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelectTecnology = () => {
    setCount(count+1);
    setSelectTecnology([...selectTecnology,technology]);
    setIsSelected(true);
    toast(`${technology.Name} added to your stack`);
  };

  return (
    <div className="card w-80 bg-base-100 shadow-sm gap-3 mb-4">
      <div className="card-body">
        <div className="flex justify-between">
          <img src={technology.Icon} alt={technology.Name} className="w-10" />
          <span className="text-[14px]">{technology.Categorychip}</span>
        </div>
        <div className="mt-6 flex flex-col gap-2 text-xs">
          <h2 className="text-2xl font-bold">{technology.Name}</h2>
          <p>{technology.Description}</p>
        </div>
        <div className="flex justify-between items-center space-x-4  mt-4">
          <p>{technology.Badge}</p>
          <p>{technology.Difficulty}</p>
          <p className="flex gap-1 items-center">
            <MdOutlineStarOutline />
            {technology.Rating}
          </p>
        </div>
        <div className="mt-2">
          <button
            onClick={() => handleSelectTecnology()}
            className="btn w-full"
            disabled={isSelected}
          >
            {isSelected === true ? "Your Stack" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
}