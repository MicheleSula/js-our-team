// Creo un array di oggetti con i team-members
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      photo: 'angela-caroll-chief-editor.jpg'
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    },
  ];
  
//   Print a console di nome, ruolo e foto
  for (let i = 0; i < team.length; i++) {
    console.log(`Name: ${team[i].name}`);
    console.log(`Role: ${team[i].role}`);
    console.log(`Photo: ${team[i].photo}`);
  }
  
  // Display a schermo
  const teamContainer = document.createElement('div');
  teamContainer.classList.add('team-container');
  
  for (let i = 0; i < team.length; i++) {
    const memberCard = document.createElement('div');
    memberCard.classList.add('member-card');
    
    const name = document.createElement('p');
    name.innerHTML = `Name: ${team[i].name}`;
    
    const role = document.createElement('p');
    role.innerHTML = `Role: ${team[i].role}`;
    
    const photo = document.createElement('p');
    photo.innerHTML = `Photo: ${team[i].photo}`;
    
    memberCard.append(name, role, photo);
    
    // Creare un'immagine effettiva dalla stringa foto
    const img = document.createElement('img');
    img.src = `img/${team[i].photo}`;
    
    memberCard.appendChild(img);
    
    teamContainer.appendChild(memberCard);
  }
  
  document.body.appendChild(teamContainer);