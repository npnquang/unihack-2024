import {useEffect} from "react";
const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}