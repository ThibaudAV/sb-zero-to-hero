<script>
  export let color = "red";
</script>

<div style="border-color: {color}">
  <slot />
</div>

<style>
  div {
    border: 2px solid pink;
    padding: 2rem;
  }
</style>
