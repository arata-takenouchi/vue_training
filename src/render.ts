import { h } from 'vue'

const vnode = h(
  'div',
  { id: 'foo', class: 'bar' },
  [
    h('div', { class: 'class-name', innerHTML: 'hello' }),
    h('span', 'world')
  ]
)

// これ以上のプロパティを変更するプログラムにすると、予期せぬバグに繋がりやすい
vnode.type
vnode.props
vnode.children
vnode.key

export default {
  render() {
    return [
      vnode,
      h('div')
    ]
  }
}

// インスタンスの状態を保つ必要がない場合、関数のみでもOK（これでもVueコンポーネントとしてみなされる）
function componentFunc() {
  return 'component func'
}

// v-if相当
h('div', [isRender ? h('div', 'yes') : h('div', 'no')])

// v-for相当
h(
  'ul',
  items.map(({ id, text }) => {
    return <li key={id}>{text}</li>
  })
)

h(
  'button',
  {
    onClick(event) {
      console.log(event)
    }
  },
  'クリック'
)

import Foo from '/Foo.vue'
function render() {
  return h('div', [h(Foo)])
}
