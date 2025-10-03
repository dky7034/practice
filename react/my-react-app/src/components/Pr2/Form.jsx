import React from "react";

export default function Form() {
  // 함수 선언부
  function handleChange(e) {
    console.log(`입력 이벤트 발생, 입력 값: ${e.target.value}`);
  }
  function handleSubmit(e) {
    // 폼 제출 방지
    e.preventDefault();
    const { email, password, name } = e.target.value;
    console.log(`이름 입력 값: ${name.value}`);
    console.log(`이메일 입력 값: ${email.value}`);
    console.log(`비밀번호 입력 값: ${password.value}`);
  }

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">회원가입</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="이름"
          className="w-full p-2 mb-3 border"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="이메일"
          className="w-full p-2 mb-3 border"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          className="w-full p-2 mb-3 border"
          onChange={handleChange}
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white">
          제출
        </button>
      </form>
    </div>
  );
}
