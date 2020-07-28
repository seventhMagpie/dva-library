export default {
  namespace: 'home',
  state: {
    header: {}
  },
  reducers: {
    text (state, { payload }) {
      console.log(payload)
    }
  },
  effects: {
    next: function* (action, { payload }) {
      let a = yield 1
      a = yield 2
      a = yield 3
      a = yield 4
      a = yield Promise((res, rej) => {
        res({})
      })
      let b = yield 6
      console.log({a,b, payload})
      return Promise.resolve({a,b, payload})
    }
  }
}
