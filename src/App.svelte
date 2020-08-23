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
    new Audio("sounds/528192__fthgurdy__cat-meow-5.mp3"),
    new Audio("sounds/448084__breviceps__cute-kitten-meow.mp3")
  ];
  shuffle(audio);
  let whiteSounds = audio.slice(0, 8);
  let blackSounds = audio.slice(8, 8 + 4);

  function clickedWhite(index) {
    console.log("WHITE", index);
    whiteSounds[index].volume = 0.1;
    whiteSounds[index].currentTime = 0;
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
    height: calc(100vh - 20px);
    padding: 10px;
  }

  .whiteKey {
    flex: 1;
    height: 250px;
    background-color: white;
    position: relative;
    border: 1px solid black;
    box-shadow: 0px 15px 0px 0px #d9d9d9;
    transition: 0.2s;
  }

  .whiteKey:active:focus {
    transform: translateY(14px);
    box-shadow: 0px 1px 0px 0px #d9d9d9;
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
    transition: 0.2s;
  }

  .blackKey:active:focus {
    transform: translateY(14px);
    box-shadow: 0px 1px 0px 0px #999999;
  }

  .whiteKey:nth-child(2n) .blackKey {
    top: 0;
    left: 0;
  }
  .container:active:focus {
    background-color: pink;
  }
  :focus {
    outline: none;
  }
</style>

<div class="container">
  {#each whiteSounds as sound, index}
    <div
      class="whiteKey"
      on:click|stopPropagation={() => clickedWhite(index)}
      tabindex={100 + index}>
      <div
        class="blackKey"
        on:click|stopPropagation={() => clickedBlack(Math.floor(index / 2))}
        tabindex={200 + index} />
    </div>
  {/each}
</div>
