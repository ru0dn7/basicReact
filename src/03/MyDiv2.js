import MyDiv3 from "./MyDiv3"

export default function MyDiv2() {
  return (
    <div className="flex flex-col p-5 m-10 w-3/4 h-3/4 justify-center items-center bg-lime-700 text-white">
      <div className="w-full flex justify-start">MyDiv2</div>
      <MyDiv3 />
    </div>
  );
}
