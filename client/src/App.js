import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import ListPosts from "./components/ListPosts";
import Navbar from "./components/Navbar";
import Home from "./pages/PostList";
import SectionList from "./pages/SectionList";
import SliderWrapper from "./wrappers/SliderWrapper";
import PostList from "./pages/PostList";

function App() {
  const [dark, setDark] = useState(false);
  const [update, setUpdate] = useState(false);
  const [slider, setSlider] = useState(false);
  const [type, setType] = useState("");

  return (
    <div
      className={
        dark
          ? "bg-slate-700 transition"
          : "bg-slate-100 text-gray-700 transition"
      }
    >
      <Navbar
        dark={dark}
        setDark={setDark}
        setSlider={setSlider}
        slider={slider}
        setType={setType}
      />
      <SliderWrapper
        slider={slider}
        setSlider={setSlider}
        type={type}
        dark={dark}
      />
      <Switch>
        <Route exact path="/">
          <SectionList
            dark={dark}
            setDark={setDark}
            update={update}
            setUpdate={setUpdate}
          />
        </Route>
        <Route exact path="/home">
          <Home
            dark={dark}
            setDark={setDark}
            update={update}
            setUpdate={setUpdate}
          />
        </Route>
        <Route path="/s/">
          <PostList dark={dark} setUpdate={setUpdate} update={update} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
