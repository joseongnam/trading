import dotenv from "dotenv";
import express from "express";
import fetch from "node-fetch";

dotenv.config();
const router = express.Router();

// 🔑 키움 접근토큰 발급 API
router.post("/token", async (req, res) => {
  const url = "https://api.kiwoom.com/oauth2/token";
  const data = {
    grant_type: "client_credentials",
    appkey: process.env.APP_KEY, // .env 파일에 설정된 키
    secretkey: process.env.SECRET_KEY, // .env 파일에 설정된 키
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        // Content-Type은 API 명세에 따라 설정합니다.
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json", // 응답을 JSON으로 받도록 명시
      },
      body: JSON.stringify(data),
    });

    // 응답 본문을 텍스트로 먼저 받아서, 성공 여부에 상관없이 디버깅 정보를 확보합니다.
    const responseText = await response.text();
    let result = {};

    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      console.error("Failed to parse JSON response:", responseText);
      throw new Error(`Non-JSON response received: ${responseText}`);
      return;
    } // HTTP 상태 코드를 확인하고, 토큰이 포함되어 있는지 확인합니다.

    if (response.ok && result.token) {
      // ❗️ 키움 API는 보통 'token'이 아닌 'access_token'을 사용합니다.
      // 토큰 발급 성공
      req.session.accessToken = result.token;
      console.log("Access Token Successfully Saved to Session:", result.token);
      res.json({ token: result.token });
      return;
    } else {
      // 토큰 발급 실패 (키움 API의 상세 오류 메시지를 포함하여 에러 처리)
      console.error("Kiwoom API Error Response:", result);
      throw new Error(
        `Kiwoom API token failure. Status: ${response.status}. Detail: ${
          result.message || JSON.stringify(result)
        }`
      );
      return;
    }
  } catch (err) {
    console.error("FATAL Error during token fetch:", err);
    // 클라이언트에게 오류가 발생했음을 알립니다.
    res.status(500).json({
      error: "Failed to fetch Kiwoom access token",
      detail: err.message,
    });
  }
});

export default router;
