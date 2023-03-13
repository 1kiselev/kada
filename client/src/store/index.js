import { createStore } from 'vuex'
import { mainStore } from './mainStore'

export default createStore({

  modules: {
    main: mainStore
  }
})
