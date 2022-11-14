
var app = new Vue(
    {
        el: `#app`,
        data: {

         
         obj: [
                
                {linkImage:  `https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI`},
                {linkImage: `https://i.picsum.photos/id/938/200/300.jpg?hmac=MVXKrDXBUPK5fv_Ev3FTdCFeYf9rvJE2Tz9xynjeelM`},
                {linkImage: `https://i.picsum.photos/id/659/200/300.jpg?hmac=cmMJe403Rt0WMoriAFlgDaHI4FkwevCOXFyhnelzolY`},
                {linkImage: `https://i.picsum.photos/id/389/200/300.jpg?hmac=XjGcjYBMJ1aWzqOK5SWp_oZ2nU6KgS1PPzuQXJvRcJ4`},
                {linkImage: `https://i.picsum.photos/id/61/200/300.jpg?hmac=4gnmCaXyXsOzE8pxb43yUtdfZnVbnUSGdPaJdh-aCUo`},
                //
            
            ],

            indice: 0,
        },

        methods:{


            cambiaFotoLeft: function(){

                let lunghezza = this.obj.length - 1;
                console.log( lunghezza )

                if( this.indice === lunghezza[0]  ){
                    return this.indice = 0;
                  } else {
                    return this.indice--;
                  }
                

            },
            cambiaFotoRight: function(){

                let lunghezza = this.obj.length - 1;
                console.log( lunghezza )

                if( this.indice >= lunghezza  ){
                    return this.indice = 0;
                  } else {
                    return this.indice++;
                  }

            }

        }
    }
)



/* CORREZIONE LEZIONE */
/*
var app = new Vue({
  el: `#app`,
  data: {

    indexImmagini: 0,

    obj: [
      {
        url: `./img/johannes-plenio-RwHv7LgeC7s-unsplash.jpg`,
        alt: `descrizione immagine 1`
    },
    {
      url: `./img/aron-visuals-LSFuPFE9vKE-unsplash.jpg`,
      alt: `descrizione immagine 1`
  },
  {
    url: `./img/scott-webb-_3l5B_4E_u0-unsplash.jpg`,
    alt: `descrizione immagine 1`
},
{
  url: `./img/fabrice-villard-7__6lSyuYeA-unsplash.jpg`,
  alt: `descrizione immagine 1`
},
{
  url: `./img/cosmic-timetraveler--SFhuMwFClk-unsplash.jpg`,
  alt: `descrizione immagine 1`
},

    ]

  },

  mounted() {
    //mounted entra in gioco quando l'applicativo vue ha caricato el: #app
    this.attivaIntervallo()
  },

  methods: {

    immagineSuccessiva(){
      //cambio immagine in avanti
      if( this.indexImmagini < this.obj.length-1 ){
        this.indexImmagini++
      }else{
        this.indexImmagini = 0
      }
    },
    immaginePrecedente(){
      if(this.indexImmagini <= 0){
        this.indexImmagini = this.obj.length-1
      }else{
        this.indexImmagini --
      }
    },
    attivaIntervallo(){
      setInterval( ()=>{ this.immagineSucccessiva() }, 3000 )
    },
    selezioneImmaginePallini(index){
      this.indexImmagini
    }
  }
})
*/