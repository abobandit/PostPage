<template>
  <div>
    <h3>Страница с постами</h3>
    <input-ui
        v-focus
        placeholder="Поиск..."
        v-model="searchQuery"
    />
    <div class="app__buttons">
      <button-ui @click="showDialog"
                 style="margin: 15px 0;"
      >Создать пост
      </button-ui>
      <select-ui
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>

    <dialog-ui v-model:show="dialogVisible">
      <h3>Создать пользователя</h3>
      <post-form
          @create="createPost"
      />
    </dialog-ui>

    <post-list
        :posts="searchAndQuery"
        @remove="removePost"
        v-if="!isPostsLoading"
    />

    <div v-else>Идет загрузка...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!--    <div class="page__wrapper">
          <div
              v-for="pageNumber in totalPages"
              :key="pageNumber"
              class="page"
              :class="{
                'current-page': page===pageNumber
              }"
              @click="changePage(pageNumber)"
          >
            {{ pageNumber }}
          </div>
        </div>-->
  </div>
</template>
<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import axios from "axios"
import InputUi from "@/components/input-Ui";

export default {
  components: {
    InputUi,
    PostForm, PostList
  },

  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      limit: 10,
      page: 1,
      totalPages: 0,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержанию'},
      ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },/*
    changePage(pageNumber) {
      this.page = pageNumber
      this.fetchPosts()
    },*/
    async fetchPosts() {
      try {
        this.isPostsLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _limit: this.limit,
            _page: this.page
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data
      } catch (e) {
        console.log('error')
      }finally {
        this.isPostsLoading=false
      }
    },
    async loadMorePosts() {
      try {
        this.page+=1
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _limit: this.limit,
            _page: this.page
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts,...response.data]
      } catch (e) {
        console.log('error')
      }
    }
  },

  mounted() {
    this.fetchPosts()
    // const options = {
    //   rootMargin: '0px',
    //   threshold: 1.0
    // }
    // const callback = (entries, observer)=> {
    //   if (entries[0].isIntersecting && this.page < this.totalPages){
    //     this.loadMorePosts()
    //   }
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer)
  },
  computed: {
    sortedPosts() {
      return [...this.posts.sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))]
    },
    searchAndQuery() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
    /*page(){
      this.fetchPosts()
    }*/
  }
}
</script>

<style>

.app__buttons {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  margin-top: 15px;
  display: flex;
}

.page {
  padding: 10px;
  border: 1px black solid
}

.current-page {
  border: 2px solid teal
}
.observer{
  height: 30px;
  background: green;
}

</style>
