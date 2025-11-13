import { useState } from "react";

function LocalStock() {
  const [depositAmount, setDepositAmount] = useState(0);
  const [dd, setDd] = useState(0);
  const deposit = async () => {
    fetch("/api/stock/acnt", {
      method: "POST", // 💡 POST 메서드를 명시적으로 지정
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}), // 키움 API는 POST 요청 시 Body를 요구하므로 빈 객체라도 보냅니다.
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setDepositAmount(parseInt(data.data.d2_entra));
        setDd(parseInt(data.data.fc_stk_krw_repl_set_amt));
      })
      .catch((error) => {
        console.error("조회 에러:", error);
      });
  };

  const chartView = async () => {
    fetch("/api/dostk/chart", {
      method: "POST", // 💡 POST 메서드를 명시적으로 지정
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stk_cd: "005930",
        base_dt: "20250101",
        upd_stkpc_tp: "1",
      }), // 키움 API는 POST 요청 시 Body를 요구하므로 빈 객체라도 보냅니다.
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("차트조회 에러:", error);
      });
  };
  return (
    <div className="text-white p-[30px] font-sans">
      <h1>📈 키움증권 현재가 조회</h1>
      <button onClick={deposit}>조회</button>
      <div>출금가능금액 : {depositAmount}원</div>
      <div>총예수금 : {dd}원</div>
      <div>
        <div>차트</div>
        <button onClick={chartView}>차트보기</button>
      </div>
    </div>
  );
}

export default LocalStock;
