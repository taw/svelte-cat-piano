<script>
  let audio = [
    new Audio("sounds/Kitten_Meow-SoundBible.com-1295572573.mp3"),
    new Audio("sounds/110011__tuberatanka__cat-meow.mp3"),
  ];

  function clicked(index) {
    audio[index].currentTime = 0;
    audio[index].play();
  }
</script>

<style>

</style>

<button on:click={() => clicked(0)}>Meow Please</button>
<button on:click={() => clicked(1)}>C</button>
