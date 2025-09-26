import React from "react";

export default function UserCard() {
  const userDate = {
    name: "김철수",
    age: 28,
    email: "kimcs@example.com",
    profileImage: "https://picsum.photos/id/237/200/300",
  };
  // 구조 분해 할당
  const { name, age, email, profileImage } = userDate;

  return (
    <div className="w-80 bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-center mb-4">
          <img
            className="w-24 h-24 rounded-full object-cover"
            src={profileImage}
            alt={"사용자 프로필"}
          />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{name}</h2>
          <p className="text-gray-600 mb-1">{age}</p>
          <p className="text-blue-600 font-medium">{email}</p>
        </div>
      </div>
    </div>
  );
}
