import InputGroup from "./InputGroup";
import SelectExercise from "./SelectExercise";
import UserWelcome from "./UserWelcome";

const ExerciseCreator = () => {
  return (
    <section className="mx-auto max-w-sm px-4">
      <UserWelcome />
      <SelectExercise />
      <InputGroup />
    </section>
  );
};
export default ExerciseCreator;
