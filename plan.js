// Plan for React-CV

// DATA

// Have content.json file (or files?), containing data for react to populate
let example = {
    profile: {
        name: 'Matt Chapman',
        blurb: 'Developer, Creative, and Adventurer',
        image: './public/profile.jpg',
        email: 'matt@mattchapman.io',
        phone: '+64 27 628 2427',
        github: 'http://github.com/mttchpmn',
        stackOverflow: '',
        linkedIn: ''
    },
    stack: [
        {
            name: 'Javascript',
            competency: 75,
            experienceYears: 2
        },
        {
            name: 'Node',
            competency: 80,
            experienceYears: 3
        }
    ],
    skills: [
        'Problem solving',
        'Communication',
        'Time Management'
    ],
    education: [
        {
            level: 'Secondary',
            name: 'Wakatipu High School',
            credit: 'High School Diploma',
            years: '2002-2008'
        },
        {
            level: 'Tertiary',
            name: 'Otago University',
            credit: 'Bachelor of Arts ENGL, COMS',
            years: '2008-2012'
        }
    ],
    experience: [

    ],
};

// VIEW

// Build components for each key aspect of CV - profile, education, skills etc
// Use fractal structure and break each down into smaller components; 
/* e.g.
    Components:
        - Profile.js
        - profile/
            - Image.js
            - Name.js
            - Contact.js
        - Skills.js
        - skills/
        - Holder.js
        - Box.js
*/

// DESIGN

// Use #EEEEEE as page background, and then have material styled page front-and center
// Mimic a traditional piece of A4, yet with infinite scroll

// Have links in a sidebar for headings like #Skills, #Education etc
// 'Contact Me' link at bottom of sidebar

// Be able to specify a color - or perhaps primary and secondary in 'content.json'

// Be able to specify a theme in 'content.json'?

// Link at the bottom 'Like the page? Checkout the #Source Code'

// Domain: cv.mattchapman.io ?

// Host on Heroku / DO Droplet?