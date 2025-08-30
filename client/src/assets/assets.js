import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.jpg'
import profile_img_2 from './profile_img_2.jpg'
import profile_img_3 from './profile_img_3.jpg'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import user_icon from './user_icon.svg'

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    user_icon
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:profile_img_1,
        name:'Abhay',
        role:'B.Tech CSE(AIML)',
        stars:5,
        text:`I’ve been using PicGen AI for a while now, and it’s amazing how quickly it turns my ideas into beautiful images. The interface is super simple, and the results always look professional. It’s a huge time-saver for my creative projects`
    },
    {
        image:profile_img_3,
        name:'Sachin',
        role:'B.Tech CSE(AIML)',
        stars:4,
        text:`PicGen AI is a total game-changer! I can just type what I want, and it instantly generates pictures that are high-quality and unique. I’ve tried a few other tools before, but nothing comes close to how easy and fast this is.`
    },
    {
        image:profile_img_2,
        name:'Tej singh',
        role:'B.Tech CSE(AIML)',
        stars:5,
        text:`I absolutely love PicGen AI! It makes creating visuals so effortless. Whether it’s for Instagram posts, banners, or personal projects, the images always turn out stunning. Even someone with no design experience can make pro-level pics easily`
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 11,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 55,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 300,
      desc: 'Best for enterprise use.'
    },
  ]