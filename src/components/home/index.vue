
<template>
  <div class="home_container col-md-12">
    <article-attracting></article-attracting>
    <div v-for="art in articles" :key="art.id">
      <article-overview
        class="article_overview_item"
        :artical_title="artical_title"
        :userprofile="userprofile"
        :userimage="userimage"
        :author="author"
        :updateTime="updateTime"
        :reviewCount="reviewCount"
        :likeCount="likeCount"
        :outline="outline"
        :articleimage="articleimage"
        :article_href = "art.path"
      ></article-overview>
    </div>
    <!-- -->
  </div>
</template>

<style  lang="scss" scoped>
.home_container {
  display: block;
  .article_overview_item {
    margin-top: 10px;
  }
}
</style>

<script>
import articleAttracting from "@/components/article/item_attracting";
import articleOverview from "@/components/article/item_overview";
import StorageService from "@/services/common/storage.service";
import contentRoutes from "@/services/common/contentRoutes.service";
export default {
  data() {
    return {
      logined: false,
      userName: "",
      artical_title: "this is my fir ddllka; jlllld [[[[[dlkdldl",
      userprofile: require("@/images/u694.png"),
      userimage: require("@/images/u694.png"),
      author: "ricman",
      updateTime: "24小时前",
      reviewCount: 20,
      likeCount: 100,
      outline: "test tstsdddd",
      articleimage: require("@/images/article_01.jpg"),
      article_href: "/article/2018/maud-sparrow"
    };
  },
  created() {
    this.checkIfLogin();
    this.createAriticle();
  },
  methods: {
    checkIfLogin: function() {
      StorageService.getCurrentUser()
        .then(user => {
          if (user.name) {
            this.logined = true;
            this.userName = user.name;
          } else {
            this.logined = false;
          }
        })
        .catch(() => {
          this.logined = false;
        });
    },
    createAriticle: function() {
      this.articles = [];
      _.forEach(contentRoutes, item => {
        let childrens = _.get(item, "children", []);
        let path = _.get(item, "path", '');
        _.forEach(childrens, childrenItem => {
          if (childrenItem.path != "") {
            this.articles.push({
              id: childrenItem.name,
              path: path + '/'+ childrenItem.path
            });
          }
        });
      });
    }
  },
  components: {
    articleOverview,
    articleAttracting
  }
};
</script>