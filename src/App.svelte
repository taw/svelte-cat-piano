<script>
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
    new Audio(`528192__fthgurdy__cat-meow-5.wav`),
    new Audio(`448084__breviceps__cute-kitten-meow.mp3`)
  ];
  shuffle(audio);
  let whiteSounds = audio.slice(0, 8);
  let blackSounds = audio.slice(8, 8 + 4);

  let highlightedButtonWhite = null;

  function clickedWhite(index) {
    console.log("WHITE", index);
    highlightedButtonWhite = index;
    whiteSounds[index].volume = 0.1;
    whiteSounds[index].currentTime = 0;
    whiteSounds[index].addEventListener("ended", () => {
      if (highlightedButtonWhite === index) {
        highlightedButtonWhite = null;
      }
    });
    whiteSounds[index].play();
  }
  function clickedBlack(index) {
    console.log("BLACK", index);
    blackSounds[index].volume = 0.1;
    blackSounds[index].currentTime = 0;
    blackSounds[index].play();
  }
</script>

<style>
  div.container {
    display: flex;
    justify-content: stretch;
    align-items: center;
    min-height: 100%;
    padding: 10px;
  }
  .whiteKey {
    flex: 1;
    height: 250px;
    background-color: white;
    position: relative;
    border: 1px solid black;
  }
  .whiteKey.highlighted {
    background-color: red;
  }
  .blackKey {
    position: absolute;
    height: 150px;
    width: 20px;
    top: 0;
    right: 0;
    background-color: black;
    border: grey 1px solid;
    box-shadow: 0px 15px 0px 0px #999999;
  }
  .whiteKey:nth-child(2n) .blackKey {
    top: 0;
    left: 0;
  }
</style>

<div class="container">
  {#each whiteSounds as sound, index}
    <div
      class="whiteKey"
      on:click|stopPropagation={() => clickedWhite(index)}
      class:highlighted={highlightedButtonWhite === index}>
      <div
        class="blackKey"
        on:click|stopPropagation={() => clickedBlack(Math.floor(index / 2))} />
    </div>
  {/each}
</div>
