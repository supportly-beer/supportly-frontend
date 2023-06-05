// package: beer.supportly.chat
// file: ticket-chat.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class JoinRoomRequest extends jspb.Message {
  getRoomid(): string;
  setRoomid(value: string): void;

  getUserid(): number;
  setUserid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinRoomRequest): JoinRoomRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinRoomRequest;
  static deserializeBinaryFromReader(message: JoinRoomRequest, reader: jspb.BinaryReader): JoinRoomRequest;
}

export namespace JoinRoomRequest {
  export type AsObject = {
    roomid: string,
    userid: number,
  }
}

export class ChatMessage extends jspb.Message {
  getRoomid(): string;
  setRoomid(value: string): void;

  getSenderid(): number;
  setSenderid(value: number): void;

  getSenderdisplayname(): string;
  setSenderdisplayname(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessage): ChatMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessage;
  static deserializeBinaryFromReader(message: ChatMessage, reader: jspb.BinaryReader): ChatMessage;
}

export namespace ChatMessage {
  export type AsObject = {
    roomid: string,
    senderid: number,
    senderdisplayname: string,
    message: string,
    timestamp: number,
  }
}

export class LeaveRoomRequest extends jspb.Message {
  getRoomid(): string;
  setRoomid(value: string): void;

  getUserid(): number;
  setUserid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaveRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LeaveRoomRequest): LeaveRoomRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LeaveRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaveRoomRequest;
  static deserializeBinaryFromReader(message: LeaveRoomRequest, reader: jspb.BinaryReader): LeaveRoomRequest;
}

export namespace LeaveRoomRequest {
  export type AsObject = {
    roomid: string,
    userid: number,
  }
}

