<script setup lang="ts">
const footerLinks = [
  {
    title: 'Features',
    links: [
      { name: 'Expense Management', href: '#' },
      { name: 'Spend Management', href: '#' }
    ]
  },
  {
    title: 'Resourses',
    links: [
      { name: 'Privacy', href: '#' },
      { name: 'Community', href: '#' }
    ]
  },
  {
    title: 'Learn more',
    links: [
      { name: 'About monetify', href: '#' },
      { name: 'Blog', href: '#' }
    ]
  },
  {
    title: 'Get started',
    links: [
      { name: 'Create a new account', href: '#' },
      { name: 'Log in', href: '#' }
    ]
  }
]
</script>

<template>
  <footer>
    <div class="column">
      <div v-for="column in footerLinks" :key="column.title" class="column-wrapper">
        <h4>
          {{ column.title }}
        </h4>

        <ul>
          <li v-for="link in column.links" :key="link.name">
            <a :href="link.href">
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import '@/assets/styles/_mixins';
@import '@/assets/styles/_variables';

footer {
  padding: pxToRem(64) pxToRem(32);

  & .column {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(178px, 1fr));
    justify-content: center;
    align-content: center;
    margin: 0 0 pxToRem(40);
  }

  & .column-wrapper {
    padding: 1rem;

    & h4 {
      font-size: pxToRem(17);
      font-weight: 700;
      margin: 0 0 1rem;
      color: getcolor('green.lighten2');
    }

    & a {
      padding: pxToRem(4) 0;
      font-size: pxToRem(15);
      text-decoration: none;
      color: #000;
    }

    & li:not(:last-child) {
      margin: 0 0 pxToRem(8);
    }
  }
}
</style>
