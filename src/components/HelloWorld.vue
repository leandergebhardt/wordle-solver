<script lang="ts">
import file from 'C:/workspace/Buffer32/wordle-solver/wordlist-german.txt'
export default {
  name: 'App',
  setup() {
    return {
      contents: ''
    }
  },
  mounted() {
    let reader = new FileReader()
    reader.onload = () => {
      this.contents = reader.result
    }
  }
}
</script>

<template>
  <div class="main">
    <div>
      <label for="good">Good Letters</label>
      <input id="good" type="text" />
    </div>

    <div>
      <label for="banned">Banned Letters</label>
      <input id="banned" type="text" />
    </div>
  </div>

  <div>
    <table>
      <tbody>
        <tr id="row0">
          <td style="--animation-order: 0"><p>A</p></td>
          <td style="--animation-order: 0"><p>B</p></td>
          <td style="--animation-order: 0"><p>C</p></td>
          <td style="--animation-order: 0"><p>D</p></td>
          <td style="--animation-order: 0"><p>E</p></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

table {
  width: 70%;
}
td {
  /*   width:16%; */
  border: 2px solid #555;
  position: relative;
  transition: transform 1s;
  animation: newgame 0.5s forwards;
  animation-delay: calc(var(--animation-order) * 100ms);
}
td:after {
  content: '';
  display: block;
  margin-top: 100%;
}
td.left:before,
td.right:before,
td.both:before {
  position: absolute;
  left: 0;
  right: 0;
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  content: '';
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
