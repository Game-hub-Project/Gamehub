import { API_PATH } from "@/constants/index";
import { userInfo, loginInfo } from "@/types";
import callApi from "@/utils/callApi";

export const postUser = async (data: userInfo) => {
  await callApi("POST", API_PATH.USER_SIGNUP, JSON.stringify(data));
};

export const login = async (data: loginInfo) => {
  const response = await callApi(
    "POST",
    API_PATH.USER_LOGIN,
    JSON.stringify(data)
  );
  if (response.ok) {
    const result = await response.json();
    localStorage.setItem("token", result.accessToken);
    alert("로그인이 완료되었습니다.");
    data.navigate("/");
  } else {
    alert("이메일 또는 비밀번호가 일치하지 않습니다.");
  }
};
