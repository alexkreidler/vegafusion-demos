import * as jspb from 'google-protobuf'

import * as expression_pb from './expression_pb';
import * as transforms_pb from './transforms_pb';


export class TaskValue extends jspb.Message {
  getScalar(): Uint8Array | string;
  getScalar_asU8(): Uint8Array;
  getScalar_asB64(): string;
  setScalar(value: Uint8Array | string): TaskValue;

  getTable(): Uint8Array | string;
  getTable_asU8(): Uint8Array;
  getTable_asB64(): string;
  setTable(value: Uint8Array | string): TaskValue;

  getDataCase(): TaskValue.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskValue.AsObject;
  static toObject(includeInstance: boolean, msg: TaskValue): TaskValue.AsObject;
  static serializeBinaryToWriter(message: TaskValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskValue;
  static deserializeBinaryFromReader(message: TaskValue, reader: jspb.BinaryReader): TaskValue;
}

export namespace TaskValue {
  export type AsObject = {
    scalar: Uint8Array | string,
    table: Uint8Array | string,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    SCALAR = 1,
    TABLE = 2,
  }
}

export class Variable extends jspb.Message {
  getName(): string;
  setName(value: string): Variable;

  getNamespace(): VariableNamespace;
  setNamespace(value: VariableNamespace): Variable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Variable.AsObject;
  static toObject(includeInstance: boolean, msg: Variable): Variable.AsObject;
  static serializeBinaryToWriter(message: Variable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Variable;
  static deserializeBinaryFromReader(message: Variable, reader: jspb.BinaryReader): Variable;
}

export namespace Variable {
  export type AsObject = {
    name: string,
    namespace: VariableNamespace,
  }
}

export class ParseFieldSpec extends jspb.Message {
  getName(): string;
  setName(value: string): ParseFieldSpec;

  getDatatype(): string;
  setDatatype(value: string): ParseFieldSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParseFieldSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ParseFieldSpec): ParseFieldSpec.AsObject;
  static serializeBinaryToWriter(message: ParseFieldSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParseFieldSpec;
  static deserializeBinaryFromReader(message: ParseFieldSpec, reader: jspb.BinaryReader): ParseFieldSpec;
}

export namespace ParseFieldSpec {
  export type AsObject = {
    name: string,
    datatype: string,
  }
}

export class ParseFieldSpecs extends jspb.Message {
  getSpecsList(): Array<ParseFieldSpec>;
  setSpecsList(value: Array<ParseFieldSpec>): ParseFieldSpecs;
  clearSpecsList(): ParseFieldSpecs;
  addSpecs(value?: ParseFieldSpec, index?: number): ParseFieldSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParseFieldSpecs.AsObject;
  static toObject(includeInstance: boolean, msg: ParseFieldSpecs): ParseFieldSpecs.AsObject;
  static serializeBinaryToWriter(message: ParseFieldSpecs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParseFieldSpecs;
  static deserializeBinaryFromReader(message: ParseFieldSpecs, reader: jspb.BinaryReader): ParseFieldSpecs;
}

export namespace ParseFieldSpecs {
  export type AsObject = {
    specsList: Array<ParseFieldSpec.AsObject>,
  }
}

export class ScanUrlFormat extends jspb.Message {
  getType(): string;
  setType(value: string): ScanUrlFormat;
  hasType(): boolean;
  clearType(): ScanUrlFormat;

  getString(): string;
  setString(value: string): ScanUrlFormat;

  getObject(): ParseFieldSpecs | undefined;
  setObject(value?: ParseFieldSpecs): ScanUrlFormat;
  hasObject(): boolean;
  clearObject(): ScanUrlFormat;

  getProperty(): string;
  setProperty(value: string): ScanUrlFormat;
  hasProperty(): boolean;
  clearProperty(): ScanUrlFormat;

  getHeaderList(): Array<string>;
  setHeaderList(value: Array<string>): ScanUrlFormat;
  clearHeaderList(): ScanUrlFormat;
  addHeader(value: string, index?: number): ScanUrlFormat;

  getDelimiter(): string;
  setDelimiter(value: string): ScanUrlFormat;
  hasDelimiter(): boolean;
  clearDelimiter(): ScanUrlFormat;

  getFeature(): string;
  setFeature(value: string): ScanUrlFormat;
  hasFeature(): boolean;
  clearFeature(): ScanUrlFormat;

  getParseCase(): ScanUrlFormat.ParseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScanUrlFormat.AsObject;
  static toObject(includeInstance: boolean, msg: ScanUrlFormat): ScanUrlFormat.AsObject;
  static serializeBinaryToWriter(message: ScanUrlFormat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScanUrlFormat;
  static deserializeBinaryFromReader(message: ScanUrlFormat, reader: jspb.BinaryReader): ScanUrlFormat;
}

export namespace ScanUrlFormat {
  export type AsObject = {
    type?: string,
    string: string,
    object?: ParseFieldSpecs.AsObject,
    property?: string,
    headerList: Array<string>,
    delimiter?: string,
    feature?: string,
  }

  export enum ParseCase { 
    PARSE_NOT_SET = 0,
    STRING = 2,
    OBJECT = 3,
  }

  export enum TypeCase { 
    _TYPE_NOT_SET = 0,
    TYPE = 1,
  }

  export enum PropertyCase { 
    _PROPERTY_NOT_SET = 0,
    PROPERTY = 4,
  }

  export enum DelimiterCase { 
    _DELIMITER_NOT_SET = 0,
    DELIMITER = 6,
  }

  export enum FeatureCase { 
    _FEATURE_NOT_SET = 0,
    FEATURE = 7,
  }
}

export class DataUrlTask extends jspb.Message {
  getString(): string;
  setString(value: string): DataUrlTask;

  getExpr(): expression_pb.Expression | undefined;
  setExpr(value?: expression_pb.Expression): DataUrlTask;
  hasExpr(): boolean;
  clearExpr(): DataUrlTask;

  getBatchSize(): number;
  setBatchSize(value: number): DataUrlTask;

  getFormatType(): ScanUrlFormat | undefined;
  setFormatType(value?: ScanUrlFormat): DataUrlTask;
  hasFormatType(): boolean;
  clearFormatType(): DataUrlTask;

  getPipeline(): transforms_pb.TransformPipeline | undefined;
  setPipeline(value?: transforms_pb.TransformPipeline): DataUrlTask;
  hasPipeline(): boolean;
  clearPipeline(): DataUrlTask;

  getUrlCase(): DataUrlTask.UrlCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataUrlTask.AsObject;
  static toObject(includeInstance: boolean, msg: DataUrlTask): DataUrlTask.AsObject;
  static serializeBinaryToWriter(message: DataUrlTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataUrlTask;
  static deserializeBinaryFromReader(message: DataUrlTask, reader: jspb.BinaryReader): DataUrlTask;
}

export namespace DataUrlTask {
  export type AsObject = {
    string: string,
    expr?: expression_pb.Expression.AsObject,
    batchSize: number,
    formatType?: ScanUrlFormat.AsObject,
    pipeline?: transforms_pb.TransformPipeline.AsObject,
  }

  export enum UrlCase { 
    URL_NOT_SET = 0,
    STRING = 1,
    EXPR = 2,
  }
}

export class DataValuesTask extends jspb.Message {
  getValues(): Uint8Array | string;
  getValues_asU8(): Uint8Array;
  getValues_asB64(): string;
  setValues(value: Uint8Array | string): DataValuesTask;

  getFormatType(): ScanUrlFormat | undefined;
  setFormatType(value?: ScanUrlFormat): DataValuesTask;
  hasFormatType(): boolean;
  clearFormatType(): DataValuesTask;

  getPipeline(): transforms_pb.TransformPipeline | undefined;
  setPipeline(value?: transforms_pb.TransformPipeline): DataValuesTask;
  hasPipeline(): boolean;
  clearPipeline(): DataValuesTask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataValuesTask.AsObject;
  static toObject(includeInstance: boolean, msg: DataValuesTask): DataValuesTask.AsObject;
  static serializeBinaryToWriter(message: DataValuesTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataValuesTask;
  static deserializeBinaryFromReader(message: DataValuesTask, reader: jspb.BinaryReader): DataValuesTask;
}

export namespace DataValuesTask {
  export type AsObject = {
    values: Uint8Array | string,
    formatType?: ScanUrlFormat.AsObject,
    pipeline?: transforms_pb.TransformPipeline.AsObject,
  }
}

export class DataSourceTask extends jspb.Message {
  getSource(): string;
  setSource(value: string): DataSourceTask;

  getPipeline(): transforms_pb.TransformPipeline | undefined;
  setPipeline(value?: transforms_pb.TransformPipeline): DataSourceTask;
  hasPipeline(): boolean;
  clearPipeline(): DataSourceTask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSourceTask.AsObject;
  static toObject(includeInstance: boolean, msg: DataSourceTask): DataSourceTask.AsObject;
  static serializeBinaryToWriter(message: DataSourceTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSourceTask;
  static deserializeBinaryFromReader(message: DataSourceTask, reader: jspb.BinaryReader): DataSourceTask;
}

export namespace DataSourceTask {
  export type AsObject = {
    source: string,
    pipeline?: transforms_pb.TransformPipeline.AsObject,
  }
}

export class SignalTask extends jspb.Message {
  getExpr(): expression_pb.Expression | undefined;
  setExpr(value?: expression_pb.Expression): SignalTask;
  hasExpr(): boolean;
  clearExpr(): SignalTask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignalTask.AsObject;
  static toObject(includeInstance: boolean, msg: SignalTask): SignalTask.AsObject;
  static serializeBinaryToWriter(message: SignalTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignalTask;
  static deserializeBinaryFromReader(message: SignalTask, reader: jspb.BinaryReader): SignalTask;
}

export namespace SignalTask {
  export type AsObject = {
    expr?: expression_pb.Expression.AsObject,
  }
}

export class TzConfig extends jspb.Message {
  getLocalTz(): string;
  setLocalTz(value: string): TzConfig;

  getDefaultInputTz(): string;
  setDefaultInputTz(value: string): TzConfig;
  hasDefaultInputTz(): boolean;
  clearDefaultInputTz(): TzConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TzConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TzConfig): TzConfig.AsObject;
  static serializeBinaryToWriter(message: TzConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TzConfig;
  static deserializeBinaryFromReader(message: TzConfig, reader: jspb.BinaryReader): TzConfig;
}

export namespace TzConfig {
  export type AsObject = {
    localTz: string,
    defaultInputTz?: string,
  }

  export enum DefaultInputTzCase { 
    _DEFAULT_INPUT_TZ_NOT_SET = 0,
    DEFAULT_INPUT_TZ = 2,
  }
}

export class Task extends jspb.Message {
  getVariable(): Variable | undefined;
  setVariable(value?: Variable): Task;
  hasVariable(): boolean;
  clearVariable(): Task;

  getScopeList(): Array<number>;
  setScopeList(value: Array<number>): Task;
  clearScopeList(): Task;
  addScope(value: number, index?: number): Task;

  getValue(): TaskValue | undefined;
  setValue(value?: TaskValue): Task;
  hasValue(): boolean;
  clearValue(): Task;

  getDataValues(): DataValuesTask | undefined;
  setDataValues(value?: DataValuesTask): Task;
  hasDataValues(): boolean;
  clearDataValues(): Task;

  getDataUrl(): DataUrlTask | undefined;
  setDataUrl(value?: DataUrlTask): Task;
  hasDataUrl(): boolean;
  clearDataUrl(): Task;

  getDataSource(): DataSourceTask | undefined;
  setDataSource(value?: DataSourceTask): Task;
  hasDataSource(): boolean;
  clearDataSource(): Task;

  getSignal(): SignalTask | undefined;
  setSignal(value?: SignalTask): Task;
  hasSignal(): boolean;
  clearSignal(): Task;

  getTzConfig(): TzConfig | undefined;
  setTzConfig(value?: TzConfig): Task;
  hasTzConfig(): boolean;
  clearTzConfig(): Task;

  getTaskKindCase(): Task.TaskKindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Task.AsObject;
  static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
  static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Task;
  static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
  export type AsObject = {
    variable?: Variable.AsObject,
    scopeList: Array<number>,
    value?: TaskValue.AsObject,
    dataValues?: DataValuesTask.AsObject,
    dataUrl?: DataUrlTask.AsObject,
    dataSource?: DataSourceTask.AsObject,
    signal?: SignalTask.AsObject,
    tzConfig?: TzConfig.AsObject,
  }

  export enum TaskKindCase { 
    TASK_KIND_NOT_SET = 0,
    VALUE = 3,
    DATA_VALUES = 4,
    DATA_URL = 5,
    DATA_SOURCE = 6,
    SIGNAL = 7,
  }
}

export class IncomingEdge extends jspb.Message {
  getSource(): number;
  setSource(value: number): IncomingEdge;

  getOutput(): number;
  setOutput(value: number): IncomingEdge;
  hasOutput(): boolean;
  clearOutput(): IncomingEdge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncomingEdge.AsObject;
  static toObject(includeInstance: boolean, msg: IncomingEdge): IncomingEdge.AsObject;
  static serializeBinaryToWriter(message: IncomingEdge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncomingEdge;
  static deserializeBinaryFromReader(message: IncomingEdge, reader: jspb.BinaryReader): IncomingEdge;
}

export namespace IncomingEdge {
  export type AsObject = {
    source: number,
    output?: number,
  }

  export enum OutputCase { 
    _OUTPUT_NOT_SET = 0,
    OUTPUT = 2,
  }
}

export class OutgoingEdge extends jspb.Message {
  getTarget(): number;
  setTarget(value: number): OutgoingEdge;

  getPropagate(): boolean;
  setPropagate(value: boolean): OutgoingEdge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutgoingEdge.AsObject;
  static toObject(includeInstance: boolean, msg: OutgoingEdge): OutgoingEdge.AsObject;
  static serializeBinaryToWriter(message: OutgoingEdge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutgoingEdge;
  static deserializeBinaryFromReader(message: OutgoingEdge, reader: jspb.BinaryReader): OutgoingEdge;
}

export namespace OutgoingEdge {
  export type AsObject = {
    target: number,
    propagate: boolean,
  }
}

export class TaskNode extends jspb.Message {
  getTask(): Task | undefined;
  setTask(value?: Task): TaskNode;
  hasTask(): boolean;
  clearTask(): TaskNode;

  getIncomingList(): Array<IncomingEdge>;
  setIncomingList(value: Array<IncomingEdge>): TaskNode;
  clearIncomingList(): TaskNode;
  addIncoming(value?: IncomingEdge, index?: number): IncomingEdge;

  getOutgoingList(): Array<OutgoingEdge>;
  setOutgoingList(value: Array<OutgoingEdge>): TaskNode;
  clearOutgoingList(): TaskNode;
  addOutgoing(value?: OutgoingEdge, index?: number): OutgoingEdge;

  getIdFingerprint(): number;
  setIdFingerprint(value: number): TaskNode;

  getStateFingerprint(): number;
  setStateFingerprint(value: number): TaskNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskNode.AsObject;
  static toObject(includeInstance: boolean, msg: TaskNode): TaskNode.AsObject;
  static serializeBinaryToWriter(message: TaskNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskNode;
  static deserializeBinaryFromReader(message: TaskNode, reader: jspb.BinaryReader): TaskNode;
}

export namespace TaskNode {
  export type AsObject = {
    task?: Task.AsObject,
    incomingList: Array<IncomingEdge.AsObject>,
    outgoingList: Array<OutgoingEdge.AsObject>,
    idFingerprint: number,
    stateFingerprint: number,
  }
}

export class TaskGraph extends jspb.Message {
  getNodesList(): Array<TaskNode>;
  setNodesList(value: Array<TaskNode>): TaskGraph;
  clearNodesList(): TaskGraph;
  addNodes(value?: TaskNode, index?: number): TaskNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskGraph.AsObject;
  static toObject(includeInstance: boolean, msg: TaskGraph): TaskGraph.AsObject;
  static serializeBinaryToWriter(message: TaskGraph, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskGraph;
  static deserializeBinaryFromReader(message: TaskGraph, reader: jspb.BinaryReader): TaskGraph;
}

export namespace TaskGraph {
  export type AsObject = {
    nodesList: Array<TaskNode.AsObject>,
  }
}

export class NodeValueIndex extends jspb.Message {
  getNodeIndex(): number;
  setNodeIndex(value: number): NodeValueIndex;

  getOutputIndex(): number;
  setOutputIndex(value: number): NodeValueIndex;
  hasOutputIndex(): boolean;
  clearOutputIndex(): NodeValueIndex;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeValueIndex.AsObject;
  static toObject(includeInstance: boolean, msg: NodeValueIndex): NodeValueIndex.AsObject;
  static serializeBinaryToWriter(message: NodeValueIndex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeValueIndex;
  static deserializeBinaryFromReader(message: NodeValueIndex, reader: jspb.BinaryReader): NodeValueIndex;
}

export namespace NodeValueIndex {
  export type AsObject = {
    nodeIndex: number,
    outputIndex?: number,
  }

  export enum OutputIndexCase { 
    _OUTPUT_INDEX_NOT_SET = 0,
    OUTPUT_INDEX = 2,
  }
}

export class TaskGraphValueRequest extends jspb.Message {
  getTaskGraph(): TaskGraph | undefined;
  setTaskGraph(value?: TaskGraph): TaskGraphValueRequest;
  hasTaskGraph(): boolean;
  clearTaskGraph(): TaskGraphValueRequest;

  getIndicesList(): Array<NodeValueIndex>;
  setIndicesList(value: Array<NodeValueIndex>): TaskGraphValueRequest;
  clearIndicesList(): TaskGraphValueRequest;
  addIndices(value?: NodeValueIndex, index?: number): NodeValueIndex;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskGraphValueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskGraphValueRequest): TaskGraphValueRequest.AsObject;
  static serializeBinaryToWriter(message: TaskGraphValueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskGraphValueRequest;
  static deserializeBinaryFromReader(message: TaskGraphValueRequest, reader: jspb.BinaryReader): TaskGraphValueRequest;
}

export namespace TaskGraphValueRequest {
  export type AsObject = {
    taskGraph?: TaskGraph.AsObject,
    indicesList: Array<NodeValueIndex.AsObject>,
  }
}

export class ResponseTaskValue extends jspb.Message {
  getVariable(): Variable | undefined;
  setVariable(value?: Variable): ResponseTaskValue;
  hasVariable(): boolean;
  clearVariable(): ResponseTaskValue;

  getScopeList(): Array<number>;
  setScopeList(value: Array<number>): ResponseTaskValue;
  clearScopeList(): ResponseTaskValue;
  addScope(value: number, index?: number): ResponseTaskValue;

  getValue(): TaskValue | undefined;
  setValue(value?: TaskValue): ResponseTaskValue;
  hasValue(): boolean;
  clearValue(): ResponseTaskValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseTaskValue.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseTaskValue): ResponseTaskValue.AsObject;
  static serializeBinaryToWriter(message: ResponseTaskValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseTaskValue;
  static deserializeBinaryFromReader(message: ResponseTaskValue, reader: jspb.BinaryReader): ResponseTaskValue;
}

export namespace ResponseTaskValue {
  export type AsObject = {
    variable?: Variable.AsObject,
    scopeList: Array<number>,
    value?: TaskValue.AsObject,
  }
}

export class TaskGraphValueResponse extends jspb.Message {
  getResponseValuesList(): Array<ResponseTaskValue>;
  setResponseValuesList(value: Array<ResponseTaskValue>): TaskGraphValueResponse;
  clearResponseValuesList(): TaskGraphValueResponse;
  addResponseValues(value?: ResponseTaskValue, index?: number): ResponseTaskValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskGraphValueResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TaskGraphValueResponse): TaskGraphValueResponse.AsObject;
  static serializeBinaryToWriter(message: TaskGraphValueResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskGraphValueResponse;
  static deserializeBinaryFromReader(message: TaskGraphValueResponse, reader: jspb.BinaryReader): TaskGraphValueResponse;
}

export namespace TaskGraphValueResponse {
  export type AsObject = {
    responseValuesList: Array<ResponseTaskValue.AsObject>,
  }
}

export enum VariableNamespace { 
  SIGNAL = 0,
  DATA = 1,
  SCALE = 2,
}
