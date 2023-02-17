<template> 
    <b-container id="home-content">
        <div>
            <input type="text" id="search-bar" placeholder="Search for books" v-model="search"  />
            <select id="cars"  v-model="filter">
  <option :value="option" v-for="(option ,key) in options" :key="key" >
{{ option }}
</option>
  
</select>

        </div>
        <b-row>
<b-col v-for="(book,key) in filteredList()" :key="key">
            <b-card 
    :title="book.title"
    :img-src='require(`../../../backend/public/${book.image}`)'
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
    {{ book.author }}
    </b-card-text>
    <b-card-text>
    {{ book.isbn }}
    </b-card-text>
    
    <b-card-text>
    ${{ book.price }}
    </b-card-text>
    <b-card-text>
    Only {{ book.availability }} left
    </b-card-text>
<div>
    <b-button  variant="warning" class="m-2" @click="handleUpdate(book)">Update</b-button>
    <b-button  variant="danger" @click="handleDelete(book.id)">Delete</b-button>

</div>
  </b-card>

</b-col>

        </b-row>

    </b-container>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'HomePage',
    async mounted(){
const res = await axios.get('/')
this.books = res.data
},
async updated(){
    if(this.search !== ''){
        console.log(this.search)
        console.log(this.books.filter(book=> {return book[`${this.filter}`].toLowerCase().includes(this.search.toLowerCase())}))
    }
    console.log(this.filter)
},

    data(){
        return {
            search: '',
            filter: 'title',
            title: 'title',
            isbn: 'isbn',
            author: 'author',
        book: {
            image: '',
            title: '',
            author: '',
            isbn: '',
            price: '',
            availability:''
        },
        books: [],
        options: ['title','isbn','author','price'],
    }
    },
    methods:{
       async getBooks(){
this.books = await(await axios.get('/')).data
        },
         handleUpdate(book){
            this.$router.push(`/update/${book.id}`)
        },
        async handleDelete(id){
            const res = await axios.delete(`/${id}`)
            console.log(res)
            this.books = res.data
        },
         filterMethod(val){
console.log(val)
            this.filter= val
        },
        filteredList(){
            if(this.search !== '')
return this.books.filter(book=> {return book[`${this.filter}`].toLowerCase().includes(this.search.toLowerCase())})
else
return this.books
        }
    }
  }
  </script>
  
  <style scoped>
#home-content{
    margin-top: 60px;
}
input{
    border: 0;
    width: 400px;
    font-size: 20px;
    border: 3px solid black;
    margin-bottom: 60px;

}
select{
    height: 40px;
}

  </style>
  