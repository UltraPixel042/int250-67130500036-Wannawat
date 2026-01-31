<script setup>
import { ref } from "vue";

const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease")

const count = ref(0);
const step = ref(1);

const min = 0;
const max = 100;

function increment() {
  const nextValue = count.value + step.value;

  if (nextValue >= max) {
    count.value = max; 
    increase.disabled = true; 
  } else {
    count.value = nextValue;
  }
  
  decrease.disabled = false;
}

function decrement() {
  const nextValue = count.value - step.value;

  if (nextValue <= min) {
    count.value = min;
    decrease.disabled = true; 
  } else {
    count.value = nextValue;
  }

  increase.disabled = false;
}
function reset() {
  count.value = 0;
}
</script>

<template>
  <body class="d-flex align-items-center justify-content-center min-vh-100">
    <div class="container">
      <div class="card">
        <h1>Counter App</h1>
        <p>Click buttons to change the number.</p>

        <div class="count">{{ count }}</div>

        <div class="row">
          <button class="btn inc" @click="increment" id="increase">+ Increase</button>
          <button class="btn dec" @click="decrement" id="decrease">- Decrease</button>
        </div>

        <div class="row">
          <button class="btn reset" @click="reset">Reset</button>
        </div>

        <div class="hint">
          step: <input type="number" min="1" v-model.number="step" />
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
.card {
  width: min(480px, 92vw);
  background-color: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
}
h1 {
  margin: 0 0 6px;
  text-align: center;
  font-size: 36px;
}
body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  text-align: center;
}
.count {
  font-size: 100px;
  text-align: center;
}
.row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.hint {
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  padding: 10px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 20px;
  cursor: pointer;
}
button:active {
  background-color: #e0e0e0;
  transform: scale(0.95); 
}

button:disabled {
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
  border-color: #999999;
}

.reset {
  width: 100px;
}
input {
  border: 1px solid black;
  border-radius: 20px;
  padding: 5px;
  margin: 10px;
}
</style>
