function user_icon(){
    var div_user = document.querySelector('.div_user')
    var user = document.querySelector('.fa-solid')

    div_user.addEventListener('mouseover', function(){
        div_user.style.opacity = '1.5'
        user.style.opacity = '1.5'
        div_user.addEventListener('mouseout', function(){
            div_user.style.opacity = '0.8'
            user.style.opacity = '0.8'
        })
    })
}
user_icon();

/*
function submit_red(){
    var submit = document.querySelector('.Enviar')

    if(submit.style.backgroundColor == 'white'){
        alert('a')
    }else{
        submit.addEventListener('mouseover', function(){
            submit.style.backgroundColor = 'rgb(188,37,42)'
            submit.addEventListener('mouseout', function(){
                submit.style.backgroundColor = 'rgb(209, 54, 57)'
            })
        })   
    }
}
submit_red();*/

function help_animation(){
    const help = document.querySelector('.help')

    help.addEventListener('mouseover', function(){
        help.style.opacity = '1.5'
        help.addEventListener('mouseout', ()=>{
            help.style.opacity = '0.3'
        })
    })
}
help_animation();


//Formas de login:
function facebook_div_link(){
    var url_facebook = 'https://www.facebook.com/login.php?skip_api_login=1&api_key=344190606773871&kid_directed_site=0&app_id=344190606773871&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv13.0%2Fdialog%2Foauth%3Fclient_id%3D344190606773871%26redirect_uri%3Dhttps%253A%252F%252Fauthenticate.riotgames.com%252Fredirects%252Ffacebook%26state%3Dc9d769d5476cea90dd7d3b26168d076999a79a8ef18d0e1eea07b1cb6900%26scope%3Demail%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D0b92a273-ca16-48cb-8ea2-254c2fae769c%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fauthenticate.riotgames.com%2Fredirects%2Ffacebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3Dc9d769d5476cea90dd7d3b26168d076999a79a8ef18d0e1eea07b1cb6900%23_%3D_&display=page&locale=en_US&pl_dbl=0'
    const facebook_btn = document.querySelector('.facebook')

    function abrir_link(url_facebook){
        const win = window.open(url_facebook)
        win.focus();
    }

    facebook_btn.addEventListener('click', function(){
        abrir_link(url_facebook);
    })

    
    facebook_btn.addEventListener('mouseover', function(){
        facebook_btn.style.opacity = '1.5'
        facebook_btn.addEventListener('mouseout', function(){
            facebook_btn.style.opacity = '0.9'
        })
    })
}
facebook_div_link();

function google_div_link(){
    var url_google = 'https://accounts.google.com/o/oauth2/v2/auth?access_type=online&scope=openid%20profile%20email&state=a43be9be2589b7e5c6bba21e0c679cef9a39abf131c8889045e49448f839&prompt=select_account&response_type=code&client_id=187685766663-ct6bdnthcq6jlllecpg1guhthoc7i8vv.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fauthenticate.riotgames.com%2Fredirects%2Fgoogle'
    const google_btn = document.querySelector('.google')

    function abrir_link_google(url_google){
        const win = window.open(url_google)
        win.focus();
    }

    google_btn.addEventListener('click', function(){
        abrir_link_google(url_google);
    })

    google_btn.addEventListener('mouseover', function(){
        google_btn.style.border = 'solid lightgrey 1px'
        google_btn.addEventListener('mouseout', function(){
            google_btn.style.border = 'solid rgb(230, 230, 230) 0.5px'
        })
    })
}
google_div_link();

function apple_div_login(){
    var url_apple = 'https://appleid.apple.com/auth/authorize?response_type=code%20id_token&response_mode=form_post&client_id=com.riotgames.authenticator.prod.client&redirect_uri=https%3A%2F%2Fauthenticate.riotgames.com%2Fredirects%2Fapple&scope=name%20email&nonce=41a63e21867e58deb99464b1911fcfbb9bd7f8b6874c177c6502b8cc475e&state=4f6f111ca00ae60a94fb993b3ac6a7942eb0b11bfe73d33dc900b16a8405'
    const apple_btn = document.querySelector('.apple')

    function apple_click(url_apple){
        const win = window.open(url_apple)
    }

    apple_btn.addEventListener('click', function(){
        apple_click(url_apple);
    })

    apple_btn.addEventListener('mouseover', function(){
        apple_btn.style.opacity = '0.9'
        apple_btn.addEventListener('mouseout', function(){
            apple_btn.style.opacity = '1.5'
        })
    })
}
apple_div_login();

function xbox_div_link(){
    var url_xbox = 'https://login.live.com/oauth20_authorize.srf?client_id=a2e930dd-746b-4a29-aa3e-23c2c1cdd78d&scope=openid+email+xboxlive.signin+xboxlive.offline_access&redirect_uri=https%3a%2f%2fauthenticate.riotgames.com%2fredirects%2fxbox&response_type=code&state=73cae12ed92a41dd221d218150e8f06bfaacfe31646477b612d28f62c35f&prompt=select_account&uaid=58c02ea159334737ba578e63bcc335b3&msproxy=1&issuer=mso&tenant=consumers&ui_locales=en-US&epct=PAQABAAEAAAD--DLA3VO7QrddgJg7WevreqEcyGKmHZqXgIZqJrI3jV7tzIfsG2JCelYi_eNIl0shmvRhep5pM-kJkXyAf2iv-nOxn1zfvYXB60jmLFORYacn8up-tWmSB3i-lnRc7SfNx2OkDhz5WG9s4tfmRkyq-JfiuRDB6hKl5WVuVTq2RwT5l0RKu2PVWLAwtYwPK4OJp4AQjYutA7RGSswrD--q6cMbbKTgZhaKTQdhN_JrHCAA&jshs=0#'
    const xbox_btn = document.querySelector('.xbox')

    function xbox_click(url_xbox){
        var win = window.open(url_xbox)
    }

    xbox_btn.addEventListener('click', function(){
        xbox_click(url_xbox);
    })

    xbox_btn.addEventListener('mouseover', function(){
        xbox_btn.style.opacity = '1.5'
        xbox_btn.addEventListener('mouseout', function(){
            xbox_btn.style.opacity = '0.9'
        })
    })
} 
xbox_div_link();

const submit = document.querySelector('.submit')
const username = document.querySelector('.username')
const password = document.querySelector('.password')
const form = document.querySelector('.form')


submit.addEventListener('click', function(){
    if(username.value == 'root' && password.value == 'root'){
        form.style.backgroundColor = 'blue'
    }else{
        alert('b')
    }
})

const Enviar = document.querySelector('.Enviar')

// Função para verificar e atualizar a cor do botão "Enviar"
function atualizarCorEnviar() {
    const usuarioVazio = username.value.trim() === '';
    const senhaVazia = password.value.trim() === '';
  
    if (usuarioVazio || senhaVazia) {
      Enviar.style.backgroundColor = 'white';
    } else {
        Enviar.style.backgroundColor = 'rgb(209, 54, 57)'
        if(Enviar.style.backgroundColor == 'rgb(209, 54, 57)'){
            Enviar.addEventListener('mouseover', function(){
                Enviar.style.backgroundColor = 'rgb(188,37,42)'
                Enviar.addEventListener('mouseout', function(){
                    Enviar.style.backgroundColor = 'rgb(209, 54, 57)'
                })
            })    
        }
    }
  }
  
  // Adicionar um event listener para o campo de usuário (input)
  username.addEventListener('input', atualizarCorEnviar);
  
  // Adicionar um event listener para o campo de senha (input)
  password.addEventListener('input', atualizarCorEnviar);