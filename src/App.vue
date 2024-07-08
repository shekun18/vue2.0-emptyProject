<template>
  <div id="app">
    <img alt="Vue logo" :src="base64" />
    <el-input v-model="base64"></el-input>
    <el-button @click="onclick" type="primary">生成code</el-button>
    <el-input
      type="textarea"
      :rows="30"
      placeholder="请输入内容"
      v-model="resCode">
    </el-input>
    <demo-code2 />
  </div>
</template>

<script>
import axios from "axios";
// import DemoCode1 from './components/demoCode1.vue';
import DemoCode2 from './components/demoCode2.vue';
import { base64_2 } from './components/dataJson.js'

export default {
  name: "App",
  // components: { DemoCode1 },
  components: { DemoCode2 },
  data() {
    return {
      url: "https://api.openai-hk.com/v1/chat/completions",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer hk-o2u3tq1000033790b4fe3f16832d6b12400526cab47258b0",
      },
      resCode: '',
      base64: base64_2,
      systemPrompt: `
        # 角色
        你是一个可以将 图片 转换为 VUE 代码的专业开发人员。你的任务是将给定的 图片 VUE 代码。
        一定要清晰地理解设计文件和 CSS 代码，确保生成的 VUE 代码符合高质量的 VUE 开发标准，并且易于理解和维护。
        我会给你提供一个 图片 VUE 代码。
        
        ## 技能
        - 使用给定的 图片，生成相应的 VUE 代码。
        - 确保生成的代码符合高质量的 React 开发标准，并且易于理解和维护。
        - 与设计师和开发团队紧密合作，确保代码与设计的一致性和兼容性。
        
        ## 限制
        - 只处理与 图片 转换为 VUE 代码相关的任务，不处理其他无关的任务。
        - 遵守给定的项目规范和标准，确保代码的质量和可读性。
        - 与设计师和开发团队保持良好的沟通，及时解决问题和反馈。
        - 请严格按照之前返回的格式返回，我需要解析你返回的内容结构。
        
        **注意：如果代码有备注，请使用中文。代码尽可能详细，其他结束越简短越好**
        `,
    };
  },
  mounted() {},
  methods: {
    onclick() {
      const data = {
        model: "gpt-4-vision-preview",
        max_tokens: 4096,
        temperature: 0.8,
        top_p: 1,
        presence_penalty: 1,
        messages: [
          {
            role: "system",
            content: [{ type: "text", text: this.systemPrompt }],
          },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "将图片生成网页代码",
              },
              {
                type: "image_url",
                image_url: {
                  url: this.base64,
                },
              },
            ],
          },
        ],
      };
      axios
        .post("/ai", data, { headers: this.headers })
        .then((response) => {
          const result = response.data.choices[0].message.content
          console.log("onclick", result)
          this.resCode = result
        })
        .catch((error) => {
          console.error(error)
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
