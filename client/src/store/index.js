import { createStore } from 'vuex'
import { mainStore } from './mainStore'
import { kadaTools } from './kadaTools'
import { chatStore } from './chatStore'

export default createStore({

  modules: {
    main: mainStore,
    tools: kadaTools,
    chatStore,
  }
})
