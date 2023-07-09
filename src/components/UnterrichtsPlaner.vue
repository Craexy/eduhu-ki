<template>
  <div class="unterrichtsplaner-container">
    <div class="container" v-show="messages.length === 0">
      <h2>Anfrage</h2>
      <div class="form-group">
        <label for="inputText">Umzuwandelnder Text:</label>
        <textarea class="form-control" id="inputText" rows="3" placeholder="Umzuwandelnder Text"
          v-model="inputText"></textarea>
      </div>
      <div class="form-group">
        <label for="inputAge">durchschnittliches Alter der Schüler:innen</label>
        <input type="number" class="form-control" id="inputAge" v-model="inputAge">
      </div>
      <div class="form-group">
        <label for="inputFlesch">gewünschter Flesch-Reading-Ease-Index</label>
        <input type="number" class="form-control" id="inputFlesch" v-model="inputFlesch">
      </div>
      <div class="form-group">
        <label for="inputSchoolType">Schulart</label>
        <input type="text" class="form-control" id="inputSchoolType" placeholder="z.B. berufsbildende Schule"
          v-model="inputSchoolType">
      </div>
      <div class="form-group">
        <label for="inputLearningType">Lernstil</label>
        <input type="text" class="form-control" id="inputLearningType"
          placeholder="z.B. viel eigene Aktivität der Schüler:innen" v-model="inputLearningType">
      </div>
      <div class="form-group">
        <label for="inputSize">Umfang</label>
        <select class="form-control" id="inputSize" v-model="inputSize">
          <option>umfangreich</option>
          <option>ausführlich</option>
          <option>knapp</option>
          <option>so knapp wie möglich</option>
        </select>
      </div>
      <button class="askButton m-3"
        @click="sendMessage('Gib nur den umgewandelten Text aus. Bitte prüfe auch noch, dass du alle formulierten Bedingungen hinsichtlich der Lerngruppe, der Lehrkraft und der Formulierung des Textes bedacht wurden. Gib den Text unbedingt auf deutsch aus.')">
        Text umwandeln!
      </button>
    </div>

    <div class="container messages" v-show="messages.length > 0">
      <h1>Unterricht planen</h1>
      <div class="messageBox mt-8">
        <template v-for="(message, index) in messages" :key="index">
          <!-- <div :class="message.role == 'user' ? 'messageFromUser' : 'messageFromChatGpt'"> -->
          <div :class="{
            'messageFromUser': message.role === 'user',
            'messageFromChatGpt': message.role === 'assistant',
            'messageFromSystem': message.role !== 'user' && message.role !== 'assistant'
          }" v-if="message.role === 'user' || message.role === 'assistant'">
            <div :class="message.role == 'user' ? 'userMessageWrapper' : 'chatGptMessageWrapper'">
              <div :class="message.role == 'user' ? 'userMessageContent' : 'chatGptMessageContent'">
                {{ message.content }}
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="inputContainer">
        <input v-model="currentMessage" type="text" class="messageInput" placeholder="Stell mir eine Frage..."
          @keyup.enter="sendMessage(currentMessage)" />
        <button @click="sendMessage(currentMessage)" class="askButton">
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
      messages: [],
    };
  },
  methods: {
    async sendMessage(message) {
      this.currentMessage = "";
      if (this.messages.length > 0) { //do stuff
      } else {
        this.messages.push({
          role: 'system',
          content: 'Du bist eine KI, die Lehrpersonen bei der Erstellung von Lehrmaterialien unterstützt. ' +
            'Du erhältst zunächst einige Informationen zur Lerngruppe und zu der Lehrkraft. Anschließend bekommst du Anweisungen zur genauen Aufgabe. ' +
            'Lerngruppe: Die Schüler:innen der Lerngruppe haben im Durchschnitt folgendes Alter: ' + this.inputAge +
            ' Das Leseverständnis wird über den Flesch-Reading-Ease-Index bestimmt. Der Wert wird als ' + this.inputFlesch + ' im Durchschnitt angegeben.' +
            'Der:die Lehrer:in unterrichtet an folgender Schulform: ' + this.inputSchoolType +
            ' Die Lehrkraft beschreibt ihren Lernstil wie folgt: ' + this.inputLearningType +
            ' Deine Aufgabe ist es, einen Fachtext so umzuformulieren, dass er für die Schüler:innen des angegebenen Alters gut verständlich ist. ' +
            'Du erhältst dafür als Input den (1) Text, (2) Informationen zum Umfang des Textes, der generiert werden soll und (3) Hinweise, wie du den Text für die Zielgruppe schreiben sollst.  ' +
            '(1) Folgender Text soll umgewandelt werden: "' + this.inputText + '" ' +
            '(2) Der Text soll ' + this.inputSize + ' formuliert werden. ' +
            '(3) Textformulierung: Dieser Text ist für Schüler:innen. Deshalb soll er leicht verständlich formuliert werden. ' +
            'Das bedeutet, dass der Text am Ende den Wert ' + this.inputFlesch + ' des „Flesch-Reading-Ease“-Indexes erfüllen soll, der als Durchschnitt für die Gruppe angegeben wurde. ' +
            'Außerdem solltest du folgende Kriterien für die Formulierung von einfachen Texten berücksichtigen: ' +
            'Sätze sollten kurz gehalten werden (15 – 20 Worte), vorwiegend aktive statt passiver Sprache verwendet werden, ' +
            'konkrete Beispiele und Analogien immer dort verwenden, wo es für das Verständnis sinnvoll ist, klar gegliedert werden und über eine aussagekräftige Überschrift sowie über Zwischenüberschriften im Text verfügen. ' +
            'Verwende Fachsprache, aber füge als Fußnote entsprechende Erklärungen an.'
        });
        console.log(this.messages);
      }
      this.messages.push({
        role: 'user',
        content: message,
      });
      console.log(process.env.VUE_APP_BACKEND_URL);
      await axios
        .post(process.env.VUE_APP_BACKEND_URL + "/unterrichtsplaner", {
          chatHistory: this.messages,
        })
        .then((response) => {
          console.log(response.data.data);
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
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
}

.messages {
  height: 600px;
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
  display: flex;
}

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
  display: flex;
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
