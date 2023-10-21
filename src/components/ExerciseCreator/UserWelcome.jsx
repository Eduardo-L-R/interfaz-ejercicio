const username = "John";

const UserWelcome = () => {
  return (
    <article className="pb-10 pt-20 font-bold leading-8 text-gray-800">
      <span className="text-2xl ">Hola {username},</span>
      <p className="text-xl ">crea una nueva rutina</p>
    </article>
  );
};
export default UserWelcome;
