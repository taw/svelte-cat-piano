<script>
  export let audio;
  let active = false;

  function pressed() {
    active = true;
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => active=false, 200)
  }
</script>

<style>
  div {
    flex: 1 1 60px;
    height: 150px;
    width: 60px;
    background-color: black;
    border: grey 1px solid;
    box-shadow: 0px 15px 0px 0px #999999;
    transition: 0.2s;
    pointer-events: all;
  }

  .active {
    transform: translateY(14px);
    box-shadow: 0px 1px 0px 0px #999999;
  }
</style>

<div
  class:active={active}
  on:mousedown={pressed}
/>
