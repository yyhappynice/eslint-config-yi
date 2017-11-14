<template>
  <div>
    <div v-on:click="foo"></div>
    <div @click="foo"></div>
    <div @click.prevent></div>
    <div @click.stop></div>
  </div>
</template>
