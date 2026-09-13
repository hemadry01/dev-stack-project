
import { use, useState } from "react";
import type { Itecnology } from "../../type/Tecnology";
import TechnologyCard from "./TechnologyCard";
import SelectedTechnology from "./selected/SelectedTechnology";


export interface TecnologyDetailListProps {

  technologyPromise: Promise<Itecnology[]>;
}

export default function TecnologyDetailList({ technologyPromise }: TecnologyDetailListProps) {

   const technology = use(technologyPromise);
   const [selectTecnology, setSelectTecnology] = useState<Itecnology[]>([]);

   console.log(technology);
    
    return (
      <div className="justify-between items-center mx-auto container mt-20">
        <div>
          <h2 className="text-[24px] font-bold">
            Explore the <span className="text-blue-500">Technologies</span>
          </h2>
          <p className="text-gray-400">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        <div className="mt-4">
          <div className="flex">
            <div className="w-3/4 grid grid-cols-3 gap-3 mr-4 ">
              {technology.map((technology: Itecnology, index: number) => {
                return (
                  <TechnologyCard
                    key={index}
                    technology={technology}
                    selectTecnology={selectTecnology}
                    setSelectTecnology={setSelectTecnology}
                  ></TechnologyCard>
                );
              })}
            </div>

            <div className="w-1/4 rounded-1xl ">
              <SelectedTechnology
                selectTecnology={selectTecnology}
                setSelectTecnology={setSelectTecnology}
              ></SelectedTechnology>
            </div>
          </div>
        </div>
      </div>
    );
}

{/* <SelectedTechnology
  selectTecnology={selectTecnology}
  setSelectTecnology={setSelectTecnology}
/>; */}