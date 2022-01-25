<template>
  <div>
      <button id="like" @click="onLike">
        👍 Like
      </button>
      <button id="dislike" @click="onDislike">
        👎 Dislike
      </button>
      <p>
        {{likes}} Likes - {{dislikes}} Dislikes
      </p>
    </div>
</template>

<script>

export default {
  name: 'liker',


  emits: ['likes', 'dislikes'],
  data() {
    return { likes: 0, dislikes:0 };
  },
  methods: {
    onLike() {
      this.likes++;
      this.$emit('likes', this.likes)
    },
    onDislike() {
      this.dislikes++;
      this.$emit('dislikes', this.dislikes)
    },
  },
};
</script>
