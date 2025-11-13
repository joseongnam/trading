function Board() {
  return (
    <div className="text-white">
      <table className="m-auto border-collapse w-[90%] mt-20">
        <thead className="">
          <tr className="">
            <th className="text-center border-b">번호</th>
            <th className="text-center border-b">제목</th>
            <th className="text-center border-b">작성자</th>
            <th className="text-center border-b">작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">1</td>
            <td className="">게시글 제목</td>
            <td className="text-center">작성자</td>
            <td className="text-center">작성일</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Board;
