//Way to create reUsable elements
import svgImage1 from '../../images/svg-1.svg'
import svgImage2 from '../../images/svg-2.svg'
import svgImage6 from '../../images/svg-6.svg'

export const homeObjOne={
    id: 'about',
    lightBg: false,
    lightText:true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline:'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: svgImage2,
    alt:'Car',
    dark:true,
    primary:true,
    darkText:false,
    dark2:false,
}

export const homeObjTwo={
    id: 'discover',
    lightBg: true,
    lightText:false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline:'Login to your account at any time',
    description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
    buttonLabel: 'Start Now',
    imgStart: true,
    img: svgImage1,
    alt:'Locker',
    dark:false,
    primary:false,
    darkText:true,
    dark2:true,
}

export const homeObjThree={
    id: 'signup',
    lightBg: true,
    lightText:false,
    lightTextDesc: false,
    topLine: 'Join our Team',
    headline:'Creating an account is extremely easy!',
    description: "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
    buttonLabel: 'Start Now',
    imgStart: false,
    img: svgImage6,
    alt:'Car',
    dark:false,
    primary:false,
    darkText:true,
    dark2:true,
}

export const homeObjFour={
    id: 'queries',
    lightBg: false,
    lightText:true,
    lightTextDesc: true,
    topLine: 'Mail Us',
    headline:'Send us a Query!',
    description: 'Fill your details and message query in the form to help us serve you better!',
    buttonLabel: 'Go to Top',
    imgStart: false,
    img: svgImage2,
    alt:'',
    dark:true,
    primary:true,
    darkText:false,
    dark2:false,
}
