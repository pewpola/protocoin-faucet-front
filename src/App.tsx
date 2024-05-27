import { useState } from "react";
import mint from "./services/Web3Service";
import ReCAPTCHA from "react-google-recaptcha";

const App = () => {

  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState("");

  const onButtonClick = () => {
    if (captcha) {
      setMessage("Requesting your tokens...");
      mint()
        .then((tx) => setMessage(`Your tokens were sent to ${localStorage.getItem("wallet")}. Tx: ${tx}`))
        .catch(err => setMessage(err.response ? err.response.data : err.msg));
      setCaptcha("");  
    } else {
      setMessage("Resolve the captcha first.")
    }
  }

  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0">ProtoCoin Faucet</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <a className="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">Home</a>
            <a className="nav-link fw-bold py-1 px-0" href="#">About</a>
          </nav>
        </div>
      </header>

      <main className="px-3">
        <h1>Get your ProtoCoins</h1>
        <p className="lead">Once a day, earn 7 coins just connecting your MetaMask below.</p>
        <p className="lead">
          <a href="#" onClick={() => onButtonClick()} className="btn btn-lg btn-secondary fw-bold border-white bg-white">
            <img src="/assets/MetaMask_fox.svg.png" alt="metamask logo" width={42}/>
            Get my tokens
          </a>
        </p>
        <div style={{ display: "inline-flex" }}>
          <ReCAPTCHA sitekey={`${process.env.REACT_APP_RECAPTCHA_KEY}`} onChange={ value => setCaptcha(value || "")}/>
        </div>
        <p className="lead">
          {message}
        </p>
      </main>

      <footer className="mt-auto text-white-50">
        <p>Built by pewpola</p>
      </footer>
    </div>
  );
}

export default App;
