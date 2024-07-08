<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button @click="onclick" type="primary">按钮</el-button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <el-upload
      style="display: none"
      class="upload-demo"
      :on-error="onError"
      :before-upload="beforeUpload"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      url: "https://api.openai-hk.com/v1/chat/completions",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer hk-o2u3tq1000033790b4fe3f16832d6b12400526cab47258b0",
      },
      input: "",
    };
  },
  mounted() {},
  methods: {
    onclick() {
      const data = {
        max_tokens: 1200,
        model: "gpt-3.5-turbo",
        temperature: 0.8,
        top_p: 1,
        presence_penalty: 1,
        messages: [
          {
            role: "system",
            content:
              "You are ChatGPT, a large language model trained by OpenAI. Answer as concisely as possible.",
          },
          {
            role: "user",
            content: "你是chatGPT多少？",
          },
        ],
      };
      axios
        .post(this.url, data, { headers: this.headers })
        .then((response) => {
          const result = response.data;
          console.log('onclick', result);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    onError(e) {
      console.log("onError", e);
    },
    async beforeUpload(e) {
      console.log("beforeUpload", e);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
