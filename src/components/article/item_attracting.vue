<template>
  <div class="item_attracting_container">
    <div class="item_attracting_left">
      <a href="/article/308745.html" target="_blank">
        <img class="article_image_big" :src="top1_article_image" />
        <div class="artical_title_big">
          <h2>ddddddddd</h2>
        </div>
      </a>
    </div>
    <div class="item_attracting_right">
      <a href="/article/308745.html" target="_blank">
        <img class="article_image_small_1" :src="top2_article_image" />
        <div class="artical_title_small">
          <h2>ddddddddd</h2>
        </div>
      </a>
      <a href="/article/308745.html" target="_blank">
        <img class="article_image_small_2" :src="top3_article_image" />
        <div class="artical_title_small">
          <h2>ddddddddd</h2>
        </div>
      </a>
    </div>
  </div>
</template>

 <style lang="scss" scoped>
.item_attracting_container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
  overflow: hidden;

  .item_attracting_left {
    cursor: pointer;
  }

  .item_attracting_right {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    margin-right: 0px;
    cursor: pointer;
  }
  .article_image_big {
    border: 1px;
    width: 540px;
    padding-left: 0px;
    height: 240px;
  }
  .article_image_small_1 {
    border: 1px;
    width: 260px;
    height: 115px;
    margin-bottom: 10px;
  }
  .article_image_small_2 {
    border: 1px;
    width: 260px;
    height: 115px;
  }
  .artical_title_big {
    position: relative;
    margin-top: -45px;
    margin-left: 38px;
    line-height: 1.5;
    font-size: 24px;
    color: #fff;
    word-wrap: break-word;
    word-break: normal;
  }
  .artical_title_small {
    margin-top: -45px;
    margin-left: 20px;
    line-height: 1.5;
    font-size: 24px;
    color: #fff;
    word-wrap: break-word;
    word-break: normal;
  }
  a:link {
    text-decoration: none;
  }
}
</style>

<script>
import articleOutline from "@/components/article/item_outline";
export default {
  components: {
    articleOutline
  },
  data() {
    return {
      logined: false,
      top1_article_image: require("@/images/article_01.jpg"),
      top2_article_image: require("@/images/article_01.jpg"),
      top3_article_image: require("@/images/article_01.jpg")
    };
  }
};
</script>
