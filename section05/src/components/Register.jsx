// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState, useRef } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    //console.log(e.target.name + " : " + e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input ref={inputRef} name="name" type="text" value={input.name} onChange={onChange} placeholder="이름" />
      </div>
      <div>
        <input type="date" name="birth" value={input.birth} onChange={onChange} />
      </div>
      <div>
        <select onChange={onChange} value={input.country} name="country">
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="en">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea onChange={onChange} value={input.bio} name="bio"></textarea>
      </div>
      <button type="submit" onClick={onSubmit}>
        제출
      </button>
    </div>
  );
};
export default Register;
