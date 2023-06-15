import {Injectable} from '@angular/core';
import {ChatServiceClient, ResponseStream} from "src/app/protos/generated/ticket-chat_pb_service";
import {ChatMessage, JoinRoomRequest, LeaveRoomRequest} from "src/app/protos/generated/ticket-chat_pb";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private readonly chatServiceClient: ChatServiceClient

  constructor() {
    this.chatServiceClient = new ChatServiceClient('http://jevzo.com:9090')
  }

  joinChatRoom(roomId: string, userId: number): ResponseStream<ChatMessage> {
    let joinRoomRequest = new JoinRoomRequest()

    joinRoomRequest.setRoomid(roomId)
    joinRoomRequest.setUserid(userId)

    return this.chatServiceClient.joinChatRoom(joinRoomRequest)
  }

  sendMessage(roomId: string, senderId: number, senderDisplayName: string, message: string, timestamp: number) {
    let chatMessage = new ChatMessage()

    chatMessage.setRoomid(roomId)
    chatMessage.setSenderid(senderId)
    chatMessage.setSenderdisplayname(senderDisplayName)
    chatMessage.setMessage(message)
    chatMessage.setTimestamp(timestamp)

    this.chatServiceClient.sendMessage(chatMessage, (err, response) => {
      if (err) {
        console.log(err)
      } else {
        console.log(response)
      }
    })
  }

  leaveChatRoom(roomId: string, userId: number) {
    let leaveRoomRequest = new LeaveRoomRequest()

    leaveRoomRequest.setRoomid(roomId)
    leaveRoomRequest.setUserid(userId)

    this.chatServiceClient.leaveChatroom(leaveRoomRequest, (err, response) => {
      if (err) {
        console.log(err)
      } else {
        console.log(response)
      }
    })
  }
}
