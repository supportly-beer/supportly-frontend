// source: ticket-chat.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function () {
  return this || window || global || self || Function('return this')();
}).call(null);

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.beer.supportly.chat.ChatMessage', null, global);
goog.exportSymbol('proto.beer.supportly.chat.JoinRoomRequest', null, global);
goog.exportSymbol('proto.beer.supportly.chat.LeaveRoomRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.beer.supportly.chat.JoinRoomRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.beer.supportly.chat.JoinRoomRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.beer.supportly.chat.JoinRoomRequest.displayName = 'proto.beer.supportly.chat.JoinRoomRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.beer.supportly.chat.ChatMessage = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.beer.supportly.chat.ChatMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.beer.supportly.chat.ChatMessage.displayName = 'proto.beer.supportly.chat.ChatMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.beer.supportly.chat.LeaveRoomRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.beer.supportly.chat.LeaveRoomRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.beer.supportly.chat.LeaveRoomRequest.displayName = 'proto.beer.supportly.chat.LeaveRoomRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.beer.supportly.chat.JoinRoomRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.beer.supportly.chat.JoinRoomRequest.toObject(opt_includeInstance, this);
  };


  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.beer.supportly.chat.JoinRoomRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.beer.supportly.chat.JoinRoomRequest.toObject = function (includeInstance, msg) {
    var f, obj = {
      roomid: jspb.Message.getFieldWithDefault(msg, 1, ""),
      userid: jspb.Message.getFieldWithDefault(msg, 2, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.beer.supportly.chat.JoinRoomRequest}
 */
proto.beer.supportly.chat.JoinRoomRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.beer.supportly.chat.JoinRoomRequest;
  return proto.beer.supportly.chat.JoinRoomRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.beer.supportly.chat.JoinRoomRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.beer.supportly.chat.JoinRoomRequest}
 */
proto.beer.supportly.chat.JoinRoomRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setRoomid(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readInt64());
        msg.setUserid(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.beer.supportly.chat.JoinRoomRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.beer.supportly.chat.JoinRoomRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.beer.supportly.chat.JoinRoomRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.beer.supportly.chat.JoinRoomRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string roomId = 1;
 * @return {string}
 */
proto.beer.supportly.chat.JoinRoomRequest.prototype.getRoomid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.beer.supportly.chat.JoinRoomRequest} returns this
 */
proto.beer.supportly.chat.JoinRoomRequest.prototype.setRoomid = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 userId = 2;
 * @return {number}
 */
proto.beer.supportly.chat.JoinRoomRequest.prototype.getUserid = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.beer.supportly.chat.JoinRoomRequest} returns this
 */
proto.beer.supportly.chat.JoinRoomRequest.prototype.setUserid = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.beer.supportly.chat.ChatMessage.prototype.toObject = function (opt_includeInstance) {
    return proto.beer.supportly.chat.ChatMessage.toObject(opt_includeInstance, this);
  };


  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.beer.supportly.chat.ChatMessage} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.beer.supportly.chat.ChatMessage.toObject = function (includeInstance, msg) {
    var f, obj = {
      roomid: jspb.Message.getFieldWithDefault(msg, 1, ""),
      senderid: jspb.Message.getFieldWithDefault(msg, 2, 0),
      senderdisplayname: jspb.Message.getFieldWithDefault(msg, 3, ""),
      senderprofilepictureurl: jspb.Message.getFieldWithDefault(msg, 4, ""),
      message: jspb.Message.getFieldWithDefault(msg, 5, ""),
      timestamp: jspb.Message.getFieldWithDefault(msg, 6, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.beer.supportly.chat.ChatMessage}
 */
proto.beer.supportly.chat.ChatMessage.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.beer.supportly.chat.ChatMessage;
  return proto.beer.supportly.chat.ChatMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.beer.supportly.chat.ChatMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.beer.supportly.chat.ChatMessage}
 */
proto.beer.supportly.chat.ChatMessage.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setRoomid(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readInt64());
        msg.setSenderid(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setSenderdisplayname(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readString());
        msg.setSenderprofilepictureurl(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readString());
        msg.setMessage(value);
        break;
      case 6:
        var value = /** @type {number} */ (reader.readInt64());
        msg.setTimestamp(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.beer.supportly.chat.ChatMessage.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.beer.supportly.chat.ChatMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.beer.supportly.chat.ChatMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.beer.supportly.chat.ChatMessage.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSenderid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSenderdisplayname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSenderprofilepictureurl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional string roomId = 1;
 * @return {string}
 */
proto.beer.supportly.chat.ChatMessage.prototype.getRoomid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.beer.supportly.chat.ChatMessage} returns this
 */
proto.beer.supportly.chat.ChatMessage.prototype.setRoomid = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 senderId = 2;
 * @return {number}
 */
proto.beer.supportly.chat.ChatMessage.prototype.getSenderid = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.beer.supportly.chat.ChatMessage} returns this
 */
proto.beer.supportly.chat.ChatMessage.prototype.setSenderid = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string senderDisplayName = 3;
 * @return {string}
 */
proto.beer.supportly.chat.ChatMessage.prototype.getSenderdisplayname = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.beer.supportly.chat.ChatMessage} returns this
 */
proto.beer.supportly.chat.ChatMessage.prototype.setSenderdisplayname = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string senderProfilePictureUrl = 4;
 * @return {string}
 */
proto.beer.supportly.chat.ChatMessage.prototype.getSenderprofilepictureurl = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.beer.supportly.chat.ChatMessage} returns this
 */
proto.beer.supportly.chat.ChatMessage.prototype.setSenderprofilepictureurl = function (value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.beer.supportly.chat.ChatMessage.prototype.getMessage = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.beer.supportly.chat.ChatMessage} returns this
 */
proto.beer.supportly.chat.ChatMessage.prototype.setMessage = function (value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 timestamp = 6;
 * @return {number}
 */
proto.beer.supportly.chat.ChatMessage.prototype.getTimestamp = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.beer.supportly.chat.ChatMessage} returns this
 */
proto.beer.supportly.chat.ChatMessage.prototype.setTimestamp = function (value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.beer.supportly.chat.LeaveRoomRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.beer.supportly.chat.LeaveRoomRequest.toObject(opt_includeInstance, this);
  };


  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.beer.supportly.chat.LeaveRoomRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.beer.supportly.chat.LeaveRoomRequest.toObject = function (includeInstance, msg) {
    var f, obj = {
      roomid: jspb.Message.getFieldWithDefault(msg, 1, ""),
      userid: jspb.Message.getFieldWithDefault(msg, 2, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.beer.supportly.chat.LeaveRoomRequest}
 */
proto.beer.supportly.chat.LeaveRoomRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.beer.supportly.chat.LeaveRoomRequest;
  return proto.beer.supportly.chat.LeaveRoomRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.beer.supportly.chat.LeaveRoomRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.beer.supportly.chat.LeaveRoomRequest}
 */
proto.beer.supportly.chat.LeaveRoomRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setRoomid(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readInt64());
        msg.setUserid(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.beer.supportly.chat.LeaveRoomRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.beer.supportly.chat.LeaveRoomRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.beer.supportly.chat.LeaveRoomRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.beer.supportly.chat.LeaveRoomRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string roomId = 1;
 * @return {string}
 */
proto.beer.supportly.chat.LeaveRoomRequest.prototype.getRoomid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.beer.supportly.chat.LeaveRoomRequest} returns this
 */
proto.beer.supportly.chat.LeaveRoomRequest.prototype.setRoomid = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 userId = 2;
 * @return {number}
 */
proto.beer.supportly.chat.LeaveRoomRequest.prototype.getUserid = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.beer.supportly.chat.LeaveRoomRequest} returns this
 */
proto.beer.supportly.chat.LeaveRoomRequest.prototype.setUserid = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.beer.supportly.chat);
