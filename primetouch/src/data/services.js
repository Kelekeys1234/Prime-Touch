import card1 from '../assets/card-1.jpg'
import badge1 from '../assets/icon-1.png'
import card2 from '../assets/card-2.jpg'
import badge2 from '../assets/icon-2.png'
import card3 from '../assets/card-3.jpg'
import badge3 from '../assets/icon-3.png'
import card4 from '../assets/card-4.jpg'
import badge4 from '../assets/icon-4.png'
import card5 from '../assets/card-5.jpg'
import badge5 from '../assets/icon-5.png'

const cardPhotos = [card1, card2, card3, card4, card5]
const badges = [badge1, badge2, badge3, badge4, badge5]

const base = [
 {icon:"🏠",title:"Residential Cleaning",description:"Keep your home fresh, comfortable and inviting with our detailed and reliable cleaning services.",items:["Kitchen cleaning","Bathroom cleaning","Dusting","Vacuuming","Mopping","Surface cleaning","Bedroom cleaning","Common-area cleaning","General tidying"]},
 {icon:"✨",title:"Deep Cleaning",description:"Get the extra attention your space needs with our thorough deep cleaning service.",items:["Kitchens","Bathrooms","Baseboards","Doors and handles","Hard-to-reach areas","Floors","Surfaces","High-touch areas"]},
 {icon:"📦",title:"Moving Services",description:"Moving support for tenants, homeowners, landlords and property managers, with cleaning options to help make the transition easier.",items:["End-of-tenancy cleaning for tenants, landlords and property managers","Move-in and move-out cleaning","Moving assistance tailored to your needs"]},
 {icon:"🏢",title:"Commercial Cleaning",description:"Create a cleaner, healthier workplace for your employees, customers and visitors.",items:["Office cleaning","Washroom cleaning","Common-area cleaning","Floor cleaning","Dusting","Surface cleaning","High-touch area cleaning","Garbage removal"]},
 {icon:"🅰",title:"Airbnb & Short-Term Rental Cleaning",description:"Keep your property guest-ready with our reliable turnover cleaning services.",items:["Turnover cleaning","Kitchen cleaning","Bathroom cleaning","Bedroom preparation","Floor cleaning","Surface cleaning","General property preparation"]}
]

export const services = base.map((s, i) => ({ ...s, photo: cardPhotos[i], badge: badges[i] }))

// Optional extras – delete these if PRIMETOUCH does not offer them
export const extraServices = [
  { icon: '🌿', title: 'Lawn Care & Snow Removal', items: ['Lawn mowing', 'Trimming', 'Seasonal yard maintenance', 'Snow clearing', 'Walkway clearing', 'Driveway clearing'] },
]
