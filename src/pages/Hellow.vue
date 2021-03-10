<style lang="less">

</style>

<template>
  <div class="content_body">
      <button @click="onSendSocket()">socket发送消息</button>
  </div>
</template>

<script lang="ts">
import { WebSocketModel } from "@/utils/webSocket";
import { Options, Vue } from "vue-class-component";
@Options({
  components: {
      
  },
})
export default class Main extends Vue {
    onSendSocket() {
        WebSocketModel.webSocket.WsSend('我发送了一条消息');
    }
}
</script>
