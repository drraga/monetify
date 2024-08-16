<script setup lang="ts">
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

const getImgURL = (name: string) => {
  return new URL(name, import.meta.url).href
}
</script>

<template>
  <main class="page-home">
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
          Save yourself, you team, and your company time and money. Get started with Monetify today.
        </p>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@import '@/assets/styles/_mixins';
@import '@/assets/styles/_variables';

.page-home {
  position: relative;
  height: 100%;

  &__wrapper {
    margin-inline-start: pxToRem(375);
    padding: pxToRem(40);
  }

  &__legend {
    display: grid;
    justify-content: center;
    align-content: center;
    border-radius: 1.25rem;
    background-color: getcolor('green.base');
    padding: pxToRem(32);
    color: #fff;
    text-wrap: balance;
    text-align: center;
    min-block-size: pxToRem(580);
  }

  &__legend h1 {
    font-size: calcClamp(20, 48);
    margin-block-end: pxToRem(40);
  }

  &__legend-features {
    display: grid;
    grid-template-columns: minmax(0, 116px) minmax(0, 116px);
    justify-content: center;
    gap: 1rem;
    margin-block-end: pxToRem(40);

    @include mq(767) {
      grid-template-columns: minmax(0, 153px);
    }

    & a {
      max-inline-size: pxToRem(153);
      color: #fff;
      text-decoration: none;
      display: inline-block;
      padding: pxToRem(12);
      border-radius: pxToRem(12);
      background-color: getcolor('green.lighten1');
      transition: background-color 0.3s ease;

      &:hover {
        background-color: getcolor('green.darken1');
      }
    }

    & a > img {
      max-inline-size: pxToRem(68);
      aspect-ratio: 1;
      margin-block-end: pxToRem(12);
    }
  }

  &__legend p {
    font-size: pxToRem(18);
    margin-block-end: pxToRem(12);
  }
}
</style>
