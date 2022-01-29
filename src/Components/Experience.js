import React from "react";
import "../index.css";

const Experience = () => {
  return (
    <section className="container">
      <div className="card">
        <img
          src={
            process.env.PUBLIC_URL + "/images/Screenshot_20210813-235740.png"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h2 className="card-title">
            My Experience With The Great Man - DAVID
          </h2>
          <hr />
          <p className="card-text">
            I remember how I met David in the university - Obafemi Awolowo
            University - to be more precise (we were only freshers then), as
            soon as I saw him, I instantly knew he was a believer, even though
            we had not even spoken to each other. Not too long after, we became
            friends and our friendship was fabricated upon scriptures and the
            dictates of God's word. <br />
            <br />
            David was a young man I so much admired, the scripture flowed freely
            from him, and you could tell that he knew the bible. David was
            God-sent to me, because at that point in my life, I was held bound
            by religion and had no idea of what Christianity was all about, even
            though I claimed to be a Christian. David taught me and showed me
            the way out of religion from God's word, and for the first time I
            understood God's love for me and his plans for my life. <br />
            <br />
            We graduated from the university, and as God would have it, David
            returned to Lagos to resume a job as a software developer in one of
            these tech firms, while I remained in Ile-Ife on account of ministry
            service. He never failed to support me, and would always send
            financial aid. A true friend and brother he was in all
            ramifications. <br />
            <br />
            During my days as a corp member during compulsory service year as a
            Nigerian Youth Service Corps (NYSC), David still supported me as
            best as he could - financially and more. I do not ever remember
            david ever saying "NO" to any request i made of him. Even when my
            service year was all over, and I decided to stay behind for some
            ministry work, as the Lord inspired me, David still came through for
            me. What a friend and brother he is. <br />
            <br />
            David was still the one who inspired me to join the tech world and
            become a software developer. Through the process of learning, he
            inspired me and gave me competent materials to study. He often sent
            me links for tech jobs, and one out of the others he sent has
            finally accepted me to work with them. <br />
            <br />
            I CELEBRATE DAVID TODAY AND ALWAYS. I LOVE YOU BROTHER.
            <br /> <br />
            <h3 className="thanks">
              THANK YOU FOR ALL YOU ARE AND HAVE BEEN TO ME.
              <br />I DEEPLY APPRECIATE IT MY BROTHER
            </h3>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
