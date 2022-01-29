import React, { useState } from "react";
import "../index.css";

const Prayers = () => {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showThirdText, setShowThirdText] = useState(false);
  const [showFourthText, setShowFourthText] = useState(false);

  const handleShowText = () => {
    document.getElementById("hide").style.display = "none";
    setShowFirstText(true);
  };

  const handleHideText = () => {
    document.getElementById("hide").style.display = "inline";
    setShowFirstText(false);
  };
  return (
    <section className="container">
      <h1 className="wishes-heading">My Prayers For David</h1>
      <hr />
      <div className="mb-3 card">
        <img
          src={process.env.PUBLIC_URL + "/images/prayer.jpg"}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Prayer Life</h5>
          <p className="card-text">
            David, I pray that your prayer life will grow stronger in this
            season of your life, and that you would devote yourself to, continue
            earnestly in, and above all remain steadfast in prayer. Accoridng to
            our Lord Jesus in Luke 18:1, those words will become your daily
            reality so much so that you would be a living testimony of a
            Christian who truly has a vibrant prayer life. Furthermore, I pray
            that you would not just pray persistently, but a special grace to
            tarry for hours in long prayers will come upon you, in Jesus name.
            <button id="hide" className="show-text" onClick={handleShowText}>
              ...Read More
            </button>
            <br />
            <br />
            {showFirstText && (
              <p className="reveal-text">
                I also pray for you David, that a stronger passion for prayer
                will envelope you this season, so much so that you would
                literally long to pray every hour every day. Just as it was
                recorded about Jesus, in the garden of Gethsemane, such passion
                for prayer will come upon you strongly in Jesus name.
                <br />
                <br />
                Finally, I pray that you would be more thankful in prayer this
                season. As Ephesians 5:20 tells us to give thanks always, as
                Phillipians 4:6 says we should be anxious for nothing but give
                thanks for everything, and 1 Thessalonians 5:18 says
                thanksgiving is the will of God for us in Christ Jesus, this
                will be your reality in prayers this season in Jesus name.
                <button
                  id="hide"
                  className="show-text"
                  onClick={handleHideText}
                >
                  ...Show Less
                </button>
              </p>
            )}
          </p>
        </div>
      </div>

      <div className="mb-3 card">
        <img
          src={process.env.PUBLIC_URL + "/images/IMG_20220116_122343_108.jpg"}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Friendships</h5>
          <p className="card-text">
            Lord Jesus, I pray for David on this special day of his, that you
            give him a vibrant community of Christian friends to do life with. I
            thank you for the friends He has already got and how you have
            influenced his decision making in that area of his life, however, I
            pray that you cause him to find love, encouragement, support and
            upliftment from his friends.
            <button
              id="hide_2"
              className="show-text"
              onClick={() => {
                document.getElementById("hide_2").style.display = "none";
                setShowSecondText(true);
              }}
            >
              ...Read More
            </button>
            <br />
            <br />
            {showSecondText && (
              <p className="reveal-text">
                Lord, I pray that you would be present in all his friendships
                this year, even as he makes new friends, and that you would draw
                us all together in deeper fellowship with one another towards
                unity with you and your purpose. I pray that you would help heal
                any broken places in the corridors of his heart, and every
                discord that may have arisen, and that you may restore such
                godly friendships that have fallen apart. <br />
                <br />
                As you have said in your word in Colossians 3:12-13, Lord,
                please clothe David in compassion, kindness, humility,
                gentleness and patience, so that he can be patient with his
                friends and forgive them freely even as you have forgiven him.
                Shine your light in his friendships, so that all glory can
                return unto you. AMEN
                <button
                  id="hide_2"
                  className="show-text"
                  onClick={() => {
                    document.getElementById("hide_2").style.display = "none";
                    setShowSecondText(false);
                  }}
                >
                  ...Show Less
                </button>
              </p>
            )}
          </p>
        </div>
      </div>

      <div className="mb-3 card">
        <img
          src={process.env.PUBLIC_URL + "/images/relationship.webp"}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Relationship</h5>
          <p className="card-text">
            Father, you know David more than anyone else and you know that he
            needs a godly woman that would complement the grace of God upon his
            life. Lord, direct David's course towards finding a woman of worth,
            value and substance, a woman who will inspire him in godliness and
            holy living, so that your plans and purposes for his life would be
            rather fulfilled than thwarted.
            <button
              id="hide_3"
              className="show-text"
              onClick={() => {
                document.getElementById("hide_3").style.display = "none";
                setShowThirdText(true);
              }}
            >
              ...Read More
            </button>
            <br />
            <br />
            {showThirdText && (
              <p className="reveal-text">
                Father, we know that only you can lead a man towards finding the
                right woman, please do lead David in this course this year. Let
                your peace which passes all understanding guard his heart as he
                meets the right lady for him this year. This is my desire and
                earnest prayer for him, Lord, please let it be done in Jesus
                name. Amen
                <button
                  id="hide_2"
                  className="show-text"
                  onClick={() => {
                    document.getElementById("hide_2").style.display = "none";
                    setShowThirdText(false);
                  }}
                >
                  ...Show Less
                </button>
              </p>
            )}
          </p>
        </div>
      </div>

      <div className="mb-3 card">
        <img
          src={process.env.PUBLIC_URL + "/images/money.jpg"}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Finances</h5>
          <p className="card-text">
            Father, I thank you for the financial blessings that you have given
            to David, for you have promised to meet all his needs according to
            your riches in glory. David knows that he cannot trust in his job,
            or wits, neither can his intelligence sustain him, he knows you are
            his provider. Lord, therefore I pray that you prosper him the more
            this season and that you will keep financial anxiety far from him,
            so that he can focus on you.
            <button
              id="hide_4"
              className="show-text"
              onClick={() => {
                document.getElementById("hide_4").style.display = "none";
                setShowFourthText(true);
              }}
            >
              ...Read More
            </button>
            <br />
            <br />
            {showFourthText && (
              <p className="reveal-text">
                David is a giver, so generous a man, and your word promises us
                that a man is more blessed when he gives more than when he
                recieves. Therefore, I pray that yu will continually bless and
                increase David financially so that he can continue blessing the
                lives of others. Lord, I know that this season is going to be a
                season of all-round favour for David, please Lord let it be so.
                Amen
                <button
                  id="hide_4"
                  className="show-text"
                  onClick={() => {
                    document.getElementById("hide_4").style.display = "none";
                    setShowFourthText(false);
                  }}
                >
                  ...Show Less
                </button>
              </p>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prayers;
