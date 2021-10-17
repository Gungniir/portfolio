<template>
  <v-container fluid>
    <v-row>
      <v-col cols="1"/>
      <v-col cols="10">
        <v-card outlined>
          <v-row>
            <v-col cols="6" class="d-flex flex-column">
              <v-card-title>{{ project.name }}</v-card-title>
              <v-card-subtitle>{{ currentPage.title }}</v-card-subtitle>
              <v-card-text class="flex-grow-1">{{ currentPage.text }}</v-card-text>
              <v-card-actions class="pa-4">
                <v-btn
                    v-if="isLastPage"
                    color="primary"
                    to="/projects"
                >
                  К проектам
                </v-btn>
                <v-btn
                    v-else
                    color="primary"
                    @click="page++"
                >
                  Далее
                </v-btn>
                <v-fade-transition>
                  <v-btn
                      v-if="page !== 0"
                      text
                      @click="page--"
                  >
                    Назад
                  </v-btn>
                </v-fade-transition>
              </v-card-actions>
            </v-col>
            <v-col cols="6">
              <v-carousel show-arrows-on-hover hide-delimiters v-model="page">
                <v-carousel-item v-for="(page, pageIndex) of project.view.pages" :key="pageIndex">
                  <v-img :src="page.imgSrc" height="105%"/>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Project',
  data: () => ({
    page: 0
  }),
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    project: function () {
      return this.$store.state.projects.find(({id}) => id === this.id)
    },
    currentPage: function () {
      return this.project.view.pages[this.page]
    },
    isLastPage: function () {
      return this.page === this.project.view.pages.length - 1
    }
  },
  methods: {
    main: function () {
      if (this.isLastPage) {
        this.$router.push({name: `Projects`})
        return
      }
      this.page++
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
