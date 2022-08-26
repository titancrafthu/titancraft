let alertok = document.querySelector('.alertok');
let alertnotok = document.querySelector('.alertnotok');

async function sendContact(ev) {
    ev.preventDefault();

    const kor = document
      .getElementById('kor').value;
    const discord = document
      .getElementById('discord').value;
    const feladat = document
      .getElementById('feladatkor').value;
    const egyeb = document
      .getElementById('egyeb').value;
    const nev = document
      .getElementById('nev').value;

    const webhookBody = {
      embeds: [{
        title: 'Új jelentkezés',
        fields: [
          { name: 'Név', value: nev },
          { name: 'Discord', value: discord },
          { name: 'Kor', value: kor },
          { name: 'Feladatkör', value: feladat },
          { name: 'Egyéb', value: egyeb }
        ]
      }],
    };

    const webhookUrl = 'https://discord.com/api/webhooks/1012383458535948298/adY5p5tDPpNeZCsasRKvKco3fT-JXw4zJI3st-9JFAzTQjtqvHCQcAKWb3xGXcOdAM4e';

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
      document.querySelector('.alertok').style.display = 'block';
      document.querySelector('#progress').classList.add('loading');
      setTimeout(()=>{document.querySelector('.alertok').style.display = 'none'},5000);
    } else if(kor === '' || discord === '' || nev === '' || feladat === '' || egyeb === '') {
      document.querySelector('.error').textContent = 'Nem töltöttél ki minden mezőt';
      alertnotok.style.display = 'block';
      document.querySelector('#progress2').classList.add('loading');
      setTimeout(()=>{document.querySelector('.alertnotok').style.display = 'none'},5000);
    }
    else{
      alertnotok.style.display = 'block';
      document.querySelector('#progress').classList.add('loading');
      setTimeout(()=>{document.querySelector('.alertnotok').style.display = 'none'},5000); 
    }
  }

  shop.addEventListener('click',()=>{
    document.querySelector('.alertnotyet').style.display = 'block';
    document.querySelector('#progress3').classList.add('loadingfast');
    setTimeout(()=>{document.querySelector('.alertnotyet').style.display = 'none'},1000);
})