<style>

</style>

<style scoped>
  article{
    background-color: white;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
  }

  .left > header{
    text-align: left;
  }

  .top > header{
    text-align: center;
  }

  header{
    width: 100%;
    text-align: center;
  }

  header > h1 {
    margin-top: 0;
    color: #303030;
    font-size: 28px;
  }

  header > h1 > a{
    text-decoration: none;
  }

  header > h1 > a:hover{

  }

  header > h4 {
    margin-top: 0;
    color: #303030;
  }

  header > time,
  header > p{
    margin-top: 0;
    color: #959595;
  }

  header > p{
    display: inline-block;
    margin-left: 10px;
  }
  section{
    width: 100%;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-weight: 400;
    font-stretch: normal;
    font-size: 18px;
    line-height: 1.62;
    font-family: Georgia, "Xin Gothic", "Hiragino Sans GB", "Droid Sans Fallback", "Microsoft YaHei", sans-serif;
    color: #444443;
  }
  /*section > p{*/
    /*text-indent: 45px;*/
    /*margin: 10px 0 20px 0;*/
    /*text-align: justify;*/
  /*}*/
  footer{
    width: 100%;
    position: relative;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  footer:after{
    position: absolute;
    top: 60px;
    left: 0;
    content: '';
    height: 20px;
    width: 100%;
    border-top: 1px solid #ccc;
  }

  hr{
    display: none!important;
  }

  @media screen and (min-width: 1150px){

  }
</style>

<template>
  <div>
    <article :class="place">
      <header>
        <h1>
          <a :href="'/news/detail/'+article.id" v-text="article.title"></a>
        </h1>
        <h4 v-text="article.subtitle"></h4>
        <time v-text="article.date"></time>
        <p>浏览：<span v-text="article.explore"></span></p>
      </header>
      <section>
        <i-content :content="article.content" :direction="direction"></i-content>
      </section>
      <footer>
        <Button type="error">阅读全文</Button>
      </footer>
    </article>
  </div>

</template>

<script>
  import IContent from './Content'
  export default {
    name: '',
    props: {
      direction: String
    },
    components: {
      IContent
    },
    data () {
      return {
        article: {
          id: '00001',
          title: '阿里巴巴与四十大盗',
          subtitle: '爸爸给你讲个故事',
          date: '2011年7月10号',
          explore: '12',
          content: '很久以前，在波斯国的某城市里住着兄弟俩，哥哥叫戈西母，弟弟叫阿里巴巴。父亲去 世后，他俩各自分得了有限的一点财产，分家自立，各谋生路。不久银财便花光了，生活日 益艰难。为了解决吃穿，糊口度日，兄弟俩不得不日夜奔波，吃苦耐劳。 后来戈西母幸运地与一个富商的女儿结了婚，他继承了岳父的产业，开始走上做生意的 道路。由于生意兴隆，发展迅速，戈西母很快就成为远近闻名的大富商了。 阿里巴巴娶了一个穷苦人家的女儿，夫妻俩过着贫苦的生活。全部家当除了一间破屋 外，就只有三匹毛驴。阿里巴巴靠卖柴禾为生，每天赶着毛驴去丛林中砍柴，再驮到集市去 卖，以此维持生活。有一天，阿里巴巴赶着三匹毛驴，上山砍柴。他将砍下的枯树和干木柴收集起来，捆绑 成驮子，让毛驴驮着。<img src="/static/images/demo/demo' + (parseInt(Math.random() * 30) + 1) + '.jpg"/>砍好柴准备下山的时候，远处突然出现一股烟尘，弥漫着直向上空飞 扬，朝他这儿卷过来，而且越来越近。靠近以后，他才看清原来是一支马队，正急速向这个 方向冲来。'
        }
      }
    },
    computed: {
      place () {
        return this.direction === 'left' || this.direction === 'right' ? 'left' : 'top'
      }
    }
  }
</script>
