import * as jspb from 'google-protobuf'

import * as expression_pb from './expression_pb';


export class Filter extends jspb.Message {
  getExpr(): expression_pb.Expression | undefined;
  setExpr(value?: expression_pb.Expression): Filter;
  hasExpr(): boolean;
  clearExpr(): Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
  static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filter;
  static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
  export type AsObject = {
    expr?: expression_pb.Expression.AsObject,
  }
}

export class Formula extends jspb.Message {
  getExpr(): expression_pb.Expression | undefined;
  setExpr(value?: expression_pb.Expression): Formula;
  hasExpr(): boolean;
  clearExpr(): Formula;

  getAs(): string;
  setAs(value: string): Formula;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Formula.AsObject;
  static toObject(includeInstance: boolean, msg: Formula): Formula.AsObject;
  static serializeBinaryToWriter(message: Formula, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Formula;
  static deserializeBinaryFromReader(message: Formula, reader: jspb.BinaryReader): Formula;
}

export namespace Formula {
  export type AsObject = {
    expr?: expression_pb.Expression.AsObject,
    as: string,
  }
}

export class Extent extends jspb.Message {
  getField(): string;
  setField(value: string): Extent;

  getSignal(): string;
  setSignal(value: string): Extent;
  hasSignal(): boolean;
  clearSignal(): Extent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Extent.AsObject;
  static toObject(includeInstance: boolean, msg: Extent): Extent.AsObject;
  static serializeBinaryToWriter(message: Extent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Extent;
  static deserializeBinaryFromReader(message: Extent, reader: jspb.BinaryReader): Extent;
}

export namespace Extent {
  export type AsObject = {
    field: string,
    signal?: string,
  }

  export enum SignalCase { 
    _SIGNAL_NOT_SET = 0,
    SIGNAL = 2,
  }
}

export class Collect extends jspb.Message {
  getFieldsList(): Array<string>;
  setFieldsList(value: Array<string>): Collect;
  clearFieldsList(): Collect;
  addFields(value: string, index?: number): Collect;

  getOrderList(): Array<SortOrder>;
  setOrderList(value: Array<SortOrder>): Collect;
  clearOrderList(): Collect;
  addOrder(value: SortOrder, index?: number): Collect;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Collect.AsObject;
  static toObject(includeInstance: boolean, msg: Collect): Collect.AsObject;
  static serializeBinaryToWriter(message: Collect, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Collect;
  static deserializeBinaryFromReader(message: Collect, reader: jspb.BinaryReader): Collect;
}

export namespace Collect {
  export type AsObject = {
    fieldsList: Array<string>,
    orderList: Array<SortOrder>,
  }
}

export class Bin extends jspb.Message {
  getField(): string;
  setField(value: string): Bin;

  getExtent(): expression_pb.Expression | undefined;
  setExtent(value?: expression_pb.Expression): Bin;
  hasExtent(): boolean;
  clearExtent(): Bin;

  getSignal(): string;
  setSignal(value: string): Bin;
  hasSignal(): boolean;
  clearSignal(): Bin;

  getAlias0(): string;
  setAlias0(value: string): Bin;
  hasAlias0(): boolean;
  clearAlias0(): Bin;

  getAlias1(): string;
  setAlias1(value: string): Bin;
  hasAlias1(): boolean;
  clearAlias1(): Bin;

  getAnchor(): number;
  setAnchor(value: number): Bin;
  hasAnchor(): boolean;
  clearAnchor(): Bin;

  getMaxbins(): number;
  setMaxbins(value: number): Bin;

  getBase(): number;
  setBase(value: number): Bin;

  getStep(): number;
  setStep(value: number): Bin;
  hasStep(): boolean;
  clearStep(): Bin;

  getStepsList(): Array<number>;
  setStepsList(value: Array<number>): Bin;
  clearStepsList(): Bin;
  addSteps(value: number, index?: number): Bin;

  getSpan(): expression_pb.Expression | undefined;
  setSpan(value?: expression_pb.Expression): Bin;
  hasSpan(): boolean;
  clearSpan(): Bin;

  getMinstep(): number;
  setMinstep(value: number): Bin;

  getDivideList(): Array<number>;
  setDivideList(value: Array<number>): Bin;
  clearDivideList(): Bin;
  addDivide(value: number, index?: number): Bin;

  getNice(): boolean;
  setNice(value: boolean): Bin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bin.AsObject;
  static toObject(includeInstance: boolean, msg: Bin): Bin.AsObject;
  static serializeBinaryToWriter(message: Bin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bin;
  static deserializeBinaryFromReader(message: Bin, reader: jspb.BinaryReader): Bin;
}

export namespace Bin {
  export type AsObject = {
    field: string,
    extent?: expression_pb.Expression.AsObject,
    signal?: string,
    alias0?: string,
    alias1?: string,
    anchor?: number,
    maxbins: number,
    base: number,
    step?: number,
    stepsList: Array<number>,
    span?: expression_pb.Expression.AsObject,
    minstep: number,
    divideList: Array<number>,
    nice: boolean,
  }

  export enum SignalCase { 
    _SIGNAL_NOT_SET = 0,
    SIGNAL = 3,
  }

  export enum Alias0Case { 
    _ALIAS_0_NOT_SET = 0,
    ALIAS_0 = 4,
  }

  export enum Alias1Case { 
    _ALIAS_1_NOT_SET = 0,
    ALIAS_1 = 5,
  }

  export enum AnchorCase { 
    _ANCHOR_NOT_SET = 0,
    ANCHOR = 6,
  }

  export enum StepCase { 
    _STEP_NOT_SET = 0,
    STEP = 9,
  }
}

export class Aggregate extends jspb.Message {
  getGroupbyList(): Array<string>;
  setGroupbyList(value: Array<string>): Aggregate;
  clearGroupbyList(): Aggregate;
  addGroupby(value: string, index?: number): Aggregate;

  getFieldsList(): Array<string>;
  setFieldsList(value: Array<string>): Aggregate;
  clearFieldsList(): Aggregate;
  addFields(value: string, index?: number): Aggregate;

  getAliasesList(): Array<string>;
  setAliasesList(value: Array<string>): Aggregate;
  clearAliasesList(): Aggregate;
  addAliases(value: string, index?: number): Aggregate;

  getOpsList(): Array<AggregateOp>;
  setOpsList(value: Array<AggregateOp>): Aggregate;
  clearOpsList(): Aggregate;
  addOps(value: AggregateOp, index?: number): Aggregate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Aggregate.AsObject;
  static toObject(includeInstance: boolean, msg: Aggregate): Aggregate.AsObject;
  static serializeBinaryToWriter(message: Aggregate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Aggregate;
  static deserializeBinaryFromReader(message: Aggregate, reader: jspb.BinaryReader): Aggregate;
}

export namespace Aggregate {
  export type AsObject = {
    groupbyList: Array<string>,
    fieldsList: Array<string>,
    aliasesList: Array<string>,
    opsList: Array<AggregateOp>,
  }
}

export class JoinAggregate extends jspb.Message {
  getGroupbyList(): Array<string>;
  setGroupbyList(value: Array<string>): JoinAggregate;
  clearGroupbyList(): JoinAggregate;
  addGroupby(value: string, index?: number): JoinAggregate;

  getFieldsList(): Array<string>;
  setFieldsList(value: Array<string>): JoinAggregate;
  clearFieldsList(): JoinAggregate;
  addFields(value: string, index?: number): JoinAggregate;

  getOpsList(): Array<AggregateOp>;
  setOpsList(value: Array<AggregateOp>): JoinAggregate;
  clearOpsList(): JoinAggregate;
  addOps(value: AggregateOp, index?: number): JoinAggregate;

  getAliasesList(): Array<string>;
  setAliasesList(value: Array<string>): JoinAggregate;
  clearAliasesList(): JoinAggregate;
  addAliases(value: string, index?: number): JoinAggregate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinAggregate.AsObject;
  static toObject(includeInstance: boolean, msg: JoinAggregate): JoinAggregate.AsObject;
  static serializeBinaryToWriter(message: JoinAggregate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinAggregate;
  static deserializeBinaryFromReader(message: JoinAggregate, reader: jspb.BinaryReader): JoinAggregate;
}

export namespace JoinAggregate {
  export type AsObject = {
    groupbyList: Array<string>,
    fieldsList: Array<string>,
    opsList: Array<AggregateOp>,
    aliasesList: Array<string>,
  }
}

export class TimeUnit extends jspb.Message {
  getField(): string;
  setField(value: string): TimeUnit;

  getUnitsList(): Array<TimeUnitUnit>;
  setUnitsList(value: Array<TimeUnitUnit>): TimeUnit;
  clearUnitsList(): TimeUnit;
  addUnits(value: TimeUnitUnit, index?: number): TimeUnit;

  getSignal(): string;
  setSignal(value: string): TimeUnit;
  hasSignal(): boolean;
  clearSignal(): TimeUnit;

  getAlias0(): string;
  setAlias0(value: string): TimeUnit;
  hasAlias0(): boolean;
  clearAlias0(): TimeUnit;

  getAlias1(): string;
  setAlias1(value: string): TimeUnit;
  hasAlias1(): boolean;
  clearAlias1(): TimeUnit;

  getTimezone(): TimeUnitTimeZone;
  setTimezone(value: TimeUnitTimeZone): TimeUnit;
  hasTimezone(): boolean;
  clearTimezone(): TimeUnit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeUnit.AsObject;
  static toObject(includeInstance: boolean, msg: TimeUnit): TimeUnit.AsObject;
  static serializeBinaryToWriter(message: TimeUnit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeUnit;
  static deserializeBinaryFromReader(message: TimeUnit, reader: jspb.BinaryReader): TimeUnit;
}

export namespace TimeUnit {
  export type AsObject = {
    field: string,
    unitsList: Array<TimeUnitUnit>,
    signal?: string,
    alias0?: string,
    alias1?: string,
    timezone?: TimeUnitTimeZone,
  }

  export enum SignalCase { 
    _SIGNAL_NOT_SET = 0,
    SIGNAL = 3,
  }

  export enum Alias0Case { 
    _ALIAS_0_NOT_SET = 0,
    ALIAS_0 = 4,
  }

  export enum Alias1Case { 
    _ALIAS_1_NOT_SET = 0,
    ALIAS_1 = 5,
  }

  export enum TimezoneCase { 
    _TIMEZONE_NOT_SET = 0,
    TIMEZONE = 6,
  }
}

export class WindowTransformOp extends jspb.Message {
  getAggregateOp(): AggregateOp;
  setAggregateOp(value: AggregateOp): WindowTransformOp;

  getWindowOp(): WindowOp;
  setWindowOp(value: WindowOp): WindowTransformOp;

  getOpCase(): WindowTransformOp.OpCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WindowTransformOp.AsObject;
  static toObject(includeInstance: boolean, msg: WindowTransformOp): WindowTransformOp.AsObject;
  static serializeBinaryToWriter(message: WindowTransformOp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WindowTransformOp;
  static deserializeBinaryFromReader(message: WindowTransformOp, reader: jspb.BinaryReader): WindowTransformOp;
}

export namespace WindowTransformOp {
  export type AsObject = {
    aggregateOp: AggregateOp,
    windowOp: WindowOp,
  }

  export enum OpCase { 
    OP_NOT_SET = 0,
    AGGREGATE_OP = 1,
    WINDOW_OP = 2,
  }
}

export class Window extends jspb.Message {
  getSortList(): Array<SortOrder>;
  setSortList(value: Array<SortOrder>): Window;
  clearSortList(): Window;
  addSort(value: SortOrder, index?: number): Window;

  getSortFieldsList(): Array<string>;
  setSortFieldsList(value: Array<string>): Window;
  clearSortFieldsList(): Window;
  addSortFields(value: string, index?: number): Window;

  getGroupbyList(): Array<string>;
  setGroupbyList(value: Array<string>): Window;
  clearGroupbyList(): Window;
  addGroupby(value: string, index?: number): Window;

  getOpsList(): Array<WindowTransformOp>;
  setOpsList(value: Array<WindowTransformOp>): Window;
  clearOpsList(): Window;
  addOps(value?: WindowTransformOp, index?: number): WindowTransformOp;

  getFieldsList(): Array<string>;
  setFieldsList(value: Array<string>): Window;
  clearFieldsList(): Window;
  addFields(value: string, index?: number): Window;

  getParamsList(): Array<number>;
  setParamsList(value: Array<number>): Window;
  clearParamsList(): Window;
  addParams(value: number, index?: number): Window;

  getAliasesList(): Array<string>;
  setAliasesList(value: Array<string>): Window;
  clearAliasesList(): Window;
  addAliases(value: string, index?: number): Window;

  getFrame(): WindowFrame | undefined;
  setFrame(value?: WindowFrame): Window;
  hasFrame(): boolean;
  clearFrame(): Window;

  getIgnorePeers(): boolean;
  setIgnorePeers(value: boolean): Window;
  hasIgnorePeers(): boolean;
  clearIgnorePeers(): Window;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Window.AsObject;
  static toObject(includeInstance: boolean, msg: Window): Window.AsObject;
  static serializeBinaryToWriter(message: Window, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Window;
  static deserializeBinaryFromReader(message: Window, reader: jspb.BinaryReader): Window;
}

export namespace Window {
  export type AsObject = {
    sortList: Array<SortOrder>,
    sortFieldsList: Array<string>,
    groupbyList: Array<string>,
    opsList: Array<WindowTransformOp.AsObject>,
    fieldsList: Array<string>,
    paramsList: Array<number>,
    aliasesList: Array<string>,
    frame?: WindowFrame.AsObject,
    ignorePeers?: boolean,
  }

  export enum FrameCase { 
    _FRAME_NOT_SET = 0,
    FRAME = 8,
  }

  export enum IgnorePeersCase { 
    _IGNORE_PEERS_NOT_SET = 0,
    IGNORE_PEERS = 9,
  }
}

export class WindowFrame extends jspb.Message {
  getStart(): number;
  setStart(value: number): WindowFrame;
  hasStart(): boolean;
  clearStart(): WindowFrame;

  getEnd(): number;
  setEnd(value: number): WindowFrame;
  hasEnd(): boolean;
  clearEnd(): WindowFrame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WindowFrame.AsObject;
  static toObject(includeInstance: boolean, msg: WindowFrame): WindowFrame.AsObject;
  static serializeBinaryToWriter(message: WindowFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WindowFrame;
  static deserializeBinaryFromReader(message: WindowFrame, reader: jspb.BinaryReader): WindowFrame;
}

export namespace WindowFrame {
  export type AsObject = {
    start?: number,
    end?: number,
  }

  export enum StartCase { 
    _START_NOT_SET = 0,
    START = 1,
  }

  export enum EndCase { 
    _END_NOT_SET = 0,
    END = 2,
  }
}

export class Project extends jspb.Message {
  getFieldsList(): Array<string>;
  setFieldsList(value: Array<string>): Project;
  clearFieldsList(): Project;
  addFields(value: string, index?: number): Project;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Project.AsObject;
  static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
  static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Project;
  static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
  export type AsObject = {
    fieldsList: Array<string>,
  }
}

export class Stack extends jspb.Message {
  getField(): string;
  setField(value: string): Stack;

  getOffset(): StackOffset;
  setOffset(value: StackOffset): Stack;

  getSortList(): Array<SortOrder>;
  setSortList(value: Array<SortOrder>): Stack;
  clearSortList(): Stack;
  addSort(value: SortOrder, index?: number): Stack;

  getSortFieldsList(): Array<string>;
  setSortFieldsList(value: Array<string>): Stack;
  clearSortFieldsList(): Stack;
  addSortFields(value: string, index?: number): Stack;

  getGroupbyList(): Array<string>;
  setGroupbyList(value: Array<string>): Stack;
  clearGroupbyList(): Stack;
  addGroupby(value: string, index?: number): Stack;

  getAlias0(): string;
  setAlias0(value: string): Stack;
  hasAlias0(): boolean;
  clearAlias0(): Stack;

  getAlias1(): string;
  setAlias1(value: string): Stack;
  hasAlias1(): boolean;
  clearAlias1(): Stack;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Stack.AsObject;
  static toObject(includeInstance: boolean, msg: Stack): Stack.AsObject;
  static serializeBinaryToWriter(message: Stack, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Stack;
  static deserializeBinaryFromReader(message: Stack, reader: jspb.BinaryReader): Stack;
}

export namespace Stack {
  export type AsObject = {
    field: string,
    offset: StackOffset,
    sortList: Array<SortOrder>,
    sortFieldsList: Array<string>,
    groupbyList: Array<string>,
    alias0?: string,
    alias1?: string,
  }

  export enum Alias0Case { 
    _ALIAS_0_NOT_SET = 0,
    ALIAS_0 = 6,
  }

  export enum Alias1Case { 
    _ALIAS_1_NOT_SET = 0,
    ALIAS_1 = 7,
  }
}

export class Impute extends jspb.Message {
  getField(): string;
  setField(value: string): Impute;

  getKey(): string;
  setKey(value: string): Impute;

  getMethod(): ImputeMethod;
  setMethod(value: ImputeMethod): Impute;

  getGroupbyList(): Array<string>;
  setGroupbyList(value: Array<string>): Impute;
  clearGroupbyList(): Impute;
  addGroupby(value: string, index?: number): Impute;

  getValueJson(): string;
  setValueJson(value: string): Impute;
  hasValueJson(): boolean;
  clearValueJson(): Impute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Impute.AsObject;
  static toObject(includeInstance: boolean, msg: Impute): Impute.AsObject;
  static serializeBinaryToWriter(message: Impute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Impute;
  static deserializeBinaryFromReader(message: Impute, reader: jspb.BinaryReader): Impute;
}

export namespace Impute {
  export type AsObject = {
    field: string,
    key: string,
    method: ImputeMethod,
    groupbyList: Array<string>,
    valueJson?: string,
  }

  export enum ValueJsonCase { 
    _VALUE_JSON_NOT_SET = 0,
    VALUE_JSON = 5,
  }
}

export class Pivot extends jspb.Message {
  getField(): string;
  setField(value: string): Pivot;

  getValue(): string;
  setValue(value: string): Pivot;

  getGroupbyList(): Array<string>;
  setGroupbyList(value: Array<string>): Pivot;
  clearGroupbyList(): Pivot;
  addGroupby(value: string, index?: number): Pivot;

  getLimit(): number;
  setLimit(value: number): Pivot;
  hasLimit(): boolean;
  clearLimit(): Pivot;

  getOp(): AggregateOp;
  setOp(value: AggregateOp): Pivot;
  hasOp(): boolean;
  clearOp(): Pivot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pivot.AsObject;
  static toObject(includeInstance: boolean, msg: Pivot): Pivot.AsObject;
  static serializeBinaryToWriter(message: Pivot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pivot;
  static deserializeBinaryFromReader(message: Pivot, reader: jspb.BinaryReader): Pivot;
}

export namespace Pivot {
  export type AsObject = {
    field: string,
    value: string,
    groupbyList: Array<string>,
    limit?: number,
    op?: AggregateOp,
  }

  export enum LimitCase { 
    _LIMIT_NOT_SET = 0,
    LIMIT = 4,
  }

  export enum OpCase { 
    _OP_NOT_SET = 0,
    OP = 5,
  }
}

export class Identifier extends jspb.Message {
  getAs(): string;
  setAs(value: string): Identifier;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Identifier.AsObject;
  static toObject(includeInstance: boolean, msg: Identifier): Identifier.AsObject;
  static serializeBinaryToWriter(message: Identifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Identifier;
  static deserializeBinaryFromReader(message: Identifier, reader: jspb.BinaryReader): Identifier;
}

export namespace Identifier {
  export type AsObject = {
    as: string,
  }
}

export class Fold extends jspb.Message {
  getFieldsList(): Array<string>;
  setFieldsList(value: Array<string>): Fold;
  clearFieldsList(): Fold;
  addFields(value: string, index?: number): Fold;

  getAsList(): Array<string>;
  setAsList(value: Array<string>): Fold;
  clearAsList(): Fold;
  addAs(value: string, index?: number): Fold;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fold.AsObject;
  static toObject(includeInstance: boolean, msg: Fold): Fold.AsObject;
  static serializeBinaryToWriter(message: Fold, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fold;
  static deserializeBinaryFromReader(message: Fold, reader: jspb.BinaryReader): Fold;
}

export namespace Fold {
  export type AsObject = {
    fieldsList: Array<string>,
    asList: Array<string>,
  }
}

export class Sequence extends jspb.Message {
  getStart(): expression_pb.Expression | undefined;
  setStart(value?: expression_pb.Expression): Sequence;
  hasStart(): boolean;
  clearStart(): Sequence;

  getStop(): expression_pb.Expression | undefined;
  setStop(value?: expression_pb.Expression): Sequence;
  hasStop(): boolean;
  clearStop(): Sequence;

  getStep(): expression_pb.Expression | undefined;
  setStep(value?: expression_pb.Expression): Sequence;
  hasStep(): boolean;
  clearStep(): Sequence;

  getAs(): string;
  setAs(value: string): Sequence;
  hasAs(): boolean;
  clearAs(): Sequence;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sequence.AsObject;
  static toObject(includeInstance: boolean, msg: Sequence): Sequence.AsObject;
  static serializeBinaryToWriter(message: Sequence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sequence;
  static deserializeBinaryFromReader(message: Sequence, reader: jspb.BinaryReader): Sequence;
}

export namespace Sequence {
  export type AsObject = {
    start?: expression_pb.Expression.AsObject,
    stop?: expression_pb.Expression.AsObject,
    step?: expression_pb.Expression.AsObject,
    as?: string,
  }

  export enum StepCase { 
    _STEP_NOT_SET = 0,
    STEP = 3,
  }

  export enum AsCase { 
    _AS_NOT_SET = 0,
    AS = 4,
  }
}

export class Transform extends jspb.Message {
  getFilter(): Filter | undefined;
  setFilter(value?: Filter): Transform;
  hasFilter(): boolean;
  clearFilter(): Transform;

  getExtent(): Extent | undefined;
  setExtent(value?: Extent): Transform;
  hasExtent(): boolean;
  clearExtent(): Transform;

  getFormula(): Formula | undefined;
  setFormula(value?: Formula): Transform;
  hasFormula(): boolean;
  clearFormula(): Transform;

  getBin(): Bin | undefined;
  setBin(value?: Bin): Transform;
  hasBin(): boolean;
  clearBin(): Transform;

  getAggregate(): Aggregate | undefined;
  setAggregate(value?: Aggregate): Transform;
  hasAggregate(): boolean;
  clearAggregate(): Transform;

  getCollect(): Collect | undefined;
  setCollect(value?: Collect): Transform;
  hasCollect(): boolean;
  clearCollect(): Transform;

  getTimeunit(): TimeUnit | undefined;
  setTimeunit(value?: TimeUnit): Transform;
  hasTimeunit(): boolean;
  clearTimeunit(): Transform;

  getJoinaggregate(): JoinAggregate | undefined;
  setJoinaggregate(value?: JoinAggregate): Transform;
  hasJoinaggregate(): boolean;
  clearJoinaggregate(): Transform;

  getWindow(): Window | undefined;
  setWindow(value?: Window): Transform;
  hasWindow(): boolean;
  clearWindow(): Transform;

  getProject(): Project | undefined;
  setProject(value?: Project): Transform;
  hasProject(): boolean;
  clearProject(): Transform;

  getStack(): Stack | undefined;
  setStack(value?: Stack): Transform;
  hasStack(): boolean;
  clearStack(): Transform;

  getImpute(): Impute | undefined;
  setImpute(value?: Impute): Transform;
  hasImpute(): boolean;
  clearImpute(): Transform;

  getPivot(): Pivot | undefined;
  setPivot(value?: Pivot): Transform;
  hasPivot(): boolean;
  clearPivot(): Transform;

  getIdentifier(): Identifier | undefined;
  setIdentifier(value?: Identifier): Transform;
  hasIdentifier(): boolean;
  clearIdentifier(): Transform;

  getFold(): Fold | undefined;
  setFold(value?: Fold): Transform;
  hasFold(): boolean;
  clearFold(): Transform;

  getSequence(): Sequence | undefined;
  setSequence(value?: Sequence): Transform;
  hasSequence(): boolean;
  clearSequence(): Transform;

  getTransformKindCase(): Transform.TransformKindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transform.AsObject;
  static toObject(includeInstance: boolean, msg: Transform): Transform.AsObject;
  static serializeBinaryToWriter(message: Transform, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transform;
  static deserializeBinaryFromReader(message: Transform, reader: jspb.BinaryReader): Transform;
}

export namespace Transform {
  export type AsObject = {
    filter?: Filter.AsObject,
    extent?: Extent.AsObject,
    formula?: Formula.AsObject,
    bin?: Bin.AsObject,
    aggregate?: Aggregate.AsObject,
    collect?: Collect.AsObject,
    timeunit?: TimeUnit.AsObject,
    joinaggregate?: JoinAggregate.AsObject,
    window?: Window.AsObject,
    project?: Project.AsObject,
    stack?: Stack.AsObject,
    impute?: Impute.AsObject,
    pivot?: Pivot.AsObject,
    identifier?: Identifier.AsObject,
    fold?: Fold.AsObject,
    sequence?: Sequence.AsObject,
  }

  export enum TransformKindCase { 
    TRANSFORM_KIND_NOT_SET = 0,
    FILTER = 1,
    EXTENT = 2,
    FORMULA = 3,
    BIN = 4,
    AGGREGATE = 5,
    COLLECT = 6,
    TIMEUNIT = 7,
    JOINAGGREGATE = 8,
    WINDOW = 9,
    PROJECT = 10,
    STACK = 11,
    IMPUTE = 12,
    PIVOT = 13,
    IDENTIFIER = 14,
    FOLD = 15,
    SEQUENCE = 16,
  }
}

export class TransformPipeline extends jspb.Message {
  getTransformsList(): Array<Transform>;
  setTransformsList(value: Array<Transform>): TransformPipeline;
  clearTransformsList(): TransformPipeline;
  addTransforms(value?: Transform, index?: number): Transform;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformPipeline.AsObject;
  static toObject(includeInstance: boolean, msg: TransformPipeline): TransformPipeline.AsObject;
  static serializeBinaryToWriter(message: TransformPipeline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformPipeline;
  static deserializeBinaryFromReader(message: TransformPipeline, reader: jspb.BinaryReader): TransformPipeline;
}

export namespace TransformPipeline {
  export type AsObject = {
    transformsList: Array<Transform.AsObject>,
  }
}

export enum SortOrder { 
  DESCENDING = 0,
  ASCENDING = 1,
}
export enum AggregateOp { 
  COUNT = 0,
  VALID = 1,
  MISSING = 2,
  DISTINCT = 3,
  SUM = 4,
  PRODUCT = 5,
  MEAN = 6,
  AVERAGE = 7,
  VARIANCE = 8,
  VARIANCEP = 9,
  STDEV = 10,
  STDEVP = 11,
  STDERR = 12,
  MEDIAN = 13,
  Q1 = 14,
  Q3 = 15,
  CI0 = 16,
  CI1 = 17,
  MIN = 18,
  MAX = 19,
  ARGMIN = 20,
  ARGMAX = 21,
  VALUES = 22,
}
export enum TimeUnitUnit { 
  YEAR = 0,
  QUARTER = 1,
  MONTH = 2,
  DATE = 3,
  WEEK = 4,
  DAY = 5,
  DAYOFYEAR = 6,
  HOURS = 7,
  MINUTES = 8,
  SECONDS = 9,
  MILLISECONDS = 10,
}
export enum TimeUnitTimeZone { 
  LOCAL = 0,
  UTC = 1,
}
export enum WindowOp { 
  ROWNUMBER = 0,
  RANK = 1,
  DENSERANK = 2,
  PERCENTILERANK = 3,
  CUMEDIST = 4,
  NTILE = 5,
  LAG = 6,
  LEAD = 7,
  FIRSTVALUE = 8,
  LASTVALUE = 9,
  NTHVALUE = 10,
  PREVVALUE = 11,
  NEXTVALUE = 12,
}
export enum StackOffset { 
  ZERO = 0,
  CENTER = 1,
  NORMALIZE = 2,
}
export enum ImputeMethod { 
  IMPUTEVALUE = 0,
  IMPUTEMEAN = 1,
  IMPUTEMEDIAN = 2,
  IMPUTEMAX = 3,
  IMPUTEMIN = 4,
}
