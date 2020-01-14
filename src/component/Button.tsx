import React from "react";

type ButtonProps = {
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
};

function Button({ onClick }: ButtonProps) {
  return <button onClick={onClick}>Todo 추가하기</button>;
}

export default Button;
