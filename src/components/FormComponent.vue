<template>
    <form id="form" type="multipart/form-data">
        <div class="file-upload">
            <label for="">Cover Image</label>
            <input type="file" @change=handleFileUpload($event) />
        </div>
        <div class="title">
            <label for="">Title</label>
            <input type="text" v-model="book.title" />
        </div>

        <div>
            <label for="">Author</label>
            <input type="text" v-model="book.author" />
        </div>
        <div>
            <label for="">ISBN</label>
            <input type="text" v-model="book.isbn" number />

        </div>
        <div>
            <label for="">Price</label>
            <input type="text" v-model="book.price" number />

        </div>
        <div>
            <label for="">Availability</label>
            <input type="text" v-model="book.availability" number />

        </div>

        <div>
            <button type="submit" @click.prevent="handleSubmit">Submit</button>
        </div>
    </form>
</template>

<script>
import axios from 'axios';
export default {
    name: 'FormComponent',
    props: {
        bookProp: Object,
        update: Boolean
    },
    data() {
        return {
            book: {}
        }
    },
  async  mounted() {
    if(this.update){
        const res =  await axios.get(`/${this.$route.params.id}`)
       this.book = res.data 
    }
    else{
        this.book = this.bookProp
    }
    },
    methods: {
        handleFileUpload(event) {
            this.book.image = event.target.files[0]
        },
        async handleSubmit() {
            if (this.update) {
                const res = await axios.put(`/${this.$route.params.id}`, this.book, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                console.log(res)
                this.$router.push('/')
            }
            else {
                const res = await axios.post('/', this.book, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                console.log(res)
            }
        }
    }
}

</script>

<style>
#form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50vh;
}
</style>