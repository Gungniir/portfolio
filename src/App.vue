<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <v-app-bar
        app
        color="primary"
    >
      <div class="d-flex align-center pointer" @click="$route.name !== 'Home' ? $router.push({name: 'Home'}) : ''">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2 rounded-circle"
            contain
            src="~@/assets/ava.jpg"
            transition="scale-transition"
            width="40"
        />
        Владимир Курусь
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex align-center">
        <v-tooltip
            v-for="contact of $store.state.contacts"
            :key="contact.name"
            bottom
        >
          <template #activator="{ on, attrs }">
            <v-btn icon class="mr-2" :href="contact.link" target="_blank" v-bind="attrs" v-on="on">
              <v-icon>{{ contact.icon }}</v-icon>
            </v-btn>
          </template>
          <span>{{ contact.name }}</span>
        </v-tooltip>
        <v-tooltip
            bottom
        >
          <template #activator="{ on, attrs }">
            <v-btn icon class="mr-2" @click="$vuetify.theme.dark = !$vuetify.theme.dark" v-bind="attrs" v-on="on">
              <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>
          </template>
          <span>Тема</span>
        </v-tooltip>
      </div>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }
};
</script>

<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
</style>
