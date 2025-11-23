import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); // submit 했을 때 새로고침 방지
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;

// const food = [1,2,3,4];
// [6, ...food]

// 여기서 ...는 자바스크립트의 스프레드 연산자입니다. 이 연산자는 배열과 같은 반복 가능한 객체를 가져와 그 요소들을 개별 요소로 펼칩니다.

// 따라서 [6, ...food]는 다음을 의미합니다:

// 6을 첫 번째 요소로 사용하고
// food 배열의 모든 요소(1,2,3,4)를 펼쳐서 뒤에 붙입니다
// 결과는 새로운 배열이 됩니다: [6, 1, 2, 3, 4]

// 원래 food 배열은 [1, 2, 3, 4]로 변경되지 않고 유지되며, 이 표현식은 6이 food의 모든 요소 앞에 추가된 새로운 배열을 생성합니다.

// const fruitOne = ['apple', 'banana'];
// const fruitTwo = ['grape', 'peach'];

// // 기존 방법
// const fruitAll = fruitOne.concat(fruitTwo);

// console.log(fruitAll); // ['apple', 'banana', 'grape', 'peach']

// // ES6 spread 연산사 활용 방법
// const fruitAll = [...fruitOne, ...fruitTwo];

// console.log(fruitAll); // ['apple', 'banana', 'grape', 'peach']

// 다른 예제
// const result = [0, ...food, 6]; // [0, 1, 2, 3, 4, 6]
