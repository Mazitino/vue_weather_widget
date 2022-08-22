import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { far } from '@fortawesome/free-regular-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App'
import components from '@/components/UI'

library.add(faTrashCan, faBars);

const app = createApp(App)
components.forEach(component => {
    app.component(component.name, component)
})

app
    .component('fa', FontAwesomeIcon)
    .mount('#app')
