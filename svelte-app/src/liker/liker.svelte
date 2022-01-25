<!-- liker buttons -->
<script>
  export let like = 0;
  export let dislike = 0;
  function onLike() {
    like++;
  }
  function onDislike() {
    dislike++;
  }
</script>

<div>
  <button on:click={onLike}>Like</button>
  <button on:click={onDislike}>Dislike</button>
  <p>{like} Likes - {dislike} Dislikes</p>
</div>
