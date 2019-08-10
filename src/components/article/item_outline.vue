<template>
  <b-card class="item_card">
    <div class="item_container">
      <h2>{{title}}</h2>
      <div class="sub_author">
        <div class="author-face">
          <a :href="userprofile" target="_blank">
            <img class="author_image" :src="userimage" />
          </a>
        </div>
        <a :href="userprofile" target="_blank">
          <span class="author-name">{{author}}</span>
        </a>
      </div>
      <div class="sub_outline">
        <h3>{{outline}}</h3>
      </div>
      <div class="sub_comment">
        <span class="time">{{updateTime}}</span>
        <i class="el-icon-s-comment"></i>
        <em>{{reviewCount}}</em>
        <i class="el-icon-star-on"></i>
        <em>{{likeCount}}</em>
      </div>
    </div>
  </b-card>
</template>

<style lang="scss" scoped>
.item_card {
  width: 100%;
  .item_container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    .sub_author {
      display: inline-flex;
      flex-direction: row;
      font-size: 14px;
      padding-left: 12px;
      color: #27282d;
    }

    .author-face {
       display: block;
    }
    .author-name {
      font-size: 14px;
      padding-left: 12px;
      color: #27282d;
    }

    .author_image {
      width: 24px;
      height: 24px;
    }

    .sub_outline {
      display: block;
      margin-top: 20px;
      font-size: 18px;
      line-height: 1.5;
      word-break: normal;
      word-wrap: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .sub_comment {
      display: block;
      color: #999;
      font-weight: 400;
      font-size: 12px;
      font-style: normal;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: String,
    author: String,
    updateTime: String,
    reviewCount: Number,
    likeCount: Number,
    outline: String,
    userimage: String,
    userprofile: String
  }
};
</script>
