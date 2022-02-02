<!-- liker buttons -->
<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let likes = 0;
  export let dislikes = 0;
  function onLike() {
    likes++;
    dispatch("onLike", this.likes);
  }
  function onDislike() {
    dislikes++;
    dispatch("onDislike", this.dislikes);
  }
</script>

<div>
  <button on:click={onLike}>Like</button>
  <button on:click={onDislike}>Dislike</button>
  <p>{likes} Likes - {dislikes} Dislikes</p>
</div>
