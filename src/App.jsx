import "./App.css";
import { Video } from "./components/Video";
import videoExample from "./assets/big_buck_bunny.mp4";
import { Layout } from "./components/Layout";
import { Comments } from "./components/Comments";
function App() {
  return (
    <Layout>
      <Video poster="https://picsum.photos/500" source={videoExample} />
      <Comments />
    </Layout>
  );
}

export default App;
