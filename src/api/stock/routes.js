import express from "express";
import fetch from "node-fetch";

// 라우터 변수명은 stockRouter (소문자)로 통일
const stockRouter = express.Router();

// 🔹 주식 현재가 조회 API
stockRouter.post("/acnt", async (req, res) => {
  try {
    const accessToken = req.session.accessToken;

    if (!accessToken) {
      return res.status(401).json({
        error: "인증 오류",
        detail: "세션에 토큰이 없습니다. 로그인해주세요.",
      });
    }

    // 키움 API 요구 데이터: 계좌 번호와 비밀번호를 .env 파일에서 가져옵니다.
    const data = {
      acnt_no: process.env.ACCOUNT_NO || "대체_계좌번호",
      passwd: process.env.ACCOUNT_PASSWD || "대체_비밀번호",
      qry_tp: "1",
    };

    // 키움 API 호출
    const response = await fetch("https://api.kiwoom.com/api/dostk/acnt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        authorization: `Bearer ${accessToken}`,
        "cont-yn": "N",
        "next-key": 0,
        "api-id": "kt00001",
      },
      body: JSON.stringify(data),
    });

    // 💡 핵심 수정: response.json()을 한 번만 호출하여 'body used already' 오류 해결
    let result;
    try {
      // 응답을 JSON으로 한 번만 소비합니다. (이것이 핵심 수정 사항)
      result = await response.json();
      console.log("현재가 조회 결과 (JSON):", result);
    } catch (e) {
      // JSON 파싱 실패 시: 오류 디버깅을 위해 텍스트로 읽어옵니다.
      const responseText = await response
        .text()
        .catch(() => "스트림 소비 실패.");
      console.error("키움 응답 JSON 파싱 실패:", responseText, e);
      return res.status(response.status).json({
        error: "API 응답 오류 (JSON 파싱 실패)",
        detail: `비 JSON 응답: ${responseText}`,
      });
    }

    // 키움 자체 오류 코드 처리 (return_code 0이 성공)
    if (!response.ok || (result.return_code && result.return_code !== 0)) {
      console.error("키움 API 오류 응답:", result);
      return res.status(response.status).json({
        error: "키움 조회 실패",
        detail: result.return_msg || JSON.stringify(result),
      });
    }

    return res.status(200).json({ data: result });
  } catch (err) {
    console.error("FATAL Error in /api/stock/acnt:", err);
    return res
      .status(500)
      .json({ error: "내부 서버 오류", detail: err.message });
  }
});

export default stockRouter;
