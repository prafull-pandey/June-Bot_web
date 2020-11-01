var chat = new Vue({
  el: "#app",
  data: {
    bobMessage: "",
    youMessage: "",
    messages: [
      {
        body: "Hi! I'm June. I am very talkative. I speak everytime.",
        author: "june",
      },
    ],
  },
  methods: {
    sendMessagedir(direction) {
      if (!this.youMessage && !this.bobMessage) {
        return;
      }
      if (direction === "out") {
        this.messages.push({ body: this.youMessage, author: "you" });
        this.youMessage = "";
      } else if (direction === "in") {
        this.messages.push({ body: this.bobMessage, author: "June" });
        this.bobMessage = "";
      } else {
        alert("something went wrong");
      }
      Vue.nextTick(() => {
        let messageDisplay = this.$refs.chatArea;
        messageDisplay.scrollTop = messageDisplay.scrollHeight;
      });
    },
    clearAllMessages() {
      this.messages = [];
    },
    sendMessage() {
      var messageDisplay;

      var message = this.$refs.inputMessage.value;
      if (!message) {
        return;
      }
      chat.messages.push({ body: message, author: "you" });
      Vue.nextTick(() => {
        messageDisplay = this.$refs.chatArea;
        messageDisplay.scrollTop = messageDisplay.scrollHeight;
        this.$refs.inputMessage.value = "";
      });
      axios
        .get("http://localhost:5000/askJune?ask=" + message)
        .then(function (response) {
          chat.messages.push({ body: response.data, author: "june" });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          messageDisplay.scrollTop = messageDisplay.scrollHeight;
        });
      //messageDisplay.scrollTop = messageDisplay.scrollHeight;
    },
  },
});
