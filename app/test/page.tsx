import styles from './test.module.scss';

const Home = (props: any) => (
  <main className={styles.main}>
    <div className={styles.container}>
      <p className={styles.title}>About Me</p>
      <p className={styles.about}>
        I'm a 20 y/o full-stack developer from Bangalore, India. I'm currently
        studying at DSCE. I'm currently working as a Software Development
        Engineer Intern at{' '}
        <a href="https://cloudsek.com/" target="_blank" className={styles.link}>
          CloudSEK
        </a>
        <br />
        <br />I tend to spend my free time working on side projects like{' '}
        <a
          href="https://mark3.vercel.app"
          target="_blank"
          className={styles.link}
        >
          Mark3
        </a>{' '}
        and{' '}
        <a
          href="https://cal-nu.vercel.app"
          target="_blank"
          className={styles.link}
        >
          Cal.ndr
        </a>
        , contributing to open source or practicing DSA.
        <br />
        <br />I absolutely love working with NextJs, React, and Typescript. I'm
        also learning backend development on the side. You can find my resume{' '}
        <a
          href="https://drive.google.com/file/d/1x35AKUlYyGMhfqAL0zIC1njdJ6TSflo-/view?usp=sharing"
          className={styles.link}
        >
          here
        </a>
        .
        <br />
        <br />
        You can often find me talking about tech, mechanical keyboards and Star
        Wars.
        <br />
        <br />
        If you have an interesting project or if you want to collab on a
        hackathon or just want to say hi, feel free to reach out to me via{' '}
        <a
          href="https://twitter.com/adarshsulegai50"
          target="_blank"
          className={styles.link}
        >
          Twitter
        </a>
        .
      </p>
    </div>
  </main>
);

export default Home;
