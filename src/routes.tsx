import Fetch from './modules/fetch/pages'

export default [
  {path: '/', component: <Fetch />, name: 'home'},
  {path: '*', name: '404', component: <div>404</div>} 
]