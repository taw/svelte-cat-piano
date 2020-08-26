<script>
  import WhiteKey from "./WhiteKey.svelte";
  import BlackKey from "./BlackKey.svelte";
  import shuffle from "shuffle-array";

  let audio = [
    new Audio("sounds/Kitten_Meow-SoundBible.com-1295572573.mp3"),
    new Audio("sounds/110011__tuberatanka__cat-meow.mp3"),
    new Audio("sounds/362652__trngle__cat-meow.mp3"),
    new Audio("sounds/446025__sophiemezam__meow.mp3"),
    new Audio("sounds/Cat-meow-noise.mp3"),
    new Audio("sounds/Cat-meowing-loudly.mp3"),
    new Audio("sounds/Cute-cat-meowing-on-the-street.mp3"),
    new Audio("sounds/Kitty-meows.mp3"),
    new Audio("sounds/Meowing-cat-sound.mp3"),
    new Audio("sounds/Original-cat-sound.mp3"),
    new Audio("sounds/528192__fthgurdy__cat-meow-5.mp3"),
    new Audio("sounds/448084__breviceps__cute-kitten-meow.mp3")
  ];
  shuffle(audio);
  let whiteSounds = audio.slice(0, 8);
  let blackSounds = audio.slice(8, 8 + 4);
</script>

<style>
  div.container {
    width: calc(100vw - 20px);
    height: calc(100vh - 20px);
    padding: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .piano {
    width: calc(100vw - 20px);
    height: 300px;
    max-width: 800px;
  }
  .white-keys {
    position: absolute;
    width: calc(100vw - 20px);
    height: 300px;
    max-width: 800px;
    display: flex;
    justify-content: stretch;
    align-items: flex-start;
  }
  .black-keys {
    position: absolute;
    width: calc(100vw - 20px);
    height: 300px;
    max-width: 800px;
    display: flex;
    justify-content: stretch;
    align-items: flex-start;
    pointer-events: none;
  }
  .gap {
    width: 65px;
    flex: 1 1 65px;
  }
</style>

<div class="container">
  <div class="piano">
    <div class="white-keys">
      {#each whiteSounds as sound}
        <WhiteKey audio={sound} />
      {/each}
    </div>
    <div class="black-keys">
      {#each blackSounds as sound}
        <div class="gap" />
        <BlackKey audio={sound} />
        <div class="gap" />
      {/each}
    </div>
  </div>
</div>
