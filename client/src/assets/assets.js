import logo from './logo.png'
import credit_star from './star-record.png'
import profile from './profile-user.png'
import star from './star.png'
import home_city from './home-city.jpg'
import home_forest from './home-forest.jpg'
import home_fox from './home-fox.jpg'
import home_snowball from './home-snowball.jpg'
import home_snowhouse from './home-snowhouse.jpg'
import step_icon1 from './step-icon1.png'
import step_icon2 from './step-icon2.png'
import step_icon3 from './step-icon3.png'
import description_waterfall from './description-waterfall.jpg'
import testimonial_icon1 from './testimonial-profile1.jpg'
import testimonial_icon2 from './testimonial-profile2.jpg'
import testimonial_icon3 from './testimonial-profile3.jpg'
import rating_star from './rating_star.svg'
import instagram_icon from './instagram.png'
import mail_icon from './gmail.png'
import facebook_icon from './facebook.png'
import buy_plan_logo from './buy-plan-logo.png'

export const assets = {
    logo,
    credit_star,
    profile,
    star,
    home_city,
    home_forest,
    home_fox,
    home_snowball,
    home_snowhouse,
    step_icon1,
    step_icon2,
    step_icon3,
    description_waterfall,
    mail_icon,
    instagram_icon,
    facebook_icon,
    buy_plan_logo
}

export const stepsData = [
    {
        title: 'Describe you vision',
        description: 'Type a phrase, sentence or paragraph that descibes the image you want to create.',
        icon: step_icon1
    },
    {
        title: 'See the Magic',
        description: 'The image will be generated according to your description given to the PixelPioneer',
        icon: step_icon2
    },
    {
        title: 'Download the Image',
        description: 'Download your image at any time and on any platform',
        icon: step_icon3
    }
]

export const descriptionData = [{
    title: 'Introducing the AI-Powered Text to Image Generator',
    para1: 'Introducing the AI-Powered Text to Image Generator, a revolutionary tool that transforms your written descriptions into stunning visual masterpieces. Whether you are an artist looking for inspiration, a marketer seeking engaging content, or simply someone who loves experimenting with new technologies, this generator provides an effortless way to bring your ideas to life. By leveraging advanced AI algorithms, the tool interprets your text inputs and creates high-quality images that perfectly match your descriptions.',
    para2: 'Say goodbye to the limitations of traditional design tools and welcome the future of creative expression. The AI-Powered Text to Image Generator offers endless possibilities, from creating unique artworks and designing eye-catching graphics to generating visuals for your social media posts and marketing campaigns. With its user-friendly interface and powerful capabilities, this tool is set to revolutionize the way you create and share visual content, making it easier than ever to turn your imagination into reality.'
}]


export const testiMonialsData = [
    {
        icon: testimonial_icon1,
        name: 'Rexy B',
        role: 'Graphic Designer',
        rating: rating_star,
        comment: `PixelPioneer is a game-changer! The AI-generated images are stunningly beautiful and incredibly accurate. It's so easy to use, and the results are always beyond my expectations. I can't imagine my creative process without it!`
    },
    {
        icon: testimonial_icon2,
        name: 'Sudheer Babu B',
        role: 'Senior Software Developer',
        rating: rating_star,
        comment: `I love PixelPioneer! The app is user-friendly, and the quality of the images it generates is simply amazing. It's perfect for my projects, and it saves me so much time. Highly recommended to anyone looking for a powerful and intuitive image generator!`
    },
    {
        icon: testimonial_icon3,
        name: 'Murali Krishna B',
        role: 'Senior AI Engineer',
        rating: rating_star,
        comment: `PixelPioneer has become my go-to tool for creating unique and eye-catching visuals. The AI is incredibly smart, and the results are consistently top-notch. It's a must-have app for designers and creatives. I'm thoroughly impressed!`
    }
]

export const plansData = [
    {
        icon: buy_plan_logo,
        title: 'Basic',
        description: 'Best for personal use',
        price: '$10',
        credits: 100
    },
    {
        icon: buy_plan_logo,
        title: 'Intermediate',
        description: 'Best for business use',
        price: '$50',
        credits: 500
    },
    {
        icon: buy_plan_logo,
        title: 'Advanced',
        description: 'Best for enterprise use',
        price: '$250',
        credits: 5000
    }

]