class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.");
    this.updateChatbotState(greetingMessage);
  }

  create() {
    const createSurvey = this.createChatBotMessage("Sure, Just a moment.");
    this.updateChatbotState(createSurvey);
  }

  ipl() {
    const iplMessage = this.createChatBotMessage(
      "when did you start watching IPL?"
    );
    this.updateChatbotState(iplMessage);
  }

  year() {
    const favteam = this.createChatBotMessage("Which team is your favourite?");
    this.updateChatbotState(favteam);
  }

  favteam() {
    const favplayer = this.createChatBotMessage(
      "Who is your favourite in CSK?"
    );
    this.updateChatbotState(favplayer);
  }

  favplayer() {
    const favstad = this.createChatBotMessage(
      "Can tell me your favourite stadium"
    );
    this.updateChatbotState(favstad);
  }

  favstad() {
    const lastmatch = this.createChatBotMessage(
      "How did you watch your last match? [live or tv]"
    );
    this.updateChatbotState(lastmatch);
  }

  lastmatch() {
    const thanks = this.createChatBotMessage(
      "Good to know. Thank you for taking up the survey.."
    );
    this.updateChatbotState(thanks);
  }

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
