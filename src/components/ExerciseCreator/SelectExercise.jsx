import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const options = ["Ejercicio 1", "Ejercicio 2", "Ejercicio 3"];

const SelectExercise = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const selectRef = useRef(null);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSelectedOption("");
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const closeOnOutsideClick = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", closeOnOutsideClick);
    } else {
      document.removeEventListener("click", closeOnOutsideClick);
    }

    return () => {
      document.removeEventListener("click", closeOnOutsideClick);
    };
  }, [isOpen]);

  return (
    <div
      className="relative my-8 w-full rounded-lg bg-gray-300 px-4 py-3 text-gray-800"
      ref={selectRef}
    >
      <div
        className="flex items-center justify-between"
        onClick={toggleOptions}
      >
        <div className="font-semibold">
          {selectedOption || "Elije un ejercicio"}
        </div>
        <IoIosArrowDown size="22" />
      </div>
      {isOpen && (
        <ul className="absolute right-0 mt-4 w-48 rounded-lg border border-gray-300 bg-white ">
          {options.map((option, index) => (
            <li
              key={index}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      <select
        className="hidden"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectExercise;
