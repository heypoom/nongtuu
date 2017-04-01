class DebugService {
  setup(app) {
    this.app = app
  }

  find = () => Promise.resolve({data: "Debug. Hello world!"})

  get = () => Promise.resolve({data: "Hello World"})
}

export default function debug() {
  this.use("debug", new DebugService())
}
