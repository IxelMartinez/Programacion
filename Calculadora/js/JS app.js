let valor1 //declarar
let operacion
function uno(){
    valor=document.getElementById("pantalla").value
    if(valor===""){
        valor=0
    }

    document.getElementById('pantalla').value=10*(parseInt(valor))+1
  
}
function dos(){
    valor=document.getElementById("pantalla").value
    if(valor===""){
        valor=0
    }

    document.getElementById('pantalla').value=10*(parseInt(valor))+2
  
}


function tres(){
    valor=document.getElementById("pantalla").value
    if(valor===""){
        valor=0
    }

    document.getElementById('pantalla').value=10*(parseInt(valor))+3
  
}
function cinco(){
    valor=document.getElementById("pantalla").value
    if(valor===""){
        valor=0
    }

    document.getElementById('pantalla').value=10*(parseInt(valor))+5
  
}
function seis(){
    valor=document.getElementById("pantalla").value
    if(valor===""){
        valor=0
    }

    document.getElementById('pantalla').value=10*(parseInt(valor))+6
  
}
function siete(){
    valor=document.getElementById("pantalla").value
    if(valor===""){
        valor=0
    }

    document.getElementById('pantalla').value=10*(parseInt(valor))+7
  
}
function ocho(){
    valor=document.getElementById("pantalla").value
    if(valor===""){
        valor=0
    }

    document.getElementById('pantalla').value=10*(parseInt(valor))+8
  
}
function nueve(){
    valor=document.getElementById("pantalla").value
    if(valor===""){
        valor=0
    }

    document.getElementById('pantalla').value=10*(parseInt(valor))+9
  
}
function cero(){
    valor=document.getElementById("pantalla").value
    if(valor===""){
        valor=0
    }

    document.getElementById('pantalla').value=10*(parseInt(valor))+0
  
}
function suma(){
    valor1=document.getElementById('pantalla').value
    operacion="suma"
    document.getElementById('pantalla').value=0
}
function resta(){
    valor1=document.getElementById('pantalla').value
    operacion="resta"
    document.getElementById('pantalla').value=0
}
function multiplicacion(){
    valor1=document.getElementById('pantalla').value
    operacion="multiplicacion"
    document.getElementById('pantalla').value=0
}
function division(){
    valor1=document.getElementById('pantalla').value
    operacion="division"
    document.getElementById('pantalla').value=0
}
function igual(){
    if (operacion== 'suma'){
        valor2=document.getElementById('pantalla').value
        let total=parseInt(valor1)+parseInt(valor2)
        document.getElementById('pantalla').value=total
        valor1=document.getElementById('pantalla').value
        Swal.fire({
            title: "¡Tu suma fue con exito!",
            icon: "success",
            draggable: true
          });
       
    }
    else if (operacion== 'resta'){
        valor2=document.getElementById('pantalla').value
        let total=parseInt(valor1)-parseInt(valor2)
        document.getElementById('pantalla').value=total
        valor1=document.getElementById('pantalla').value
        Swal.fire({
            title: "¡Tu Resultado esta bien!",
            text: "¿Quieres seguir en la calculadora?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }
    else if(operacion=="multiplicacion"){
        valor2=document.getElementById('pantalla').value
        let total=parseInt(valor1)*parseInt(valor2)
        document.getElementById('pantalla').value=total
        valor1=document.getElementById('pantalla').value
        Swal.fire({
            title: "Tu Respuesta fue exitosa",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(255, 1, 213, 0.64)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          }); 
    }
    else if(operacion=="division"){
        valor2=document.getElementById('pantalla').value
        let total=parseInt(valor1)/parseInt(valor2)
        document.getElementById('pantalla').value=total
        valor1=document.getElementById('pantalla').value
        Swal.fire({
            title: "¡Bien Hecho!",
            text: " ",
            imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA8FBMVEX///8Av2D//f/9//8AwF/8//8Av2H+//3//f729vb5//8AwFwAvl39//38/v8AwWEAulf/+v8AwFkAt1YAu2AAu1UAtlgAvVQAt2AAt1QcxG8Aw13y8vL///oAulz5//vu//dVzI/w//kAs1/i+/J71adrz5yW3Lmw6c3O9ONFwoKW37kAumQSwGgjwG7v7++O27HF8d1gypWu58ZAw3y37dTd++xaz5IxwXNDwoeS3KzV9+9Gwn6Z47ojuHCz59B2xaDQ+OHD7eBNwIpz2KYtzHwGrWJ/0aZqxZa/5tSp4skftXb88PiI07BYxZTg+OS8T+XtAAAYOElEQVR4nO1dC3vauNKWJVlWLN8wtjGkMQTMLQEWSMIhpznk2213s+2envP//803MhcTwq1Lcfbs43e3bdoA0XhGM+9IoxFCOXLkyJEjR44cOXLkyJEjR44cOXLkyJEjR44cOXLkyJEjR44cOXLkyJEjR44ch8ERQVzTOLZMi7/3YM4CjgmZf5H8//cD1i1U73y+Hg+7Krp679GcAwRV2wNfAJxPE/W9R/MDwaVBqhgj7W7qGEyxFWa4vQ6ykInfe2w/BqapaQhbZHTvUMYUCdsT5Qekmn+TyQi+k3BUaxVdxmgioAKSGuEE4b+NqWJcbTdcQ+pPSAGZDSKKR8Sr7z2y0yGDA9ho98ZnCyRGymzb9sojpL33+E6HZWlWoToMFta5DmaM/xZWSjDuPjnU2CKhMv0bGCm4ULPtCWp4byVUlCB+7+H9AFjxddn2PI+9lY/SYPJOo8KYqIRzU04SrK45Axm9wG1wQkyN833RmktIP/MwiMC7ULpFh1JC68yibIeFgW1oGuFYjlLKQVQ1Ycw8kdGEgWOumfs+YyEgHhYFo1v0NxdxUH8fCbWrudrUuNtpN/9x83Q/Bdw/Xn/+djeKdfgO0Tg8hn1uAuSDJ1S/LtreTgk9t6nufUxnA4bR1TrD6zBw/FJJCMOQXFn+4ftO0Lhv3cU6kZnQns/gnKioO5Akxt6pwkaM3yceqqPmfVQWBgRnGJyXRmpKqWFQx3CC6fhuvxuEh0QeQkM6GIjtWwU0yiPNzCweEnAeSEUXJqRv/wgcY0v0ev34QcrHdgyxAFJ1jbwRT9UK6J/lHcapGKzP3PLNR8T1zJi3Bq4RBqZ3WwNHbKEfW2RUlGJ03dExqfKNYZoq5BHVlrPjnYwKxfDvn03MwWNnJSFXLQtVO0+QnYJZHSEgWG1kC1EcDCebzMvkKi7UP/m7PocK15l+NYGSqhB3MpMQF2r/mkVC2DZjR0qYZEKXfviyma1jncczEe1yocLptasQck2pwSwkhMfITbm6AObJPMkWjwJNXgkPwygFzRhZOk4sjmsq1tFkJtimClmSM1EqglYML8OJv81IhRC8n2e+OKSxnd+0/cawDgGSqFxSAZ13f9viqSBo2NQQ0ePPCGdmm4l4EHO7j4EMA8cpbxtcMe2AbNLqgAmMGmKLhB4EjUiEdzrXMxUQZk39W+BLE9ptnjKg7Z2cTHH9/9NBRBWY3qhBt7pj6tHiuAYORtOuMqQyHLLvkmBgoltGBUblOGVAsRgUg3LZcZztmmbUDbtgowTs7yG07e1Oxgg6BJsQK7XN+HIe0cCXcQhJt8Fri2ILGuMKpzi4bra/fIznVkXqH3+5G45nke+7ENCAjKXpgi3KIxlyUIE/BG/FY9JD0/I442wQPBlQ43H5tVJg4H2PGb4//fw1rpMkCeJmIuI8DdDjL82b0DFe+Vxa7mArEXEUbqGhEH+YCNo6z5Znc7XAf575GwMC6YQR3NwmqSk4WZ2rMlWcv0W7kqwcEHfGoSPc1bvKt0glWLVAQLHNQj1qzCaIZ5wqwc/rBIJuOBjPLc+GEMKxCjkhjBq4gCTR8g3SkcilXakqELL9FMwDDFP8psoha7T4zyEEvG3ZfHlcRwSmYFbCEZjsBQvJKbgIzAlXs8FhlO87esICNJBLYv6HfNci0eHJDpl8TbcVuGDT1L1RNSy96KQnFLaRzCfZU3kIRADelFmuxOUTR8MgDfKC9cDHuMWbkY6PH4caNyNBnVldVTHBVjzbZqCM+VGHk2wTQZMTCzWLIh0QE/SSOtMOIZZuHj0YbvHJuBxOCsBSVFy9j7YETaYYvS7HWUuICiYISNMFMIjRRniroqsr7Tsmiykj9/MDhmxCLVQfi5fblgxLgxjr+PjH9kOgcTQsU89LBwR8eByrFvhOzTw+Z8MqxG6rAFGVYL3liG2svfRUg7BrZUfUVK5b4CHb6So7s13BjMbXUz4V0olvbzN6ufviPNW5lqn+iCqZfWctLgvgxKX7CeYnjENFd85bOgdTUNzUC+abVY6zghDIbiAuGysJGbsMWhDYT1oy+SU03lqox8QjhEEtkzR3BXDqvN6QSyUrAJ+SC1GnsOFJw9gS6JkBGgTLyFaHQK30T/J5J0bVB9Z9GT4g6+rPy2dquDq73FQhY57tPtWwdUVItmyUFMiLn9oRBIxwhE7hGpCg6OO3y2oeVYzBBGUcBucDGhXTdIl6kNcB4TxhG0+SI/+NgKBEtxdDkMi+aIbXZm7q9TwWdGFq6ifUfHD8UNy2xMPg0QFzf4dV+5a7Rq2MYJRsIp2Q1uCPM3fbzlnwXLA0zcx2SQZcAnoo28v10L5tF+9OSmgwutL1R/EmUEBG799CjICMI+O9Ja5Xp4Y3N1LaY8JpQspzwlPmmk5eIiE2/aitOJ/BO2uSXvy40R8BzeTDsrJQIZAa4waCxwlhkJArfFc2NkMh/IDoBvJKubnarf/A8R+GhuKeDIT2YiCDGoxBPcXLoIkn5DrvawmZcS8F0yFHDu5+2OiPAeSE6XaJbQcji0NyfgKVIfqTK2sQ1jNpBnyp95FzYnI8GbgNvYCyK17DcXCZOjuneQrZmLPNl80NJkMmYs4Ia3LhvvaHwZw2OOvsyvNarrEakDuon8JECcEYjYqvCK6S7A0Kv410DVvYvJZbdYP6KVbynZiERrqyVnwonBKrwI0U4h6NlI1oLy6jFoKUHl7yOZKbWc4dwpmFjBeYNEszFdfc0k6JhTpWx05/czOOCcgIMdeBRXwtKszzKJ3pmWRPwI+tapGxedGA6EcnVyNhdLdln16yUTBgoGsPweJf/OdCFmYqY+/X4nLXknlu68QP5DgOt9BRURzJFWQIIw26oBbiUyb7oFjF1SeqLOo+GI0mJ5INon/atknoD5EO6TSuT93lnioNJ9nsNKFukdqL0hbDbZ68wN4usrcrM8a1pWomxvyXMmTAqdRZQIPYtRRQEUFMTLluQZBpcq6rPKnGO/rDTE7ACvsb6799RTRqshaMA0+aiaUKqTsjGdRcEFMdpNPG/SQzV05UTeUQmjGGPKd6vEvnWuHiMfI23SiLgtHqNXel5feFgByUn30pQ5VGuhqM8wwMjidbSN12szX8AjQSk6Pt1vx3oVP5tbdhoczzb9MJV+95yyyNGi/I0s69ec/R0F05BjqtczXZc598CkoAJ2zXkHV0GnxRmPzWa/wavtahLa7XciXedOZ7BhR0O61a59+51+9T12c0wTBBg/hjw7ANePiMOtOH4z/rg/p7ZfBro/JahzRcrzQsdP3Froin0GKMz75eQybB8on3RfkXLusmcG1qyHQ8yehEsRVz8yD7MGVdbeF50BsMZpVofRKyoLO+L2fpgzT199u4evZUuOMsQ2H/MlQLBJsYtR25rFnxEgkvi7MROrwpA64X1W7CwWA6raRWaig0aqrWmiVy3kxTf3ecwapwc7ExxKgnPkNUBgpAZtRmUSXsA9XxqEEvi21yYC6Siwusotag0hj8OlhbfxL0clbH2lUqhoUe0kVUd1o9f9C/X0rIWPkZXCvReFw2bGaAhElBkC132z/V9n+KeXFxgbplr1KphJGyFvEpRARzPREkqBauJr5wzluTL2ux6r1FjQTty0MOMtajie/1Bl6l16dK2Ae30Ov12W9dbqkXVZBDAuTh8lfyF/lVgk+eAa+FN3j9fuhV+vDQvNKLdXFB1iTUiHq9qtWgfues+QWRlC0Q8/000aezJPBx9N+g0m9UBoOe4lXCQRSCXsJ+eIc+XFwUErGWIiUiLr6sXrSDgRcNBh7rV7yw0g97lVCh93X5zbUfqq0vhdvivMRN8rGOvygrocxpLUJ73Oj1KvBfP4LfB6zf7w0qXiV4AQ1+kMO9SJFKeFEbVCqe1x8wbxDC6+E9YYUF3cLFhogmfk4X+51/oLPGQ0jYhqWl72Z+e/HP+k0ItgYSejBKGHADHEilL8L/1C/0f1984AsbTSWUv1VbjucpXg9kS34NQNBKcfhWQA3FQeqJpuY5q4WAYpNWabWo6Y/mswXjF5h9ch4mGpGWOqj0I9oPP8UY1GjN9fgBgUZXEhZ+DkBrDFTH+qC7sD+Qks7qHz6AZa/7SxVr6orXMRHWzxkPTZOgm5VfcxfZPSeFLugQvIUHokFMBAUOeozZ/UZ/Jo3OTKRLfoFsHAzXhC+BcQ/muuuHg/mf3qx7IQ07ma1LKQm29McV12fFszpTzQSCQdceZzIKmIz8d2mfA1CfpCdeH2YjaBGUWZl9wa8kXNiqVfjaqMCTYNJCpQ5Bl5HnDZcvQR9++mn5U7mFWkYqYfecAZFrVjVMDWYZfQkq1GcgXQ+m4ECxlagyCL2w0QcfGfZ+e77Aa1aaQIXU/Q/wt5We0getwwOBd1YM+4/60iuhnz78tFIikH1HWQZh58tZJUSktpr0zHhaZgCaiuNHT54s6/VlxPf6lYr0OfDXvtdoQxJ4IYMgMO1EAgt88ovw5HMAyfoM7Fv+Eo1f/q3PXS1HFz99WApIElZoLyXsnFFAWWUXF1MJr+ftGkjCQerDBrBST57KTcrV5W8e/N0w/CHROdJ4mjVqaOJRW5JYmdzayYsjxWlu/aGyuK+z/KksdeDngcknKwkNY7z+HVnFXgTv8raQghYhx9IgA0lfrI3F671Qxgw6i3fa34OzXIBm7u05BZQSrpY2bWN9HVEjBVxtR9uOsDLXb6kWXivrLYzKlxvFqLYoy84IO7ayH4qphN/OSr01IMurURmf174j6+l0PrnfdkSJec64Wlg7QQpJNN2U0LhWOd9VTTUK1iQ8p4CvJLSjz6+epgmpfqHafLt83WOGEo31tbS9U7a918trTAk/ck272sFXpIQsCwlhjJOVkhhY6RaD6YQyEej3Xy+BMv9RiliF4Gle6T1mb57JKN0iffcPHjmGnYmE4E3jNSsdb33FZOaIS9Z7LQFl0acqeNMqhhjaLr45KgmZrbWnnOQhlfDMvhSixZqnud6WqmFUv/YvN3fkKTNKn/SCpZlXvC5ruDdW14ojtK8ytuOsdvPOLSGpraIFjW62SChPK1WbweZpHluueXyqg51z9C1x/a9ENMb7a8Lb/lJC2z/zfj6pp4kMm24tszRBiHbkildiQIBnRnStYm7VGvCdNSullNFgdyiET7PQcFU0TEtfzrvWRqqDVDmNXYkMkecvpPd7HR1FsaVW0cvGVhqlirMvcZdL6OPVe2ipexbBVjBJmj3ZwaSw41UcPTQE24gICvX8Fpo0NsqCGLiZ/bUylrr6odQun7qbtxeycK2VqsDfRfNVbOHu26ODzL4svrTExl4a8IGHfYtLJrHqqwyYKufNgJNaqOWaiU1LX3dISMwrk3+c+RunXvqSukTKRqi0xdPexVUTWf9N3ZsyPaX88Sh0/JXtRXs3uPFkaiR7Dcpu0CS/6O4/qKXxL+lam7s1CP9QdP3VNDJm+7bRrgqx3Ny0t7aTWUrIkrm5h80g2cXrW8p29zqlH4O65y1WhKWT3zcyS540F9uarayZKFOieB+bkRkwuk7toPj8g+XZgntjse3MxP58WzOlFnc2XEk+gjJZkbDXSiGC9lKfVYzPf3y76S7rMGzRRLufvyYr0uKZ4SUp/A4JGe3VD1S/czIqpodWBjo/+9HD59JChXIrk1jmviJ6guNZtKwu2jYPe85BmqmhlzSvLo1POg5wFHgczKkKhDXbGeEDfhDFaT3MWwg6O7hbZqmzlP357QxKhWWCPlcAY06T7JWQEKswacy702zVoegcPNKLR0H69mCCz17SzvHyHIkNlHKg7y2e0Ti6wh8bWw/bJXYw0w93kvucntyn0yo+f42p3i2lxK305XBLxsKoAZlG396oH4U0XzjPaN+5cyK/WW8salnBFEpDdEo5+ZHg1bWKIciC9UMzn/OHUEBK/Jqmyn6Hxn1V3dvoi2AdfY0iSucSUn9EzLNLqOL1/EdS/UMHgTR5mF22TnitQyYU55mTfZ4GzEOF+LsIqQyMVF80aT0n4PM/roiwYojW4YMQXEPtcDNgyG4S9xDs9zkOTiw8KhtzWgRGagwX3dvOCs5V8KbwPOdb3XYjxgcKQDTTNNG3QKrCfiWh/ywbK+yZxhqyqtfGqpVBUtZ2fgk1mP9tny1/LDNekgTnwLsstbVW3b+w0vu9jFv+LBON0lUTw73BmXSLMBGvhUCoF9RNQIgiB0/+Yqw/lqiypkVmFzuH7BsEekpbZihOp5BFswhumrqsZF/UfDLqXquHa80I5rX76PX62uxg/Ra2Ok7qgcVMV7M5jqBhNCmyeaZuQAZbfihcHeIZXLUKcSgz3pUO/fbBQwy8PljzwP5tdv0+EGoZ6TaamNW1g/5UCtMNmScXb8DADdto7F9+4qpWRc1oUXjpwXsGdZ7dSWccr/X/EU4T7Vh0ew3+XJRtIeXysKCQrJO9DSGRRUahWCz1SP7TLujZSchRy03tTR4cOOZdKmqXZXNqINyX7lMV7fXAwF1qM3eZbDPFbeh4/2LADwUncSNtFkHd2VF9m0wNje4DIxK+H/5ex/tPwJhIb8ma3AVhU6I7KXRmOlQ1PvRttupo4l+DPg7+dMj6uTYatv7Tuo33VvTL1rvyJI3NFp3XYeKCzjUzOwmJqdZmQplLKNtvlb+L9OsI7Uu6ku/hbri2DinKo4xPOmtW4WFJUpLii/IdOnKplqgq3t/HkQAN5JPeOscrbd2NPSdkGtpaFEgkx0vc8KFwiIQlIEnb3L0KN4EY1mfu2sFuOqhl3T/wStNIrcf6ylJEIRpHbQpx2aaS8L1KBI9Zeyol1TbLef5ArrLvOEDIqORBpr7M3mjw849ooya7FhTq6Q6XYvQVv6nj7LrorgCTqekrwKrm04V6Rq97evt+SLQQqd2srZQD9f2jjnFWDUrXwKtYvxHeYjHUll1ywufjyM0+qBjH9/5a5RF87EQ2NM1eh9xEQKZtZdlFiVKDBrenPmmYbd2Zsd6/j5WfCVez16B0isRKElQ7yfpsuY5iFJtJo3X8Z+5gkiV6EOg7PdkcbZmcea4/lA8zsza6m9A65XTTGoSMik8xwvK+m++vN8fYJIVqc61/H40oK42r/D2vrOLz0s/l8TnZrbTRQdwif+aWKYvLwrjLlMoYNKnC0bJtD/UakM98K75atafCH8fqn3E4uKDfliH4pP37jMh4qnNSfc8rZEyuoWbRXvVsA8dKhRu29T+zQ9R9clh/fSuOiVlNNhp890tyXsoeY+sVFtSZPcgjwVdX5hEdrDRwIlWrEI+L65cf9Blkyfe1bDu07QAYaonKvn8rpgwZbnTzi57cvKEdmpAJEUeTZhjJFrrpYxIeCMj/Ejf/QdC4LcuAn1qX7Qqj/NSpcutwsw6Oif6xFZSo8qpNPXOkF9UzbPaxBxAZHgLqrZmYLGlzRZR02T1A5Diq3904QoiNZX9RbHKsYv2vcI2TpkJE/nkqGPOWZwbk7qnHqHCCm/Z/EUIrTfAku0i2V7Tkb7XnVugYSctgNmcOtk3tPjOKt5CCoHfhMjtQu/bB0W+UstmK4Qf3L19iHa1fCJRcDIDUeNR+DKONTTcAs4UxGPHDK+mZgqPqbQARerNZl0wNDCOcXje/duNYVwlRdb0W//LcHt8HvvOmf5nk8Uzxr2u4sLNy/32gyY2we3ezScmy3NnwHafoFIOwIREEZd8xkp3dzYbPctHHDe+wnl409FeBdWXiejPYVEmyGbOIArI+JbkrKNGTvEzHe1OmAXZdvom5XjWRmdEuxfeAyKv7DEgxlG1Xhx0BSm13cNaDTSeCY1ztTMHj9PubXZ+OAGN9r1Ru1t/p5qZjoHHpMHV5x6uxs0hoN2xRCn6P0f7tjPeFBpDNjOPbgXP53RLSYjCeYM6vMu6Q+J2QR5fAVvW7+7Kg9vx6rl03y9hJa0tbMnYmRLHRjLkl7xN4r2z+ewBMpNodN4pCULEZDtYkpIvqMcP1o8evtfce9XdB060CqnXGYRkYmbdViXai4QiihhM8DWMCmn/vUX8PIGe6kgeEag/NaeAY264nk/ZplHynd307UbG8B/F/SkJ5xwbMKMvivBp3vt1E8u4cQxiGkVyaB1/Ji3WCafNuUkeogC05f/+6QeIYxF/uhp//cfM0mw6SGx5b//zXw9/pwvDFVaIood26rs5zIp5N/U9GkCz69c0UGGV4oV8GIElTDfkV5/Nr4OQds/9bvmU/CEmqJpM/5BfAfVA2F/rlyJEjR44cOXLkyJEjR44cOXLkyJEjR44cOXLkyJHjWPw/+YvPOg8MV+oAAAAASUVORK5CYII=",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });  
    }
}