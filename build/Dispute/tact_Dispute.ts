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
    referees: Dictionary<bigint, Referee>;
    outcomes: Dictionary<bigint, Outcome>;
}

export function storeInitialState(src: InitialState) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(220680993, 32);
        b_0.storeStringRefTail(src.name);
        b_0.storeStringRefTail(src.description);
        b_0.storeDict(src.referees, Dictionary.Keys.BigInt(257), dictValueParserReferee());
        let b_1 = new Builder();
        b_1.storeDict(src.outcomes, Dictionary.Keys.BigInt(257), dictValueParserOutcome());
        b_0.storeRef(b_1.endCell());
    };
}

export function loadInitialState(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 220680993) { throw Error('Invalid prefix'); }
    let _name = sc_0.loadStringRefTail();
    let _description = sc_0.loadStringRefTail();
    let _referees = Dictionary.load(Dictionary.Keys.BigInt(257), dictValueParserReferee(), sc_0);
    let sc_1 = sc_0.loadRef().beginParse();
    let _outcomes = Dictionary.load(Dictionary.Keys.BigInt(257), dictValueParserOutcome(), sc_1);
    return { $$type: 'InitialState' as const, name: _name, description: _description, referees: _referees, outcomes: _outcomes };
}

function loadTupleInitialState(source: TupleReader) {
    let _name = source.readString();
    let _description = source.readString();
    let _referees = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserReferee(), source.readCellOpt());
    let _outcomes = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserOutcome(), source.readCellOpt());
    return { $$type: 'InitialState' as const, name: _name, description: _description, referees: _referees, outcomes: _outcomes };
}

function storeTupleInitialState(source: InitialState) {
    let builder = new TupleBuilder();
    builder.writeString(source.name);
    builder.writeString(source.description);
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
    45881: { message: `vote has ended.` },
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
    {"name":"PlayerBetInit","header":3533363545,"fields":[{"name":"outcomeID","type":{"kind":"simple","type":"uint","optional":false,"format":8}}]},
    {"name":"InitialState","header":220680993,"fields":[{"name":"name","type":{"kind":"simple","type":"string","optional":false}},{"name":"description","type":{"kind":"simple","type":"string","optional":false}},{"name":"referees","type":{"kind":"dict","key":"int","value":"Referee","valueFormat":"ref"}},{"name":"outcomes","type":{"kind":"dict","key":"int","value":"Outcome","valueFormat":"ref"}}]},
    {"name":"Coin","header":null,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"Outcome","header":null,"fields":[{"name":"id","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"name","type":{"kind":"simple","type":"string","optional":false}},{"name":"voted","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"Referee","header":null,"fields":[{"name":"address","type":{"kind":"simple","type":"address","optional":false}},{"name":"voted","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"Fees","header":null,"fields":[{"name":"percent","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"flat","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
]

const Dispute_getters: ABIGetter[] = [
    {"name":"bank","arguments":[],"returnType":{"kind":"simple","type":"string","optional":false}},
    {"name":"outcomes","arguments":[],"returnType":{"kind":"dict","key":"int","value":"Outcome","valueFormat":"ref"}},
    {"name":"winnerID","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"balance","arguments":[],"returnType":{"kind":"simple","type":"string","optional":false}},
    {"name":"getName","arguments":[],"returnType":{"kind":"simple","type":"string","optional":false}},
    {"name":"getDescription","arguments":[],"returnType":{"kind":"simple","type":"string","optional":false}},
    {"name":"getReferees","arguments":[],"returnType":{"kind":"dict","key":"int","value":"Referee","valueFormat":"ref"}},
    {"name":"getPlayerBets","arguments":[],"returnType":{"kind":"dict","key":"address","value":"Coin","valueFormat":"ref"}},
    {"name":"getOutcomes","arguments":[],"returnType":{"kind":"dict","key":"int","value":"Outcome","valueFormat":"ref"}},
    {"name":"getFees","arguments":[],"returnType":{"kind":"simple","type":"Fees","optional":false}},
    {"name":"getIsVoteFinished","arguments":[],"returnType":{"kind":"simple","type":"bool","optional":false}},
    {"name":"getWinnerOutcomeID","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
]

const Dispute_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"Vote"}},
    {"receiver":"internal","message":{"kind":"text","text":"finish"}},
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
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: Vote | 'finish' | PlayerBetInit | WinBetDetails | DrawBetDetails | null | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Vote') {
            body = beginCell().store(storeVote(message)).endCell();
        }
        if (message === 'finish') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
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
    
    async getGetPlayerBets(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getPlayerBets', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.Address(), dictValueParserCoin(), source.readCellOpt());
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
    
}