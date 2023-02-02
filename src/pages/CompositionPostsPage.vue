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
          dialogVisible: false,
          sortOptions: [
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По содержанию'},
          ]
        }
      },
      setup(prop){
        const {isPostsLoading,totalPages,posts} = usePosts(10)
        const {sortedPosts,selectedPosts} = useSortedPosts(posts)
        const {searchQuery,sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)
        return{
          isPostsLoading,totalPages,posts,sortedPosts,selectedPosts,earchQuery,sortedAndSearchedPosts
        }
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