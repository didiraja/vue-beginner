const app = Vue.createApp({
  data() {
    return {
      url: 'http://www.thenetninja.co.uk',
      showBooks: true,
      books: [
        { title: 'The Final Empiry', author: 'Brandon Sanderson', img: 'https://loremflickr.com/100/100/empire', isFav: true }, 
        { title: 'Name of the Wind', author: 'Patrick Rothfuss', img: 'https://loremflickr.com/100/100/wind', isFav: false }, 
        { title: 'The Way of Kings', author: 'Brandon Sanderson', img: 'https://loremflickr.com/100/100/kings', isFav: true }, 
      ],
      x: 0,
      y: 0
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    },
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e) {
      console.log(e, e.type);

      if (data) {
        console.log(data)
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    }
  },
})

app.mount('#app')