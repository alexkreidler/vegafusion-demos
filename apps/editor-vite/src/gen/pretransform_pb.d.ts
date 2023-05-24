import * as jspb from 'google-protobuf'

import * as tasks_pb from './tasks_pb';


export class PreTransformSpecOpts extends jspb.Message {
  getRowLimit(): number;
  setRowLimit(value: number): PreTransformSpecOpts;
  hasRowLimit(): boolean;
  clearRowLimit(): PreTransformSpecOpts;

  getInlineDatasetsList(): Array<PreTransformInlineDataset>;
  setInlineDatasetsList(value: Array<PreTransformInlineDataset>): PreTransformSpecOpts;
  clearInlineDatasetsList(): PreTransformSpecOpts;
  addInlineDatasets(value?: PreTransformInlineDataset, index?: number): PreTransformInlineDataset;

  getPreserveInteractivity(): boolean;
  setPreserveInteractivity(value: boolean): PreTransformSpecOpts;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreTransformSpecOpts.AsObject;
  static toObject(includeInstance: boolean, msg: PreTransformSpecOpts): PreTransformSpecOpts.AsObject;
  static serializeBinaryToWriter(message: PreTransformSpecOpts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreTransformSpecOpts;
  static deserializeBinaryFromReader(message: PreTransformSpecOpts, reader: jspb.BinaryReader): PreTransformSpecOpts;
}

export namespace PreTransformSpecOpts {
  export type AsObject = {
    rowLimit?: number,
    inlineDatasetsList: Array<PreTransformInlineDataset.AsObject>,
    preserveInteractivity: boolean,
  }

  export enum RowLimitCase { 
    _ROW_LIMIT_NOT_SET = 0,
    ROW_LIMIT = 1,
  }
}

export class PreTransformSpecRequest extends jspb.Message {
  getSpec(): string;
  setSpec(value: string): PreTransformSpecRequest;

  getLocalTz(): string;
  setLocalTz(value: string): PreTransformSpecRequest;

  getOutputTz(): string;
  setOutputTz(value: string): PreTransformSpecRequest;
  hasOutputTz(): boolean;
  clearOutputTz(): PreTransformSpecRequest;

  getOpts(): PreTransformSpecOpts | undefined;
  setOpts(value?: PreTransformSpecOpts): PreTransformSpecRequest;
  hasOpts(): boolean;
  clearOpts(): PreTransformSpecRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreTransformSpecRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PreTransformSpecRequest): PreTransformSpecRequest.AsObject;
  static serializeBinaryToWriter(message: PreTransformSpecRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreTransformSpecRequest;
  static deserializeBinaryFromReader(message: PreTransformSpecRequest, reader: jspb.BinaryReader): PreTransformSpecRequest;
}

export namespace PreTransformSpecRequest {
  export type AsObject = {
    spec: string,
    localTz: string,
    outputTz?: string,
    opts?: PreTransformSpecOpts.AsObject,
  }

  export enum OutputTzCase { 
    _OUTPUT_TZ_NOT_SET = 0,
    OUTPUT_TZ = 3,
  }
}

export class PreTransformSpecResponse extends jspb.Message {
  getSpec(): string;
  setSpec(value: string): PreTransformSpecResponse;

  getWarningsList(): Array<PreTransformSpecWarning>;
  setWarningsList(value: Array<PreTransformSpecWarning>): PreTransformSpecResponse;
  clearWarningsList(): PreTransformSpecResponse;
  addWarnings(value?: PreTransformSpecWarning, index?: number): PreTransformSpecWarning;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreTransformSpecResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PreTransformSpecResponse): PreTransformSpecResponse.AsObject;
  static serializeBinaryToWriter(message: PreTransformSpecResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreTransformSpecResponse;
  static deserializeBinaryFromReader(message: PreTransformSpecResponse, reader: jspb.BinaryReader): PreTransformSpecResponse;
}

export namespace PreTransformSpecResponse {
  export type AsObject = {
    spec: string,
    warningsList: Array<PreTransformSpecWarning.AsObject>,
  }
}

export class PreTransformSpecWarning extends jspb.Message {
  getRowLimit(): PreTransformRowLimitWarning | undefined;
  setRowLimit(value?: PreTransformRowLimitWarning): PreTransformSpecWarning;
  hasRowLimit(): boolean;
  clearRowLimit(): PreTransformSpecWarning;

  getBrokenInteractivity(): PreTransformBrokenInteractivityWarning | undefined;
  setBrokenInteractivity(value?: PreTransformBrokenInteractivityWarning): PreTransformSpecWarning;
  hasBrokenInteractivity(): boolean;
  clearBrokenInteractivity(): PreTransformSpecWarning;

  getUnsupported(): PreTransformUnsupportedWarning | undefined;
  setUnsupported(value?: PreTransformUnsupportedWarning): PreTransformSpecWarning;
  hasUnsupported(): boolean;
  clearUnsupported(): PreTransformSpecWarning;

  getPlanner(): PlannerWarning | undefined;
  setPlanner(value?: PlannerWarning): PreTransformSpecWarning;
  hasPlanner(): boolean;
  clearPlanner(): PreTransformSpecWarning;

  getWarningTypeCase(): PreTransformSpecWarning.WarningTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreTransformSpecWarning.AsObject;
  static toObject(includeInstance: boolean, msg: PreTransformSpecWarning): PreTransformSpecWarning.AsObject;
  static serializeBinaryToWriter(message: PreTransformSpecWarning, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreTransformSpecWarning;
  static deserializeBinaryFromReader(message: PreTransformSpecWarning, reader: jspb.BinaryReader): PreTransformSpecWarning;
}

export namespace PreTransformSpecWarning {
  export type AsObject = {
    rowLimit?: PreTransformRowLimitWarning.AsObject,
    brokenInteractivity?: PreTransformBrokenInteractivityWarning.AsObject,
    unsupported?: PreTransformUnsupportedWarning.AsObject,
    planner?: PlannerWarning.AsObject,
  }

  export enum WarningTypeCase { 
    WARNING_TYPE_NOT_SET = 0,
    ROW_LIMIT = 1,
    BROKEN_INTERACTIVITY = 2,
    UNSUPPORTED = 3,
    PLANNER = 4,
  }
}

export class PreTransformRowLimitWarning extends jspb.Message {
  getDatasetsList(): Array<tasks_pb.Variable>;
  setDatasetsList(value: Array<tasks_pb.Variable>): PreTransformRowLimitWarning;
  clearDatasetsList(): PreTransformRowLimitWarning;
  addDatasets(value?: tasks_pb.Variable, index?: number): tasks_pb.Variable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreTransformRowLimitWarning.AsObject;
  static toObject(includeInstance: boolean, msg: PreTransformRowLimitWarning): PreTransformRowLimitWarning.AsObject;
  static serializeBinaryToWriter(message: PreTransformRowLimitWarning, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreTransformRowLimitWarning;
  static deserializeBinaryFromReader(message: PreTransformRowLimitWarning, reader: jspb.BinaryReader): PreTransformRowLimitWarning;
}

export namespace PreTransformRowLimitWarning {
  export type AsObject = {
    datasetsList: Array<tasks_pb.Variable.AsObject>,
  }
}

export class PreTransformBrokenInteractivityWarning extends jspb.Message {
  getVarsList(): Array<tasks_pb.Variable>;
  setVarsList(value: Array<tasks_pb.Variable>): PreTransformBrokenInteractivityWarning;
  clearVarsList(): PreTransformBrokenInteractivityWarning;
  addVars(value?: tasks_pb.Variable, index?: number): tasks_pb.Variable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreTransformBrokenInteractivityWarning.AsObject;
  static toObject(includeInstance: boolean, msg: PreTransformBrokenInteractivityWarning): PreTransformBrokenInteractivityWarning.AsObject;
  static serializeBinaryToWriter(message: PreTransformBrokenInteractivityWarning, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreTransformBrokenInteractivityWarning;
  static deserializeBinaryFromReader(message: PreTransformBrokenInteractivityWarning, reader: jspb.BinaryReader): PreTransformBrokenInteractivityWarning;
}

export namespace PreTransformBrokenInteractivityWarning {
  export type AsObject = {
    varsList: Array<tasks_pb.Variable.AsObject>,
  }
}

export class PreTransformUnsupportedWarning extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreTransformUnsupportedWarning.AsObject;
  static toObject(includeInstance: boolean, msg: PreTransformUnsupportedWarning): PreTransformUnsupportedWarning.AsObject;
  static serializeBinaryToWriter(message: PreTransformUnsupportedWarning, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreTransformUnsupportedWarning;
  static deserializeBinaryFromReader(message: PreTransformUnsupportedWarning, reader: jspb.BinaryReader): PreTransformUnsupportedWarning;
}

export namespace PreTransformUnsupportedWarning {
  export type AsObject = {
  }
}

export class PreTransformVariable extends jspb.Message {
  getVariable(): tasks_pb.Variable | undefined;
  setVariable(value?: tasks_pb.Variable): PreTransformVariable;
  hasVariable(): boolean;
  clearVariable(): PreTransformVariable;

  getScopeList(): Array<number>;
  setScopeList(value: Array<number>): PreTransformVariable;
  clearScopeList(): PreTransformVariable;
  addScope(value: number, index?: number): PreTransformVariable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreTransformVariable.AsObject;
  static toObject(includeInstance: boolean, msg: PreTransformVariable): PreTransformVariable.AsObject;
  static serializeBinaryToWriter(message: PreTransformVariable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreTransformVariable;
  static deserializeBinaryFromReader(message: PreTransformVariable, reader: jspb.BinaryReader): PreTransformVariable;
}

export namespace PreTransformVariable {
  export type AsObject = {
    variable?: tasks_pb.Variable.AsObject,
    scopeList: Array<number>,
  }
}

export class PreTransformValuesOpts extends jspb.Message {
  getVariablesList(): Array<PreTransformVariable>;
  setVariablesList(value: Array<PreTransformVariable>): PreTransformValuesOpts;
  clearVariablesList(): PreTransformValuesOpts;
  addVariables(value?: PreTransformVariable, index?: number): PreTransformVariable;

  getInlineDatasetsList(): Array<PreTransformInlineDataset>;
  setInlineDatasetsList(value: Array<PreTransformInlineDataset>): PreTransformValuesOpts;
  clearInlineDatasetsList(): PreTransformValuesOpts;
  addInlineDatasets(value?: PreTransformInlineDataset, index?: number): PreTransformInlineDataset;

  getRowLimit(): number;
  setRowLimit(value: number): PreTransformValuesOpts;
  hasRowLimit(): boolean;
  clearRowLimit(): PreTransformValuesOpts;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreTransformValuesOpts.AsObject;
  static toObject(includeInstance: boolean, msg: PreTransformValuesOpts): PreTransformValuesOpts.AsObject;
  static serializeBinaryToWriter(message: PreTransformValuesOpts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreTransformValuesOpts;
  static deserializeBinaryFromReader(message: PreTransformValuesOpts, reader: jspb.BinaryReader): PreTransformValuesOpts;
}

export namespace PreTransformValuesOpts {
  export type AsObject = {
    variablesList: Array<PreTransformVariable.AsObject>,
    inlineDatasetsList: Array<PreTransformInlineDataset.AsObject>,
    rowLimit?: number,
  }

  export enum RowLimitCase { 
    _ROW_LIMIT_NOT_SET = 0,
    ROW_LIMIT = 3,
  }
}

export class PreTransformValuesRequest extends jspb.Message {
  getSpec(): string;
  setSpec(value: string): PreTransformValuesRequest;

  getLocalTz(): string;
  setLocalTz(value: string): PreTransformValuesRequest;

  getDefaultInputTz(): string;
  setDefaultInputTz(value: string): PreTransformValuesRequest;
  hasDefaultInputTz(): boolean;
  clearDefaultInputTz(): PreTransformValuesRequest;

  getOpts(): PreTransformValuesOpts | undefined;
  setOpts(value?: PreTransformValuesOpts): PreTransformValuesRequest;
  hasOpts(): boolean;
  clearOpts(): PreTransformValuesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreTransformValuesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PreTransformValuesRequest): PreTransformValuesRequest.AsObject;
  static serializeBinaryToWriter(message: PreTransformValuesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreTransformValuesRequest;
  static deserializeBinaryFromReader(message: PreTransformValuesRequest, reader: jspb.BinaryReader): PreTransformValuesRequest;
}

export namespace PreTransformValuesRequest {
  export type AsObject = {
    spec: string,
    localTz: string,
    defaultInputTz?: string,
    opts?: PreTransformValuesOpts.AsObject,
  }

  export enum DefaultInputTzCase { 
    _DEFAULT_INPUT_TZ_NOT_SET = 0,
    DEFAULT_INPUT_TZ = 3,
  }
}

export class PreTransformValuesResponse extends jspb.Message {
  getValuesList(): Array<tasks_pb.ResponseTaskValue>;
  setValuesList(value: Array<tasks_pb.ResponseTaskValue>): PreTransformValuesResponse;
  clearValuesList(): PreTransformValuesResponse;
  addValues(value?: tasks_pb.ResponseTaskValue, index?: number): tasks_pb.ResponseTaskValue;

  getWarningsList(): Array<PreTransformValuesWarning>;
  setWarningsList(value: Array<PreTransformValuesWarning>): PreTransformValuesResponse;
  clearWarningsList(): PreTransformValuesResponse;
  addWarnings(value?: PreTransformValuesWarning, index?: number): PreTransformValuesWarning;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreTransformValuesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PreTransformValuesResponse): PreTransformValuesResponse.AsObject;
  static serializeBinaryToWriter(message: PreTransformValuesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreTransformValuesResponse;
  static deserializeBinaryFromReader(message: PreTransformValuesResponse, reader: jspb.BinaryReader): PreTransformValuesResponse;
}

export namespace PreTransformValuesResponse {
  export type AsObject = {
    valuesList: Array<tasks_pb.ResponseTaskValue.AsObject>,
    warningsList: Array<PreTransformValuesWarning.AsObject>,
  }
}

export class PreTransformValuesWarning extends jspb.Message {
  getRowLimit(): PreTransformRowLimitWarning | undefined;
  setRowLimit(value?: PreTransformRowLimitWarning): PreTransformValuesWarning;
  hasRowLimit(): boolean;
  clearRowLimit(): PreTransformValuesWarning;

  getPlanner(): PlannerWarning | undefined;
  setPlanner(value?: PlannerWarning): PreTransformValuesWarning;
  hasPlanner(): boolean;
  clearPlanner(): PreTransformValuesWarning;

  getWarningTypeCase(): PreTransformValuesWarning.WarningTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreTransformValuesWarning.AsObject;
  static toObject(includeInstance: boolean, msg: PreTransformValuesWarning): PreTransformValuesWarning.AsObject;
  static serializeBinaryToWriter(message: PreTransformValuesWarning, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreTransformValuesWarning;
  static deserializeBinaryFromReader(message: PreTransformValuesWarning, reader: jspb.BinaryReader): PreTransformValuesWarning;
}

export namespace PreTransformValuesWarning {
  export type AsObject = {
    rowLimit?: PreTransformRowLimitWarning.AsObject,
    planner?: PlannerWarning.AsObject,
  }

  export enum WarningTypeCase { 
    WARNING_TYPE_NOT_SET = 0,
    ROW_LIMIT = 1,
    PLANNER = 2,
  }
}

export class PreTransformInlineDataset extends jspb.Message {
  getName(): string;
  setName(value: string): PreTransformInlineDataset;

  getTable(): Uint8Array | string;
  getTable_asU8(): Uint8Array;
  getTable_asB64(): string;
  setTable(value: Uint8Array | string): PreTransformInlineDataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreTransformInlineDataset.AsObject;
  static toObject(includeInstance: boolean, msg: PreTransformInlineDataset): PreTransformInlineDataset.AsObject;
  static serializeBinaryToWriter(message: PreTransformInlineDataset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreTransformInlineDataset;
  static deserializeBinaryFromReader(message: PreTransformInlineDataset, reader: jspb.BinaryReader): PreTransformInlineDataset;
}

export namespace PreTransformInlineDataset {
  export type AsObject = {
    name: string,
    table: Uint8Array | string,
  }
}

export class PlannerWarning extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): PlannerWarning;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlannerWarning.AsObject;
  static toObject(includeInstance: boolean, msg: PlannerWarning): PlannerWarning.AsObject;
  static serializeBinaryToWriter(message: PlannerWarning, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlannerWarning;
  static deserializeBinaryFromReader(message: PlannerWarning, reader: jspb.BinaryReader): PlannerWarning;
}

export namespace PlannerWarning {
  export type AsObject = {
    message: string,
  }
}

export class PreTransformExtractDataset extends jspb.Message {
  getName(): string;
  setName(value: string): PreTransformExtractDataset;

  getScopeList(): Array<number>;
  setScopeList(value: Array<number>): PreTransformExtractDataset;
  clearScopeList(): PreTransformExtractDataset;
  addScope(value: number, index?: number): PreTransformExtractDataset;

  getTable(): Uint8Array | string;
  getTable_asU8(): Uint8Array;
  getTable_asB64(): string;
  setTable(value: Uint8Array | string): PreTransformExtractDataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreTransformExtractDataset.AsObject;
  static toObject(includeInstance: boolean, msg: PreTransformExtractDataset): PreTransformExtractDataset.AsObject;
  static serializeBinaryToWriter(message: PreTransformExtractDataset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreTransformExtractDataset;
  static deserializeBinaryFromReader(message: PreTransformExtractDataset, reader: jspb.BinaryReader): PreTransformExtractDataset;
}

export namespace PreTransformExtractDataset {
  export type AsObject = {
    name: string,
    scopeList: Array<number>,
    table: Uint8Array | string,
  }
}

export class PreTransformExtractWarning extends jspb.Message {
  getPlanner(): PlannerWarning | undefined;
  setPlanner(value?: PlannerWarning): PreTransformExtractWarning;
  hasPlanner(): boolean;
  clearPlanner(): PreTransformExtractWarning;

  getWarningTypeCase(): PreTransformExtractWarning.WarningTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreTransformExtractWarning.AsObject;
  static toObject(includeInstance: boolean, msg: PreTransformExtractWarning): PreTransformExtractWarning.AsObject;
  static serializeBinaryToWriter(message: PreTransformExtractWarning, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreTransformExtractWarning;
  static deserializeBinaryFromReader(message: PreTransformExtractWarning, reader: jspb.BinaryReader): PreTransformExtractWarning;
}

export namespace PreTransformExtractWarning {
  export type AsObject = {
    planner?: PlannerWarning.AsObject,
  }

  export enum WarningTypeCase { 
    WARNING_TYPE_NOT_SET = 0,
    PLANNER = 1,
  }
}

export class PreTransformExtractResponse extends jspb.Message {
  getSpec(): string;
  setSpec(value: string): PreTransformExtractResponse;

  getDatasetsList(): Array<PreTransformExtractDataset>;
  setDatasetsList(value: Array<PreTransformExtractDataset>): PreTransformExtractResponse;
  clearDatasetsList(): PreTransformExtractResponse;
  addDatasets(value?: PreTransformExtractDataset, index?: number): PreTransformExtractDataset;

  getWarningsList(): Array<PreTransformExtractWarning>;
  setWarningsList(value: Array<PreTransformExtractWarning>): PreTransformExtractResponse;
  clearWarningsList(): PreTransformExtractResponse;
  addWarnings(value?: PreTransformExtractWarning, index?: number): PreTransformExtractWarning;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreTransformExtractResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PreTransformExtractResponse): PreTransformExtractResponse.AsObject;
  static serializeBinaryToWriter(message: PreTransformExtractResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreTransformExtractResponse;
  static deserializeBinaryFromReader(message: PreTransformExtractResponse, reader: jspb.BinaryReader): PreTransformExtractResponse;
}

export namespace PreTransformExtractResponse {
  export type AsObject = {
    spec: string,
    datasetsList: Array<PreTransformExtractDataset.AsObject>,
    warningsList: Array<PreTransformExtractWarning.AsObject>,
  }
}

export class PreTransformExtractRequest extends jspb.Message {
  getSpec(): string;
  setSpec(value: string): PreTransformExtractRequest;

  getLocalTz(): string;
  setLocalTz(value: string): PreTransformExtractRequest;

  getDefaultInputTz(): string;
  setDefaultInputTz(value: string): PreTransformExtractRequest;
  hasDefaultInputTz(): boolean;
  clearDefaultInputTz(): PreTransformExtractRequest;

  getPreserveInteractivity(): boolean;
  setPreserveInteractivity(value: boolean): PreTransformExtractRequest;

  getInlineDatasetsList(): Array<PreTransformInlineDataset>;
  setInlineDatasetsList(value: Array<PreTransformInlineDataset>): PreTransformExtractRequest;
  clearInlineDatasetsList(): PreTransformExtractRequest;
  addInlineDatasets(value?: PreTransformInlineDataset, index?: number): PreTransformInlineDataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreTransformExtractRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PreTransformExtractRequest): PreTransformExtractRequest.AsObject;
  static serializeBinaryToWriter(message: PreTransformExtractRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreTransformExtractRequest;
  static deserializeBinaryFromReader(message: PreTransformExtractRequest, reader: jspb.BinaryReader): PreTransformExtractRequest;
}

export namespace PreTransformExtractRequest {
  export type AsObject = {
    spec: string,
    localTz: string,
    defaultInputTz?: string,
    preserveInteractivity: boolean,
    inlineDatasetsList: Array<PreTransformInlineDataset.AsObject>,
  }

  export enum DefaultInputTzCase { 
    _DEFAULT_INPUT_TZ_NOT_SET = 0,
    DEFAULT_INPUT_TZ = 3,
  }
}

