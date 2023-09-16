// 封装倒计时逻辑函数
import { computed, onBeforeUnmount, ref } from "vue";
import dayjs from "dayjs";

export const useCountDown = () => {
  // 1.响应式数据 秒数
  let timer = null;
  const time = ref(0);
  // 格式化时间 --秒--分
  const formatTime = computed(() => {
    dayjs.unix(time.value).format("mm分ss秒");
  });
  // 2.开启倒计时的函数
  const start = (currentTime) => {
    // 开始倒计时的逻辑
    // 核心：每隔一秒就减一
    time.value = currentTime;
    timer = setInterval(() => {
      time.value--;
    }, 1000);
  };

  // 组件销毁时清除定时器
  onBeforeUnmount(() => {
    timer && clearInterval(timer);
  });

  return {
    formatTime,
    start,
  };
};
