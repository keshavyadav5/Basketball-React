import React from 'react'
import logo from '../../assets/logoIcon.png'
import coach1 from '../../assets/coach1.png'
import coach2 from '../../assets/coach2.png'
import coach3 from '../../assets/coach3.png'
import coach4 from '../../assets/coach4.png'
import Card from './Card'

const card = [{
  id: 1,
  name: "Keshav Yadav",
  position: "Coach of the Year",
  image: coach1,
  description : "Championships aren't won on the court, they're built on teamwork, dedication, and belief. As a coach, I focus beyond Xs and Os, fostering a supportive environment where players grow as athletes and individuals. We build mental toughness, lead by example, and instill unwavering belief in their potential. Basketball teaches valuable life lessons - discipline, hard work, and perseverance. Coaching is about shaping lives, and the journey to becoming a champion is the most rewarding part. Forget fancy plays, championships are forged in fire. Basketball is more than just a game; it's a journey where athletes push their limits and become their best selves. As a coach, my role goes beyond drills. "
},
{
  id: 2,
  name: "Jash Hazel",
  position: "fitness Trainer",
  image: coach2,
  description : "Forget fancy gym memberships, true fitness transformations are built on dedication, sweat, and a commitment to a healthier you. Fitness isn't just about sculpted bodies and trendy workouts; it's a journey of self-discovery, pushing boundaries, and achieving something extraordinary with your own body. As a trainer, my role goes beyond showing you the perfect bicep curl. I create a supportive environment where you feel valued, respected, and empowered to reach your fitness goals. We build a community, a network of support where encouragement and accountability become the cornerstones of your success."
},
{
  id: 3,
  name: "Mady Hazel",
  position: "Mentor",
  image: coach3,
  description : "Success rarely walks a solitary path. Often, it's guided by the steady hand of a mentor, someone who offers not just knowledge, but encouragement, support, and a belief in your potential. As a mentor, my role transcends giving advice. It's about fostering a space where mentees feel heard, valued, and empowered to navigate their own unique journeys. We build a trusting relationship, a foundation where open communication and constructive feedback can flourish. Building resilience is crucial. We all face setbacks, moments of self-doubt, and unexpected challenges. "
},
{
  id: 4,
  name: "Henry James",
  position: "Mentor",
  image: coach4,
  description : "Leading by example is paramount. My own experiences, both successes and failures, become teachable moments. Demonstrating a growth mindset, a willingness to learn and adapt, sets the tone for continuous improvement. When mentees see their mentor constantly striving, it ignites a fire within them to do the same. But perhaps the most potent element is belief. I believe in each mentee's potential, in the power of a supportive network, and in their ability to overcome any obstacle. This belief fosters courage and fuels their drive to achieve their goals. Mentorship is more than just career guidance; it's about shaping well-rounded individuals. It's a privilege to witness mentees blossom, not just professionally, but personally. "
}
]
const Testimonial = () => {
  return (
    <div className='testimonial'>
      <div className="test-title">
        <h2>Talented Individual <span>At BasketBall Academy </span>
          <img src={logo} alt="" />
        </h2>
      </div>
      <div className="test-card">
          {
            card.map((item) => {
              return <Card key={item.id}
               name={item.name}
                position={item.position} 
                image = {item.image} 
                description = {item.description}
                />
              })
          }
      </div>
    </div>
  )
}

export default Testimonial