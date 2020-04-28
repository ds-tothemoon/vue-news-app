<template>
    <div>
      <ul class="news-list"> 
        <li v-for="item in this.$store.state.news" class="post">
          <!-- 포인트 영역 -->
          <div class="points"> 
            {{ item.points }} 
          </div>
          <!-- 기타 정보 영역 -->
          <div>
            <p class="news-title">
              <a :href="item.url">{{ item.title }}</a>  
            </p>
            <small class="link-text">
              by
              <router-link :to="`/user/${item.user}`" class="link-text">{{item.user}}</router-link>
            </small>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>

export default {
  created(){
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style scoped>
.news-list {
  padding: 0;
  margin: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px soild #eee;
}
.points {
  width: 80px;
  height: 60px;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0px;
}
.link-text {
 color: #828282
}
</style>