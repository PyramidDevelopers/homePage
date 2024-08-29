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
9: Copper Club
10 : AthenaGen AI
11 : Anemix
12 : Snacc
13 : Sportifan
14 : LexPal

in BreifInformations below, the order is how it'll show up in the site. Key value should match what's above.

*/

export const BreifInformations = [
    {
        ongoing: true,
        title: "Trash To Cash",
        text: "Trash to Cash is a revolutionary method to dispose of your scrap waste in Bengaluru.",
        key: 2
    },
    {
        ongoing: true,
        title: "Snacc",
        text: "Personalized nutrition guidance with low effort, image based meal tracking",
        key: 12
    },
    // {
    //     ongoing: false,
    //     title: "Athena Gen AI",
    //     text: "AI powered ad creative agency, that lets you generate advertising campaigns with just a few clicks.",
    //     key: 10
    // },
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
    // {
    //     ongoing: true,
    //     title: "Anemix",
    //     text: "A non-medicinal healthcare company that emphasizes home remedies, Ayurveda and Yoga",
    //     key: 11

    // },
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
        title: "Copper Club",
        text: "A revolutionary approach to dating",
        key: 9
    },
    // {
    //     ongoing: false,
    //     title: "NearVibe",
    //     text: "A platform to share, react & discover how people are feeling in your area",
    //     key: 0
    // },
    // {
    //     ongoing: false,
    //     title: "My Vital Mind",
    //     text: "Personal mental health assistant",
    //     key: 1
    // },
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
        status: 'Phase 4',
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
    {
title: 'Copper Club',
status: 'Completed',
client: 'Victoria Zauner',
info: 'Copper Club is an exclusive dating app tailored for New Yorkers. Through the "Second swipe" function, users can connect with matches they\'ve met in person after the "first swipe", fostering deeper connections beyond digital interactions. Additionally, the "pause account" feature offers flexibility and privacy by allowing users to temporarily make their profiles invisible. What sets Copper apart is verification of user locations, ensuring practical and secure meetups.',
scope: 'User Interface and Experience Design (UIUX)\nFront-End Development\nBack- End Development\nBug Testing',
linksTrue: false,
    },
    {
title: 'Athena Gen AI',
status: 'Paused by Client',
client: 'Ashutosh J Gowda',
info: 'Athena is an AI-based Marketing Image Generator, a powerful tool designed to enable users to effortlessly generate 25-30 high-quality marketing images based on a provided concept or keyword, with the additional option to add templates and view previously generated results. These images can be utilized for various marketing purposes, including website banners, social media posts, and print advertisements.',
scope: 'User Interface and Experience Design (UIUX)\nFront-End Development\nBack- End Development - Midjourney + Discord\nBug Testing\n Deployment ',
linksTrue: true,
links: [
    {   "title": "AthenaGen Website",
        "link": 'https://athenagen.ai/',
        "inProgress": false
    },
]
    },
    {
        title: 'Anemix',
    },
    {
        title: 'Snacc',
        status: 'Production',
        client: 'Kuvempu LLC',
        info: 'Snacc is a nutrition guide that uses AI to help you manage your diet. You can take photos or describe your meals, and Snacc will quickly show you the nutritional details like calories and nutrients. The app keeps track of your eating habits over time in an easy-to-read calendar. It also gives you a "Snacc Score" based on how well your diet meets your fitness goals. Snacc helps you make better food choices and supports your overall health.',
        scope: 'User Interface and Experience Design (UIUX)\nFront-End Development\nBack- End Development\nBug Testing\nApp Store and Play Store Deployment\nWeb Deployment\nQuick iterative development',
        linksTrue: true,
        links: [
            {   "title": "Snacc Website",
                "link": 'https://snacc.fit/',
                "inProgress": false
            },
            {   "title": "Snacc App",
                "link": 'https://snacc.fit/get',
                "inProgress": false
            },
        ]
    },
    {
        title: 'Sportifan',
        status: 'In-Progress',
        client: 'Ganesh',
        info: 'Sportifan is a platform with two apps for managing cricket matches. The Organizer app helps users set up teams, pick players, choose venues, and book match times. The Umpire app lets officials track game progress, team performance, and finalize scores. After games, teams can see their scores and stats. Sportifan makes organizing and running cricket matches easier and more efficient for everyone involved, from planning to post-game analysis.',
                scope: 'Front-End Development - Organizer App, Umpire App\nServer Setup and Maintenance\nBug Testing and Security\nAndroid and iOS Deployment',
        linksTrue: false
    },
    {
        title: 'LexPal',
        status: 'Beta Testing',
        client: 'Zhane Bennett',
        info: 'Lexpal is an online language learning platform that mixes AI and real human help. It connects learners with language partners based on their needs and skills. Lexpal offers custom lessons made by AI and lets users easily set up and join live practice sessions. Features include tracking progress, fun game elements, and a friendly community forum. Lexpal makes learning languages engaging and effective by combining technology with personal interaction.',
        scope: 'Front-End Development\nBack- End Development\nBug Testing\nWeb Deployment\nQuick iterative development',
        linksTrue: false
    }
];