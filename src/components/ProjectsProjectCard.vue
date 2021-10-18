<template>

  <v-card outlined>
    <v-row v-if="$vuetify.breakpoint.smAndUp" :class="reversed ? `flex-row-reverse` : ``">
      <v-col cols="6" class="d-flex flex-column">
        <v-card-title>{{ project.name }}</v-card-title>
        <v-card-subtitle v-if="tags.length > 0">
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
        <v-card-text class="flex-grow-1 linebreak">{{ project.description }}</v-card-text>
        <v-card-actions class="pa-4">
          <v-btn color="primary" :to="`/project/${project.id}`">Подробнее</v-btn>
        </v-card-actions>
      </v-col>
      <v-col cols="6" class="overflow-hidden">
        <div class="overflow-hidden fill-height">
          <v-img :src="project.imgSrc" class="scale"/>
        </div>
      </v-col>
    </v-row>
    <template v-else>
      <v-img :src="project.imgSrc" height="200"/>
      <v-card-title>{{ project.name }}</v-card-title>
      <v-card-subtitle v-if="tags.length > 0">
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
      <v-card-text class="linebreak">{{ project.description }}</v-card-text>
      <v-card-actions class="pa-4">
        <v-btn color="primary" :to="`/project/${project.id}`">Подробнее</v-btn>
      </v-card-actions>
    </template>
  </v-card>
</template>

<script>
export default {
  name: "ProjectsProjectCard",
  props: {
    project: {
      type: Object,
      required: true
    },
    reversed: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    tags: function () {
      if (!this.project.tags) {
        return []
      }

      return this.project.tags.map(tagName => this.$store.state.tags[tagName])
    }
  }
}
</script>

<style scoped lang="scss">
.reversed:nth-of-type(2n) {
  flex-direction: row-reverse;
}

.scale {
  transition: all 0.2s;
  height: 100%;

  &:hover {
    transform: scale(1.2);
  }
}

.linebreak {
  white-space: pre-line;
}
</style>
