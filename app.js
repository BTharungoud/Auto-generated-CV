const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

// import all the fields from the form.
// eg.
// const name = document.getElementById("name");
const fName = document.getElementById("fName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const github = document.getElementById("github");
const linkedin = document.getElementById("linkedin");
const College=document.getElementById("College");
const Degree = document.getElementById("Degree");
const Startingyear=document.getElementById("StartingYear");
const Passingyear=document.getElementById("PassingYear");
const CGPA=document.getElementById("CGPA");
const Skills=document.getElementById("Skills");
const Project=document.getElementById("Project");
const p_description=document.getElementById("p_description")
const Link=document.getElementById("Link");
const Designation=document.getElementById("Designation");
const Company=document.getElementById("Company");
const Duration=document.getElementById("Duration");
const e_description=document.getElementById("e_description");

function handleSubmit(e) {
  e.preventDefault();
  //   here get the values from the form and set it to the resume
  // eg.
  // const name_resume = document.getElementById("name_resume");
  // name_resume.innerHTML = fName.value;
   document.getElementById("name_resume").innerHTML=fName.value;
   //document.getElementById("fName").value='';
   document.getElementById("email_resume").innerHTML=email.value;
   //document.getElementById("email").value='';
   const phone_resume = document.getElementById("phone_resume");
   phone_resume.textContent="| ";
   phone_resume.textContent+=phone.value;
   //document.getElementById("phone").value='';
   const github_resume=document.getElementById("github_resume");
   github_resume.textContent="| ";
   github_resume.textContent+=github.value;
   //document.getElementById("github").value='';
   const linkedin_resume=document.getElementById("linkedin_resume");
   linkedin_resume.textContent="| ";
   linkedin_resume.textContent+=linkedin.value;
   //document.getElementById("linkedin").value='';
   document.getElementById("college_name").innerHTML=College.value;
   //document.getElementById("College").value='';
   document.getElementById("degree_resume").innerHTML=Degree.value;
   //document.getElementById("Degree").value='';
   document.getElementById("startingyear_resume").innerHTML=Startingyear.value;
   //document.getElementById("Startingyear").value='';
   const passingyear_resume = document.getElementById("passingyear_resume");
   passingyear_resume.textContent="- ";
   passingyear_resume.textContent+=Passingyear.value;
   //document.getElementById("Passingyear").value='';
   const cgpa_resume=document.getElementById("cgpa_resume");
   cgpa_resume.textContent="CGPA:"
   cgpa_resume.textContent+=CGPA.value;
   //document.getElementById("CGPA").value='';
   document.getElementById("skills_resume").innerHTML=Skills.value;
   //document.getElementById("Skills").value='';
   document.getElementById("project_resume").innerHTML=Project.value;
  // document.getElementById("Project").value='';
   document.getElementById("projectdescription_resume").innerHTML=p_description.value;
   //document.getElementById("p_description").value='';
   const link_resume=document.getElementById("link_resume");
   link_resume.textContent="Link-";
   link_resume.textContent+=Link.value;
  // document.getElementById("Link").value='';
   document.getElementById("designation_resume").innerHTML=Designation.value;
   //document.getElementById("Designation").value='';
   document.getElementById("company_resume").innerHTML=Company.value;
  // document.getElementById("Company").value='';
   document.getElementById("duration_resume").innerHTML=Duration.value;
   //document.getElementById("Duration").value='';
   document.getElementById("experiencedescription_resume").innerHTML=e_description.value;
   //document.getElementById("e_description").value='';
  //   similarly for all the other fields
}

function handleLeft() {
  const left = document.querySelector(".left");
  left.style.display="none";
  const right = document.querySelector(".right");
  right.style.width="100%";
  const print = document.querySelector(".print");
  print.style.display="block";
  // write more codes here

}
function handlePrint() {
  const right = document.querySelector(".right");
  right.style.width="70%";
  const left = document.querySelector(".left");
  left.style.display="block";
  const print = document.querySelector(".print");
  print.style.display="none";
  
  // write more codes here
}
