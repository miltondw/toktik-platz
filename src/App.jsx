import { Video } from "./components/Video";
import { Layout } from "./components/Layout";
import { Comments } from "./components/Comments";
import { CommentsContextProvider } from "./context/CommentsContext";
import videoExample from "./assets/big_buck_bunny.mp4";
import "./App.css";

function App() {
  return (
    <Layout>
      <CommentsContextProvider>
        <Video poster="https://picsum.photos/500" source={videoExample} />
        <Comments />
      </CommentsContextProvider>
    </Layout>
  );
}

export default App;
