<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="10" offset-md="1">
        <v-card outlined>
          <v-row v-if="$vuetify.breakpoint.smAndUp">
            <v-col cols="6" class="d-flex flex-column">
              <v-card-title>{{ project.name }}</v-card-title>
              <v-card-subtitle>{{ currentPage.title }}</v-card-subtitle>
              <v-card-subtitle style="margin-top: -32px" v-if="tags.length > 0">
                <v-chip-group>
                  <v-chip
                      v-for="(tag, i) of tags"
                      :key="i"
                      outlined
                      :color="tag.color"
                      small
                      pill>
                    {{ tag.text }}
                    <v-icon small right v-if="tag.icon">{{ tag.icon }}</v-icon>
                  </v-chip>
                </v-chip-group>
              </v-card-subtitle>
              <v-card-text class="flex-grow-1 linebreak">{{ currentPage.text }}</v-card-text>
              <v-card-actions class="pa-4" v-if="currentPage.link">
                <v-btn color="accent" :href="currentPage.link.url" target="_blank">
                  <v-icon left>{{ currentPage.link.icon ? currentPage.link.icon : 'mdi-web' }}</v-icon>
                  {{ currentPage.link.text }}
                </v-btn>
              </v-card-actions>
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
                  <v-img :src="page.imgSrc" contain height="105%"/>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
          <template v-else>
            <v-carousel show-arrows-on-hover hide-delimiters v-model="page" height="200">
              <v-carousel-item v-for="(page, pageIndex) of project.view.pages" :key="pageIndex">
                <v-img :src="page.imgSrc" contain height="200"/>
              </v-carousel-item>
            </v-carousel>
            <v-card-title>{{ project.name }}</v-card-title>
            <v-card-subtitle>{{ currentPage.title }}</v-card-subtitle>
            <v-card-subtitle style="margin-top: -32px" v-if="tags.length > 0">
              <v-chip-group>
                <v-chip
                    v-for="(tag, i) of tags"
                    :key="i"
                    outlined
                    :color="tag.color"
                    small
                    pill>
                  {{ tag.text }}
                  <v-icon small right v-if="tag.icon">{{ tag.icon }}</v-icon>
                </v-chip>
              </v-chip-group>
            </v-card-subtitle>
            <v-card-text class="flex-grow-1 linebreak">{{ currentPage.text }}</v-card-text>
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
          </template>
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
    },
    tags: function () {
      if (!this.project.tags) {
        return []
      }

      return this.project.tags.map(tagName => this.$store.state.tags[tagName])
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
.linebreak {
  white-space: pre-line;
}
</style>
