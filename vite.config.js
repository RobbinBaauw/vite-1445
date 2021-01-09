import vue from '@vitejs/plugin-vue'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue(), , {
    name: "test",
    transform(code, id) {
      console.log(process.env.NODE_ENV);
      return code;
    }
  }]
}
