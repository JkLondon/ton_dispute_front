import { Address } from "@ton/core";
import { useJettonContract } from "../hooks/useJettonContract";
import { useTonConnect } from "../hooks/useTonConnect";
import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Button,
  Ellipsis,
} from "./styled/styled";
import { fromNano } from "@ton/core";

export function Jetton() {
  const {connected, wallet} = useTonConnect()
  const {referees, bank, name, description, bet0, bet1, vote0, vote1, claim0, claim1, claim2, contractAddress, fees, isVoted, outcomes} = useJettonContract()
  console.log(referees)
  const fe = "fees: " + fromNano(fees?.flat || 0) + ", " + fees?.percent + "%";
  const refereeList = referees ? Array.from(referees).map(([key, value]) => (
    <li key={key.toString()}>
      {key.toString()}: {value.address.toString()}
    </li>
  )) : null;
  const outcomeList = outcomes ? Array.from(outcomes).map(([key, value]) => (
    <li key={key.toString()}>
      {key.toString()}: {value.name} За него проголосовало {value.voted.toString()} человек, сумма {fromNano(value.amount)}
    </li>
  )) : null;
  return (
    <Card title="Jetton">
      <FlexBoxCol>
        <h3>Bet</h3>
        <FlexBoxRow>
          Wallet
          <Ellipsis>{ contractAddress ? Address.parse(contractAddress as string).toString() : "Loading..."}</Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>
          Name
          <Ellipsis>{ name ? name : "Loading..."}</Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>
          Description
          <Ellipsis>{ description ? description : "Loading..."}</Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>
          Voted?
          
          <Ellipsis>{ isVoted ? isVoted == true ? "Yes": "No" : "Loading..."}</Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>
          Fees
          <Ellipsis>{ fe ? fe : "Loading..."}</Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>
          Outcomes
          <Ellipsis>{outcomeList}</Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>
          Referees
          <Ellipsis>{refereeList}</Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>
          Balance
          <div>{bank ?? "Loading..."}</div>
        </FlexBoxRow>
        <Button
          disabled={!connected} onClick={bet0}>
          Bet 7.5 TON on Outcome 0
        </Button>
        <Button
          disabled={!connected} onClick={bet1}>
          Bet 7.5 TON on Outcome 1
        </Button>
        <Button
          disabled={!connected} onClick={vote0}>
          Vote on Outcome 0
        </Button>
        <Button
          disabled={!connected} onClick={vote1}>
          Vote on Outcome 1
        </Button>
        <Button
          disabled={!connected} onClick={claim0}>
          claim0
        </Button>
        <Button
          disabled={!connected} onClick={claim1}>
          claim1
        </Button>
        <Button
          disabled={!connected} onClick={claim2}>
          claim2
        </Button>
      </FlexBoxCol>
    </Card>
  );
}
