import { GetStaticProps, NextPage } from "next"

import { Homepage as HomepageComponent } from "../components/Homepage"

const HomePage: NextPage = () => {
  return <HomepageComponent></HomepageComponent>
}

export default HomePage

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      headerOnScroll: true,
    },
  }
}
