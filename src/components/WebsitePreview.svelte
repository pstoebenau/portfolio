<div class="website-preview">
  <a href="{website.url}">
    <img src="{website.img}" alt="">
  </a>
</div>

<script lang="ts">
  export let website: { url:string; img:string };
</script>

<style lang="scss">
.website-preview {
  img {
    width: 100%;
    box-shadow: 0 -10px 10px 0 rgba(0, 0, 0, 0.3),
      0 10px 10px 0 rgba(0, 0, 0, 0.3);
  }
}
</style>