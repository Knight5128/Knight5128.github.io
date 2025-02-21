import { createApp } from 'vue'
import NavBar from './components/NavBar.vue'
import CategoryCard from './components/CategoryCard.vue'
import FooterComponent from './components/Footer.vue'

const app = createApp({})

app.component('nav-bar', NavBar)
app.component('category-card', CategoryCard)
app.component('footer-component', FooterComponent)

app.mount('#app') 