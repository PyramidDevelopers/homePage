/*
Each project has a key value. Everything follows that order.
So when adding a new project, Detailed Information needs to be in the same order. In ShowDetailsPopUp.js as well
0: NearVibe
1: My Vital Mind
2: Trash To Cash
3: Enerman
4: TakeYourTrip
5: Khushi
6: PoolPay
7: CampX
8: AltFit 

in BreifInformations below, the order is how it'll show up in the site. Key value should match what's above.

*/

export const BreifInformations = [
    {
        ongoing: true,
        title: "Trash To Cash",
        text: "Trash to Cash is a revolutionary method to dispose of your scrap waste in Bangalore",
        key: 2
    },
    {
        ongoing: false,
        title: "CampX",
        text: "A holistic social media platform focused on calmness and mindfulness",
        key: 7
    },
    {
        ongoing: false,
        title: "PoolPay",
        text: "Payment platform to pool money and pay",
        key: 6
    },
    {
        ongoing: false,
        title: "Enerman",
        text: "Solar Panel information dashboard",
        key: 3
    },
    {
        ongoing: true,
        title: "AltFit",
        text: "Personalised Fitness Coaching and Training",
        key: 8
    },
    {
        ongoing: false,
        title: "NearVibe",
        text: "A platform to share, react & discover how people are feeling in your area",
        key: 0
    },
    {
        ongoing: false,
        title: "My Vital Mind",
        text: "Personal mental health assistant",
        key: 1
    },
    {
        ongoing: true,
        title: "Khushi",
        text: "A robust clinic \nmanagement system.",
        key: 5
    },
    {
        ongoing: false,
        title: "TakeYourTrip",
        text: "A travel booking app",
        key: 4
    },


];

export const DetailedInformation = [
    {
        title: 'NearVibe',
        status: 'Completed (Paused By Client)',
        client: 'Armaan Roy',
        info: 'An exciting new-age social media platform based on the analysis and interpretation of vibes around a particular region or user group, NearVibe allowed users to enter the general feeling around them every 3 hours, and collated and displayed this information around different environments, while allowing users to vibe around posts from users as well.',
        scope: 'User Experience Design (UX)\nInformation Architecture\nUser Interface Design\nFront-End Development\nBug Testing\nAndroid Deployment',
        linksTrue: false,
        links: [
            {   "title": "Play Store",
                "link": "https://play.google.com/store/apps/details?id=com.pyramid.nearvibe",
                "inProgress": false
            },
        ]
    },
    {
        title: 'My Vital Mind',
        status: 'Bug Fixing and Testing',
        client: 'ArcTech',
        info: 'My Vital mind is a powerful self journaling application that allows you to keep track of all your habits and empowers you to build up on your skills. Provides a lot of functionality to get rid of bad habits, build better habits and also learn new skills. Also allows you to track your diet and your mental state such that it gives you an all-round approach to managing your mental health',
        scope: 'User Experience Design (UX)Information Architecture\nUser Interface Design\nFront-End Development\nBack- End Development\nBug Testing and Security\nAndroid and iOs Deployment',
        linksTrue: false,
    },
    {
        title: 'Trash To Cash',
        status: 'Phase 2',
        client: 'Trash To Cash Innovations India Private Limited',
        info: 'Trash to Cash is a revolutionary method to dispose of your scrap waste in Bangalore. You can easily book a partner on the application and then the partner will come to your location, collect the segregated waste, for which you will be compensated through UPI. It is the future of waste management and proactive disposal leading to a cleaner and healthier tomorrow',
        scope: 'User Experience Design (UX)\nInformation Architecture\nUser Interface Design\nFront-End Development - User App, Partner App, Admin App\nBack-End Development - User App, Partner App, Admin App\nServer Setup and Maintenance - Coordinating Bookings\nBug Testing and Security\nAndroid and iOS Deployment',
        linksTrue: true,
        links: [
            {   "title": "User App for IOS",
                "link": 'https://apps.apple.com/us/app/trash-to-cash-india/id1562372561',
                "inProgress": false
            },
            {   "title": "Partner App for IOS",
                "link": 'https://apps.apple.com/us/app/trash-to-cash-partner/id1562372490',
                "inProgress": false
            },
            {   "title": "User App for Android",
                "link": "https://play.google.com/store/apps/details?id=com.pyramid.trashtocash",
                "inProgress": false
            },
        ]
    },
    {
        title: 'Enerman',
        status: 'Completed Phase 2',
        client: 'Enerman Technologies Ltd.',
        info: 'Enerman Technologies is a leading global provider of solutions to Solar Energy Management for Solar Power plants across various locations.\nThis app enables owners of Enerman Products to keep track of the power generated and energy collected over different periods of time and view the performance of each of the products across all the locations and systems, by drawing information from Enerman APIs and displaying it through a dashboard for the customer.',
        scope: 'User Experience Design (UX)\nInformation Architecture\nUser Interface Design\nFront-End Development\nBug Testing\nAndroid and iOs Deployment',
        linksTrue: true,
        links: [
            {   "title": "Apple App Store (IOS)",
                "link": 'https://apps.apple.com/us/app/enerman/id1528670740',
                "inProgress": false
            },
            {   "title": "Google Play Store (ANDROID)",
                "link": "https://play.google.com/store/apps/details?id=com.pyramid.enerman",
                "inProgress": false
            },
        ]
    },
    {
        title: 'TakeYourTrip',
        status: 'Completed',
        client: 'Kartik Sanghal',
        info: 'Internal Application to allow for company employees to make bookings at special discounted rates. Required direct interaction with flight vendors and couldn’t go through a third party vendor like makemytrip',
        scope: 'User Experience Design (UX)\nInformation Architecture\nUser Interface Design\nFront-End Development\nBug Testing',
        linksTrue: false,
        linkWriteUp: "Will be updated Soon",
    },
    {
        title: 'Khushi',
        status: 'Phase 2 in Progress',
        client: 'Dr. Vibha Shetty',
        info: 'A robust clinic management system which allows for better coordination between the different sections and members of the clinic in order to achieve a more effective administration. The application takes care of multiple aspects of clinics such as inventory, appointments, doctor availability and patient databases, while maintaining a user friendly and intuitive approach to entering data, making it easier and faster for the doctors to use the app instead of physical records',
        scope: 'User Experience Design (UX)\nInformation Architecture\nUser Interface Design\nFront-End Development\nBack- End Development\nBug Testing\nAndroid and iOs Deployment',
        linksTrue: false,
    },
    {
        title: 'PoolPay',
        status: 'Client Handover Completed',
        client: 'Sarvesh Kedia, Ranjini Kedia',
        info: 'PoolPay is a payment platform that aims to make group payments easier, efficient and more transparent. You can pool money into a common digital wallet with your friends, which all of you can collectively use for all their group related payments. PoolPay also provides you with a UPI wallet and a virtual card so you can carry out personal transactions as well. Whether you want to split bills, settle expenses, or save money through offers and rewards, PoolPay is the app for you. ',
        scope: 'User Experience Design (UX)\nInformation Architecture\nUser Interface Design\nFront-End Development\nBack- End Development\nBug Testing\nPayment Integration\n 3rd Party Integrations',
        linksTrue: true,
        links: [
            {   "title": "PoolPay Website",
                "link": 'https://poolpay.in/',
                "inProgress": false
            },
        ]
    },
    {
        title: 'CampX',
        status: 'Completed (Paused by Client)',
        client: 'Kartikeya Ladha',
        info: 'CampX is a Social Media Platform with special importance on a holistic approach. The platform focused on the literature community, and the client had a very unique idea to center the application around different circles : Mind, Emotion, Body and Spiritual circles.\n Hence, the UI of this application enhanced this idea by building the entire platform using only circles!',
        scope: 'User Interface and Experience Design (UIUX)\nInformation Architecture\nFront-End Development\nBack- End Development\nBug Testing',
        linksTrue: false,
    },
    {
        title: 'AltFit',
        status: 'Phase 2 in Progress',
        client: 'Ubifit, Bushan Sunderraj ',
        info: 'AltFit is a hyper-personal workout generation app based on the users body metrics and goals such as muscle building and weight loss. \nThe app also provides in-depth analytics on the calories burnt and volume of workout per week, gamification elements backed by extensive UX and features like workout streak or progress to motivate individuals to track their fitness goals.',
        scope: 'User Interface and Experience Design (UIUX)\nFront-End Development\nBack- End Development using AWS\nServerless Approach using Lambda Funcitons\nBug Testing\n3rd Party Integrations',
        linksTrue: false,
    },
];