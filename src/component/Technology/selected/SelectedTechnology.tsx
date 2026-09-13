import type { Dispatch, SetStateAction } from "react";
import type { Itecnology } from "../../../type/Tecnology";
import SelectedTechnologyCard from "./SelectedTechnologyCard";

export interface SelectedTechnologyProps {
  selectTecnology: Itecnology[];
  setSelectTecnology: Dispatch<SetStateAction<Itecnology[]>>;
}

export default function SelectedTechnology({
  selectTecnology,
  setSelectTecnology,
}: SelectedTechnologyProps) {

  console.log(selectTecnology,"from selected technology")
  return (
    <div className="border border-gray-300 rounded-2xl">
      <div className="p-3">
        <h2 className="text-2xl text-black font-bold">Your Stack</h2>
        <p>No technology selected yet</p>
      </div>
      {selectTecnology.map((technology: Itecnology, index: number) => {
        return (
          <SelectedTechnologyCard
            key={index}
            technology={technology}
            selectTecnology={selectTecnology}
            setSelectTecnology={setSelectTecnology}
          ></SelectedTechnologyCard>
        );
      })}
    </div>
  );
}