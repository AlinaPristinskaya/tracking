<template>
  <div>
    <Logo />
    <div class="content">
      <form @click.prevent="cheked">
        <div v-for="item in checkedNames" :key="item" class="div">
          <label class="label"
            ><input
              v-model="checedInput"
              name="choice"
              type="radio"
              class="radio"
              v-bind:value="checkedNames.indexOf(item) + 1"
            /><span class="icon"></span>
            {{ item }}
          </label>
        </div>

        <button type="submit" class="btn">Відправити</button>
      </form>
    </div>
  </div>
</template>
<script>
import Logo from "./Logo.vue";
export default {
  name: "Form",
  components: { Logo },

  data() {
    return {
      checedInput: "",
      checkedNames: ["Підтвердити", "Зателефонуйте мені"],
    };
  },

  methods: {
    cheked(e) {
      console.log(e.target);
      console.log(this.checedInput);
    },
    /*  cliked() {
      // При жмаке передаю значение чека и отправляю пoст
      const choiceValue = this.checedInput;
      console.log(choiceValue);
      formSubmit(this.checedInput);
    }, */
    /*  formSubmit() {
      console.log(18);
      this.$emit("submit", {
        choice: this.checedInput,
      });
    }, */
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_reset.scss";
.header {
  display: flex;
  flex-direction: column;
}
.content {
  display: flex;
  flex-direction: column;
  color: white;
  padding: 20px;
  align-items: center;
  width: 100%;
  :not(:last-child) {
    margin-bottom: 15px;
  }
}
.radio {
  margin: 5px 10px;
  appearance: none;
}
.icon {
  content: "";
  display: inline-block;
  width: 14px;
  height: 14px;
  background-color: white;
  border-radius: 20px;
  margin-right: 5px;
  margin-left: -20px;
  border: 2px solid;
  border-color: white;
}
.radio:checked + .icon {
  background-color: black;
}
.label {
  display: block;
  padding: 3px 0px;
}
.btn {
  position: relative;
  display: inline-block;
  background: #fff;
  color: black;
  padding: 8px 8px;
  border-radius: 6px;
  border: none;
  font-size: 24px;
}
</style>
// что такое func = checkUID
