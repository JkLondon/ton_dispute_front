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
import { useState } from "react";

export function Jetton() {
  const {connected, wallet} = useTonConnect()
  const {referees, bank, name, description, bet, vote, 
    claim, contractAddress, fees, isVoted, outcomes,
  betUntil, startedAt, duration} = useJettonContract()
  const [betOutcomeID, setBetOutcomeID] = useState(0);
  const [voteOutcomeID, setVoteOutcomeID] = useState(0);
  const [voteRefereeID, setVoteRefereeID] = useState(0);
  const [claimBetID, setClaimBetID] = useState(0);

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

  const handleBet = () => {
    bet(BigInt(betOutcomeID))
  }

  const handleClaim = () => {
    claim(BigInt(claimBetID))
  }

  const handleVote = () => {
    vote(BigInt(voteOutcomeID), BigInt(voteRefereeID))
  }

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
          Started at
          <Ellipsis>{ startedAt ? UnixTimeToDateString(startedAt) : "Loading..."}</Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>
          Bet until:
          <Ellipsis>{ betUntil ? UnixTimeToDateString(betUntil) : "Loading..."}</Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>
          Duration
          <Ellipsis>{ duration ? unixTimeToDurationString(Number(duration)) : "Loading..."}</Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>
          Balance
          <div>{bank ?? "Loading..."}</div>
        </FlexBoxRow>
        <input 
        type="number"
        value={betOutcomeID} 
        onChange={e => setBetOutcomeID(e.target.valueAsNumber)} 
        />
        <Button
          disabled={!connected} onClick={handleBet}>
          Bet some ton
        </Button>
        <input 
        type="number"
        value={voteOutcomeID} 
        onChange={e => setVoteOutcomeID(e.target.valueAsNumber)} 
        />
        <input 
        type="number"
        value={voteRefereeID} 
        onChange={e => setVoteRefereeID(e.target.valueAsNumber)} 
        />
        <Button
          disabled={!connected} onClick={handleVote}>
          Vote on Outcome (paste your outcomeID and refereeID)
        </Button>
        <input 
        type="number"
        value={claimBetID} 
        onChange={e => setClaimBetID(e.target.valueAsNumber)} 
        />
        <Button
          disabled={!connected} onClick={handleClaim}>
          claim your bet
        </Button>
      </FlexBoxCol>
    </Card>
  );
}


function UnixTimeToDateString(unixTime: bigint) {
  const date = new Date(Number(unixTime) * 1000);
  return date.toString();
}

function unixTimeToDurationString(durationInSeconds: number) {
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = durationInSeconds % 60;

  let durationString = '';
  if (hours > 0) durationString += `${hours} hour${hours > 1 ? 's' : ''}, `;
  if (minutes > 0) durationString += `${minutes} minute${minutes > 1 ? 's' : ''}, `;
  if (seconds > 0) durationString += `${seconds} second${seconds > 1 ? 's' : ''}, `;

  // Remove trailing comma and space
  return durationString.slice(0, -2);
}