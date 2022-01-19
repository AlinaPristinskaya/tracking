<template>
  <div>
    <div class="header">
      <Logo />
      <div class="content">
        <form>
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
          <button type="submit" class="btn" @click.prevent="cliked">
            Відправити
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from "../components/Logo.vue";
import a from "../services/trackingApi";
export default {
  name: "Choice",
  components: { Logo },
  data() {
    return {
      params: {},
      checedInput: "",
      checkedNames: ["Підтвердити", "Зателефонуйте мені"],
    };
  },
  methods: {
    getQuerys() {
      //получаю обьект параметров и записываю их в стейт,
      // не знаю зачем-на всякий случай
      let queryDict = {};
      location.search
        .substring(1)
        .split("&")
        .forEach((item) => {
          let param = item.split("=");
          queryDict[param[0]] = param[1];
        });

      this.params = queryDict;
    },
    async getInfo() {
      // делаю гет запрос по ссылке
      console.log(location.search);
      try {
        await a.fetchTrackingInfo(location.search);
      } catch (error) {
        console.log(error);
      }
    },
    async postInfo(choice) {
      // делаю пост запрос
      // чтоб передать ему, что было чекнуто
      const params = location.search;
      const body = { params, choice };
      await a.fetchChoice(body);
    },
    cliked() {
      // При жмаке передаю значение чека и отправляю пoст
      const choiceValue = this.checedInput;
      console.log(choiceValue);
      this.postInfo(choiceValue);
    },
  },
  mounted() {
    // при маунте записываю параметры в стейт и делаю гет запрос
    this.getQuerys();
    this.getInfo();
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
