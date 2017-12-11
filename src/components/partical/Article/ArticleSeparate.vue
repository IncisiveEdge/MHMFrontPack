<style>

</style>

<style scoped>
  .wrapper {
    width: 100%;
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
  }
</style>

<template>
  <div class="wrapper">
    <article>
      <header>
        <h1>
          <a :href="'/news/detail/'+article.id" v-text="article.title"></a>
        </h1>
        <h4 v-text="article.subtitle"></h4>
        <time v-text="article.date"></time>
        <p>浏览：<span v-text="article.explore"></span></p>
      </header>
      <section>
        <p v-text="content"></p>
      </section>
      <footer>
        <Button type="error">阅读全文</Button>
      </footer>
    </article>
    <img width="100%" v-if="image" :src="image"/>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        article: {
          id: '00001',
          title: '阿里巴巴与四十大盗',
          subtitle: '爸爸给你讲个故事',
          date: '2011年7月10号',
          explore: '12',
          content: '很久以前，在波斯国的某城市里住着兄弟俩，哥哥叫戈西母，弟弟叫阿里巴巴。父亲去 世后，他俩各自分得了有限的一点财产，分家自立，各谋生路。不久银财便花光了，生活日 益艰难。为了解决吃穿，糊口度日，兄弟俩不得不日夜奔波，吃苦耐劳。 后来戈西母幸运地与一个富商的女儿结了婚，他继承了岳父的产业，开始走上做生意的 道路。由于生意兴隆，发展迅速，戈西母很快就成为远近闻名的大富商了。 阿里巴巴娶了一个穷苦人家的女儿，夫妻俩过着贫苦的生活。全部家当除了一间破屋 外，就只有三匹毛驴。阿里巴巴靠卖柴禾为生，每天赶着毛驴去丛林中砍柴，再驮到集市去 卖，以此维持生活。有一天，阿里巴巴赶着三匹毛驴，上山砍柴。他将砍下的枯树和干木柴收集起来，捆绑 成驮子，让毛驴驮着。<img src="/static/images/demo/demo5.jpg"/>砍好柴准备下山的时候，远处突然出现一股烟尘，弥漫着直向上空飞 扬，朝他这儿卷过来，而且越来越近。靠近以后，他才看清原来是一支马队，正急速向这个 方向冲来。'
        },
        image: ''
      }
    }
  }
</script>
