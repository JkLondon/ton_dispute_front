# TACT Compilation Report
Contract: PlayerBet
BOC Size: 1261 bytes

# Types
Total Types: 11

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

# Get Methods
Total Get Methods: 1

## details

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
54404: Parent only
59700: Already payed