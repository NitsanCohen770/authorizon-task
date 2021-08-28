class Message {
  body: string;
  senderId: string;
  timeSent: Date;
  isOwnedByCurrentUser: boolean;
  id: string;
  _id?: string;
}

export default Message;
