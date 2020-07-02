<template>
  <div class="instuctors-list">
    <InstructorCard
      v-for="instructor in instructors"
      :key="instructor.id"
      :instructor="instructor"
    />
  </div>
</template>

<script>
import InstructorCard from '@/components/Instructors/InstructorCard.vue'
export default {
  components: {
    InstructorCard
  },
  props: {
    instructors: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.instuctors-list
  display: grid
  width: calc(80% - 80px)
  padding-left: 10%
  grid-template-columns: calc( 100% / 3 ) calc( 100% / 3 ) calc( 100% / 3 )
  grid-column-gap: 40px
</style>
