import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";
import ship from "./assets/Ship.svg";
import theqr from "./assets/theqr.png";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showQrPopup, setShowQrPopup] = useState(false);

  const letterText = `Happy birthday gwyn!! I really really really appreciate you. You’re really a mysterious person, and I find that very charming. I love how you genuinely care for your friends and that’s one of the things I like about you, you care for them too much to the point that you can’t even do selfish things anymore, while it has its charms, please focus on yourself din from time to time! It’s alright to be selfish once in a while! Anyways!! 

When I first met you, you immediately caught my interest, because I know for sure that the mean face you were showing was fake!! HAHAHAHAHAH But you were cute!! I did not find you intimidating at all!! 

On bantayanihan, I saw a side of you that made me admire you more! You were very professional and I found it so cool and very astig!! Also the geng geng song played that time is the only geng geng song I don’t mind listening because it’s the song that only we get the reference!! 

Croc park was the yapper gwyn! I once again found a new side of you and it yaps a whole lot!! But I couldn’t get enough listening to it tho whahahahah!! You know, I’d die to have that conversation again because it’s where we actually started knowing eachother! If I could temporarily go back in time, I would surely go back there!!

You drove me crazy on full scale! You were sending me all sorts of signals but tbh with you, I really liked what you did, I just didn’t know how to react because it was all new!! But the part I loved the most was when we were talking about all sorts of stuff!! I wanna have that kind of conversation again!!

Okay that’s enough reminiscing!! 

Gwyn, I love that you’re very goal-driven, you might think that it’s not a good thing to have for the other people you’re with, but I think that it’s one of the most admirable and respectable part of you. I’ve known people that have goals but I’ve never seen someone as dedicated to it as you. Don’t ever lose that. No matter what happens

I have NEVER seen someone with so much love for food as much as you, THATS LIKE YOUR NUMBER ONE MOST CUTE AND ATTRACTIVE PART OF YOUR CHARACTER!! If it comes to food jud, gwygwy never fails to deliver!! 

But more than that, your love for cooking is something I find unique about you, the belief behind your cooking is so unique and it comes from a really genuine place, I wish you’ll cherish that part of you (I bet you’ll reply “I know” pero bahala ka jan)

If I were to describe you, you’d be a rose! And with every petal, is a new side to gwyn for me to discover. Lam m ba, even if I did reach the point where I am worthy of being in your dump, I still believe that there will still be new sides of you to discover, and I’m very eager to discover them all! 

The road ahead will be tough! Especially with everything going on, but I want you to know that everything given to you is given with reason. And it will really test you! It might even drive you to your limits! But during that time, I’ll be here for you! Your normal student-driven human dictionary!

And if you’ll ask me why I fell in-love with you, I’ll reiterate what jake said from adventure time. 

“It’s all about the Ba-dumps in your heart!”

Lastly, I love you my gwygwy :) Press the X button!`;

  const words = letterText.split(/(\s+)/);

  return (
    <div className="App">
      <motion.img
        src={ship}
        alt="Ship"
        className="ship"
        onClick={() => setShowPopup(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {showPopup && (
        <div className="popup-bg">
          <div className="popup">
            <button className="x-button" onClick={() => setShowQrPopup(true)}>
              ×
            </button>

            <div className="screen">
              <motion.p
                className="letter-text"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
              >
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: {
                        visibility: "hidden",
                      },
                      visible: {
                        visibility: "visible",
                        transition: {
                          duration: 0,
                        },
                      },
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>
            </div>
          </div>

          {showQrPopup && (
            <div className="qr-popup-bg">
              <div className="qr-popup">
                <img src={theqr} alt="QR Code" className="qr-image" />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
