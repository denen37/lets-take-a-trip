const easyVisaObj = [{
    country: 'Rwanda',
    places: [{ name: 'Kigali', imagePath: '/images/Places/Rwanda/Kigali/Kigali-Rwanda.jpeg', current: true },
    { name: 'Nyungwe', imagePath: '/images/Places/Rwanda/Nyungwe/Nyungwe-Rwanda.jpg', current: false },
    { name: 'Lake kivu resorts', imagePath: '/images/Places/Rwanda/lake_kivu-resorts/lake_kivu-resorts-Rwand.jpg', current: false },
    { name: 'Rukari', imagePath: '/images/Places/Rwanda/Rukari/Rwanda-Kings-Palace-Museum(Rukari).jpg', current: false }
    ]
},
{
    country: 'Uganda',
    places: [{ name: 'Fort Port', imagePath: '/images/Places/Uganda/Fort-Port/kyaninga-lodge-Uganda.jpeg', current: true },
    { name: 'Fuego Cocktails and Restaurant', imagePath: '/images/Places/Uganda/Kampala-city/Fuego-Cocktails&Restaurant-Kampala-Uganda.jpeg', current: false },
    { name: 'Kampala City', imagePath: '/images/Places/Uganda/Kampala-city/Kampala-City-Uganda.jpeg', current: false },
    { name: 'Murchison Falls National Park', imagePath: '/images/Places/Uganda/Murchison-Falls-National-Park/Murchison-Falls-National-Park-Uganda.jpg', current: false }]
}
]

const taggedPlaces = [
    {
        type: 'Most Popular',
        current: true,
        places: [
            { name: 'Nairobi', country: 'Kenya', imagePath: '/images/Places/Kenya/Nairobi/Nairobi-Kenya-Commonwealth-Chamber-of-Commerce.jpg', discount: '20% off' },
            { name: 'England', country: 'United Kingdom', imagePath: '/images/Places/United-Kingdom/England/UK.jpg', discount: '' },
            { name: 'Cape Town', country: 'South Africa', imagePath: '/images/Places/South-Africa/Cape-Town/Lets-Take-a-Trip-jvdm-3736245.jpg', discount: '' },
            { name: 'Dubai', country: 'United Arab Emirates', imagePath: '/images/Places/United-Arab-Emirates/Dubai/dubai-8529645_1280.jpg', discount: '' }
        ]
    },
    {
        type: 'Special Offer',
        current: false,
        places: [
            { name: 'Kigali', country: 'Rwanda', imagePath: '/images/Places/Rwanda/Kigali/Kigali-Rwanda.jpeg', discount: '20% off' },
            { name: 'Boston', country: 'United States', imagePath: 'images/Places/United-State/Boston/boston-1631460_1280.jpg', discount: '10% off' },
            { name: 'Cancun', country: 'Mexico', imagePath: '/images/Places/Mexico/Cancun/LetsTakeaTrip-photos-cancun-1235489_1280.jpg', discount: '10% off' },
            { name: 'Prague Praha', country: 'Czech Republic', imagePath: '/images/Places/Czech-Republic/Prague Praha/prague-3010407_1280.jpg', discount: '15% off' }
        ]
    },
    {
        type: 'Recommended',
        current: false,
        places: [
            { name: 'England', country: 'United Kingdom', imagePath: '/images/Places/United-Kingdom/England/UK.jpg', discount: '' },
            { name: 'Kigali', country: 'Rwanda', imagePath: '/images/Places/Rwanda/Kigali/Kigali-Rwanda.jpeg', discount: '' },
            { name: 'Cape Town', country: 'South Africa', imagePath: '/images/Places/South-Africa/Cape-Town/Lets-Take-a-Trip-jvdm-3736245.jpg', discount: '' },
            { name: 'Toronto', country: 'Canada', imagePath: '/images/Places/Canada/Toronto/Lets-Take-a-Trip-Tonroto-2297210_1280.jpg', discount: '' }
        ]
    }
]

const recentActivities = [
    { name: 'Toronto', country: 'Canada', imagePath: '/images/Places/Canada/Toronto/Lets-Take-a-Trip-Tonroto-2297210_1280.jpg', date: '2, May, 2024', isApplied: true },
    { name: 'Hanoi', country: 'Vietnam', imagePath: '/images/Places/Vietnam/Hanoi/Hanoi-Vietnam.jpeg', date: '3, April, 2024', isApplied: false },
    { name: 'Cacun', country: 'Mexico', imagePath: '/images/Places/Mexico/Cancun/LetsTakeaTrip-photos-cancun-1235489_1280.jpg', date: '10, March, 2024', isApplied: false },
    { name: 'Kigali', country: 'Rwanda', imagePath: '/images/Places/Rwanda/Kigali/Kigali-Rwanda.jpeg', date: '20, Feb, 2024', isApplied: true },
]

export { easyVisaObj, taggedPlaces, recentActivities }