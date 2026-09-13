import type { Dispatch, SetStateAction } from "react";
import type { Itecnology } from "../../../type/Tecnology";
import { RxCross2 } from "react-icons/rx";

export interface SelectedTechnologyCardProps {
  technology: Itecnology;
  selectTecnology: Itecnology[];
  setSelectTecnology: Dispatch<SetStateAction<Itecnology[]>>;
 
}

export default function SelectedTechnologyCard({
  technology,
  selectTecnology,
  setSelectTecnology,
}: SelectedTechnologyCardProps) {

  const handleRemoveTechnology = (technology: Itecnology) => {
    //alert("Remove technology");
    const resetTechnology = selectTecnology.filter(
      (selectTechnology) => selectTechnology.Name != technology.Name,
    );
    setSelectTecnology(resetTechnology);
  };
  return (
    <div className="border border-gray-300 rounded-2xl p-2 mb-2 mr-3 ml-3 flex justify-between items-center mx-auto">
      <div className="flex gap-2 items-center">
        <img src={technology.Icon} alt="" className="w-[30px] h-[30px]" />
        <div>
          <h2 className="font-semibold">{technology.Name}</h2>
          <p>{technology.Categorychip}</p>
        </div>
      </div>
      <span
      onClick={()=>handleRemoveTechnology(technology)}
       className="mr-2 cursor-pointer">
        <RxCross2 />
      </span>
    </div>
  );
}