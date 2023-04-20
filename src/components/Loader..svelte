<script lang='ts'>
	import { onDestroy, onMount } from "svelte";
	import { text } from "svelte/internal";
	import { fade } from "svelte/transition";
	import { Vector2 } from "three";

  let container: HTMLElement;
  let ball: HTMLElement;
  let loadingText: HTMLElement;

  const gravity = new Vector2(0, -0.1);
  let vel = new Vector2(0, 0);
  let pos: Vector2;
  let loadingTextInterval: NodeJS.Timer;
  let loadingTextState = 0;

  onMount(() => {
    pos = getBallPos();
    requestAnimationFrame(updateBallPos)
    loadingTextInterval = setInterval(animateLoadingText, 750);
  });

  onDestroy(() => {
    clearInterval(loadingTextInterval);
  });

  function animateLoadingText() {
    const textArr = ["Loading", "Loading.", "Loading..", "Loading..."];
    loadingText.textContent = textArr[loadingTextState++ % textArr.length];
  }

  function getBallPos() {
    const x = 0;
    const y = container.clientHeight - ball.offsetTop;
    return new Vector2(x, y);
  }

  function setBallPos(pos: Vector2) {
    ball.style.left = `${container.clientWidth / 2 + pos.x}px`;
    ball.style.top = `${container.clientHeight - pos.y}px`;
  }

  function updateBallPos() {
    vel.add(gravity);
    pos.add(vel);

    // Bounce
    if (pos.y < ball.clientHeight / 2) {
      vel.multiplyScalar(-1);
      pos.add(vel);
    }

    setBallPos(pos);
    requestAnimationFrame(updateBallPos);
  }
</script>

<div out:fade={{delay: 2000}} bind:this={container} id="loading-screen">
  <h3 bind:this={loadingText} id="loading-text">Loading...</h3>
  <div bind:this={ball} class="ball" />
</div>

<style lang="scss">
  #loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #111;
    z-index: 999;
  }

  #loading-text {
    color: white;
    position: absolute;
    top: calc(50% - 100px);
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .ball {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #86d4a7;
    border-radius: 100%;
    width: 50px;
    height: 50px;
  }
</style>