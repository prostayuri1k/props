//component2

const Component2 = (props) => {
  return (
    <div>
      <p>{props.arr}</p>
      <p>{props.obj}</p>
      <p>{props.func()}</p>
    </div>
  )
}

export default Component2;