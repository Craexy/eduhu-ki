<template>
    <div class="unterrichtsplaner-container">
        <div class="inputContainer">
          <h2>Anfrage</h2>
          <div class="">
              <label for="anlass" class="m-3">Anlass des Elternbriefs:</label>
              <input type="text" id="anlass" name="anlass" class="m-3 messageInput" v-model="anlass">
              <label for="anweisungen" class="m-3">zusätzliche Anweisungen</label>
              <input type="text" id="anweisungen" name="anweisungen" class="m-3 messageInput" v-model="currentMessage">
              <label for="stufe" class="m-3">Stufe: </label>
              <input type="text" id="stufe" name="stufe" class="m-3 messageInput" v-model="stufe">
              <button 
                class="askButton m-3" 
                @click="sendMessage(currentMessage, stufe, anlass)">
                  Elternbrief generieren
              </button>
          </div>
        </div>
        <div class="container">
            <h1>Elternbriefe generieren</h1>
            <div class="messageBox mt-8">
                <template v-for="(message, index) in messages" :key="index">
                    <div :class="message.role == 'user' ? 'messageFromUser' : 'messageFromChatGpt'">
                        <div :class="message.role == 'user' ? 'userMessageWrapper' : 'chatGptMessageWrapper'">
                            <div :class="message.role == 'user' ? 'userMessageContent' : 'chatGptMessageContent'">
                                {{ message.content }}
                            </div>
                        </div>
                    </div>
                </template>
            </div>
            <div class="inputContainer" v-show="messages.length>0">
                <input
                    v-model="currentMessage"
                    type="text"
                    class="messageInput"
                    placeholder="Sonstige Anweisungen"
                    @keyup.enter="sendMessage(currentMessage, stufe, anlass)"
                />
                <button
                    @click="sendMessage(currentMessage, stufe, anlass)"
                    class="askButton"
                >
                    Fragen
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UnterrichtsPlaner',
  data() {
    return {
      prompt:"",  
      currentMessage: '',
      messages: [],
    };
  },
  methods: {
    async sendMessage(message, stufe, anlass) {
      this.currentMessage="";
      this.prompt='Erstelle einen Elternbrief für die Klassenstufe ' + stufe + ' zum Thema ' + anlass + ' und beachte dabei das Folgende: ' +message;
      this.messages.push({
        role: 'user',
        content: this.prompt,
      });
      await axios
        .post('http://localhost:3000/unterrichtsplaner', {
          chatHistory: this.messages,
        })
       .then((response) => {
        console.log(response.data);
  this.messages.push({
    role: 'assistant',
    content: response.data.data, // Access the 'data' property of the response object
  });
});

    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

.container {
  width: 100%;
  height: 600px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
}

h1 {
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: #222;
  padding: 16px;
  margin: 0;
  border-bottom: 1px solid #e7e7e7;
}
.messageBox {
  padding: 16px;
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.messageFromUser,
.messageFromChatGpt {
  display: flex; }
.messageBox {
  max-height: 400px;
  overflow-y: auto;
  padding: 0 16px;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  flex-grow: 1;
}
.messageFromUser,
.messageFromChatGpt {
  display: flex;
  margin-bottom: 8px;
}
.userMessageWrapper,
.chatGptMessageWrapper {
  display: flex;
  flex-direction: column;
}
.userMessageWrapper {
  align-self: flex-end;
}
.chatGptMessageWrapper {
  align-self: flex-start;
}
.userMessageContent,
.chatGptMessageContent {
  max-width: 100%;
  padding: 8px 12px;
  border-radius: 18px;
  margin-bottom: 2px;
  font-size: 14px;
  line-height: 1.4;
}
.userMessageContent {
  background-color: #1877F2;
  color: white;
  border-top-left-radius: 0;
}
.chatGptMessageContent {
  background-color: #EDEDED;
  color: #222;
  border-top-right-radius: 0;
}
.userMessageTimestamp,
.chatGptMessageTimestamp {
  font-size: 10px;
  color: #999;
  margin-top: 2px;
}
.userMessageTimestamp {
  align-self: flex-end;
}
.chatGptMessageTimestamp {
  align-self: flex-start;
}
.inputContainer {

  align-items: center;
  padding: 8px;
  background-color: #f0f0f0;
}

.messageInput {
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 12px;
  font-size: 16px;
  background-color: white;
  border-radius: 24px;
  margin-right: 8px;
}
.askButton {
  background-color: #1877F2;
  color: white;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 24px;
  transition: background-color 0.3s ease-in-out;
}
.askButton:hover {
  background-color: #145CB3;
}
@media (max-width: 480px) {
  .container {
    width: 100%;
    max-width: none;
    border-radius: 0;
  }
}
.unterrichtsplaner-container {

}
.messageBox {
  padding: 16px;
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.messageFromUser,
.messageFromChatGpt {
  display: flex;
}
</style>
