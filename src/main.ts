import { createApp } from 'vue';
import router from './router/router';
import './style.css';
import App from './App.vue';

import { createInstance } from '@featurevisor/sdk';
import { setupApp } from '@featurevisor/vue';

const envName = import.meta.env.VITE_ENV_NAME || 'preview';

const f = createInstance({
  datafileUrl: `https://duqdkaasojm78.cloudfront.net/datafiles/${envName}/datafile-tag-all.json`,
});

const app = createApp(App);
setupApp(app, f);
app.use(router);
app.mount('#app');
