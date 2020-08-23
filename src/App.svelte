<script>
  let audio = [
    new Audio("sounds/Kitten_Meow-SoundBible.com-1295572573.mp3"),
    new Audio("sounds/110011__tuberatanka__cat-meow.mp3"),
    new Audio("sounds/362652__trngle__cat-meow.mp3"),
    new Audio("sounds/446025__sophiemezam__meow.mp3")
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
