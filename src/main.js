import { createApp } from 'vue'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import components from '@/components/UI'

import App from '@/App'
const app = createApp(App)

// library.add(faTrashCan, faBars);

// components.forEach(component => {
//     app.component(component.name, component)
// })

app
    //.component('fa', FontAwesomeIcon)
    .mount('#app')
