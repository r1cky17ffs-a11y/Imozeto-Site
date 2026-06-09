function setLanguage(lang){

const title=document.getElementById("hero-title");
const text=document.getElementById("hero-text");

if(lang==="en"){

title.innerHTML=
"Engineering Designed for Real-World Construction";

text.innerHTML=
"Structural and building services engineering projects focused on coordination, constructability and execution efficiency.";

}

else{

title.innerHTML=
"Engenharia Pensada para a Realidade da Obra";

text.innerHTML=
"Projetos estruturais e de especialidades desenvolvidos com foco na coordenação técnica, exequibilidade e eficiência da construção.";

}

}
