// package: beer.supportly.chat
// file: ticket-chat.proto

import * as jspb from "google-protobuf";

export class JoinRoomRequest extends jspb.Message {
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };

  static toObject(includeInstance: boolean, msg: JoinRoomRequest): JoinRoomRequest.AsObject;

  static serializeBinaryToWriter(message: JoinRoomRequest, writer: jspb.BinaryWriter): void;

  static deserializeBinary(bytes: Uint8Array): JoinRoomRequest;

  static deserializeBinaryFromReader(message: JoinRoomRequest, reader: jspb.BinaryReader): JoinRoomRequest;

  getRoomid(): string;

  setRoomid(value: string): void;

  getUserid(): number;

  setUserid(value: number): void;

  serializeBinary(): Uint8Array;

  toObject(includeInstance?: boolean): JoinRoomRequest.AsObject;
}

export namespace JoinRoomRequest {
  export type AsObject = {
    roomid: string,
    userid: number,
  }
}

export class ChatMessage extends jspb.Message {
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };

  static toObject(includeInstance: boolean, msg: ChatMessage): ChatMessage.AsObject;

  static serializeBinaryToWriter(message: ChatMessage, writer: jspb.BinaryWriter): void;

  static deserializeBinary(bytes: Uint8Array): ChatMessage;

  static deserializeBinaryFromReader(message: ChatMessage, reader: jspb.BinaryReader): ChatMessage;

  getRoomid(): string;

  setRoomid(value: string): void;

  getSenderid(): number;

  setSenderid(value: number): void;

  getSenderdisplayname(): string;

  setSenderdisplayname(value: string): void;

  getSenderprofilepictureurl(): string;

  setSenderprofilepictureurl(value: string): void;

  getMessage(): string;

  setMessage(value: string): void;

  getTimestamp(): number;

  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;

  toObject(includeInstance?: boolean): ChatMessage.AsObject;
}

export namespace ChatMessage {
  export type AsObject = {
    roomid: string,
    senderid: number,
    senderdisplayname: string,
    senderprofilepictureurl: string,
    message: string,
    timestamp: number,
  }
}

export class LeaveRoomRequest extends jspb.Message {
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };

  static toObject(includeInstance: boolean, msg: LeaveRoomRequest): LeaveRoomRequest.AsObject;

  static serializeBinaryToWriter(message: LeaveRoomRequest, writer: jspb.BinaryWriter): void;

  static deserializeBinary(bytes: Uint8Array): LeaveRoomRequest;

  static deserializeBinaryFromReader(message: LeaveRoomRequest, reader: jspb.BinaryReader): LeaveRoomRequest;

  getRoomid(): string;

  setRoomid(value: string): void;

  getUserid(): number;

  setUserid(value: number): void;

  serializeBinary(): Uint8Array;

  toObject(includeInstance?: boolean): LeaveRoomRequest.AsObject;
}

export namespace LeaveRoomRequest {
  export type AsObject = {
    roomid: string,
    userid: number,
  }
}

