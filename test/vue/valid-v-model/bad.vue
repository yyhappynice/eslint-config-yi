<template>
  <div>
    <input v-model>
    <input v-model:aaa="foo">
    <input v-model.bbb="foo">
    <input v-model="foo + bar">
    <div v-model="foo"></div>
    <div v-for="x in list">
      <input v-model="x">
    </div>
  </div>
</template>