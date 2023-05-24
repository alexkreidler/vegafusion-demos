import * as jspb from 'google-protobuf'



export class Span extends jspb.Message {
  getStart(): number;
  setStart(value: number): Span;

  getEnd(): number;
  setEnd(value: number): Span;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Span.AsObject;
  static toObject(includeInstance: boolean, msg: Span): Span.AsObject;
  static serializeBinaryToWriter(message: Span, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Span;
  static deserializeBinaryFromReader(message: Span, reader: jspb.BinaryReader): Span;
}

export namespace Span {
  export type AsObject = {
    start: number,
    end: number,
  }
}

export class Literal extends jspb.Message {
  getRaw(): string;
  setRaw(value: string): Literal;

  getString(): string;
  setString(value: string): Literal;

  getBoolean(): boolean;
  setBoolean(value: boolean): Literal;

  getNumber(): number;
  setNumber(value: number): Literal;

  getNull(): boolean;
  setNull(value: boolean): Literal;

  getValueCase(): Literal.ValueCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Literal.AsObject;
  static toObject(includeInstance: boolean, msg: Literal): Literal.AsObject;
  static serializeBinaryToWriter(message: Literal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Literal;
  static deserializeBinaryFromReader(message: Literal, reader: jspb.BinaryReader): Literal;
}

export namespace Literal {
  export type AsObject = {
    raw: string,
    string: string,
    pb_boolean: boolean,
    number: number,
    pb_null: boolean,
  }

  export enum ValueCase { 
    VALUE_NOT_SET = 0,
    STRING = 2,
    BOOLEAN = 3,
    NUMBER = 4,
    NULL = 5,
  }
}

export class IdentifierABC extends jspb.Message {
  getName(): string;
  setName(value: string): IdentifierABC;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentifierABC.AsObject;
  static toObject(includeInstance: boolean, msg: IdentifierABC): IdentifierABC.AsObject;
  static serializeBinaryToWriter(message: IdentifierABC, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentifierABC;
  static deserializeBinaryFromReader(message: IdentifierABC, reader: jspb.BinaryReader): IdentifierABC;
}

export namespace IdentifierABC {
  export type AsObject = {
    name: string,
  }
}

export class Identifier extends jspb.Message {
  getName(): string;
  setName(value: string): Identifier;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Identifier.AsObject;
  static toObject(includeInstance: boolean, msg: Identifier): Identifier.AsObject;
  static serializeBinaryToWriter(message: Identifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Identifier;
  static deserializeBinaryFromReader(message: Identifier, reader: jspb.BinaryReader): Identifier;
}

export namespace Identifier {
  export type AsObject = {
    name: string,
  }
}

export class UnaryExpression extends jspb.Message {
  getOperator(): UnaryOperator;
  setOperator(value: UnaryOperator): UnaryExpression;

  getPrefix(): boolean;
  setPrefix(value: boolean): UnaryExpression;

  getArgument(): Expression | undefined;
  setArgument(value?: Expression): UnaryExpression;
  hasArgument(): boolean;
  clearArgument(): UnaryExpression;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnaryExpression.AsObject;
  static toObject(includeInstance: boolean, msg: UnaryExpression): UnaryExpression.AsObject;
  static serializeBinaryToWriter(message: UnaryExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnaryExpression;
  static deserializeBinaryFromReader(message: UnaryExpression, reader: jspb.BinaryReader): UnaryExpression;
}

export namespace UnaryExpression {
  export type AsObject = {
    operator: UnaryOperator,
    prefix: boolean,
    argument?: Expression.AsObject,
  }
}

export class LogicalExpression extends jspb.Message {
  getLeft(): Expression | undefined;
  setLeft(value?: Expression): LogicalExpression;
  hasLeft(): boolean;
  clearLeft(): LogicalExpression;

  getOperator(): LogicalOperator;
  setOperator(value: LogicalOperator): LogicalExpression;

  getRight(): Expression | undefined;
  setRight(value?: Expression): LogicalExpression;
  hasRight(): boolean;
  clearRight(): LogicalExpression;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogicalExpression.AsObject;
  static toObject(includeInstance: boolean, msg: LogicalExpression): LogicalExpression.AsObject;
  static serializeBinaryToWriter(message: LogicalExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogicalExpression;
  static deserializeBinaryFromReader(message: LogicalExpression, reader: jspb.BinaryReader): LogicalExpression;
}

export namespace LogicalExpression {
  export type AsObject = {
    left?: Expression.AsObject,
    operator: LogicalOperator,
    right?: Expression.AsObject,
  }
}

export class BinaryExpression extends jspb.Message {
  getLeft(): Expression | undefined;
  setLeft(value?: Expression): BinaryExpression;
  hasLeft(): boolean;
  clearLeft(): BinaryExpression;

  getOperator(): BinaryOperator;
  setOperator(value: BinaryOperator): BinaryExpression;

  getRight(): Expression | undefined;
  setRight(value?: Expression): BinaryExpression;
  hasRight(): boolean;
  clearRight(): BinaryExpression;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BinaryExpression.AsObject;
  static toObject(includeInstance: boolean, msg: BinaryExpression): BinaryExpression.AsObject;
  static serializeBinaryToWriter(message: BinaryExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BinaryExpression;
  static deserializeBinaryFromReader(message: BinaryExpression, reader: jspb.BinaryReader): BinaryExpression;
}

export namespace BinaryExpression {
  export type AsObject = {
    left?: Expression.AsObject,
    operator: BinaryOperator,
    right?: Expression.AsObject,
  }
}

export class ConditionalExpression extends jspb.Message {
  getTest(): Expression | undefined;
  setTest(value?: Expression): ConditionalExpression;
  hasTest(): boolean;
  clearTest(): ConditionalExpression;

  getConsequent(): Expression | undefined;
  setConsequent(value?: Expression): ConditionalExpression;
  hasConsequent(): boolean;
  clearConsequent(): ConditionalExpression;

  getAlternate(): Expression | undefined;
  setAlternate(value?: Expression): ConditionalExpression;
  hasAlternate(): boolean;
  clearAlternate(): ConditionalExpression;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionalExpression.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionalExpression): ConditionalExpression.AsObject;
  static serializeBinaryToWriter(message: ConditionalExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionalExpression;
  static deserializeBinaryFromReader(message: ConditionalExpression, reader: jspb.BinaryReader): ConditionalExpression;
}

export namespace ConditionalExpression {
  export type AsObject = {
    test?: Expression.AsObject,
    consequent?: Expression.AsObject,
    alternate?: Expression.AsObject,
  }
}

export class MemberExpression extends jspb.Message {
  getObject(): Expression | undefined;
  setObject(value?: Expression): MemberExpression;
  hasObject(): boolean;
  clearObject(): MemberExpression;

  getProperty(): Expression | undefined;
  setProperty(value?: Expression): MemberExpression;
  hasProperty(): boolean;
  clearProperty(): MemberExpression;

  getComputed(): boolean;
  setComputed(value: boolean): MemberExpression;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberExpression.AsObject;
  static toObject(includeInstance: boolean, msg: MemberExpression): MemberExpression.AsObject;
  static serializeBinaryToWriter(message: MemberExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberExpression;
  static deserializeBinaryFromReader(message: MemberExpression, reader: jspb.BinaryReader): MemberExpression;
}

export namespace MemberExpression {
  export type AsObject = {
    object?: Expression.AsObject,
    property?: Expression.AsObject,
    computed: boolean,
  }
}

export class ArrayExpression extends jspb.Message {
  getElementsList(): Array<Expression>;
  setElementsList(value: Array<Expression>): ArrayExpression;
  clearElementsList(): ArrayExpression;
  addElements(value?: Expression, index?: number): Expression;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrayExpression.AsObject;
  static toObject(includeInstance: boolean, msg: ArrayExpression): ArrayExpression.AsObject;
  static serializeBinaryToWriter(message: ArrayExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrayExpression;
  static deserializeBinaryFromReader(message: ArrayExpression, reader: jspb.BinaryReader): ArrayExpression;
}

export namespace ArrayExpression {
  export type AsObject = {
    elementsList: Array<Expression.AsObject>,
  }
}

export class CallExpression extends jspb.Message {
  getCallee(): string;
  setCallee(value: string): CallExpression;

  getArgumentsList(): Array<Expression>;
  setArgumentsList(value: Array<Expression>): CallExpression;
  clearArgumentsList(): CallExpression;
  addArguments(value?: Expression, index?: number): Expression;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallExpression.AsObject;
  static toObject(includeInstance: boolean, msg: CallExpression): CallExpression.AsObject;
  static serializeBinaryToWriter(message: CallExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallExpression;
  static deserializeBinaryFromReader(message: CallExpression, reader: jspb.BinaryReader): CallExpression;
}

export namespace CallExpression {
  export type AsObject = {
    callee: string,
    argumentsList: Array<Expression.AsObject>,
  }
}

export class Property extends jspb.Message {
  getLiteral(): Literal | undefined;
  setLiteral(value?: Literal): Property;
  hasLiteral(): boolean;
  clearLiteral(): Property;

  getIdentifier(): Identifier | undefined;
  setIdentifier(value?: Identifier): Property;
  hasIdentifier(): boolean;
  clearIdentifier(): Property;

  getValue(): Expression | undefined;
  setValue(value?: Expression): Property;
  hasValue(): boolean;
  clearValue(): Property;

  getKind(): string;
  setKind(value: string): Property;

  getKeyCase(): Property.KeyCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Property.AsObject;
  static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
  static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Property;
  static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
}

export namespace Property {
  export type AsObject = {
    literal?: Literal.AsObject,
    identifier?: Identifier.AsObject,
    value?: Expression.AsObject,
    kind: string,
  }

  export enum KeyCase { 
    KEY_NOT_SET = 0,
    LITERAL = 1,
    IDENTIFIER = 2,
  }
}

export class ObjectExpression extends jspb.Message {
  getPropertiesList(): Array<Property>;
  setPropertiesList(value: Array<Property>): ObjectExpression;
  clearPropertiesList(): ObjectExpression;
  addProperties(value?: Property, index?: number): Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectExpression.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectExpression): ObjectExpression.AsObject;
  static serializeBinaryToWriter(message: ObjectExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectExpression;
  static deserializeBinaryFromReader(message: ObjectExpression, reader: jspb.BinaryReader): ObjectExpression;
}

export namespace ObjectExpression {
  export type AsObject = {
    propertiesList: Array<Property.AsObject>,
  }
}

export class Expression extends jspb.Message {
  getIdentifier(): Identifier | undefined;
  setIdentifier(value?: Identifier): Expression;
  hasIdentifier(): boolean;
  clearIdentifier(): Expression;

  getLiteral(): Literal | undefined;
  setLiteral(value?: Literal): Expression;
  hasLiteral(): boolean;
  clearLiteral(): Expression;

  getBinary(): BinaryExpression | undefined;
  setBinary(value?: BinaryExpression): Expression;
  hasBinary(): boolean;
  clearBinary(): Expression;

  getLogical(): LogicalExpression | undefined;
  setLogical(value?: LogicalExpression): Expression;
  hasLogical(): boolean;
  clearLogical(): Expression;

  getUnary(): UnaryExpression | undefined;
  setUnary(value?: UnaryExpression): Expression;
  hasUnary(): boolean;
  clearUnary(): Expression;

  getConditional(): ConditionalExpression | undefined;
  setConditional(value?: ConditionalExpression): Expression;
  hasConditional(): boolean;
  clearConditional(): Expression;

  getCall(): CallExpression | undefined;
  setCall(value?: CallExpression): Expression;
  hasCall(): boolean;
  clearCall(): Expression;

  getArray(): ArrayExpression | undefined;
  setArray(value?: ArrayExpression): Expression;
  hasArray(): boolean;
  clearArray(): Expression;

  getObject(): ObjectExpression | undefined;
  setObject(value?: ObjectExpression): Expression;
  hasObject(): boolean;
  clearObject(): Expression;

  getMember(): MemberExpression | undefined;
  setMember(value?: MemberExpression): Expression;
  hasMember(): boolean;
  clearMember(): Expression;

  getSpan(): Span | undefined;
  setSpan(value?: Span): Expression;
  hasSpan(): boolean;
  clearSpan(): Expression;

  getExprCase(): Expression.ExprCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Expression.AsObject;
  static toObject(includeInstance: boolean, msg: Expression): Expression.AsObject;
  static serializeBinaryToWriter(message: Expression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Expression;
  static deserializeBinaryFromReader(message: Expression, reader: jspb.BinaryReader): Expression;
}

export namespace Expression {
  export type AsObject = {
    identifier?: Identifier.AsObject,
    literal?: Literal.AsObject,
    binary?: BinaryExpression.AsObject,
    logical?: LogicalExpression.AsObject,
    unary?: UnaryExpression.AsObject,
    conditional?: ConditionalExpression.AsObject,
    call?: CallExpression.AsObject,
    array?: ArrayExpression.AsObject,
    object?: ObjectExpression.AsObject,
    member?: MemberExpression.AsObject,
    span?: Span.AsObject,
  }

  export enum ExprCase { 
    EXPR_NOT_SET = 0,
    IDENTIFIER = 1,
    LITERAL = 2,
    BINARY = 3,
    LOGICAL = 4,
    UNARY = 5,
    CONDITIONAL = 6,
    CALL = 7,
    ARRAY = 8,
    OBJECT = 9,
    MEMBER = 10,
  }
}

export enum UnaryOperator { 
  POS = 0,
  NEG = 1,
  NOT = 2,
}
export enum LogicalOperator { 
  OR = 0,
  AND = 1,
}
export enum BinaryOperator { 
  EQUALS = 0,
  NOTEQUALS = 1,
  STRICTEQUALS = 2,
  NOTSTRICTEQUALS = 3,
  LESSTHAN = 4,
  LESSTHANEQUAL = 5,
  GREATERTHAN = 6,
  GREATERTHANEQUAL = 7,
  PLUS = 8,
  MINUS = 9,
  MULT = 10,
  DIV = 11,
  MOD = 12,
}
