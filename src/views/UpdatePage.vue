<template>
    <div id="app">
          <FormComponent :update="true" />   
    </div>
  </template>
  
  <script>
import FormComponent from '@/components/FormComponent.vue';
  
  export default {
    name: 'UpdatePage',
    components:{
        FormComponent
    },
   
  }
  </script>
  
  <style>
  
  </style>
  