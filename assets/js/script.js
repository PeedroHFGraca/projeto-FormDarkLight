const mode = document.querySelector('#mode_icon');
mode.addEventListener('click', () => {
    const form = document.querySelector('#login_form');

    if(mode.classList.contains('fa-moon')){

        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        
        form.classList.add('dark');
        return;
    }

    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');
    // Retornar para lua
    form.classList.remove('dark');

});