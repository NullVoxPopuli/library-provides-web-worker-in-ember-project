export class Example {
  #worker;

  constructor() {
    this.#worker = new Worker(new URL('./worker/index.js', import.meta.url), {
      type: 'module',
    });
  }

  sendMessage(data) {
    this.#worker.postMessage(data);
  }
}
