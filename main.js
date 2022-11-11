var app = new Vue(
    {
        el: `#app`,
        data: {
            
           /* images: [`https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI`, `https://i.picsum.photos/id/938/200/300.jpg?hmac=MVXKrDXBUPK5fv_Ev3FTdCFeYf9rvJE2Tz9xynjeelM`, `https://i.picsum.photos/id/659/200/300.jpg?hmac=cmMJe403Rt0WMoriAFlgDaHI4FkwevCOXFyhnelzolY`,
         `https://i.picsum.photos/id/389/200/300.jpg?hmac=XjGcjYBMJ1aWzqOK5SWp_oZ2nU6KgS1PPzuQXJvRcJ4`, `https://i.picsum.photos/id/61/200/300.jpg?hmac=4gnmCaXyXsOzE8pxb43yUtdfZnVbnUSGdPaJdh-aCUo` ],
           */ 
         
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