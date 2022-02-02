<template>
  <div>
      <button id="like" @click="onLike">
        👍 Like
      </button>
      <button id="dislike" @click="onDislike">
        👎 Dislike
      </button>
      <p>
        {{likesNb}} Likes - {{dislikesNb}} Dislikes
      </p>
    </div>
</template>

<script>

import { reactive } from 'vue';

export default {
  name: 'liker',

  props: {
    likes: {
      type: Number,
      required: false,
      default: 0
    },
    dislikes: {
      type: Number,
      required: false,
      default: 0
    },
  },


  emits: ['likes', 'dislikes'],

  data(props) {
    props = reactive(props);
    return { ...props, likesNb: props.likes, dislikesNb: props.dislikes };
  },
  
  methods: {
    onLike() {
      this.likesNb++;
      this.$emit('onLike', this.likes)
    },
    onDislike() {
      this.dislikesNb++;
      this.$emit('onDislikes', this.dislikes)
    },
  },
};
</script>
