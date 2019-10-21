Vue.component('vue-directiva',{
    template:`<div>
            <p v-text="text"></p>
            <a v-bind:href="link.href" v-text="link.text"></a>
                </div>`,
    data(){
        return{
            text:'Uso de directivas',
            link:{
                text:'Pagina de Vue JS',
                href:'https://vuejs.org',
                title:'Documentacion'
            }
        }
    }
})