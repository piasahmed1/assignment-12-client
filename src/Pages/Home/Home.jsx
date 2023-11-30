import { useContext } from "react";
import Banner1 from "./Banner1";
import Footer from "./Footer/Footer";
import { AuthContext } from "../../providers/AuthProvider";
import Category from "./Category/Category";

const Home = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo)
  return (
    <div>
      <Banner1></Banner1>
      <Category></Category>
      <Footer></Footer>
    </div>
  );
};

export default Home;