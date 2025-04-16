import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent({
  loader: () => import('./Test.vue'),

  loadingComponent: LoadingComponent,

  delay: 200,

  errorComponent: ErrorComponent,

  timeout: 3000
})