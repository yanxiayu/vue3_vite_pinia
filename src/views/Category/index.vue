<!-- 实现思路：准备组件模板 -> 封装接口函数 -> 调用接口获取数据(使用路由参数) -> 渲染模板 -->
<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <!-- 一级菜单与二级菜单之间的分隔符separator=">" -->
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCategoryAPI } from "@/apis/category";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

// 定义响应式数据，根据接口文档判断数据类型
const categoryData = ref({});
// 通过useRoute获取路由参数，route实例对象，包含路由的配置信息
const route = useRoute();
// 调用接口获取数据
const getCategory = async () => {
  const res = await getCategoryAPI(route.params.id); // params与定义路由时的传参相关
  categoryData.value = res.result;
};

onMounted(() => {
  getCategory();
});
</script>

<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;

        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}
</style>
