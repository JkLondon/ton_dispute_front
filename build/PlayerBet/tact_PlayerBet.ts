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
    const __code = Cell.fromBase64('te6ccgECGAEABMIAART/APSkE/S88sgLAQIBYgIDA3rQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFds88uCCFAQFAgFYDg8D9O2i7fsBkjB/4HAh10nCH5UwINcLH94gghC1NQItuo5FMNMfAYIQtTUCLbry4IHTB/oA+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiEMwbBM0NDSCANSE+EJScMcF8vR/4CCCEKfX0ZW64wIgghCUapi2uuMCBgcIALjI+EMBzH8BygBVUFBlINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WE8v/ywcB+gJYINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WyFj6AskBzMntVAL4MNMfAYIQp9fRlbry4IHTBwExggDUhPhCUoDHBfL0UkC6jshwcIEAglR2VCrIVTCCCORwQ1AFyx8TywcB+gIBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8Wy//JKVUwECQQI21t2zyOjSVwcIEAgkMwbW1t2zzifwsLAVAw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/CQEOwACRMOMNcAoBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8CwL++QGC8NDwIFqgOJoAy3Fj3rDnfdarMt47FXr3IGdp4DeO8VWCuo7YggDUhPhCUnDHBfL0cHCBAIJUdlQqyFUwghA+Gg4LUAXLHxPLBwH6AgEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbL/8kpVTAQJBAjbW3bPH/bMQsMAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AA0AAuAAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAlbu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcJ2XTlqzTstzOg6WbZRm6KSAIBSBARABGwr7tRNDSAAGACASASEwIRrDVtnm2eNjJAFBUAdazdxoatLgzOZ0Xl6i2qyKgmjKmKTSlLKwysqGZOjqtGLSxt7WitbanJTCoG6U9M60sGrEnJRkgrKpBAAdbtRNDUAfhj0gABjlP6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdP/0wf6APpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB1AHQ+gAwFhUUQzBsFuD4KNcLCoMJuvLgiRYACFRzIScBVvpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgBgQEB1wBZAtEB2zwXAFZwII0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIIJMS0A');
    const __system = Cell.fromBase64('te6cckECGgEABMwAAQHAAQEFoXV1AgEU/wD0pBP0vPLICwMCAWIMBAIBWAsFAgFICgYCASAIBwB1rN3Ghq0uDM5nReXqLarIqCaMqYpNKUsrDKyoZk6Oq0YtLG3taK1tqclMKgbpT0zrSwasSclGSCsqkEACEaw1bZ5tnjYyQBcJAAhUcyEnABGwr7tRNDSAAGAAlbu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcJ2XTlqzTstzOg6WbZRm6KSAN60AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRXbPPLgghcODQC4yPhDAcx/AcoAVVBQZSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFhPL/8sHAfoCWCDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFshY+gLJAczJ7VQD9O2i7fsBkjB/4HAh10nCH5UwINcLH94gghC1NQItuo5FMNMfAYIQtTUCLbry4IHTB/oA+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiEMwbBM0NDSCANSE+EJScMcF8vR/4CCCEKfX0ZW64wIgghCUapi2uuMCFBIPAQ7AAJEw4w1wEAL++QGC8NDwIFqgOJoAy3Fj3rDnfdarMt47FXr3IGdp4DeO8VWCuo7YggDUhPhCUnDHBfL0cHCBAIJUdlQqyFUwghA+Gg4LUAXLHxPLBwH6AgEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbL/8kpVTAQJBAjbW3bPH/bMRURAALgAVAw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/EwE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwVAvgw0x8BghCn19GVuvLggdMHATGCANSE+EJSgMcF8vRSQLqOyHBwgQCCVHZUKshVMIII5HBDUAXLHxPLBwH6AgEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbL/8kpVTAQJBAjbW3bPI6NJXBwgQCCQzBtbW3bPOJ/FRUByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAFgCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAHW7UTQ1AH4Y9IAAY5T+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHT/9MH+gD6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdQB0PoAMBYVFEMwbBbg+CjXCwqDCbry4IkYAVb6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAYEBAdcAWQLRAds8GQBWcCCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASCCTEtAAHTLJ8=');
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
    54404: { message: `Parent only` },
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
    {"name":"Claim","header":2901386045,"fields":[{"name":"seqno","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
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