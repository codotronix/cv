import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  introSection;
  allProjects;

  constructor() { }

  ngOnInit() {
    this.loadIntroSectionData();
    this.loadData();
    this.initModal();
  }

  calculateTotalExp () {
    let infyDOJ = (new Date("2011-10-10")).getTime();
    let today = (new Date()).getTime();
    let totalExp = (today-infyDOJ);
    let totalYear = totalExp / (1000 * 3600 * 24 * 365);
    return totalYear.toFixed(1);
  }

  showDescTextInModal (name, desc) {
    // console.log(name);
    let $ = window["$"];
    $('#okmodal .modal-content .header').text(name);
    $('#okmodal .modal-content .body').text(desc);
    $('#okmodal').modal('open');
  }

  getPrevImg(project) {
    project.ImgIndex = project.ImgIndex || 0;
    project.ImgIndex--;
    if(project.ImgIndex < 0) { project.ImgIndex = project.img.length - 1; }
    project.currentImageUrl = project.img[project.ImgIndex];
  }

  getNextImg(project){
    project.ImgIndex = project.ImgIndex || 0;
    project.ImgIndex++;
    if(project.ImgIndex === project.img.length) { project.ImgIndex = 0; }
    project.currentImageUrl = project.img[project.ImgIndex];
  }

  loadIntroSectionData () {
    this.introSection = {
      col1: [
        "Front end web / UI / MEAN stack / Hybrid Mobile App developer", 
        "Experience: " + this.calculateTotalExp() + " years",
        "Current Employer: TATA Consultacy Services",
        "Phone: 8961184810"
      ],
      col2: [
        {
          iconClass: "far fa-envelope ico",
          url: "mailto:barick9@gmail.com",
          linkText: "barick9@gmail.com"
        },
        {
          iconClass: "fab fa-linkedin ico",
          url: "https://www.linkedin.com/in/sumanbarick",
          linkText: "Linkedin"
        },
        {
          iconClass: "fab fa-stack-overflow ico",
          url: "https://stackoverflow.com/users/5017556/suman-barick",
          linkText: "Stack Overflow"
        },
        {
          iconClass: "fab fa-github ico",
          url: "https://github.com/codotronix",
          linkText: "Github"
        }
      ]
    };
  }

  loadData(){
    fetch('assets/config/projects.json').then(res=>res.json()).then( res => {
      console.log(res);
      this.allProjects = res.allProjects;
    })
  }

  initModal() {
    let $ = window["$"];
    $(document).ready(function(){
      $('.modal').modal();
    });
  }

}
