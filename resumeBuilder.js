var DATA = '%data%';

var bio = {
  name: 'Prerna Sharma',
  role: 'Full Stack Developer.',
  contacts: {
    mobile: '+91-8556057903',
    email: 'ps546866@gmail.com',
    github: 'prerna611',
    twitter: '@ps546866',
    location: 'Chandigarh'
  },
  welcomeMessage: 'I am a Full Stack Developer from Chandigarh ' +
                  'I hold a Degree of Computer Science and Engineering ' +
                  'from the Chitkara University.I am currently doing learning new skills and working on assignments ' +
                  'internship at Capgemini,where i spend lots of my time learning new skills and working on assignments.',
  skills: ['HTML', 'CSS', 'JavaScript', 'Express', 'Mongodb','Jquery',
           'User Interface', 'Algorithms', 'Front-end Development',
           'Open Source', 'Node.js', 'Git' ],
  biopic: 'prerna.jpg',
  display: function() {
    var formattedName = HTMLheaderName.replace(DATA, bio.name);
    var formattedRole = HTMLheaderRole.replace(DATA, bio.role);

    var formattedMobile = HTMLmobile.replace(DATA, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(DATA, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(DATA, bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace(DATA, bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace(DATA, bio.contacts.location);

    var formattedBioPic = HTMLbioPic.replace(DATA, bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);

    $('#header').prepend(formattedName + formattedRole);
    $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail +
      formattedGithub + formattedTwitter + formattedLocation);
    $('#header').append(formattedBioPic);
    $('#header').append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);

      for (var i = 0, len = bio.skills.length; i < len; i++) {
        var formattedSkills = HTMLskills.replace(DATA, bio.skills[i]);

        $('#skills').append(formattedSkills);
      }
    }
  }
};

var education = {
  schools: [
    {
      'name': 'Chitkara University',
      'location': 'Punjab',
      'degree': 'Computer Science and Engineering',
      'majors': ['Full stack Developer'],
      'dates': '2014 - 2018',
      'url': 'https://www.chitkara.edu.in/'
    }
  ],
  onlineCourses: [
   {
     'title': 'WebDevelopmentBootcamp',
     'school': 'Udemy',
     'dates': 'July 2018',
     'url': 'https://www.udemy.com/the-web-developer-bootcamp/learn/v4/t/lecture/3861562?start=386'
   },
   {
     'title': 'Mastering the Angular',
     'school': 'Udemy',
     'dates': 'june 2018',
     'url': 'https://www.udemy.com/angular-mastering-the-basics/learn/v4/t/lecture/10121044?start=180'
   }
  ],
  display: function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
      for (var i = 0, iLen = education.schools.length; i < iLen; i++) {
        var formattedName = HTMLschoolName.replace(DATA, education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace(DATA, education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace(DATA, education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace(DATA, education.schools[i].location);
        var formattedNameDegree = formattedName + formattedDegree;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedNameDegree);
        $('.education-entry:last').append(formattedSchoolDates);
        $('.education-entry:last').append(formattedLocation);

        for (var j = 0, jLen = education.schools[i].majors.length; j < jLen; j++) {
          var formattedMajor = HTMLschoolMajor.replace(DATA, education.schools[i].majors[j]);

          $('.education-entry:last').append(formattedMajor);
        }
      }

      $('#education').append(HTMLonlineClasses);

      for (var k = 0, len = education.onlineCourses.length; k < len; k++) {
        var formattedTitle = HTMLonlineTitle.replace(DATA, education.onlineCourses[k].title).replace('#', education.onlineCourses[k].url);
        var formattedSchool = HTMLonlineSchool.replace(DATA, education.onlineCourses[k].school);
        var formattedOnlineDates = HTMLonlineDates.replace(DATA, education.onlineCourses[k].dates);
        var formattedUrl = HTMLonlineURL.replace(DATA, education.onlineCourses[k].url);
        var formattedTitleSchool = formattedTitle + formattedSchool;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedTitleSchool);
        $('.education-entry:last').append(formattedOnlineDates);
        $('.education-entry:last').append(formattedUrl);
      }
    }
  }
};

var work = {
  jobs: [
    {
      employer: 'Capgemini',
      title: 'Software Trainee',
      location: 'Chandigarh',
      dates: 'January 2018 - Until now',
      description: 'I am working in Capgemini (work from home) that offers a ' +
                   'ADAPT (Accelerated Digital Aid for Pre-Onboarding the Talent)  ' +
                   'Online platform to upgrade the skills. ' 
    }
  ],
  display: function() {
    if (work.jobs.length > 0) {
      for (var i = 0, len = work.jobs.length; i < len; i++) {
        var formattedEmployer = HTMLworkEmployer.replace(DATA, work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace(DATA, work.jobs[i].title);
        var formattedDates = HTMLworkDates.replace(DATA, work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace(DATA, work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace(DATA, work.jobs[i].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedDates);
        $('.work-entry:last').append(formattedLocation);
        $('.work-entry:last').append(formattedDescription);
      }
    }
  }
};

var projects = {
  projects: [
    {
      'title': 'Neighbourhood-Map',
      'dates': 'July 2017',
      'description': 'Shows an Indian State and famous places marked on the map.' +
                     'When user hovers over the place then rating about the'+
                     'e information is shown about the place (Java Script, HTML) ' 
                     ,
      'images': ['neigbhour.jpg']
    },
    {
      'title': 'Movie Trailer Website',
      'dates': 'August 2017',
      'description': 'Project consists of server-side code to store a list of movies. ' +
                  ' Data serves as a web page allowing visitors to review the movies and watch the trailers. ',
      'images': ['movie.jpg']
    },
    {
      'title': 'Color Guessing Game',
      'dates': 'september 2017',
      'description': 'Color guessing game'+
                     'Technologies used: HTML,CSS,JavaScript,Jquery'
                     ,
      'images': ['colorgame.png']
    }
  ],
  display: function() {
    if (projects.projects.length > 0) {
      for (var i = 0, iLen = projects.projects.length; i < iLen; i++) {
        var formattedTitle = HTMLprojectTitle.replace(DATA, projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace(DATA, projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace(DATA, projects.projects[i].description);

        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedTitle);
        $('.project-entry:last').append(formattedDates);
        $('.project-entry:last').append(formattedDescription);

        for (var j = 0, jLen = projects.projects[i].images.length; j < jLen; j++) {
          var formattedImage = HTMLprojectImage.replace(DATA, projects.projects[i].images[j]);

          $('.project-entry:last').append(formattedImage);
        }
      }
    }
  }
};

bio.display();
education.display();
work.display();
projects.display();
$('#mapDiv').append(googleMap);
