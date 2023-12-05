"use client";
import { InputBox } from "@/components/inputs";
import { Macro, MacroItem } from "@/services/macroService";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useEffect, useState } from "react";

export default function Home() {
  let emptyMacro: Macro = {
    protein: 0,
    carbs: 0,
    fats: 0,
    calories: 0,
  };

  let emptyMacroItem: MacroItem = {
    name: "",
    protein: 0,
    carbs: 0,
    fats: 0,
    calories: 0,
  };

  const [macros, setMacros] = useState<MacroItem[]>([emptyMacroItem]);
  const [totalMacros, setTotalMacros] = useState<Macro>(emptyMacro);

  useEffect(() => {
    function calculateTotals() {
      let tempMacro = macros.reduce(
        (acc, macro) => ({
          protein: acc.protein + macro.protein,
          carbs: acc.carbs + macro.carbs,
          fats: acc.fats + macro.fats,
          calories: acc.calories + macro.calories,
        }),
        emptyMacro
      );
      return tempMacro;
    }

    setTotalMacros(calculateTotals());
  }, [macros]);

  function handleAddMacro() {
    setMacros((macros) => [...macros, emptyMacroItem]);
  }

  function handleDeleteMacro(macroIndex: Number) {
    setMacros((prevMacros) =>
      prevMacros.filter((_, index) => index !== macroIndex)
    );
  }

  function handleUpdateMacro(index: number, updatedMacro: MacroItem) {
    setMacros(() =>
      macros.map((macro, i) => (i === index ? updatedMacro : macro))
    );
  }

  return (
    <div>
      <div className="container bg-stone-800 shadow-md shadow-stone-600 divide-y divide-stone-500 rounded-lg border border-stone-500">
        <div className="flex w-full">
          <div className="grid lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-6 grid-cols-4 divide-y lg:divide-none md:divide-none sm:divide-none divide-stone-500 text-center text-lg w-full">
            <p className="lg:col-span-2 lg:block md:col-span-2 md:block sm:col-span-2 sm:block col-span-4 pt-2 pb-2">Ingredients</p>
            <p className="pt-2 pb-2">Protein</p>
            <p className="pt-2 pb-2">Carbs</p>
            <p className="pt-2 pb-2">Fats</p>
            <p className="pt-2 pb-2">Calories</p>
          </div>
        </div>

        {macros.map((macro, index) => (
          <div key={index} className="flex">
            <div className="grid lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-6 grid-cols-4 text-center">
              <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-4 flex justify-center pt-4 pb-4 items-center space-x-4">
                <FontAwesomeIcon
                  icon={faTrash}
                  className="align-centre hover:text-red-600"
                  onClick={() => handleDeleteMacro(index)}
                />
                <InputBox
                  inputType="text"
                  value={macro.name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    handleUpdateMacro(index, {
                      ...macro,
                      name: e.currentTarget.value,
                    });
                  }}
                />
              </div>
              <div className="flex justify-center pt-4 pb-4">
                <InputBox
                  inputType="number"
                  value={macro.protein}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleUpdateMacro(index, {
                      ...macro,
                      protein: Number(e.currentTarget.value),
                    })
                  }
                />
              </div>
              <div className="flex justify-center pt-4 pb-4">
                <InputBox
                  inputType="number"
                  value={macro.carbs}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleUpdateMacro(index, {
                      ...macro,
                      carbs: Number(e.currentTarget.value),
                    })
                  }
                />
              </div>
              <div className="flex justify-center pt-4 pb-4">
                <InputBox
                  inputType="number"
                  value={macro.fats}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleUpdateMacro(index, {
                      ...macro,
                      fats: Number(e.currentTarget.value),
                    })
                  }
                />
              </div>
              <div className="flex justify-center pt-4 pb-4">
                <InputBox
                  inputType="number"
                  value={macro.calories}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleUpdateMacro(index, {
                      ...macro,
                      calories: Number(e.currentTarget.value),
                    })
                  }
                />
              </div>
            </div>
          </div>
        ))}

        <div className="flex">
          <div className="grid lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-6 grid-cols-4 text-center w-full">
            <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-4 flex justify-center pt-1 pb-1">
              <p>Totals</p>
            </div>
            <div className="flex justify-center pt-1 pb-1">
              <p>{totalMacros.protein}</p>
            </div>
            <div className="flex justify-center pt-1 pb-1">
              <p>{totalMacros.carbs}</p>
            </div>
            <div className="flex justify-center pt-1 pb-1">
              <p>{totalMacros.fats}</p>
            </div>
            <div className="flex justify-center pt-1 pb-1">
              <p>{totalMacros.calories}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex justify-center pt-2">
        <button
          onClick={handleAddMacro}
          className="block w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Row
        </button>
      </div>
    </div>
  );
}
