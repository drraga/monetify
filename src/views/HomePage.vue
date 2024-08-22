<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue'
import VLogin from '@/components/VLogin.vue'

import getImgURL from '@/composables/getImgURL'

const links = [
  {
    id: 1,
    svg: '../assets/icons/HTMLIconBill.svg',
    alt: 'Track receipts',
    textFirstLine: 'Tracks',
    textSecondLine: 'receipts',
    url: '#'
  },
  {
    id: 2,
    svg: '../assets/icons/HTMLIconMoney.svg',
    alt: 'Manage expences',
    textFirstLine: 'Manage',
    textSecondLine: 'expences',
    url: '#'
  }
]
</script>

<template>
  <div class="page-home">
    <div class="login-section">
      <VLogin />
    </div>

    <div class="page-home__background-wrapper">
      <main>
        <div class="page-home__wrapper">
          <div class="page-home__legend">
            <h1>The expense management app that does it all, for every business.</h1>

            <div class="page-home__legend-features">
              <a v-for="card in links" :key="card.id" :href="card.url">
                <img :src="getImgURL(card.svg)" :alt="card.alt" />

                <p>
                  {{ card.textFirstLine }}
                  <br />
                  {{ card.textSecondLine }}
                </p>
              </a>
            </div>

            <p>
              Save yourself, you team, and your company time and money. Get started with Monetify
              today.
            </p>
          </div>
        </div>
      </main>

      <TheFooter />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/_mixins';
@import '@/assets/styles/_variables';

.page-home {
  .login-section {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    block-size: 100vh;
  }

  &__background-wrapper {
    margin: 0 0 0 pxtorem(375);
  }

  &__wrapper {
    padding: pxtorem(40);
    block-size: 100vh;
  }

  &__legend {
    display: grid;
    padding: pxtorem(32);
    border-radius: 1.25rem;
    background-color: getcolor('green.base');
    block-size: 100%;
    color: #fff;
    place-content: center center;
    text-align: center;
    text-wrap: balance;
  }

  &__legend h1 {
    font-size: calcclamp(20, 48);
    margin-block-end: pxtorem(40);
  }

  &__legend-features {
    display: grid;
    justify-content: center;
    gap: 1rem;
    grid-template-columns: minmax(0, 116px) minmax(0, 116px);
    margin-block-end: pxtorem(40);

    @include mq(767) {
      grid-template-columns: minmax(0, 153px);
    }

    & a {
      display: inline-block;
      padding: pxtorem(12);
      border-radius: pxtorem(12);
      background-color: getcolor('green.lighten1');
      color: #fff;
      max-inline-size: pxtorem(153);
      text-decoration: none;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: getcolor('green.darken1');
      }
    }

    & a > img {
      aspect-ratio: 1;
      margin-block-end: pxtorem(12);
      max-inline-size: pxtorem(68);
    }
  }

  &__legend p {
    font-size: pxtorem(18);
    margin-block-end: pxtorem(12);
  }
}
</style>
