import { useRouter } from "next/router";

const Project = () => {
  const router = useRouter();

  return (
    <div className=" h-screen w-screen pt-10 bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-500">
      <div className="text-6xl w-fit mx-auto">{router.query.projectName}</div>
      <section className="flex justify-center w-full items-center gap-40 mt-24">
        <div class="spinner-container">
          <div class="animate-spin rounded-full h-36 w-36 border-rose-500  border-t-[5px] border-b-[5px] "></div>
        </div>
        <div className=" w-96 h-96 flex justify-center items-center bg-white shadow-md shadow-lime-500 border border-lime-500 rounded-2xl">
          <ul className="flex flex-col gap-4" >
            <li className="flex gap-4" ><span><div className="animate-spin rounded-full h-6 w-6  border-indigo-500  border-t-2 border-b-2 " ></div></span>hello</li>
            <li className="flex gap-4" ><span><div className="animate-spin rounded-full h-6 w-6  border-indigo-500  border-t-2 border-b-2 " ></div></span>hello</li>
            <li className="flex gap-4" ><span><div className="animate-spin rounded-full h-6 w-6  border-indigo-500  border-t-2 border-b-2 " ></div></span>hello</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Project;
