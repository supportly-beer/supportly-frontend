// package: beer.supportly.chat
// file: ticket-chat.proto

import * as ticket_chat_pb from "./ticket-chat_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ChatServiceJoinChatRoom = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof ticket_chat_pb.JoinRoomRequest;
  readonly responseType: typeof ticket_chat_pb.ChatMessage;
};

type ChatServiceSendMessage = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ticket_chat_pb.ChatMessage;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceLeaveChatroom = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ticket_chat_pb.LeaveRoomRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class ChatService {
  static readonly serviceName: string;
  static readonly JoinChatRoom: ChatServiceJoinChatRoom;
  static readonly SendMessage: ChatServiceSendMessage;
  static readonly LeaveChatroom: ChatServiceLeaveChatroom;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ChatServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  joinChatRoom(requestMessage: ticket_chat_pb.JoinRoomRequest, metadata?: grpc.Metadata): ResponseStream<ticket_chat_pb.ChatMessage>;
  sendMessage(
    requestMessage: ticket_chat_pb.ChatMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  sendMessage(
    requestMessage: ticket_chat_pb.ChatMessage,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  leaveChatroom(
    requestMessage: ticket_chat_pb.LeaveRoomRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  leaveChatroom(
    requestMessage: ticket_chat_pb.LeaveRoomRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
}

