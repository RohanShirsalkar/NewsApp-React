import './App.css';
import MainContainer from './components/MainContainer';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <>
      <Router >

        <Navbar />
        {/* <MainContainer category={"science"} pageSize={12}/>      */}

        <Routes >
          <Route path="/" element={<MainContainer key={"general"} category={"general"} pageSize={12} />}></Route>
          <Route path="/sports" element={<MainContainer key={"sports"} category={"sports"} pageSize={12} />}></Route>
          <Route path="/business" element={<MainContainer key={"business"} category={"business"} pageSize={12} />}></Route>
          <Route path="/entertainment" element={<MainContainer key={"entertainment"} category={"entertainment"} pageSize={12} />}></Route>
          <Route path="/health" element={<MainContainer key={"health"} category={"health"} pageSize={12} />}></Route>
          <Route path="/science" element={<MainContainer key={"science"} category={"science"} pageSize={12} />}></Route>
          <Route path="/technology" element={<MainContainer key={"technology"} category={"technology"} pageSize={12} />}></Route>
          <Route path="/search" element={<MainContainer key={"search"} category={"search"} pageSize={12} />}></Route>
        </Routes>

      </Router>

    </>
  );
}

export default App;

{/* <MainContainer newsArray={newsArray} handlePageClick={handlePageClick} pageCount={pageCount} lastPage={totalResults / 12} isLoading={isLoading} /> */ }


{/* <Routes>
<Route path="/about" element={<About />}>
</Route>
<Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
</Route>
</Routes> */}