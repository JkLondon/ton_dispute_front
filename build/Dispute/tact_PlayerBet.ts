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
    ID: bigint;
    name: string;
    description: string;
    duration: bigint;
    betUntil: bigint;
    referees: Dictionary<bigint, Referee>;
    outcomes: Dictionary<bigint, Outcome>;
}

export function storeInitialState(src: InitialState) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(109815152, 32);
        b_0.storeUint(src.ID, 256);
        b_0.storeStringRefTail(src.name);
        b_0.storeStringRefTail(src.description);
        b_0.storeUint(src.duration, 32);
        b_0.storeUint(src.betUntil, 32);
        b_0.storeDict(src.referees, Dictionary.Keys.BigInt(257), dictValueParserReferee());
        let b_1 = new Builder();
        b_1.storeDict(src.outcomes, Dictionary.Keys.BigInt(257), dictValueParserOutcome());
        b_0.storeRef(b_1.endCell());
    };
}

export function loadInitialState(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 109815152) { throw Error('Invalid prefix'); }
    let _ID = sc_0.loadUintBig(256);
    let _name = sc_0.loadStringRefTail();
    let _description = sc_0.loadStringRefTail();
    let _duration = sc_0.loadUintBig(32);
    let _betUntil = sc_0.loadUintBig(32);
    let _referees = Dictionary.load(Dictionary.Keys.BigInt(257), dictValueParserReferee(), sc_0);
    let sc_1 = sc_0.loadRef().beginParse();
    let _outcomes = Dictionary.load(Dictionary.Keys.BigInt(257), dictValueParserOutcome(), sc_1);
    return { $$type: 'InitialState' as const, ID: _ID, name: _name, description: _description, duration: _duration, betUntil: _betUntil, referees: _referees, outcomes: _outcomes };
}

function loadTupleInitialState(source: TupleReader) {
    let _ID = source.readBigNumber();
    let _name = source.readString();
    let _description = source.readString();
    let _duration = source.readBigNumber();
    let _betUntil = source.readBigNumber();
    let _referees = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserReferee(), source.readCellOpt());
    let _outcomes = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserOutcome(), source.readCellOpt());
    return { $$type: 'InitialState' as const, ID: _ID, name: _name, description: _description, duration: _duration, betUntil: _betUntil, referees: _referees, outcomes: _outcomes };
}

function storeTupleInitialState(source: InitialState) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.ID);
    builder.writeString(source.name);
    builder.writeString(source.description);
    builder.writeNumber(source.duration);
    builder.writeNumber(source.betUntil);
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

 type PlayerBet_init_args = {
    $$type: 'PlayerBet_init_args';
    parent: Address;
    seqno: bigint;
}

function initPlayerBet_init_args(src: PlayerBet_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.parent);
        b_0.storeInt(src.seqno, 257);
    };
}

async function PlayerBet_init(parent: Address, seqno: bigint) {
    const __code = Cell.fromBase64('te6ccgECGAEABOEAART/APSkE/S88sgLAQIBYgIDA3rQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFts88uCCFAQFAgFYDg8D9O2i7fsBkjB/4HAh10nCH5UwINcLH94gghC1NQItuo5FMNMfAYIQtTUCLbry4IHTB/oA+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiEMwbBM1NTWCANSE+EJSgMcF8vR/4CCCEKfX0ZW64wIgghCUapi2uuMCBgcIAMDI+EMBzH8BygBVYFB2INdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WFMv/EssHAfoCASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFshQA/oCygDJAczJ7VQBJDDTHwGCEKfX0ZW68uCB0wcBMQkBUDDTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH8KAV7AAI6n+QGC8NDwIFqgOJoAy3Fj3rDnfdarMt47FXr3IGdp4DeO8VWCuuMCkTDicAsC6IIA1IT4QlKQxwXy9IIA6TQCsxLy9CR/ArqOyHBwgQCCVHdlK8hVMIII5HBDUAXLHxPLBwH6AgEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbL/8kqVTAQJBAjbW3bPI6NJnBwgQCCQzBtbW3bPOJ/DAwBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8DAHCggDUhPhCUoDHBfL0ggDpNAGz8vR/cHCBAIJUd2UryFUwghA+Gg4LUAXLHxPLBwH6AgEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbL/8kqVTAQJBAjbW3bPH/bMQwByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzACVu70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwnZdOWrNOy3M6DpZtlGbopIAgFIEBEAEbCvu1E0NIAAYAIBIBITAhGsNW2ebZ42OkAUFQB1rN3Ghq0uDM5nReXqLapmiitOjkzmbM5qbmrpyicIZikJqa1pDWlMLwqIZm3NLKpHJy2vLOkHLgot0EAB5O1E0NQB+GPSAAGOWvpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB0//TB/oA+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHUAdD6ANIAMBAnECYQJRAkECNsF+D4KNcLCoMJuvLgiRYACFR0MigBVvpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgBgQEB1wBZAtEB2zwXAFhwII0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIIJMS0AcA==');
    const __system = Cell.fromBase64('te6cckECGgEABOsAAQHAAQEFoXV1AgEU/wD0pBP0vPLICwMCAWIMBAIBWAsFAgFICgYCASAIBwB1rN3Ghq0uDM5nReXqLapmiitOjkzmbM5qbmrpyicIZikJqa1pDWlMLwqIZm3NLKpHJy2vLOkHLgot0EACEaw1bZ5tnjY6QBcJAAhUdDIoABGwr7tRNDSAAGAAlbu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcJ2XTlqzTstzOg6WbZRm6KSAN60AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRbbPPLgghcODQDAyPhDAcx/AcoAVWBQdiDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFhTL/xLLBwH6AgEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbIUAP6AsoAyQHMye1UA/Ttou37AZIwf+BwIddJwh+VMCDXCx/eIIIQtTUCLbqORTDTHwGCELU1Ai268uCB0wf6APpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhDMGwTNTU1ggDUhPhCUoDHBfL0f+AgghCn19GVuuMCIIIQlGqYtrrjAhMRDwFewACOp/kBgvDQ8CBaoDiaAMtxY96w533WqzLeOxV69yBnaeA3jvFVgrrjApEw4nAQAcKCANSE+EJSgMcF8vSCAOk0AbPy9H9wcIEAglR3ZSvIVTCCED4aDgtQBcsfE8sHAfoCASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFsv/ySpVMBAkECNtbds8f9sxFQFQMNMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8fxIBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8FQEkMNMfAYIQp9fRlbry4IHTBwExFALoggDUhPhCUpDHBfL0ggDpNAKzEvL0JH8Cuo7IcHCBAIJUd2UryFUwggjkcENQBcsfE8sHAfoCASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFsv/ySpVMBAkECNtbds8jo0mcHCBAIJDMG1tbds84n8VFQHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAWAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAeTtRNDUAfhj0gABjlr6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdP/0wf6APpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB1AHQ+gDSADAQJxAmECUQJBAjbBfg+CjXCwqDCbry4IkYAVb6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAYEBAdcAWQLRAds8GQBYcCCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASCCTEtAHAD7551');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initPlayerBet_init_args({ $$type: 'PlayerBet_init_args', parent, seqno })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const PlayerBet_errors: { [key: number]: { message: string } } = {
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
    46543: { message: `betting time has ended` },
    53866: { message: `wrong outcomeID` },
    54404: { message: `Parent only` },
    59700: { message: `Already payed` },
}

const PlayerBet_types: ABIType[] = [
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
    {"name":"InitialState","header":109815152,"fields":[{"name":"ID","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"name","type":{"kind":"simple","type":"string","optional":false}},{"name":"description","type":{"kind":"simple","type":"string","optional":false}},{"name":"duration","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"betUntil","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"referees","type":{"kind":"dict","key":"int","value":"Referee","valueFormat":"ref"}},{"name":"outcomes","type":{"kind":"dict","key":"int","value":"Outcome","valueFormat":"ref"}}]},
    {"name":"Coin","header":null,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"Outcome","header":null,"fields":[{"name":"id","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"name","type":{"kind":"simple","type":"string","optional":false}},{"name":"voted","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"Referee","header":null,"fields":[{"name":"address","type":{"kind":"simple","type":"address","optional":false}},{"name":"voted","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"Fees","header":null,"fields":[{"name":"percent","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"flat","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"TimeSettings","header":null,"fields":[{"name":"startedAt","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"duration","type":{"kind":"simple","type":"uint","optional":false,"format":32}}]},
]

const PlayerBet_getters: ABIGetter[] = [
    {"name":"details","arguments":[],"returnType":{"kind":"simple","type":"WinBetDetails","optional":false}},
]

const PlayerBet_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"InternalSetBet"}},
    {"receiver":"internal","message":{"kind":"typed","type":"CloseWinBet"}},
    {"receiver":"internal","message":{"kind":"text","text":"close draw"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class PlayerBet implements Contract {
    
    static async init(parent: Address, seqno: bigint) {
        return await PlayerBet_init(parent, seqno);
    }
    
    static async fromInit(parent: Address, seqno: bigint) {
        const init = await PlayerBet_init(parent, seqno);
        const address = contractAddress(0, init);
        return new PlayerBet(address, init);
    }
    
    static fromAddress(address: Address) {
        return new PlayerBet(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  PlayerBet_types,
        getters: PlayerBet_getters,
        receivers: PlayerBet_receivers,
        errors: PlayerBet_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: InternalSetBet | CloseWinBet | 'close draw' | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'InternalSetBet') {
            body = beginCell().store(storeInternalSetBet(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'CloseWinBet') {
            body = beginCell().store(storeCloseWinBet(message)).endCell();
        }
        if (message === 'close draw') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getDetails(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('details', builder.build())).stack;
        const result = loadTupleWinBetDetails(source);
        return result;
    }
    
}