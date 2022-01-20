<template>
  <div>
    <div class="header">
      <ErrorPage v-if="error" />
      <Form v-if="params" />
    </div>
  </div>
</template>
<script>
import ErrorPage from "../components/ErrorPage.vue";
import Form from "../components/Form.vue";
import a from "../services/trackingApi";

export default {
  name: "Choice",
  components: { ErrorPage, Form },
  data() {
    return {
      params: "",
      error: "",
      cheked: "",
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
      const params = location.search;
      console.log(params);
      if (params !== "") {
        this.getQuerys();
        try {
          await a.fetchTrackingInfo(location.search);
        } catch (error) {
          console.log(error);
        }
      } else {
        this.error = "Нет параметров";
        this.params = "";
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
  created() {
    // при маунте записываю параметры в стейт и делаю гет запрос
    this.getQuerys();
    console.log(this.getInfo());
    this.getInfo();
  },
  /*  chekedForm({ choice }) {
    this.cheked = choice;
  }, */
  // что такое func = checkUID
  //при гет запросе без параметров ответ 200
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
