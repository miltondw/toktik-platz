import { Comments } from "../../components/Comments";
import { Video } from "../../components/Video";
import { CommentsContextProvider } from "../../context/CommentsContext";
import videoExample from "../../assets/big_buck_bunny.mp4";
import { Layout } from "../../components/Layout";
export const Home = () => {
  return (
    <Layout>
      <CommentsContextProvider>
        <Video poster="https://picsum.photos/500" source={videoExample} />
        <Comments />
      </CommentsContextProvider>
    </Layout>
  );
};
