const messagebut = document.getElementById('messagearea')



async function logout(){
    await _supabase.auth.signOut();
    window.location.assign("/");
    
}


async function newload(){
    
    if (localStorage.getItem('sb-nehibeqlnydjxvhpcfml-auth-token')) {
       const { data, error } = await _supabase.auth.getSession()
       document.getElementById("signupbutton").classList.add('hide');
       document.getElementById("loginbutton").classList.add('hide');
       document.getElementById("logoutbutton").classList.remove('hide');
       document.getElementById("messagebox").classList.remove('hide');
       document.getElementById("mainhead").style.left = "56px";
       document.getElementById("chat-container").style.height = "75%";
       document.getElementById("chat-container").style.zIndex = "1";
    }


    
        

}
   

async function test(){
    const { data, error } = await _supabase.from('chat').select()
    console.log(data);
}


async function sendmessage(){
    if (messagebut.value != ""){
    const { data, error } = await _supabase.auth.getSession()
    console.log(data['session']['user']['user_metadata']['name']);
    const { data :data1, error: error1 } = await _supabase.from('chat').insert([{message: messagebut.value, name: data['session']['user']['user_metadata']['name']}])
    messagebut.value = "";
    console.log(data1);
    }
}



test();
newload();
