import "./App.css";
import { Jetton } from "./components/Jetton";
import { CHAIN, TonConnectButton } from "@tonconnect/ui-react";
import { useTonConnect } from "./hooks/useTonConnect";
import "@twa-dev/sdk"
import {Button} from "@xelene/tgui";
import { RootDisputeView } from "./disputeView/DisputeFragment";
import '@xelene/tgui/dist/styles.css';
import {FlexBoxCol} from "./components/styled/styled";
import {SearchFragment} from "./SearchFragment";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function Header() {
  const {network} = useTonConnect()

  return (
    <div className="flex flex-row gap-8 p-4 ">
      <TonConnectButton/>
      <Button size="l">
        { network
          ? network === CHAIN.MAINNET
            ? "mainnet"
            : "testnet"
          : "N/A"}
      </Button>
    </div>
  )
}

function App() {

  return (
    <div
      className="flex justify-center"
    >
      <div className="justify-start"
        style={{
          maxWidth: "800px",
          width: "100vw"
        }}
      >
      <Header />
      <BrowserRouter>

        <Routes>
          <Route path="/ton_dispute_front" element={<SearchFragment/>} />
          <Route path="ton_dispute_front/bet" element={<RootDisputeView />} />
        </Routes>
      </BrowserRouter>
      </div>


    </div>

  );
}

export default App;
