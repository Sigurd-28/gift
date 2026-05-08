import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";
import ship from "./assets/Ship.svg";
import theqr from "./assets/theqr.png";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showQrPopup, setShowQrPopup] = useState(false);

  const letterText = `Heyy idk what went through my head writing this letter. I probably won’t be sending this letter to you on your birthday, You probably won’t open this and I hope you won’t, I don’t want to cause you anymore pain, but if you are, press the x button after reading!

Happy birthday gwyn!! I really really really appreciate you. You’re really a mysterious person, and I find that very charming. I love how you genuinely care for your friends and that’s one of the things I like about you, you care for them too much to the point that you can’t even do selfish things anymore, while it has its charms, please focus on yourself din from time to time! It’s alright to be selfish once in a while! Anyways!!

When I first met you, you immediately caught my interest, because I know for sure that the mean face you were showing was fake!! HAHAHAHAHAH But you were cute!! I did not find you intimidating at all!!

On bantayanihan, I saw a side of you that made me admire you more! You were very professional and I found it so cool and very astig!! Also the geng geng song played that time is the only geng geng song I don’t mind listening because it’s the song that only we get the reference!!

Croc park was the yapper gwyn! I once again found a new side of you and it yaps a whole lot!! But I couldn’t get enough listening to it tho whahahahah!! You know, I’d die to have that conversation again because it’s where we actually started knowing eachother! If I could temporarily go back in time, I would surely go back there!!

You drove me crazy on full scale! You were sending me all sorts of signals but tbh with you, I really liked what you did, I just didn’t know how to react because it was all new!! But the part I loved the most was when we were talking about all sorts of stuff!! I wanna have that kind of conversation again!!

Okay that’s enough yapping!!

Gwyn, although we could not last long, although what we had was a mere fraction of what we’ve experienced and will experience, you will always have a special place in my heart and memory! This message will probably be the last you’ll ever hear from me, so I want you to live your life to the fullest! Be the best version of yourself even if I will no longer be in the life you’ll live because that’s what I truly believe that you deserve. You’re not the naut in the astronaut!!

Lastly, I love you my gwygwy :)`;

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
