import {useParams, Link} from "react-router-dom"

const Test: React.FunctionComponent = (props) => {
    console.log("Rendering Test")
    const {id} = useParams<"id">()
    console.log(id)
  return (
    <div>
        {[1,2,3,4,5,6].map(num => (<Link key={num} to={`/test/${num}`}>{num}</Link>))}
      <h1>Test</h1>
      <p>{id}</p>
    </div>
  );
};

export default Test;
