import type { Dispatch, SetStateAction } from "react";
import type { Itecnology } from "../../../type/Tecnology";
import SelectedTechnologyCard from "./SelectedTechnologyCard";
import { toast } from "react-toastify";

export interface SelectedTechnologyProps {
  selectTecnology: Itecnology[];
  setSelectTecnology: Dispatch<SetStateAction<Itecnology[]>>;
}

export default function SelectedTechnology({
  selectTecnology,
  setSelectTecnology,
}: SelectedTechnologyProps) {

  //console.log(selectTecnology,"from selected technology")
  const removeAllTechnology=()=>{
    setSelectTecnology([]);
    toast("Remove all data in Your Stack");
  }



  return (
    <div className="border border-gray-300 rounded-2xl">
      <div className="p-3">
        <h2 className="text-2xl text-black font-bold">Your Stack</h2>
        <p>{selectTecnology.length} technology selected yet</p>
      </div>
      {selectTecnology.length === 0 ? (
        <div className="border border-gray-300 rounded-2xl p-6 mb-2 mr-3 ml-3 flex justify-between items-center mx-auto">
          <h2 className="items-center mx-auto text-gray-300">
            Your stack is empty
          </h2>
        </div>
      ) : (
        selectTecnology.map((technology: Itecnology, index: number) => {
          return (
            <SelectedTechnologyCard
              key={index}
              technology={technology}
              selectTecnology={selectTecnology}
              setSelectTecnology={setSelectTecnology}
            ></SelectedTechnologyCard>
          );
        })
      )}
      <div>
        <button
          className="btn btn-outline btn-secondary rounded-2xl w-full"
          onClick={() => removeAllTechnology()}
        >
          Remove All
        </button>
      </div>
    </div>
  );
}