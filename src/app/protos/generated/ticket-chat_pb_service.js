// package: beer.supportly.chat
// file: tickets-chat.proto

var ticket_chat_pb = require("./ticket-chat_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ChatService = (function () {
  function ChatService() {
  }

  ChatService.serviceName = "beer.supportly.chat.ChatService";
  return ChatService;
}());

ChatService.JoinChatRoom = {
  methodName: "JoinChatRoom",
  service: ChatService,
  requestStream: false,
  responseStream: true,
  requestType: ticket_chat_pb.JoinRoomRequest,
  responseType: ticket_chat_pb.ChatMessage
};

ChatService.SendMessage = {
  methodName: "SendMessage",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: ticket_chat_pb.ChatMessage,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.LeaveChatroom = {
  methodName: "LeaveChatroom",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: ticket_chat_pb.LeaveRoomRequest,
  responseType: google_protobuf_empty_pb.Empty
};

exports.ChatService = ChatService;

function ChatServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ChatServiceClient.prototype.joinChatRoom = function joinChatRoom(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(ChatService.JoinChatRoom, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({code: status, details: statusMessage, metadata: trailers});
      });
      listeners.end.forEach(function (handler) {
        handler({code: status, details: statusMessage, metadata: trailers});
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.sendMessage = function sendMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.SendMessage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.leaveChatroom = function leaveChatroom(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.LeaveChatroom, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ChatServiceClient = ChatServiceClient;

