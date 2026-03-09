import { GetStaticProps } from 'next'

export default function WorkRedirect() {
  return null
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: '/projects',
      permanent: true,
    },
  }
}
