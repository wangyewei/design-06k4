import React from "react"
interface IHelloProps {
  message?: string;
}
const Hello: React.FC<IHelloProps> = (props) => {
  return <h2>{props.message}</h2>
}
Hello.defaultProps = {
  message: 'hello, world'
}

export default Hello