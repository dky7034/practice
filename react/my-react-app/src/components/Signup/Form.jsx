import React from "react";
import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log("name: " + name, "value: " + value);
    setForm((prev) => ({ ...prev, [name]: value }));
    console.log(form);

    // 실시간 비밀번호 검증
    if (name === "password") {
      if (value.length > 0 && value.length < 8) {
        setErrors((prev) => ({
          ...prev,
          password: "비밀번호는 8글자 이상이어야 합니다.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, password: "" }));
      }
    }

    // 실시간 비밀번호 확인 검증
    if (name === "confirmPassword") {
      if (value.length > 0 && value !== form.password) {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: "비밀번호가 일치하지 않습니다",
        }));
      } else {
        setErrors((prev) => ({ ...prev, confirmPassword: "" }));
      }
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    // 에러 초기화
    const newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    // 이메일 검증
    if (form.email === "") {
      newErrors.email = "이메일을 입력해주세요";
    }

    // 비밀번호 검증
    if (form.password === "") {
      newErrors.password = "비밀번호를 입력해주세요";
    } else if (form.password.length < 8) {
      newErrors.password = "비밀번호는 8글자 이상이어야 합니다.";
    }

    // 비밀번호 확인 검증
    if (form.confirmPassword === "") {
      newErrors.confirmPassword = "비밀번호 확인을 입력해주세요";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다";
    }

    setErrors(newErrors);

    // 에러가 없으면 성공
    if (!newErrors.email && !newErrors.password && !newErrors.confirmPassword) {
      console.log("회원가입 성공:", form);
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          회원가입
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              이메일
              <input
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                name="email"
                type="email"
                placeholder="example@email.com"
                value={form.email}
                onChange={handleChange}
              />
              <div className="text-red-500 text-sm mt-1">{errors.email}</div>
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              비밀번호
              <input
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                name="password"
                type="password"
                placeholder="8자 이상 입력해주세요"
                value={form.password}
                onChange={handleChange}
              />
              <div className="text-red-500 text-sm mt-1">{errors.password}</div>
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              비밀번호 확인
              <input
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                name="confirmPassword"
                type="password"
                placeholder="비밀번호를 다시 입력해주세요"
                value={form.confirmPassword}
                onChange={handleChange}
              />
              <div className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </div>
            </label>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}
