<script>
let audio = new Audio("sounds/Kitten_Meow-SoundBible.com-1295572573.mp3");

function clicked() {
  audio.currentTime = 0;
  audio.play();
}
</script>

<button on:click={clicked}>
  Meow Please
</button>


<style>
</style>
