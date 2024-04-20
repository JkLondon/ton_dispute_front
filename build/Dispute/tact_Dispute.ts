import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type InternalSetBet = {
    $$type: 'InternalSetBet';
    outcomeID: bigint;
    amount: bigint;
    playerAddress: Address;
}

export function storeInternalSetBet(src: InternalSetBet) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3040150061, 32);
        b_0.storeUint(src.outcomeID, 8);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.playerAddress);
    };
}

export function loadInternalSetBet(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3040150061) { throw Error('Invalid prefix'); }
    let _outcomeID = sc_0.loadUintBig(8);
    let _amount = sc_0.loadCoins();
    let _playerAddress = sc_0.loadAddress();
    return { $$type: 'InternalSetBet' as const, outcomeID: _outcomeID, amount: _amount, playerAddress: _playerAddress };
}

function loadTupleInternalSetBet(source: TupleReader) {
    let _outcomeID = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _playerAddress = source.readAddress();
    return { $$type: 'InternalSetBet' as const, outcomeID: _outcomeID, amount: _amount, playerAddress: _playerAddress };
}

function storeTupleInternalSetBet(source: InternalSetBet) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.outcomeID);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.playerAddress);
    return builder.build();
}

function dictValueParserInternalSetBet(): DictionaryValue<InternalSetBet> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeInternalSetBet(src)).endCell());
        },
        parse: (src) => {
            return loadInternalSetBet(src.loadRef().beginParse());
        }
    }
}

export type WinBetDetails = {
    $$type: 'WinBetDetails';
    outcomeID: bigint;
    amount: bigint;
    playerAddress: Address;
    seqno: bigint;
}

export function storeWinBetDetails(src: WinBetDetails) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(14970947, 32);
        b_0.storeUint(src.outcomeID, 8);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.playerAddress);
        b_0.storeUint(src.seqno, 256);
    };
}

export function loadWinBetDetails(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 14970947) { throw Error('Invalid prefix'); }
    let _outcomeID = sc_0.loadUintBig(8);
    let _amount = sc_0.loadCoins();
    let _playerAddress = sc_0.loadAddress();
    let _seqno = sc_0.loadUintBig(256);
    return { $$type: 'WinBetDetails' as const, outcomeID: _outcomeID, amount: _amount, playerAddress: _playerAddress, seqno: _seqno };
}

function loadTupleWinBetDetails(source: TupleReader) {
    let _outcomeID = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _playerAddress = source.readAddress();
    let _seqno = source.readBigNumber();
    return { $$type: 'WinBetDetails' as const, outcomeID: _outcomeID, amount: _amount, playerAddress: _playerAddress, seqno: _seqno };
}

function storeTupleWinBetDetails(source: WinBetDetails) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.outcomeID);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.playerAddress);
    builder.writeNumber(source.seqno);
    return builder.build();
}

function dictValueParserWinBetDetails(): DictionaryValue<WinBetDetails> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeWinBetDetails(src)).endCell());
        },
        parse: (src) => {
            return loadWinBetDetails(src.loadRef().beginParse());
        }
    }
}

export type DrawBetDetails = {
    $$type: 'DrawBetDetails';
    outcomeID: bigint;
    amount: bigint;
    playerAddress: Address;
    seqno: bigint;
}

export function storeDrawBetDetails(src: DrawBetDetails) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1041894923, 32);
        b_0.storeUint(src.outcomeID, 8);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.playerAddress);
        b_0.storeUint(src.seqno, 256);
    };
}

export function loadDrawBetDetails(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1041894923) { throw Error('Invalid prefix'); }
    let _outcomeID = sc_0.loadUintBig(8);
    let _amount = sc_0.loadCoins();
    let _playerAddress = sc_0.loadAddress();
    let _seqno = sc_0.loadUintBig(256);
    return { $$type: 'DrawBetDetails' as const, outcomeID: _outcomeID, amount: _amount, playerAddress: _playerAddress, seqno: _seqno };
}

function loadTupleDrawBetDetails(source: TupleReader) {
    let _outcomeID = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _playerAddress = source.readAddress();
    let _seqno = source.readBigNumber();
    return { $$type: 'DrawBetDetails' as const, outcomeID: _outcomeID, amount: _amount, playerAddress: _playerAddress, seqno: _seqno };
}

function storeTupleDrawBetDetails(source: DrawBetDetails) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.outcomeID);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.playerAddress);
    builder.writeNumber(source.seqno);
    return builder.build();
}

function dictValueParserDrawBetDetails(): DictionaryValue<DrawBetDetails> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDrawBetDetails(src)).endCell());
        },
        parse: (src) => {
            return loadDrawBetDetails(src.loadRef().beginParse());
        }
    }
}

export type CloseWinBet = {
    $$type: 'CloseWinBet';
    outcomeID: bigint;
}

export function storeCloseWinBet(src: CloseWinBet) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2815938965, 32);
        b_0.storeUint(src.outcomeID, 8);
    };
}

export function loadCloseWinBet(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2815938965) { throw Error('Invalid prefix'); }
    let _outcomeID = sc_0.loadUintBig(8);
    return { $$type: 'CloseWinBet' as const, outcomeID: _outcomeID };
}

function loadTupleCloseWinBet(source: TupleReader) {
    let _outcomeID = source.readBigNumber();
    return { $$type: 'CloseWinBet' as const, outcomeID: _outcomeID };
}

function storeTupleCloseWinBet(source: CloseWinBet) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.outcomeID);
    return builder.build();
}

function dictValueParserCloseWinBet(): DictionaryValue<CloseWinBet> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeCloseWinBet(src)).endCell());
        },
        parse: (src) => {
            return loadCloseWinBet(src.loadRef().beginParse());
        }
    }
}

export type CloseDrawBet = {
    $$type: 'CloseDrawBet';
    id: bigint;
}

export function storeCloseDrawBet(src: CloseDrawBet) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2880472030, 32);
        b_0.storeUint(src.id, 8);
    };
}

export function loadCloseDrawBet(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2880472030) { throw Error('Invalid prefix'); }
    let _id = sc_0.loadUintBig(8);
    return { $$type: 'CloseDrawBet' as const, id: _id };
}

function loadTupleCloseDrawBet(source: TupleReader) {
    let _id = source.readBigNumber();
    return { $$type: 'CloseDrawBet' as const, id: _id };
}

function storeTupleCloseDrawBet(source: CloseDrawBet) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.id);
    return builder.build();
}

function dictValueParserCloseDrawBet(): DictionaryValue<CloseDrawBet> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeCloseDrawBet(src)).endCell());
        },
        parse: (src) => {
            return loadCloseDrawBet(src.loadRef().beginParse());
        }
    }
}

export type Vote = {
    $$type: 'Vote';
    outcomeID: bigint;
    refereeID: bigint;
}

export function storeVote(src: Vote) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2170129586, 32);
        b_0.storeUint(src.outcomeID, 8);
        b_0.storeUint(src.refereeID, 8);
    };
}

export function loadVote(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2170129586) { throw Error('Invalid prefix'); }
    let _outcomeID = sc_0.loadUintBig(8);
    let _refereeID = sc_0.loadUintBig(8);
    return { $$type: 'Vote' as const, outcomeID: _outcomeID, refereeID: _refereeID };
}

function loadTupleVote(source: TupleReader) {
    let _outcomeID = source.readBigNumber();
    let _refereeID = source.readBigNumber();
    return { $$type: 'Vote' as const, outcomeID: _outcomeID, refereeID: _refereeID };
}

function storeTupleVote(source: Vote) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.outcomeID);
    builder.writeNumber(source.refereeID);
    return builder.build();
}

function dictValueParserVote(): DictionaryValue<Vote> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeVote(src)).endCell());
        },
        parse: (src) => {
            return loadVote(src.loadRef().beginParse());
        }
    }
}

export type Claim = {
    $$type: 'Claim';
    seqno: bigint;
}

export function storeClaim(src: Claim) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2901386045, 32);
        b_0.storeUint(src.seqno, 256);
    };
}

export function loadClaim(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2901386045) { throw Error('Invalid prefix'); }
    let _seqno = sc_0.loadUintBig(256);
    return { $$type: 'Claim' as const, seqno: _seqno };
}

function loadTupleClaim(source: TupleReader) {
    let _seqno = source.readBigNumber();
    return { $$type: 'Claim' as const, seqno: _seqno };
}

function storeTupleClaim(source: Claim) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.seqno);
    return builder.build();
}

function dictValueParserClaim(): DictionaryValue<Claim> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeClaim(src)).endCell());
        },
        parse: (src) => {
            return loadClaim(src.loadRef().beginParse());
        }
    }
}

export type PlayerBetInit = {
    $$type: 'PlayerBetInit';
    outcomeID: bigint;
}

export function storePlayerBetInit(src: PlayerBetInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3533363545, 32);
        b_0.storeUint(src.outcomeID, 8);
    };
}

export function loadPlayerBetInit(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3533363545) { throw Error('Invalid prefix'); }
    let _outcomeID = sc_0.loadUintBig(8);
    return { $$type: 'PlayerBetInit' as const, outcomeID: _outcomeID };
}

function loadTuplePlayerBetInit(source: TupleReader) {
    let _outcomeID = source.readBigNumber();
    return { $$type: 'PlayerBetInit' as const, outcomeID: _outcomeID };
}

function storeTuplePlayerBetInit(source: PlayerBetInit) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.outcomeID);
    return builder.build();
}

function dictValueParserPlayerBetInit(): DictionaryValue<PlayerBetInit> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storePlayerBetInit(src)).endCell());
        },
        parse: (src) => {
            return loadPlayerBetInit(src.loadRef().beginParse());
        }
    }
}

export type InitialState = {
    $$type: 'InitialState';
    name: string;
    description: string;
    duration: bigint;
    referees: Dictionary<bigint, Referee>;
    outcomes: Dictionary<bigint, Outcome>;
}

export function storeInitialState(src: InitialState) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1129621790, 32);
        b_0.storeStringRefTail(src.name);
        b_0.storeStringRefTail(src.description);
        b_0.storeUint(src.duration, 32);
        b_0.storeDict(src.referees, Dictionary.Keys.BigInt(257), dictValueParserReferee());
        let b_1 = new Builder();
        b_1.storeDict(src.outcomes, Dictionary.Keys.BigInt(257), dictValueParserOutcome());
        b_0.storeRef(b_1.endCell());
    };
}

export function loadInitialState(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1129621790) { throw Error('Invalid prefix'); }
    let _name = sc_0.loadStringRefTail();
    let _description = sc_0.loadStringRefTail();
    let _duration = sc_0.loadUintBig(32);
    let _referees = Dictionary.load(Dictionary.Keys.BigInt(257), dictValueParserReferee(), sc_0);
    let sc_1 = sc_0.loadRef().beginParse();
    let _outcomes = Dictionary.load(Dictionary.Keys.BigInt(257), dictValueParserOutcome(), sc_1);
    return { $$type: 'InitialState' as const, name: _name, description: _description, duration: _duration, referees: _referees, outcomes: _outcomes };
}

function loadTupleInitialState(source: TupleReader) {
    let _name = source.readString();
    let _description = source.readString();
    let _duration = source.readBigNumber();
    let _referees = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserReferee(), source.readCellOpt());
    let _outcomes = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserOutcome(), source.readCellOpt());
    return { $$type: 'InitialState' as const, name: _name, description: _description, duration: _duration, referees: _referees, outcomes: _outcomes };
}

function storeTupleInitialState(source: InitialState) {
    let builder = new TupleBuilder();
    builder.writeString(source.name);
    builder.writeString(source.description);
    builder.writeNumber(source.duration);
    builder.writeCell(source.referees.size > 0 ? beginCell().storeDictDirect(source.referees, Dictionary.Keys.BigInt(257), dictValueParserReferee()).endCell() : null);
    builder.writeCell(source.outcomes.size > 0 ? beginCell().storeDictDirect(source.outcomes, Dictionary.Keys.BigInt(257), dictValueParserOutcome()).endCell() : null);
    return builder.build();
}

function dictValueParserInitialState(): DictionaryValue<InitialState> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeInitialState(src)).endCell());
        },
        parse: (src) => {
            return loadInitialState(src.loadRef().beginParse());
        }
    }
}

export type Coin = {
    $$type: 'Coin';
    amount: bigint;
}

export function storeCoin(src: Coin) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeCoins(src.amount);
    };
}

export function loadCoin(slice: Slice) {
    let sc_0 = slice;
    let _amount = sc_0.loadCoins();
    return { $$type: 'Coin' as const, amount: _amount };
}

function loadTupleCoin(source: TupleReader) {
    let _amount = source.readBigNumber();
    return { $$type: 'Coin' as const, amount: _amount };
}

function storeTupleCoin(source: Coin) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserCoin(): DictionaryValue<Coin> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeCoin(src)).endCell());
        },
        parse: (src) => {
            return loadCoin(src.loadRef().beginParse());
        }
    }
}

export type Outcome = {
    $$type: 'Outcome';
    id: bigint;
    name: string;
    voted: bigint;
    amount: bigint;
}

export function storeOutcome(src: Outcome) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(src.id, 8);
        b_0.storeStringRefTail(src.name);
        b_0.storeUint(src.voted, 8);
        b_0.storeCoins(src.amount);
    };
}

export function loadOutcome(slice: Slice) {
    let sc_0 = slice;
    let _id = sc_0.loadUintBig(8);
    let _name = sc_0.loadStringRefTail();
    let _voted = sc_0.loadUintBig(8);
    let _amount = sc_0.loadCoins();
    return { $$type: 'Outcome' as const, id: _id, name: _name, voted: _voted, amount: _amount };
}

function loadTupleOutcome(source: TupleReader) {
    let _id = source.readBigNumber();
    let _name = source.readString();
    let _voted = source.readBigNumber();
    let _amount = source.readBigNumber();
    return { $$type: 'Outcome' as const, id: _id, name: _name, voted: _voted, amount: _amount };
}

function storeTupleOutcome(source: Outcome) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.id);
    builder.writeString(source.name);
    builder.writeNumber(source.voted);
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserOutcome(): DictionaryValue<Outcome> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeOutcome(src)).endCell());
        },
        parse: (src) => {
            return loadOutcome(src.loadRef().beginParse());
        }
    }
}

export type Referee = {
    $$type: 'Referee';
    address: Address;
    voted: boolean;
}

export function storeReferee(src: Referee) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.address);
        b_0.storeBit(src.voted);
    };
}

export function loadReferee(slice: Slice) {
    let sc_0 = slice;
    let _address = sc_0.loadAddress();
    let _voted = sc_0.loadBit();
    return { $$type: 'Referee' as const, address: _address, voted: _voted };
}

function loadTupleReferee(source: TupleReader) {
    let _address = source.readAddress();
    let _voted = source.readBoolean();
    return { $$type: 'Referee' as const, address: _address, voted: _voted };
}

function storeTupleReferee(source: Referee) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.address);
    builder.writeBoolean(source.voted);
    return builder.build();
}

function dictValueParserReferee(): DictionaryValue<Referee> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeReferee(src)).endCell());
        },
        parse: (src) => {
            return loadReferee(src.loadRef().beginParse());
        }
    }
}

export type Fees = {
    $$type: 'Fees';
    percent: bigint;
    flat: bigint;
}

export function storeFees(src: Fees) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(src.percent, 8);
        b_0.storeCoins(src.flat);
    };
}

export function loadFees(slice: Slice) {
    let sc_0 = slice;
    let _percent = sc_0.loadUintBig(8);
    let _flat = sc_0.loadCoins();
    return { $$type: 'Fees' as const, percent: _percent, flat: _flat };
}

function loadTupleFees(source: TupleReader) {
    let _percent = source.readBigNumber();
    let _flat = source.readBigNumber();
    return { $$type: 'Fees' as const, percent: _percent, flat: _flat };
}

function storeTupleFees(source: Fees) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.percent);
    builder.writeNumber(source.flat);
    return builder.build();
}

function dictValueParserFees(): DictionaryValue<Fees> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeFees(src)).endCell());
        },
        parse: (src) => {
            return loadFees(src.loadRef().beginParse());
        }
    }
}

export type TimeSettings = {
    $$type: 'TimeSettings';
    startedAt: bigint;
    duration: bigint;
}

export function storeTimeSettings(src: TimeSettings) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(src.startedAt, 32);
        b_0.storeUint(src.duration, 32);
    };
}

export function loadTimeSettings(slice: Slice) {
    let sc_0 = slice;
    let _startedAt = sc_0.loadUintBig(32);
    let _duration = sc_0.loadUintBig(32);
    return { $$type: 'TimeSettings' as const, startedAt: _startedAt, duration: _duration };
}

function loadTupleTimeSettings(source: TupleReader) {
    let _startedAt = source.readBigNumber();
    let _duration = source.readBigNumber();
    return { $$type: 'TimeSettings' as const, startedAt: _startedAt, duration: _duration };
}

function storeTupleTimeSettings(source: TimeSettings) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.startedAt);
    builder.writeNumber(source.duration);
    return builder.build();
}

function dictValueParserTimeSettings(): DictionaryValue<TimeSettings> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTimeSettings(src)).endCell());
        },
        parse: (src) => {
            return loadTimeSettings(src.loadRef().beginParse());
        }
    }
}

 type Dispute_init_args = {
    $$type: 'Dispute_init_args';
    msg: InitialState;
}

function initDispute_init_args(src: Dispute_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        let b_1 = new Builder();
        b_1.store(storeInitialState(src.msg));
        b_0.storeRef(b_1.endCell());
    };
}

async function Dispute_init(msg: InitialState) {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initDispute_init_args({ $$type: 'Dispute_init_args', msg })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const Dispute_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack undeflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    5579: { message: `vote has ended` },
    37676: { message: `only child contract can call this function` },
    53866: { message: `wrong outcomeID` },
    54404: { message: `Parent only` },
}

const Dispute_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"InternalSetBet","header":3040150061,"fields":[{"name":"outcomeID","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"playerAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"WinBetDetails","header":14970947,"fields":[{"name":"outcomeID","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"playerAddress","type":{"kind":"simple","type":"address","optional":false}},{"name":"seqno","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"DrawBetDetails","header":1041894923,"fields":[{"name":"outcomeID","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"playerAddress","type":{"kind":"simple","type":"address","optional":false}},{"name":"seqno","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"CloseWinBet","header":2815938965,"fields":[{"name":"outcomeID","type":{"kind":"simple","type":"uint","optional":false,"format":8}}]},
    {"name":"CloseDrawBet","header":2880472030,"fields":[{"name":"id","type":{"kind":"simple","type":"uint","optional":false,"format":8}}]},
    {"name":"Vote","header":2170129586,"fields":[{"name":"outcomeID","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"refereeID","type":{"kind":"simple","type":"uint","optional":false,"format":8}}]},
    {"name":"Claim","header":2901386045,"fields":[{"name":"seqno","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"PlayerBetInit","header":3533363545,"fields":[{"name":"outcomeID","type":{"kind":"simple","type":"uint","optional":false,"format":8}}]},
    {"name":"InitialState","header":1129621790,"fields":[{"name":"name","type":{"kind":"simple","type":"string","optional":false}},{"name":"description","type":{"kind":"simple","type":"string","optional":false}},{"name":"duration","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"referees","type":{"kind":"dict","key":"int","value":"Referee","valueFormat":"ref"}},{"name":"outcomes","type":{"kind":"dict","key":"int","value":"Outcome","valueFormat":"ref"}}]},
    {"name":"Coin","header":null,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"Outcome","header":null,"fields":[{"name":"id","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"name","type":{"kind":"simple","type":"string","optional":false}},{"name":"voted","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"Referee","header":null,"fields":[{"name":"address","type":{"kind":"simple","type":"address","optional":false}},{"name":"voted","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"Fees","header":null,"fields":[{"name":"percent","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"flat","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"TimeSettings","header":null,"fields":[{"name":"startedAt","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"duration","type":{"kind":"simple","type":"uint","optional":false,"format":32}}]},
]

const Dispute_getters: ABIGetter[] = [
    {"name":"bank","arguments":[],"returnType":{"kind":"simple","type":"string","optional":false}},
    {"name":"outcomes","arguments":[],"returnType":{"kind":"dict","key":"int","value":"Outcome","valueFormat":"ref"}},
    {"name":"winnerID","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"balance","arguments":[],"returnType":{"kind":"simple","type":"string","optional":false}},
    {"name":"getName","arguments":[],"returnType":{"kind":"simple","type":"string","optional":false}},
    {"name":"getDescription","arguments":[],"returnType":{"kind":"simple","type":"string","optional":false}},
    {"name":"getReferees","arguments":[],"returnType":{"kind":"dict","key":"int","value":"Referee","valueFormat":"ref"}},
    {"name":"getOutcomes","arguments":[],"returnType":{"kind":"dict","key":"int","value":"Outcome","valueFormat":"ref"}},
    {"name":"getFees","arguments":[],"returnType":{"kind":"simple","type":"Fees","optional":false}},
    {"name":"getIsVoteFinished","arguments":[],"returnType":{"kind":"simple","type":"bool","optional":false}},
    {"name":"getWinnerOutcomeID","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"getTimeSettings","arguments":[],"returnType":{"kind":"simple","type":"TimeSettings","optional":false}},
]

const Dispute_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"Vote"}},
    {"receiver":"internal","message":{"kind":"text","text":"close by timeout"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Claim"}},
    {"receiver":"internal","message":{"kind":"typed","type":"PlayerBetInit"}},
    {"receiver":"internal","message":{"kind":"typed","type":"WinBetDetails"}},
    {"receiver":"internal","message":{"kind":"typed","type":"DrawBetDetails"}},
    {"receiver":"internal","message":{"kind":"empty"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class Dispute implements Contract {
    
    static async init(msg: InitialState) {
        return await Dispute_init(msg);
    }
    
    static async fromInit(msg: InitialState) {
        const init = await Dispute_init(msg);
        const address = contractAddress(0, init);
        return new Dispute(address, init);
    }
    
    static fromAddress(address: Address) {
        return new Dispute(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  Dispute_types,
        getters: Dispute_getters,
        receivers: Dispute_receivers,
        errors: Dispute_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: Vote | 'close by timeout' | Claim | PlayerBetInit | WinBetDetails | DrawBetDetails | null | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Vote') {
            body = beginCell().store(storeVote(message)).endCell();
        }
        if (message === 'close by timeout') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Claim') {
            body = beginCell().store(storeClaim(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'PlayerBetInit') {
            body = beginCell().store(storePlayerBetInit(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'WinBetDetails') {
            body = beginCell().store(storeWinBetDetails(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'DrawBetDetails') {
            body = beginCell().store(storeDrawBetDetails(message)).endCell();
        }
        if (message === null) {
            body = new Cell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getBank(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('bank', builder.build())).stack;
        let result = source.readString();
        return result;
    }
    
    async getOutcomes(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('outcomes', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserOutcome(), source.readCellOpt());
        return result;
    }
    
    async getWinnerId(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('winnerID', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getBalance(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('balance', builder.build())).stack;
        let result = source.readString();
        return result;
    }
    
    async getGetName(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getName', builder.build())).stack;
        let result = source.readString();
        return result;
    }
    
    async getGetDescription(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getDescription', builder.build())).stack;
        let result = source.readString();
        return result;
    }
    
    async getGetReferees(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getReferees', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserReferee(), source.readCellOpt());
        return result;
    }
    
    async getGetOutcomes(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getOutcomes', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserOutcome(), source.readCellOpt());
        return result;
    }
    
    async getGetFees(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getFees', builder.build())).stack;
        const result = loadTupleFees(source);
        return result;
    }
    
    async getGetIsVoteFinished(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getIsVoteFinished', builder.build())).stack;
        let result = source.readBoolean();
        return result;
    }
    
    async getGetWinnerOutcomeId(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getWinnerOutcomeID', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getGetTimeSettings(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getTimeSettings', builder.build())).stack;
        const result = loadTupleTimeSettings(source);
        return result;
    }
    
}