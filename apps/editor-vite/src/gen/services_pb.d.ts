import * as jspb from 'google-protobuf'

import * as tasks_pb from './tasks_pb';
import * as pretransform_pb from './pretransform_pb';
import * as errors_pb from './errors_pb';


export class QueryRequest extends jspb.Message {
  getTaskGraphValues(): tasks_pb.TaskGraphValueRequest | undefined;
  setTaskGraphValues(value?: tasks_pb.TaskGraphValueRequest): QueryRequest;
  hasTaskGraphValues(): boolean;
  clearTaskGraphValues(): QueryRequest;

  getRequestCase(): QueryRequest.RequestCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequest): QueryRequest.AsObject;
  static serializeBinaryToWriter(message: QueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequest;
  static deserializeBinaryFromReader(message: QueryRequest, reader: jspb.BinaryReader): QueryRequest;
}

export namespace QueryRequest {
  export type AsObject = {
    taskGraphValues?: tasks_pb.TaskGraphValueRequest.AsObject,
  }

  export enum RequestCase { 
    REQUEST_NOT_SET = 0,
    TASK_GRAPH_VALUES = 1,
  }
}

export class QueryResult extends jspb.Message {
  getError(): errors_pb.Error | undefined;
  setError(value?: errors_pb.Error): QueryResult;
  hasError(): boolean;
  clearError(): QueryResult;

  getTaskGraphValues(): tasks_pb.TaskGraphValueResponse | undefined;
  setTaskGraphValues(value?: tasks_pb.TaskGraphValueResponse): QueryResult;
  hasTaskGraphValues(): boolean;
  clearTaskGraphValues(): QueryResult;

  getResponseCase(): QueryResult.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryResult.AsObject;
  static toObject(includeInstance: boolean, msg: QueryResult): QueryResult.AsObject;
  static serializeBinaryToWriter(message: QueryResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryResult;
  static deserializeBinaryFromReader(message: QueryResult, reader: jspb.BinaryReader): QueryResult;
}

export namespace QueryResult {
  export type AsObject = {
    error?: errors_pb.Error.AsObject,
    taskGraphValues?: tasks_pb.TaskGraphValueResponse.AsObject,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    ERROR = 1,
    TASK_GRAPH_VALUES = 2,
  }
}

export class PreTransformSpecResult extends jspb.Message {
  getError(): errors_pb.Error | undefined;
  setError(value?: errors_pb.Error): PreTransformSpecResult;
  hasError(): boolean;
  clearError(): PreTransformSpecResult;

  getResponse(): pretransform_pb.PreTransformSpecResponse | undefined;
  setResponse(value?: pretransform_pb.PreTransformSpecResponse): PreTransformSpecResult;
  hasResponse(): boolean;
  clearResponse(): PreTransformSpecResult;

  getResultCase(): PreTransformSpecResult.ResultCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreTransformSpecResult.AsObject;
  static toObject(includeInstance: boolean, msg: PreTransformSpecResult): PreTransformSpecResult.AsObject;
  static serializeBinaryToWriter(message: PreTransformSpecResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreTransformSpecResult;
  static deserializeBinaryFromReader(message: PreTransformSpecResult, reader: jspb.BinaryReader): PreTransformSpecResult;
}

export namespace PreTransformSpecResult {
  export type AsObject = {
    error?: errors_pb.Error.AsObject,
    response?: pretransform_pb.PreTransformSpecResponse.AsObject,
  }

  export enum ResultCase { 
    RESULT_NOT_SET = 0,
    ERROR = 1,
    RESPONSE = 2,
  }
}

export class PreTransformValuesResult extends jspb.Message {
  getError(): errors_pb.Error | undefined;
  setError(value?: errors_pb.Error): PreTransformValuesResult;
  hasError(): boolean;
  clearError(): PreTransformValuesResult;

  getResponse(): pretransform_pb.PreTransformValuesResponse | undefined;
  setResponse(value?: pretransform_pb.PreTransformValuesResponse): PreTransformValuesResult;
  hasResponse(): boolean;
  clearResponse(): PreTransformValuesResult;

  getResultCase(): PreTransformValuesResult.ResultCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreTransformValuesResult.AsObject;
  static toObject(includeInstance: boolean, msg: PreTransformValuesResult): PreTransformValuesResult.AsObject;
  static serializeBinaryToWriter(message: PreTransformValuesResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreTransformValuesResult;
  static deserializeBinaryFromReader(message: PreTransformValuesResult, reader: jspb.BinaryReader): PreTransformValuesResult;
}

export namespace PreTransformValuesResult {
  export type AsObject = {
    error?: errors_pb.Error.AsObject,
    response?: pretransform_pb.PreTransformValuesResponse.AsObject,
  }

  export enum ResultCase { 
    RESULT_NOT_SET = 0,
    ERROR = 1,
    RESPONSE = 2,
  }
}

export class PreTransformExtractResult extends jspb.Message {
  getError(): errors_pb.Error | undefined;
  setError(value?: errors_pb.Error): PreTransformExtractResult;
  hasError(): boolean;
  clearError(): PreTransformExtractResult;

  getResponse(): pretransform_pb.PreTransformExtractResponse | undefined;
  setResponse(value?: pretransform_pb.PreTransformExtractResponse): PreTransformExtractResult;
  hasResponse(): boolean;
  clearResponse(): PreTransformExtractResult;

  getResultCase(): PreTransformExtractResult.ResultCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreTransformExtractResult.AsObject;
  static toObject(includeInstance: boolean, msg: PreTransformExtractResult): PreTransformExtractResult.AsObject;
  static serializeBinaryToWriter(message: PreTransformExtractResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreTransformExtractResult;
  static deserializeBinaryFromReader(message: PreTransformExtractResult, reader: jspb.BinaryReader): PreTransformExtractResult;
}

export namespace PreTransformExtractResult {
  export type AsObject = {
    error?: errors_pb.Error.AsObject,
    response?: pretransform_pb.PreTransformExtractResponse.AsObject,
  }

  export enum ResultCase { 
    RESULT_NOT_SET = 0,
    ERROR = 1,
    RESPONSE = 2,
  }
}

