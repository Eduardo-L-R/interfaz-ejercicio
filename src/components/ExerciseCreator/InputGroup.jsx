import { useRef } from "react";

const labels = ["Hora de Inicio", "Duración", "Intensidad"];
const placeholders = ["1:00 pm", "60 minutos", "Alta"];

function InputGroup() {
  const inputRefs = [useRef(), useRef(), useRef()];

  const handleKeyPress = (event, currentIndex) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const nextIndex = currentIndex + 1;

      if (nextIndex < inputRefs.length) {
        inputRefs[nextIndex].current.focus();
      }
    }
  };

  return (
    <div className="mb-14 rounded-lg border px-4 py-3">
      {inputRefs.map((inputRef, index) => (
        <div
          className="border- mb-2 flex items-center justify-between border-b-gray-300"
          key={index}
        >
          <label className="font-bold text-gray-500" htmlFor="">
            {labels[index]}
          </label>
          <input
            type="text"
            placeholder={placeholders[index]}
            className="right_placeholder rounded p-2 text-right font-semibold text-gray-700 outline-none"
            onKeyPress={(e) => handleKeyPress(e, index)}
            ref={inputRef}
          />
        </div>
      ))}
    </div>
  );
}

export default InputGroup;
