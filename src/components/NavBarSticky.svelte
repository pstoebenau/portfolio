<div id="navbar-sticky">
  <div class="navbar-background"></div>
  <NavBar/>
</div>

<script lang="ts">
  import NavBar from "./NavBar.svelte"
</script>

<style>
#navbar-sticky {
  position: sticky;
  top: 0;
}
#navbar-sticky .navbar-background {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background-color: #111;
  box-shadow: 0 -10px 10px 0 rgba(0, 0, 0, 0.3), 0 10px 10px 0 rgba(0, 0, 0, 0.3);
}
</style>