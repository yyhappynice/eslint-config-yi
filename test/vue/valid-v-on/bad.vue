<template>
  <div>
    <div v-on="foo"></div>
    <div v-on:click="foo"></div>
    <div v-on:click.bbb="foo"></div>
  </div>
</template>
