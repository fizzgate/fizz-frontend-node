import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'; 


Vue.config.productionTip = false;
Vue.use(router);
// Vue.use(VueAxios, axios);
Vue.use(Element);
Vue.use(window.AVUE);

function domRender(activePath, props, selector) {
  if (activePath){
    let components = router.getMatchedComponents(activePath);
    if (components.length > 0){
      new Vue({
        store,
        // i18n,
        render: h => h(components[0], {props:props}),
      }).$mount( selector );
    }
  } else {
    new Vue({
      router,
      store,
      // i18n,
      render: h => h(App),
    }).$mount( selector );
  }

}

// 用于单独应用启动加载
function render(props = {}) {
  const { container } = props;
  new Vue({
    router,
    store,
    // i18n,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#subApp') : '#subApp');
}
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
} else {
  render();
}


/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
 export async function bootstrap() {
  console.log('component bootstraped');
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  // window.globalProps = props;
  // router.push(props.activePath)
  props.renderHandler({
    render:(activePath, props, selector)=>{
      domRender( activePath, props, selector);
    }
  })
  // render(props);
  // react
  // ReactDOM.render(<App />, props.container ? props.container.querySelector('#root') : document.getElementById('root'));
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  // install.$destroy();

  // react
  // ReactDOM.unmountComponentAtNode(
  //   props.container ? props.container.querySelector('#root') : document.getElementById('root'),
  // );
}
/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
 export async function update(props) {
  console.log('update props', props);
}


