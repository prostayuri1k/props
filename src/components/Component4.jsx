import Component3 from "./Component3";

const Component4 = (props) => {
  return (
    <div>
      <textarea placeholder={props.text}/>
      <Component3 btn="Send" />
    </div>
  )
}

export default Component4;