<template>
  <div>
    <input v-model="foo">
    <input v-model.lazy="foo">
    <textarea v-model="foo"></textarea>
    <your-component v-model="foo"></your-component>
    <div v-for="x in list">
      <input v-model="x.name">
    </div>
  </div>
</template>