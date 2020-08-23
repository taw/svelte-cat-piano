<script>
  let audio = [
    new Audio("sounds/Kitten_Meow-SoundBible.com-1295572573.mp3"),
    new Audio("sounds/110011__tuberatanka__cat-meow.mp3"),
    new Audio("sounds/362652__trngle__cat-meow.mp3"),
    new Audio("sounds/446025__sophiemezam__meow.mp3")
    new Audio("sounds/Cat-meow-noise.mp3")
    new Audio("sounds/Cat-meowing-loudly.mp3")
    new Audio("sounds/Cute-cat-meowing-on-the-street.mp3")
    new Audio("sounds/Kitty-meows.mp3")
    new Audio("sounds/Meowing-cat-sound.mp3")
    new Audio("sounds/Original-cat-sound.mp3")
  ];

  function clicked(index) {
    audio[index].currentTime = 0;
    audio[index].play();
  }
</script>

<style>

</style>

<button on:click={() => clicked(0)}>Meow Please</button>
<button on:click={() => clicked(1)}>Meow 2</button>
<button on:click={() => clicked(2)}>Meow 3</button>
<button on:click={() => clicked(3)}>Meow 4</button>
<button on:click={() => clicked(4)}>Meow 5</button>
<button on:click={() => clicked(5)}>Meow 6</button>
<button on:click={() => clicked(6)}>Meow 7</button>
<button on:click={() => clicked(7)}>Meow 8</button>
<button on:click={() => clicked(8)}>Meow 9</button>
<button on:click={() => clicked(9)}>Meow 10</button>
