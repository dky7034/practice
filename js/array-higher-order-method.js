// TODO
const animals = [
  "자",
  "축",
  "인",
  "묘",
  "진",
  "사",
  "오",
  "미",
  "신",
  "유",
  "술",
  "해",
];
// 변수 animals에 저장된 각 동물 이름을 한 줄씩 출력한다
animals.forEach((element) => {
  console.log(element);
});
/* 출력 결과
자
축
인
묘
진
사
오
미
신
유
술
해
*/
console.log("=======================================");
// TODO
const fruits = ["사과", "바나나", "오렌지"];
// 변수 fruits에 저장된 각 과일 이름을 "맛있는 [과일명]" 형식으로 출력한다
// 출력 결과는 배열 형식으로 출력한다
fruits.forEach((element) => {
  console.log("맛있는 " + element);
});
/* 출력 결과
맛있는 사과
맛있는 바나나
맛있는 오렌지
*/
console.log("=======================================");
// TODO
const numbers1 = [10, 20, 30, 40];
// 변수 numbers1에 저장된 각 숫자와 인덱스를 "인덱스: 숫자" 형식으로 출력한다
numbers1.forEach((element, idx) => {
  console.log(`${idx}: ${element}`);
});
/* 출력 결과
0: 10
1: 20
2: 30
3: 40
*/
console.log("=======================================");
// TODO
const numbers2 = [1, 2, 3, 4, 5];
// 변수 numbers2에 저장된 각 숫자를 제곱한 데이터를 모아서 새로운 배열을 만든다
// 새로운 배열을 출력한다
const newNumbers2 = numbers2.map((element) => {
  return element ** 2;
});
console.log(newNumbers2);
/* 출력 결과
[1, 4, 9, 16, 25]
*/
console.log("=======================================");
// TODO
const names = ["김철수", "이영희", "박민수"];
// 변수 names에 저장된 각 이름에 "님"을 붙인 새로운 배열을 만든다
// 새로운 배열을 출력한다
const newNames = names.map((element) => {
  return element + "님";
});
console.log(newNames);
/* 출력 결과
["김철수님", "이영희님", "박민수님"]
*/
console.log("=======================================");
// TODO
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 변수 numbers3에 저장된 각 숫자 중 짝수만 필터링한 새로운 배열을 만든다.
// 새로운 배열을 출력한다
const newNumbers3 = numbers3.filter((element) => {
  if (element % 2 === 0) {
    return true;
  }
});
console.log(newNumbers3);
/* 출력 결과
[2, 4, 6, 8, 10]
*/
console.log("=======================================");
// TODO
const people1 = [
  { name: "김철수", age: 25 },
  { name: "이영희", age: 30 },
  { name: "박민수", age: 18 },
];
// 변수 people1에 저장된 각 사람 중 나이(age)가 20세 이상인 사람만 필터링한 새로운 배열을 만든다
// 새로운 배열을 출력한다
const newPeople1 = people1.filter((element) => {
  if (element["age"] >= 20) {
    return true;
  }
});
console.log(newPeople1);
/* 출력 결과
[{name: "김철수", age: 25}, {name: "이영희", age: 30}]
*/
console.log("=======================================");
// TODO
const numbers4 = [1, 2, 3, 4, 5];
// 변수 numbers4에 저장된 각 숫자의 합을 계산한다
// 합을 출력한다
const sumNumbers4 = numbers4.reduce((acc, number, idx) => {
  return acc + numbers4[idx];
}, 0);
console.log(sumNumbers4);
/* 출력 결과
15
*/
console.log("=======================================");
// TODO
const people2 = [
  { id: 1, name: "김철수" },
  { id: 2, name: "이영희" },
  { id: 3, name: "박민수" },
];
// 변수 people2에 저장된 각 객체 중 id가 2인 객체를 찾는다
// 찾은 객체를 출력한다
const findPeople2 = people2.find((element) => {
  if (element["id"] === 2) {
    return true;
  }
});

const findPeople2ByFilter = people2.filter((element) => {
  if (element["id"] === 2) {
    return true;
  }
});
console.log(findPeople2); // 객체 리턴
console.log(findPeople2ByFilter); // 배열 리턴
/* 출력 결과
{id: 2, name: "이영희"}
*/
console.log("=======================================");
// TODO
const products = [
  { name: "노트북", price: 1200000, category: "전자제품" },
  { name: "마우스", price: 25000, category: "전자제품" },
  { name: "책상", price: 150000, category: "가구" },
  { name: "키보드", price: 80000, category: "전자제품" },
  { name: "의자", price: 200000, category: "가구" },
];
// 변수 products에 저장된 상품 중 전자제품 카테고리(category)만 필터링한 새로운 배열을 만든다
// 필터링한 새로운 배열을 출력한다
// 각 상품의 이름(name)과 가격(price)을 "상품명: 가격원" 형식으로 변환한 새로운 배열을 만든다
// 변환한 새로운 배열을 출력한다
const productsFilterdByCategory = products.filter((element) => {
  if (element["category"] === "전자제품") {
    return true;
  }
});
console.log(productsFilterdByCategory);
const productsArray = [];
productsFilterdByCategory.map((element) => {
  productsArray.push(element["name"]);
  productsArray.push(element["price"] + "원");
});
console.log(productsArray);
/* 출력 결과
[
  { name: "노트북", price: 1200000, category: "전자제품" },
  { name: "마우스", price: 25000, category: "전자제품" },
  { name: "키보드", price: 80000, category: "전자제품" },
]
["노트북: 1200000원", "마우스: 25000원", "키보드: 80000원"]
*/
console.log("=======================================");
// TODO
const students = [
  { name: "김철수", score: 85, grade: "A" },
  { name: "이영희", score: 92, grade: "A" },
  { name: "박민수", score: 78, grade: "B" },
  { name: "최지영", score: 88, grade: "A" },
  { name: "정수현", score: 65, grade: "C" },
];
// 변수 students에 저장된 학생 중 점수(score)가 70점 이상인 학생만 필터링한 새로운 배열을 만든다
// 필터링한 새로운 배열을 출력한다
// 각 학생의 이름(name)과 등급(grade)을 "이름(등급)" 형식으로 변환한 새로운 배열을 만든다
// 변환한 새로운 배열을 출력한다
const studentsFilterdByScore = students.filter((element) => {
  if (element["score"] >= 70) {
    return true;
  }
});
console.log(studentsFilterdByScore);
const studetnsArray = [];
studentsFilterdByScore.map((element) => {
  studetnsArray.push(element["name"] + "(" + `${element["grade"]}` + ")");
});
console.log(studetnsArray);
/* 출력 결과
["김철수(A)", "이영희(A)", "박민수(B)", "최지영(A)"]
*/
