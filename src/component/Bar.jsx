import { useNavigate } from "react-router-dom";

export default function Bar() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-700 lg:flex-1 lg:h-screen h-15 fixed bottom-0 w-screen lg:w-50 lg:static shadow">
      <h1 className="text-white lg:font-bold lg:text-2xl lg:text-center lg:py-5 lg:block hidden rotate-[0.4deg] cursor-pointer">
        <span onClick={() => navigate("/")}>Trading Journal</span>
      </h1>
      <ul className="text-gray-400 flex flex-none lg:block justify-between px-4 lg:text-[20px]">
        <li
          className="py-3 text-center active:text-gray-200 hover:text-gray-200 lg:hover:bg-[#7543fd] rounded cursor-pointer hover:shadow"
          onClick={() => navigate("/localstock")}
        >
          국내주식
        </li>
        <li
          className="py-3 text-center active:text-gray-200 hover:text-gray-200 lg:hover:bg-[#7543fd] rounded cursor-pointer hover:shadow"
          onClick={() => navigate("/overseasstock")}
        >
          해외주식
        </li>
        <li
          className="py-3 text-center active:text-gray-200 hover:text-gray-200 lg:hover:bg-[#7543fd] rounded cursor-pointer hover:shadow"
          onClick={() => navigate("/bitcoin")}
        >
          비트코인
        </li>
        <li
          className="py-3 text-center active:text-gray-200 hover:text-gray-200 lg:hover:bg-[#7543fd] rounded cursor-pointer hover:shadow"
          onClick={() => navigate("/news")}
        >
          뉴스
        </li>
        <li
          className="py-3 text-center active:text-gray-200 hover:text-gray-200 lg:hover:bg-[#7543fd] rounded cursor-pointer hover:shadow"
          onClick={() => navigate("/board")}
        >
          게시판
        </li>
      </ul>
    </div>
  );
}
