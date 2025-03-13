import List from "./components/ListGroup";
import { useEffect, useState } from "react";
import axios from "axios";
import OnLogin from "./components/LoginForm";
function App() {
  // let lists = ["kolar", "Bengaluru", "Mysuru", "KGF", "Srinivaspura"];
  //const listFilter = lists.filter((list) => list === "KGF");
  // console.log(listFilter);

  return (
    <>
      <OnLogin />
    </>
  );
  // const [li, setList] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/customer")
  //     .then((response) => setList(response.data))
  //     .catch((error) => console.error(error));
  // }, []);
  // console.log(li);

  // const handelSelect = (item: String) => {
  //   console.log(item);
  // };
  // return <List items={li} heading={"Names"} onSelectItem={handelSelect} />;
}
export default App;
