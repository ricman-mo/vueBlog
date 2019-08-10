<template>
  <div class="item_overview_container">
    <a :href="article_href" target="_blank">
      <img class="article_image" :src="articleimage" />
    </a>

    <article-outline
      :title="artical_title"
      :userprofile="userprofile"
      :userimage="userimage"
      :author="author"
      :updateTime="updateTime"
      :reviewCount="reviewCount"
      :likeCount="likeCount"
      :outline="outline"
    ></article-outline>
  </div>
</template>

<style lang="scss" scoped>
.item_overview_container {
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  background-color: #f4f4f4;
  .article_image {
    width: 200px;
    height: 200px;
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
    };
  },
   props: {
    artical_title: String,
    userprofile: String,
    userimage: String,
    author: String,
    updateTime: String,
    reviewCount: Number,
    likeCount: Number,
    outline: String,
    articleimage: String,
    article_href: String
  }
};
</script>
