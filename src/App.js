import Header from "./components/Header";
import Notes from "./components/Notes";
import SearchArea from "./components/SearchArea";
import Textarea from "./components/Textarea";
import { Row, Col } from "antd";
function App() {
  return (

    <Row>
      <Col span={20} offset={2}>
        <Header />
        <SearchArea />
        <br/><br/>
        <Textarea/>
        <Notes />
      </Col>
    </Row>

  );
}

export default App;
