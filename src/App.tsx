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
      style={{
        maxWidth: '800px',
        height: '100%'
      }}
    >
        <Header />
        {/*<SearchFragment/>*/}
        <RootDisputeView />
    </div>

  );
}

export default App;
