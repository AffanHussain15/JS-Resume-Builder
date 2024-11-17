<<<<<<< HEAD
var start = document.getElementById("start-btn");
var con = document.getElementById("start");

function createResume() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var career = document.getElementById("career").value;
  var degree = document.getElementById("degree").value;
  var institution = document.getElementById("institution").value;
  var completion = document.getElementById("completion").value;
  var grade = document.getElementById("grade").value;
  var job = document.getElementById("job").value;
  var company = document.getElementById("company").value;
  var duration = document.getElementById("duration").value;
  var description = document.getElementById("description").value;
  var skill = document.getElementById("skill").value.split(",");

  var resumecontent = `
  <h3>${name}</h3>
      <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone} | <strong>Address:</strong> ${address}</p>
      <h4>Career Objective</h4>
      <p>${career}</p>
      <h4>Education</h4>
      <p>${degree} from ${institution}, ${completion} - Grade: ${grade}</p>
      <h4>Work Experience</h4>
      <p><strong>${job}</strong> at ${company} (${duration})</p>
      <p>${description}</p>
      <h4>Skills</h4>
      <ul>${skill.map((skill) => `<li>${skill.trim()}</li>`).join("")}</ul>
      `;
  document.getElementById("resume-content").innerHTML = resumecontent;
  document.getElementById("resume").style.display = "none";
  document.getElementById("resume-section").style.display = "block";
}

resume.style.display = "none";

function startQuiz() {
  con.style.display = "none";
  createQuiz();
}

function createQuiz() {
  resume.style.display = "block";
}

start.addEventListener("click", startQuiz);
=======
var start = document.getElementById("start-btn");
var con = document.getElementById("start");

function createResume() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var career = document.getElementById("career").value;
  var degree = document.getElementById("degree").value;
  var institution = document.getElementById("institution").value;
  var completion = document.getElementById("completion").value;
  var grade = document.getElementById("grade").value;
  var job = document.getElementById("job").value;
  var company = document.getElementById("company").value;
  var duration = document.getElementById("duration").value;
  var description = document.getElementById("description").value;
  var skill = document.getElementById("skill").value.split(",");

  var resumecontent = `
  <h3>${name}</h3>
      <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone} | <strong>Address:</strong> ${address}</p>
      <h4>Career Objective</h4>
      <p>${career}</p>
      <h4>Education</h4>
      <p>${degree} from ${institution}, ${completion} - Grade: ${grade}</p>
      <h4>Work Experience</h4>
      <p><strong>${job}</strong> at ${company} (${duration})</p>
      <p>${description}</p>
      <h4>Skills</h4>
      <ul>${skill.map((skill) => `<li>${skill.trim()}</li>`).join("")}</ul>
      `;
  document.getElementById("resume-content").innerHTML = resumecontent;
  document.getElementById("resume").style.display = "none";
  document.getElementById("resume-section").style.display = "block";
}

resume.style.display = "none";

function startQuiz() {
  con.style.display = "none";
  createQuiz();
}

function createQuiz() {
  resume.style.display = "block";
}

start.addEventListener("click", startQuiz);
>>>>>>> 6731e02 (Updates Files with Latest Changes)
