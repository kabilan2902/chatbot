class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("nep")) {
      this.actionProvider.nep();
    }
  }
}

export default MessageParser;
