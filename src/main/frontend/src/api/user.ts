import { API_PATH } from "@/constants/index";
import { userInfo, loginInfo } from "@/types";
import callApi from "@/utils/callApi";
import { NavigateFunction } from "react-router-dom";

export const postUser = async (data: userInfo, navigate: NavigateFunction) => {
  const response = await callApi(
    "POST",
    API_PATH.USER_SIGNUP,
    JSON.stringify(data)
  );

  if (response.ok) {
    alert("회원가입이 완료되었습니다.");
    navigate("/login");
  }
};

export const login = async (data: loginInfo, navigate: NavigateFunction) => {
  const response = await callApi(
    "POST",
    API_PATH.USER_LOGIN,
    JSON.stringify(data)
  );
  if (response.ok) {
    const result = await response.json();
    localStorage.setItem("token", result.accessToken);
    alert("로그인이 완료되었습니다.");
    navigate("/");
  } else {
    alert("이메일 또는 비밀번호가 일치하지 않습니다.");
  }
};
