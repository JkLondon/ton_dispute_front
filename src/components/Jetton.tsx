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
import { TGButton } from "./TGButton";
import {ButtonGrid} from "./ButtonGrid";
import {TextBlock} from "./TextBlock";
import {Label} from "./Label";
import InputWithButton from "./InputWithButton";

export function InformationBlock() {
  const {connected, wallet} = useTonConnect()
  const {referees, bank, name, description, bet, vote, claim, contractAddress, fees, isVoted, outcomes} = useJettonContract()
  const [betOutcomeID, setBetOutcomeID] = useState(0);
  const [voteOutcomeID, setVoteOutcomeID] = useState(0);
  const [voteRefereeID, setVoteRefereeID] = useState(0);
  const [claimBetID, setClaimBetID] = useState(0);

  return (
    <FlexBoxCol className="gap-2">
      <Label text="Wallet">
        <TextBlock>
          <p>{ contractAddress ? Address.parse(contractAddress as string).toString() : "Loading..."}</p>
        </TextBlock>
      </Label>

      <Label text="Name">
        <TextBlock>
          <p>{ name }</p>
        </TextBlock>
      </Label>

      <Label text="Description">
        <TextBlock>
          <p>{ description }</p>
        </TextBlock>
      </Label>

      <InputWithButton/>
    </FlexBoxCol>
  )
}

export function BalanceActionsBlock() {
  return (
    <FlexBoxCol className="gap-4">
      <InputWithButton/>
      <ButtonGrid count={4}>
        <TGButton inversed={true}> +1 </TGButton>
        <TGButton inversed={true}> +5 </TGButton>
        <TGButton inversed={true}> +10 </TGButton>
        <TGButton inversed={true}> +20 </TGButton>
      </ButtonGrid>
      <TGButton inversed={true}> Done </TGButton>
    </FlexBoxCol>
  )
}

export function ActionsBlock() {
  return (
    <ButtonGrid count={2}>
      <TGButton> Done </TGButton>
      <TGButton> Done </TGButton>
    </ButtonGrid>
  )
}

export function Jetton() {
  const {connected, wallet} = useTonConnect()
  const {referees, bank, name, description, bet, vote, claim, contractAddress, fees, isVoted, outcomes} = useJettonContract()
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
        <InformationBlock></InformationBlock>
        <ActionsBlock></ActionsBlock>
        <BalanceActionsBlock/>
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
        <ButtonGrid count={2}>
          <TGButton> Done </TGButton>
          <TGButton> Done </TGButton>
          <Label text={"Blue da bu di"}>
            <TextBlock> Some text </TextBlock>
          </Label>
        </ButtonGrid>
      </FlexBoxCol>
    </Card>
  );
}
