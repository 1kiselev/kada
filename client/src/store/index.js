import { createStore } from 'vuex'
import { mainStore } from './mainStore'
import { kadaTools } from './kadaTools'

export default createStore({

  modules: {
    main: mainStore,
    tools: kadaTools,
  }
})
