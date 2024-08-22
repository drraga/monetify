<script setup lang="ts">
const connectionTypes = ['Email', 'Phone Number', 'Google', 'Apple']
</script>

<template>
  <div class="login">
    <h2>Monetify</h2>

    <p>Welcome! How would you like to connect?</p>

    <ul>
      <li v-for="(typeOfConnection, i) in connectionTypes" :key="i">
        <button>{{ typeOfConnection }}</button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/_mixins';
@import '@/assets/styles/_variables';

.login {
  padding: 15vh pxtorem(48) 0;
  background: getcolor('green.darken2');
  block-size: 100%;
  inline-size: pxtorem(375);

  & h2 {
    margin: 0 0 pxtorem(32);
    color: getcolor('green.lighten2');
    font-size: pxtorem(32);
  }

  & p {
    margin: 0 0 pxtorem(18);
    color: #fff;
    font-size: pxtorem(15);
    text-wrap: balance;
  }

  & ul {
    display: grid;
    gap: pxtorem(15);
  }

  & button {
    position: relative;
    width: 100%;
    padding: pxtorem(8) pxtorem(16);
    border: none;
    border-radius: pxtorem(44);
    background-color: getcolor('green.darken3');
    color: #fff;
    cursor: pointer;
    font-size: pxtorem(15);
    font-weight: 600;
    line-height: 2.4;
    text-align: left;
    transition: background-color 0.5s ease;

    &::after {
      position: absolute;
      right: pxtorem(22);
      padding: pxtorem(4);
      border-radius: pxtorem(1);
      border-top: pxtorem(3) solid getcolor('green.lighten2');
      border-right: pxtorem(3) solid getcolor('green.lighten2');
      content: '';
      font-size: 1rem;
      transform: rotate(45deg) translate3d(90%, 50%, 0);
    }

    &:hover {
      background-color: getcolor('green.darken4');
    }
  }
}
</style>
