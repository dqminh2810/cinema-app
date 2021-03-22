<template>
  <tr>
    <td>{{room.movie}}</td>
    <td>{{room.time}}</td>
    <td>{{room.users.length}}</td>
    <td>{{room.status}}</td>
    <td class="text-right">
      <v-btn
        to="/cinema/1"s
        color="success"
        rounded
        class="mr-0"
      >
        Join
      </v-btn>
    </td>
  </tr>
</template>

<script>
export default {
  name: "room",
  props: {
    room : Object
  },
  created() {
    console.log(room)
  }
}
</script>

<style scoped>

</style>
