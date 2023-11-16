import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HeaderIndex from "./component/Header/headerIndex.js";
import Categories from "./component/Categories/Categories.js";
import Movies from "./component/Movies/movies.js";
import More from "./component/MoreDetails/moreDetails.js";
import SeeMore from "./component/SeeMore/seeMore";
import MovieDetail from "./component/MovieDetails/movieDetail.js";

function App() {
  return (
    <>
      <Router>
        {/* <Route path="/HeaderIndex" Component={HeaderIndex} /> */}
        <Routes>
          <Route path="Clone-VideoStreaming/" exact Component={HeaderIndex} />
          <Route path="/Categories" exact Component={Categories} />
          <Route path="/Movies" exact Component={Movies} />
          <Route path="/More" exact Component={More} />
          <Route path="/SeeMore" exact Component={SeeMore} />
          <Route path="/MovieDetail" exact Component={MovieDetail} />
        </Routes>
      </Router>
      {/* <HeaderIndex /> */}
      {/* <Categories /> */}
      {/* <Movies /> */}
      {/* <More /> */}
      {/* {<SeeMore />} */}
      {/* <MovieDetail /> */}
    </>
  );
}

export default App;
