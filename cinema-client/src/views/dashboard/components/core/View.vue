<template>
  <v-content>
    <div id="content">
      <router-view />

    </div>

    <dashboard-core-footer />
  </v-content>
</template>

<script>
  export default {
    name: 'DashboardCoreView',

    components: {
      DashboardCoreFooter: () => import('./Footer'),
    },
  }
</script>

<style lang="css">
#content {
  min-height: 100%;
}
</style>
