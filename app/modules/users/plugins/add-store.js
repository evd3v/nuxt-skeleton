import userStore from '@/modules/users/store/index.js'

export default ({ store }) => {
  store.registerModule('users', userStore)
}
