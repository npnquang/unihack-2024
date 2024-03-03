import NavBar from "../components/navbar/NavBar";
import Search from "../components/searchdiv/Search";
import Games from "../components/gamediv/Games";
import Footer from "../components/footer/Footer";
import Value from "../components/value/Value";
export default function Home() {
  return (
    <div className="w-[100%]  m-auto bg-slate-50">
      <NavBar />
      <Search />
      <Games/>
      <Value />
      <Footer />
    </div>
  );
}

