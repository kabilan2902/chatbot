class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("create")) {
      this.actionProvider.create();
      if (lowerCaseMessage.includes("ipl")) {
        this.actionProvider.ipl();
      }
    }
    if (lowerCaseMessage.includes("2010")) {
      this.actionProvider.year();
    }
    if (lowerCaseMessage.includes("csk")) {
      this.actionProvider.favteam();
    }
    if (lowerCaseMessage.includes("jadeja")) {
      this.actionProvider.favplayer();
    }
    if (lowerCaseMessage.includes("chepauk")) {
      this.actionProvider.favstad();
    }
    if (lowerCaseMessage.includes("live")) {
      this.actionProvider.lastmatch();
    }
  }
}

export default MessageParser;
