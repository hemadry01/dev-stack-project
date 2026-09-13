import { MdOutlineStarOutline } from "react-icons/md";
import type { Itecnology } from "../../type/Tecnology";
import type { Dispatch, SetStateAction } from "react";

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
  const handleSelectTecnology = () => {
    setCount(count+1);
    setSelectTecnology([...selectTecnology,technology]);
  };
  console.log(handleSelectTecnology)

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
        <div className="flex justify-between items-center">
          <p>{technology.Badge}</p>
          <p>{technology.Difficulty}</p>
          <p className="flex gap-1 items-center">
            <MdOutlineStarOutline />
            {technology.Rating}
          </p>
        </div>
        <div className="mt-6">
          <button
            onClick={() => handleSelectTecnology()}
            className="btn bg-black btn-block text-white"
          >
            Add to Stack
          </button>
        </div>
      </div>
    </div>
  );
}