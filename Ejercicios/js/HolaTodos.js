Vue.component('hola-todos',{
    template:`<header>
    <h1>{{title}}</h1>
    <h1>{{message}}</h1>
    </header>`,
    data(){
        return {
            title:'Hola a todos',
            message:'Bienvenidos'
        }   
    }
})

Vue.component('encabezado',{
    template:`<header>
    <h1 align="center">{{title}}</h1>
    <h2 align="center">{{message}}</h2>
    </header>`,
    data(){
        return {
            title:'===== Vue JS =====',
            message:'Datos Informativos'
        }   
    }
})

Vue.component('datos-informativos',{
    template:`<header>

    <table style="width:100%" border=0>
    
    <tr>
    <td colspan="4">
    </tr>

    <tr>
    <td style="width:30%"></td>
    <td style="width:15%">{{textoNombre}}</td>
    <td style="width:25%">{{nombre}}</td>
    <td style="width:30%">
    </tr>

    <tr>
    <td></td>
    <td>{{textoCedula}}</td>
    <td>{{cedula}}</td>
    <td></td>
    </tr>

    <tr>
    <td></td>
    <td>{{textoDireccion}}</td>
    <td>{{direccion}}</td>
    <td></td>
    </tr>

    <tr>
    <td></td>
    <td>{{textoCorreo}}</td>
    <td>{{correo}}</td>
    <td></td>
    </tr>

    </table>
    </header>`,
    data(){
        return {
            textoNombre:'Nombre: ',
            nombre:'Marco Pintag',
            textoCedula:'Cedula: ',
            cedula:'1805153580',
            textoDireccion:'Direccion: ',
            direccion:'Cdl Cumanda',
            textoCorreo:'Correo Electronico:',
            correo:'marco.pintag@gmai.com',

        }   
    }
})


