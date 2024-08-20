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
  block-size: 100%;
  inline-size: pxToRem(375);
  background: getcolor('green.darken2');
  padding: 15vh pxToRem(48) 0;

  & h2 {
    font-size: pxToRem(32);
    margin: 0 0 pxToRem(32);
    color: getcolor('green.lighten2');
  }

  & p {
    font-size: pxToRem(15);
    color: #fff;
    margin: 0 0 pxToRem(18);
    text-wrap: balance;
  }

  & ul {
    display: grid;
    gap: pxToRem(15);
  }

  & button {
    position: relative;
    font-size: pxToRem(15);
    font-weight: 600;
    line-height: 2.4;
    cursor: pointer;
    border: none;
    width: 100%;
    text-align: left;
    border-radius: pxToRem(44);
    padding: pxToRem(8) pxToRem(16);
    background-color: getcolor('green.darken3');
    transition: background-color 0.5s ease;
    color: #fff;

    &:after {
      position: absolute;
      right: pxToRem(22);
      content: '';
      padding: pxToRem(4);
      border-top: pxToRem(3) solid getcolor('green.lighten2');
      border-right: pxToRem(3) solid getcolor('green.lighten2');
      border-radius: pxToRem(1);
      transform: rotate(45deg) translate3d(90%, 50%, 0);
      font-size: 1rem;
    }

    &:hover {
      background-color: getcolor('green.darken4');
    }
  }
}
</style>
