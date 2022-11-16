import { createApp, h } from 'vue'
import App from './App.vue'
import './assets/index.css';
import router from './components/Navbar/Screenroute/index'
import Aos from 'aos';
import 'aos/dist/aos.css';

const app = createApp({
    render: () => h(App),
});

app.use(router);
app.use(Aos.init());

app.mount("#app");
