import "./App.css";
import { Jetton } from "./components/Jetton";
import { CHAIN, TonConnectButton } from "@tonconnect/ui-react";
import { useTonConnect } from "./hooks/useTonConnect";
import "@twa-dev/sdk"
import {Button} from "@xelene/tgui";
import {DisputeFragment} from "./DisputeFragment";
import '@xelene/tgui/dist/styles.css';
import {FlexBoxCol} from "./components/styled/styled";
import {SearchFragment} from "./SearchFragment";

function Header() {
  const {network} = useTonConnect()

  return (
    <div>
      <div className="flex flex-row, gap-8">
        <TonConnectButton/>
        <Button mode="gray" size="l">
          { network
            ? network === CHAIN.MAINNET
              ? "mainnet"
              : "testnet"
            : "N/A"}
        </Button>
      </div>
    </div>
  )
}

function App() {

  return (
      <div className="max-w-600px bg-gray-100">
        <FlexBoxCol>
          <Header />
          {/*<SearchFragment/>*/}
          <DisputeFragment />
          {/*<Jetton />*/}
        </FlexBoxCol>
      </div>
  );
}

export default App;
