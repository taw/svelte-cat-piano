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
    flex: 1 1 100px;
    height: 250px;
    background-color: white;
    border: 1px solid black;
    box-shadow: 0px 15px 0px 0px #d9d9d9;
    transition: 0.2s;
  }

  .active {
    transform: translateY(14px);
    box-shadow: 0px 1px 0px 0px #d9d9d9;
  }
</style>

<div
  class:active={active}
  on:mousedown={pressed}
/>
