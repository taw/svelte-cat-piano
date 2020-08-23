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
    new Audio("sounds/Original-cat-sound.mp3")
  ];
  shuffle(audio);

  function clicked(index) {
    audio[index].currentTime = 0;
    audio[index].play();
    // console.log("PLAY", index);
  }
</script>

<style>
  .whiteKey {
    height: 250px;
    background-color: white;
    position: relative;
    border: 1px solid black;
  }
  div.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
  }
  .blackKey {
    position: absolute;
    height: 130px;
    width: 15px;
    top: 0;
    right: 0;
    background-color: black;
    border: grey 1px solid;
  }
  .whiteKey:nth-child(2n) .blackKey {
    top: 0;
    left: 0;
  }
</style>

<div class="container">
  <div class="whiteKey" on:click|stopPropagation={() => clicked(0)}>
    <div class="blackKey" on:click|stopPropagation={() => clicked(0 * 0 + 7)} />
    Meow 1
  </div>
  <div class="whiteKey" on:click|stopPropagation={() => clicked(1)}>
    <div class="blackKey" on:click|stopPropagation={() => clicked(1 * 0 + 7)} />
    Meow 2
  </div>
  <div class="whiteKey" on:click|stopPropagation={() => clicked(2)}>
    <div class="blackKey" on:click|stopPropagation={() => clicked(2 * 0 + 7)} />
    Meow 3
  </div>
  <div class="whiteKey" on:click|stopPropagation={() => clicked(3)}>
    <div class="blackKey" on:click|stopPropagation={() => clicked(3 * 0 + 7)} />
    Meow 4
  </div>
  <div class="whiteKey" on:click|stopPropagation={() => clicked(4)}>
    <div class="blackKey" on:click|stopPropagation={() => clicked(4 * 0 + 7)} />
    Meow 5
  </div>
  <div class="whiteKey" on:click|stopPropagation={() => clicked(5)}>
    <div class="blackKey" on:click|stopPropagation={() => clicked(5 * 0 + 7)} />
    Meow 6
  </div>
  <div class="whiteKey" on:click|stopPropagation={() => clicked(6)}>
    <div class="blackKey" on:click|stopPropagation={() => clicked(6 * 0 + 7)} />
    Meow 7
  </div>
  <div class="whiteKey" on:click|stopPropagation={() => clicked(7)}>
    <div class="blackKey" on:click|stopPropagation={() => clicked(7 * 0 + 7)} />
    Meow 8
  </div>
  <div class="whiteKey" on:click|stopPropagation={() => clicked(8)}>
    <div class="blackKey" on:click|stopPropagation={() => clicked(8 * 0 + 7)} />
    Meow 9
  </div>
  <div class="whiteKey" on:click|stopPropagation={() => clicked(9)}>
    <div class="blackKey" on:click|stopPropagation={() => clicked(9 * 0 + 7)} />
    Meow 10
  </div>
</div>
