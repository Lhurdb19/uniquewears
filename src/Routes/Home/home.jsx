import React, { useState } from "react";
import "./Home.css";
import AutoType from "../../Typewriter/autoType";
import Clothesjson from "../../Employee/menclothesjson";
import Womenclothesjson from "../../Employee/womenclothesjson";
import Bag from "../../Employee/bag";
import Babyclothesjson from "../../Employee/babyclothesjson";
import Menshoejson from "../../Employee/Menshoejson";
import Womenshoejson from "../../Employee/Womenshoejson";
import Wristwatchjson from "../../Employee/Wristwatchjson";


export default function Home() {
  const [python, setPython] = useState(true);
  const [sql, setSql] = useState(false);
  const [java, setJava] = useState(false);
  const [julia, setJulia] = useState(false);
  const [javascript, setJavascript] = useState(false);
  const [ccc, setCcc] = useState(false);
  const [swift, setSwift] = useState(false);
  const [isR, setIsR] = useState(false);

  const handlePython = () => {
    setPython(true);
    setSql(false);
    setJava(false);
    setJulia(false);
    setJavascript(false);
    setCcc(false);
    setSwift(false);
    setIsR(false);
  };

  const handleSql = () => {
    setPython(false);
    setSql(true);
    setJava(false);
    setJulia(false);
    setJavascript(false);
    setCcc(false);
    setSwift(false);
    setIsR(false);
  };

  const handleJava = () => {
    setPython(false);
    setSql(false);
    setJava(true);
    setJulia(false);
    setJavascript(false);
    setCcc(false);
    setSwift(false);
    setIsR(false);
  };

  const handleJulia = () => {
    setPython(false);
    setSql(false);
    setJava(false);
    setJulia(true);
    setJavascript(false);
    setCcc(false);
    setSwift(false);
    setIsR(false);
  };

  const handleJavascript = () => {
    setPython(false);
    setSql(false);
    setJava(false);
    setJulia(false);
    setJavascript(true);
    setCcc(false);
    setSwift(false);
    setIsR(false);
  };

  const handleCcc = () => {
    setPython(false);
    setSql(false);
    setJava(false);
    setJulia(false);
    setJavascript(false);
    setCcc(true);
    setSwift(false);
    setIsR(false);
  };

  const handleSwift = () => {
    setPython(false);
    setSql(false);
    setJava(false);
    setJulia(false);
    setJavascript(false);
    setCcc(false);
    setSwift(true);
    setIsR(false);
  };

  const handleIsR = () => {
    setPython(false);
    setSql(false);
    setJava(false);
    setJulia(false);
    setJavascript(false);
    setCcc(false);
    setSwift(false);
    setIsR(true);
  };


  return (
    <div className="home-container">
      <div className="autotype">
        <AutoType />
        <div className="dropping-dot">
          <p></p>
        </div>
      </div>

      <div className="modal">
        <div className="switch">
          <button onClick={handlePython}>MEN'S CLOTHES</button>
          <button onClick={handleSql}>WOMEN'S CLOTHES</button>
          <button onClick={handleJava}>LADIES BAG</button>
          <button onClick={handleJulia}>BABY'S CLOTHES</button>
          <button onClick={handleJavascript}>MEN'S SHOE</button>
          <button onClick={handleCcc}>WOMEN SHOE</button>
          <button onClick={handleSwift}>JEWELRIES</button>
          <button onClick={handleIsR}>R</button>
        </div>

        <div className="switch-info">
        {python && (
          <div className="python-info">
            <h2>MEN'S CLOTHES</h2>
            <Clothesjson/>
          </div>
        )}

        {sql && (
          <div className="sql-info">
            <h2>WOMEN'S CLOTHES</h2>
            <Womenclothesjson/>
          </div>
        )}

        {java && (
          <div className="java-info">
            <h2>LADIES BAGS</h2>
            <Bag/>
          </div>
        )}

        {julia && (
          <div className="julia-info">
            <h2>BABY'S CLOTHES</h2>
            <Babyclothesjson/>
          </div>
        )}

        {javascript && (
          <div className="javascript-info">
            <h2>MEN'S SHOES</h2>
            <Menshoejson/>
          </div>
        )}

        {ccc && (
          <div className="ccc-info">
            <h2>WOMEN'S SHOES</h2>
            <Womenshoejson/>
          </div>
        )}

        {swift && (
          <div className="swift-info">
            <h2>JEWELRIES</h2>
            <Wristwatchjson/>
          </div>
        )}

        {isR && (
          <div className="r-info">
            
          </div>
        )}

        </div>
      </div>

    </div>
  );
}
