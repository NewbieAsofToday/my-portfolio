import Head from "next/head";
import Link from "next/link";
import React from "react";
const about = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1>about page</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos soluta
          delectus cupiditate, natus necessitatibus sit repellat similique
          corrupti accusantium, sed consectetur veritatis odit iusto iste
          consequatur ut cumque est quasi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi in
          nesciunt asperiores repellendus id mollitia beatae commodi architecto
          tenetur veniam accusantium minus dicta pariatur voluptate deleniti
          porro, ex optio. Minus.
        </p>
        <Link href='/'>home</Link>
      </div>
    </>
  );
};

export default about;
