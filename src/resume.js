var resume_data = {
    "info_summary": {
        "name": "Kanmaniselvan Murugesan",
        "title": "Ruby on Rails developer",
        "summary": "Web Developer with 3+ years of specialization in Ruby on Rails development and well versed in all stages of development cycle. Fun loving, enthusiastic and proactive programmer who is willing to work hard with great desire to learn. Team player who easily mingles with team and always looking to work with new programming languages."
    },
    "contact_details": {
        "phone": "+91 97863 97596",
        "email": "kanmaniselvan@gmail.com",
        "skype": "kanmaniselvan",
        "current_location": "Chennai, India"
    },
    "work_experience": [
        {
            "title": "Senior Product Hacker",
            "company": "Report Bee",
            "company_website": "http://www.reportbee.com",
            "duration": "07/2015 - Present",
            "location": "Chennai, India",
            "achievements": [
                "Experienced full stack development and startup work experience.",
                "Implemented Reporting module which sends colorful Student Assessment PDF reports using wkhtmltopdf and Sidekiq.",
                "Provided support for other app integrations by developing APIs.",
                "Increased performance by moving time taking processes to Sidekiq, caching frequently used data in Redis and Optimizing Rails queries. Reduced API calls to other apps by implementing RabbitMQ.",
                "Developed calendar product with SMS notification feature.",
                "Devised logic to send SMS dynamically through multiple vendors based on usage and also, to send mobile notifications using Azure platform.",
                "Implemented full text search using Solr.",
                "Consistently met deadlines and requirements for all production work orders and weekly sprints.",
                "Consistently kept work progress updates through daily SCRUM stand-ups and experienced in using JIRA board.",
                "Experienced in pair programming.",
                "Bootstrapped staging servers by learning Chef."
            ]
        },
        {
            "title": "Associate Software Engineer",
            "company": "Ameex Technologies",
            "company_website": "http://ameexusa.com",
            "duration": "05/2014 - 06/2015",
            "location": "Chennai, India",
            "achievements": [
                "Experienced hands-on learning of Ruby, Rails, and other front-end web technologies.",
                "Delivered projects on promised deadline.",
                "Provided continued maintenance, performance fixes, bug fixes and patch-sets for existing web applications.",
                "Provided option for soft-deletion by implementing soft-delete feature in all database tables.",
                "Made the database tracking more effective and scalable."
            ]
        }
    ],
    "education": {
        "degree": "Bachelor of Engineering",
        "field": "Computer Science and Engineering",
        "university": "Anna University of Technology - Tiruchirappalli",
        "duration": "09/2010 - 05/2014"
    },
    "skills": ["Ruby on Rails", "jQuery", "MySQL", "PostgreSQL", "HTML", "CSS", "Rspec", "GIT", "Redis", "Capistrano", "Sidekiq", "RabbitMQ", "Vagrant", "Chef", "SCRUM", "JIRA", "Solr", "Sneakers", "ReactJS", "Sinatra"],
    "personal_projects": [
        {
            "name": "Location based Hotel Search",
            "link": "https://github.com/kanmaniselvan/location_based_hotels_check_in",
            "description": "It's a simple location based hotel search Rails app using Google's location API and creates check-ins"
        },
        {
            "name": "tableX",
            "link": "https://github.com/kanmaniselvan/tableX",
            "description": "A lightweight jQuery plugin which adds Spreadsheet functionality on HTML table built using HTML, JS and JQuery."
        },
        {
            "name": "Other projects",
            "link": "https://github.com/kanmaniselvan/"
        }
    ],
    "languages": [
        {
            "name": "English",
            "level": "Full Professional Proficiency"
        },
        {
            "name": "Tamil",
            "level": "Native or Bilingual Proficiency"
        }
    ]
};

window.onload = function(){
    document.getElementById("resume-ip").value = JSON.stringify(resume_data);
    document.getElementById('update-resume-btn').click();
};

function updateResumeTemplate() {
    var resume_data;
    try {
        resume_data = JSON.parse(document.getElementById("resume-ip").value)
    } catch (e) {
        alert(e);
        return true;
    }

    var source   = document.getElementById("resume-template").innerHTML;
    var template = Handlebars.compile(source);

    document.getElementById("compiled-resume").innerHTML = template(resume_data);
}
