# TACT Compilation Report
Contract: Dispute
BOC Size: 4337 bytes

# Types
Total Types: 20

## StateInit
TLB: `_ code:^cell data:^cell = StateInit`
Signature: `StateInit{code:^cell,data:^cell}`

## Context
TLB: `_ bounced:bool sender:address value:int257 raw:^slice = Context`
Signature: `Context{bounced:bool,sender:address,value:int257,raw:^slice}`

## SendParameters
TLB: `_ bounce:bool to:address value:int257 mode:int257 body:Maybe ^cell code:Maybe ^cell data:Maybe ^cell = SendParameters`
Signature: `SendParameters{bounce:bool,to:address,value:int257,mode:int257,body:Maybe ^cell,code:Maybe ^cell,data:Maybe ^cell}`

## Deploy
TLB: `deploy#946a98b6 queryId:uint64 = Deploy`
Signature: `Deploy{queryId:uint64}`

## DeployOk
TLB: `deploy_ok#aff90f57 queryId:uint64 = DeployOk`
Signature: `DeployOk{queryId:uint64}`

## FactoryDeploy
TLB: `factory_deploy#6d0ff13b queryId:uint64 cashback:address = FactoryDeploy`
Signature: `FactoryDeploy{queryId:uint64,cashback:address}`

## InternalSetBet
TLB: `internal_set_bet#b535022d outcomeID:uint8 amount:coins playerAddress:address = InternalSetBet`
Signature: `InternalSetBet{outcomeID:uint8,amount:coins,playerAddress:address}`

## WinBetDetails
TLB: `win_bet_details#00e47043 outcomeID:uint8 amount:coins playerAddress:address seqno:uint256 = WinBetDetails`
Signature: `WinBetDetails{outcomeID:uint8,amount:coins,playerAddress:address,seqno:uint256}`

## DrawBetDetails
TLB: `draw_bet_details#3e1a0e0b outcomeID:uint8 amount:coins playerAddress:address seqno:uint256 = DrawBetDetails`
Signature: `DrawBetDetails{outcomeID:uint8,amount:coins,playerAddress:address,seqno:uint256}`

## CloseWinBet
TLB: `close_win_bet#a7d7d195 outcomeID:uint8 = CloseWinBet`
Signature: `CloseWinBet{outcomeID:uint8}`

## CloseDrawBet
TLB: `close_draw_bet#abb083de id:uint8 = CloseDrawBet`
Signature: `CloseDrawBet{id:uint8}`

## Vote
TLB: `vote#81598cb2 outcomeID:uint8 refereeID:uint8 = Vote`
Signature: `Vote{outcomeID:uint8,refereeID:uint8}`

## Claim
TLB: `claim#acefa33d seqno:uint256 = Claim`
Signature: `Claim{seqno:uint256}`

## PlayerBetInit
TLB: `player_bet_init#d29ad959 outcomeID:uint8 = PlayerBetInit`
Signature: `PlayerBetInit{outcomeID:uint8}`

## InitialState
TLB: `initial_state#4487de87 name:^string description:^string duration:uint32 betUntil:uint32 referees:dict<int, ^Referee{address:address,voted:bool}> outcomes:dict<int, ^Outcome{id:uint8,name:^string,voted:uint8,amount:coins}> = InitialState`
Signature: `InitialState{name:^string,description:^string,duration:uint32,betUntil:uint32,referees:dict<int, ^Referee{address:address,voted:bool}>,outcomes:dict<int, ^Outcome{id:uint8,name:^string,voted:uint8,amount:coins}>}`

## Coin
TLB: `_ amount:coins = Coin`
Signature: `Coin{amount:coins}`

## Outcome
TLB: `_ id:uint8 name:^string voted:uint8 amount:coins = Outcome`
Signature: `Outcome{id:uint8,name:^string,voted:uint8,amount:coins}`

## Referee
TLB: `_ address:address voted:bool = Referee`
Signature: `Referee{address:address,voted:bool}`

## Fees
TLB: `_ percent:uint8 flat:coins = Fees`
Signature: `Fees{percent:uint8,flat:coins}`

## TimeSettings
TLB: `_ startedAt:uint32 duration:uint32 = TimeSettings`
Signature: `TimeSettings{startedAt:uint32,duration:uint32}`

# Get Methods
Total Get Methods: 15

## bank

## outcomes

## winnerID

## balance

## getName

## getDescription

## getReferees

## getOutcomes

## getFees

## getIsVoteFinished

## getWinnerOutcomeID

## getBetUntil

## getStartedAt

## getDuration

## getTimeSettings

# Error Codes
2: Stack undeflow
3: Stack overflow
4: Integer overflow
5: Integer out of expected range
6: Invalid opcode
7: Type check error
8: Cell overflow
9: Cell underflow
10: Dictionary error
13: Out of gas error
32: Method ID not found
34: Action is invalid or not supported
37: Not enough TON
38: Not enough extra-currencies
128: Null reference exception
129: Invalid serialization prefix
130: Invalid incoming message
131: Constraints error
132: Access denied
133: Contract stopped
134: Invalid argument
135: Code of a contract was not found
136: Invalid address
137: Masterchain support is not enabled for this contract
5579: vote has ended
37676: only child contract can call this function
46543: betting time has ended
53866: wrong outcomeID
54404: Parent only