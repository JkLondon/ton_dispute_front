import "./App.css";
import { Jetton } from "./components/Jetton";
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import { CHAIN, TonConnectButton } from "@tonconnect/ui-react";
import { useTonConnect } from "./hooks/useTonConnect";
import "@twa-dev/sdk"

function Header() {
  const {network} = useTonConnect()

  return (
    <div>
      <FlexBoxRow>
        <TonConnectButton/>
        <Button>
          {network
            ? network === CHAIN.MAINNET
              ? "mainnet"
              : "testnet"
            : "N/A"}
        </Button>
      </FlexBoxRow>
    </div>
  )
}

function App() {

  return (
      <div className="max-w-800px bg-gray-100">
        <FlexBoxCol>
          <Header />
          <Jetton />
        </FlexBoxCol>
      </div>
  );
}

export default App;
