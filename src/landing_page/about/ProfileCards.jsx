import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import "../../index.css";
import './ProfileCards.css';

const ProfileCards = () => {
  const profiles = [
    {
      image: 'media/images/nikhil.jpg',
      name: 'Nikhil Kamath',
      title: 'Co-founder & CFO',
      bio: 'Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.'
    },
    {
      image: 'media/images/kailash.jpg',
      name: 'Dr. Kailash Nadh',
      title: 'CTO',
      bio: 'Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.'
    },
    {
      image: 'media/images/Venu.jpg',
      name: 'Venu Madhav',
      title: 'COO',
      bio: 'Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.'
    },
    {
      image: 'media/images/Hanan.jpg',
      name: 'Hanan Delvi',
      title: 'CCO',
      bio: 'We take pride in the way we support our clients, and Hanan is responsible for this with his never-ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time.'
    },
    {
      image: 'media/images/Seema.jpg',
      name: 'Seema Patil',
      title: 'Director',
      bio: 'Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.'
    },
    {
      image: 'media/images/Karthik.jpg',
      name: 'Karthik Rangappa',
      title: 'Chief of Education',
      bio: `Karthik "Guru" Rangappa single-handedly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.`
    },
    {
      image: 'media/images/Austin.jpg',
      name: 'Austin Prakesh',
      title: 'Director Strategy',
      bio: 'Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organizations grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.'
    }
  ];

  // Initialize an array of booleans to track each card's open state
  const [openCards, setOpenCards] = useState(Array(profiles.length).fill(false));

  const toggle = index => {
    // Toggle the clicked card while keeping others intact
    const newOpenCards = [...openCards];
    newOpenCards[index] = !newOpenCards[index]; // Toggle the specific card
    setOpenCards(newOpenCards);
  };

  return (
    <div className="container">
      <div className="row">
        {profiles.map((profile, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card text-center">
              <img 
                src={profile.image} 
                alt={profile.name} 
                className="card-img-top rounded-circle mx-auto mt-3" 
                style={{ width: '200px', height: '200px', objectFit: 'cover' }} 
              />
              <div className="card-body">
                <h5 className="card-title">{profile.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{profile.title}</h6>
                <button className="btn btn-outline" onClick={() => toggle(index)}>
                  Bio {openCards[index] ? <i className="fa fa-arrow-up" aria-hidden="true"></i> : <i className="fa fa-arrow-down" style={{ marginLeft: "10px" }} aria-hidden="true"></i>}
                </button>
                <Collapse isOpen={openCards[index]}>
                  <div className="bio mt-3">
                    {profile.bio}
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCards;
