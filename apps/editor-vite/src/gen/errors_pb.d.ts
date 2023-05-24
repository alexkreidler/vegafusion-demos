import * as jspb from 'google-protobuf'



export class TaskGraphValueError extends jspb.Message {
  getMsg(): string;
  setMsg(value: string): TaskGraphValueError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskGraphValueError.AsObject;
  static toObject(includeInstance: boolean, msg: TaskGraphValueError): TaskGraphValueError.AsObject;
  static serializeBinaryToWriter(message: TaskGraphValueError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskGraphValueError;
  static deserializeBinaryFromReader(message: TaskGraphValueError, reader: jspb.BinaryReader): TaskGraphValueError;
}

export namespace TaskGraphValueError {
  export type AsObject = {
    msg: string,
  }
}

export class Error extends jspb.Message {
  getError(): TaskGraphValueError | undefined;
  setError(value?: TaskGraphValueError): Error;
  hasError(): boolean;
  clearError(): Error;

  getErrorkindCase(): Error.ErrorkindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Error.AsObject;
  static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
  static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Error;
  static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
  export type AsObject = {
    error?: TaskGraphValueError.AsObject,
  }

  export enum ErrorkindCase { 
    ERRORKIND_NOT_SET = 0,
    ERROR = 1,
  }
}

