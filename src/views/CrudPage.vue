<template>
    <div id="app">
 
          <FormComponent :bookProp="book" />   
    </div>
  </template>
  
  <script>
import FormComponent from '@/components/FormComponent.vue';
  
  export default {
    name: 'CrudPage',
    components:{
        FormComponent
    },

  
    data(){
        return {
        book: {
            image: '',
            title: '',
            author: '',
            isbn: '',
            price: '',
            availability:''
        },
    }
    },
    
  }
  </script>
  
  <style>
  
  </style>
  